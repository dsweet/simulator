import { Curriculum, Course, DegreeRequirements } from '../types';
import { CreditSummary } from './creditEvaluator';

export interface ProgressState {
  totalCreditsEarned: number;
  totalCreditsRequired: number;
  majorCoursesCompleted: string[];
  majorCoursesRemaining: string[];
  genEdsSatisfied: Record<string, { name: string; satisfied: boolean; creditsEarned: number; creditsRequired: number }>;
  electiveCreditsEarned: number;
  electiveCreditsRequired: number;
  percentComplete: number;
}

export function initializeProgress(
  curriculum: Curriculum,
  creditSummary: CreditSummary
): ProgressState {
  const reqs = curriculum.degreeRequirements;

  // Gen-eds satisfied by AP/IB
  const genEdsSatisfied: Record<string, { name: string; satisfied: boolean; creditsEarned: number; creditsRequired: number }> = {};
  for (const cat of reqs.genEdCategories) {
    const satisfied = creditSummary.satisfiedGenEds.includes(cat.id);
    genEdsSatisfied[cat.id] = {
      name: cat.name,
      satisfied,
      creditsEarned: satisfied ? cat.creditsRequired : 0,
      creditsRequired: cat.creditsRequired,
    };
  }

  // Major courses satisfied by AP/IB credit equivalents
  const majorCompletedByCredit: string[] = [];
  for (const result of creditSummary.results) {
    if (result.creditsAwarded <= 0 || !result.courseEquivalent) continue;
    const parts = result.courseEquivalent.split('/').map(p => p.trim());
    const prefix = parts[0].replace(/\s*\d+.*$/, '');
    for (const part of parts) {
      const full = part.includes(prefix) ? part : `${prefix} ${part}`;
      const normalized = full.replace(/\s+/g, '').toUpperCase();
      if (reqs.majorCourses.includes(normalized)) {
        majorCompletedByCredit.push(normalized);
      }
    }
  }

  const totalCreditsEarned = creditSummary.totalCredits;

  return {
    totalCreditsEarned,
    totalCreditsRequired: reqs.totalCredits,
    majorCoursesCompleted: majorCompletedByCredit,
    majorCoursesRemaining: reqs.majorCourses.filter(id => !majorCompletedByCredit.includes(id)),
    genEdsSatisfied,
    electiveCreditsEarned: 0,
    electiveCreditsRequired: reqs.electiveCredits,
    percentComplete: Math.round((totalCreditsEarned / reqs.totalCredits) * 100),
  };
}

export function addCourseToProgress(
  progress: ProgressState,
  course: Course,
  curriculum: Curriculum
): ProgressState {
  const newProgress = { ...progress };
  newProgress.totalCreditsEarned += course.credits;

  // Check if it's a required major course
  if (curriculum.degreeRequirements.majorCourses.includes(course.id)) {
    newProgress.majorCoursesCompleted = [...progress.majorCoursesCompleted, course.id];
    newProgress.majorCoursesRemaining = progress.majorCoursesRemaining.filter(id => id !== course.id);
  }

  // Check if it satisfies gen-ed requirements
  if (course.genEdReqs) {
    const newGenEds = { ...progress.genEdsSatisfied };
    for (const genEdId of course.genEdReqs) {
      if (newGenEds[genEdId] && !newGenEds[genEdId].satisfied) {
        newGenEds[genEdId] = {
          ...newGenEds[genEdId],
          creditsEarned: newGenEds[genEdId].creditsEarned + course.credits,
          satisfied: newGenEds[genEdId].creditsEarned + course.credits >= newGenEds[genEdId].creditsRequired,
        };
      }
    }
    newProgress.genEdsSatisfied = newGenEds;
  }

  // Count elective credits
  if (course.category === 'elective') {
    newProgress.electiveCreditsEarned += course.credits;
  }

  newProgress.percentComplete = Math.round(
    (newProgress.totalCreditsEarned / newProgress.totalCreditsRequired) * 100
  );

  return newProgress;
}

export function computeFullProgress(
  curriculum: Curriculum,
  creditSummary: CreditSummary,
  completedCourseIds: string[]
): ProgressState {
  let progress = initializeProgress(curriculum, creditSummary);
  for (const courseId of completedCourseIds) {
    const course = curriculum.courses.find(c => c.id === courseId);
    if (course) {
      progress = addCourseToProgress(progress, course, curriculum);
    }
  }

  // Detect Rochester-style clusters: count courses per clusterGroup
  const clusterGenEdIds = curriculum.degreeRequirements.genEdCategories
    .filter(c => c.id.startsWith('cluster-'))
    .map(c => c.id);

  if (clusterGenEdIds.length > 0) {
    const groupCounts: Record<string, number> = {};
    for (const courseId of completedCourseIds) {
      const course = curriculum.courses.find(c => c.id === courseId);
      if (course?.clusterGroup) {
        groupCounts[course.clusterGroup] = (groupCounts[course.clusterGroup] || 0) + 1;
      }
    }
    // Groups with 3+ courses form completed clusters
    const completedGroups = Object.entries(groupCounts)
      .filter(([, count]) => count >= 3)
      .sort(([, a], [, b]) => b - a); // most courses first

    const newGenEds = { ...progress.genEdsSatisfied };
    const usedGroups = new Set<string>();
    for (let i = 0; i < clusterGenEdIds.length; i++) {
      const genEdId = clusterGenEdIds[i];
      if (newGenEds[genEdId]) {
        const group = completedGroups.find(([name]) => !usedGroups.has(name));
        if (group) {
          usedGroups.add(group[0]);
          newGenEds[genEdId] = {
            ...newGenEds[genEdId],
            creditsEarned: group[1],
            satisfied: true,
          };
        } else {
          // Partial progress: best ungrouped department count
          const bestPartial = Object.entries(groupCounts)
            .filter(([name]) => !usedGroups.has(name))
            .sort(([, a], [, b]) => b - a)[0];
          newGenEds[genEdId] = {
            ...newGenEds[genEdId],
            creditsEarned: bestPartial ? bestPartial[1] : 0,
            satisfied: false,
          };
        }
      }
    }
    progress = { ...progress, genEdsSatisfied: newGenEds };
  }

  return progress;
}

export function checkPrereqs(
  course: Course,
  completedCourseIds: string[]
): { met: boolean; missing: string[] } {
  if (!course.prereqs || course.prereqs.length === 0) {
    return { met: true, missing: [] };
  }

  const missing = course.prereqs.filter(prereq => !completedCourseIds.includes(prereq));
  return { met: missing.length === 0, missing };
}
