import { useState } from 'react';
import { SavedCurriculum } from '../types';
import { loadSavedCurricula, deleteSavedCurriculum, exportCurriculumAsFile } from '../engine/curriculumExport';
import CurriculumCard from './CurriculumCard';

interface Props {
  onBack: () => void;
}

export default function SavedCurricula({ onBack }: Props) {
  const [curricula, setCurricula] = useState<SavedCurriculum[]>(() => loadSavedCurricula());

  const handleDelete = (id: string) => {
    deleteSavedCurriculum(id);
    setCurricula(prev => prev.filter(c => c.id !== id));
  };

  const handleDownload = (saved: SavedCurriculum) => {
    exportCurriculumAsFile(saved);
  };

  return (
    <div className="screen saved-curricula">
      <div className="saved-curricula-header">
        <h2>Saved Curricula</h2>
        <button className="btn btn-secondary" onClick={onBack}>Back</button>
      </div>

      {curricula.length === 0 ? (
        <div className="empty-saved">
          <p>No saved curricula yet. Complete a school run and save your curriculum from the outcomes screen.</p>
        </div>
      ) : (
        <div className="curricula-list">
          {curricula.map(saved => (
            <CurriculumCard
              key={saved.id}
              saved={saved}
              onDownload={handleDownload}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}
