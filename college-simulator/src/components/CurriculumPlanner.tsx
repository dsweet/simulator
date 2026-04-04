import { useState, useMemo } from 'react';
import { School, CurriculumPlan, INTEREST_TAGS } from '../types';
import { getCurriculum } from '../data/curricula/index';
import { studentProfile } from '../data/student';
import { creditPolicies } from '../data/creditPolicies';
import { evaluateCredits } from '../engine/creditEvaluator';
import { setTermCourses, autofillPlan, getAllTermLabels } from '../engine/gameState';
import { checkPrereqs } from '../engine/progressTracker';
import DegreeProgress from './DegreeProgress';

interface Props {
  school: School;
  plan: CurriculumPlan;
  onUpdatePlan: (plan: CurriculumPlan) => void;
  onFinish: () => void;
  onBack: () => void;
}

export default function CurriculumPlanner({ school, plan, onUpdatePlan, onFinish, onBack }: Props) {
  const curriculum = getCurriculum(school.id);
  const [activeTerm, setActiveTerm] = useState<string | null>(null);
  const [interestFilter, setInterestFilter] = useState<string | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const termsPerYear = school.calendar === 'quarter' ? 3 : 2;
  const maxCourses = school.calendar === 'quarter' ? 3 : 4;
  const allTermLabels = getAllTermLabels(school.calendar);

  // Credit summary for degree progress
  const policy = creditPolicies.find(p => p.schoolId === school.id);
  const creditSummary = policy ? evaluateCredits(studentProfile, policy) : null;

  // Course IDs credited via AP/IB
  const creditedCourseIds = useMemo(() => {
    if (!creditSummary || !curriculum) return new Set<string>();
    const ids = new Set<string>();
    const catalogIds = new Set(curriculum.courses.map(c => c.id));
    for (const result of creditSummary.results) {
      if (result.creditsAwarded <= 0 || !result.courseEquivalent) continue;
      const parts = result.courseEquivalent.split('/').map(p => p.trim());
      const prefix = parts[0].replace(/\s*\d+.*$/, '');
      for (const part of parts) {
        const full = part.includes(prefix) ? part : `${prefix} ${part}`;
        const normalized = full.replace(/\s+/g, '').toUpperCase();
        if (catalogIds.has(normalized)) ids.add(normalized);
      }
    }
    // Allow retaking Calc II even with credit
    for (const id of [...ids]) {
      const course = curriculum.courses.find(c => c.id === id);
      if (course && /\bCalculus\b.*\bII\b|^Integration\b/i.test(course.title)) {
        ids.delete(id);
      }
    }
    return ids;
  }, [creditSummary, curriculum]);

  // All courses selected across all terms
  const allSelectedIds = useMemo(() => {
    return Object.values(plan.termCourses).flat();
  }, [plan.termCourses]);

  // Courses in the active term
  const activeTermCourses = activeTerm ? (plan.termCourses[activeTerm] || []) : [];

  // Courses taken in terms before the active term (for prereq checking)
  const coursesBeforeActiveTerm = useMemo(() => {
    if (!activeTerm) return new Set<string>();
    const before = new Set<string>();
    creditedCourseIds.forEach(id => before.add(id));
    const activeIdx = allTermLabels.indexOf(activeTerm);
    for (let i = 0; i < activeIdx; i++) {
      const label = allTermLabels[i];
      const courses = plan.termCourses[label] || [];
      courses.forEach(c => before.add(c));
    }
    return before;
  }, [activeTerm, plan.termCourses, allTermLabels, creditedCourseIds]);

  const coursesBeforeActiveTermIds = useMemo(() => Array.from(coursesBeforeActiveTerm), [coursesBeforeActiveTerm]);

  // All IDs for the completed+current set (for degree progress)
  const allCompletedIds = useMemo(() => {
    const ids: string[] = [];
    creditedCourseIds.forEach(id => ids.push(id));
    // All term courses except active term
    for (const [label, courses] of Object.entries(plan.termCourses)) {
      if (label !== activeTerm) {
        courses.forEach(c => ids.push(c));
      }
    }
    return ids;
  }, [plan.termCourses, activeTerm, creditedCourseIds]);

  // Filter available courses for the active term
  const availableCourses = useMemo(() => {
    if (!curriculum || !activeTerm) return [];
    const takenElsewhere = new Set<string>();
    for (const [label, courses] of Object.entries(plan.termCourses)) {
      if (label !== activeTerm) courses.forEach(c => takenElsewhere.add(c));
    }
    creditedCourseIds.forEach(id => takenElsewhere.add(id));

    return curriculum.courses.filter(course => {
      if (takenElsewhere.has(course.id)) return false;
      if (activeTermCourses.includes(course.id)) return false;
      if (interestFilter && !course.interestTags.includes(interestFilter)) return false;
      if (categoryFilter) {
        if (categoryFilter === 'math') {
          if (!/^(MATH|MTH|STAT|STT)/i.test(course.id)) return false;
        } else {
          if (course.category !== categoryFilter) return false;
        }
      }
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        return course.title.toLowerCase().includes(q) || course.description.toLowerCase().includes(q) || course.id.toLowerCase().includes(q);
      }
      return true;
    });
  }, [curriculum, activeTerm, plan.termCourses, activeTermCourses, creditedCourseIds, interestFilter, categoryFilter, searchQuery]);

  const activeTermCourseObjects = useMemo(() => {
    if (!curriculum) return [];
    return activeTermCourses.map(id => curriculum.courses.find(c => c.id === id)!).filter(Boolean);
  }, [curriculum, activeTermCourses]);

  const totalSelectedCredits = activeTermCourseObjects.reduce((sum, c) => sum + c.credits, 0);

  // Count how many terms have courses
  const filledTermCount = Object.values(plan.termCourses).filter(c => c.length > 0).length;
  const totalCourseCount = allSelectedIds.length;

  // Category breakdown
  const categoryCounts = useMemo(() => {
    if (!curriculum) return { major: 0, genEd: 0, elective: 0 };
    let major = 0, genEd = 0, elective = 0;
    for (const id of allSelectedIds) {
      const c = curriculum.courses.find(course => course.id === id);
      if (!c) continue;
      if (c.category === 'major-required' || c.category === 'major-elective') major++;
      else if (c.category === 'gen-ed') genEd++;
      else elective++;
    }
    return { major, genEd, elective };
  }, [curriculum, allSelectedIds]);

  if (!curriculum) {
    return (
      <div className="screen course-planner">
        <h2>Course data not yet available for this school</h2>
        <p>The curriculum data is still being researched. Check back soon!</p>
      </div>
    );
  }

  const handleSelectCourse = (courseId: string) => {
    if (!activeTerm || activeTermCourses.length >= maxCourses) return;
    const newCourses = [...activeTermCourses, courseId];
    onUpdatePlan(setTermCourses(plan, activeTerm, newCourses));
  };

  const handleRemoveCourse = (courseId: string) => {
    if (!activeTerm) return;
    const newCourses = activeTermCourses.filter(id => id !== courseId);
    onUpdatePlan(setTermCourses(plan, activeTerm, newCourses));
  };

  const handlePrefill = () => {
    if (!creditSummary) return;
    onUpdatePlan(autofillPlan(plan, curriculum, creditedCourseIds, creditSummary, school.calendar));
  };

  const handleClearAll = () => {
    onUpdatePlan({ ...plan, termCourses: {} });
    setActiveTerm(null);
  };

  // Group terms by year for the grid
  const years: { year: number; terms: string[] }[] = [];
  for (let y = 1; y <= 4; y++) {
    const start = (y - 1) * termsPerYear;
    years.push({ year: y, terms: allTermLabels.slice(start, start + termsPerYear) });
  }

  // Check for prereq issues in any term
  const termHasPrereqIssue = (termLabel: string): boolean => {
    const courses = plan.termCourses[termLabel] || [];
    if (courses.length === 0) return false;
    const termIdx = allTermLabels.indexOf(termLabel);
    const before = new Set<string>();
    creditedCourseIds.forEach(id => before.add(id));
    for (let i = 0; i < termIdx; i++) {
      (plan.termCourses[allTermLabels[i]] || []).forEach(c => before.add(c));
    }
    const beforeArr = Array.from(before);
    return courses.some(cid => {
      const course = curriculum.courses.find(c => c.id === cid);
      if (!course) return false;
      return !checkPrereqs(course, beforeArr).met;
    });
  };

  const allTakenForPrereqs = [...coursesBeforeActiveTermIds, ...activeTermCourses];

  return (
    <div className="screen course-planner">
      <div className="planner-header">
        <div className="planner-title-row">
          <h2>{school.name} — {school.program}</h2>
          <div className="planner-actions-top">
            {creditSummary && (
              <button className="btn-small" onClick={handlePrefill}>Auto-fill Schedule</button>
            )}
            {totalCourseCount > 0 && (
              <button className="btn-small btn-danger" onClick={handleClearAll}>Clear All</button>
            )}
          </div>
        </div>
        <div className="planner-stats">
          <span>{filledTermCount} / {allTermLabels.length} terms planned</span>
          <span>{totalCourseCount} courses selected</span>
          {totalCourseCount > 0 && (
            <span className="category-breakdown">
              <span className="cat-stat cat-major">{categoryCounts.major} major ({Math.round(categoryCounts.major / totalCourseCount * 100)}%)</span>
              <span className="cat-stat cat-gened">{categoryCounts.genEd} gen-ed ({Math.round(categoryCounts.genEd / totalCourseCount * 100)}%)</span>
              <span className="cat-stat cat-elective">{categoryCounts.elective} elective ({Math.round(categoryCounts.elective / totalCourseCount * 100)}%)</span>
            </span>
          )}
        </div>
      </div>

      <div className="color-legend">
        <span className="legend-item"><span className="legend-swatch swatch-major"></span> Major Required</span>
        <span className="legend-item"><span className="legend-swatch swatch-gened"></span> Gen-Ed</span>
        <span className="legend-item"><span className="legend-swatch swatch-elective"></span> Elective / Choice</span>
      </div>

      {/* 4-year term grid */}
      <div className="term-grid">
        {years.map(({ year, terms }) => (
          <div key={year} className="term-grid-year">
            <div className="term-grid-year-label">Year {year}</div>
            <div className="term-grid-cells">
              {terms.map(label => {
                const courses = plan.termCourses[label] || [];
                const isActive = label === activeTerm;
                const hasIssue = termHasPrereqIssue(label);
                const seasonLabel = label.replace(/ Year \d+/, '');
                return (
                  <button
                    key={label}
                    className={`term-cell ${isActive ? 'term-cell-active' : ''} ${courses.length > 0 ? 'term-cell-filled' : ''} ${hasIssue ? 'term-cell-warning' : ''}`}
                    onClick={() => setActiveTerm(isActive ? null : label)}
                  >
                    <div className="term-cell-header">
                      <span className="term-cell-label">{seasonLabel}{hasIssue && ' ⚠️'}</span>
                      <span className="term-cell-count">
                        {courses.length > 0 ? `${courses.length}` : '—'}
                      </span>
                    </div>
                    {courses.length > 0 && (
                      <div className="term-cell-courses">
                        {courses.map(cid => {
                          const c = curriculum.courses.find(co => co.id === cid);
                          return (
                            <span
                              key={cid}
                              className={`term-cell-course-id${c ? ` course-cat-${c.category}` : ''}`}
                              title={c ? `${c.title}\n${c.description}` : cid}
                            >{cid}</span>
                          );
                        })}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Course picker (only when a term is selected) */}
      {activeTerm && (
        <div className={creditSummary ? 'planner-layout-3col' : 'planner-layout'}>
          <div className="course-catalog">
            <div className="catalog-controls">
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={e => { setSearchQuery(e.target.value); setCategoryFilter(null); setInterestFilter(null); }}
                className="search-input"
              />
              <div className="filter-row">
                <select
                  value={categoryFilter || ''}
                  onChange={e => { setCategoryFilter(e.target.value || null); setSearchQuery(''); }}
                  className="filter-select"
                >
                  <option value="">Filter by category...</option>
                  <option value="major-required">Major Required</option>
                  <option value="major-elective">Major Elective</option>
                  <option value="math">Math & Statistics</option>
                  <option value="gen-ed">Gen-Ed</option>
                  <option value="elective">Elective</option>
                </select>
                <select
                  value={interestFilter || ''}
                  onChange={e => { setInterestFilter(e.target.value || null); setSearchQuery(''); }}
                  className="filter-select"
                >
                  <option value="">Filter by interest...</option>
                  {INTEREST_TAGS.map(tag => (
                    <option key={tag.id} value={tag.id}>{tag.label}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="course-list">
              {availableCourses.length === 0 ? (
                <p className="no-courses">No matching courses found. Try adjusting filters.</p>
              ) : (
                availableCourses.map(course => {
                  const prereqCheck = checkPrereqs(course, allTakenForPrereqs);
                  return (
                    <div
                      key={course.id}
                      className={`course-card ${course.category} ${!prereqCheck.met ? 'prereq-warning' : ''}`}
                      onClick={() => handleSelectCourse(course.id)}
                    >
                      <div className="course-header">
                        <span className="course-id">{course.id}</span>
                        <span className="course-credits">{course.credits} cr</span>
                      </div>
                      <h4 className="course-title">{course.title}</h4>
                      <p className="course-desc">{course.description}</p>
                      {course.interestTags.length > 0 && (
                        <div className="interest-tags">
                          {course.interestTags.map(tag => (
                            <span key={tag} className={`interest-tag tag-${tag}`}>
                              {INTEREST_TAGS.find(t => t.id === tag)?.label || tag}
                            </span>
                          ))}
                        </div>
                      )}
                      {!prereqCheck.met && (
                        <div className="prereq-notice">
                          ⚠️ Prereqs not met: {prereqCheck.missing.join(', ')}
                        </div>
                      )}
                      {course.category === 'major-required' && (
                        <span className="required-badge">Required</span>
                      )}
                    </div>
                  );
                })
              )}
            </div>
          </div>

          <div className="selected-sidebar">
            <h3>Your {activeTerm} Schedule</h3>
            <p className="selection-count">{activeTermCourses.length}/{maxCourses} courses · {totalSelectedCredits} credits</p>

            {activeTermCourseObjects.map(course => {
              const prereqCheck = checkPrereqs(course, coursesBeforeActiveTermIds);
              const hasBrokenPrereq = !prereqCheck.met;
              return (
                <div key={course.id} className={`selected-course ${hasBrokenPrereq ? 'prereq-broken' : ''}`}>
                  <div className="selected-course-info">
                    <span className="course-id">{course.id}</span>
                    <span className="course-title">{course.title}</span>
                    {course.description && <div className="selected-course-tooltip">{course.description}</div>}
                    {hasBrokenPrereq && (
                      <div className="prereq-broken-notice">
                        Missing prereqs: {prereqCheck.missing.join(', ')}
                      </div>
                    )}
                  </div>
                  <button className="remove-btn" onClick={() => handleRemoveCourse(course.id)}>✕</button>
                </div>
              );
            })}

            {activeTermCourses.length === 0 && (
              <p className="empty-slate">Click courses from the catalog to add them to your schedule</p>
            )}

            {activeTermCourses.length < maxCourses && activeTermCourses.length > 0 && (
              <div className="empty-slot">
                + {maxCourses - activeTermCourses.length} more {maxCourses - activeTermCourses.length === 1 ? 'slot' : 'slots'} available
              </div>
            )}
          </div>

          {creditSummary && (
            <DegreeProgress
              curriculum={curriculum}
              creditSummary={creditSummary}
              completedCourseIds={allCompletedIds}
              currentSelections={activeTermCourses}
            />
          )}
        </div>
      )}

      {/* Bottom actions */}
      <div className="planner-bottom-actions">
        <button className="btn btn-secondary" onClick={onBack}>← Back to School Details</button>
        <button
          className="btn btn-primary"
          disabled={totalCourseCount === 0}
          onClick={onFinish}
        >
          View Summary & Save →
        </button>
      </div>
    </div>
  );
}
