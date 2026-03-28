import { describe, it, expect, beforeEach } from 'vitest';
import {
  createInitialState,
  startRun,
  addTermSelection,
  addYearRating,
  addOutcomeRating,
  canPeek,
  canFullReveal,
  getCompletedRunCount,
  getAvailableSchools,
  getUnplayedSchools,
  cleanupAbandonedRuns,
  rewindToTerm,
  rollRandomSchool,
  resetState,
} from '../gameState';
import { GameState } from '../../types';

let state: GameState;

beforeEach(() => {
  state = createInitialState();
});

describe('createInitialState', () => {
  it('creates empty state', () => {
    expect(state.runs).toHaveLength(0);
    expect(state.currentRun).toBeUndefined();
    expect(state.revealed).toBe(false);
    expect(state.peekUsed).toBe(false);
  });
});

describe('startRun', () => {
  it('adds a run with the given school ID', () => {
    const updated = startRun(state, 'uw');
    expect(updated.runs).toHaveLength(1);
    expect(updated.runs[0].schoolId).toBe('uw');
    expect(updated.currentRun).toBe('uw');
  });

  it('assigns sequential aliases', () => {
    let s = startRun(state, 'uw');
    expect(s.runs[0].alias).toBe('School Alpha');
    s = startRun(s, 'ups');
    expect(s.runs[1].alias).toBe('School Beta');
  });

  it('initializes run with empty state', () => {
    const updated = startRun(state, 'uw');
    const run = updated.runs[0];
    expect(run.termSelections).toHaveLength(0);
    expect(run.yearRatings).toHaveLength(0);
    expect(run.completed).toBe(false);
    expect(run.yearsCompleted).toBe(0);
  });
});

describe('addTermSelection', () => {
  it('adds term selection to the correct run', () => {
    let s = startRun(state, 'uw');
    s = addTermSelection(s, 'uw', { termLabel: 'Fall Year 1', courses: ['HCDE200', 'MATH124'] });
    expect(s.runs[0].termSelections).toHaveLength(1);
    expect(s.runs[0].termSelections[0].courses).toEqual(['HCDE200', 'MATH124']);
  });

  it('does not modify other runs', () => {
    let s = startRun(state, 'uw');
    s = startRun(s, 'ups');
    s = addTermSelection(s, 'uw', { termLabel: 'Fall Year 1', courses: ['HCDE200'] });
    expect(s.runs[0].termSelections).toHaveLength(1);
    expect(s.runs[1].termSelections).toHaveLength(0);
  });
});

describe('addYearRating', () => {
  it('adds rating and updates yearsCompleted', () => {
    let s = startRun(state, 'uw');
    const rating = {
      year: 1,
      courseInterest: 4,
      overallAppeal: 4,
      notes: 'Good year',
    };
    s = addYearRating(s, 'uw', rating);
    expect(s.runs[0].yearRatings).toHaveLength(1);
    expect(s.runs[0].yearsCompleted).toBe(1);
  });
});

describe('addOutcomeRating', () => {
  it('marks run as completed and clears currentRun', () => {
    let s = startRun(state, 'uw');
    s = addOutcomeRating(s, 'uw', { appeal: 4, notes: 'Looks good' });
    expect(s.runs[0].completed).toBe(true);
    expect(s.runs[0].outcomeRating).toBeDefined();
    expect(s.currentRun).toBeUndefined();
  });
});

describe('canPeek', () => {
  it('returns false with fewer than 3 completed runs', () => {
    let s = startRun(state, 'uw');
    s = addOutcomeRating(s, 'uw', { appeal: 4, notes: '' });
    s = startRun(s, 'ups');
    s = addOutcomeRating(s, 'ups', { appeal: 3, notes: '' });
    expect(canPeek(s)).toBe(false);
  });

  it('returns true with 3+ completed runs', () => {
    let s = state;
    for (const id of ['uw', 'ups', 'richmond']) {
      s = startRun(s, id);
      s = addOutcomeRating(s, id, { appeal: 4, notes: '' });
    }
    expect(canPeek(s)).toBe(true);
  });

  it('returns false after peek is used', () => {
    let s = state;
    for (const id of ['uw', 'ups', 'richmond']) {
      s = startRun(s, id);
      s = addOutcomeRating(s, id, { appeal: 4, notes: '' });
    }
    s = { ...s, peekUsed: true };
    expect(canPeek(s)).toBe(false);
  });
});

describe('canFullReveal', () => {
  it('returns false with fewer than 6 completed runs', () => {
    let s = state;
    for (const id of ['uw', 'ups', 'richmond', 'rochester', 'ucsd']) {
      s = startRun(s, id);
      s = addOutcomeRating(s, id, { appeal: 4, notes: '' });
    }
    expect(canFullReveal(s)).toBe(false);
  });

  it('returns true with 6 completed runs', () => {
    let s = state;
    for (const id of ['uw', 'ups', 'richmond', 'rochester', 'ucsd', 'ucla']) {
      s = startRun(s, id);
      s = addOutcomeRating(s, id, { appeal: 4, notes: '' });
    }
    expect(canFullReveal(s)).toBe(true);
  });
});

describe('getCompletedRunCount', () => {
  it('counts only completed runs', () => {
    let s = startRun(state, 'uw');
    s = addOutcomeRating(s, 'uw', { appeal: 4, notes: '' });
    s = startRun(s, 'ups'); // not completed
    expect(getCompletedRunCount(s)).toBe(1);
  });
});

