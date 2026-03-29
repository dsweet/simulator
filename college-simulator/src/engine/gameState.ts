import { GameState, SchoolRun, TermSelection, YearRating, OutcomeRating, SCHOOL_ALIASES, Track } from '../types';
import { schools } from '../data/schools';

const STORAGE_KEY = 'college-simulator-state';

export function createInitialState(): GameState {
  return {
    runs: [],
    currentRun: undefined,
    revealed: false,
    peekUsed: false,
  };
}

export function loadState(): GameState {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  } catch { /* ignore parse errors */ }
  return createInitialState();
}

export function saveState(state: GameState): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function getAvailableSchools(state: GameState, track: Track): string[] {
  return schools
    .filter(s => s.track === track)
    .map(s => s.id);
}

export function getUnplayedSchools(state: GameState, track: Track): string[] {
  const completedIds = new Set(state.runs.filter(r => r.completed).map(r => r.schoolId));
  return schools
    .filter(s => s.track === track && !completedIds.has(s.id))
    .map(s => s.id);
}

export function cleanupAbandonedRuns(state: GameState): GameState {
  const cleaned = state.runs.filter(r => r.completed);
  if (cleaned.length === state.runs.length) return state;
  return { ...state, runs: cleaned, currentRun: undefined };
}

export function rollRandomSchool(state: GameState, track: Track): string | null {
  // Prefer unplayed schools, but allow replays of completed ones
  const unplayed = getUnplayedSchools(state, track);
  const pool = unplayed.length > 0 ? unplayed : getAvailableSchools(state, track);
  if (pool.length === 0) return null;
  return pool[Math.floor(Math.random() * pool.length)];
}

export function getNextAlias(state: GameState): string {
  return SCHOOL_ALIASES[state.runs.length] || `School ${state.runs.length + 1}`;
}

export function startRun(state: GameState, schoolId: string): GameState {
  const alias = getNextAlias(state);
  const newRun: SchoolRun = {
    schoolId,
    alias,
    termSelections: [],
    yearRatings: [],
    outcomeRating: undefined,
    yearsCompleted: 0,
    completed: false,
  };

  return {
    ...state,
    runs: [...state.runs, newRun],
    currentRun: schoolId,
  };
}

export function rewindToTerm(state: GameState, schoolId: string, keepTermCount: number): GameState {
  return {
    ...state,
    runs: state.runs.map(run =>
      run.schoolId === schoolId
        ? { ...run, termSelections: run.termSelections.slice(0, keepTermCount) }
        : run
    ),
  };
}

export function addTermSelection(state: GameState, schoolId: string, term: TermSelection): GameState {
  return {
    ...state,
    runs: state.runs.map(run =>
      run.schoolId === schoolId
        ? { ...run, termSelections: [...run.termSelections, term] }
        : run
    ),
  };
}

export function addYearRating(state: GameState, schoolId: string, rating: YearRating): GameState {
  return {
    ...state,
    runs: state.runs.map(run =>
      run.schoolId === schoolId
        ? { ...run, yearRatings: [...run.yearRatings, rating], yearsCompleted: rating.year }
        : run
    ),
  };
}

export function addOutcomeRating(state: GameState, schoolId: string, rating: OutcomeRating): GameState {
  return {
    ...state,
    runs: state.runs.map(run =>
      run.schoolId === schoolId
        ? { ...run, outcomeRating: rating, completed: true }
        : run
    ),
    currentRun: undefined,
  };
}

export function canPeek(state: GameState): boolean {
  const completedRuns = state.runs.filter(r => r.completed).length;
  return completedRuns >= 3 && !state.peekUsed;
}

export function getTotalSchoolCount(): number {
  return schools.length;
}

export function canFullReveal(state: GameState): boolean {
  return state.runs.filter(r => r.completed).length >= schools.length;
}

export function getCompletedRunCount(state: GameState): number {
  return state.runs.filter(r => r.completed).length;
}

export function resetState(): GameState {
  localStorage.removeItem(STORAGE_KEY);
  return createInitialState();
}
