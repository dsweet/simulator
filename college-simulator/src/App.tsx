import { useState, useCallback } from 'react';
import { GameState, Track } from './types';
import { loadState, saveState, startRun, rollRandomSchool, getCompletedRunCount, canPeek, canFullReveal, addYearRating, resetState, cleanupAbandonedRuns } from './engine/gameState';
import { schools } from './data/schools';
import TrackSelection from './components/TrackSelection';
import StartingPoint from './components/StartingPoint';
import CoursePlanner from './components/CoursePlanner';
import YearRating from './components/YearRating';
import OutcomesPreview from './components/OutcomesPreview';
import Reveal from './components/Reveal';
import Comparison from './components/Comparison';
import Personas from './components/Personas';
import './App.css';

type Screen = 'track-selection' | 'starting-point' | 'course-planner' | 'year-rating' | 'outcomes' | 'reveal' | 'comparison' | 'personas';

function App() {
  const [gameState, setGameState] = useState<GameState>(() => {
    const loaded = loadState();
    const cleaned = cleanupAbandonedRuns(loaded);
    if (cleaned !== loaded) saveState(cleaned);
    return cleaned;
  });
  const [screen, setScreen] = useState<Screen>('track-selection');
  const [currentYear, setCurrentYear] = useState(1);
  const [personaTrack, setPersonaTrack] = useState<Track>('engineering-design');

  const updateState = useCallback((newState: GameState) => {
    setGameState(newState);
    saveState(newState);
  }, []);

  const currentRun = gameState.runs.find(r => r.schoolId === gameState.currentRun);
  const currentSchool = currentRun ? schools.find(s => s.id === currentRun.schoolId) : null;

  const handleTrackSelect = (track: Track) => {
    const schoolId = rollRandomSchool(gameState, track);
    if (!schoolId) {
      alert(`You've already played all schools in the ${track} track!`);
      return;
    }
    const newState = startRun(gameState, schoolId);
    updateState(newState);
    setCurrentYear(1);
    setScreen('starting-point');
  };

  const handleReroll = () => {
    if (!currentSchool) return;
    const track = currentSchool.track;
    // Pick a different school from the same track
    const schoolId = rollRandomSchool(gameState, track);
    if (!schoolId || schoolId === currentSchool.id) {
      // If we got the same school or null, try all schools in the track
      const allInTrack = schools.filter(s => s.track === track && s.id !== currentSchool.id);
      if (allInTrack.length === 0) return; // only one school in track
      const pick = allInTrack[Math.floor(Math.random() * allInTrack.length)];
      const newState = startRun(gameState, pick.id);
      updateState(newState);
      return;
    }
    const newState = startRun(gameState, schoolId);
    updateState(newState);
  };

  const handleStartPlanning = () => {
    setScreen('course-planner');
  };

  const handleYearComplete = () => {
    if (currentYear < 2) {
      // Skip rating after year 1, go straight to year 2
      setCurrentYear(prev => prev + 1);
      setScreen('course-planner');
    } else {
      setScreen('year-rating');
    }
  };

  const handleRatingSubmit = (rating: import('./types').YearRating) => {
    const newState = addYearRating(gameState, gameState.currentRun!, rating);
    updateState(newState);
    setScreen('outcomes');
  };

  const handleContinueYear = () => {
    if (currentYear < 4) {
      setCurrentYear(prev => prev + 1);
      setScreen('course-planner');
    }
  };

  const handleOutcomeRated = () => {
    setScreen('track-selection');
  };

  const handlePeek = () => {
    setScreen('reveal');
  };

  const handleFullReveal = () => {
    setScreen('reveal');
  };

  const handleShowComparison = () => {
    setScreen('comparison');
  };

  const handleBackToTracks = () => {
    updateState(cleanupAbandonedRuns(gameState));
    setScreen('track-selection');
  };

  const handleReset = () => {
    const newState = resetState();
    setGameState(newState);
    setScreen('track-selection');
    setCurrentYear(1);
  };

  const completedCount = getCompletedRunCount(gameState);

  return (
    <div className="app">
      <header className="app-header">
        <h1 onClick={() => { updateState(cleanupAbandonedRuns(gameState)); setScreen('track-selection'); }} style={{ cursor: 'pointer' }}>
          College Experience Simulator
        </h1>
        <div className="header-stats">
          <span>{completedCount}/6 schools explored</span>
          {canPeek(gameState) && <button className="btn-small" onClick={handlePeek}>Peek (3+ done)</button>}
          {canFullReveal(gameState) && <button className="btn-small btn-reveal" onClick={handleFullReveal}>Grand Reveal</button>}
          {completedCount > 0 && gameState.revealed && <button className="btn-small" onClick={handleShowComparison}>Compare</button>}
        </div>
      </header>

      <main>
        {screen === 'track-selection' && (
          <TrackSelection
            gameState={gameState}
            onSelectTrack={handleTrackSelect}
            onReset={handleReset}
            onPeek={handlePeek}
            onFullReveal={handleFullReveal}
            onShowPersonas={(track: Track) => { setPersonaTrack(track); setScreen('personas'); }}
          />
        )}

        {screen === 'starting-point' && currentSchool && currentRun && (
          <StartingPoint
            school={currentSchool}
            alias={currentRun.alias}
            onContinue={handleStartPlanning}
            onReroll={handleReroll}
          />
        )}

        {screen === 'course-planner' && currentSchool && currentRun && (
          <CoursePlanner
            school={currentSchool}
            run={currentRun}
            year={currentYear}
            gameState={gameState}
            onUpdateState={updateState}
            onYearComplete={handleYearComplete}
            onUpdateYear={setCurrentYear}
          />
        )}

        {screen === 'year-rating' && currentRun && (
          <YearRating
            alias={currentRun.alias}
            year={currentYear}
            onSubmit={handleRatingSubmit}
            onContinue={currentYear < 4 ? handleContinueYear : undefined}
            canFinish={currentYear >= 2}
          />
        )}

        {screen === 'outcomes' && currentSchool && currentRun && (
          <OutcomesPreview
            school={currentSchool}
            alias={currentRun.alias}
            gameState={gameState}
            onUpdateState={updateState}
            onDone={handleOutcomeRated}
            onContinueYear={currentYear < 4 ? handleContinueYear : undefined}
          />
        )}

        {screen === 'reveal' && (
          <Reveal
            gameState={gameState}
            onUpdateState={updateState}
            onBack={handleBackToTracks}
            onCompare={handleShowComparison}
          />
        )}

        {screen === 'comparison' && (
          <Comparison
            gameState={gameState}
            onBack={handleBackToTracks}
          />
        )}

        {screen === 'personas' && (
          <Personas track={personaTrack} onBack={handleBackToTracks} />
        )}
      </main>
    </div>
  );
}

export default App;