describe('getAvailableSchools', () => {
  it('always returns all schools in the track', () => {
    let s = startRun(state, 'ups');
    s = { ...s, runs: s.runs.map(r => r.schoolId === 'ups' ? { ...r, completed: true } : r) };
    const available = getAvailableSchools(s, 'economics');
    expect(available).toContain('ups');
    expect(available.length).toBe(5);
  });

  it('returns only schools matching the track', () => {
    const available = getAvailableSchools(state, 'engineering-design');
    expect(available).toEqual(['uw']);
  });
});

describe('getUnplayedSchools', () => {
  it('returns all schools when none completed', () => {
    const unplayed = getUnplayedSchools(state, 'economics');
    expect(unplayed.length).toBe(5);
  });

  it('excludes completed schools', () => {
    let s = startRun(state, 'ups');
    s = addOutcomeRating(s, 'ups', { appeal: 4, notes: '' });
    const unplayed = getUnplayedSchools(s, 'economics');
    expect(unplayed).not.toContain('ups');
    expect(unplayed.length).toBe(4);
  });

  it('returns empty when all schools in track are completed', () => {
    let s = state;
    for (const id of ['ups', 'richmond', 'rochester', 'ucsd', 'ucla']) {
      s = startRun(s, id);
      s = addOutcomeRating(s, id, { appeal: 3, notes: '' });
    }
    expect(getUnplayedSchools(s, 'economics')).toHaveLength(0);
  });
});

describe('cleanupAbandonedRuns', () => {
  it('removes incomplete runs', () => {
    let s = startRun(state, 'uw'); // incomplete
    const cleaned = cleanupAbandonedRuns(s);
    expect(cleaned.runs).toHaveLength(0);
    expect(cleaned.currentRun).toBeUndefined();
  });

  it('preserves completed runs', () => {
    let s = startRun(state, 'uw');
    s = addOutcomeRating(s, 'uw', { appeal: 4, notes: '' });
    s = startRun(s, 'ups'); // incomplete
    const cleaned = cleanupAbandonedRuns(s);
    expect(cleaned.runs).toHaveLength(1);
    expect(cleaned.runs[0].schoolId).toBe('uw');
  });

  it('returns same reference when no abandoned runs exist', () => {
    let s = startRun(state, 'uw');
    s = addOutcomeRating(s, 'uw', { appeal: 4, notes: '' });
    const cleaned = cleanupAbandonedRuns(s);
    expect(cleaned).toBe(s);
  });
});

describe('rewindToTerm', () => {
  it('slices termSelections to keepTermCount', () => {
    let s = startRun(state, 'uw');
    s = addTermSelection(s, 'uw', { termLabel: 'Fall Year 1', courses: ['A'] });
    s = addTermSelection(s, 'uw', { termLabel: 'Winter Year 1', courses: ['B'] });
    s = addTermSelection(s, 'uw', { termLabel: 'Spring Year 1', courses: ['C'] });
    const rewound = rewindToTerm(s, 'uw', 1);
    expect(rewound.runs[0].termSelections).toHaveLength(1);
    expect(rewound.runs[0].termSelections[0].termLabel).toBe('Fall Year 1');
  });

  it('does not modify other runs', () => {
    let s = startRun(state, 'uw');
    s = addTermSelection(s, 'uw', { termLabel: 'Fall Year 1', courses: ['A'] });
    s = addTermSelection(s, 'uw', { termLabel: 'Winter Year 1', courses: ['B'] });
    s = startRun(s, 'ups');
    s = addTermSelection(s, 'ups', { termLabel: 'Fall Year 1', courses: ['X'] });
    const rewound = rewindToTerm(s, 'uw', 1);
    expect(rewound.runs[1].termSelections).toHaveLength(1);
    expect(rewound.runs[1].termSelections[0].courses).toEqual(['X']);
  });

  it('keeps all terms when keepTermCount >= existing count', () => {
    let s = startRun(state, 'uw');
    s = addTermSelection(s, 'uw', { termLabel: 'Fall Year 1', courses: ['A'] });
    const rewound = rewindToTerm(s, 'uw', 5);
    expect(rewound.runs[0].termSelections).toHaveLength(1);
  });
});

describe('rollRandomSchool', () => {
  it('returns a school from the correct track', () => {
    const result = rollRandomSchool(state, 'engineering-design');
    expect(result).toBe('uw');
  });

  it('prefers unplayed schools over completed ones', () => {
    // Complete all econ schools except ucla
    let s = state;
    for (const id of ['ups', 'richmond', 'rochester', 'ucsd']) {
      s = startRun(s, id);
      s = addOutcomeRating(s, id, { appeal: 3, notes: '' });
    }
    const result = rollRandomSchool(s, 'economics');
    expect(result).toBe('ucla');
  });
});

describe('resetState', () => {
  it('returns a fresh initial state', () => {
    // Mock localStorage since it's not available in Node
    const mockStorage: Record<string, string> = {};
    globalThis.localStorage = {
      getItem: (key: string) => mockStorage[key] ?? null,
      setItem: (key: string, value: string) => { mockStorage[key] = value; },
      removeItem: (key: string) => { delete mockStorage[key]; },
      clear: () => { Object.keys(mockStorage).forEach(k => delete mockStorage[k]); },
      length: 0,
      key: () => null,
    };
    const fresh = resetState();
    expect(fresh.runs).toHaveLength(0);
    expect(fresh.currentRun).toBeUndefined();
    expect(fresh.revealed).toBe(false);
    expect(fresh.peekUsed).toBe(false);
  });
});
