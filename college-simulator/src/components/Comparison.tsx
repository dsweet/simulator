import { GameState } from '../types';
import { schools } from '../data/schools';
import { costs } from '../data/costs';
import { creditPolicies } from '../data/creditPolicies';
import { studentProfile } from '../data/student';
import { evaluateCredits } from '../engine/creditEvaluator';

interface Props {
  gameState: GameState;
  onBack: () => void;
}

export default function Comparison({ gameState, onBack }: Props) {
  const completedRuns = gameState.runs.filter(r => r.completed);

  if (completedRuns.length === 0) {
    return (
      <div className="screen comparison">
        <h2>No schools to compare yet</h2>
        <button className="btn btn-primary" onClick={onBack}>Go Back</button>
      </div>
    );
  }

  // Sort by average overall rating
  const sortedRuns = [...completedRuns].sort((a, b) => {
    const avgA = a.yearRatings.reduce((sum, r) => sum + r.overallAppeal, 0) / a.yearRatings.length;
    const avgB = b.yearRatings.reduce((sum, r) => sum + r.overallAppeal, 0) / b.yearRatings.length;
    return avgB - avgA;
  });

  return (
    <div className="screen comparison">
      <h2>School Comparison Dashboard</h2>

      <div className="comparison-table-wrapper">
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Metric</th>
              {sortedRuns.map(run => {
                const school = schools.find(s => s.id === run.schoolId)!;
                return (
                  <th key={run.schoolId}>
                    {gameState.revealed ? school.name : run.alias}
                    <div className="th-subtitle">
                      {gameState.revealed ? school.program : school.track === 'engineering-design' ? 'Engineering' : 'Economics'}
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {/* Overall Rating */}
            <tr className="section-header">
              <td colSpan={sortedRuns.length + 1}>Academic Experience Ratings</td>
            </tr>
            <tr>
              <td>Overall Appeal (avg)</td>
              {sortedRuns.map(run => {
                const avg = run.yearRatings.reduce((sum, r) => sum + r.overallAppeal, 0) / run.yearRatings.length;
                return <td key={run.schoolId} className="rating-cell">{avg.toFixed(1)} / 5</td>;
              })}
            </tr>
            <tr>
              <td>Course Interest (avg)</td>
              {sortedRuns.map(run => {
                const avg = run.yearRatings.reduce((sum, r) => sum + r.courseInterest, 0) / run.yearRatings.length;
                return <td key={run.schoolId}>{avg.toFixed(1)} / 5</td>;
              })}
            </tr>
            <tr>
              <td>Outcomes Appeal</td>
              {sortedRuns.map(run => (
                <td key={run.schoolId}>{run.outcomeRating?.appeal || '-'} / 5</td>
              ))}
            </tr>

            {/* Cost (only if revealed) */}
            {gameState.revealed && (
              <>
                <tr className="section-header">
                  <td colSpan={sortedRuns.length + 1}>Cost</td>
                </tr>
                <tr>
                  <td>Annual Net Cost</td>
                  {sortedRuns.map(run => {
                    const cost = costs.find(c => c.schoolId === run.schoolId);
                    return <td key={run.schoolId}>${cost?.netCost.toLocaleString() || '?'}</td>;
                  })}
                </tr>
                <tr>
                  <td>4-Year Total</td>
                  {sortedRuns.map(run => {
                    const cost = costs.find(c => c.schoolId === run.schoolId);
                    return <td key={run.schoolId}>${cost?.fourYearNet.toLocaleString() || '?'}</td>;
                  })}
                </tr>
                <tr>
                  <td>Aid</td>
                  {sortedRuns.map(run => {
                    const cost = costs.find(c => c.schoolId === run.schoolId);
                    return <td key={run.schoolId}>{cost?.aidDescription || '?'}</td>;
                  })}
                </tr>
                <tr>
                  <td>Value (rating/cost)</td>
                  {sortedRuns.map(run => {
                    const cost = costs.find(c => c.schoolId === run.schoolId);
                    const avg = run.yearRatings.reduce((sum, r) => sum + r.overallAppeal, 0) / run.yearRatings.length;
                    const value = cost ? (avg / (cost.fourYearNet / 100000)).toFixed(2) : '?';
                    return <td key={run.schoolId}>{value}</td>;
                  })}
                </tr>
              </>
            )}

            {/* AP/IB Credits */}
            <tr className="section-header">
              <td colSpan={sortedRuns.length + 1}>AP/IB Credits</td>
            </tr>
            <tr>
              <td>Credits Entering</td>
              {sortedRuns.map(run => {
                const policy = creditPolicies.find(p => p.schoolId === run.schoolId);
                const credits = policy ? evaluateCredits(studentProfile, policy).totalCredits : 0;
                return <td key={run.schoolId}>{credits}</td>;
              })}
            </tr>

            {/* School Info (only if revealed) */}
            {gameState.revealed && (
              <>
                <tr className="section-header">
                  <td colSpan={sortedRuns.length + 1}>School Details</td>
                </tr>
                <tr>
                  <td>Calendar</td>
                  {sortedRuns.map(run => {
                    const school = schools.find(s => s.id === run.schoolId)!;
                    return <td key={run.schoolId}>{school.hints.calendarLabel}</td>;
                  })}
                </tr>
                <tr>
                  <td>Size</td>
                  {sortedRuns.map(run => {
                    const school = schools.find(s => s.id === run.schoolId)!;
                    return <td key={run.schoolId}>{school.hints.sizeLabel}</td>;
                  })}
                </tr>
              </>
            )}
          </tbody>
        </table>
      </div>

      {/* Notes section */}
      <div className="comparison-notes">
        <h3>Your Notes</h3>
        {sortedRuns.map(run => {
          const school = schools.find(s => s.id === run.schoolId)!;
          const hasNotes = run.yearRatings.some(yr => yr.notes) || run.outcomeRating?.notes;
          if (!hasNotes) return null;
          return (
            <div key={run.schoolId} className="school-notes">
              <h4>{gameState.revealed ? school.name : run.alias}</h4>
              {run.yearRatings.filter(yr => yr.notes).map(yr => (
                <p key={yr.year}><strong>Year {yr.year}:</strong> {yr.notes}</p>
              ))}
              {run.outcomeRating?.notes && (
                <p><strong>Outcomes:</strong> {run.outcomeRating.notes}</p>
              )}
            </div>
          );
        })}
      </div>

      <button className="btn btn-secondary" onClick={onBack}>
        Back to Track Selection
      </button>
    </div>
  );
}
