import { useState } from 'react';
import { YearRating as YearRatingType } from '../types';

interface Props {
  alias: string;
  year: number;
  onSubmit: (rating: YearRatingType) => void;
  onContinue?: () => void;
  canFinish: boolean;
}

function StarRating({ value, onChange, label }: { value: number; onChange: (v: number) => void; label: string }) {
  return (
    <div className="star-rating">
      <label>{label}</label>
      <div className="stars">
        {[1, 2, 3, 4, 5].map(star => (
          <button
            key={star}
            className={`star ${star <= value ? 'filled' : ''}`}
            onClick={() => onChange(star)}
          >
            {star <= value ? '★' : '☆'}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function YearRating({ alias, year, onSubmit, onContinue, canFinish }: Props) {
  const [courseInterest, setCourseInterest] = useState(0);
  const [overall, setOverall] = useState(0);
  const [notes, setNotes] = useState('');

  const allRated = courseInterest > 0 && overall > 0;

  const handleSubmit = () => {
    onSubmit({
      year,
      courseInterest,
      overallAppeal: overall,
      notes,
    });
  };

  const periodLabel = year <= 2 ? 'your first two years' : `year ${year}`;

  return (
    <div className="screen year-rating">
      <h2>Rate {periodLabel} at {alias}</h2>
      <p>Think about the courses you chose and the overall academic experience.</p>

      <div className="rating-form">
        <StarRating value={courseInterest} onChange={setCourseInterest} label="How interesting were the courses available to you?" />
        <StarRating value={overall} onChange={setOverall} label={`Overall appeal of ${periodLabel}`} />

        <div className="notes-field">
          <label>Notes (optional)</label>
          <textarea
            value={notes}
            onChange={e => setNotes(e.target.value)}
            placeholder="What stood out? What was missing? Any courses you loved or wished existed?"
            rows={3}
          />
        </div>
      </div>

      <div className="rating-actions">
        {canFinish && (
          <button className="btn btn-primary" disabled={!allRated} onClick={handleSubmit}>
            Submit Rating & See Career Outcomes →
          </button>
        )}
        {!canFinish && (
          <button className="btn btn-primary" disabled={!allRated} onClick={handleSubmit}>
            Submit Rating & Continue to Year {year + 1} →
          </button>
        )}
        {onContinue && canFinish && (
          <button className="btn btn-secondary" disabled={!allRated} onClick={() => {
            handleSubmit();
            // Parent will handle continuing
          }}>
            Submit & Continue to Year {year + 1} Instead
          </button>
        )}
      </div>
    </div>
  );
}
