import { SavedCurriculum, CurriculumPlan, School, Curriculum, OutcomeData, TermSelection } from '../types';
import { generateCurriculumSummary } from './summaryGenerator';
import { getAllTermLabels } from './gameState';

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

function planToTermSelections(plan: CurriculumPlan, calendar: 'quarter' | 'semester'): TermSelection[] {
  const allLabels = getAllTermLabels(calendar);
  return allLabels
    .filter(label => (plan.termCourses[label] || []).length > 0)
    .map(label => ({ termLabel: label, courses: plan.termCourses[label] }));
}

export function buildSavedCurriculum(
  plan: CurriculumPlan,
  school: School,
  curriculum: Curriculum,
  outcomeData: OutcomeData,
): SavedCurriculum {
  const summary = generateCurriculumSummary(plan.termCourses, curriculum, outcomeData, school);

  return {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    savedAt: new Date().toISOString(),
    schoolId: school.id,
    schoolName: school.name,
    track: school.track,
    program: school.program,
    calendar: school.calendar,
    termSelections: planToTermSelections(plan, school.calendar),
    summary,
  };
}

export function exportCurriculumAsFile(saved: SavedCurriculum): void {
  const termsPerYear = saved.calendar === 'quarter' ? 3 : 2;

  const lines: string[] = [];
  lines.push(`${'='.repeat(60)}`);
  lines.push(`${saved.schoolName} — ${saved.program}`);
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
  a.download = `curriculum-${saved.schoolName.replace(/\s+/g, '-').toLowerCase()}-${new Date(saved.savedAt).toISOString().slice(0, 10)}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
