// ============================================================
// Core Data Types
// ============================================================

export type CalendarType = 'quarter' | 'semester';
export type SchoolSize = 'small' | 'medium' | 'large';
export type CourseCategory = 'major-required' | 'major-elective' | 'gen-ed' | 'elective';
export type Track = 'engineering-design' | 'economics' | 'ppe';

export interface InterestTag {
  id: string;
  label: string;
}

export const INTEREST_TAGS: InterestTag[] = [
  { id: 'ceramics', label: 'Ceramics / Studio Art' },
  { id: 'astronomy', label: 'Astronomy / Space' },
  { id: 'history', label: 'History' },
  { id: 'classics', label: 'Classics / Ancient World' },
  { id: 'cultural-studies', label: 'Cultural Studies / Ethnic Studies' },
  { id: 'game-theory', label: 'Game Theory' },
  { id: 'video-games', label: 'Video Games / Game Design' },
  { id: 'design', label: 'Design / UX / Product' },
  { id: 'literature', label: 'Literature' },
  { id: 'philosophy', label: 'Philosophy' },
  { id: 'space', label: 'Space Science' },
  { id: 'science', label: 'Science' },
  { id: 'music', label: 'Music' },
  { id: 'linguistics', label: 'Linguistics' },
  { id: 'film', label: 'Film & Media' },
  { id: 'environmental', label: 'Environmental Studies' },
  { id: 'politics', label: 'Politics & Policy' },
  { id: 'economics', label: 'Economics' },
  { id: 'sociology', label: 'Sociology' },
  { id: 'religion', label: 'Religion' },
  { id: 'biology', label: 'Biology' },
];

// ============================================================
// School & Curriculum Data
// ============================================================

export interface School {
  id: string;
  name: string;
  track: Track;
  program: string;
  calendar: CalendarType;
  size: SchoolSize;
  enrollmentTotal: number;
  hints: {
    calendarLabel: string;
    sizeLabel: string;
  };
}

export interface Course {
  id: string;
  title: string;
  description: string;
  credits: number;
  category: CourseCategory;
  interestTags: string[];       // IDs from INTEREST_TAGS
  prereqs: string[];            // Course IDs
  genEdReqs?: string[];         // Which gen-ed requirements this satisfies
  termAvailability?: string[];  // e.g., ["fall", "winter", "spring"] or ["fall", "spring"]
  yearLevel?: number;           // 1-4, for sorting/filtering
  clusterGroup?: string;        // For Rochester-style clusters
}

export interface DegreeRequirements {
  totalCredits: number;
  majorCredits: number;
  genEdCredits: number;
  electiveCredits: number;
  majorCourses: string[];       // Required course IDs
  genEdCategories: GenEdCategory[];
}

export interface GenEdCategory {
  id: string;
  name: string;
  creditsRequired: number;
  satisfiedBy: string[];        // Course IDs that can satisfy this
}

export interface RecommendedTermSlot {
  termLabel: string;
  courses: string[];
  locked: boolean[];
  slotLabels?: string[];
}

export interface RecommendedSequence {
  years: number;
  terms: RecommendedTermSlot[];
}

export interface Curriculum {
  schoolId: string;
  program: string;
  degreeRequirements: DegreeRequirements;
  courses: Course[];
  recommendedSequence?: RecommendedSequence;
}

// ============================================================
// AP/IB Credit Policies
// ============================================================

export interface CreditAward {
  examName: string;
  minScore: number;
  creditsAwarded: number;
  courseEquivalent?: string;
  courseDescription?: string;
  satisfiesGenEd?: string[];
}

export interface CreditPolicy {
  schoolId: string;
  slExamsAccepted: boolean;
  hlMinScore: number;
  slMinScore?: number;
  creditCap?: number;
  diplomaBonus?: number;
  diplomaBonusMinScore?: number;
  awards: CreditAward[];
}

// ============================================================
// Cost & Financial Data
// ============================================================

export interface CostData {
  schoolId: string;
  tuitionAndFees: number;
  roomAndBoard: number;
  totalCOA: number;
  aidAmount: number;
  netCost: number;
  fourYearNet: number;
  aidDescription: string;
}

// ============================================================
// Outcomes Data
// ============================================================

export interface OutcomeData {
  schoolId: string;
  program: string;
  medianStartingSalary?: number;
  medianMidCareerSalary?: number;
  topEmployers: string[];
  commonJobTitles: string[];
  commonIndustries: string[];
  gradSchoolRate?: number;
  commonGradPrograms: string[];
  internshipCulture: string;
  quantitativePrep: string;
  gradSchoolNotes: string;
}

// ============================================================
// Student Life Data
// ============================================================

export interface StudentLifeData {
  schoolId: string;
  location: {
    city: string;
    state: string;
    urbanSetting: string;
    climate: string;
    distanceFromSeattle: string;
    transit: string;
  };
  housing: {
    guaranteedYears: number;
    description: string;
  };
  campusCulture: {
    greekLife: string;
    sportsCulture: string;
    clubsDescription: string;
    diversity: string;
    campusVibe: string;
  };
}

// ============================================================
// Student Profile (the user's daughter)
// ============================================================

export interface ExamScore {
  examType: 'AP' | 'IB-HL' | 'IB-SL';
  subject: string;
  score: number | null;
}

export interface StudentProfile {
  exams: ExamScore[];
  ibDiploma: boolean;
  assumedScores: {
    hlDefault: number;
    slDefault: number;
  };
}

// ============================================================
// Curriculum Plan (replaces GameState/SchoolRun)
// ============================================================

export interface CurriculumPlan {
  schoolId: string;
  termCourses: Record<string, string[]>;  // "Fall Year 1" → ["ECON101", "MATH124"]
  createdAt: string;
}

// ============================================================
// Personas
// ============================================================

export interface PersonaCareerStep {
  years: string;
  role: string;
  description: string;
}

export interface PersonaTerm {
  termLabel: string;
  courses: string[];
}

export interface Persona {
  id: string;
  name: string;
  archetype: string;
  emoji: string;
  bio: string;
  passion: string;
  coursesByTerm: PersonaTerm[];
  curriculumSummary: string;
  visionLeavingUndergrad: string;
  careerTimeline: PersonaCareerStep[];
  futureThinking: string;
  techOutcome: boolean;
  gradSchool: boolean;
  gradSchoolType?: string;
}

// ============================================================
// Saved Curricula
// ============================================================

export interface CurriculumSummary {
  narrative: string;
  topInterests: string[];
  careerPaths: string[];
  skillsHighlight: string;
}

export interface TermSelection {
  termLabel: string;
  courses: string[];
}

export interface SavedCurriculum {
  id: string;
  savedAt: string;
  schoolId: string;
  schoolName: string;
  track: Track;
  program: string;
  calendar: CalendarType;
  termSelections: TermSelection[];
  summary: CurriculumSummary;
}
