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
      { examName: 'AP Statistics', minScore: 4, creditsAwarded: 5, courseEquivalent: 'STAT 290', courseDescription: 'Basic Statistics — introductory probability and statistical methods for data analysis', satisfiesGenEd: ['quantitative'] },
      { examName: 'AP Computer Science A', minScore: 4, creditsAwarded: 4, courseEquivalent: 'CSE 121', courseDescription: 'Introduction to Computer Programming — fundamentals of programming in Java, problem solving, and software design', satisfiesGenEd: ['natural-science'] },
      { examName: 'IB Japanese SL', minScore: 4, creditsAwarded: 5, courseEquivalent: 'JAPAN 1xx', courseDescription: 'Elective credit in Japanese language', satisfiesGenEd: ['foreign-language'] },
      { examName: 'IB Biology SL', minScore: 4, creditsAwarded: 5, courseEquivalent: 'BIOL 1xx', courseDescription: 'General elective credit in biological sciences', satisfiesGenEd: ['natural-science'] },
      { examName: 'IB Business Management SL', minScore: 4, creditsAwarded: 5, courseEquivalent: 'MGMT 1xx', courseDescription: 'General elective credit in business' },
      { examName: 'IB Chemistry SL', minScore: 4, creditsAwarded: 5, courseEquivalent: 'CHEM 1xx', courseDescription: 'General elective credit in chemistry', satisfiesGenEd: ['natural-science'] },
      { examName: 'IB Literature HL', minScore: 4, creditsAwarded: 5, courseEquivalent: 'ENGL 1xx', courseDescription: 'Elective credit in English — literary analysis, close reading, and critical writing', satisfiesGenEd: ['writing', 'humanities'] },
      { examName: 'IB History HL', minScore: 4, creditsAwarded: 5, courseEquivalent: 'HIST 1xx', courseDescription: 'Elective credit in history — historical analysis and historiography', satisfiesGenEd: ['social-science'] },
      { examName: 'IB Mathematics Analysis & Approaches HL', minScore: 4, creditsAwarded: 5, courseEquivalent: 'MATH 124/125', courseDescription: 'Calculus I & II — differential and integral calculus of single-variable functions', satisfiesGenEd: ['quantitative'] },
    ],
  },
  {
    schoolId: 'ups',
    slExamsAccepted: false,
    hlMinScore: 5,
    creditCap: 16, // 16 units total (AP + IB combined)
    diplomaBonus: 1, // TOK credit
    awards: [
      { examName: 'AP Statistics', minScore: 4, creditsAwarded: 1, courseEquivalent: 'MATH 160', courseDescription: 'Elective credit in statistics — data analysis and statistical reasoning' },
      { examName: 'AP Computer Science A', minScore: 4, creditsAwarded: 1, courseEquivalent: 'CSCI 1xx', courseDescription: 'Elective credit in computer science — object-oriented programming fundamentals' },
      { examName: 'IB Literature HL', minScore: 5, creditsAwarded: 1, courseEquivalent: 'ENGL 1xx', courseDescription: 'Credit in English — critical analysis of literary texts across genres and periods' },
      { examName: 'IB History HL', minScore: 5, creditsAwarded: 1, courseEquivalent: 'HIST 1xx', courseDescription: 'Credit in history — comparative and thematic historical analysis' },
      { examName: 'IB Mathematics Analysis & Approaches HL', minScore: 5, creditsAwarded: 1, courseEquivalent: 'MATH 180', courseDescription: 'Credit in mathematics — calculus and mathematical reasoning' },
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
      { examName: 'AP Statistics', minScore: 4, creditsAwarded: 1, courseEquivalent: 'STAT 180', courseDescription: 'Introduction to Statistics — data collection, probability, and inference for decision-making' },
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
      { examName: 'IB Mathematics Analysis & Approaches HL', minScore: 5, creditsAwarded: 8, courseEquivalent: 'MATH 20A/20B', courseDescription: 'Calculus for Science and Engineering — differential and integral calculus' },
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
