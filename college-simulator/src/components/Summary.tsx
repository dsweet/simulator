import { useState, useMemo } from 'react';
import { School, CurriculumPlan } from '../types';
import { outcomes } from '../data/outcomes';
import { getCurriculum } from '../data/curricula/index';
import { generateCurriculumSummary } from '../engine/summaryGenerator';
import { buildSavedCurriculum, saveCurriculumToStorage } from '../engine/curriculumExport';

interface Props {
  school: School;
  plan: CurriculumPlan;
  onBack: () => void;
  onDone: () => void;
}

export default function Summary({ school, plan, onBack, onDone }: Props) {
  const [saved, setSaved] = useState(false);

  const outcomeData = outcomes.find(o => o.schoolId === school.id);
  const curriculum = getCurriculum(school.id);

  const summary = useMemo(() => {
    if (!curriculum || !outcomeData) return null;
    return generateCurriculumSummary(plan.termCourses, curriculum, outcomeData, school);
  }, [plan.termCourses, curriculum, outcomeData, school]);

  if (!outcomeData || !curriculum) {
    return <div className="screen"><h2>Data not available</h2></div>;
  }

  const handleSave = () => {
    const savedCurriculum = buildSavedCurriculum(plan, school, curriculum, outcomeData);
    saveCurriculumToStorage(savedCurriculum);
    setSaved(true);
  };

  return (
    <div className="screen outcomes-preview">
      <h2>{school.name} — Curriculum Summary</h2>

      {summary && (
        <div className="curriculum-narrative">
          <p className="narrative-text">{summary.narrative}</p>
          <div className="summary-meta">
            <span>{summary.skillsHighlight}</span>
            {summary.careerPaths.length > 0 && (
              <span>Career paths: {summary.careerPaths.join(', ')}</span>
            )}
          </div>
        </div>
      )}

      <h3>Career Outcomes for {school.program} Graduates</h3>

      <div className="outcomes-grid">
        {outcomeData.medianStartingSalary && (
          <div className="outcome-card">
            <h4>Starting Salary</h4>
            <div className="outcome-value">${outcomeData.medianStartingSalary.toLocaleString()}</div>
            <p>Median for graduates in this program</p>
          </div>
        )}

        {outcomeData.medianMidCareerSalary && (
          <div className="outcome-card">
            <h4>Mid-Career Salary</h4>
            <div className="outcome-value">${outcomeData.medianMidCareerSalary.toLocaleString()}</div>
            <p>Median at 10+ years experience</p>
          </div>
        )}

        {outcomeData.gradSchoolRate && (
          <div className="outcome-card">
            <h4>Graduate School</h4>
            <div className="outcome-value">{outcomeData.gradSchoolRate}%</div>
            <p>Continue to graduate or professional school</p>
          </div>
        )}
      </div>

      <div className="outcome-section">
        <h4>Common Job Titles</h4>
        <div className="tag-list">
          {outcomeData.commonJobTitles.map(title => (
            <span key={title} className="tag">{title}</span>
          ))}
        </div>
      </div>

      <div className="outcome-section">
        <h4>Top Industries</h4>
        <div className="tag-list">
          {outcomeData.commonIndustries.map(ind => (
            <span key={ind} className="tag">{ind}</span>
          ))}
        </div>
      </div>

      <div className="outcome-section">
        <h4>Top Employers</h4>
        <div className="tag-list">
          {outcomeData.topEmployers.map(emp => (
            <span key={emp} className="tag">{emp}</span>
          ))}
        </div>
      </div>

      <div className="outcome-section">
        <h4>Common Graduate Programs</h4>
        <div className="tag-list">
          {outcomeData.commonGradPrograms.map(prog => (
            <span key={prog} className="tag">{prog}</span>
          ))}
        </div>
      </div>

      <div className="outcome-section">
        <h4>Quantitative Preparation</h4>
        <p>{outcomeData.quantitativePrep}</p>
      </div>

      <div className="outcome-section">
        <h4>Graduate School Readiness</h4>
        <p>{outcomeData.gradSchoolNotes}</p>
      </div>

      <div className="outcome-section">
        <h4>Internship Culture</h4>
        <p>{outcomeData.internshipCulture}</p>
      </div>

      <div className="actions">
        <button className="btn btn-primary" disabled={saved} onClick={handleSave}>
          {saved ? 'Curriculum Saved!' : 'Save This Curriculum'}
        </button>
        <button className="btn btn-secondary" onClick={onBack}>
          ← Back to Planner
        </button>
        <button className="btn btn-secondary" onClick={onDone}>
          Choose Another School
        </button>
      </div>
    </div>
  );
}
