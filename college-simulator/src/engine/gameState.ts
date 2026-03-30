import { CurriculumPlan, Curriculum, Course, CalendarType } from '../types';
import { CreditSummary } from './creditEvaluator';

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

export function getTermLabels(calendar: CalendarType, year: number): string[] {
  if (calendar === 'quarter') {
    return [`Fall Year ${year}`, `Winter Year ${year}`, `Spring Year ${year}`];
  }
  return [`Fall Year ${year}`, `Spring Year ${year}`];
}

export function getAllTermLabels(calendar: CalendarType): string[] {
  const labels: string[] = [];
  for (let y = 1; y <= 4; y++) {
    labels.push(...getTermLabels(calendar, y));
  }
  return labels;
}

// Extract numeric level from course ID (e.g., "ECON272" → 200, "HCDE492" → 400)
function courseLevel(id: string): number {
  const match = id.match(/(\d)\d{2}/);
  return match ? parseInt(match[1]) * 100 : 100;
}

// Get the season from a term label (e.g., "Fall Year 2" → "fall")
function termSeason(label: string): string {
  return label.split(' ')[0].toLowerCase();
}

/**
 * Auto-fill a 4-year curriculum plan.
 *
 * Strategy:
 * 1. Start from the recommended sequence (covers years 1-2 for most schools, all 4 for UW)
 * 2. Identify all courses still needed: remaining major-required, gen-ed satisfiers, electives
 * 3. Place them into empty/underfilled terms in a logical order, respecting prereqs
 */
export function autofillPlan(
  plan: CurriculumPlan,
  curriculum: Curriculum,
  creditedCourseIds: Set<string>,
  creditSummary: CreditSummary,
  calendar: CalendarType = 'quarter',
): CurriculumPlan {
  const termsPerYear = calendar === 'quarter' ? 3 : 2;
  const maxPerTerm = calendar === 'quarter' ? 3 : 4;
  const allTermLabels = getAllTermLabels(calendar);

  const courseMap = new Map(curriculum.courses.map(c => [c.id, c]));
  const reqs = curriculum.degreeRequirements;

  // Step 1: Start from recommended sequence
  const termCourses: Record<string, string[]> = {};
  for (const label of allTermLabels) {
    termCourses[label] = [];
  }

  if (curriculum.recommendedSequence) {
    for (const term of curriculum.recommendedSequence.terms) {
      const valid = term.courses.filter(
        id => courseMap.has(id) && !creditedCourseIds.has(id)
      );
      termCourses[term.termLabel] = valid;
    }
  }

  // Collect all already-placed course IDs
  const placed = new Set<string>();
  for (const courses of Object.values(termCourses)) {
    courses.forEach(id => placed.add(id));
  }
  creditedCourseIds.forEach(id => placed.add(id));

  // Step 2: Identify courses still needed

  // 2a. Remaining major-required courses (not placed, not credited)
  const remainingMajor = reqs.majorCourses
    .filter(id => !placed.has(id) && courseMap.has(id))
    .map(id => courseMap.get(id)!)
    .sort((a, b) => courseLevel(a.id) - courseLevel(b.id));

  // 2b. Gen-ed courses needed — find unsatisfied categories and pick courses for them
  const satisfiedGenEds = new Set(creditSummary.satisfiedGenEds);
  // Also check which gen-eds are already satisfied by placed courses
  for (const id of placed) {
    const course = courseMap.get(id);
    if (course?.genEdReqs) {
      course.genEdReqs.forEach(ge => satisfiedGenEds.add(ge));
    }
  }

  const genEdCoursesNeeded: Course[] = [];
  for (const cat of reqs.genEdCategories) {
    if (satisfiedGenEds.has(cat.id)) continue;
    // Find a course that satisfies this category and isn't placed yet
    const candidate = curriculum.courses.find(
      c => c.genEdReqs?.includes(cat.id) && !placed.has(c.id)
    );
    if (candidate) {
      genEdCoursesNeeded.push(candidate);
      placed.add(candidate.id); // mark so we don't double-pick
      // Also mark other gen-eds this course satisfies
      candidate.genEdReqs?.forEach(ge => satisfiedGenEds.add(ge));
    }
  }

  // 2c. Electives to fill remaining slots — pick a diverse set
  const electivesAvailable = curriculum.courses
    .filter(c => !placed.has(c.id) && (c.category === 'elective' || c.category === 'major-elective'))
    .sort((a, b) => courseLevel(a.id) - courseLevel(b.id));

  // Step 3: Place courses into terms, respecting prereqs and capacity

  // Helper: check if all prereqs for a course are met by courses in terms before termIdx
  function prereqsMet(course: Course, termIdx: number): boolean {
    if (course.prereqs.length === 0) return true;
    const completedBefore = new Set<string>();
    creditedCourseIds.forEach(id => completedBefore.add(id));
    for (let i = 0; i < termIdx; i++) {
      termCourses[allTermLabels[i]].forEach(id => completedBefore.add(id));
    }
    return course.prereqs.every(p => completedBefore.has(p));
  }

  // Helper: check term availability (fall, winter, spring)
  function termAvailable(course: Course, termLabel: string): boolean {
    if (!course.termAvailability || course.termAvailability.length === 0) return true;
    return course.termAvailability.includes(termSeason(termLabel));
  }

  // Place a list of courses into the earliest eligible terms
  function placeCourses(courses: Course[]) {
    for (const course of courses) {
      if (termCourses[allTermLabels[0]]?.includes(course.id)) continue; // already placed somewhere
      // Check all terms — skip if already placed in any
      let alreadyPlaced = false;
      for (const label of allTermLabels) {
        if (termCourses[label].includes(course.id)) { alreadyPlaced = true; break; }
      }
      if (alreadyPlaced) continue;

      // Find earliest eligible term
      for (let i = 0; i < allTermLabels.length; i++) {
        const label = allTermLabels[i];
        if (termCourses[label].length >= maxPerTerm) continue;
        if (!prereqsMet(course, i)) continue;
        if (!termAvailable(course, label)) continue;
        termCourses[label].push(course.id);
        break;
      }
    }
  }

  // Place in priority order: major required → gen-ed → electives
  placeCourses(remainingMajor);
  placeCourses(genEdCoursesNeeded);

  // Fill remaining empty slots with electives (only enough to fill out terms that already have courses)
  // This avoids overstuffing — we want a reasonable schedule, not max courses
  const electivePool = [...electivesAvailable];
  for (let i = 0; i < allTermLabels.length && electivePool.length > 0; i++) {
    const label = allTermLabels[i];
    const current = termCourses[label];
    // Only fill terms that already have at least 1 course or are in the first 2 years
    const yearOfTerm = Math.floor(i / termsPerYear) + 1;
    const shouldFill = current.length > 0 || yearOfTerm <= 2;
    if (!shouldFill) continue;

    while (current.length < maxPerTerm && electivePool.length > 0) {
      // Find first elective whose prereqs are met and isn't restricted to another term
      const idx = electivePool.findIndex(c => prereqsMet(c, i) && termAvailable(c, label));
      if (idx === -1) break;
      current.push(electivePool[idx].id);
      electivePool.splice(idx, 1);
    }
  }

  // Clean up empty terms (keep the keys but with empty arrays — the UI handles this)
  return { ...plan, termCourses };
}

/** Simple prefill that only uses the recommended sequence (no smart filling) */
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
