import { describe, it, expect } from 'vitest';
import {
  createPlan,
  setTermCourses,
  prefillFromRecommended,
  autofillPlan,
  getTermLabels,
  getAllTermLabels,
} from '../gameState';
import { CurriculumPlan, Curriculum } from '../../types';
import { CreditSummary } from '../creditEvaluator';

describe('createPlan', () => {
  it('creates a plan with the given school ID', () => {
    const plan = createPlan('uw');
    expect(plan.schoolId).toBe('uw');
    expect(plan.termCourses).toEqual({});
    expect(plan.createdAt).toBeTruthy();
  });
});

describe('setTermCourses', () => {
  it('sets courses for a term', () => {
    const plan = createPlan('uw');
    const updated = setTermCourses(plan, 'Fall Year 1', ['HCDE200', 'MATH124']);
    expect(updated.termCourses['Fall Year 1']).toEqual(['HCDE200', 'MATH124']);
  });

  it('preserves other terms', () => {
    let plan = createPlan('uw');
    plan = setTermCourses(plan, 'Fall Year 1', ['A']);
    plan = setTermCourses(plan, 'Winter Year 1', ['B']);
    expect(plan.termCourses['Fall Year 1']).toEqual(['A']);
    expect(plan.termCourses['Winter Year 1']).toEqual(['B']);
  });

  it('replaces courses for an existing term', () => {
    let plan = createPlan('uw');
    plan = setTermCourses(plan, 'Fall Year 1', ['A']);
    plan = setTermCourses(plan, 'Fall Year 1', ['B', 'C']);
    expect(plan.termCourses['Fall Year 1']).toEqual(['B', 'C']);
  });
});

describe('prefillFromRecommended', () => {
  it('fills terms from recommended sequence', () => {
    const plan = createPlan('test');
    const curriculum: Curriculum = {
      schoolId: 'test',
      program: 'Test',
      degreeRequirements: {
        totalCredits: 180,
        majorCredits: 60,
        genEdCredits: 40,
        electiveCredits: 80,
        majorCourses: ['A', 'B'],
        genEdCategories: [],
      },
      courses: [
        { id: 'A', title: 'A', description: '', credits: 5, category: 'major-required', interestTags: [], prereqs: [] },
        { id: 'B', title: 'B', description: '', credits: 5, category: 'major-required', interestTags: [], prereqs: [] },
        { id: 'C', title: 'C', description: '', credits: 5, category: 'elective', interestTags: [], prereqs: [] },
      ],
      recommendedSequence: {
        years: 1,
        terms: [
          { termLabel: 'Fall Year 1', courses: ['A', 'C'], locked: [true, false] },
          { termLabel: 'Winter Year 1', courses: ['B'], locked: [true] },
        ],
      },
    };

    const filled = prefillFromRecommended(plan, curriculum, new Set());
    expect(filled.termCourses['Fall Year 1']).toEqual(['A', 'C']);
    expect(filled.termCourses['Winter Year 1']).toEqual(['B']);
  });

  it('excludes credited courses', () => {
    const plan = createPlan('test');
    const curriculum: Curriculum = {
      schoolId: 'test',
      program: 'Test',
      degreeRequirements: {
        totalCredits: 180,
        majorCredits: 60,
        genEdCredits: 40,
        electiveCredits: 80,
        majorCourses: ['A'],
        genEdCategories: [],
      },
      courses: [
        { id: 'A', title: 'A', description: '', credits: 5, category: 'major-required', interestTags: [], prereqs: [] },
        { id: 'B', title: 'B', description: '', credits: 5, category: 'elective', interestTags: [], prereqs: [] },
      ],
      recommendedSequence: {
        years: 1,
        terms: [
          { termLabel: 'Fall Year 1', courses: ['A', 'B'], locked: [true, false] },
        ],
      },
    };

    const filled = prefillFromRecommended(plan, curriculum, new Set(['A']));
    expect(filled.termCourses['Fall Year 1']).toEqual(['B']);
  });

  it('returns plan unchanged when no recommended sequence', () => {
    const plan = createPlan('test');
    const curriculum: Curriculum = {
      schoolId: 'test',
      program: 'Test',
      degreeRequirements: {
        totalCredits: 180,
        majorCredits: 60,
        genEdCredits: 40,
        electiveCredits: 80,
        majorCourses: [],
        genEdCategories: [],
      },
      courses: [],
    };

    const result = prefillFromRecommended(plan, curriculum, new Set());
    expect(result).toBe(plan);
  });
});

