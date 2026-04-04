import { useState, useCallback, useMemo } from 'react';
import { CurriculumPlan, Track } from './types';
import { createPlan, loadCurrentPlan, saveCurrentPlan, clearCurrentPlan, autofillPlan } from './engine/gameState';
import { getCurriculum } from './data/curricula/index';
import { creditPolicies } from './data/creditPolicies';
import { studentProfile } from './data/student';
import { evaluateCredits } from './engine/creditEvaluator';
import { loadSavedCurricula } from './engine/curriculumExport';
import { schools } from './data/schools';
import SchoolBrowser from './components/SchoolBrowser';
import SchoolDetail from './components/SchoolDetail';
import CurriculumPlanner from './components/CurriculumPlanner';
import Summary from './components/Summary';
import Personas from './components/Personas';
import SavedCurricula from './components/SavedCurricula';
import './App.css';

type Screen = 'school-browser' | 'school-detail' | 'curriculum-planner' | 'summary' | 'personas' | 'saved-curricula';

function App() {
  const [plan, setPlan] = useState<CurriculumPlan | null>(() => loadCurrentPlan());
  const [screen, setScreen] = useState<Screen>('school-browser');
  const [personaTrack, setPersonaTrack] = useState<Track>('engineering-design');

  const currentSchool = plan ? schools.find(s => s.id === plan.schoolId) : null;

  const updatePlan = useCallback((newPlan: CurriculumPlan) => {
    setPlan(newPlan);
    saveCurrentPlan(newPlan);
  }, []);

  const handleSelectSchool = (schoolId: string) => {
    let newPlan = createPlan(schoolId);
    const curriculum = getCurriculum(schoolId);
    const school = schools.find(s => s.id === schoolId);
    const policy = creditPolicies.find(p => p.schoolId === schoolId);
    if (curriculum && policy && school) {
      const creditSummary = evaluateCredits(studentProfile, policy);
      const catalogIds = new Set(curriculum.courses.map(c => c.id));
      const creditedCourseIds = new Set<string>();
      for (const result of creditSummary.results) {
        if (result.creditsAwarded <= 0 || !result.courseEquivalent) continue;
        const parts = result.courseEquivalent.split('/').map(p => p.trim());
        const prefix = parts[0].replace(/\s*\d+.*$/, '');
        for (const part of parts) {
          const full = part.includes(prefix) ? part : `${prefix} ${part}`;
          const normalized = full.replace(/\s+/g, '').toUpperCase();
          if (catalogIds.has(normalized)) creditedCourseIds.add(normalized);
        }
      }
      newPlan = autofillPlan(newPlan, curriculum, creditedCourseIds, creditSummary, school.calendar);
    }
    updatePlan(newPlan);
    setScreen('school-detail');
  };

  const handleStartPlanning = () => {
    setScreen('curriculum-planner');
  };

  const handleFinish = () => {
    setScreen('summary');
  };

  const handleDone = () => {
    clearCurrentPlan();
    setPlan(null);
    setScreen('school-browser');
  };

  const handleBackToBrowser = () => {
    clearCurrentPlan();
    setPlan(null);
    setScreen('school-browser');
  };

  const hasSavedCurricula = useMemo(() => loadSavedCurricula().length > 0, [screen]);

  return (
    <div className="app">
      <header className="app-header">
        <h1 onClick={() => { clearCurrentPlan(); setPlan(null); setScreen('school-browser'); }} style={{ cursor: 'pointer' }}>
          College Curriculum Planner
        </h1>
        <div className="header-stats">
          {hasSavedCurricula && <button className="btn-small" onClick={() => setScreen('saved-curricula')}>Saved Plans</button>}
        </div>
      </header>

      <main>
        {screen === 'school-browser' && (
          <SchoolBrowser
            onSelectSchool={handleSelectSchool}
            onShowPersonas={(track: Track) => { setPersonaTrack(track); setScreen('personas'); }}
            onShowSaved={() => setScreen('saved-curricula')}
            hasSavedCurricula={hasSavedCurricula}
          />
        )}

        {screen === 'school-detail' && currentSchool && (
          <SchoolDetail
            school={currentSchool}
            onContinue={handleStartPlanning}
            onBack={handleBackToBrowser}
          />
        )}

        {screen === 'curriculum-planner' && currentSchool && plan && (
          <CurriculumPlanner
            school={currentSchool}
            plan={plan}
            onUpdatePlan={updatePlan}
            onFinish={handleFinish}
            onBack={() => setScreen('school-detail')}
          />
        )}

        {screen === 'summary' && currentSchool && plan && (
          <Summary
            school={currentSchool}
            plan={plan}
            onBack={() => setScreen('curriculum-planner')}
            onDone={handleDone}
          />
        )}

        {screen === 'personas' && (
          <Personas track={personaTrack} onBack={handleBackToBrowser} />
        )}

        {screen === 'saved-curricula' && (
          <SavedCurricula onBack={handleBackToBrowser} />
        )}
      </main>
    </div>
  );
}

export default App;
