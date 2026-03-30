import { useState, useMemo, useEffect } from 'react';
import { School, SchoolRun, GameState, INTEREST_TAGS } from '../types';
import { getCurriculum } from '../data/curricula/index';
import { studentProfile } from '../data/student';
import { creditPolicies } from '../data/creditPolicies';
import { evaluateCredits } from '../engine/creditEvaluator';
import { addTermSelection, addMultipleTermSelections, rewindToTerm } from '../engine/gameState';
import { checkPrereqs } from '../engine/progressTracker';
import DegreeProgress from './DegreeProgress';

interface Props {
  school: School;
  run: SchoolRun;
  year: number;
  gameState: GameState;
  onUpdateState: (state: GameState) => void;
  onYearComplete: () => void;
  onUpdateYear: (year: number) => void;
}

function getTermLabels(calendar: 'quarter' | 'semester', year: number): string[] {
  if (calendar === 'quarter') {
    return [`Fall Year ${year}`, `Winter Year ${year}`, `Spring Year ${year}`];
  }
  return [`Fall Year ${year}`, `Spring Year ${year}`];
}

export default function CoursePlanner({ school, run, year, gameState, onUpdateState, onYearComplete, onUpdateYear }: Props) {
  const curriculum = getCurriculum(school.id);
  const [currentTermIndex, setCurrentTermIndex] = useState(0);
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  const [lockedSlots, setLockedSlots] = useState<boolean[]>([]);
  const [slotLabels, setSlotLabels] = useState<string[]>([]);
  const [interestFilter, setInterestFilter] = useState<string | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [hasPrePopulated, setHasPrePopulated] = useState(false);
  // Stashed future terms when rewinding (so we can restore previous selections)
  const [stashedTerms, setStashedTerms] = useState<Array<{ termLabel: string; courses: string[] }>>([]);

  const termsPerYear = school.calendar === 'quarter' ? 3 : 2;

  // Show terms covering current year AND any stashed terms beyond it
  const stashedMaxTerms = stashedTerms.length > 0
    ? run.termSelections.length + stashedTerms.length
    : 0;
  const maxYear = Math.max(year, Math.ceil(stashedMaxTerms / termsPerYear));

  const allTermLabels: string[] = [];
  for (let y = 1; y <= maxYear; y++) {
    allTermLabels.push(...getTermLabels(school.calendar, y));
  }
  // The "global" index into allTermLabels for the currently active term
  const globalTermIndex = (year - 1) * termsPerYear + currentTermIndex;
  const currentTerm = allTermLabels[globalTermIndex];
  const maxCourses = school.calendar === 'quarter' ? 3 : 4;

  // Credit summary for degree progress
  const policy = creditPolicies.find(p => p.schoolId === school.id);
  const creditSummary = policy ? evaluateCredits(studentProfile, policy) : null;

  // Course IDs the student already has credit for via AP/IB
  const creditedCourseIds = useMemo(() => {
    if (!creditSummary || !curriculum) return new Set<string>();
    const ids = new Set<string>();
    const catalogIds = new Set(curriculum.courses.map(c => c.id));
    for (const result of creditSummary.results) {
      if (result.creditsAwarded <= 0 || !result.courseEquivalent) continue;
      // courseEquivalent may be "MATH 124/125" — split on "/" and normalize
      const parts = result.courseEquivalent.split('/').map(p => p.trim());
      const prefix = parts[0].replace(/\s*\d+.*$/, ''); // e.g., "MATH"
      for (const part of parts) {
        const full = part.includes(prefix) ? part : `${prefix} ${part}`;
        const normalized = full.replace(/\s+/g, '').toUpperCase();
        if (catalogIds.has(normalized)) {
          ids.add(normalized);
        }
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

  // Courses already taken in previous terms (including stashed terms before current)
  const previouslyTaken = useMemo(() => {
    const taken = new Set<string>();
    for (const term of run.termSelections) {
      term.courses.forEach(c => taken.add(c));
    }
    // Include stashed terms that come before the current term
    if (stashedTerms.length > 0) {
      // stashedTerms[0] starts at totalConfirmedTerms (the rewind point)
      const stashStartIdx = totalConfirmedTerms;
      for (let i = 0; i < stashedTerms.length; i++) {
        const stashGlobalIdx = stashStartIdx + i;
        if (stashGlobalIdx >= globalTermIndex) break; // only include terms before current
        stashedTerms[i].courses.forEach(c => taken.add(c));
      }
    }
    // Also include courses already credited via AP/IB
    creditedCourseIds.forEach(id => taken.add(id));
    return taken;
  }, [run.termSelections, creditedCourseIds, stashedTerms, totalConfirmedTerms, globalTermIndex]);

  const previouslyTakenIds = useMemo(() => Array.from(previouslyTaken), [previouslyTaken]);

  // Pre-populate from stashed terms (rewind) or recommended sequence
  useEffect(() => {
    if (!curriculum || hasPrePopulated) return;

    // First check stashed terms (from rewind)
    const stashed = stashedTerms.find(t => t.termLabel === currentTerm);
    if (stashed) {
      // Restore previous selections, filtering out courses no longer in catalog or already taken
      const validCourses = stashed.courses.filter(
        id => curriculum.courses.some(c => c.id === id) && !previouslyTaken.has(id)
      );
      setSelectedCourses(validCourses);
      setLockedSlots(validCourses.map(() => false));
      setSlotLabels(validCourses.map(() => ''));
      setHasPrePopulated(true);
      return;
    }

    // Fall back to recommended sequence
    const recTerm = curriculum.recommendedSequence?.terms.find(t => t.termLabel === currentTerm);
    if (!recTerm) { setHasPrePopulated(true); return; }

    const validCourses: string[] = [];
    const validLocked: boolean[] = [];
    const validLabels: string[] = [];

    for (let i = 0; i < recTerm.courses.length; i++) {
      const courseId = recTerm.courses[i];
      if (previouslyTaken.has(courseId)) continue;
      if (!curriculum.courses.some(c => c.id === courseId)) continue;
      validCourses.push(courseId);
      validLocked.push(recTerm.locked[i] ?? false);
      validLabels.push(recTerm.slotLabels?.[i] ?? '');
    }

    setSelectedCourses(validCourses);
    setLockedSlots(validLocked);
    setSlotLabels(validLabels);
    setHasPrePopulated(true);
  }, [curriculum, currentTerm, previouslyTaken, hasPrePopulated, stashedTerms]);

  // Reset term index when year changes (e.g., year 1 → year 2)
  useEffect(() => {
    setCurrentTermIndex(0);
    setHasPrePopulated(false);
  }, [year]);

  // Reset pre-population flag when term changes
  useEffect(() => {
    setHasPrePopulated(false);
  }, [currentTermIndex]);

  // Filter available courses
  const availableCourses = useMemo(() => {
    if (!curriculum) return [];
    return curriculum.courses.filter(course => {
      if (previouslyTaken.has(course.id)) return false;
      if (selectedCourses.includes(course.id)) return false;
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
  }, [curriculum, previouslyTaken, selectedCourses, interestFilter, categoryFilter, searchQuery]);

  const selectedCourseObjects = useMemo(() => {
    if (!curriculum) return [];
    return selectedCourses.map(id => curriculum.courses.find(c => c.id === id)!).filter(Boolean);
  }, [curriculum, selectedCourses]);

  const totalSelectedCredits = selectedCourseObjects.reduce((sum, c) => sum + c.credits, 0);

  if (!curriculum) {
    return (
      <div className="screen course-planner">
        <h2>Course data not yet available for this school</h2>
        <p>The curriculum data is still being researched. Check back soon!</p>
      </div>
    );
  }

  const handleSelectCourse = (courseId: string) => {
    if (selectedCourses.length >= maxCourses) return;
    setSelectedCourses(prev => [...prev, courseId]);
    setLockedSlots(prev => [...prev, false]);
    setSlotLabels(prev => [...prev, '']);
  };

  const handleRemoveCourse = (courseId: string) => {
    const idx = selectedCourses.indexOf(courseId);
    if (idx === -1) return;
    // Don't allow removing locked courses
    if (lockedSlots[idx]) return;
    setSelectedCourses(prev => prev.filter((_, i) => i !== idx));
    setLockedSlots(prev => prev.filter((_, i) => i !== idx));
    setSlotLabels(prev => prev.filter((_, i) => i !== idx));
  };

  const handleResetToRecommended = () => {
    setHasPrePopulated(false);
  };

  // Total confirmed terms across all years
  const totalConfirmedTerms = run.termSelections.length;

  // When stashed terms exist, the "navigable" range extends beyond confirmed terms
  // stashedTerms[0] corresponds to globalTermIndex (the term being re-edited),
  // so stashed terms cover globalTermIndex through globalTermIndex + stashedTerms.length - 1
  const stashedEndIndex = stashedTerms.length > 0
    ? totalConfirmedTerms + stashedTerms.length
    : totalConfirmedTerms;

  const handleGoToTerm = (globalIdx: number) => {
    if (globalIdx === globalTermIndex) return;

    // Navigating within stashed range (forward into stashed terms)
    if (stashedTerms.length > 0 && globalIdx >= totalConfirmedTerms && globalIdx < stashedEndIndex) {
      const targetYear = Math.floor(globalIdx / termsPerYear) + 1;
      const targetTermIndex = globalIdx % termsPerYear;
      if (targetYear !== year) {
        onUpdateYear(targetYear);
      }
      setCurrentTermIndex(targetTermIndex);
      setSelectedCourses([]);
      setLockedSlots([]);
      setSlotLabels([]);
      setHasPrePopulated(false);
      return;
    }

    // Navigating backward into confirmed terms
    if (globalIdx < totalConfirmedTerms) {
      // If we don't already have a stash, create one from confirmed terms
      if (stashedTerms.length === 0) {
        const futureTerms = run.termSelections.slice(globalIdx);
        setStashedTerms(futureTerms);
      } else {
        // We already have a stash — merge: confirmed terms from globalIdx onward + existing stash
        const confirmedPortion = run.termSelections.slice(globalIdx);
        const newStash = [...confirmedPortion, ...stashedTerms];
        setStashedTerms(newStash);
      }
      // Rewind game state
      const newState = rewindToTerm(gameState, school.id, globalIdx);
      onUpdateState(newState);
      const targetYear = Math.floor(globalIdx / termsPerYear) + 1;
      const targetTermIndex = globalIdx % termsPerYear;
      if (targetYear !== year) {
        onUpdateYear(targetYear);
      }
      setCurrentTermIndex(targetTermIndex);
      setSelectedCourses([]);
      setLockedSlots([]);
      setSlotLabels([]);
      setHasPrePopulated(false);
      return;
    }
  };

  const handleConfirmTerm = () => {
    let newState = addTermSelection(gameState, school.id, {
      termLabel: currentTerm,
      courses: selectedCourses,
    });

    // If we have stashed terms from a rewind, restore all terms after the re-planned one
    if (stashedTerms.length > 1) {
      const remainingStashed = stashedTerms.slice(1);
      newState = addMultipleTermSelections(newState, school.id, remainingStashed);
      onUpdateState(newState);
      setStashedTerms([]);
      setSelectedCourses([]);
      setLockedSlots([]);
      setSlotLabels([]);

      // Jump back to where the user was (first unplanned term)
      const restoredCount = newState.runs.find(r => r.schoolId === school.id)!.termSelections.length;
      const restoredYear = Math.floor((restoredCount - 1) / termsPerYear) + 1;
      const restoredTermIdx = restoredCount % termsPerYear;

      // If we're at a year boundary (all terms for that year done), trigger year complete
      if (restoredTermIdx === 0) {
        if (restoredYear !== year) {
          onUpdateYear(restoredYear);
        }
        onYearComplete();
      } else {
        if (restoredYear !== year) {
          onUpdateYear(restoredYear);
        }
        setCurrentTermIndex(restoredTermIdx);
      }
      return;
    }

    // Normal flow (no stashed terms to restore)
    onUpdateState(newState);
    setStashedTerms([]);
    setSelectedCourses([]);
    setLockedSlots([]);
    setSlotLabels([]);

    if (currentTermIndex < termsPerYear - 1) {
      setCurrentTermIndex(prev => prev + 1);
    } else {
      onYearComplete();
    }
  };

  const allTakenIds = [...previouslyTakenIds, ...selectedCourses];
  const hasRecommended = !!curriculum.recommendedSequence?.terms.find(t => t.termLabel === currentTerm);

  return (
    <div className="screen course-planner">
      <div className="planner-header">
        <h2>{run.alias} — {currentTerm}</h2>
        <div className="term-progress">
          {allTermLabels.map((label, i) => {
            const isDone = (i < totalConfirmedTerms || (i < stashedEndIndex && stashedTerms.length > 0)) && i !== globalTermIndex;
            const isActive = i === globalTermIndex;
            const isStashed = stashedTerms.length > 0 && i >= totalConfirmedTerms && i < stashedEndIndex && i !== globalTermIndex;
            const canClick = isDone && !isActive;
            const isFuture = i >= stashedEndIndex;
            return (
              <span
                key={label}
                className={`term-dot ${isDone ? 'done' : ''} ${isActive ? 'active' : ''} ${canClick ? 'clickable' : ''} ${isFuture ? 'future' : ''} ${isStashed ? 'stashed' : ''}`}
                onClick={canClick ? () => handleGoToTerm(i) : undefined}
              >
                {label}
              </span>
            );
          })}
        </div>
      </div>

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
                const prereqCheck = checkPrereqs(course, allTakenIds);
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
          <h3>Your {currentTerm} Schedule</h3>
          <p className="selection-count">{selectedCourses.length}/{maxCourses} courses · {totalSelectedCredits} credits</p>

          {selectedCourseObjects.map((course, idx) => {
            const prereqCheck = checkPrereqs(course, [...previouslyTakenIds]);
            const hasBrokenPrereq = !prereqCheck.met;
            return (
              <div key={course.id} className={`selected-course ${lockedSlots[idx] ? 'slot-locked' : ''} ${hasBrokenPrereq ? 'prereq-broken' : ''}`}>
                <div className="selected-course-info">
                  <span className="course-id">{course.id}</span>
                  <span className="course-title">{course.title}</span>
                  {course.description && <div className="selected-course-tooltip">{course.description}</div>}
                  {lockedSlots[idx] && <span className="lock-icon">🔒</span>}
                  {slotLabels[idx] && <div className="slot-label">{slotLabels[idx]}</div>}
                  {hasBrokenPrereq && (
                    <div className="prereq-broken-notice">
                      Missing prereqs: {prereqCheck.missing.join(', ')}
                    </div>
                  )}
                </div>
                {!lockedSlots[idx] && (
                  <button className="remove-btn" onClick={() => handleRemoveCourse(course.id)}>✕</button>
                )}
              </div>
            );
          })}

          {selectedCourses.length === 0 && (
            <p className="empty-slate">Click courses from the catalog to add them to your schedule</p>
          )}

          {selectedCourses.length < maxCourses && selectedCourses.length > 0 && (
            <div className="empty-slot">
              + {maxCourses - selectedCourses.length} more {maxCourses - selectedCourses.length === 1 ? 'slot' : 'slots'} available
            </div>
          )}

          {hasRecommended && (
            <button className="reset-recommended" onClick={handleResetToRecommended}>
              ↻ Reset to recommended
            </button>
          )}

          <button
            className="btn btn-primary confirm-btn"
            disabled={selectedCourses.length === 0}
            onClick={handleConfirmTerm}
          >
            {currentTermIndex < termsPerYear - 1
              ? `Confirm & Next ${school.calendar === 'quarter' ? 'Quarter' : 'Semester'} →`
              : year < 2 ? `Confirm & Start Year ${year + 1} →` : `Confirm & Rate Years 1–${year} →`
            }
          </button>
        </div>

        {creditSummary && (
          <DegreeProgress
            curriculum={curriculum}
            creditSummary={creditSummary}
            completedCourseIds={previouslyTakenIds}
            currentSelections={selectedCourses}
          />
        )}
      </div>
    </div>
  );
}
