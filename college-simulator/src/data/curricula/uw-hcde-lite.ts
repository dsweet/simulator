import { Curriculum } from '../../types';

export const uwHcdeLite: Curriculum = {
  schoolId: 'uw-hcde-lite',
  program: 'HCDE (Elective Focus)',
  degreeRequirements: {
    totalCredits: 180,
    majorCredits: 71, // Major Core (46) + HCDE Electives (23) + Experiential Learning (2)
    genEdCredits: 35, // English Comp (5) + Writing (7) + A&H (10) + SSc (10) + A&H/SSc (10) + DIV (5) — with overlaps
    electiveCredits: 74, // ENGRUD prereqs + engineering fundamentals + free electives
    majorCourses: [
      // HCDE Major Core (46cr)
      'HCDE302', 'HCDE303', 'HCDE308', 'HCDE310', 'HCDE313',
      'HCDE315', // or HCDE316 — pick one
      'HCDE321', 'HCDE322', 'HCDE351',
      'HCDE492', 'HCDE493',
    ],
    genEdCategories: [
      // === ENGRUD Placement Requirements (◆ diamond = must complete, ★ star = pick one) ===
      { id: 'calculus', name: 'Mathematics — Calculus (◆ Placement)', creditsRequired: 15, satisfiedBy: ['MATH124', 'MATH125', 'MATH126'] },
      { id: 'statistics', name: 'Statistics (★ Placement — pick one)', creditsRequired: 5, satisfiedBy: ['STAT220', 'STAT290', 'STAT311', 'QSCI381'] },
      { id: 'sciences', name: 'Sciences (◆ Placement — 15cr)', creditsRequired: 15, satisfiedBy: ['CHEM142', 'PHYS121', 'CHEM152', 'CHEM162', 'PHYS122', 'PHYS123', 'BIOL180', 'ENVIR100'] },
      { id: 'addl-math-sci', name: 'Additional Math/Stats/Science (★ Placement)', creditsRequired: 15, satisfiedBy: ['CHEM152', 'CHEM162', 'PHYS122', 'PHYS123', 'STAT311', 'QSCI381'] },

      // === General Education Requirements (35cr) ===
      { id: 'english-comp', name: 'English Composition (◆ Placement)', creditsRequired: 5, satisfiedBy: ['ENGL111', 'ENGL121', 'ENGL131', 'ENGL182'] },
      { id: 'writing', name: 'Writing (7cr — may overlap)', creditsRequired: 7, satisfiedBy: ['HCDE313', 'ENGL111', 'ENGL121', 'ENGL131', 'ENGL182', 'ENGL283'] },
      { id: 'arts-humanities', name: 'Arts & Humanities (A&H)', creditsRequired: 10, satisfiedBy: ['ART134', 'ENGL242', 'ENGL243', 'ENGL260', 'ENGL283', 'ENGL302', 'DXARTS200', 'MUSIC116', 'DRAMA101', 'CLIT240', 'CLIT250', 'CLIT270', 'PHIL100', 'PHIL114', 'PHIL360', 'MUSIC120', 'MUSIC162', 'MUSIC185', 'MUSIC280', 'LING200', 'COM270', 'COM382', 'RELIG101', 'CLASS205', 'PHIL200', 'PHIL344', 'ENGL220', 'ENGL230', 'ENGL240', 'ENGL250', 'ENGL310', 'ENGL320', 'CLIT260', 'CLIT265', 'CLIT280', 'CLIT290'] },
      { id: 'social-science', name: 'Social Sciences (SSc)', creditsRequired: 10, satisfiedBy: ['PSYCH101', 'SOC101', 'ECON200', 'POL101', 'HIST111', 'HIST112', 'HIST215', 'HIST225', 'AAS101', 'ANTH215', 'INFO200', 'ECON201', 'POL201', 'POL203', 'POL204', 'POL325', 'SOC221', 'SOC225'] },
      { id: 'addl-ah-ssc', name: 'Additional A&H or SSc', creditsRequired: 10, satisfiedBy: ['ART134', 'ENGL242', 'ENGL243', 'ENGL260', 'ENGL283', 'ENGL302', 'DXARTS200', 'MUSIC116', 'DRAMA101', 'CLIT240', 'CLIT250', 'CLIT270', 'PHIL100', 'PHIL114', 'PHIL360', 'PSYCH101', 'SOC101', 'ECON200', 'POL101', 'HIST111', 'HIST112', 'HIST215', 'HIST225', 'AAS101', 'ANTH215', 'INFO200', 'MUSIC120', 'MUSIC162', 'MUSIC185', 'MUSIC280', 'LING200', 'COM270', 'COM382', 'RELIG101', 'CLASS205', 'PHIL200', 'PHIL344', 'ENGL220', 'ENGL230', 'ENGL240', 'ENGL250', 'ENGL310', 'ENGL320', 'CLIT260', 'CLIT265', 'CLIT280', 'CLIT290', 'ECON201', 'POL201', 'POL203', 'POL204', 'POL325', 'SOC221', 'SOC225'] },
      { id: 'diversity', name: 'Diversity (DIV — may overlap)', creditsRequired: 5, satisfiedBy: ['HCDE315', 'AAS101', 'AAS320', 'GWSS200', 'AIS200', 'ANTH215', 'ENGL262', 'SOC225', 'ENVIR310'] },

      // === Engineering Fundamentals (12cr) ===
      { id: 'eng-fundamentals', name: 'Engineering Fundamentals (12cr)', creditsRequired: 12, satisfiedBy: ['CSE121', 'CSE122', 'CSE123', 'CSE160', 'CSE163', 'CSE180', 'AA210', 'AMATH301', 'BIOEN215', 'CEE220', 'EE215', 'ENGR115', 'ME123', 'ME230', 'MSE170', 'NME220'] },
    ],
  },
  recommendedSequence: {
    years: 4,
    terms: [
      // ==================== YEAR 1: ENGRUD + Electives (AP/IB credits free up slots) ====================
      {
        termLabel: 'Fall Year 1',
        courses: ['MATH124', 'CHEM142', 'DRAMA101'],
        locked: [true, true, false],
        slotLabels: ['◆ Calculus I (Placement)', '◆ General Chemistry (Placement)', '🟢 A&H elective — AP Stats + AP CS A free up Year 1 slots'],
      },
      {
        termLabel: 'Winter Year 1',
        courses: ['MATH125', 'ENGL111', 'MUSIC116'],
        locked: [true, true, false],
        slotLabels: ['◆ Calculus II (Placement)', '◆ English Composition (Placement)', '🟢 A&H elective — AP Stats covers statistics req'],
      },
      {
        termLabel: 'Spring Year 1',
        courses: ['MATH126', 'PHYS121', 'ART134'],
        locked: [true, true, false],
        slotLabels: ['◆ Calculus III (Placement)', '◆ Mechanics (Placement)', '🟢 A&H elective — AP CS A covers CSE121 req'],
      },

      // ==================== YEAR 2: Remaining ENGRUD + Electives mixed in ====================
      {
        termLabel: 'Fall Year 2',
        courses: ['PHYS122', 'ENGR115', 'CLIT270'],
        locked: [false, false, false],
        slotLabels: ['Additional Math/Science (Placement)', 'Engineering Fundamentals (choose one)', '🟢 A&H elective (your choice)'],
      },
      {
        termLabel: 'Winter Year 2',
        courses: ['PHYS123', 'CHEM152', 'ENGL242'],
        locked: [false, false, false],
        slotLabels: ['Additional Math/Science', '★ Additional Science (Placement)', '🟢 A&H elective (your choice)'],
      },
      {
        termLabel: 'Spring Year 2',
        courses: ['STAT311', 'CSE163', 'PHIL100'],
        locked: [false, false, false],
        slotLabels: ['Additional Math/Science (also satisfies statistics)', 'Engineering Fundamentals (choose one)', '🟢 A&H elective (your choice)'],
      },

      // ==================== YEAR 3: HCDE Major Core (all locked) ====================
      {
        termLabel: 'Fall Year 3',
        courses: ['HCDE310', 'HCDE302', 'HCDE313'],
        locked: [true, true, true],
        slotLabels: ['Interactive Systems Design & Tech', 'Foundations of HCDE I', 'Intro to User Research (W)'],
      },
      {
        termLabel: 'Winter Year 3',
        courses: ['HCDE303', 'HCDE315', 'HCDE321'],
        locked: [true, true, true],
        slotLabels: ['Foundations of HCDE II', 'Inclusive Design (DIV) — or HCDE 316', 'Professional Portfolio'],
      },
      {
        termLabel: 'Spring Year 3',
        courses: ['HCDE351', 'HCDE308', 'HCDE322'],
        locked: [true, true, true],
        slotLabels: ['UX Prototyping Techniques', 'Visual Communication in HCDE', 'Organizational Teamwork'],
      },

      // ==================== YEAR 4: Capstone + Max Electives ====================
      {
        termLabel: 'Fall Year 4',
        courses: ['HCDE410', 'COM270', 'HIST215'],
        locked: [false, false, false],
        slotLabels: ['HCDE Engineering Elective (minimum needed)', '🟢 A&H elective (your choice)', '🟢 SSc elective (your choice)'],
      },
      {
        termLabel: 'Winter Year 4',
        courses: ['HCDE492', 'ENGL320', 'SOC221'],
        locked: [true, false, false],
        slotLabels: ['Capstone Planning', '🟢 A&H elective (your choice)', '🟢 SSc elective (your choice)'],
      },
      {
        termLabel: 'Spring Year 4',
        courses: ['HCDE493', 'CLIT280', 'AAS101'],
        locked: [true, false, false],
        slotLabels: ['Senior Capstone', '🟢 A&H elective (your choice)', '🟢 SSc / DIV elective (your choice)'],
      },
    ],
  },
  courses: [
    // ===================================================================
    // ENGRUD PLACEMENT REQUIREMENTS (Year 1)
    // ===================================================================

    // ◆ E-FIG
    { id: 'ENGR101', title: 'Engineering Orientation (E-FIG)', description: 'Introduction to the College of Engineering. Explore engineering disciplines, meet faculty, and begin building your engineering identity. Taken with GEN ST 199.', credits: 2, category: 'major-required', interestTags: [], prereqs: [], genEdReqs: [] },

    // ◆ Mathematics
    { id: 'MATH124', title: 'Calculus with Analytic Geometry I', description: 'Limits, derivatives, and integrals of single-variable functions. Applications to science and engineering.', credits: 5, category: 'major-required', interestTags: [], prereqs: [], genEdReqs: ['calculus'] },
    { id: 'MATH125', title: 'Calculus with Analytic Geometry II', description: 'Integration techniques, applications of integrals, sequences and series.', credits: 5, category: 'major-required', interestTags: [], prereqs: ['MATH124'], genEdReqs: ['calculus'] },
    { id: 'MATH126', title: 'Calculus with Analytic Geometry III', description: 'Multivariable calculus: partial derivatives, multiple integrals, vector calculus, and applications to physics and engineering.', credits: 5, category: 'major-required', interestTags: [], prereqs: ['MATH125'], genEdReqs: ['calculus'] },

    // ★ Statistics (pick one)
    { id: 'STAT220', title: 'Principles of Statistical Reasoning', description: 'Statistical literacy, probability, distributions, hypothesis testing, confidence intervals. Recommended for HCDE placement.', credits: 5, category: 'major-required', interestTags: [], prereqs: [], genEdReqs: ['statistics'] },
    { id: 'STAT290', title: 'Basic Statistics (AP Statistics equivalent)', description: 'Introductory probability and statistical methods. Equivalent awarded for AP Statistics score of 4+.', credits: 5, category: 'gen-ed', interestTags: [], prereqs: [], genEdReqs: ['statistics'] },
    { id: 'STAT311', title: 'Elements of Statistical Methods', description: 'Estimation, hypothesis testing, ANOVA, and simple linear regression. Applied statistics for science and engineering.', credits: 5, category: 'elective', interestTags: [], prereqs: ['STAT220'], genEdReqs: ['statistics', 'addl-math-sci'] },

    // ◆ Sciences
    { id: 'CHEM142', title: 'General Chemistry', description: 'Atomic structure, chemical bonding, stoichiometry, thermodynamics, and equilibrium. Prerequisite: CHEM 110 or placement exam.', credits: 5, category: 'major-required', interestTags: ['science'], prereqs: [], genEdReqs: ['sciences'] },
    { id: 'PHYS121', title: 'Mechanics', description: 'Classical mechanics: motion, forces, energy, momentum, and rotational dynamics. Calculus-based physics for engineers.', credits: 5, category: 'major-required', interestTags: ['science', 'space'], prereqs: ['MATH124'], genEdReqs: ['sciences'] },

    // ★ Additional Sciences (for placement and science requirement)
    { id: 'CHEM152', title: 'General Chemistry II', description: 'Chemical kinetics, equilibrium, acids and bases, electrochemistry, and thermodynamics.', credits: 5, category: 'elective', interestTags: ['science'], prereqs: ['CHEM142'], genEdReqs: ['sciences', 'addl-math-sci'] },
    { id: 'CHEM162', title: 'General Chemistry III', description: 'Organic chemistry introduction, coordination chemistry, nuclear chemistry, and materials science applications.', credits: 5, category: 'elective', interestTags: ['science'], prereqs: ['CHEM152'], genEdReqs: ['sciences', 'addl-math-sci'] },
    { id: 'PHYS122', title: 'Electromagnetism', description: 'Electric fields, circuits, magnetic fields, electromagnetic waves, and optics.', credits: 5, category: 'elective', interestTags: ['science', 'space'], prereqs: ['MATH125', 'PHYS121'], genEdReqs: ['sciences', 'addl-math-sci'] },
    { id: 'PHYS123', title: 'Waves, Light, and Heat', description: 'Wave phenomena, geometric and physical optics, thermodynamics, and statistical mechanics.', credits: 5, category: 'elective', interestTags: ['science', 'space'], prereqs: ['MATH126', 'PHYS122'], genEdReqs: ['sciences', 'addl-math-sci'] },
    { id: 'BIOL180', title: 'Introductory Biology', description: 'Cell biology, genetics, evolution, and ecology. How living systems function and change over time.', credits: 5, category: 'elective', interestTags: ['science', 'biology'], prereqs: [], genEdReqs: ['sciences'] },

    // ★ Engineering Fundamentals (12cr: one CSE course + 8cr from list)
    { id: 'CSE121', title: 'Intro to Computer Programming I', description: 'Introduction to programming concepts, data types, control flow, and functions. Java-based. Satisfies engineering fundamentals + placement.', credits: 4, category: 'major-required', interestTags: ['video-games', 'design'], prereqs: [], genEdReqs: ['eng-fundamentals'] },
    { id: 'CSE122', title: 'Intro to Computer Programming II', description: 'Data structures, recursion, sorting, searching, and intermediate OOP.', credits: 4, category: 'elective', interestTags: ['video-games', 'design'], prereqs: ['CSE121'], genEdReqs: ['eng-fundamentals'] },
    { id: 'CSE123', title: 'Intro to Computer Programming III', description: 'Advanced data structures, graphs, hashing, and algorithm analysis.', credits: 4, category: 'elective', interestTags: ['video-games'], prereqs: ['CSE122'], genEdReqs: ['eng-fundamentals'] },
    { id: 'CSE160', title: 'Data Programming', description: 'Introduction to programming with Python for data analysis. Working with datasets, visualization, and basic statistics.', credits: 4, category: 'elective', interestTags: ['design'], prereqs: [], genEdReqs: ['eng-fundamentals'] },
    { id: 'CSE163', title: 'Intermediate Data Programming', description: 'Data analysis with Python, pandas, and matplotlib. Working with real-world datasets, data cleaning, and basic machine learning.', credits: 5, category: 'elective', interestTags: ['design'], prereqs: ['CSE121'], genEdReqs: ['eng-fundamentals'] },
    { id: 'CSE180', title: 'Introduction to Data Science', description: 'Foundations of data science: data collection, analysis, visualization, and ethical considerations in computational thinking.', credits: 4, category: 'elective', interestTags: ['design'], prereqs: [], genEdReqs: ['eng-fundamentals'] },
    { id: 'ENGR115', title: 'Introduction to Engineering Design', description: 'Team-based engineering design process. Problem identification, prototyping, testing, and iteration.', credits: 4, category: 'elective', interestTags: ['design'], prereqs: [], genEdReqs: ['eng-fundamentals'] },
    { id: 'AA210', title: 'Engineering Statics', description: 'Forces, moments, equilibrium of rigid bodies. Foundation for structural and mechanical analysis.', credits: 4, category: 'elective', interestTags: ['space'], prereqs: ['MATH124', 'PHYS121'], genEdReqs: ['eng-fundamentals'] },
    { id: 'AMATH301', title: 'Beginning Scientific Computing', description: 'Numerical methods, interpolation, integration, ODEs, and matrix computations using MATLAB or Python.', credits: 4, category: 'elective', interestTags: [], prereqs: ['MATH126'], genEdReqs: ['eng-fundamentals', 'addl-math-sci'] },
    { id: 'BIOEN215', title: 'Bioengineering Fundamentals', description: 'Introduction to bioengineering principles, biomaterials, and biomedical device design.', credits: 4, category: 'elective', interestTags: ['science'], prereqs: [], genEdReqs: ['eng-fundamentals'] },
    { id: 'CEE220', title: 'Introduction to Mechanics of Materials', description: 'Stress, strain, deformation, and failure of engineering materials. Beams, columns, and torsion.', credits: 4, category: 'elective', interestTags: [], prereqs: ['PHYS121'], genEdReqs: ['eng-fundamentals'] },
    { id: 'EE215', title: 'Introduction to Electrical Engineering', description: 'Circuit analysis, resistors, capacitors, inductors, and basic electronics.', credits: 4, category: 'elective', interestTags: [], prereqs: ['MATH125', 'PHYS121'], genEdReqs: ['eng-fundamentals'] },
    { id: 'ME123', title: 'Visualization and CAD', description: 'Engineering graphics, 3D modeling, and computer-aided design using SolidWorks.', credits: 4, category: 'elective', interestTags: ['design'], prereqs: [], genEdReqs: ['eng-fundamentals'] },
    { id: 'ME230', title: 'Kinematics and Dynamics', description: 'Particle and rigid body kinematics, Newton\'s laws applied to engineering systems.', credits: 4, category: 'elective', interestTags: [], prereqs: ['MATH125', 'PHYS121'], genEdReqs: ['eng-fundamentals'] },
    { id: 'MSE170', title: 'Introduction to Materials Science', description: 'Atomic structure, crystal structure, defects, phase diagrams, and mechanical properties of materials.', credits: 4, category: 'elective', interestTags: ['science'], prereqs: ['CHEM142'], genEdReqs: ['eng-fundamentals'] },
    { id: 'NME220', title: 'Introduction to Nuclear Engineering', description: 'Nuclear physics, reactor design, radiation, and applications of nuclear technology.', credits: 4, category: 'elective', interestTags: ['science', 'space'], prereqs: ['PHYS121'], genEdReqs: ['eng-fundamentals'] },

    // ===================================================================
    // HCDE MAJOR CORE REQUIREMENTS (46cr) — Year 3
    // ===================================================================
    { id: 'HCDE302', title: 'Foundations of HCDE I', description: 'Introduction to human-centered design principles, design thinking frameworks, and the role of technology in human experience. First course in the HCDE core sequence.', credits: 5, category: 'major-required', interestTags: ['design'], prereqs: [], genEdReqs: [] },
    { id: 'HCDE303', title: 'Foundations of HCDE II', description: 'Continuation of HCDE 302. Deeper exploration of design methods, systems thinking, and engineering approaches to human-centered problems.', credits: 5, category: 'major-required', interestTags: ['design'], prereqs: ['HCDE302'], genEdReqs: [] },
    { id: 'HCDE308', title: 'Visual Communication in HCDE', description: 'Principles of visual design for engineering communication. Typography, layout, color, data visualization, and information graphics.', credits: 5, category: 'major-required', interestTags: ['design'], prereqs: [], genEdReqs: [] },
    { id: 'HCDE310', title: 'Interactive Systems Design & Technology', description: 'Design and implementation of interactive systems. Web technologies, prototyping tools, and the relationship between design and technical constraints.', credits: 5, category: 'major-required', interestTags: ['design', 'video-games'], prereqs: [], genEdReqs: [] },
    { id: 'HCDE313', title: 'Introduction to User Research', description: 'Qualitative and quantitative user research methods. Interviews, surveys, contextual inquiry, usability testing, and data analysis. Fulfills Writing (W) requirement.', credits: 5, category: 'major-required', interestTags: ['design'], prereqs: [], genEdReqs: ['writing'] },
    { id: 'HCDE315', title: 'Inclusive Design', description: 'Designing for diverse populations, accessibility standards, assistive technologies, and universal design principles. Fulfills SSc and DIV requirements.', credits: 5, category: 'major-required', interestTags: ['design', 'cultural-studies'], prereqs: [], genEdReqs: ['diversity', 'social-science'] },
    { id: 'HCDE316', title: 'Sustainable Design', description: 'Environmental impact of design decisions, lifecycle analysis, circular economy principles, and designing for sustainability.', credits: 5, category: 'major-required', interestTags: ['design'], prereqs: [], genEdReqs: [] },
    { id: 'HCDE321', title: 'Professional Portfolio', description: 'Building a professional design portfolio. Documenting projects, presenting work, and developing a personal design brand.', credits: 2, category: 'major-required', interestTags: ['design'], prereqs: [], genEdReqs: [] },
    { id: 'HCDE322', title: 'Organizational Teamwork', description: 'Team dynamics, communication, conflict resolution, and collaborative design processes in engineering contexts.', credits: 2, category: 'major-required', interestTags: ['design'], prereqs: [], genEdReqs: [] },
    { id: 'HCDE351', title: 'User Experience Prototyping Techniques', description: 'Rapid prototyping methods from paper to digital. Wireframing, interactive mockups, and prototype testing with users.', credits: 5, category: 'major-required', interestTags: ['design', 'video-games'], prereqs: [], genEdReqs: [] },
    { id: 'HCDE492', title: 'Capstone Planning', description: 'Planning phase of the senior capstone project. Problem definition, stakeholder analysis, research plan, and team formation.', credits: 2, category: 'major-required', interestTags: ['design'], prereqs: [], genEdReqs: [] },
    { id: 'HCDE493', title: 'Senior Capstone', description: 'Culminating team capstone project with an industry or community partner. Full design cycle from research through final deliverable and presentation.', credits: 5, category: 'major-required', interestTags: ['design'], prereqs: ['HCDE492'], genEdReqs: [] },

    // ===================================================================
    // EXPERIENTIAL LEARNING (2cr minimum)
    // ===================================================================
    { id: 'ENGR321', title: 'Engineering Internship Education', description: 'Structured reflection on engineering internship experience. Professional development, workplace culture, and applying classroom learning.', credits: 2, category: 'major-elective', interestTags: [], prereqs: [], genEdReqs: [] },
    { id: 'ENGR490', title: 'Engineering Leadership', description: 'Leadership skills for engineers. Communication, ethics, project management, and leading technical teams.', credits: 2, category: 'major-elective', interestTags: [], prereqs: [], genEdReqs: [] },
    { id: 'HCDE496', title: 'Directed Research in HCDE', description: 'Faculty-mentored research project applying HCDE methods to a real-world problem. Literature review, methodology, and findings.', credits: 2, category: 'major-elective', interestTags: ['design'], prereqs: [], genEdReqs: [] },
    { id: 'HCDE497', title: 'Study Abroad: HCDE', description: 'International study experience in human-centered design. Cross-cultural design perspectives and global design challenges.', credits: 2, category: 'major-elective', interestTags: ['design', 'cultural-studies'], prereqs: [], genEdReqs: [] },
    { id: 'HCDE499', title: 'Individual Research', description: 'Independent research project under faculty supervision. Opportunity to pursue a specific HCDE research interest in depth.', credits: 2, category: 'major-elective', interestTags: ['design'], prereqs: [], genEdReqs: [] },

    // ===================================================================
    // HCDE ENGINEERING ELECTIVES (15cr minimum from this list)
    // ===================================================================
    { id: 'HCDE410', title: 'Advanced Interactive Systems', description: 'Advanced topics in interactive system design. Emerging technologies, AI-powered interfaces, and novel interaction paradigms.', credits: 5, category: 'major-elective', interestTags: ['design', 'video-games'], prereqs: ['HCDE310'], genEdReqs: [] },
    { id: 'HCDE411', title: 'Information Architecture & Data', description: 'Organizing and structuring information for complex systems. Taxonomies, metadata, content modeling, and data-driven design.', credits: 5, category: 'major-elective', interestTags: ['design'], prereqs: ['HCDE302'], genEdReqs: [] },
    { id: 'HCDE417', title: 'Design & Machine Learning', description: 'Designing with and for AI/ML systems. Explainability, fairness, human-AI interaction patterns, and responsible AI design.', credits: 5, category: 'major-elective', interestTags: ['design'], prereqs: ['HCDE302'], genEdReqs: [] },
    { id: 'HCDE438', title: 'Advanced Prototyping', description: 'Advanced physical and digital prototyping. Arduino, sensors, wearables, and tangible interaction design for engineers.', credits: 5, category: 'major-elective', interestTags: ['design'], prereqs: ['HCDE351'], genEdReqs: [] },
    { id: 'HCDE439', title: 'Advanced User Research Methods', description: 'Advanced qualitative methods for design research. Diary studies, participatory design, co-design workshops, and ethnographic fieldwork.', credits: 5, category: 'major-elective', interestTags: ['design'], prereqs: ['HCDE313'], genEdReqs: [] },

    // ===================================================================
    // HCDE SYSTEMS & SOCIETY ELECTIVES (8cr minimum from this list)
    // ===================================================================
    { id: 'HCDE412', title: 'Ethics in Design & Engineering', description: 'Ethical frameworks for design decisions. Privacy, consent, algorithmic bias, and the social responsibility of designers and engineers.', credits: 4, category: 'major-elective', interestTags: ['design', 'philosophy'], prereqs: ['HCDE302'], genEdReqs: [] },
    { id: 'HCDE418', title: 'Design for Social Impact', description: 'Community-engaged design methods. Co-design with underserved populations, participatory action research, and design justice.', credits: 4, category: 'major-elective', interestTags: ['design', 'cultural-studies'], prereqs: ['HCDE313'], genEdReqs: [] },
    { id: 'HCDE419', title: 'Global Design & Technology', description: 'Cross-cultural design considerations, technology in developing contexts, and designing for global audiences.', credits: 4, category: 'major-elective', interestTags: ['design', 'cultural-studies'], prereqs: ['HCDE302'], genEdReqs: [] },
    { id: 'HCDE450', title: 'Topics in HCDE', description: 'Special topics in human-centered design and engineering. Content varies by quarter and instructor.', credits: 4, category: 'major-elective', interestTags: ['design'], prereqs: ['HCDE302'], genEdReqs: [] },
    { id: 'HCDE485', title: 'Design & Policy', description: 'How design intersects with public policy. Regulation of technology, accessible design mandates, and advocating for user needs in policy settings.', credits: 4, category: 'major-elective', interestTags: ['design', 'philosophy'], prereqs: ['HCDE302'], genEdReqs: [] },

    // ===================================================================
    // CERAMICS / STUDIO ART
    // ===================================================================
    { id: 'ART134', title: 'Introduction to Ceramics', description: 'Hand-building and wheel-throwing techniques. Clay preparation, glazing, and kiln firing. Studio access included.', credits: 5, category: 'elective', interestTags: ['ceramics'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },
    { id: 'ART234', title: 'Intermediate Ceramics: Wheel Throwing', description: 'Focus on wheel-throwing skills, form development, and surface decoration. Exploration of functional pottery.', credits: 5, category: 'elective', interestTags: ['ceramics'], prereqs: ['ART134'], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },
    { id: 'ART334', title: 'Advanced Ceramics: Sculpture & Installation', description: 'Large-scale ceramic sculpture, mixed-media approaches, and installation art. Kiln operation and glaze chemistry.', credits: 5, category: 'elective', interestTags: ['ceramics'], prereqs: ['ART234'], genEdReqs: [] },
    { id: 'ART335', title: 'Ceramics: Raku & Alternative Firing', description: 'Raku, pit firing, saggar, and other alternative firing techniques. Emphasis on experimentation and process.', credits: 5, category: 'elective', interestTags: ['ceramics'], prereqs: ['ART234'], genEdReqs: [] },
    { id: 'ART130', title: 'Introduction to Drawing', description: 'Observational drawing fundamentals. Line, value, composition, and perspective using various media.', credits: 5, category: 'elective', interestTags: ['ceramics'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },
    { id: 'ART131', title: 'Introduction to Sculpture', description: 'Three-dimensional art making using wood, metal, plaster, and found objects. Additive and subtractive processes.', credits: 5, category: 'elective', interestTags: ['ceramics'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },

    // ===================================================================
    // ASTRONOMY / SPACE
    // ===================================================================
    { id: 'ASTR101', title: 'Astronomy', description: 'Survey of modern astronomy: the solar system, stars, galaxies, and cosmology. Night sky observation sessions.', credits: 5, category: 'elective', interestTags: ['astronomy', 'space', 'science'], prereqs: [], genEdReqs: ['sciences'] },
    { id: 'ASTR102', title: 'Introduction to Astrophysics', description: 'Physical principles governing astronomical phenomena. Light, gravity, nuclear fusion, and the evolution of stars.', credits: 5, category: 'elective', interestTags: ['astronomy', 'space', 'science'], prereqs: ['ASTR101'], genEdReqs: ['sciences'] },
    { id: 'ASTR150', title: 'The Planets', description: 'Comparative planetology: formation, geology, atmospheres, and potential for life on planets and moons in our solar system.', credits: 5, category: 'elective', interestTags: ['astronomy', 'space', 'science'], prereqs: [], genEdReqs: ['sciences'] },
    { id: 'ASTR322', title: 'Astrobiology', description: 'The science of life in the universe. Origin of life on Earth, extremophiles, biosignatures, and the search for extraterrestrial life.', credits: 5, category: 'elective', interestTags: ['astronomy', 'space', 'science'], prereqs: ['ASTR101'], genEdReqs: [] },
    { id: 'ESS101', title: 'Introduction to Earth Science', description: 'Earth systems, plate tectonics, minerals, rocks, geologic time, and the dynamic processes shaping our planet.', credits: 5, category: 'elective', interestTags: ['space', 'science'], prereqs: [], genEdReqs: ['sciences'] },
    { id: 'ESS102', title: 'Space & Space Travel', description: 'Rocketry, orbital mechanics, space exploration history, current missions, and the future of human spaceflight.', credits: 5, category: 'elective', interestTags: ['astronomy', 'space', 'science'], prereqs: [], genEdReqs: ['sciences'] },
    { id: 'ATM101', title: 'Weather & Climate', description: 'Atmospheric science, weather patterns, climate systems, and climate change science.', credits: 5, category: 'elective', interestTags: ['space', 'science'], prereqs: [], genEdReqs: ['sciences'] },

    // ===================================================================
    // HISTORY
    // ===================================================================
    { id: 'HIST111', title: 'World History: Ancient Civilizations', description: 'Major civilizations from prehistory to 1500 CE. Mesopotamia, Egypt, China, India, Greece, Rome, and the Americas.', credits: 5, category: 'elective', interestTags: ['history'], prereqs: [], genEdReqs: ['social-science', 'addl-ah-ssc'] },
    { id: 'HIST112', title: 'World History: The Modern World', description: 'Global history from 1500 to present. Colonialism, industrialization, world wars, decolonization, and globalization.', credits: 5, category: 'elective', interestTags: ['history'], prereqs: [], genEdReqs: ['social-science', 'addl-ah-ssc'] },
    { id: 'HIST215', title: 'History of East Asia', description: 'China, Japan, and Korea from ancient times to the present. Cultural, political, and economic developments.', credits: 5, category: 'elective', interestTags: ['history', 'cultural-studies'], prereqs: [], genEdReqs: ['social-science', 'addl-ah-ssc'] },
    { id: 'HIST225', title: 'Japanese History', description: 'Japan from ancient times to the present. Samurai culture, Meiji modernization, WWII, and contemporary Japan.', credits: 5, category: 'elective', interestTags: ['history', 'cultural-studies'], prereqs: [], genEdReqs: ['social-science', 'addl-ah-ssc'] },
    { id: 'HIST312', title: 'History of the Pacific Northwest', description: 'Indigenous peoples, exploration, settlement, timber and fishing industries, environmental history, and cultural development of the PNW.', credits: 5, category: 'elective', interestTags: ['history'], prereqs: [], genEdReqs: ['social-science', 'addl-ah-ssc'] },
    { id: 'HIST231', title: 'History of Science', description: 'Development of scientific thought from ancient Greece to modern times. Scientific revolutions, paradigm shifts, and science in society.', credits: 5, category: 'elective', interestTags: ['history', 'space'], prereqs: [], genEdReqs: ['social-science', 'addl-ah-ssc'] },

    // ===================================================================
    // ASIAN AMERICAN STUDIES / CULTURAL STUDIES
    // ===================================================================
    { id: 'AAS101', title: 'Introduction to Asian American Studies', description: 'History, culture, and contemporary experiences of Asian Americans. Immigration, identity, community, and activism.', credits: 5, category: 'elective', interestTags: ['cultural-studies', 'history'], prereqs: [], genEdReqs: ['social-science', 'diversity', 'addl-ah-ssc'] },
    { id: 'AAS200', title: 'Asian Americans and the Arts', description: 'Asian American artistic expression in literature, film, visual art, and performance. Identity, representation, and cultural production.', credits: 5, category: 'elective', interestTags: ['cultural-studies', 'literature'], prereqs: [], genEdReqs: ['arts-humanities', 'diversity', 'addl-ah-ssc'] },
    { id: 'AAS310', title: 'Asian American Communities & Health', description: 'Health disparities, mental health, intergenerational trauma, and wellness in Asian American communities.', credits: 5, category: 'elective', interestTags: ['cultural-studies'], prereqs: ['AAS101'], genEdReqs: ['diversity'] },
    { id: 'AAS320', title: 'Asian Americans in the Pacific Northwest', description: 'Japanese American incarceration, Filipino cannery workers, Chinese exclusion, and contemporary Asian American life in the PNW.', credits: 5, category: 'elective', interestTags: ['cultural-studies', 'history'], prereqs: [], genEdReqs: ['social-science', 'diversity', 'addl-ah-ssc'] },
    { id: 'AAS330', title: 'Race, Technology & Society', description: 'How race shapes and is shaped by technology. Algorithmic bias, digital divide, surveillance, and tech workforce diversity.', credits: 5, category: 'elective', interestTags: ['cultural-studies', 'design'], prereqs: [], genEdReqs: ['diversity'] },

    // ===================================================================
    // GAME DESIGN / VIDEO GAMES / INTERACTIVE MEDIA
    // ===================================================================
    { id: 'CSE340', title: 'Interaction Programming', description: 'Building interactive applications. Event-driven programming, UI toolkits, input devices, and undo/redo architectures.', credits: 5, category: 'elective', interestTags: ['design', 'video-games'], prereqs: ['CSE123'], genEdReqs: [] },
    { id: 'CSE481', title: 'Game Development Capstone', description: 'Team-based game development project. Game engines, graphics, AI, physics, sound, and production pipeline.', credits: 5, category: 'elective', interestTags: ['video-games', 'design'], prereqs: ['CSE123'], genEdReqs: [] },
    { id: 'INFO200', title: 'Intellectual Foundations of Informatics', description: 'Information in society, human-information interaction, data ethics, and the social impact of technology.', credits: 5, category: 'elective', interestTags: ['design'], prereqs: [], genEdReqs: ['social-science', 'addl-ah-ssc'] },
    { id: 'INFO343', title: 'Client-Side Web Development', description: 'Modern web development with React, responsive design, accessibility, and interactive web applications.', credits: 5, category: 'elective', interestTags: ['design', 'video-games'], prereqs: ['CSE121'], genEdReqs: [] },
    { id: 'DXARTS200', title: 'Digital Arts: Interdisciplinary Foundations', description: 'Creative coding, interactive art, digital fabrication. Intersection of art and technology.', credits: 5, category: 'elective', interestTags: ['design', 'video-games'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },
    { id: 'DXARTS490', title: 'Game Art & Interactive Narrative', description: 'Creating art assets for games. Narrative design, world-building, and environmental storytelling in interactive media.', credits: 5, category: 'elective', interestTags: ['video-games', 'design', 'literature'], prereqs: ['DXARTS200'], genEdReqs: [] },
    { id: 'COM271', title: 'Interactive Media Design', description: 'Designing interactive experiences for web, mobile, and emerging platforms. User engagement and interactive storytelling.', credits: 5, category: 'elective', interestTags: ['video-games', 'design'], prereqs: [], genEdReqs: [] },

    // ===================================================================
    // LITERATURE
    // ===================================================================
    { id: 'ENGL242', title: 'Reading Fiction', description: 'Close reading of novels and short stories. Narrative structure, characterization, and literary analysis.', credits: 5, category: 'elective', interestTags: ['literature', 'classics'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },
    { id: 'ENGL243', title: 'Reading Poetry', description: 'Study of poetic forms, techniques, and traditions. Close reading and interpretation of poetry across periods.', credits: 5, category: 'elective', interestTags: ['literature'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },
    { id: 'ENGL262', title: 'Asian American Literature', description: 'Literature by Asian American writers exploring identity, immigration, belonging, and cultural negotiation.', credits: 5, category: 'elective', interestTags: ['literature', 'cultural-studies'], prereqs: [], genEdReqs: ['arts-humanities', 'diversity', 'addl-ah-ssc'] },
    { id: 'ENGL283', title: 'Introduction to Creative Writing', description: 'Workshop-based introduction to writing fiction and poetry. Peer critique and revision process.', credits: 5, category: 'elective', interestTags: ['literature'], prereqs: [], genEdReqs: ['arts-humanities', 'writing', 'addl-ah-ssc'] },
    { id: 'ENGL302', title: 'Science Fiction', description: 'The genre of science fiction from its origins to present. Utopia, dystopia, technology, and social commentary.', credits: 5, category: 'elective', interestTags: ['literature', 'space'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },
    { id: 'ENGL363', title: 'Studies in World Literature', description: 'Comparative literature spanning multiple traditions. Global perspectives on storytelling and literary craft.', credits: 5, category: 'elective', interestTags: ['literature'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },
    { id: 'CLIT270', title: 'Introduction to Graphic Narrative', description: 'Comics, manga, and graphic novels as literary and visual art forms. Storytelling through sequential art.', credits: 5, category: 'elective', interestTags: ['literature', 'video-games'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },
    { id: 'ENGL260', title: 'The Novel', description: 'History of the novel from Cervantes to contemporary fiction. Form, narrative technique, and cultural context.', credits: 5, category: 'elective', interestTags: ['literature'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },
    { id: 'CLIT240', title: 'Classical Literature in Translation', description: 'Homer, Virgil, Ovid, and Sappho. Epic, lyric, and drama from the ancient Mediterranean world.', credits: 5, category: 'elective', interestTags: ['literature', 'classics'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },
    { id: 'CLIT250', title: 'Russian Literature in Translation', description: 'Dostoevsky, Tolstoy, Chekhov, and Bulgakov. The Russian literary tradition and its global influence.', credits: 5, category: 'elective', interestTags: ['literature'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },

    // ===================================================================
    // GAME THEORY
    // ===================================================================
    { id: 'ECON300', title: 'Introduction to Game Theory', description: 'Strategic decision-making. Nash equilibrium, dominant strategies, repeated games, and applications to economics and social sciences.', credits: 5, category: 'elective', interestTags: ['game-theory', 'economics'], prereqs: ['MATH124'], genEdReqs: [] },
    { id: 'MATH381', title: 'Discrete Mathematical Modeling', description: 'Graph theory, combinatorics, game theory, and network models. Mathematical approaches to strategic problems.', credits: 5, category: 'elective', interestTags: ['game-theory'], prereqs: ['MATH125'], genEdReqs: ['addl-math-sci'] },

    // ===================================================================
    // GEN-ED OPTIONS
    // ===================================================================
    { id: 'PSYCH101', title: 'Introduction to Psychology', description: 'Scientific study of behavior and mental processes. Perception, learning, memory, personality, and social psychology.', credits: 5, category: 'gen-ed', interestTags: [], prereqs: [], genEdReqs: ['social-science', 'addl-ah-ssc'] },
    { id: 'SOC101', title: 'Introduction to Sociology', description: 'Social structures, institutions, inequality, culture, and how society shapes individual behavior.', credits: 5, category: 'gen-ed', interestTags: ['sociology'], prereqs: [], genEdReqs: ['social-science', 'addl-ah-ssc'] },
    { id: 'ECON200', title: 'Introduction to Microeconomics', description: 'Supply and demand, market structures, consumer behavior, and economic efficiency.', credits: 5, category: 'gen-ed', interestTags: ['game-theory', 'economics'], prereqs: [], genEdReqs: ['social-science', 'addl-ah-ssc'] },
    { id: 'POL101', title: 'Introduction to Political Science', description: 'Political systems, institutions, ideologies, and power. Comparative politics and international relations.', credits: 5, category: 'gen-ed', interestTags: ['politics'], prereqs: [], genEdReqs: ['social-science', 'addl-ah-ssc'] },
    { id: 'ENGL111', title: 'Composition: Literature', description: 'College-level writing through analysis of literary texts. Argumentation, evidence, and revision. Satisfies English Composition requirement.', credits: 5, category: 'gen-ed', interestTags: ['literature'], prereqs: [], genEdReqs: ['english-comp', 'writing'] },
    { id: 'ENGL121', title: 'Composition: Research Writing', description: 'Research-based writing. Finding, evaluating, and synthesizing sources to construct evidence-based arguments.', credits: 5, category: 'gen-ed', interestTags: [], prereqs: [], genEdReqs: ['english-comp', 'writing'] },
    { id: 'ENGL131', title: 'Composition: Exposition', description: 'Expository writing for academic audiences. Research, analysis, and clear argumentation.', credits: 5, category: 'gen-ed', interestTags: [], prereqs: [], genEdReqs: ['english-comp', 'writing'] },
    { id: 'ENGL182', title: 'Technical Writing', description: 'Writing for technical and professional audiences. Reports, proposals, documentation, and visual communication.', credits: 5, category: 'gen-ed', interestTags: [], prereqs: [], genEdReqs: ['english-comp', 'writing'] },
    { id: 'MUSIC116', title: 'Introduction to Music', description: 'Elements of music, historical periods, genres, and listening skills. No musical background required.', credits: 5, category: 'gen-ed', interestTags: ['music'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },
    { id: 'DRAMA101', title: 'Introduction to Theater', description: 'Theater as an art form. Acting, directing, design, and dramatic literature. Attendance at live performances.', credits: 5, category: 'gen-ed', interestTags: [], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },
    { id: 'ANTH215', title: 'Peoples & Cultures of Southeast Asia', description: 'Cultural diversity, religions, arts, and social change in Southeast Asian societies.', credits: 5, category: 'gen-ed', interestTags: ['cultural-studies', 'history'], prereqs: [], genEdReqs: ['social-science', 'diversity', 'addl-ah-ssc'] },
    { id: 'GWSS200', title: 'Introduction to Gender, Women & Sexuality Studies', description: 'Gender and sexuality as social constructs. Feminist theory, intersectionality, and social justice.', credits: 5, category: 'gen-ed', interestTags: [], prereqs: [], genEdReqs: ['social-science', 'diversity', 'addl-ah-ssc'] },
    { id: 'AIS200', title: 'Introduction to American Indian Studies', description: 'History, cultures, and contemporary issues of Indigenous peoples in the Americas. Sovereignty, identity, and representation.', credits: 5, category: 'gen-ed', interestTags: ['cultural-studies', 'history'], prereqs: [], genEdReqs: ['social-science', 'diversity', 'addl-ah-ssc'] },
    { id: 'QSCI381', title: 'Introduction to Probability & Statistics', description: 'Probability, random variables, hypothesis testing, and regression. Quantitative methods for natural sciences.', credits: 5, category: 'gen-ed', interestTags: ['science'], prereqs: ['MATH124'], genEdReqs: ['statistics'] },

    // ===================================================================
    // PHILOSOPHY
    // ===================================================================
    { id: 'PHIL100', title: 'Introduction to Philosophy', description: 'Fundamental questions about knowledge, reality, ethics, and the good life. Reading classic and contemporary philosophers.', credits: 5, category: 'elective', interestTags: ['philosophy'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },
    { id: 'PHIL114', title: 'Ethics', description: 'Major moral theories and contemporary ethical dilemmas. Utilitarianism, deontology, virtue ethics, and applied ethics.', credits: 5, category: 'elective', interestTags: ['philosophy'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },
    { id: 'PHIL115', title: 'Philosophy of Mind', description: 'Consciousness, artificial intelligence, personal identity, and the mind-body problem. Deeply relevant to HCDE.', credits: 5, category: 'elective', interestTags: ['philosophy', 'design'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },
    { id: 'PHIL120', title: 'Introduction to Logic', description: 'Formal and informal logic, valid arguments, fallacies, and truth tables.', credits: 5, category: 'elective', interestTags: ['philosophy', 'game-theory'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },
    { id: 'PHIL240', title: 'Philosophy of Science', description: 'What makes science scientific? Theory change, realism, values in science, and scientific revolutions.', credits: 5, category: 'elective', interestTags: ['philosophy', 'space'], prereqs: [], genEdReqs: [] },
    { id: 'PHIL340', title: 'Ethics of Technology', description: 'AI ethics, algorithmic bias, privacy, surveillance, and designing ethical technology. Connects directly to HCDE practice.', credits: 5, category: 'elective', interestTags: ['philosophy', 'design'], prereqs: ['PHIL100'], genEdReqs: [] },
    { id: 'PHIL360', title: 'Existentialism', description: 'Freedom, authenticity, and meaning. Kierkegaard, Nietzsche, Heidegger, Sartre, de Beauvoir, and Camus.', credits: 5, category: 'elective', interestTags: ['philosophy', 'literature'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },

    // ===================================================================
    // DESIGN / DIGITAL ARTS
    // ===================================================================
    { id: 'DXARTS310', title: 'Interactive Media Studio', description: 'Creative coding with Processing and p5.js. Generative art, interactive installations, and sensor-based artworks.', credits: 5, category: 'elective', interestTags: ['design'], prereqs: ['DXARTS200'], genEdReqs: [] },
    { id: 'DXARTS380', title: 'Sound Design & Audio Interaction', description: 'Designing with sound. Audio interfaces, spatial sound, sonification of data, and sound in interactive environments.', credits: 5, category: 'elective', interestTags: ['design'], prereqs: ['DXARTS200'], genEdReqs: [] },
    { id: 'DESIGN360', title: 'Visual Communication Design', description: 'Typography, layout, color systems, and visual hierarchy. Designing for print and digital media with emphasis on communication clarity.', credits: 5, category: 'elective', interestTags: ['design'], prereqs: [], genEdReqs: [] },
    { id: 'DESIGN380', title: 'Design Studio: Systems Thinking', description: 'Designing complex systems and service ecologies. Stakeholder mapping, systems diagrams, and designing for systemic change.', credits: 5, category: 'elective', interestTags: ['design'], prereqs: [], genEdReqs: [] },
    { id: 'DESIGN410', title: 'Design for Social Innovation', description: 'Community-engaged design methods. Co-design with marginalized populations, participatory action research, and design justice.', credits: 5, category: 'elective', interestTags: ['design', 'cultural-studies'], prereqs: [], genEdReqs: [] },

    // ===================================================================
    // COGNITIVE SCIENCE / PSYCHOLOGY
    // ===================================================================
    { id: 'PSYCH303', title: 'Cognitive Psychology', description: 'Attention, perception, memory, language, and problem-solving. How humans process information and make decisions.', credits: 5, category: 'elective', interestTags: ['design'], prereqs: ['PSYCH101'], genEdReqs: [] },
    { id: 'PSYCH306', title: 'Perception', description: 'Visual, auditory, and haptic perception. Psychophysics, illusions, and the neural basis of sensory experience.', credits: 5, category: 'elective', interestTags: ['design'], prereqs: ['PSYCH101'], genEdReqs: [] },
    { id: 'PSYCH355', title: 'Human Memory', description: 'Encoding, storage, and retrieval processes. Working memory, long-term memory, forgetting, and memory distortion.', credits: 5, category: 'elective', interestTags: ['design'], prereqs: ['PSYCH101'], genEdReqs: [] },
    { id: 'PSYCH345', title: 'Judgment & Decision Making', description: 'Heuristics, biases, prospect theory, and rational choice. How people make decisions under uncertainty.', credits: 5, category: 'elective', interestTags: ['design', 'game-theory'], prereqs: ['PSYCH101'], genEdReqs: [] },
    { id: 'PSYCH315', title: 'Psychology of Human Factors', description: 'Human performance in complex systems. Workload, situational awareness, error analysis, and designing for human limitations.', credits: 5, category: 'elective', interestTags: ['design'], prereqs: ['PSYCH101'], genEdReqs: [] },

    // ===================================================================
    // COMPUTER SCIENCE (Applied)
    // ===================================================================
    { id: 'CSE154', title: 'Web Programming', description: 'Full-stack web development with HTML, CSS, JavaScript, Node.js, and SQL. Building dynamic, data-driven web applications.', credits: 5, category: 'elective', interestTags: ['design', 'video-games'], prereqs: ['CSE121'], genEdReqs: [] },
    { id: 'CSE344', title: 'Introduction to Data Management', description: 'Relational databases, SQL, data modeling, query optimization, and NoSQL systems.', credits: 5, category: 'elective', interestTags: ['design'], prereqs: ['CSE123'], genEdReqs: [] },
    { id: 'CSE414', title: 'Introduction to Database Systems', description: 'Database design, SQL, transactions, and data modeling. Core data management for engineers.', credits: 5, category: 'elective', interestTags: ['design'], prereqs: ['CSE123'], genEdReqs: [] },
    { id: 'CSE416', title: 'Introduction to Machine Learning', description: 'Regression, classification, clustering, and recommender systems. Practical ML with ethical considerations.', credits: 5, category: 'elective', interestTags: ['design'], prereqs: ['CSE123', 'STAT220'], genEdReqs: [] },
    { id: 'CSE440', title: 'Introduction to HCI', description: 'Human-computer interaction methods. Needfinding, prototyping, and evaluation from a CS perspective.', credits: 5, category: 'elective', interestTags: ['design'], prereqs: ['CSE123'], genEdReqs: [] },

    // ===================================================================
    // STATISTICS (Advanced)
    // ===================================================================
    { id: 'STAT342', title: 'Intro to Probability & Mathematical Statistics', description: 'Probability distributions, random variables, expected values, central limit theorem, and maximum likelihood estimation.', credits: 5, category: 'elective', interestTags: [], prereqs: ['MATH125', 'STAT220'], genEdReqs: ['addl-math-sci'] },
    { id: 'STAT390', title: 'Statistical Data Visualization', description: 'Visualizing data distributions, relationships, and uncertainty. R and ggplot2 for statistical graphics.', credits: 5, category: 'elective', interestTags: ['design'], prereqs: ['STAT220'], genEdReqs: ['addl-math-sci'] },
    { id: 'STAT340', title: 'Introduction to Data Science', description: 'End-to-end data science workflow: data wrangling, exploratory analysis, modeling, and communication.', credits: 5, category: 'elective', interestTags: ['design'], prereqs: ['STAT220'], genEdReqs: ['addl-math-sci'] },
    { id: 'STAT395', title: 'Design of Experiments', description: 'Planning and analyzing experiments. Randomization, blocking, factorial designs, and A/B testing methods used in UX research.', credits: 5, category: 'elective', interestTags: ['design'], prereqs: ['STAT311'], genEdReqs: ['addl-math-sci'] },

    // ===================================================================
    // INFORMATION SCIENCE
    // ===================================================================
    { id: 'INFO310', title: 'Information Ethics & Policy', description: 'Intellectual property, privacy, censorship, digital rights, and the ethical responsibilities of information professionals.', credits: 5, category: 'elective', interestTags: ['philosophy', 'design'], prereqs: ['INFO200'], genEdReqs: [] },
    { id: 'INFO360', title: 'Information Architecture', description: 'Organizing and structuring information for findability and usability. Taxonomies, metadata, navigation systems, and search design.', credits: 5, category: 'elective', interestTags: ['design'], prereqs: ['INFO200'], genEdReqs: [] },
    { id: 'INFO340', title: 'Client-Side Development', description: 'Building modern interactive web applications with React, state management, and API integration.', credits: 5, category: 'elective', interestTags: ['design', 'video-games'], prereqs: ['INFO200'], genEdReqs: [] },
    { id: 'INFO370', title: 'Core Methods in Data Science', description: 'Statistical modeling, data wrangling, and machine learning fundamentals using Python.', credits: 5, category: 'elective', interestTags: ['design'], prereqs: ['INFO200', 'STAT220'], genEdReqs: [] },
    { id: 'INFO474', title: 'Interactive Information Visualization', description: 'Designing and building interactive data visualizations for the web. D3.js and narrative data storytelling.', credits: 5, category: 'elective', interestTags: ['design'], prereqs: ['INFO200'], genEdReqs: [] },

    // ===================================================================
    // MATH (Additional)
    // ===================================================================
    { id: 'MATH308', title: 'Matrix Algebra with Applications', description: 'Systems of linear equations, vector spaces, eigenvalues, and applications to data science, graphics, and engineering.', credits: 3, category: 'elective', interestTags: [], prereqs: ['MATH125'], genEdReqs: ['addl-math-sci'] },
    { id: 'MATH394', title: 'Probability I', description: 'Sample spaces, conditional probability, random variables, distributions, expectation, and the law of large numbers.', credits: 3, category: 'elective', interestTags: ['game-theory'], prereqs: ['MATH125'], genEdReqs: ['addl-math-sci'] },

    // ===================================================================
    // ECONOMICS (Expanded)
    // ===================================================================
    { id: 'ECON201', title: 'Introduction to Macroeconomics', description: 'GDP, inflation, unemployment, monetary and fiscal policy, and international trade.', credits: 5, category: 'elective', interestTags: ['economics'], prereqs: [], genEdReqs: ['social-science', 'addl-ah-ssc'] },
    { id: 'ECON301', title: 'Intermediate Microeconomics', description: 'Consumer theory, producer theory, general equilibrium, welfare analysis, and market failure.', credits: 5, category: 'elective', interestTags: ['economics', 'game-theory'], prereqs: ['ECON200', 'MATH124'], genEdReqs: [] },
    { id: 'ECON302', title: 'Intermediate Macroeconomics', description: 'Economic growth, business cycles, monetary and fiscal policy models, and open-economy macroeconomics.', credits: 5, category: 'elective', interestTags: ['economics'], prereqs: ['ECON201', 'MATH124'], genEdReqs: [] },
    { id: 'ECON400', title: 'Advanced Microeconomics', description: 'General equilibrium, mechanism design, information economics, and advanced game theory.', credits: 5, category: 'elective', interestTags: ['economics', 'game-theory'], prereqs: ['ECON301'], genEdReqs: [] },
    { id: 'ECON411', title: 'Introduction to Econometrics', description: 'Regression analysis, hypothesis testing, instrumental variables, and causal inference with economic data.', credits: 5, category: 'elective', interestTags: ['economics'], prereqs: ['ECON301', 'STAT311'], genEdReqs: [] },
    { id: 'ECON420', title: 'International Economics', description: 'Trade theory, comparative advantage, trade policy, exchange rates, and capital flows.', credits: 5, category: 'elective', interestTags: ['economics'], prereqs: ['ECON301'], genEdReqs: [] },
    { id: 'ECON424', title: 'Development Economics', description: 'Poverty, growth, institutions, health, education, and aid effectiveness in developing countries.', credits: 5, category: 'elective', interestTags: ['economics', 'cultural-studies'], prereqs: ['ECON301'], genEdReqs: [] },
    { id: 'ECON425', title: 'Public Finance', description: 'Taxation, public expenditure, externalities, public goods, social insurance, and fiscal federalism.', credits: 5, category: 'elective', interestTags: ['economics', 'politics'], prereqs: ['ECON301'], genEdReqs: [] },
    { id: 'ECON431', title: 'Labor Economics', description: 'Labor supply and demand, human capital, wage determination, discrimination, unions, and labor market policy.', credits: 5, category: 'elective', interestTags: ['economics'], prereqs: ['ECON301'], genEdReqs: [] },
    { id: 'ECON441', title: 'Environmental Economics', description: 'Market failure and the environment, cap-and-trade, carbon taxation, cost-benefit analysis, and sustainability.', credits: 5, category: 'elective', interestTags: ['economics', 'environmental'], prereqs: ['ECON301'], genEdReqs: [] },
    { id: 'ECON450', title: 'Behavioral Economics', description: 'Cognitive biases, prospect theory, intertemporal choice, social preferences, and nudge policy design.', credits: 5, category: 'elective', interestTags: ['economics', 'game-theory'], prereqs: ['ECON301'], genEdReqs: [] },
    { id: 'ECON460', title: 'Financial Economics', description: 'Asset pricing, portfolio theory, risk management, derivatives, and financial market microstructure.', credits: 5, category: 'elective', interestTags: ['economics'], prereqs: ['ECON301'], genEdReqs: [] },
    { id: 'ECON482', title: 'Health Economics', description: 'Healthcare markets, insurance, moral hazard, physician behavior, and the economics of public health interventions.', credits: 5, category: 'elective', interestTags: ['economics'], prereqs: ['ECON301'], genEdReqs: [] },
    { id: 'ECON484', title: 'Law and Economics', description: 'Economic analysis of legal rules: property, contracts, torts, crime, and regulation.', credits: 5, category: 'elective', interestTags: ['economics', 'game-theory'], prereqs: ['ECON301'], genEdReqs: [] },

    // ===================================================================
    // POLITICAL SCIENCE (Expanded)
    // ===================================================================
    { id: 'POL201', title: 'American Politics', description: 'Congress, the presidency, courts, parties, elections, public opinion, and political polarization in the United States.', credits: 5, category: 'elective', interestTags: ['politics', 'history'], prereqs: ['POL101'], genEdReqs: ['social-science', 'addl-ah-ssc'] },
    { id: 'POL203', title: 'International Relations', description: 'Theories of war and peace, alliances, international institutions, globalization, and human rights.', credits: 5, category: 'elective', interestTags: ['politics', 'history'], prereqs: ['POL101'], genEdReqs: ['social-science', 'addl-ah-ssc'] },
    { id: 'POL204', title: 'Comparative Politics', description: 'How political systems differ across countries. Regime types, democratization, and parliamentary vs. presidential systems.', credits: 5, category: 'elective', interestTags: ['politics', 'history'], prereqs: ['POL101'], genEdReqs: ['social-science', 'addl-ah-ssc'] },
    { id: 'POL220', title: 'Introduction to Political Economy', description: 'How political institutions shape economic outcomes. Markets, property rights, redistribution, and collective action.', credits: 5, category: 'elective', interestTags: ['politics', 'economics', 'game-theory'], prereqs: ['POL101'], genEdReqs: [] },
    { id: 'POL310', title: 'Environmental Politics & Policy', description: 'Climate politics, environmental regulation, international environmental agreements, and environmental justice.', credits: 5, category: 'elective', interestTags: ['politics', 'environmental'], prereqs: ['POL101'], genEdReqs: [] },
    { id: 'POL320', title: 'Public Policy Analysis', description: 'Policy design, implementation, and evaluation. Cost-benefit analysis, regulatory policy, and evidence-based policymaking.', credits: 5, category: 'elective', interestTags: ['politics'], prereqs: ['POL101'], genEdReqs: [] },
    { id: 'POL325', title: 'Constitutional Law', description: 'Judicial review, separation of powers, federalism, equal protection, due process, and landmark Supreme Court decisions.', credits: 5, category: 'elective', interestTags: ['politics', 'history'], prereqs: ['POL101'], genEdReqs: ['social-science', 'addl-ah-ssc'] },
    { id: 'POL340', title: 'Game Theory and Politics', description: 'Formal models of political behavior: voting, coalition formation, bargaining, and strategic interaction among political actors.', credits: 5, category: 'elective', interestTags: ['politics', 'game-theory'], prereqs: ['POL101', 'ECON300'], genEdReqs: [] },
    { id: 'POL355', title: 'Democratic Theory', description: 'Deliberative democracy, populism, epistemic democracy, and the tension between majority rule and minority rights.', credits: 5, category: 'elective', interestTags: ['politics', 'philosophy'], prereqs: ['POL101'], genEdReqs: [] },
    { id: 'POL360', title: 'Politics of Immigration', description: 'Immigration policy, border politics, citizenship, refugee crises, and the political economy of migration.', credits: 5, category: 'elective', interestTags: ['politics', 'cultural-studies'], prereqs: ['POL101'], genEdReqs: [] },
    { id: 'POL370', title: 'Quantitative Methods in Political Science', description: 'Survey design, regression, causal inference, and data visualization applied to political questions.', credits: 5, category: 'elective', interestTags: ['politics', 'game-theory'], prereqs: ['POL101', 'STAT220'], genEdReqs: [] },

    // ===================================================================
    // PHILOSOPHY (Expanded)
    // ===================================================================
    { id: 'PHIL200', title: 'Political Philosophy', description: 'Justice, rights, liberty, and equality. Hobbes, Locke, Rousseau, Rawls, Nozick, and contemporary debates about the legitimate scope of state power.', credits: 5, category: 'elective', interestTags: ['philosophy', 'politics', 'history'], prereqs: ['PHIL100'], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },
    { id: 'PHIL230', title: 'Philosophy of Language', description: 'Meaning, reference, truth, speech acts, and the relationship between language and thought. Frege, Russell, Wittgenstein, and Kripke.', credits: 5, category: 'elective', interestTags: ['philosophy', 'linguistics'], prereqs: ['PHIL100'], genEdReqs: [] },
    { id: 'PHIL250', title: 'Metaphysics', description: 'Fundamental nature of reality: existence, identity, causation, time, free will, and possible worlds.', credits: 5, category: 'elective', interestTags: ['philosophy'], prereqs: ['PHIL100'], genEdReqs: [] },
    { id: 'PHIL300', title: 'Formal Logic', description: 'Predicate logic, natural deduction, completeness, soundness, and an introduction to modal logic.', credits: 5, category: 'elective', interestTags: ['philosophy', 'game-theory'], prereqs: ['PHIL120'], genEdReqs: [] },
    { id: 'PHIL320', title: 'Advanced Ethics: Moral Theory', description: 'Consequentialism, contractualism, moral realism, and metaethics. Contemporary debates in normative theory.', credits: 5, category: 'elective', interestTags: ['philosophy'], prereqs: ['PHIL114'], genEdReqs: [] },
    { id: 'PHIL344', title: 'Bioethics', description: 'Ethical issues in medicine and biological sciences. Genetic engineering, euthanasia, reproductive rights, and research ethics.', credits: 5, category: 'elective', interestTags: ['philosophy', 'science'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },

    // ===================================================================
    // SOCIOLOGY (Expanded)
    // ===================================================================
    { id: 'SOC221', title: 'Social Inequality', description: 'Class, race, gender, and their intersections. Theories of stratification, mobility, and the reproduction of privilege.', credits: 5, category: 'elective', interestTags: ['sociology', 'cultural-studies'], prereqs: ['SOC101'], genEdReqs: ['social-science', 'addl-ah-ssc'] },
    { id: 'SOC225', title: 'Race & Ethnicity', description: 'Racial formation, systemic racism, immigration, and multiracial identity. Quantitative and qualitative approaches.', credits: 5, category: 'elective', interestTags: ['sociology', 'cultural-studies'], prereqs: ['SOC101'], genEdReqs: ['social-science', 'diversity', 'addl-ah-ssc'] },
    { id: 'SOC270', title: 'Urban Sociology', description: 'Cities as social systems. Gentrification, segregation, community organizing, and the sociology of neighborhoods.', credits: 5, category: 'elective', interestTags: ['sociology', 'cultural-studies'], prereqs: ['SOC101'], genEdReqs: [] },
    { id: 'SOC300', title: 'Social Research Methods', description: 'Survey design, interviews, ethnography, content analysis, and mixed methods for social science research.', credits: 5, category: 'elective', interestTags: ['sociology'], prereqs: ['SOC101', 'STAT220'], genEdReqs: [] },
    { id: 'SOC316', title: 'Sociology of Education', description: 'How schools reproduce and challenge social inequality. Tracking, cultural capital, and education reform.', credits: 5, category: 'elective', interestTags: ['sociology', 'cultural-studies'], prereqs: ['SOC101'], genEdReqs: [] },

    // ===================================================================
    // MUSIC (Expanded)
    // ===================================================================
    { id: 'MUSIC120', title: 'Music Theory I', description: 'Scales, intervals, chords, voice leading, and basic harmonic analysis. Ear training included.', credits: 5, category: 'elective', interestTags: ['music'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },
    { id: 'MUSIC162', title: 'History of Jazz', description: 'Jazz from its origins to the present. Blues, swing, bebop, modal jazz, free jazz, and fusion.', credits: 5, category: 'elective', interestTags: ['music', 'history'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },
    { id: 'MUSIC185', title: 'World Music', description: 'Musical traditions from across the globe. West African drumming, Indian raga, Indonesian gamelan, and cross-cultural study.', credits: 5, category: 'elective', interestTags: ['music', 'cultural-studies'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },
    { id: 'MUSIC280', title: 'History of Western Music', description: 'Medieval chant to contemporary classical. Bach, Mozart, Beethoven, Wagner, Stravinsky, and minimalism in cultural context.', credits: 5, category: 'elective', interestTags: ['music', 'history'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },
    { id: 'MUSIC320', title: 'Digital Music Production', description: 'Recording, editing, mixing, and producing music using DAWs. Sound design, sampling, synthesis, and electronic composition.', credits: 5, category: 'elective', interestTags: ['music', 'design'], prereqs: [], genEdReqs: [] },
    { id: 'MUSIC364', title: 'Music Cognition', description: 'How the brain perceives, remembers, and responds to music. Pitch perception, rhythm, emotion, and musical training effects.', credits: 5, category: 'elective', interestTags: ['music', 'philosophy', 'science'], prereqs: [], genEdReqs: [] },

    // ===================================================================
    // LINGUISTICS
    // ===================================================================
    { id: 'LING200', title: 'Introduction to Linguistics', description: 'The scientific study of language: phonetics, phonology, morphology, syntax, semantics, and pragmatics.', credits: 5, category: 'elective', interestTags: ['linguistics', 'philosophy'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },
    { id: 'LING233', title: 'Phonetics & Phonology', description: 'Sound systems of human language. Articulatory phonetics, acoustic analysis, and cross-linguistic sound patterns.', credits: 5, category: 'elective', interestTags: ['linguistics'], prereqs: ['LING200'], genEdReqs: [] },
    { id: 'LING400', title: 'Syntax', description: 'Sentence structure across languages. Phrase structure, transformations, and the architecture of grammar.', credits: 5, category: 'elective', interestTags: ['linguistics', 'philosophy'], prereqs: ['LING200'], genEdReqs: [] },
    { id: 'LING432', title: 'Semantics', description: 'Formal approaches to meaning: compositionality, quantification, tense, modality. Logic meets natural language.', credits: 5, category: 'elective', interestTags: ['linguistics', 'philosophy'], prereqs: ['LING200'], genEdReqs: [] },
    { id: 'LING461', title: 'Sociolinguistics', description: 'Language variation by region, class, gender, and ethnicity. Code-switching, dialect prestige, and linguistic identity.', credits: 5, category: 'elective', interestTags: ['linguistics', 'cultural-studies'], prereqs: ['LING200'], genEdReqs: [] },

    // ===================================================================
    // FILM & MEDIA STUDIES
    // ===================================================================
    { id: 'COM270', title: 'Introduction to Film Studies', description: 'The language of cinema: mise-en-scene, cinematography, editing, sound, and narrative structure.', credits: 5, category: 'elective', interestTags: ['film', 'design'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },
    { id: 'COM361', title: 'Film Theory', description: 'Major theoretical frameworks: formalism, realism, auteur theory, feminism, psychoanalysis, and postcolonial approaches.', credits: 5, category: 'elective', interestTags: ['film', 'philosophy'], prereqs: ['COM270'], genEdReqs: [] },
    { id: 'COM362', title: 'Documentary Film', description: 'Ethics, aesthetics, and politics of documentary. Observational, participatory, and essayistic modes.', credits: 5, category: 'elective', interestTags: ['film', 'history'], prereqs: ['COM270'], genEdReqs: [] },
    { id: 'COM382', title: 'East Asian Cinema', description: 'Japanese, Korean, and Chinese cinema from golden-age masters to the Korean New Wave. Ozu, Kurosawa, Bong Joon-ho.', credits: 5, category: 'elective', interestTags: ['film', 'cultural-studies'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },
    { id: 'COM450', title: 'Video Game Studies', description: 'Games as cultural texts. Ludology vs. narratology, player agency, procedural rhetoric, and representation in games.', credits: 5, category: 'elective', interestTags: ['film', 'video-games', 'design'], prereqs: [], genEdReqs: [] },

    // ===================================================================
    // ENVIRONMENTAL STUDIES
    // ===================================================================
    { id: 'ENVIR100', title: 'Introduction to Environmental Science', description: 'Ecosystems, biodiversity, climate science, pollution, and resource depletion. The scientific basis for environmental policy.', credits: 5, category: 'elective', interestTags: ['environmental', 'science'], prereqs: [], genEdReqs: ['sciences'] },
    { id: 'ENVIR239', title: 'Climate Change: Science & Society', description: 'Atmospheric science, carbon cycles, climate modeling, international negotiations, and the economics of decarbonization.', credits: 5, category: 'elective', interestTags: ['environmental', 'science', 'politics'], prereqs: [], genEdReqs: [] },
    { id: 'ENVIR310', title: 'Environmental Justice', description: 'Unequal distribution of environmental harms by race and class. Toxic exposure, food deserts, and grassroots activism.', credits: 5, category: 'elective', interestTags: ['environmental', 'cultural-studies'], prereqs: [], genEdReqs: ['diversity'] },
    { id: 'ENVIR401', title: 'Environmental Policy', description: 'Environmental regulation, cap-and-trade, sustainability policy, and the political economy of energy transitions.', credits: 5, category: 'elective', interestTags: ['environmental', 'politics'], prereqs: ['ENVIR100'], genEdReqs: [] },

    // ===================================================================
    // BIOLOGY (Expanded)
    // ===================================================================
    { id: 'BIOL200', title: 'Genetics', description: 'Mendelian and molecular genetics, gene regulation, genomics, and the genetics of human disease.', credits: 5, category: 'elective', interestTags: ['biology', 'science'], prereqs: ['BIOL180'], genEdReqs: [] },
    { id: 'BIOL220', title: 'Ecology & Evolution', description: 'Population dynamics, community ecology, evolutionary mechanisms, phylogenetics, and conservation biology.', credits: 5, category: 'elective', interestTags: ['biology', 'science', 'environmental'], prereqs: ['BIOL180'], genEdReqs: [] },

    // ===================================================================
    // RELIGION & CLASSICS
    // ===================================================================
    { id: 'RELIG101', title: 'Introduction to World Religions', description: 'Comparative study of Judaism, Christianity, Islam, Hinduism, Buddhism, and indigenous traditions.', credits: 5, category: 'elective', interestTags: ['religion', 'philosophy', 'cultural-studies'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },
    { id: 'RELIG301', title: 'Philosophy of Religion', description: 'Arguments for and against God\'s existence, the problem of evil, faith and reason, and religious experience.', credits: 5, category: 'elective', interestTags: ['religion', 'philosophy'], prereqs: [], genEdReqs: [] },
    { id: 'RELIG320', title: 'Religion & Science', description: 'Historical and contemporary relationships between religion and science. Evolution, cosmology, and bioethics.', credits: 5, category: 'elective', interestTags: ['religion', 'philosophy', 'science'], prereqs: [], genEdReqs: [] },
    { id: 'CLASS205', title: 'Classical Civilizations', description: 'Ancient Greece and Rome: politics, philosophy, art, literature, and their lasting influence on Western civilization.', credits: 5, category: 'elective', interestTags: ['classics', 'history'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },

    // ===================================================================
    // LITERATURE (Expanded)
    // ===================================================================
    { id: 'ENGL220', title: 'American Literature to 1900', description: 'Hawthorne, Melville, Dickinson, Whitman, Twain, and the invention of American literary identity. Transcendentalism, slavery narratives, and the frontier.', credits: 5, category: 'elective', interestTags: ['literature', 'history'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },
    { id: 'ENGL230', title: 'American Literature: 1900 to Present', description: 'Fitzgerald, Faulkner, Morrison, Pynchon, and contemporary voices. Modernism, the Harlem Renaissance, postmodernism, and multicultural American fiction.', credits: 5, category: 'elective', interestTags: ['literature', 'history'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },
    { id: 'ENGL240', title: 'British Romanticism', description: 'Blake, Wordsworth, Coleridge, Byron, Shelley, Keats. Revolution, imagination, nature, and the birth of the modern self.', credits: 5, category: 'elective', interestTags: ['literature', 'history'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },
    { id: 'ENGL250', title: 'Victorian Literature', description: 'Dickens, the Bront\u00EBs, Eliot, Hardy, and Wilde. Industrialization, empire, gender, class, and the novel as social mirror.', credits: 5, category: 'elective', interestTags: ['literature', 'history'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },
    { id: 'ENGL310', title: 'Modern British Literature', description: 'Woolf, Joyce, Lawrence, Forster, Orwell, and Beckett. Stream of consciousness, formal experiment, and literature between the wars.', credits: 5, category: 'elective', interestTags: ['literature'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },
    { id: 'ENGL320', title: 'Contemporary Fiction', description: 'Fiction since 1980. Globalization, identity, technology, and literary form in the work of Ishiguro, Lahiri, Egan, Ferrante, and others.', credits: 5, category: 'elective', interestTags: ['literature'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },
    { id: 'ENGL330', title: 'Creative Nonfiction', description: 'The art of the essay, memoir, and literary journalism. Narrative structure, scene-building, and the ethics of writing about real life. Workshop format.', credits: 5, category: 'elective', interestTags: ['literature'], prereqs: [], genEdReqs: [] },
    { id: 'ENGL340', title: 'Literary Theory & Criticism', description: 'How we read and why it matters. Structuralism, deconstruction, feminism, postcolonialism, queer theory, and the politics of interpretation.', credits: 5, category: 'elective', interestTags: ['literature', 'philosophy'], prereqs: [], genEdReqs: [] },
    { id: 'ENGL350', title: 'Poetry Workshop', description: 'Writing and revising original poetry. Prosody, image, voice, and line. Close reading of contemporary poets. Small workshop format with intensive peer critique.', credits: 5, category: 'elective', interestTags: ['literature'], prereqs: ['ENGL283'], genEdReqs: [] },
    { id: 'ENGL355', title: 'Fiction Workshop', description: 'Workshop in short fiction. Craft elements — voice, structure, dialogue, and revision. Peer critique and close reading of published fiction.', credits: 5, category: 'elective', interestTags: ['literature'], prereqs: ['ENGL283'], genEdReqs: [] },
    { id: 'ENGL380', title: 'Children\'s & Young Adult Literature', description: 'Literature for young readers from fairy tales to The Hunger Games. Innocence, power, identity, and the cultural work of children\'s books.', credits: 5, category: 'elective', interestTags: ['literature'], prereqs: [], genEdReqs: [] },
    { id: 'CLIT260', title: 'Japanese Literature in Translation', description: 'Major Japanese literary works: The Tale of Genji, Bash\u014D, Mishima, Murakami. Cultural context and literary innovation.', credits: 5, category: 'elective', interestTags: ['literature', 'cultural-studies'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },
    { id: 'CLIT265', title: 'Korean Literature in Translation', description: 'Contemporary Korean fiction and poetry: Han Kang, Bae Suah, Kim Hyesoon. History, trauma, and literary experiment.', credits: 5, category: 'elective', interestTags: ['literature', 'cultural-studies'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },
    { id: 'CLIT280', title: 'Comparative Literature', description: 'Reading across languages, cultures, and traditions. How literary forms travel, transform, and speak to each other across borders.', credits: 5, category: 'elective', interestTags: ['literature', 'cultural-studies'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },
    { id: 'CLIT290', title: 'Literature & Philosophy', description: 'The novel as philosophy, philosophy as literature. Dostoevsky, Sartre, Beauvoir, Borges, and the fiction of ideas.', credits: 5, category: 'elective', interestTags: ['literature', 'philosophy'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },
  ],
};
