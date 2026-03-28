import { describe, it, expect } from 'vitest';
import { initializeProgress, addCourseToProgress, checkPrereqs, computeFullProgress } from '../progressTracker';
import { CreditSummary } from '../creditEvaluator';
import { Curriculum, Course } from '../../types';

const mockCurriculum: Curriculum = {
  schoolId: 'test',
  program: 'Test Economics',
  degreeRequirements: {
    totalCredits: 120,
    majorCredits: 40,
    genEdCredits: 40,
    electiveCredits: 40,
    majorCourses: ['ECON101', 'ECON102', 'MATH101'],
    genEdCategories: [
      { id: 'writing', name: 'Writing', creditsRequired: 6, satisfiedBy: ['ENGL101', 'ENGL102'] },
      { id: 'quantitative', name: 'Quantitative Reasoning', creditsRequired: 4, satisfiedBy: ['MATH101', 'STAT101'] },
      { id: 'natural-science', name: 'Natural Science', creditsRequired: 8, satisfiedBy: ['PHYS101', 'BIO101'] },
    ],
  },
  courses: [
    { id: 'ECON101', title: 'Intro Micro', description: '', credits: 4, category: 'major-required', interestTags: [], prereqs: [] },
    { id: 'ECON102', title: 'Intro Macro', description: '', credits: 4, category: 'major-required', interestTags: [], prereqs: ['ECON101'] },
    { id: 'MATH101', title: 'Calculus', description: '', credits: 4, category: 'major-required', interestTags: [], prereqs: [], genEdReqs: ['quantitative'] },
    { id: 'ENGL101', title: 'Writing I', description: '', credits: 3, category: 'gen-ed', interestTags: [], prereqs: [], genEdReqs: ['writing'] },
    { id: 'ENGL102', title: 'Writing II', description: '', credits: 3, category: 'gen-ed', interestTags: [], prereqs: ['ENGL101'], genEdReqs: ['writing'] },
    { id: 'ART100', title: 'Ceramics', description: '', credits: 4, category: 'elective', interestTags: ['ceramics'], prereqs: [] },
    { id: 'PHYS101', title: 'Physics', description: '', credits: 4, category: 'gen-ed', interestTags: [], prereqs: [], genEdReqs: ['natural-science'] },
    { id: 'BIO101', title: 'Biology', description: '', credits: 4, category: 'gen-ed', interestTags: [], prereqs: [], genEdReqs: ['natural-science'] },
  ],
};

const emptyCreditSummary: CreditSummary = {
  totalCredits: 0,
  results: [],
  diplomaBonus: 0,
  satisfiedGenEds: [],
};

const creditWithQuantitative: CreditSummary = {
  totalCredits: 5,
  results: [{ examName: 'AP Stats', examType: 'AP', subject: 'Statistics', score: 4, isPending: false, creditsAwarded: 5, satisfiedGenEds: ['quantitative'] }],
  diplomaBonus: 0,
  satisfiedGenEds: ['quantitative'],
};

describe('initializeProgress', () => {
  it('initializes with zero completed courses', () => {
    const progress = initializeProgress(mockCurriculum, emptyCreditSummary);
    expect(progress.majorCoursesCompleted).toHaveLength(0);
    expect(progress.majorCoursesRemaining).toEqual(['ECON101', 'ECON102', 'MATH101']);
  });

  it('includes AP/IB credits in total', () => {
    const progress = initializeProgress(mockCurriculum, creditWithQuantitative);
    expect(progress.totalCreditsEarned).toBe(5);
  });

  it('marks gen-eds satisfied by AP/IB credit', () => {
    const progress = initializeProgress(mockCurriculum, creditWithQuantitative);
    expect(progress.genEdsSatisfied['quantitative'].satisfied).toBe(true);
    expect(progress.genEdsSatisfied['writing'].satisfied).toBe(false);
  });

  it('marks major courses completed when AP/IB courseEquivalent matches', () => {
    const creditWithMajorCourse: CreditSummary = {
      totalCredits: 5,
      results: [{ examName: 'AP Calc', examType: 'AP', subject: 'Math', score: 5, isPending: false, creditsAwarded: 4, courseEquivalent: 'MATH 101', satisfiedGenEds: [] }],
      diplomaBonus: 0,
      satisfiedGenEds: [],
    };
    const progress = initializeProgress(mockCurriculum, creditWithMajorCourse);
    expect(progress.majorCoursesCompleted).toContain('MATH101');
    expect(progress.majorCoursesRemaining).not.toContain('MATH101');
  });

  it('splits multi-course equivalents like "ECON 101/102" and matches both', () => {
    const creditWithMulti: CreditSummary = {
      totalCredits: 8,
      results: [{ examName: 'IB Econ HL', examType: 'IB', subject: 'Economics', score: 6, isPending: false, creditsAwarded: 8, courseEquivalent: 'ECON 101/102', satisfiedGenEds: [] }],
      diplomaBonus: 0,
      satisfiedGenEds: [],
    };
    const progress = initializeProgress(mockCurriculum, creditWithMulti);
    expect(progress.majorCoursesCompleted).toContain('ECON101');
    expect(progress.majorCoursesCompleted).toContain('ECON102');
    expect(progress.majorCoursesRemaining).toEqual(['MATH101']);
  });

  it('does not mark major courses when courseEquivalent is missing', () => {
    const creditWithoutEquiv: CreditSummary = {
      totalCredits: 5,
      results: [{ examName: 'AP Stats', examType: 'AP', subject: 'Statistics', score: 4, isPending: false, creditsAwarded: 5, satisfiedGenEds: ['quantitative'] }],
      diplomaBonus: 0,
      satisfiedGenEds: ['quantitative'],
    };
    const progress = initializeProgress(mockCurriculum, creditWithoutEquiv);
    expect(progress.majorCoursesCompleted).toHaveLength(0);
  });
});