describe('autofillPlan', () => {
  const emptyCreditSummary: CreditSummary = {
    totalCredits: 0,
    results: [],
    satisfiedGenEds: [],
    diplomaBonus: 0,
    uncappedTotal: 0,
    creditCap: null,
  };

  const makeCurriculum = (): Curriculum => ({
    schoolId: 'test',
    program: 'Test',
    degreeRequirements: {
      totalCredits: 32,
      majorCredits: 10,
      genEdCredits: 6,
      electiveCredits: 16,
      majorCourses: ['ECON101', 'ECON201', 'ECON301'],
      genEdCategories: [
        { id: 'writing', name: 'Writing', creditsRequired: 1, satisfiedBy: ['WRT100'] },
      ],
    },
    courses: [
      { id: 'ECON101', title: 'Intro', description: '', credits: 1, category: 'major-required', interestTags: [], prereqs: [] },
      { id: 'ECON201', title: 'Intermediate', description: '', credits: 1, category: 'major-required', interestTags: [], prereqs: ['ECON101'] },
      { id: 'ECON301', title: 'Advanced', description: '', credits: 1, category: 'major-required', interestTags: [], prereqs: ['ECON201'] },
      { id: 'WRT100', title: 'Writing', description: '', credits: 1, category: 'gen-ed', interestTags: [], prereqs: [], genEdReqs: ['writing'] },
      { id: 'ART100', title: 'Art', description: '', credits: 1, category: 'elective', interestTags: [], prereqs: [] },
      { id: 'ART200', title: 'Art II', description: '', credits: 1, category: 'elective', interestTags: [], prereqs: ['ART100'] },
    ],
    recommendedSequence: {
      years: 1,
      terms: [
        { termLabel: 'Fall Year 1', courses: ['ECON101'], locked: [true] },
      ],
    },
  });

  it('places recommended courses and fills remaining major/gen-ed/electives', () => {
    const plan = createPlan('test');
    const curriculum = makeCurriculum();
    const filled = autofillPlan(plan, curriculum, new Set(), emptyCreditSummary, 'semester');

    // ECON101 should be in Fall Year 1 (from recommended)
    expect(filled.termCourses['Fall Year 1']).toContain('ECON101');

    // ECON201 needs ECON101 as prereq, so it must come after Fall Year 1
    const allLabels = getAllTermLabels('semester');
    const econ201Term = allLabels.find(l => filled.termCourses[l]?.includes('ECON201'));
    expect(econ201Term).toBeTruthy();
    expect(allLabels.indexOf(econ201Term!)).toBeGreaterThan(allLabels.indexOf('Fall Year 1'));

    // ECON301 needs ECON201, so it must come even later
    const econ301Term = allLabels.find(l => filled.termCourses[l]?.includes('ECON301'));
    expect(econ301Term).toBeTruthy();
    expect(allLabels.indexOf(econ301Term!)).toBeGreaterThan(allLabels.indexOf(econ201Term!));

    // Gen-ed (WRT100) should be placed somewhere
    const wrtTerm = allLabels.find(l => filled.termCourses[l]?.includes('WRT100'));
    expect(wrtTerm).toBeTruthy();
  });

  it('skips credited courses', () => {
    const plan = createPlan('test');
    const curriculum = makeCurriculum();
    const filled = autofillPlan(plan, curriculum, new Set(['ECON101']), emptyCreditSummary, 'semester');

    // ECON101 should NOT be placed (it's credited)
    const allLabels = getAllTermLabels('semester');
    const hasEcon101 = allLabels.some(l => filled.termCourses[l]?.includes('ECON101'));
    expect(hasEcon101).toBe(false);

    // ECON201 should still be placeable (its prereq ECON101 is credited)
    const econ201Term = allLabels.find(l => filled.termCourses[l]?.includes('ECON201'));
    expect(econ201Term).toBeTruthy();
  });

  it('respects prereq chains for electives', () => {
    const plan = createPlan('test');
    const curriculum = makeCurriculum();
    const filled = autofillPlan(plan, curriculum, new Set(), emptyCreditSummary, 'semester');

    const allLabels = getAllTermLabels('semester');
    const art100Term = allLabels.find(l => filled.termCourses[l]?.includes('ART100'));
    const art200Term = allLabels.find(l => filled.termCourses[l]?.includes('ART200'));

    if (art100Term && art200Term) {
      expect(allLabels.indexOf(art200Term)).toBeGreaterThan(allLabels.indexOf(art100Term));
    }
  });
});

describe('getTermLabels', () => {
  it('returns 3 terms for quarters', () => {
    const labels = getTermLabels('quarter', 2);
    expect(labels).toEqual(['Fall Year 2', 'Winter Year 2', 'Spring Year 2']);
  });

  it('returns 2 terms for semesters', () => {
    const labels = getTermLabels('semester', 1);
    expect(labels).toEqual(['Fall Year 1', 'Spring Year 1']);
  });
});

describe('getAllTermLabels', () => {
  it('returns 12 terms for 4-year quarter system', () => {
    const labels = getAllTermLabels('quarter');
    expect(labels).toHaveLength(12);
    expect(labels[0]).toBe('Fall Year 1');
    expect(labels[11]).toBe('Spring Year 4');
  });

  it('returns 8 terms for 4-year semester system', () => {
    const labels = getAllTermLabels('semester');
    expect(labels).toHaveLength(8);
    expect(labels[0]).toBe('Fall Year 1');
    expect(labels[7]).toBe('Spring Year 4');
  });
});
