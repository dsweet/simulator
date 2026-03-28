import { useState, useMemo } from 'react';
import { School, ExamScore } from '../types';
import { studentProfile } from '../data/student';
import { creditPolicies } from '../data/creditPolicies';
import { evaluateCredits } from '../engine/creditEvaluator';

interface Props {
  school: School;
  alias: string;
  onContinue: () => void;
}

// Build a key for an exam to use in the overrides map
function examKey(exam: ExamScore): string {
  return `${exam.examType}:${exam.subject}`;
}

export default function StartingPoint({ school, alias, onContinue }: Props) {
  // Track per-exam score overrides for pending exams
  const [scoreOverrides, setScoreOverrides] = useState<Record<string, number>>(() => {
    const defaults: Record<string, number> = {};
    for (const exam of studentProfile.exams) {
      if (exam.score === null) {
        defaults[examKey(exam)] = exam.examType === 'IB-HL'
          ? studentProfile.assumedScores.hlDefault
          : studentProfile.assumedScores.slDefault;
      }
    }
    return defaults;
  });

  // Build a modified profile with the overrides applied
  const adjustedProfile = useMemo(() => ({
    ...studentProfile,
    exams: studentProfile.exams.map(exam => {
      if (exam.score !== null) return exam;
      const key = examKey(exam);
      const override = scoreOverrides[key];
      return override !== undefined ? { ...exam, score: override } : exam;
    }),
  }), [scoreOverrides]);

  const policy = creditPolicies.find(p => p.schoolId === school.id);
  const creditSummary = policy ? evaluateCredits(adjustedProfile, policy) : null;

  const pendingExams = studentProfile.exams.filter(e => e.score === null);

  const handleScoreChange = (exam: ExamScore, newScore: number) => {
    setScoreOverrides(prev => ({ ...prev, [examKey(exam)]: newScore }));
  };

  return (
    <div className="screen starting-point">
      <div className="dice-result">
        <div className="dice-animation">🎲</div>
        <h2>You've been assigned to...</h2>
        <h1 className="alias-name">{alias}</h1>
      </div>

      <div className="school-hints">
        <div className="hint-card">
          <span className="hint-label">Calendar</span>
          <span className="hint-value">{school.hints.calendarLabel}</span>
        </div>
        <div className="hint-card">
          <span className="hint-label">Size</span>
          <span className="hint-value">{school.hints.sizeLabel}</span>
        </div>
        <div className="hint-card">
          <span className="hint-label">Track</span>
          <span className="hint-value">
            {school.track === 'engineering-design' ? 'Engineering & Design' : 'Economics'}
          </span>
        </div>
      </div>

      {pendingExams.length > 0 && (
        <div className="score-adjuster">
          <h3>Adjust Pending IB Scores</h3>
          <p className="score-adjuster-hint">
            Slide to see how different scores change your credit. These exams haven't been scored yet.
          </p>
          <div className="score-adjuster-grid">
            {pendingExams.map(exam => {
              const key = examKey(exam);
              const currentScore = scoreOverrides[key] ?? (exam.examType === 'IB-HL' ? studentProfile.assumedScores.hlDefault : studentProfile.assumedScores.slDefault);
              return (
                <div key={key} className="score-adjuster-row">
                  <span className="score-exam-label">
                    {exam.examType === 'IB-HL' ? 'HL' : 'SL'} {exam.subject}
                  </span>
                  <div className="score-slider-group">
                    {[4, 5, 6].map(val => (
                      <button
                        key={val}
                        className={`score-btn ${currentScore === val ? 'score-btn-active' : ''}`}
                        onClick={() => handleScoreChange(exam, val)}
                      >
                        {val}
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {creditSummary && (
        <div className="credit-summary">
          <h3>Your AP/IB Credits at This School</h3>
          <p className="credit-headline">
            You're walking in with <strong>{creditSummary.totalCredits} credits</strong> already earned
          </p>

          <div className="credit-details">
            {creditSummary.results.map((result, i) => (
              <div key={i} className={`credit-row ${result.creditsAwarded > 0 ? 'awarded' : 'denied'}`}>
                <span className="exam-name">
                  {result.examName}
                  {result.isPending && <span className="pending-badge">pending</span>}
                </span>
                <span className="score">Score: {result.score}</span>
                <span className="credits">+{result.creditsAwarded} credits</span>
                {(result.courseEquivalent || result.courseDescription) && (
                  <span className="equivalent has-tooltip">
                    {result.courseEquivalent ? `= ${result.courseEquivalent}` : '📋'}
                    {result.courseDescription && (
                      <span className="credit-tooltip">{result.courseDescription}</span>
                    )}
                  </span>
                )}
              </div>
            ))}

            {creditSummary.diplomaBonus > 0 && (
              <div className="credit-row awarded diploma-bonus">
                <span className="exam-name">IB Diploma Bonus</span>
                <span className="score">Full Diploma</span>
                <span className="credits">+{creditSummary.diplomaBonus} credits</span>
              </div>
            )}
          </div>

          {creditSummary.satisfiedGenEds.length > 0 && (
            <div className="satisfied-geneds">
              <h4>Gen-Ed Requirements Satisfied</h4>
              <div className="gened-chips">
                {creditSummary.satisfiedGenEds.map(ge => (
                  <span key={ge} className="gened-chip">✓ {ge.replace('-', ' ')}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      <button className="btn btn-primary" onClick={onContinue}>
        Start Planning Your First {school.calendar === 'quarter' ? 'Quarter' : 'Semester'} →
      </button>
    </div>
  );
}
