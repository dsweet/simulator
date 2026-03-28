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
      freedom: 3,
      intellectualEngagement: 5,
      pathMatch: 4,
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
