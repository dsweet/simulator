import { SavedCurriculum, SchoolRun, School, Curriculum, OutcomeData } from '../types';
import { generateCurriculumSummary } from './summaryGenerator';

const SAVED_KEY = 'college-simulator-saved-curricula';

export function loadSavedCurricula(): SavedCurriculum[] {
  try {
    const saved = localStorage.getItem(SAVED_KEY);
    if (saved) return JSON.parse(saved);
  } catch { /* ignore */ }
  return [];
}

export function saveCurriculumToStorage(curriculum: SavedCurriculum): void {
  const existing = loadSavedCurricula();
  existing.push(curriculum);
  localStorage.setItem(SAVED_KEY, JSON.stringify(existing));
}

export function deleteSavedCurriculum(id: string): void {
  const existing = loadSavedCurricula();
  const filtered = existing.filter(c => c.id !== id);
  localStorage.setItem(SAVED_KEY, JSON.stringify(filtered));
}

export function buildSavedCurriculum(
  run: SchoolRun,
  school: School,
  curriculum: Curriculum,
  outcomeData: OutcomeData,
  revealed: boolean,
): SavedCurriculum {
  const summary = generateCurriculumSummary(run, curriculum, outcomeData, school);

  return {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    savedAt: new Date().toISOString(),
    schoolId: school.id,
    schoolName: revealed ? school.name : undefined,
    alias: run.alias,
    track: school.track,
    program: school.program,
    calendar: school.calendar,
    termSelections: run.termSelections,
    yearRatings: run.yearRatings,
    outcomeRating: run.outcomeRating,
    summary,
  };
}

export function exportCurriculumAsFile(saved: SavedCurriculum): void {
  const termsPerYear = saved.calendar === 'quarter' ? 3 : 2;

  // Build readable text format
  const lines: string[] = [];
  const displayName = saved.schoolName || saved.alias;
  lines.push(`${'='.repeat(60)}`);
  lines.push(`${displayName} — ${saved.program}`);
  lines.push(`Track: ${saved.track} | Calendar: ${saved.calendar}`);
  lines.push(`Saved: ${new Date(saved.savedAt).toLocaleDateString()}`);
  lines.push(`${'='.repeat(60)}`);
  lines.push('');

  // Group terms by year
  for (let i = 0; i < saved.termSelections.length; i += termsPerYear) {
    const yearNum = Math.floor(i / termsPerYear) + 1;
    lines.push(`--- Year ${yearNum} ---`);
    const yearTerms = saved.termSelections.slice(i, i + termsPerYear);
    for (const term of yearTerms) {
      lines.push(`  ${term.termLabel}:`);
      for (const courseId of term.courses) {
        lines.push(`    - ${courseId}`);
      }
    }

    // Year rating if available
    const rating = saved.yearRatings.find(r => r.year === yearNum);
    if (rating) {
      lines.push(`  Rating: ${'*'.repeat(rating.overallAppeal)}/5 appeal, ${'*'.repeat(rating.courseInterest)}/5 interest`);
      if (rating.notes) lines.push(`  Notes: ${rating.notes}`);
    }
    lines.push('');
  }

  if (saved.outcomeRating) {
    lines.push(`--- Outcomes ---`);
    lines.push(`  Appeal: ${'*'.repeat(saved.outcomeRating.appeal)}/5`);
    if (saved.outcomeRating.notes) lines.push(`  Notes: ${saved.outcomeRating.notes}`);
    lines.push('');
  }

  lines.push(`--- Summary ---`);
  lines.push(saved.summary.narrative);
  lines.push('');
  lines.push(`Key themes: ${saved.summary.topInterests.join(', ')}`);
  if (saved.summary.careerPaths.length > 0) {
    lines.push(`Career paths: ${saved.summary.careerPaths.join(', ')}`);
  }

  const text = lines.join('\n');
  const blob = new Blob([text], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `curriculum-${displayName.replace(/\s+/g, '-').toLowerCase()}-${new Date(saved.savedAt).toISOString().slice(0, 10)}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