describe('addCourseToProgress', () => {
  it('adds credits and marks major course as completed', () => {
    const initial = initializeProgress(mockCurriculum, emptyCreditSummary);
    const econ101 = mockCurriculum.courses.find(c => c.id === 'ECON101')!;
    const updated = addCourseToProgress(initial, econ101, mockCurriculum);

    expect(updated.majorCoursesCompleted).toContain('ECON101');
    expect(updated.majorCoursesRemaining).not.toContain('ECON101');
    expect(updated.totalCreditsEarned).toBe(4);
  });

  it('satisfies gen-ed requirements when course has genEdReqs', () => {
    const initial = initializeProgress(mockCurriculum, emptyCreditSummary);
    const engl101 = mockCurriculum.courses.find(c => c.id === 'ENGL101')!;
    const updated = addCourseToProgress(initial, engl101, mockCurriculum);

    expect(updated.genEdsSatisfied['writing'].creditsEarned).toBe(3);
    expect(updated.genEdsSatisfied['writing'].satisfied).toBe(false); // Need 6, have 3
  });

  it('marks gen-ed as satisfied when credits reach required', () => {
    let progress = initializeProgress(mockCurriculum, emptyCreditSummary);
    const engl101 = mockCurriculum.courses.find(c => c.id === 'ENGL101')!;
    const engl102 = mockCurriculum.courses.find(c => c.id === 'ENGL102')!;
    progress = addCourseToProgress(progress, engl101, mockCurriculum);
    progress = addCourseToProgress(progress, engl102, mockCurriculum);

    expect(progress.genEdsSatisfied['writing'].satisfied).toBe(true);
    expect(progress.genEdsSatisfied['writing'].creditsEarned).toBe(6);
  });

  it('counts elective credits', () => {
    const initial = initializeProgress(mockCurriculum, emptyCreditSummary);
    const art = mockCurriculum.courses.find(c => c.id === 'ART100')!;
    const updated = addCourseToProgress(initial, art, mockCurriculum);

    expect(updated.electiveCreditsEarned).toBe(4);
  });

  it('calculates percent complete', () => {
    const initial = initializeProgress(mockCurriculum, emptyCreditSummary);
    const econ101 = mockCurriculum.courses.find(c => c.id === 'ECON101')!;
    const updated = addCourseToProgress(initial, econ101, mockCurriculum);

    expect(updated.percentComplete).toBe(Math.round((4 / 120) * 100));
  });
});

describe('computeFullProgress', () => {
  it('processes all completed courses in one call', () => {
    const progress = computeFullProgress(mockCurriculum, emptyCreditSummary, ['ECON101', 'ENGL101', 'ART100']);
    expect(progress.majorCoursesCompleted).toContain('ECON101');
    expect(progress.genEdsSatisfied['writing'].creditsEarned).toBe(3);
    expect(progress.electiveCreditsEarned).toBe(4);
    expect(progress.totalCreditsEarned).toBe(11); // 4+3+4
  });

  it('ignores course IDs not in curriculum', () => {
    const progress = computeFullProgress(mockCurriculum, emptyCreditSummary, ['FAKE999']);
    expect(progress.totalCreditsEarned).toBe(0);
  });
});

describe('checkPrereqs', () => {
  it('returns met=true when all prereqs are satisfied', () => {
    const econ102 = mockCurriculum.courses.find(c => c.id === 'ECON102')!;
    const result = checkPrereqs(econ102, ['ECON101']);
    expect(result.met).toBe(true);
    expect(result.missing).toHaveLength(0);
  });

  it('returns met=false with missing prereqs', () => {
    const econ102 = mockCurriculum.courses.find(c => c.id === 'ECON102')!;
    const result = checkPrereqs(econ102, []);
    expect(result.met).toBe(false);
    expect(result.missing).toContain('ECON101');
  });

  it('returns met=true for courses with no prereqs', () => {
    const econ101 = mockCurriculum.courses.find(c => c.id === 'ECON101')!;
    const result = checkPrereqs(econ101, []);
    expect(result.met).toBe(true);
  });
});
