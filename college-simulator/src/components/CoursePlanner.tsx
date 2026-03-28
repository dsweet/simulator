import { useState, useMemo, useEffect } from 'react';
import { School, SchoolRun, GameState, INTEREST_TAGS } from '../types';
import { getCurriculum } from '../data/curricula/index';
import { studentProfile } from '../data/student';
import { creditPolicies } from '../data/creditPolicies';
import { evaluateCredits } from '../engine/creditEvaluator';
import { addTermSelection } from '../engine/gameState';
import { checkPrereqs } from '../engine/progressTracker';
import DegreeProgress from './DegreeProgress';

interface Props {
  school: School;
  run: SchoolRun;
  year: number;
  gameState: GameState;
  onUpdateState: (state: GameState) => void;
  onYearComplete: () => void;
}

function getTermLabels(calendar: 'quarter' | 'semester', year: number): string[] {
  if (calendar === 'quarter') {
    return [`Fall Year ${year}`, `Winter Year ${year}`, `Spring Year ${year}`];
  }
  return [`Fall Year ${year}`, `Spring Year ${year}`];
}

export default function CoursePlanner({ school, run, year, gameState, onUpdateState, onYearComplete }: Props) {
  const curriculum = getCurriculum(school.id);
  const [currentTermIndex, setCurrentTermIndex] = useState(0);
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  const [lockedSlots, setLockedSlots] = useState<boolean[]>([]);
  const [slotLabels, setSlotLabels] = useState<string[]>([]);
  const [interestFilter, setInterestFilter] = useState<string | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [hasPrePopulated, setHasPrePopulated] = useState(false);

  const termLabels = getTermLabels(school.calendar, year);
  const currentTerm = termLabels[currentTermIndex];
  const maxCourses = school.calendar === 'quarter' ? 4 : 5;

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
    return ids;
  }, [creditSummary, curriculum]);

  // Courses already taken in previous terms
  const previouslyTaken = useMemo(() => {
    const taken = new Set<string>();
    for (const term of run.termSelections) {
      term.courses.forEach(c => taken.add(c));
    }
    // Also include courses already credited via AP/IB
    creditedCourseIds.forEach(id => taken.add(id));
    return taken;
  }, [run.termSelections, creditedCourseIds]);

  const previouslyTakenIds = useMemo(() => Array.from(previouslyTaken), [previouslyTaken]);

  // Pre-populate from recommended sequence when term changes
  useEffect(() => {
    if (!curriculum?.recommendedSequence || hasPrePopulated) return;

    const recTerm = curriculum.recommendedSequence.terms.find(t => t.termLabel === currentTerm);
    if (!recTerm) return;

    // Filter out courses already taken
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
  }, [curriculum, currentTerm, previouslyTaken, hasPrePopulated]);

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
      if (categoryFilter && course.category !== categoryFilter) return false;
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

  const handleConfirmTerm = () => {
    const newState = addTermSelection(gameState, school.id, {
      termLabel: currentTerm,
      courses: selectedCourses,
    });
    onUpdateState(newState);
    setSelectedCourses([]);
    setLockedSlots([]);
    setSlotLabels([]);

    if (currentTermIndex < termLabels.length - 1) {
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
          {termLabels.map((label, i) => (
            <span key={label} className={`term-dot ${i < currentTermIndex ? 'done' : i === currentTermIndex ? 'active' : ''}`}>
              {label}
            </span>
          ))}
        </div>
      </div>

      <div className={creditSummary ? 'planner-layout-3col' : 'planner-layout'}>
        <div className="course-catalog">
          <div className="catalog-controls">
            <input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="search-input"
            />

            <div className="filter-row">
              <select
                value={categoryFilter || ''}
                onChange={e => setCategoryFilter(e.target.value || null)}
                className="filter-select"
              >
                <option value="">All categories</option>
                <option value="major-required">Major Required</option>
                <option value="major-elective">Major Elective</option>
                <option value="gen-ed">Gen-Ed</option>
                <option value="elective">Elective</option>
              </select>

              <select
                value={interestFilter || ''}
                onChange={e => setInterestFilter(e.target.value || null)}
                className="filter-select"
              >
                <option value="">All interests</option>
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

          {selectedCourseObjects.map((course, idx) => (
            <div key={course.id} className={`selected-course ${lockedSlots[idx] ? 'slot-locked' : ''}`}>
              <div>
                <span className="course-id">{course.id}</span>
                <span className="course-title">{course.title}</span>
                {lockedSlots[idx] && <span className="lock-icon">🔒</span>}
                {slotLabels[idx] && <div className="slot-label">{slotLabels[idx]}</div>}
              </div>
              {!lockedSlots[idx] && (
                <button className="remove-btn" onClick={() => handleRemoveCourse(course.id)}>✕</button>
              )}
            </div>
          ))}

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
            {currentTermIndex < termLabels.length - 1
              ? `Confirm & Next ${school.calendar === 'quarter' ? 'Quarter' : 'Semester'} →`
              : `Confirm & Rate Year ${year} →`
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
