import { useState } from 'react';
import { GameState } from '../types';
import { schools } from '../data/schools';
import { costs } from '../data/costs';
import { studentLife } from '../data/studentLife';
import { canFullReveal } from '../engine/gameState';

interface Props {
  gameState: GameState;
  onUpdateState: (state: GameState) => void;
  onBack: () => void;
  onCompare: () => void;
}

export default function Reveal({ gameState, onUpdateState, onBack, onCompare }: Props) {
  const [revealedIndex, setRevealedIndex] = useState(-1);
  const fullReveal = canFullReveal(gameState);
  const completedRuns = gameState.runs.filter(r => r.completed);

  // Sort by average rating (highest first)
  const sortedRuns = [...completedRuns].sort((a, b) => {
    const avgA = a.yearRatings.reduce((sum, r) => sum + r.overallAppeal, 0) / a.yearRatings.length;
    const avgB = b.yearRatings.reduce((sum, r) => sum + r.overallAppeal, 0) / b.yearRatings.length;
    return avgB - avgA;
  });

  const handleRevealNext = () => {
    setRevealedIndex(prev => prev + 1);
    if (revealedIndex + 1 >= sortedRuns.length - 1) {
      onUpdateState({ ...gameState, revealed: true, peekUsed: true });
    }
  };

  return (
    <div className="screen reveal">
      <h2>{fullReveal ? '🎉 The Grand Reveal' : '👀 Sneak Peek'}</h2>
      <p>
        {fullReveal
          ? 'You\'ve explored all 6 schools. Time to find out which was which! Schools are revealed from your highest-rated to lowest.'
          : 'Here\'s an early look at the schools you\'ve explored so far. Complete all 6 for the full reveal!'
        }
      </p>

      <div className="reveal-cards">
        {sortedRuns.map((run, index) => {
          const isRevealed = index <= revealedIndex;
          const school = schools.find(s => s.id === run.schoolId)!;
          const cost = costs.find(c => c.schoolId === run.schoolId);
          const life = studentLife.find(l => l.schoolId === run.schoolId);
          const avgRating = (run.yearRatings.reduce((sum, r) => sum + r.overallAppeal, 0) / run.yearRatings.length).toFixed(1);

          return (
            <div key={run.schoolId} className={`reveal-card ${isRevealed ? 'revealed' : 'hidden'}`}>
              <div className="reveal-card-header">
                <span className="rank">#{index + 1}</span>
                <span className="alias">{run.alias}</span>
                <span className="avg-rating">{avgRating}/5 ★</span>
              </div>

              {isRevealed ? (
                <div className="reveal-content">
                  <h3 className="school-name">{school.name}</h3>
                  <p className="program">{school.program}</p>

                  {cost && (
                    <div className="cost-reveal">
                      <div className="cost-item">
                        <span className="cost-label">Annual Net Cost</span>
                        <span className="cost-value">${cost.netCost.toLocaleString()}/year</span>
                      </div>
                      <div className="cost-item">
                        <span className="cost-label">4-Year Total</span>
                        <span className="cost-value">${cost.fourYearNet.toLocaleString()}</span>
                      </div>
                      <div className="cost-item">
                        <span className="cost-label">Aid</span>
                        <span className="cost-value">{cost.aidDescription}</span>
                      </div>
                    </div>
                  )}

                  {life && (
                    <div className="life-reveal">
                      <p><strong>Location:</strong> {life.location.city}, {life.location.state} — {life.location.distanceFromSeattle}</p>
                      <p><strong>Climate:</strong> {life.location.climate}</p>
                      <p><strong>Vibe:</strong> {life.campusCulture.campusVibe}</p>
                      <p><strong>Housing:</strong> {life.housing.description}</p>
                    </div>
                  )}

                  {run.yearRatings.map(yr => (
                    <div key={yr.year} className="year-summary">
                      <strong>Year {yr.year}:</strong> Interest {yr.courseInterest}/5, Overall {yr.overallAppeal}/5
                      {yr.notes && <p className="year-notes">"{yr.notes}"</p>}
                    </div>
                  ))}

                  {run.outcomeRating && (
                    <div className="outcome-summary">
                      <strong>Outcomes appeal:</strong> {run.outcomeRating.appeal}/5
                      {run.outcomeRating.notes && <p className="outcome-notes">"{run.outcomeRating.notes}"</p>}
                    </div>
                  )}
                </div>
              ) : (
                <div className="hidden-content">
                  <p>🔒 Not yet revealed</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="reveal-actions">
        {revealedIndex < sortedRuns.length - 1 && (
          <button className="btn btn-primary" onClick={handleRevealNext}>
            Reveal #{revealedIndex + 2} →
          </button>
        )}
        {revealedIndex >= sortedRuns.length - 1 && (
          <button className="btn btn-primary" onClick={onCompare}>
            View Full Comparison →
          </button>
        )}
        <button className="btn btn-secondary" onClick={onBack}>
          Back to Track Selection
        </button>
      </div>
    </div>
  );
}
