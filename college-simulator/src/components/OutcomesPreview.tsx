import { useState } from 'react';
import { School, GameState, OutcomeRating } from '../types';
import { outcomes } from '../data/outcomes';
import { addOutcomeRating } from '../engine/gameState';
import { getCurriculum } from '../data/curricula/index';
import { buildSavedCurriculum, saveCurriculumToStorage } from '../engine/curriculumExport';

interface Props {
  school: School;
  alias: string;
  gameState: GameState;
  onUpdateState: (state: GameState) => void;
  onDone: () => void;
  onContinueYear?: () => void;
}

export default function OutcomesPreview({ school, alias, gameState, onUpdateState, onDone, onContinueYear }: Props) {
  const [appeal, setAppeal] = useState(0);
  const [notes, setNotes] = useState('');
  const [saved, setSaved] = useState(false);

  const outcomeData = outcomes.find(o => o.schoolId === school.id);

  if (!outcomeData) {
    return <div className="screen"><h2>Outcome data not available</h2></div>;
  }

  const handleSubmit = () => {
    const rating: OutcomeRating = { appeal, notes };
    const newState = addOutcomeRating(gameState, school.id, rating);
    onUpdateState(newState);
    onDone();
  };

  const handleSave = () => {
    const curriculum = getCurriculum(school.id);
    const run = gameState.runs.find(r => r.schoolId === school.id);
    if (!curriculum || !outcomeData || !run) return;
    const savedCurriculum = buildSavedCurriculum(run, school, curriculum, outcomeData, gameState.revealed);
    saveCurriculumToStorage(savedCurriculum);
    setSaved(true);
  };

  return (
    <div className="screen outcomes-preview">
      <h2>Career Outcomes for {alias}</h2>
      <p>Here's what students who follow this path typically achieve. Remember — you still don't know which school this is!</p>

      <div className="outcomes-grid">
        {outcomeData.medianStartingSalary && (
          <div className="outcome-card">
            <h4>Starting Salary</h4>
            <div className="outcome-value">${outcomeData.medianStartingSalary.toLocaleString()}</div>
            <p>Median for graduates in this program</p>
          </div>
        )}

        {outcomeData.medianMidCareerSalary && (
          <div className="outcome-card">
            <h4>Mid-Career Salary</h4>
            <div className="outcome-value">${outcomeData.medianMidCareerSalary.toLocaleString()}</div>
            <p>Median at 10+ years experience</p>
          </div>
        )}

        {outcomeData.gradSchoolRate && (
          <div className="outcome-card">
            <h4>Graduate School</h4>
            <div className="outcome-value">{outcomeData.gradSchoolRate}%</div>
            <p>Continue to graduate or professional school</p>
          </div>
        )}
      </div>

      <div className="outcome-section">
        <h4>Common Job Titles</h4>
        <div className="tag-list">
          {outcomeData.commonJobTitles.map(title => (
            <span key={title} className="tag">{title}</span>
          ))}
        </div>
      </div>

      <div className="outcome-section">
        <h4>Top Industries</h4>
        <div className="tag-list">
          {outcomeData.commonIndustries.map(ind => (
            <span key={ind} className="tag">{ind}</span>
          ))}
        </div>
      </div>

      <div className="outcome-section">
        <h4>Top Employers</h4>
        <div className="tag-list">
          {outcomeData.topEmployers.map(emp => (
            <span key={emp} className="tag">{emp}</span>
          ))}
        </div>
      </div>

      <div className="outcome-section">
        <h4>Common Graduate Programs</h4>
        <div className="tag-list">
          {outcomeData.commonGradPrograms.map(prog => (
            <span key={prog} className="tag">{prog}</span>
          ))}
        </div>
      </div>

      <div className="outcome-section">
        <h4>Quantitative Preparation</h4>
        <p>{outcomeData.quantitativePrep}</p>
      </div>

      <div className="outcome-section">
        <h4>Graduate School Readiness</h4>
        <p>{outcomeData.gradSchoolNotes}</p>
      </div>

      <div className="outcome-section">
        <h4>Internship Culture</h4>
        <p>{outcomeData.internshipCulture}</p>
      </div>

      <div className="rating-section">
        <h3>How appealing are these outcomes?</h3>
        <div className="stars">
          {[1, 2, 3, 4, 5].map(star => (
            <button
              key={star}
              className={`star ${star <= appeal ? 'filled' : ''}`}
              onClick={() => setAppeal(star)}
            >
              {star <= appeal ? '★' : '☆'}
            </button>
          ))}
        </div>
        <textarea
          value={notes}
          onChange={e => setNotes(e.target.value)}
          placeholder="Any thoughts on these career outcomes?"
          rows={2}
          className="notes-input"
        />
      </div>

      <div className="actions">
        <button className="btn btn-primary" disabled={appeal === 0} onClick={handleSubmit}>
          Submit & Return to Track Selection →
        </button>
        <button className="btn btn-secondary" disabled={saved} onClick={handleSave}>
          {saved ? 'Curriculum Saved!' : 'Save This Curriculum'}
        </button>
        {onContinueYear && (
          <button className="btn btn-secondary" onClick={onContinueYear}>
            Go Back & Continue Another Year First
          </button>
        )}
      </div>
    </div>
  );
}
