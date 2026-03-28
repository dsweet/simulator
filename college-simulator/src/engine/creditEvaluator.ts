import { CreditPolicy, StudentProfile, ExamScore } from '../types';

export interface CreditResult {
  examName: string;
  examType: string;
  subject: string;
  score: number;
  isPending: boolean;
  creditsAwarded: number;
  courseEquivalent?: string;
  courseDescription?: string;
  satisfiedGenEds: string[];
}

export interface CreditSummary {
  totalCredits: number;
  results: CreditResult[];
  diplomaBonus: number;
  satisfiedGenEds: string[];
}

function getEffectiveScore(exam: ExamScore, profile: StudentProfile): number | null {
  if (exam.score !== null) return exam.score;
  // Use assumed scores for pending exams
  return exam.examType === 'IB-HL'
    ? profile.assumedScores.hlDefault
    : profile.assumedScores.slDefault;
}

function matchExamToPolicy(
  exam: ExamScore,
  policy: CreditPolicy
): { examName: string; minScore: number; creditsAwarded: number; courseEquivalent?: string; courseDescription?: string; satisfiesGenEd?: string[] } | null {
  // Build the exam name to match against policy
  const examName = exam.examType === 'AP'
    ? `AP ${exam.subject}`
    : `IB ${exam.subject} ${exam.examType === 'IB-HL' ? 'HL' : 'SL'}`;

  // Check if SL exams are accepted
  if (exam.examType === 'IB-SL' && !policy.slExamsAccepted) {
    return null;
  }

  // Find matching award in policy
  return policy.awards.find(award => {
    // Flexible matching — check if the award name contains key parts of the exam name
    const awardNorm = award.examName.toLowerCase();
    const examNorm = examName.toLowerCase();
    return awardNorm === examNorm || awardNorm.includes(exam.subject.toLowerCase());
  }) || null;
}

export function evaluateCredits(
  profile: StudentProfile,
  policy: CreditPolicy
): CreditSummary {
  const results: CreditResult[] = [];
  const satisfiedGenEds = new Set<string>();
  let totalCredits = 0;

  for (const exam of profile.exams) {
    const effectiveScore = getEffectiveScore(exam, profile);
    if (effectiveScore === null) continue;

    const award = matchExamToPolicy(exam, policy);
    if (!award) continue;

    if (effectiveScore >= award.minScore) {
      const result: CreditResult = {
        examName: exam.examType === 'AP' ? `AP ${exam.subject}` : `IB ${exam.subject} ${exam.examType === 'IB-HL' ? 'HL' : 'SL'}`,
        examType: exam.examType,
        subject: exam.subject,
        score: effectiveScore,
        isPending: exam.score === null,
        creditsAwarded: award.creditsAwarded,
        courseEquivalent: award.courseEquivalent,
        courseDescription: award.courseDescription,
        satisfiedGenEds: award.satisfiesGenEd || [],
      };

      results.push(result);
      totalCredits += award.creditsAwarded;
      (award.satisfiesGenEd || []).forEach(ge => satisfiedGenEds.add(ge));
    }
  }

  // Diploma bonus
  let diplomaBonus = 0;
  if (profile.ibDiploma && policy.diplomaBonus) {
    diplomaBonus = policy.diplomaBonus;
    totalCredits += diplomaBonus;
  }

  // Apply credit cap if exists
  if (policy.creditCap && totalCredits > policy.creditCap) {
    totalCredits = policy.creditCap;
  }

  return {
    totalCredits,
    results,
    diplomaBonus,
    satisfiedGenEds: Array.from(satisfiedGenEds),
  };
}
