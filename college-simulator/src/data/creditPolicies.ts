import { CreditPolicy } from '../types';

export const creditPolicies: CreditPolicy[] = [
  {
    schoolId: 'uw',
    slExamsAccepted: true,
    hlMinScore: 4,
    slMinScore: 4,
    creditCap: 45, // 45 quarter credits max from IB
    diplomaBonus: 5,
    awards: [
      { examName: 'AP Statistics', minScore: 3, creditsAwarded: 5, courseEquivalent: 'STAT 290', courseDescription: 'Basic Statistics — introductory probability and statistical methods. Satisfies ★ statistics placement requirement for ENGRUD.', satisfiesGenEd: ['statistics'] },
      { examName: 'AP Computer Science A', minScore: 3, creditsAwarded: 4, courseEquivalent: 'CSE 121', courseDescription: 'Intro to Computer Programming I — fundamentals in Java. Satisfies ★ CSE placement + counts toward engineering fundamentals (4 of 12cr).', satisfiesGenEd: ['eng-fundamentals'] },
      { examName: 'IB Japanese SL', minScore: 4, creditsAwarded: 5, courseEquivalent: 'JAPAN 1xx', courseDescription: 'Elective credit in Japanese language — free elective only' },
      { examName: 'IB Biology SL', minScore: 4, creditsAwarded: 5, courseEquivalent: 'BIOL 161', courseDescription: 'Introductory Biology — counts as one of HCDE\'s 3 required science courses', satisfiesGenEd: ['sciences'] },
      { examName: 'IB Business Management SL', minScore: 4, creditsAwarded: 5, courseEquivalent: 'MGMT 1xx', courseDescription: 'General elective credit in business — free elective only' },
      { examName: 'IB Chemistry SL', minScore: 4, creditsAwarded: 3, courseEquivalent: 'CHEM 110', courseDescription: 'Prep for General Chemistry (3cr) — does NOT satisfy CHEM 142. Only a stepping stone; she would still need to take CHEM 142 for ENGRUD placement.' },
      { examName: 'IB Literature HL', minScore: 4, creditsAwarded: 5, courseEquivalent: 'ENGL 107', courseDescription: 'Elective English credit — generic credit, may NOT satisfy the specific English Composition (ENGL 111/121/131) placement requirement. Verify with adviser.', satisfiesGenEd: ['arts-humanities'] },
      { examName: 'IB History HL', minScore: 4, creditsAwarded: 5, courseEquivalent: 'HIST 1xx', courseDescription: 'Elective credit in history — satisfies Social Sciences gen-ed', satisfiesGenEd: ['social-science'] },
      { examName: 'IB Mathematics Analysis & Approaches HL', minScore: 6, creditsAwarded: 5, courseEquivalent: 'MATH 124', courseDescription: 'Calculus I (score 6+). Satisfies ◆ MATH 124 placement. Still needs MATH 125 and 126.', satisfiesGenEd: ['calculus'] },
      { examName: 'IB Mathematics Analysis & Approaches HL', minScore: 4, creditsAwarded: 5, courseEquivalent: 'MATH 120', courseDescription: 'Precalculus (score 4–5). Elective credit — does NOT satisfy Calculus placement. Still need to take MATH 124.' },
    ],
  },
  {
    schoolId: 'uw-econ',
    slExamsAccepted: true,
    hlMinScore: 4,
    slMinScore: 4,
    creditCap: 45,
    diplomaBonus: 5,
    awards: [
      { examName: 'AP Statistics', minScore: 3, creditsAwarded: 5, courseEquivalent: 'STAT 290', courseDescription: 'Basic Statistics — introductory probability and statistical methods.' },
      { examName: 'AP Computer Science A', minScore: 3, creditsAwarded: 4, courseEquivalent: 'CSE 121', courseDescription: 'Intro to Computer Programming I — elective credit.' },
      { examName: 'IB Japanese SL', minScore: 4, creditsAwarded: 5, courseEquivalent: 'JAPAN 1xx', courseDescription: 'Elective credit in Japanese language — free elective only' },
      { examName: 'IB Biology SL', minScore: 4, creditsAwarded: 5, courseEquivalent: 'BIOL 161', courseDescription: 'Introductory Biology — satisfies Natural World gen-ed', satisfiesGenEd: ['natural-world'] },
      { examName: 'IB Business Management SL', minScore: 4, creditsAwarded: 5, courseEquivalent: 'MGMT 1xx', courseDescription: 'General elective credit in business — free elective only' },
      { examName: 'IB Chemistry SL', minScore: 4, creditsAwarded: 3, courseEquivalent: 'CHEM 110', courseDescription: 'Prep for General Chemistry (3cr) — does NOT satisfy CHEM 142.' },
      { examName: 'IB Literature HL', minScore: 4, creditsAwarded: 5, courseEquivalent: 'ENGL 107', courseDescription: 'Elective English credit — may NOT satisfy English Composition requirement. Verify with adviser.', satisfiesGenEd: ['arts-humanities'] },
      { examName: 'IB History HL', minScore: 4, creditsAwarded: 5, courseEquivalent: 'HIST 1xx', courseDescription: 'Elective credit in history — satisfies Social Sciences gen-ed', satisfiesGenEd: ['social-science'] },
      { examName: 'IB Mathematics Analysis & Approaches HL', minScore: 6, creditsAwarded: 5, courseEquivalent: 'MATH 124', courseDescription: 'Calculus I (score 6+). Satisfies MATH 124 major requirement. Still needs MATH 125 and 126.' },
      { examName: 'IB Mathematics Analysis & Approaches HL', minScore: 4, creditsAwarded: 5, courseEquivalent: 'MATH 120', courseDescription: 'Precalculus (score 4–5). Elective credit — does NOT satisfy Calculus requirement. Still need to take MATH 124.' },
    ],
  },
  {
    schoolId: 'uw-poliecon',
    slExamsAccepted: true,
    hlMinScore: 4,
    slMinScore: 4,
    creditCap: 45,
    diplomaBonus: 5,
    awards: [
      { examName: 'AP Statistics', minScore: 3, creditsAwarded: 5, courseEquivalent: 'STAT 290', courseDescription: 'Basic Statistics — introductory probability and statistical methods.' },
      { examName: 'AP Computer Science A', minScore: 3, creditsAwarded: 4, courseEquivalent: 'CSE 121', courseDescription: 'Intro to Computer Programming I — elective credit.' },
      { examName: 'IB Japanese SL', minScore: 4, creditsAwarded: 5, courseEquivalent: 'JAPAN 1xx', courseDescription: 'Elective credit in Japanese language — free elective only' },
      { examName: 'IB Biology SL', minScore: 4, creditsAwarded: 5, courseEquivalent: 'BIOL 161', courseDescription: 'Introductory Biology — satisfies Natural World gen-ed', satisfiesGenEd: ['natural-world'] },
      { examName: 'IB Business Management SL', minScore: 4, creditsAwarded: 5, courseEquivalent: 'MGMT 1xx', courseDescription: 'General elective credit in business — free elective only' },
      { examName: 'IB Chemistry SL', minScore: 4, creditsAwarded: 3, courseEquivalent: 'CHEM 110', courseDescription: 'Prep for General Chemistry (3cr) — does NOT satisfy CHEM 142.' },
      { examName: 'IB Literature HL', minScore: 4, creditsAwarded: 5, courseEquivalent: 'ENGL 107', courseDescription: 'Elective English credit — may NOT satisfy English Composition requirement. Verify with adviser.', satisfiesGenEd: ['arts-humanities'] },
      { examName: 'IB History HL', minScore: 4, creditsAwarded: 5, courseEquivalent: 'HIST 1xx', courseDescription: 'Elective credit in history — satisfies Social Sciences gen-ed', satisfiesGenEd: ['social-science'] },
      { examName: 'IB Mathematics Analysis & Approaches HL', minScore: 6, creditsAwarded: 5, courseEquivalent: 'MATH 124', courseDescription: 'Calculus I (score 6+). Satisfies quantitative gen-ed requirement.', satisfiesGenEd: ['quantitative'] },
      { examName: 'IB Mathematics Analysis & Approaches HL', minScore: 4, creditsAwarded: 5, courseEquivalent: 'MATH 120', courseDescription: 'Precalculus (score 4–5). Elective credit — does NOT satisfy quantitative requirement.' },
    ],
  },
  {
    schoolId: 'ups',
    slExamsAccepted: false, // HL only per official 2025 policy
    hlMinScore: 5,
    creditCap: 16, // counts toward 16 unit transfer credit maximum
    diplomaBonus: 1, // TOK credit (1 elective unit, only if IB Diploma earned)
    awards: [
      // === AP Exams ===
      { examName: 'AP Statistics', minScore: 4, creditsAwarded: 1, courseEquivalent: 'MATH 160', courseDescription: 'Credit in statistics — data analysis and statistical reasoning' },
      { examName: 'AP Computer Science A', minScore: 4, creditsAwarded: 1, courseEquivalent: 'CSCI 161', courseDescription: 'Credit in computer science — programming fundamentals' },
      // === Group 1: Language & Literature (HL only; max one English exam incl. AP) ===
      { examName: 'IB Language A: Literature (English) HL', minScore: 5, creditsAwarded: 1, courseEquivalent: 'ENGL 1xx', courseDescription: 'Elective credit in English' },
      { examName: 'IB Language A: Literature (Other) HL', minScore: 5, creditsAwarded: 1, courseEquivalent: 'LANG 2xx', courseDescription: '200-level language elective' },
      { examName: 'IB Language A: Language & Literature (English) HL', minScore: 5, creditsAwarded: 1, courseEquivalent: 'ENGL 1xx', courseDescription: 'Elective credit in English' },
      { examName: 'IB Language A: Language & Literature (Other) HL', minScore: 5, creditsAwarded: 1, courseEquivalent: 'LANG 2xx', courseDescription: '200-level language elective' },
      // === Group 2: Language Acquisition (HL only) ===
      { examName: 'IB Language B (English) HL', minScore: 5, creditsAwarded: 1, courseEquivalent: 'ENGL 1xx', courseDescription: 'Elective credit in English' },
      { examName: 'IB Language B (Other) HL', minScore: 5, creditsAwarded: 1, courseEquivalent: 'LANG 2xx', courseDescription: '200-level language elective' },
      { examName: 'IB Classical Languages HL', minScore: 5, creditsAwarded: 1, courseEquivalent: 'LANG 2xx', courseDescription: '200-level Latin/Greek elective' },
      // === Group 3: Individuals & Societies (HL only) ===
      { examName: 'IB Business Management HL', minScore: 5, creditsAwarded: 1, courseEquivalent: 'BUS 1xx', courseDescription: 'Non-majors business elective', satisfiesGenEd: ['social-science'] },
      { examName: 'IB Digital Society HL', minScore: 5, creditsAwarded: 1, courseEquivalent: 'TRNF xxx', courseDescription: 'Elective credit' },
      { examName: 'IB Economics HL', minScore: 5, creditsAwarded: 2, courseEquivalent: 'ECON 170/171', courseDescription: 'Credit in economics — Principles of Micro & Macro', satisfiesGenEd: ['social-science'] },
      { examName: 'IB Geography HL', minScore: 5, creditsAwarded: 1, courseEquivalent: 'TRNF xxx', courseDescription: 'Elective credit' },
      { examName: 'IB Global Politics HL', minScore: 6, creditsAwarded: 1, courseEquivalent: 'POL 1xx', courseDescription: 'Non-majors politics & government elective', satisfiesGenEd: ['social-science'] },
      { examName: 'IB History HL', minScore: 5, creditsAwarded: 1, courseEquivalent: 'HIST 1xx', courseDescription: '100-level history elective', satisfiesGenEd: ['social-science'] },
      { examName: 'IB History (European/Islamic) HL', minScore: 5, creditsAwarded: 1, courseEquivalent: 'HIST 1xx', courseDescription: '100-level history elective', satisfiesGenEd: ['social-science'] },
      { examName: 'IB Philosophy HL', minScore: 5, creditsAwarded: 1, courseEquivalent: 'PHIL 101', courseDescription: 'Credit in philosophy', satisfiesGenEd: ['humanities'] },
      { examName: 'IB Psychology HL', minScore: 5, creditsAwarded: 1, courseEquivalent: 'PSYCH 101', courseDescription: 'Credit in psychology', satisfiesGenEd: ['social-science'] },
      { examName: 'IB Social & Cultural Anthropology HL', minScore: 5, creditsAwarded: 1, courseEquivalent: 'SOAN 1xx', courseDescription: 'Non-majors sociology & anthropology elective', satisfiesGenEd: ['social-science'] },
      // === Group 4: Sciences (HL only) ===
      { examName: 'IB Biology HL', minScore: 5, creditsAwarded: 1, courseEquivalent: 'BIOL 101', courseDescription: 'Credit in biology', satisfiesGenEd: ['natural-science'] },
      { examName: 'IB Chemistry HL', minScore: 6, creditsAwarded: 2, courseEquivalent: 'CHEM 110/120', courseDescription: 'Credit in chemistry — General Chemistry I & II (score 6+)', satisfiesGenEd: ['natural-science'] },
      { examName: 'IB Computer Science HL', minScore: 5, creditsAwarded: 1, courseEquivalent: 'CSCI 161', courseDescription: 'Credit in computer science', satisfiesGenEd: ['natural-science'] },
      { examName: 'IB Physics HL', minScore: 5, creditsAwarded: 1, courseEquivalent: 'PHYS 110', courseDescription: 'Credit in physics', satisfiesGenEd: ['natural-science'] },
      { examName: 'IB Sports, Exercise & Health Science HL', minScore: 5, creditsAwarded: 1, courseEquivalent: 'EXSC 1xx', courseDescription: 'Non-majors exercise science elective', satisfiesGenEd: ['natural-science'] },
      // === Group 5: Mathematics (HL only) ===
      { examName: 'IB Mathematics Analysis & Approaches HL', minScore: 5, creditsAwarded: 1, courseEquivalent: 'MATH 170', courseDescription: 'Credit in mathematics — Calculus I', satisfiesGenEd: ['quantitative'] },
      { examName: 'IB Mathematics Applications & Interpretation HL', minScore: 5, creditsAwarded: 1, courseEquivalent: 'MATH 160', courseDescription: 'Credit in mathematics — Applied Statistics', satisfiesGenEd: ['quantitative'] },
      // === Group 6: Arts (HL only) ===
      { examName: 'IB Dance HL', minScore: 5, creditsAwarded: 1, courseEquivalent: 'TRNF xxx', courseDescription: 'Elective credit' },
      { examName: 'IB Film HL', minScore: 5, creditsAwarded: 1, courseEquivalent: 'TRNF xxx', courseDescription: 'Elective credit' },
      { examName: 'IB Music HL', minScore: 5, creditsAwarded: 1, courseEquivalent: 'MUS 101', courseDescription: 'Credit in music', satisfiesGenEd: ['arts'] },
      { examName: 'IB Theatre HL', minScore: 5, creditsAwarded: 1, courseEquivalent: 'THTR 1xx', courseDescription: 'Non-majors theatre elective', satisfiesGenEd: ['arts'] },
      { examName: 'IB Visual Arts HL', minScore: 5, creditsAwarded: 1, courseEquivalent: 'ART 1xx', courseDescription: 'Non-majors studio elective', satisfiesGenEd: ['arts'] },
    ],
  },
  {
    schoolId: 'richmond',
    slExamsAccepted: false,
    hlMinScore: 5,
    creditCap: 7, // 7 units total — very restrictive
    awards: [
      { examName: 'AP Statistics', minScore: 4, creditsAwarded: 1, courseEquivalent: 'MATH 119', courseDescription: 'Credit toward math/quantitative requirement — introductory statistical methods' },
      // AP CS A — no credit at Richmond
      { examName: 'IB Literature HL', minScore: 5, creditsAwarded: 1, courseEquivalent: 'ENGL 1xx', courseDescription: 'Credit in English — close reading, essay writing, and literary criticism', satisfiesGenEd: ['writing'] },
      { examName: 'IB History HL', minScore: 5, creditsAwarded: 1, courseEquivalent: 'HIST 1xx', courseDescription: 'Credit in history — historical thinking and primary source analysis', satisfiesGenEd: ['social-science'] },
      { examName: 'IB Mathematics Analysis & Approaches HL', minScore: 5, creditsAwarded: 1, courseEquivalent: 'MATH 211', courseDescription: 'Credit in mathematics — single-variable calculus', satisfiesGenEd: ['quantitative'] },
    ],
  },
  {
    schoolId: 'rochester',
    slExamsAccepted: false,
    hlMinScore: 5,
    creditCap: 16,
    awards: [
      { examName: 'AP Statistics', minScore: 4, creditsAwarded: 1, courseEquivalent: 'STT 211', courseDescription: 'Introduction to Statistics — data collection, probability, and inference for decision-making' },
      { examName: 'AP Computer Science A', minScore: 4, creditsAwarded: 1, courseEquivalent: 'CSC 171', courseDescription: 'The Science of Programming — introduction to computational thinking, algorithms, and Java' },
      { examName: 'IB Literature HL', minScore: 5, creditsAwarded: 1, courseEquivalent: 'ENG 1xx', courseDescription: 'Elective credit in English — textual analysis and academic writing' },
      { examName: 'IB History HL', minScore: 6, creditsAwarded: 1, courseEquivalent: 'HIS 1xx', courseDescription: 'Elective credit in history — requires score of 6+ (higher bar than most schools)' },
      { examName: 'IB Mathematics Analysis & Approaches HL', minScore: 5, creditsAwarded: 1, courseEquivalent: 'MTH 161', courseDescription: 'Calculus IA — functions, limits, derivatives, and applications' },
    ],
  },
  {
    schoolId: 'ucsd',
    slExamsAccepted: false,
    hlMinScore: 5,
    creditCap: 30, // 30 quarter credits max from IB
    diplomaBonus: 6,
    diplomaBonusMinScore: 30,
    awards: [
      { examName: 'AP Statistics', minScore: 3, creditsAwarded: 4, courseEquivalent: 'MATH 11', courseDescription: 'Calculus-Based Introductory Probability and Statistics' },
      { examName: 'AP Computer Science A', minScore: 3, creditsAwarded: 4, courseEquivalent: 'CSE 8A', courseDescription: 'Introduction to Programming and Computational Problem-Solving' },
      { examName: 'IB Literature HL', minScore: 5, creditsAwarded: 8, courseEquivalent: 'LTWL 1A/1B', courseDescription: 'Literatures of the World — literary analysis, critical reading, and persuasive writing' },
      { examName: 'IB History HL', minScore: 5, creditsAwarded: 8, courseEquivalent: 'HIUS 1xx/2xx', courseDescription: 'History elective credit — historical inquiry and analytical writing' },
      { examName: 'IB Mathematics Analysis & Approaches HL', minScore: 5, creditsAwarded: 8, courseEquivalent: 'MATH 10A/10B', courseDescription: 'Calculus — differential and integral calculus (also satisfies MATH 20A/20B)' },
    ],
  },
  {
    schoolId: 'ucla',
    slExamsAccepted: false,
    hlMinScore: 5,
    diplomaBonus: 6,
    diplomaBonusMinScore: 30,
    awards: [
      { examName: 'AP Statistics', minScore: 3, creditsAwarded: 4, courseEquivalent: 'STATS 10', courseDescription: 'Introduction to Statistical Reasoning — probability and data analysis', satisfiesGenEd: ['quantitative'] },
      { examName: 'AP Computer Science A', minScore: 3, creditsAwarded: 8, courseEquivalent: 'COM SCI 31/32', courseDescription: 'Introduction to Computer Science I & II — programming and algorithmic thinking' },
      { examName: 'IB Literature HL', minScore: 5, creditsAwarded: 8, courseEquivalent: 'ENGL 1A/1B', courseDescription: 'English Composition and Literary Analysis — reading and writing across traditions' },
      { examName: 'IB History HL', minScore: 5, creditsAwarded: 8, courseEquivalent: 'HIST 1A/1B', courseDescription: 'Western Civilization — historical methods and analysis of change over time' },
      { examName: 'IB Mathematics Analysis & Approaches HL', minScore: 5, creditsAwarded: 8, courseEquivalent: 'MATH 31A/31B', courseDescription: 'Differential and Integral Calculus — limits, derivatives, and integrals' },
    ],
  },
];
