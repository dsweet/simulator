import { CreditPolicy, StudentProfile, ExamScore } from '../types';

export interface CreditResult {
  examName: string;
  examType: string;
  subject: string;
  score: number;
  isPending: boolean;
  creditsAwarded: number;
  cappedCredits: number; // credits after cap adjustment (may be less than creditsAwarded)
  courseEquivalent?: string;
  courseDescription?: string;
  satisfiedGenEds: string[];
}

export interface CreditSummary {
  totalCredits: number;
  uncappedTotal: number;
  creditCap: number | null;
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
  effectiveScore: number,
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

  // Find ALL matching awards, then pick the best tier the student qualifies for.
  // This supports tiered awards where higher scores earn better course equivalents
  // (e.g., Math HL 4-5 → MATH 120, Math HL 6-7 → MATH 124).
  const matches = policy.awards.filter(award => {
    const awardNorm = award.examName.toLowerCase();
    const examNorm = examName.toLowerCase();
    return awardNorm === examNorm || awardNorm.includes(exam.subject.toLowerCase());
  });

  if (matches.length === 0) return null;

  // Pick the highest-threshold award the student qualifies for
  const qualified = matches
    .filter(a => effectiveScore >= a.minScore)
    .sort((a, b) => b.minScore - a.minScore);

  return qualified[0] || null;
}

// Priority for keeping credits when cap is exceeded:
// 1. Credits with course equivalents (e.g., MATH 124, CSE 121) — hardest to replace
// 2. Credits that satisfy gen-eds — save time on requirements
// 3. Generic elective credits — easiest to replace with any course
function creditPriority(result: CreditResult): number {
  if (result.courseEquivalent) return 2;
  if (result.satisfiedGenEds.length > 0) return 1;
  return 0;
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

    const award = matchExamToPolicy(exam, effectiveScore, policy);
    if (!award) continue;

    {
      const result: CreditResult = {
        examName: exam.examType === 'AP' ? `AP ${exam.subject}` : `IB ${exam.subject} ${exam.examType === 'IB-HL' ? 'HL' : 'SL'}`,
        examType: exam.examType,
        subject: exam.subject,
        score: effectiveScore,
        isPending: exam.score === null,
        creditsAwarded: award.creditsAwarded,
        cappedCredits: award.creditsAwarded, // will be adjusted below if cap applies
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

  const uncappedTotal = totalCredits;
  const creditCap = policy.creditCap ?? null;

  // Apply credit cap — reduce lowest-priority credits first so valuable
  // course equivalents (e.g., Calculus, CSE) are never lost to the cap.
  // Gen-ed satisfactions are always preserved regardless of cap.
  if (creditCap && totalCredits > creditCap) {
    let excess = totalCredits - creditCap;

    // Sort results by priority (lowest first) so we trim generic elective
    // credits before touching course-equivalent or gen-ed credits
    const sortedByPriority = [...results].sort((a, b) => creditPriority(a) - creditPriority(b));

    for (const result of sortedByPriority) {
      if (excess <= 0) break;
      const reduction = Math.min(result.cappedCredits, excess);
      result.cappedCredits -= reduction;
      excess -= reduction;
    }

    totalCredits = creditCap;
  }

  return {
    totalCredits,
    uncappedTotal,
    creditCap,
    results,
    diplomaBonus,
    satisfiedGenEds: Array.from(satisfiedGenEds),
  };
}
