import { useState } from 'react';
import { Curriculum } from '../types';
import { CreditSummary } from '../engine/creditEvaluator';
import { computeFullProgress } from '../engine/progressTracker';

interface Props {
  curriculum: Curriculum;
  creditSummary: CreditSummary;
  completedCourseIds: string[];
  currentSelections: string[];
}

export default function DegreeProgress({ curriculum, creditSummary, completedCourseIds, currentSelections }: Props) {
  const [majorOpen, setMajorOpen] = useState(true);
  const [genEdOpen, setGenEdOpen] = useState(true);

  // Progress with completed courses only
  const progress = computeFullProgress(curriculum, creditSummary, completedCourseIds);

  // Progress including current selections (shown as "pending")
  const progressWithCurrent = computeFullProgress(curriculum, creditSummary, [...completedCourseIds, ...currentSelections]);

  const reqs = curriculum.degreeRequirements;
  const majorTotal = reqs.majorCourses.length;
  const majorDone = progress.majorCoursesCompleted.length;
  const majorPending = progressWithCurrent.majorCoursesCompleted.length - majorDone;

  // Map credit results to course equivalents for AP/IB badges
  const apCreditMap = new Map<string, string>();
  for (const result of creditSummary.results) {
    if (result.courseEquivalent) {
      // courseEquivalent might be like "MATH 124/125" or "CSE 121"
      // Try to match against major course IDs
      for (const majorId of reqs.majorCourses) {
        const equiv = result.courseEquivalent.replace(/\s/g, '');
        if (equiv.includes(majorId) || majorId.includes(equiv)) {
          apCreditMap.set(majorId, result.examName);
        }
      }
    }
  }

  const genEdCategories = reqs.genEdCategories;
  const genEdSatisfied = Object.values(progress.genEdsSatisfied).filter(g => g.satisfied).length;

  return (
    <div className="degree-progress">
      <h3 className="degree-progress-title">Degree Progress</h3>

      {/* Overall progress bar */}
      <div className="progress-overall">
        <div className="progress-bar-label">
          <span>{progressWithCurrent.totalCreditsEarned} / {progress.totalCreditsRequired} credits</span>
          <span>{progressWithCurrent.percentComplete}%</span>
        </div>
        <div className="progress-bar">
          <div className="progress-bar-fill progress-bar-confirmed" style={{ width: `${progress.percentComplete}%` }} />
          <div className="progress-bar-fill progress-bar-pending" style={{ width: `${progressWithCurrent.percentComplete - progress.percentComplete}%` }} />
        </div>
      </div>

      {/* Major Requirements */}
      <div className="progress-section">
        <button className="progress-section-header" onClick={() => setMajorOpen(!majorOpen)}>
          <span>{majorOpen ? '▼' : '▶'} Major Requirements</span>
          <span className="progress-count">{majorDone}{majorPending > 0 ? `+${majorPending}` : ''} / {majorTotal}</span>
        </button>
        {majorOpen && (
          <div className="progress-section-body">
            {reqs.majorCourses.map(courseId => {
              const course = curriculum.courses.find(c => c.id === courseId);
              const isCompleted = progress.majorCoursesCompleted.includes(courseId);
              const isPending = !isCompleted && currentSelections.includes(courseId);
              const apCredit = apCreditMap.get(courseId);

              return (
                <div key={courseId} className={`progress-item ${isCompleted ? 'completed' : ''} ${isPending ? 'pending' : ''}`}>
                  <span className="progress-check">
                    {isCompleted ? '✓' : isPending ? '◐' : '○'}
                  </span>
                  <span className="progress-item-label">
                    <span className="progress-course-id">{courseId}</span>
                    {course && <span className="progress-course-title">{course.title}</span>}
                  </span>
                  {apCredit && <span className="ap-badge">AP/IB</span>}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Gen-Ed Requirements */}
      <div className="progress-section">
        <button className="progress-section-header" onClick={() => setGenEdOpen(!genEdOpen)}>
          <span>{genEdOpen ? '▼' : '▶'} General Education</span>
          <span className="progress-count">{genEdSatisfied} / {genEdCategories.length}</span>
        </button>
        {genEdOpen && (
          <div className="progress-section-body">
            {genEdCategories.map(cat => {
              const state = progress.genEdsSatisfied[cat.id];
              const stateWithCurrent = progressWithCurrent.genEdsSatisfied[cat.id];
              if (!state) return null;

              const confirmedPct = Math.min(100, Math.round((state.creditsEarned / state.creditsRequired) * 100));
              const pendingPct = Math.min(100, Math.round((stateWithCurrent.creditsEarned / state.creditsRequired) * 100)) - confirmedPct;

              // Check if satisfied by AP/IB
              const satisfiedByAP = creditSummary.satisfiedGenEds.includes(cat.id);

              return (
                <div key={cat.id} className={`progress-gened ${state.satisfied ? 'satisfied' : ''}`}>
                  <div className="progress-gened-header">
                    <span className="progress-check">{stateWithCurrent.satisfied ? '✓' : '○'}</span>
                    <span className="progress-gened-name">{cat.name}</span>
                    {satisfiedByAP && <span className="ap-badge">AP/IB</span>}
                  </div>
                  <div className="progress-gened-bar">
                    <div className="progress-bar-mini">
                      <div className="progress-bar-fill progress-bar-confirmed" style={{ width: `${confirmedPct}%` }} />
                      <div className="progress-bar-fill progress-bar-pending" style={{ width: `${pendingPct}%` }} />
                    </div>
                    <span className="progress-gened-credits">
                      {stateWithCurrent.creditsEarned}/{state.creditsRequired}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Electives */}
      <div className="progress-section">
        <div className="progress-section-header" style={{ cursor: 'default' }}>
          <span>Free Electives</span>
          <span className="progress-count">{progressWithCurrent.electiveCreditsEarned} / {progress.electiveCreditsRequired} credits</span>
        </div>
      </div>
    </div>
  );
}
