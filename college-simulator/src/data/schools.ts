import { School } from '../types';

export const schools: School[] = [
  {
    id: 'uw',
    name: 'University of Washington',
    track: 'engineering-design',
    program: 'Human Centered Design & Engineering (HCDE)',
    calendar: 'quarter',
    size: 'large',
    enrollmentTotal: 47000,
    hints: {
      calendarLabel: 'Quarters (3 terms/year)',
      sizeLabel: 'Large university (~47,000 students)',
    },
  },
  {
    id: 'ups',
    name: 'University of Puget Sound',
    track: 'economics',
    program: 'Economics',
    calendar: 'semester',
    size: 'small',
    enrollmentTotal: 2600,
    hints: {
      calendarLabel: 'Semesters (2 terms/year)',
      sizeLabel: 'Small college (~2,600 students)',
    },
  },
  {
    id: 'richmond',
    name: 'University of Richmond',
    track: 'ppe',
    program: 'PPEL (Philosophy, Politics, Economics & Law)',
    calendar: 'semester',
    size: 'small',
    enrollmentTotal: 3200,
    hints: {
      calendarLabel: 'Semesters (2 terms/year)',
      sizeLabel: 'Small university (~3,200 students)',
    },
  },
  {
    id: 'rochester',
    name: 'University of Rochester',
    track: 'ppe',
    program: 'PPE (Politics, Philosophy & Economics)',
    calendar: 'semester',
    size: 'medium',
    enrollmentTotal: 6800,
    hints: {
      calendarLabel: 'Semesters (2 terms/year)',
      sizeLabel: 'Medium university (~6,800 students)',
    },
  },
  {
    id: 'ucsd',
    name: 'UC San Diego',
    track: 'economics',
    program: 'Economics',
    calendar: 'quarter',
    size: 'large',
    enrollmentTotal: 42000,
    hints: {
      calendarLabel: 'Quarters (3 terms/year)',
      sizeLabel: 'Large university (~42,000 students)',
    },
  },
  {
    id: 'ucla',
    name: 'UCLA',
    track: 'economics',
    program: 'Economics',
    calendar: 'quarter',
    size: 'large',
    enrollmentTotal: 46000,
    hints: {
      calendarLabel: 'Quarters (3 terms/year)',
      sizeLabel: 'Large university (~46,000 students)',
    },
  },
];
