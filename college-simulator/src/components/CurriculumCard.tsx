import { SavedCurriculum } from '../types';

interface Props {
  saved: SavedCurriculum;
  onDownload: (saved: SavedCurriculum) => void;
  onDelete: (id: string) => void;
}

export default function CurriculumCard({ saved, onDownload, onDelete }: Props) {
  const termsPerYear = saved.calendar === 'quarter' ? 3 : 2;
  const totalYears = Math.ceil(saved.termSelections.length / termsPerYear);

  // Group terms by year
  const years: { year: number; terms: typeof saved.termSelections }[] = [];
  for (let y = 0; y < totalYears; y++) {
    years.push({
      year: y + 1,
      terms: saved.termSelections.slice(y * termsPerYear, (y + 1) * termsPerYear),
    });
  }

  return (
    <div className="curriculum-card">
      <div className="curriculum-card-header">
        <div>
          <h3>{saved.schoolName}</h3>
          <span className="curriculum-meta">{saved.program} · {saved.track} · {saved.calendar}s</span>
          <span className="curriculum-date">Saved {new Date(saved.savedAt).toLocaleDateString()}</span>
        </div>
        <div className="curriculum-card-actions">
          <button className="btn-small" onClick={() => onDownload(saved)}>Download</button>
          <button className="btn-small btn-danger" onClick={() => onDelete(saved.id)}>Delete</button>
        </div>
      </div>

      <div className="curriculum-grid">
        {years.map(({ year, terms }) => (
          <div key={year} className="curriculum-year">
            <div className="curriculum-year-header">
              <strong>Year {year}</strong>
            </div>
            <div className="curriculum-terms">
              {terms.map(term => (
                <div key={term.termLabel} className="curriculum-term">
                  <div className="term-label">{term.termLabel.replace(/ Year \d+/, '')}</div>
                  <ul className="term-courses">
                    {term.courses.map(cid => (
                      <li key={cid}>{cid}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="curriculum-summary">
        <p>{saved.summary.narrative}</p>
        <div className="summary-meta">
          <span>{saved.summary.skillsHighlight}</span>
          {saved.summary.careerPaths.length > 0 && (
            <span>Career paths: {saved.summary.careerPaths.join(', ')}</span>
          )}
        </div>
      </div>
    </div>
  );
}
