import { CurriculumPlan, Curriculum } from '../types';

const PLAN_KEY = 'college-simulator-current-plan';

export function createPlan(schoolId: string): CurriculumPlan {
  return {
    schoolId,
    termCourses: {},
    createdAt: new Date().toISOString(),
  };
}

export function setTermCourses(plan: CurriculumPlan, termLabel: string, courseIds: string[]): CurriculumPlan {
  return {
    ...plan,
    termCourses: { ...plan.termCourses, [termLabel]: courseIds },
  };
}

export function prefillFromRecommended(plan: CurriculumPlan, curriculum: Curriculum, creditedCourseIds: Set<string>): CurriculumPlan {
  if (!curriculum.recommendedSequence) return plan;

  const newTermCourses: Record<string, string[]> = {};
  for (const term of curriculum.recommendedSequence.terms) {
    const validCourses = term.courses.filter(
      id => curriculum.courses.some(c => c.id === id) && !creditedCourseIds.has(id)
    );
    newTermCourses[term.termLabel] = validCourses;
  }
  return { ...plan, termCourses: newTermCourses };
}

export function loadCurrentPlan(): CurriculumPlan | null {
  try {
    const saved = localStorage.getItem(PLAN_KEY);
    if (saved) return JSON.parse(saved);
  } catch { /* ignore */ }
  return null;
}

export function saveCurrentPlan(plan: CurriculumPlan): void {
  localStorage.setItem(PLAN_KEY, JSON.stringify(plan));
}

export function clearCurrentPlan(): void {
  localStorage.removeItem(PLAN_KEY);
}

export function getTermLabels(calendar: 'quarter' | 'semester', year: number): string[] {
  if (calendar === 'quarter') {
    return [`Fall Year ${year}`, `Winter Year ${year}`, `Spring Year ${year}`];
  }
  return [`Fall Year ${year}`, `Spring Year ${year}`];
}

export function getAllTermLabels(calendar: 'quarter' | 'semester'): string[] {
  const labels: string[] = [];
  for (let y = 1; y <= 4; y++) {
    labels.push(...getTermLabels(calendar, y));
  }
  return labels;
}
