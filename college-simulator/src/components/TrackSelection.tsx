import { GameState, Track } from '../types';
import { getUnplayedSchools, canPeek, canFullReveal, getCompletedRunCount } from '../engine/gameState';

interface Props {
  gameState: GameState;
  onSelectTrack: (track: Track) => void;
  onReset: () => void;
  onPeek: () => void;
  onFullReveal: () => void;
}

export default function TrackSelection({ gameState, onSelectTrack, onReset, onPeek, onFullReveal }: Props) {
  const engineUnplayed = getUnplayedSchools(gameState, 'engineering-design');
  const econUnplayed = getUnplayedSchools(gameState, 'economics');
  const completedCount = getCompletedRunCount(gameState);

  const completedRuns = gameState.runs.filter(r => r.completed);

  return (
    <div className="screen track-selection">
      <div className="intro">
        <h2>Choose Your Academic Path</h2>
        <p>
          You're about to explore what college life would actually feel like —
          choosing real courses, building a real schedule, making progress toward a real degree.
          The school's identity is hidden. You'll rate each experience blind, then reveal everything at the end.
        </p>
      </div>

      <div className="tracks">
        <button
          className="track-card"
          onClick={() => onSelectTrack('engineering-design')}
        >
          <div className="track-icon">🎨</div>
          <h3>Engineering & Design Track</h3>
          <p>Human-centered design, UX research, interaction design, prototyping, design thinking</p>
          <div className="track-meta">
            {engineUnplayed.length > 0
              ? `${engineUnplayed.length} new school to explore`
              : 'All schools explored — replay to try different courses'}
          </div>
        </button>

        <button
          className="track-card"
          onClick={() => onSelectTrack('economics')}
        >
          <div className="track-icon">📊</div>
          <h3>Economics Track</h3>
          <p>Microeconomics, macroeconomics, econometrics, game theory, policy analysis, finance</p>
          <div className="track-meta">
            {econUnplayed.length > 0
              ? `${econUnplayed.length} new school${econUnplayed.length > 1 ? 's' : ''} to explore`
              : 'All schools explored — replay to try different courses'}
          </div>
        </button>
      </div>

      {completedRuns.length > 0 && (
        <div className="completed-runs">
          <h3>Schools Explored</h3>
          <div className="run-chips">
            {completedRuns.map(run => (
              <div key={run.schoolId} className="run-chip">
                <span className="alias">{run.alias}</span>
                <span className="rating">
                  Avg: {(run.yearRatings.reduce((sum, r) => sum + r.overallAppeal, 0) / run.yearRatings.length).toFixed(1)}/5
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="actions">
        {canPeek(gameState) && (
          <button className="btn btn-peek" onClick={onPeek}>
            👀 Peek — reveal {completedCount} schools
          </button>
        )}
        {canFullReveal(gameState) && (
          <button className="btn btn-reveal" onClick={onFullReveal}>
            🎉 Grand Reveal — unmask all 6 schools!
          </button>
        )}
        {completedCount > 0 && (
          <button className="btn btn-secondary" onClick={onReset}>
            Start Over
          </button>
        )}
      </div>
    </div>
  );
}
