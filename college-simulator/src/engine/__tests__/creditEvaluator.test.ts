import { describe, it, expect } from 'vitest';
import { evaluateCredits } from '../creditEvaluator';
import { CreditPolicy, StudentProfile } from '../../types';

const baseProfile: StudentProfile = {
  exams: [
    { examType: 'AP', subject: 'Statistics', score: 4 },
    { examType: 'AP', subject: 'Computer Science A', score: 4 },
    { examType: 'IB-SL', subject: 'Japanese', score: 5 },
    { examType: 'IB-SL', subject: 'Biology', score: 6 },
    { examType: 'IB-HL', subject: 'Literature', score: null },
    { examType: 'IB-HL', subject: 'History', score: null },
    { examType: 'IB-HL', subject: 'Mathematics Analysis & Approaches', score: null },
  ],
  ibDiploma: true,
  assumedScores: { hlDefault: 6, slDefault: 5 },
};

const uwPolicy: CreditPolicy = {
  schoolId: 'uw',
  slExamsAccepted: true,
  hlMinScore: 4,
  slMinScore: 4,
  creditCap: 45,
  diplomaBonus: 5,
  awards: [
    { examName: 'AP Statistics', minScore: 4, creditsAwarded: 5, courseEquivalent: 'STAT 290' },
    { examName: 'AP Computer Science A', minScore: 4, creditsAwarded: 4, courseEquivalent: 'CSE 121' },
    { examName: 'IB Japanese SL', minScore: 4, creditsAwarded: 5 },
    { examName: 'IB Biology SL', minScore: 4, creditsAwarded: 5 },
    { examName: 'IB Literature HL', minScore: 4, creditsAwarded: 5 },
    { examName: 'IB History HL', minScore: 4, creditsAwarded: 5 },
    { examName: 'IB Mathematics Analysis & Approaches HL', minScore: 4, creditsAwarded: 5 },
  ],
};

const richmondPolicy: CreditPolicy = {
  schoolId: 'richmond',
  slExamsAccepted: false,
  hlMinScore: 5,
  creditCap: 7,
  awards: [
    { examName: 'AP Statistics', minScore: 4, creditsAwarded: 1 },
    { examName: 'IB Literature HL', minScore: 5, creditsAwarded: 1 },
    { examName: 'IB History HL', minScore: 5, creditsAwarded: 1 },
    { examName: 'IB Mathematics Analysis & Approaches HL', minScore: 5, creditsAwarded: 1 },
  ],
};

describe('evaluateCredits', () => {
  it('awards credits for AP exams that meet minimum score', () => {
    const result = evaluateCredits(baseProfile, uwPolicy);
    const apStat = result.results.find(r => r.examName === 'AP Statistics');
    expect(apStat).toBeDefined();
    expect(apStat!.creditsAwarded).toBe(5);
    expect(apStat!.courseEquivalent).toBe('STAT 290');
  });

  it('uses assumed scores for pending IB exams', () => {
    const result = evaluateCredits(baseProfile, uwPolicy);
    const litResult = result.results.find(r => r.subject === 'Literature');
    expect(litResult).toBeDefined();
    expect(litResult!.score).toBe(6); // assumed hlDefault
    expect(litResult!.isPending).toBe(true);
  });

  it('marks non-pending exams as not pending', () => {
    const result = evaluateCredits(baseProfile, uwPolicy);
    const apStat = result.results.find(r => r.examName === 'AP Statistics');
    expect(apStat!.isPending).toBe(false);
  });

  it('rejects SL exams when policy does not accept them', () => {
    const result = evaluateCredits(baseProfile, richmondPolicy);
    const japResult = result.results.find(r => r.subject === 'Japanese');
    expect(japResult).toBeUndefined();
  });

  it('accepts SL exams when policy allows them', () => {
    const result = evaluateCredits(baseProfile, uwPolicy);
    const japResult = result.results.find(r => r.subject === 'Japanese');
    expect(japResult).toBeDefined();
    expect(japResult!.creditsAwarded).toBe(5);
  });

  it('applies credit cap', () => {
    const result = evaluateCredits(baseProfile, uwPolicy);
    // 5+4+5+5+5+5+5 = 34 exam credits + 5 diploma = 39, under 45 cap
    expect(result.totalCredits).toBe(39);
  });

  it('caps credits when they exceed the policy cap', () => {
    // Make a policy with a very low cap
    const lowCapPolicy: CreditPolicy = {
      ...uwPolicy,
      creditCap: 10,
    };
    const result = evaluateCredits(baseProfile, lowCapPolicy);
    expect(result.totalCredits).toBe(10);
  });

  it('adds diploma bonus', () => {
    const result = evaluateCredits(baseProfile, uwPolicy);
    expect(result.diplomaBonus).toBe(5);
  });

  it('does not add diploma bonus when student has no diploma', () => {
    const noDiploma = { ...baseProfile, ibDiploma: false };
    const result = evaluateCredits(noDiploma, uwPolicy);
    expect(result.diplomaBonus).toBe(0);
  });

  it('respects Richmond credit cap of 7', () => {
    const result = evaluateCredits(baseProfile, richmondPolicy);
    // AP Stats(1) + Lit HL(1) + Hist HL(1) + Math HL(1) = 4
    expect(result.totalCredits).toBe(4);
    expect(result.totalCredits).toBeLessThanOrEqual(7);
  });

  it('does not award credit when score is below minimum', () => {
    const lowScoreProfile: StudentProfile = {
      ...baseProfile,
      assumedScores: { hlDefault: 4, slDefault: 4 },
    };
    const result = evaluateCredits(lowScoreProfile, richmondPolicy);
    // HL exams need 5+ at Richmond, assumed 4 → no credit for HL
    const litResult = result.results.find(r => r.subject === 'Literature');
    expect(litResult).toBeUndefined();
  });
});
