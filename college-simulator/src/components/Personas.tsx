import { useState } from 'react';
import { Persona, Track, Course } from '../types';
import { personas } from '../data/personas';
import { econPersonas } from '../data/econ-personas';
import { ppePersonas } from '../data/ppe-personas';
import { uwHcde } from '../data/curricula/uw-hcde';
import { upsEcon } from '../data/curricula/ups-econ';
import { richmondPpel } from '../data/curricula/richmond-ppel';
import { rochesterPpe } from '../data/curricula/rochester-ppe';

interface Props {
  track: Track;
  onBack: () => void;
}

const trackConfig: Record<Track, {
  personas: Persona[];
  courses: Course[];
  title: string;
  subtitle: string;
  apNote: string;
}> = {
  'engineering-design': {
    personas,
    courses: uwHcde.courses,
    title: 'Meet 8 HCDE Graduates',
    subtitle: 'Same degree, eight very different lives. Each of these fictional graduates started with the same AP/IB credits your daughter will have, took the same HCDE core, and then followed their passions through different electives, interests, and career paths. Only 2 of the 8 ended up in tech.',
    apNote: 'Starting with 45 credits from AP/IB exams (STAT 290, CSE 121, BIOL 161, and more).',
  },
  'economics': {
    personas: econPersonas,
    courses: [...upsEcon.courses],
    title: 'Meet 6 Economics Graduates',
    subtitle: 'Same major, six very different lives. Each of these fictional graduates took the economics core and then diverged — two into careers that use economics every day, four into PhD programs studying questions they couldn\u2019t let go of.',
    apNote: 'Starting with IB/AP credit for Calculus I (IB Math HL) and Statistics (AP Stats).',
  },
  'ppe': {
    personas: ppePersonas,
    courses: [...richmondPpel.courses, ...rochesterPpe.courses],
    title: 'Meet 8 PPE/PPEL Graduates',
    subtitle: 'Four from Richmond\u2019s PPEL program, four from Rochester\u2019s PPE program. Same interdisciplinary foundation \u2014 philosophy, politics, economics \u2014 eight very different paths through law, policy, civic technology, and political theory.',
    apNote: 'IB/AP credit varies by school. Richmond personas use JAPN 201\u2013202 (intermediate) for foreign language.',
  },
};

function getCourseTitle(courseId: string, courses: Course[]): string {
  const course = courses.find(c => c.id === courseId);
  return course ? course.title : courseId;
}

function getCourseCredits(courseId: string, courses: Course[]): number {
  const course = courses.find(c => c.id === courseId);
  return course ? course.credits : 0;
}

function getCourseDescription(courseId: string, courses: Course[]): string {
  const course = courses.find(c => c.id === courseId);
  return course ? course.description : '';
}

function PersonaDetail({ persona, courses, apNote, onBack }: { persona: Persona; courses: Course[]; apNote: string; onBack: () => void }) {
  return (
    <div className="persona-detail">
      <button className="btn btn-secondary persona-back" onClick={onBack}>
        &larr; All Personas
      </button>

      <div className="persona-detail-header">
        <span className="persona-detail-emoji">{persona.emoji}</span>
        <div>
          <h2>{persona.name}</h2>
          <span className="persona-archetype-label">{persona.archetype}</span>
          <div className="persona-tags">
            {persona.techOutcome && <span className="persona-tag tag-tech">Tech Career</span>}
            {persona.gradSchool && <span className="persona-tag tag-grad">{persona.gradSchoolType}</span>}
          </div>
        </div>
      </div>

      <section className="persona-section">
        <p className="persona-bio">{persona.bio}</p>
        <blockquote className="persona-passion">{persona.passion}</blockquote>
      </section>

      <section className="persona-section">
        <h3>Four-Year Course Plan</h3>
        <p className="persona-note">{apNote}</p>
        <div className="course-plan-grid">
          {[1, 2, 3, 4].map(year => {
            const yearTerms = persona.coursesByTerm.filter(t => t.termLabel.includes(`Year ${year}`));
            return (
              <div key={year} className="course-plan-year">
                <h4>Year {year}</h4>
                {yearTerms.map(term => {
                  const termCredits = term.courses.reduce((sum, id) => sum + getCourseCredits(id, courses), 0);
                  return (
                    <div key={term.termLabel} className="course-plan-term">
                      <div className="term-header">
                        <span className="term-label">{term.termLabel.replace(` Year ${year}`, '')}</span>
                        <span className="term-credits">{termCredits > 0 ? `${termCredits}cr` : `${term.courses.length} courses`}</span>
                      </div>
                      <ul className="term-courses">
                        {term.courses.map(courseId => {
                          const cr = getCourseCredits(courseId, courses);
                          return (
                            <li key={courseId} title={getCourseDescription(courseId, courses)}>
                              <span className="course-id">{courseId.replace(/(\d)/, ' $1')}</span>
                              <span className="course-title">{getCourseTitle(courseId, courses)}</span>
                              {cr > 0 && <span className="course-cr">{cr}</span>}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </section>

      <section className="persona-section">
        <h3>What Made This Path Distinctive</h3>
        <p>{persona.curriculumSummary}</p>
      </section>

      <section className="persona-section">
        <h3>Vision Leaving Undergrad</h3>
        <p>{persona.visionLeavingUndergrad}</p>
      </section>

      <section className="persona-section">
        <h3>First Five Years</h3>
        <div className="career-timeline">
          {persona.careerTimeline.map((step, i) => (
            <div key={i} className="career-step">
              <div className="career-years">Year {step.years}</div>
              <div className="career-content">
                <div className="career-role">{step.role}</div>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="persona-section">
        <h3>Looking Ahead</h3>
        <p>{persona.futureThinking}</p>
      </section>
    </div>
  );
}

export default function Personas({ track, onBack }: Props) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const config = trackConfig[track];

  const selected = selectedId ? config.personas.find(p => p.id === selectedId) : null;

  if (selected) {
    return (
      <div className="screen personas-screen">
        <PersonaDetail persona={selected} courses={config.courses} apNote={config.apNote} onBack={() => setSelectedId(null)} />
      </div>
    );
  }

  return (
    <div className="screen personas-screen">
      <button className="btn btn-secondary persona-back" onClick={onBack}>
        &larr; Back to Tracks
      </button>

      <div className="personas-intro">
        <h2>{config.title}</h2>
        <p>{config.subtitle}</p>
      </div>

      <div className="persona-grid">
        {config.personas.map(persona => (
          <button
            key={persona.id}
            className="persona-card"
            onClick={() => setSelectedId(persona.id)}
          >
            <span className="persona-card-emoji">{persona.emoji}</span>
            <h3>{persona.archetype}</h3>
            <span className="persona-card-name">{persona.name}</span>
            <p className="persona-card-passion">{persona.passion}</p>
            <div className="persona-tags">
              {persona.techOutcome && <span className="persona-tag tag-tech">Tech</span>}
              {persona.gradSchool && <span className="persona-tag tag-grad">{persona.gradSchoolType}</span>}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
