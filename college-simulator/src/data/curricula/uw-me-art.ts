import { Curriculum } from '../../types';

export const uwMeArt: Curriculum = {
  schoolId: 'uw-me-art',
  program: 'Mechanical Engineering + Art/Design',
  degreeRequirements: {
    totalCredits: 180,
    majorCredits: 65, // ME Core (46) + ME Tech Electives (19)
    genEdCredits: 34, // English Comp (5) + Writing (7, overlap ME354+ME493) + A&H (10, ME123 gives 4) + SSc (10) + Addl A&H/SSc (4) + DIV (5) — with overlaps
    electiveCredits: 81, // ENGRUD prereqs + ME prereqs + art/design electives + free electives
    majorCourses: [
      // ME Major Core (46cr)
      'ME323', 'ME331', 'ME333', 'ME354', 'ME355',
      'ME356', 'ME373', 'ME374', 'ME493', 'ME494', 'ME495',
    ],
    genEdCategories: [
      // === ENGRUD Placement Requirements ===
      { id: 'calculus', name: 'Mathematics — Calculus (◆ Placement)', creditsRequired: 15, satisfiedBy: ['MATH124', 'MATH125', 'MATH126'] },
      { id: 'statistics', name: 'Statistics (★ Placement)', creditsRequired: 3, satisfiedBy: ['INDE315', 'STAT390', 'STAT290', 'STAT311'] },
      { id: 'sciences', name: 'Sciences (◆ Placement)', creditsRequired: 15, satisfiedBy: ['CHEM142', 'PHYS121', 'CHEM152', 'PHYS122', 'PHYS123'] },
      { id: 'adv-math', name: 'Advanced Mathematics (ME prereqs)', creditsRequired: 12, satisfiedBy: ['MATH207', 'MATH208', 'MATH209', 'MATH224'] },

      // === General Education Requirements ===
      { id: 'english-comp', name: 'English Composition (◆ Placement)', creditsRequired: 5, satisfiedBy: ['ENGL111', 'ENGL121', 'ENGL131', 'ENGL182'] },
      { id: 'writing', name: 'Writing (7cr — ME 354 + ME 493 cover)', creditsRequired: 7, satisfiedBy: ['ME354', 'ME493', 'ENGL111', 'ENGL121', 'ENGL131', 'ENGL182'] },
      { id: 'arts-humanities', name: 'Arts & Humanities (A&H — ME 123 gives 4cr)', creditsRequired: 10, satisfiedBy: ['ME123', 'DXARTS200', 'ART253', 'ART272', 'ART190', 'ART131', 'ART134', 'ART281', 'ART351', 'DESIGN150', 'DESIGN165', 'MUSIC116', 'DRAMA101', 'ENGL242', 'PHIL100'] },
      { id: 'social-science', name: 'Social Sciences (SSc)', creditsRequired: 10, satisfiedBy: ['PSYCH101', 'SOC101', 'ECON200', 'POL101', 'HIST111', 'AAS101', 'ANTH215', 'INFO200'] },
      { id: 'addl-ah-ssc', name: 'Additional A&H or SSc', creditsRequired: 4, satisfiedBy: ['ME123', 'DXARTS200', 'ART253', 'ART272', 'ART190', 'ART131', 'ART134', 'DESIGN150', 'DESIGN165', 'PSYCH101', 'SOC101', 'ECON200', 'POL101', 'HIST111', 'AAS101', 'ANTH215', 'INFO200'] },
      { id: 'diversity', name: 'Diversity (DIV — may overlap)', creditsRequired: 5, satisfiedBy: ['AAS101', 'AAS320', 'GWSS200', 'AIS200', 'ANTH215', 'SOC225'] },

      // === Engineering Fundamentals (ME-specific) ===
      { id: 'eng-fundamentals', name: 'Engineering Fundamentals', creditsRequired: 12, satisfiedBy: ['CSE121', 'CSE163', 'ENGR115', 'AA210', 'AMATH301', 'CEE220', 'EE215', 'ME123', 'ME230', 'MSE170'] },
    ],
  },
  recommendedSequence: {
    years: 4,
    terms: [
      // ==================== YEAR 1: ENGRUD Placement + Art Gateway ====================
      {
        termLabel: 'Fall Year 1',
        courses: ['MATH124', 'CHEM142', 'ENGR101', 'DXARTS200'],
        locked: [true, true, true, false],
        slotLabels: ['◆ Calculus I (Placement)', '◆ General Chemistry (Placement)', '◆ E-FIG Orientation', '🟢 Digital Art & New Media — gateway to DXARTS, counts as A&H'],
      },
      {
        termLabel: 'Winter Year 1',
        courses: ['ME123', 'MATH125', 'ENGL111'],
        locked: [true, true, true],
        slotLabels: ['◆ Visualization & CAD — 3D modeling in SolidWorks, counts as A&H (4cr)', '◆ Calculus II (Placement)', '◆ English Composition (Placement)'],
      },
      {
        termLabel: 'Spring Year 1',
        courses: ['MATH126', 'PHYS121', 'AAS101'],
        locked: [true, true, false],
        slotLabels: ['◆ Calculus III (Placement)', '◆ Mechanics (Placement)', '🟢 Intro Asian American Studies — covers DIV + SSc (AP Stats covers stats req)'],
      },

      // ==================== YEAR 2: ME Prerequisites + Art Electives ====================
      {
        termLabel: 'Fall Year 2',
        courses: ['PHYS122', 'MATH207', 'MATH208'],
        locked: [true, true, true],
        slotLabels: ['◆ Electromagnetism (Sciences)', '◆ Differential Equations (ME prereq)', '◆ Matrix Algebra (ME prereq)'],
      },
      {
        termLabel: 'Winter Year 2',
        courses: ['AA210', 'ME230', 'PHYS123'],
        locked: [true, true, true],
        slotLabels: ['◆ Statics (ME prereq)', '◆ Kinematics & Dynamics (ME prereq)', '◆ Waves, Light & Heat (Sciences)'],
      },
      {
        termLabel: 'Spring Year 2',
        courses: ['CEE220', 'MSE170', 'MATH209', 'ART253'],
        locked: [true, true, true, false],
        slotLabels: ['◆ Mechanics of Materials (ME prereq)', '◆ Intro Materials Science (ME prereq)', '◆ Linear Analysis (ME prereq, needs 207+208)', '🟢 Intro Ceramics — hands-on making, A&H gen-ed'],
      },

      // ==================== YEAR 3: ME Major Core ====================
      {
        termLabel: 'Fall Year 3',
        courses: ['ME323', 'ME355', 'AMATH301', 'EE215'],
        locked: [true, true, true, true],
        slotLabels: ['Engineering Thermodynamics', 'Manufacturing Processes', 'Scientific Computing', 'Intro Electrical Engineering'],
      },
      {
        termLabel: 'Winter Year 3',
        courses: ['ME331', 'ME333', 'ME373'],
        locked: [true, true, true],
        slotLabels: ['Heat Transfer', 'Fluid Mechanics', 'System Dynamics'],
      },
      {
        termLabel: 'Spring Year 3',
        courses: ['ME356', 'ME374', 'ME354'],
        locked: [true, true, true],
        slotLabels: ['Machine Component Design', 'Systems, Measurements & Control', 'Technical Communication (W)'],
      },

      // ==================== YEAR 4: Capstone + ME Electives + Art ====================
      {
        termLabel: 'Fall Year 4',
        courses: ['ME493', 'PSYCH101', 'ME480', 'DXARTS470'],
        locked: [true, false, false, false],
        slotLabels: ['Capstone Design I (W)', '🟢 Intro Psychology — SSc gen-ed', '🟢 ME Elective: Computer-Aided Manufacturing', '🟢 Sensing & Control for Digital Arts — bridges ME into art/fabrication'],
      },
      {
        termLabel: 'Winter Year 4',
        courses: ['ME494', 'ME445', 'ME450', 'DXARTS471'],
        locked: [true, false, false, false],
        slotLabels: ['Capstone Design II', '🟢 ME Elective: Robotics & Controls', '🟢 ME Elective: Instrumentation', '🟢 Mechatronic Art & Fabrication I — kinetic sculpture + electronics'],
      },
      {
        termLabel: 'Spring Year 4',
        courses: ['ME495', 'ME470', 'DESIGN165', 'ART272'],
        locked: [true, false, false, false],
        slotLabels: ['Capstone Design III', '🟢 ME Elective: Mechanical Design', '🟢 Intro Industrial Design — product design thinking', '🟢 Intro Sculpture — 3D art with wood, metal, plaster'],
      },
    ],
  },
  courses: [
    // ===================================================================
    // ENGRUD PLACEMENT REQUIREMENTS (Year 1)
    // ===================================================================

    // ◆ E-FIG
    { id: 'ENGR101', title: 'Engineering Orientation (E-FIG)', description: 'Introduction to the College of Engineering. Explore engineering disciplines, meet faculty, and begin building your engineering identity. Taken with GEN ST 199.', credits: 2, category: 'gen-ed', interestTags: [], prereqs: [], genEdReqs: [] },

    // ◆ Mathematics
    { id: 'MATH124', title: 'Calculus with Analytic Geometry I', description: 'Limits, derivatives, and integrals of single-variable functions. Applications to science and engineering.', credits: 5, category: 'gen-ed', interestTags: [], prereqs: [], genEdReqs: ['calculus'] },
    { id: 'MATH125', title: 'Calculus with Analytic Geometry II', description: 'Integration techniques, applications of integrals, sequences and series.', credits: 5, category: 'gen-ed', interestTags: [], prereqs: ['MATH124'], genEdReqs: ['calculus'] },
    { id: 'MATH126', title: 'Calculus with Analytic Geometry III', description: 'Multivariable calculus: partial derivatives, multiple integrals, vector calculus, and applications to physics and engineering.', credits: 5, category: 'gen-ed', interestTags: [], prereqs: ['MATH125'], genEdReqs: ['calculus'] },

    // ★ Statistics (satisfied by STAT290 from IB Math HL)
    { id: 'STAT290', title: 'Basic Statistics (AP Statistics equivalent)', description: 'Introductory probability and statistical methods. Equivalent awarded for AP Statistics score of 4+.', credits: 5, category: 'gen-ed', interestTags: [], prereqs: [], genEdReqs: ['statistics'] },
    { id: 'INDE315', title: 'Probability & Statistics for Engineers', description: 'Probability distributions, estimation, hypothesis testing, regression, and experimental design for engineering applications.', credits: 3, category: 'gen-ed', interestTags: [], prereqs: ['MATH126'], genEdReqs: ['statistics'] },
    { id: 'STAT390', title: 'Statistical Methods in Engineering & Science', description: 'Applied statistics for science and engineering. Probability, distributions, hypothesis testing, regression, and experimental design.', credits: 4, category: 'gen-ed', interestTags: [], prereqs: ['MATH126'], genEdReqs: ['statistics'] },

    // ◆ Sciences
    { id: 'CHEM142', title: 'General Chemistry', description: 'Atomic structure, chemical bonding, stoichiometry, thermodynamics, and equilibrium.', credits: 5, category: 'gen-ed', interestTags: ['science'], prereqs: [], genEdReqs: ['sciences'] },
    { id: 'CHEM152', title: 'General Chemistry II', description: 'Chemical kinetics, equilibrium, acids and bases, electrochemistry, and thermodynamics.', credits: 5, category: 'gen-ed', interestTags: ['science'], prereqs: ['CHEM142'], genEdReqs: ['sciences'] },
    { id: 'PHYS121', title: 'Mechanics', description: 'Classical mechanics: motion, forces, energy, momentum, and rotational dynamics. Calculus-based physics for engineers.', credits: 5, category: 'gen-ed', interestTags: ['science'], prereqs: ['MATH124'], genEdReqs: ['sciences'] },
    { id: 'PHYS122', title: 'Electromagnetism', description: 'Electric fields, circuits, magnetic fields, electromagnetic waves, and optics.', credits: 5, category: 'gen-ed', interestTags: ['science'], prereqs: ['MATH125', 'PHYS121'], genEdReqs: ['sciences'] },
    { id: 'PHYS123', title: 'Waves, Light, and Heat', description: 'Wave phenomena, geometric and physical optics, thermodynamics, and statistical mechanics.', credits: 5, category: 'gen-ed', interestTags: ['science'], prereqs: ['MATH126', 'PHYS122'], genEdReqs: ['sciences'] },

    // ◆ English Composition
    { id: 'ENGL111', title: 'Composition: Literature', description: 'College writing through engagement with literary texts. Argumentation, analysis, and revision.', credits: 5, category: 'gen-ed', interestTags: ['literature'], prereqs: [], genEdReqs: ['english-comp', 'writing'] },

    // ===================================================================
    // ME PREREQUISITES (Year 2) — Advanced Math + Engineering Fundamentals
    // ===================================================================

    // Advanced Mathematics for ME
    { id: 'MATH207', title: 'Introduction to Differential Equations', description: 'First and second-order ODEs, systems of differential equations, Laplace transforms, and applications to engineering problems.', credits: 4, category: 'gen-ed', interestTags: [], prereqs: ['MATH126'], genEdReqs: ['adv-math'] },
    { id: 'MATH208', title: 'Matrix Algebra with Applications', description: 'Matrices, linear systems, determinants, eigenvalues, and applications to engineering and science.', credits: 4, category: 'gen-ed', interestTags: [], prereqs: ['MATH126'], genEdReqs: ['adv-math'] },
    { id: 'MATH209', title: 'Linear Analysis', description: 'Linear transformations, orthogonality, Fourier series, and boundary value problems. Combines linear algebra and differential equations.', credits: 4, category: 'gen-ed', interestTags: [], prereqs: ['MATH207', 'MATH208'], genEdReqs: ['adv-math'] },
    { id: 'MATH224', title: 'Advanced Multivariable Calculus', description: 'Vector analysis, Green\'s, Stokes\', and divergence theorems. Alternative to MATH 207/208/209 sequence.', credits: 3, category: 'gen-ed', interestTags: [], prereqs: ['MATH126'], genEdReqs: ['adv-math'] },

    // Engineering Fundamentals / ME Prerequisites
    { id: 'AA210', title: 'Engineering Statics', description: 'Forces, moments, equilibrium of rigid bodies. Foundation for structural and mechanical analysis.', credits: 4, category: 'major-required', interestTags: [], prereqs: ['MATH124', 'PHYS121'], genEdReqs: ['eng-fundamentals'] },
    { id: 'ME123', title: 'Visualization and CAD', description: 'Engineering graphics, 3D modeling, and computer-aided design using SolidWorks. Counts as 4cr A&H gen-ed.', credits: 4, category: 'major-required', interestTags: ['design'], prereqs: [], genEdReqs: ['eng-fundamentals', 'arts-humanities'] },
    { id: 'ME230', title: 'Kinematics and Dynamics', description: 'Particle and rigid body kinematics, Newton\'s laws applied to engineering systems.', credits: 4, category: 'major-required', interestTags: [], prereqs: ['MATH125', 'PHYS121'], genEdReqs: [] },
    { id: 'CEE220', title: 'Introduction to Mechanics of Materials', description: 'Stress, strain, deformation, and failure of engineering materials. Beams, columns, and torsion.', credits: 4, category: 'major-required', interestTags: [], prereqs: ['PHYS121'], genEdReqs: ['eng-fundamentals'] },
    { id: 'MSE170', title: 'Introduction to Materials Science', description: 'Atomic structure, crystal structure, defects, phase diagrams, and mechanical properties of materials.', credits: 4, category: 'major-required', interestTags: ['science'], prereqs: ['CHEM142'], genEdReqs: ['eng-fundamentals'] },
    { id: 'AMATH301', title: 'Beginning Scientific Computing', description: 'Numerical methods, interpolation, integration, ODEs, and matrix computations using MATLAB or Python.', credits: 4, category: 'major-required', interestTags: [], prereqs: ['MATH126'], genEdReqs: ['eng-fundamentals'] },
    { id: 'EE215', title: 'Introduction to Electrical Engineering', description: 'Circuit analysis, resistors, capacitors, inductors, and basic electronics.', credits: 4, category: 'major-required', interestTags: [], prereqs: ['MATH125', 'PHYS121'], genEdReqs: ['eng-fundamentals'] },
    { id: 'CSE121', title: 'Intro to Computer Programming I', description: 'Introduction to programming concepts, data types, control flow, and functions. Java-based. Satisfies engineering fundamentals.', credits: 4, category: 'gen-ed', interestTags: [], prereqs: [], genEdReqs: ['eng-fundamentals'] },

    // ===================================================================
    // ME MAJOR CORE (46cr) — Year 3
    // ===================================================================
    { id: 'ME323', title: 'Engineering Thermodynamics', description: 'Laws of thermodynamics, properties of pure substances, energy analysis, entropy, and power/refrigeration cycles.', credits: 5, category: 'major-required', interestTags: [], prereqs: ['MATH126', 'PHYS121', 'CHEM142'], genEdReqs: [] },
    { id: 'ME331', title: 'Introduction to Heat Transfer', description: 'Conduction, convection, and radiation heat transfer. Steady-state and transient analysis, heat exchangers.', credits: 4, category: 'major-required', interestTags: [], prereqs: ['ME323', 'MATH209'], genEdReqs: [] },
    { id: 'ME333', title: 'Introduction to Fluid Mechanics', description: 'Fluid statics and dynamics, viscous flow, boundary layers, pipe flow, and dimensional analysis.', credits: 5, category: 'major-required', interestTags: [], prereqs: ['ME323', 'MATH209'], genEdReqs: [] },
    { id: 'ME354', title: 'Technical Communication for ME', description: 'Written and oral communication for mechanical engineers. Technical reports, proposals, and presentations. Fulfills Writing (W) requirement.', credits: 5, category: 'major-required', interestTags: [], prereqs: [], genEdReqs: ['writing'] },
    { id: 'ME355', title: 'Introduction to Manufacturing Processes', description: 'Casting, forming, machining, welding, and additive manufacturing. Materials processing and design for manufacturability.', credits: 4, category: 'major-required', interestTags: ['design'], prereqs: ['MSE170', 'ME123'], genEdReqs: [] },
    { id: 'ME356', title: 'Machine Component Design', description: 'Design and analysis of machine elements: gears, bearings, shafts, springs, and fasteners. Fatigue and failure analysis.', credits: 4, category: 'major-required', interestTags: ['design'], prereqs: ['CEE220', 'ME230'], genEdReqs: [] },
    { id: 'ME373', title: 'Introduction to System Dynamics', description: 'Modeling and analysis of dynamic mechanical, electrical, fluid, and thermal systems. Transfer functions and state-space methods.', credits: 5, category: 'major-required', interestTags: [], prereqs: ['MATH209', 'ME230'], genEdReqs: [] },
    { id: 'ME374', title: 'Systems, Measurements, and Control', description: 'Feedback control systems, sensors, actuators, PID controllers, and data acquisition for mechanical systems.', credits: 5, category: 'major-required', interestTags: [], prereqs: ['ME373', 'EE215'], genEdReqs: [] },
    { id: 'ME493', title: 'ME Capstone Design I', description: 'First phase of the capstone design project. Problem definition, concept generation, engineering analysis, and preliminary design. Fulfills Writing (W) requirement.', credits: 3, category: 'major-required', interestTags: ['design'], prereqs: [], genEdReqs: ['writing'] },
    { id: 'ME494', title: 'ME Capstone Design II', description: 'Detailed design, prototyping, and testing of capstone project. Manufacturing drawings and design documentation.', credits: 3, category: 'major-required', interestTags: ['design'], prereqs: ['ME493'], genEdReqs: [] },
    { id: 'ME495', title: 'ME Capstone Design III', description: 'Final capstone project delivery: build, test, iterate, and present. Public showcase of working prototype.', credits: 3, category: 'major-required', interestTags: ['design'], prereqs: ['ME494'], genEdReqs: [] },

    // ===================================================================
    // ME TECHNICAL ELECTIVES (19cr minimum from approved 400-level ME)
    // ===================================================================
    { id: 'ME445', title: 'Robotics and Controls', description: 'Kinematics and dynamics of robot manipulators, trajectory planning, sensing, and control architectures.', credits: 4, category: 'elective', interestTags: ['design'], prereqs: ['ME374'], genEdReqs: [] },
    { id: 'ME480', title: 'Computer-Aided Manufacturing', description: 'CAD/CAM integration, CNC programming, toolpath generation, and digital manufacturing workflows.', credits: 4, category: 'elective', interestTags: ['design'], prereqs: ['ME355'], genEdReqs: [] },
    { id: 'ME425', title: 'Bioengineering Instrumentation', description: 'Design and application of instrumentation for biological and biomedical measurements. Sensors, signal processing, and data analysis.', credits: 4, category: 'elective', interestTags: ['science'], prereqs: ['ME374'], genEdReqs: [] },
    { id: 'ME450', title: 'Instrumentation', description: 'Measurement systems, transducers, signal conditioning, data acquisition, and uncertainty analysis for mechanical systems.', credits: 3, category: 'elective', interestTags: [], prereqs: ['ME374'], genEdReqs: [] },
    { id: 'ME470', title: 'Advanced Mechanical Design', description: 'Synthesis and optimization of mechanical systems. Creative problem solving, mechanism design, and computational design tools.', credits: 3, category: 'elective', interestTags: ['design'], prereqs: ['ME356'], genEdReqs: [] },
    { id: 'ME402', title: 'Design of Medical Devices', description: 'Engineering design process applied to medical devices. Regulatory requirements, biocompatibility, and clinical needs assessment.', credits: 3, category: 'elective', interestTags: ['design', 'science'], prereqs: [], genEdReqs: [] },
    { id: 'ME440', title: 'Advanced Materials Engineering', description: 'Advanced topics in materials selection, composite materials, and materials processing for mechanical design applications.', credits: 3, category: 'elective', interestTags: ['science'], prereqs: ['MSE170'], genEdReqs: [] },
    { id: 'ME410', title: 'Mechanical Engineering Analysis', description: 'Advanced analytical methods for mechanical engineering problems. Partial differential equations and boundary value problems.', credits: 3, category: 'elective', interestTags: [], prereqs: ['MATH209'], genEdReqs: [] },
    { id: 'ME478', title: 'Finite Element Method', description: 'Computational stress analysis using finite element methods. Modeling, meshing, and interpreting results for structural problems.', credits: 4, category: 'elective', interestTags: [], prereqs: ['CEE220', 'MATH209'], genEdReqs: [] },
    { id: 'ME498', title: 'ME Special Topics', description: 'Special topics in mechanical engineering. Content varies by quarter and instructor.', credits: 3, category: 'elective', interestTags: [], prereqs: [], genEdReqs: [] },
    { id: 'ME499', title: 'Special Projects in ME', description: 'Independent research or design project under faculty supervision. Can focus on art/design intersections.', credits: 3, category: 'elective', interestTags: ['design'], prereqs: [], genEdReqs: [] },

    // ===================================================================
    // ART / DESIGN / DXARTS ELECTIVES
    // ===================================================================

    // DXARTS — Digital Arts & Experimental Media
    { id: 'DXARTS200', title: 'Digital Art and New Media', description: 'History, theory, and practice of digital art. Hands-on projects with digital tools, conceptual foundations of new media art. Gateway to DXARTS minor.', credits: 5, category: 'elective', interestTags: ['design'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },
    { id: 'DXARTS470', title: 'Sensing and Control Systems for Digital Arts', description: 'Electronics, sensors, actuators, and real-time systems for art installations. Arduino/microcontroller programming for creative applications. Directly builds on ME skills.', credits: 5, category: 'elective', interestTags: ['design'], prereqs: ['DXARTS200'], genEdReqs: [] },
    { id: 'DXARTS471', title: 'Mechatronic Art, Design, and Fabrication I', description: 'Physical computing meets art: design and build kinetic sculptures, interactive installations, and robotic art using ME fabrication skills.', credits: 5, category: 'elective', interestTags: ['design', 'ceramics'], prereqs: ['DXARTS470'], genEdReqs: [] },
    { id: 'DXARTS472', title: 'Mechatronic Art, Design, and Fabrication II', description: 'Advanced mechatronic art projects. Large-scale installations, advanced fabrication techniques, and exhibition preparation.', credits: 5, category: 'elective', interestTags: ['design'], prereqs: ['DXARTS471'], genEdReqs: [] },
    { id: 'DXARTS430', title: 'Algorithmic Processes in the Arts', description: 'Custom software for art making. Generative art, creative coding, and computational aesthetics.', credits: 5, category: 'elective', interestTags: ['design'], prereqs: ['DXARTS200'], genEdReqs: [] },
    { id: 'DXARTS480', title: 'Introduction to Data-Driven Arts', description: 'Working with data as artistic material. Data visualization, sonification, and machine learning for creative applications.', credits: 5, category: 'elective', interestTags: ['design'], prereqs: ['DXARTS200'], genEdReqs: [] },

    // Studio Art
    { id: 'ART253', title: 'Introduction to 3D4M: Ceramics', description: 'Hand-building and wheel-throwing techniques. Clay preparation, glazing, and kiln firing. Studio access included.', credits: 5, category: 'elective', interestTags: ['ceramics'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },
    { id: 'ART272', title: 'Introduction to 3D4M: Sculpture', description: 'Three-dimensional art making using wood, metal, plaster, and found objects. Additive and subtractive processes.', credits: 5, category: 'elective', interestTags: ['ceramics'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },
    { id: 'ART190', title: 'Introduction to Drawing', description: 'Observational drawing fundamentals. Line, value, composition, and perspective using various media.', credits: 5, category: 'elective', interestTags: ['ceramics'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },
    { id: 'ART281', title: 'Art Makerspaces: Woodworking', description: 'Introduction to woodworking tools, techniques, and design thinking through hands-on making projects.', credits: 2, category: 'elective', interestTags: ['ceramics', 'design'], prereqs: [], genEdReqs: ['arts-humanities'] },
    { id: 'ART255', title: 'Making Meaning: Art and Mathematics', description: 'Interdisciplinary exploration of art and mathematics as embodied practices. Pattern, symmetry, topology, and visual proof.', credits: 5, category: 'elective', interestTags: ['design'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },
    { id: 'ART351', title: 'Furniture Design and Making', description: 'Design and construction of furniture. Wood joinery, form development, and functional art. Combines craft and design thinking.', credits: 5, category: 'elective', interestTags: ['ceramics', 'design'], prereqs: [], genEdReqs: [] },
    { id: 'ART131', title: 'Introduction to Sculpture (Alt)', description: 'Three-dimensional art with emphasis on conceptual development and material exploration.', credits: 5, category: 'elective', interestTags: ['ceramics'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },

    // Design Department
    { id: 'DESIGN150', title: 'What is Design?', description: 'Practices, principles, and perspectives of design. History of design thinking and its role in society and industry.', credits: 3, category: 'elective', interestTags: ['design'], prereqs: [], genEdReqs: ['arts-humanities'] },
    { id: 'DESIGN165', title: 'Introduction to Industrial Design', description: 'Principles of product design: form, function, materials, manufacturing, and user needs. Sketching, model-making, and design critique.', credits: 5, category: 'elective', interestTags: ['design'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },
    { id: 'DESIGN250', title: 'Visualizing Ideas', description: 'Visual communication techniques for designers. Sketching, diagramming, storyboarding, and concept visualization.', credits: 3, category: 'elective', interestTags: ['design'], prereqs: [], genEdReqs: [] },

    // Architecture
    { id: 'ARCH231', title: 'Making and Craft', description: 'Hands-on making through various materials and techniques. Design through physical experimentation and iteration.', credits: 5, category: 'elective', interestTags: ['design', 'ceramics'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },

    // ===================================================================
    // GEN-ED ELECTIVES
    // ===================================================================
    { id: 'AAS101', title: 'Introduction to Asian American Studies', description: 'History, culture, and contemporary issues of Asian Americans. Immigration, identity, and community.', credits: 5, category: 'gen-ed', interestTags: ['cultural-studies'], prereqs: [], genEdReqs: ['diversity', 'social-science', 'addl-ah-ssc'] },
    { id: 'PSYCH101', title: 'Introduction to Psychology', description: 'Survey of major areas in psychology: cognition, development, social behavior, personality, and mental health.', credits: 5, category: 'gen-ed', interestTags: [], prereqs: [], genEdReqs: ['social-science', 'addl-ah-ssc'] },
    { id: 'SOC225', title: 'Data, Society, and Justice', description: 'How data collection, algorithms, and technology affect social inequality. Surveillance, policing, and digital rights.', credits: 5, category: 'elective', interestTags: ['sociology'], prereqs: [], genEdReqs: ['social-science', 'diversity'] },
    { id: 'ECON200', title: 'Introduction to Microeconomics', description: 'Supply and demand, market structures, welfare economics, and public policy.', credits: 5, category: 'elective', interestTags: ['economics'], prereqs: [], genEdReqs: ['social-science', 'addl-ah-ssc'] },
    { id: 'INFO200', title: 'Intellectual Foundations of Informatics', description: 'Information in society, human-information interaction, data ethics, and the social impact of technology.', credits: 5, category: 'elective', interestTags: ['design'], prereqs: [], genEdReqs: ['social-science', 'addl-ah-ssc'] },
  ],
};
