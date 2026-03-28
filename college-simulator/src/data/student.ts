import { StudentProfile } from '../types';

export const studentProfile: StudentProfile = {
  exams: [
    { examType: 'AP', subject: 'Statistics', score: 4 },
    { examType: 'AP', subject: 'Computer Science A', score: 4 },
    { examType: 'IB-SL', subject: 'Japanese', score: 5 },
    { examType: 'IB-SL', subject: 'Biology', score: 6 },
    { examType: 'IB-SL', subject: 'Business Management', score: null },
    { examType: 'IB-SL', subject: 'Chemistry', score: null },
    { examType: 'IB-HL', subject: 'Literature', score: null },
    { examType: 'IB-HL', subject: 'History', score: null },
    { examType: 'IB-HL', subject: 'Mathematics Analysis & Approaches', score: null },
  ],
  ibDiploma: true,
  assumedScores: {
    hlDefault: 5,
    slDefault: 5,
  },
};
