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
];

// ============================================================
// School & Curriculum Data
// ============================================================

export interface School {
  id: string;                   // e.g., "school_a"
  name: string;                 // Real name (hidden until reveal)
  track: Track;
  program: string;              // e.g., "HCDE" or "Economics"
  calendar: CalendarType;
  size: SchoolSize;
  enrollmentTotal: number;
  // Anonymized hints (shown before reveal)
  hints: {
    calendarLabel: string;      // "Quarters" or "Semesters"
    sizeLabel: string;          // "Small school (~3,000)", etc.
  };
}

export interface Course {
  id: string;                   // e.g., "ECON101"
  title: string;
  description: string;
  credits: number;
  category: CourseCategory;
  interestTags: string[];       // IDs from INTEREST_TAGS
  prereqs: string[];            // Course IDs
  genEdReqs?: string[];         // Which gen-ed requirements this satisfies
  termAvailability?: string[];  // e.g., ["fall", "winter", "spring"] or ["fall", "spring"]
  yearLevel?: number;           // 1-4, for sorting/filtering
  clusterGroup?: string;        // For Rochester-style clusters: department grouping (e.g., 'astronomy', 'philosophy')
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
  name: string;                 // e.g., "Writing", "Quantitative Reasoning"
  creditsRequired: number;
  satisfiedBy: string[];        // Course IDs that can satisfy this
}

export interface RecommendedTermSlot {
  termLabel: string;                // e.g., "Fall Year 1"
  courses: string[];                // Course IDs for the standard path
  locked: boolean[];                // Parallel array: true = required this term, false = swappable
  slotLabels?: string[];            // Hint per slot, e.g., "NW Gen-Ed elective"
}

export interface RecommendedSequence {
  years: number;                    // How many years covered (typically 2)
  terms: RecommendedTermSlot[];     // One entry per term in chronological order
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
  courseEquivalent?: string;     // e.g., "STAT 290"
  courseDescription?: string;    // Brief description of the equivalent course
  satisfiesGenEd?: string[];    // Gen-ed category IDs satisfied
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
  tuitionAndFees: number;       // Annual
  roomAndBoard: number;         // Annual
  totalCOA: number;             // Annual
  aidAmount: number;            // Annual aid/scholarship
  netCost: number;              // Annual after aid
  fourYearNet: number;          // Estimated 4-year total
  aidDescription: string;       // e.g., "In-state tuition", "$42K off tuition"
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
  gradSchoolRate?: number;      // Percentage
  commonGradPrograms: string[];
  internshipCulture: string;    // Description
  quantitativePrep: string;     // How program's quant rigor affects career options
  gradSchoolNotes: string;      // Grad school readiness given this program's structure
}

// ============================================================
// Student Life Data
// ============================================================

export interface StudentLifeData {
  schoolId: string;
  location: {
    city: string;
    state: string;
    urbanSetting: string;       // "urban", "suburban", "college town"
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
  score: number | null;         // null = pending
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
// Game State
// ============================================================

export interface TermSelection {
  termLabel: string;            // e.g., "Fall Year 1"
  courses: string[];            // Course IDs selected
}

export interface YearRating {
  year: number;
  courseInterest: number;       // 1-5
  overallAppeal: number;
  notes: string;
}

export interface OutcomeRating {
  appeal: number;               // 1-5
  notes: string;
}

export interface SchoolRun {
  schoolId: string;
  alias: string;                // "School Alpha", "School Beta", etc.
  termSelections: TermSelection[];
  yearRatings: YearRating[];
  outcomeRating?: OutcomeRating;
  yearsCompleted: number;
  completed: boolean;           // True when she's done rating
}

export interface GameState {
  runs: SchoolRun[];
  currentRun?: string;          // schoolId of active run
  revealed: boolean;            // Has the grand reveal happened?
  peekUsed: boolean;            // Has the peek been used?
}

// ============================================================
// Personas
// ============================================================

export interface PersonaCareerStep {
  years: string;              // e.g., "1-2", "3-4"
  role: string;
  description: string;
}

export interface PersonaTerm {
  termLabel: string;          // e.g., "Fall Year 1"
  courses: string[];          // Course IDs
}

export interface Persona {
  id: string;
  name: string;
  archetype: string;          // e.g., "The Coder"
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
  gradSchoolType?: string;    // e.g., "PhD", "JD"
}

// School aliases for blind mode
export const SCHOOL_ALIASES = [
  'School Alpha',
  'School Beta',
  'School Gamma',
  'School Delta',
  'School Epsilon',
  'School Zeta',
] as const;
