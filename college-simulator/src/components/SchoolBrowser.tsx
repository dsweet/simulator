import { School, Track } from '../types';
import { schools } from '../data/schools';

interface Props {
  onSelectSchool: (schoolId: string) => void;
  onShowPersonas: (track: Track) => void;
  onShowSaved: () => void;
  hasSavedCurricula: boolean;
}

const TRACK_INFO: Record<Track, { icon: string; title: string; description: string; personaLabel: string }> = {
  'uw-paths': {
    icon: '🧭',
    title: 'UW — Exploration',
    description: 'Start broad, then declare a major: comparative literature, political science, or cognitive science',
    personaLabel: '',
  },
  'engineering-design': {
    icon: '🎨',
    title: 'Engineering & Design',
    description: 'HCDE, mechanical engineering, UX research, product design, prototyping, art & fabrication',
    personaLabel: 'Meet 8 HCDE graduates',
  },
  'economics': {
    icon: '📊',
    title: 'Economics',
    description: 'Microeconomics, macroeconomics, econometrics, game theory, policy analysis, finance',
    personaLabel: 'Meet 8 Economics graduates',
  },
  'ppe': {
    icon: '⚖️',
    title: 'PPE / PPEL',
    description: 'Philosophy, politics, economics, law, game theory, rational choice, social policy',
    personaLabel: 'Meet 8 PPE/PPEL graduates',
  },
};

const TRACK_ORDER: Track[] = ['uw-paths', 'engineering-design', 'economics', 'ppe'];

function groupByTrack(allSchools: School[]): Record<Track, School[]> {
  const groups: Record<Track, School[]> = { 'uw-paths': [], 'engineering-design': [], 'economics': [], 'ppe': [] };
  for (const s of allSchools) {
    groups[s.track].push(s);
  }
  return groups;
}

export default function SchoolBrowser({ onSelectSchool, onShowPersonas, onShowSaved, hasSavedCurricula }: Props) {
  const grouped = groupByTrack(schools);

  return (
    <div className="screen school-browser">
      <div className="intro">
        <h2>Choose a School</h2>
        <p>
          Pick any school to plan a full four-year curriculum. You'll choose courses
          term by term, track your progress toward graduation, and get a narrative
          summary of your academic path.
        </p>
        {hasSavedCurricula && (
          <button className="btn btn-secondary" onClick={onShowSaved}>
            View Saved Plans
          </button>
        )}
      </div>

      <div className="tracks">
        {TRACK_ORDER.map(track => {
          const info = TRACK_INFO[track];
          const trackSchools = grouped[track];
          return (
            <div key={track} className="track-column">
              <div className="track-header">
                <span className="track-icon">{info.icon}</span>
                <h3>{info.title}</h3>
                <p>{info.description}</p>
              </div>
              <div className="school-list">
                {trackSchools.map(school => (
                  <button
                    key={school.id}
                    className={`school-card${school.id === 'ups' ? ' school-eliminated' : ''}`}
                    onClick={() => onSelectSchool(school.id)}
                  >
                    <div className="school-name">{school.name}</div>
                    <div className="school-program">{school.program}</div>
                    <div className="school-meta">
                      {school.hints.calendarLabel} · {school.hints.sizeLabel}
                    </div>
                  </button>
                ))}
              </div>
              {info.personaLabel && (
                <button className="personas-link" onClick={() => onShowPersonas(track)}>
                  {info.personaLabel} &rarr;
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
