import { describe, it, expect } from 'vitest';
import {
  createPlan,
  setTermCourses,
  prefillFromRecommended,
  getTermLabels,
  getAllTermLabels,
} from '../gameState';
import { CurriculumPlan, Curriculum } from '../../types';

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
