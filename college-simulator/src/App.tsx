import { useState, useCallback, useMemo } from 'react';
import { CurriculumPlan, Track } from './types';
import { createPlan, loadCurrentPlan, saveCurrentPlan, clearCurrentPlan } from './engine/gameState';
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
    const newPlan = createPlan(schoolId);
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
