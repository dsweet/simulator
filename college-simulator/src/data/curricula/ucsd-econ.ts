import { Curriculum } from '../../types';

export const ucsdEcon: Curriculum = {
  schoolId: 'ucsd',
  program: 'Economics',
  degreeRequirements: {
    totalCredits: 180, // quarter credits
    majorCredits: 72,
    genEdCredits: 64,
    electiveCredits: 44,
    majorCourses: [
      'ECON1', 'ECON3', 'ECON100A', 'ECON100B', 'ECON100C',
      'ECON120A', 'ECON120B', 'ECON120C',
      'MATH10A', 'MATH10B', 'MATH10C',
    ],
    genEdCategories: [
      // Marshall College (Thurgood Marshall) specific GE requirements
      { id: 'doc', name: 'Dimensions of Culture (DOC) — Marshall Writing Sequence', creditsRequired: 16, satisfiedBy: ['DOC1', 'DOC2', 'DOC3'] },
      { id: 'natural-science', name: 'Natural Sciences (one each: Bio, Chem, Phys)', creditsRequired: 12, satisfiedBy: ['PHYS1A', 'BILD1', 'CHEM6A'] },
      { id: 'math-stats-logic', name: 'Mathematics, Statistics & Logic', creditsRequired: 8, satisfiedBy: ['MATH10A', 'MATH10B', 'PHIL15'] },
      { id: 'humanities', name: 'Humanities & Cultural Studies', creditsRequired: 8, satisfiedBy: ['HILD7A', 'HILD7B', 'LTCS120', 'HILD10', 'LTJA110', 'LTEN27'] },
      { id: 'fine-arts', name: 'Fine Arts', creditsRequired: 4, satisfiedBy: ['VIS1', 'VIS30', 'MUS4', 'MUS5'] },
      { id: 'disciplinary-breadth', name: 'Disciplinary Breadth (4 courses outside major, 1 with significant writing)', creditsRequired: 16, satisfiedBy: [] },
    ],
  },
  recommendedSequence: {
    years: 2,
    terms: [
      // YEAR 1 — DOC sequence is mandatory for all Marshall students, plus start calc and intro econ
      {
        termLabel: 'Fall Year 1',
        courses: ['DOC1', 'MATH10A', 'ECON1', 'PHYS5'],
        locked: [true, true, true, false],
        slotLabels: ['Marshall DOC sequence (required)', 'Major req (Calculus I)', 'Major req (Intro Micro)', 'Natural Science gen-ed (choose one)'],
      },
      {
        termLabel: 'Winter Year 1',
        courses: ['DOC2', 'MATH10B', 'ECON3', 'BILD1'],
        locked: [true, true, true, false],
        slotLabels: ['Marshall DOC sequence (required)', 'Major req (Calculus II)', 'Major req (Intro Macro)', 'Natural Science gen-ed (choose one)'],
      },
      {
        termLabel: 'Spring Year 1',
        courses: ['DOC3', 'MATH10C', 'ECON100A', 'CHEM6A'],
        locked: [true, true, true, false],
        slotLabels: ['Marshall DOC sequence (required)', 'Major req (Calculus III)', 'Major req (Intermed Micro A)', 'Natural Science gen-ed (choose one)'],
      },
      // YEAR 2 — Intermediate micro/macro sequence, start econometrics, fill gen-eds
      {
        termLabel: 'Fall Year 2',
        courses: ['ECON100B', 'ECON120A', 'HILD7A', 'VIS1'],
        locked: [true, true, false, false],
        slotLabels: ['Major req (Intermed Micro B)', 'Major req (Econometrics A)', 'Humanities gen-ed (choose one)', 'Fine Arts gen-ed (choose one)'],
      },
      {
        termLabel: 'Winter Year 2',
        courses: ['ECON100C', 'ECON120B', 'PSYC1', 'PHIL10'],
        locked: [true, true, false, false],
        slotLabels: ['Major req (Intermed Micro C)', 'Major req (Econometrics B)', 'Disciplinary Breadth (choose one)', 'Disciplinary Breadth (choose one)'],
      },
      {
        termLabel: 'Spring Year 2',
        courses: ['ECON120C', 'ECON109', 'DSGN1', 'LTCS120'],
        locked: [true, false, false, false],
        slotLabels: ['Major req (Econometrics C)', 'Econ elective (choose one)', 'Elective (choose one)', 'Humanities gen-ed (choose one)'],
      },
    ],
  },
  courses: [
    // ===== ECONOMICS MAJOR REQUIRED =====
    { id: 'ECON1', title: 'Principles of Microeconomics', description: 'Introduction to microeconomics: consumer choice, firm behavior, market structures, and welfare analysis.', credits: 4, category: 'major-required', interestTags: ['game-theory'], prereqs: [], genEdReqs: [] },
    { id: 'ECON3', title: 'Principles of Macroeconomics', description: 'National income, employment, inflation, monetary and fiscal policy, and international trade.', credits: 4, category: 'major-required', interestTags: [], prereqs: [], genEdReqs: [] },
    { id: 'ECON100A', title: 'Microeconomics A', description: 'Consumer theory: preferences, utility, budget constraints, demand. Mathematical approach to optimization.', credits: 4, category: 'major-required', interestTags: ['game-theory'], prereqs: ['ECON1', 'MATH10A'], genEdReqs: [] },
    { id: 'ECON100B', title: 'Microeconomics B', description: 'Producer theory, market structures, general equilibrium, and introduction to game theory.', credits: 4, category: 'major-required', interestTags: ['game-theory'], prereqs: ['ECON100A'], genEdReqs: [] },
    { id: 'ECON100C', title: 'Microeconomics C', description: 'Strategic behavior, information economics, externalities, public goods, and mechanism design.', credits: 4, category: 'major-required', interestTags: ['game-theory'], prereqs: ['ECON100B'], genEdReqs: [] },
    { id: 'ECON120A', title: 'Econometrics A', description: 'Probability, statistics, and simple regression. Applications to economic data.', credits: 4, category: 'major-required', interestTags: [], prereqs: ['ECON1', 'MATH10B'], genEdReqs: [] },
    { id: 'ECON120B', title: 'Econometrics B', description: 'Multiple regression, hypothesis testing, heteroscedasticity, and model specification.', credits: 4, category: 'major-required', interestTags: [], prereqs: ['ECON120A'], genEdReqs: [] },
    { id: 'ECON120C', title: 'Econometrics C', description: 'Instrumental variables, panel data, time series, and causal inference methods.', credits: 4, category: 'major-required', interestTags: [], prereqs: ['ECON120B'], genEdReqs: [] },
    { id: 'MATH10A', title: 'Calculus I', description: 'Differentiation of functions of one variable, with applications.', credits: 4, category: 'major-required', interestTags: [], prereqs: [], genEdReqs: ['math-stats-logic'] },
    { id: 'MATH10B', title: 'Calculus II', description: 'Integral calculus, series, and introduction to differential equations.', credits: 4, category: 'major-required', interestTags: [], prereqs: ['MATH10A'], genEdReqs: ['math-stats-logic'] },
    { id: 'MATH10C', title: 'Calculus III', description: 'Multivariable calculus: partial derivatives, multiple integrals, and vector calculus.', credits: 4, category: 'major-required', interestTags: [], prereqs: ['MATH10B'], genEdReqs: [] },

    // ===== ECONOMICS ELECTIVES =====
    { id: 'ECON109', title: 'Game Theory', description: 'Formal study of strategic interaction. Nash equilibrium, sequential games, incomplete information, repeated games, and evolutionary game theory.', credits: 4, category: 'major-elective', interestTags: ['game-theory'], prereqs: ['ECON100B'], genEdReqs: [] },
    { id: 'ECON110', title: 'Behavioral Economics', description: 'Psychological foundations of economic behavior. Biases, heuristics, prospect theory, and policy nudges.', credits: 4, category: 'major-elective', interestTags: ['game-theory'], prereqs: ['ECON100A'], genEdReqs: [] },
    { id: 'ECON113', title: 'Mathematical Economics', description: 'Optimization, dynamic programming, and mathematical methods for advanced economic analysis.', credits: 4, category: 'major-elective', interestTags: ['game-theory'], prereqs: ['ECON100C', 'MATH10C'], genEdReqs: [] },
    { id: 'ECON130', title: 'Public Economics', description: 'Government policy, taxation, public goods, externalities, and social insurance programs.', credits: 4, category: 'major-elective', interestTags: [], prereqs: ['ECON100B'], genEdReqs: [] },
    { id: 'ECON131', title: 'Economics of the Environment', description: 'Market failures in environmental resources. Pollution, climate policy, cap-and-trade, carbon taxes, and cost-benefit analysis of environmental regulation.', credits: 4, category: 'major-elective', interestTags: [], prereqs: ['ECON100A'], genEdReqs: [] },
    { id: 'ECON135', title: 'Urban Economics', description: 'Economics of cities: housing markets, transportation, land use, segregation, and urban policy.', credits: 4, category: 'major-elective', interestTags: [], prereqs: ['ECON100A'], genEdReqs: [] },
    { id: 'ECON138', title: 'Economics of Discrimination', description: 'Economic analysis of discrimination by race, gender, and ethnicity. Wage gaps, audit studies, statistical discrimination, and policy responses.', credits: 4, category: 'major-elective', interestTags: ['cultural-studies'], prereqs: ['ECON100A'], genEdReqs: [] },
    { id: 'ECON140', title: 'Economics of Developing Countries', description: 'Poverty, inequality, institutions, health, education, and microfinance in the developing world.', credits: 4, category: 'major-elective', interestTags: [], prereqs: ['ECON100A'], genEdReqs: [] },
    { id: 'ECON145', title: 'Economics of Health', description: 'Health care markets, insurance, moral hazard, adverse selection, pharmaceutical economics, and health policy evaluation.', credits: 4, category: 'major-elective', interestTags: [], prereqs: ['ECON100A'], genEdReqs: [] },
    { id: 'ECON150', title: 'Labor Economics', description: 'Labor markets, wages, human capital, discrimination, immigration, and education economics.', credits: 4, category: 'major-elective', interestTags: [], prereqs: ['ECON100A'], genEdReqs: [] },
    { id: 'ECON160A', title: 'Applied Econometrics I', description: 'Program evaluation methods: regression discontinuity, difference-in-differences, synthetic controls, and policy analysis with real data.', credits: 4, category: 'major-elective', interestTags: [], prereqs: ['ECON120B'], genEdReqs: [] },
    { id: 'ECON160B', title: 'Applied Econometrics II', description: 'Advanced causal inference: matching estimators, bounds, machine learning for causal effects, and replication of published studies.', credits: 4, category: 'major-elective', interestTags: [], prereqs: ['ECON160A'], genEdReqs: [] },
    { id: 'ECON170', title: 'International Trade', description: 'Comparative advantage, trade policy, tariffs, trade agreements, and globalization effects.', credits: 4, category: 'major-elective', interestTags: [], prereqs: ['ECON100B'], genEdReqs: [] },
    { id: 'ECON171', title: 'Decisions Under Uncertainty', description: 'Expected utility theory, risk aversion, insurance markets, decision trees, Bayesian updating, and behavioral anomalies in risky choice.', credits: 4, category: 'major-elective', interestTags: ['game-theory'], prereqs: ['ECON100A'], genEdReqs: [] },
    { id: 'ECON172', title: 'International Finance', description: 'Exchange rates, balance of payments, international capital flows, and currency crises.', credits: 4, category: 'major-elective', interestTags: [], prereqs: ['ECON100B'], genEdReqs: [] },
    { id: 'ECON173', title: 'Financial Economics', description: 'Asset pricing, portfolio theory, CAPM, options, efficient markets hypothesis, and behavioral finance.', credits: 4, category: 'major-elective', interestTags: ['game-theory'], prereqs: ['ECON100B'], genEdReqs: [] },
    { id: 'ECON178', title: 'Economic Forecasting', description: 'Time series methods for forecasting: ARIMA models, VAR, cointegration, volatility models, and forecast evaluation with macroeconomic data.', credits: 4, category: 'major-elective', interestTags: [], prereqs: ['ECON120B'], genEdReqs: [] },
    { id: 'ECON175', title: 'Economic History', description: 'Long-run economic growth, the Industrial Revolution, slavery and its economic legacy, the Great Depression, and institutional change.', credits: 4, category: 'major-elective', interestTags: ['history'], prereqs: ['ECON100A'], genEdReqs: [] },

    // ===== MARSHALL COLLEGE DOC SEQUENCE (required for all Marshall students) =====
    { id: 'DOC1', title: 'Dimensions of Culture: Diversity', description: 'First quarter of Marshall\'s signature sequence. Race, gender, class, and their intersections in American society. Lecture + discussion section. Develops analytical reading and college-level writing.', credits: 4, category: 'gen-ed', interestTags: ['cultural-studies', 'history'], prereqs: [], genEdReqs: ['doc'], termAvailability: ['fall'], yearLevel: 1 },
    { id: 'DOC2', title: 'Dimensions of Culture: Justice', description: 'Second quarter. Social justice frameworks, law, policy, and structural inequality. Intensive expository writing instruction. 6-unit course reflects heavier writing load.', credits: 6, category: 'gen-ed', interestTags: ['cultural-studies', 'history'], prereqs: ['DOC1'], genEdReqs: ['doc'], termAvailability: ['winter'], yearLevel: 1 },
    { id: 'DOC3', title: 'Dimensions of Culture: Imagination', description: 'Third quarter. Cultural production, art, literature, and media as tools for social change. Advanced argumentative writing. 6-unit course.', credits: 6, category: 'gen-ed', interestTags: ['cultural-studies', 'literature'], prereqs: ['DOC2'], genEdReqs: ['doc'], termAvailability: ['spring'], yearLevel: 1 },

    // ===== CERAMICS / VISUAL ARTS =====
    { id: 'VIS1', title: 'Introduction to Art-Making', description: 'Fundamental concepts of contemporary art-making. Drawing, sculpture, photography, and digital media.', credits: 4, category: 'elective', interestTags: ['ceramics'], prereqs: [], genEdReqs: ['fine-arts'] },
    { id: 'VIS30', title: 'Ceramics I: Hand-Building', description: 'Introduction to ceramic art. Pinch, coil, and slab construction. Surface treatment and firing.', credits: 4, category: 'elective', interestTags: ['ceramics'], prereqs: [], genEdReqs: ['fine-arts'] },
    { id: 'VIS130', title: 'Ceramics II: Wheel Throwing', description: 'Wheel-throwing techniques for functional and sculptural forms. Glazing, kiln operation, and studio practice.', credits: 4, category: 'elective', interestTags: ['ceramics'], prereqs: ['VIS30'], genEdReqs: [] },
    { id: 'VIS130B', title: 'Ceramics III: Advanced Projects', description: 'Independent ceramic projects. Sculptural ceramics, installation, and exhibition. Advanced glaze chemistry.', credits: 4, category: 'elective', interestTags: ['ceramics'], prereqs: ['VIS130'], genEdReqs: [] },
    { id: 'VIS20', title: 'Drawing', description: 'Observational and conceptual drawing. Figure drawing, landscape, and abstract approaches.', credits: 4, category: 'elective', interestTags: ['ceramics'], prereqs: [], genEdReqs: [] },
    { id: 'VIS40', title: 'Sculpture', description: 'Three-dimensional art in diverse materials. Installation, site-specific work, and conceptual sculpture.', credits: 4, category: 'elective', interestTags: ['ceramics'], prereqs: [], genEdReqs: [] },

    // ===== ASTRONOMY / SPACE =====
    { id: 'PHYS5', title: 'Stars, Black Holes & the Universe', description: 'Non-majors astronomy: stellar evolution, black holes, galaxies, dark matter, and cosmology.', credits: 4, category: 'elective', interestTags: ['astronomy', 'space', 'science'], prereqs: [], genEdReqs: ['natural-science'] },
    { id: 'PHYS7', title: 'The Solar System & Beyond', description: 'Planets, moons, exoplanets, and the search for life. Planetary science and space exploration.', credits: 4, category: 'elective', interestTags: ['astronomy', 'space', 'science'], prereqs: [], genEdReqs: ['natural-science'] },
    { id: 'SIO10', title: 'The Earth', description: 'Earth as a system: oceans, atmosphere, climate, plate tectonics, and natural hazards. Scripps Institution of Oceanography.', credits: 4, category: 'elective', interestTags: ['space', 'science'], prereqs: [], genEdReqs: ['natural-science'] },
    { id: 'SIO15', title: 'Natural Disasters', description: 'Earthquakes, volcanoes, tsunamis, hurricanes, and their impact on civilization. Risk assessment and preparedness.', credits: 4, category: 'elective', interestTags: ['space', 'science'], prereqs: [], genEdReqs: ['natural-science'] },
    { id: 'SIO45', title: 'Oceanography', description: 'Physical, chemical, biological, and geological oceanography. Marine ecosystems and ocean-climate connections.', credits: 4, category: 'elective', interestTags: ['space', 'science'], prereqs: [], genEdReqs: ['natural-science'] },
    { id: 'PHYS1A', title: 'Mechanics', description: 'Algebra-based mechanics: kinematics, forces, energy, momentum, and rotational motion. Lab included.', credits: 4, category: 'gen-ed', interestTags: ['space', 'science'], prereqs: [], genEdReqs: ['natural-science'] },

    // ===== HISTORY (expanded: Western, world, ancient, modern) =====
    { id: 'HILD7A', title: 'Race & Ethnicity in the United States', description: 'Race, ethnicity, and immigration in American history from colonial era to the present.', credits: 4, category: 'elective', interestTags: ['history', 'cultural-studies'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'HILD7B', title: 'The United States & the World', description: 'American foreign relations from the founding to the present. Imperialism, Cold War, and globalization.', credits: 4, category: 'elective', interestTags: ['history'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'HILD10', title: 'East Asian Civilizations', description: 'History of China, Japan, and Korea from ancient times to the early modern period. Political systems, philosophy, and cultural exchange.', credits: 4, category: 'elective', interestTags: ['history'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'HIEA115', title: 'History of Modern Japan', description: 'Japan from the Meiji era to the present. Modernization, empire, WWII, occupation, economic miracle, and pop culture.', credits: 4, category: 'elective', interestTags: ['history'], prereqs: [], genEdReqs: [] },
    { id: 'HIEA120', title: 'History of Modern China', description: 'China from the Qing dynasty to Xi Jinping. Revolution, Mao, economic reforms, and China\'s rise.', credits: 4, category: 'elective', interestTags: ['history'], prereqs: [], genEdReqs: [] },
    { id: 'HIEU101', title: 'Ancient Greece', description: 'Greek civilization from the Bronze Age through the Hellenistic period. Democracy, philosophy, theater, and war.', credits: 4, category: 'elective', interestTags: ['history', 'classics'], prereqs: [], genEdReqs: [] },
    { id: 'HIEU102', title: 'Ancient Rome', description: 'Roman Republic and Empire. Expansion, law, engineering, and the fall of Rome.', credits: 4, category: 'elective', interestTags: ['history', 'classics'], prereqs: [], genEdReqs: [] },
    { id: 'HIEU108', title: 'Medieval Europe', description: 'Europe from the fall of Rome to the Renaissance. Feudalism, the Church, Crusades, plague, and the rise of nations.', credits: 4, category: 'elective', interestTags: ['history'], prereqs: [], genEdReqs: [] },
    { id: 'HIEU131', title: 'The French Revolution & Napoleon', description: 'Causes and consequences of the French Revolution. Terror, Napoleon, and the reshaping of Europe.', credits: 4, category: 'elective', interestTags: ['history'], prereqs: [], genEdReqs: [] },
    { id: 'HIEU140', title: 'World War I & World War II', description: 'The two world wars: origins, conduct, home fronts, and legacies. Focus on Europe with global perspective.', credits: 4, category: 'elective', interestTags: ['history'], prereqs: [], genEdReqs: [] },
    { id: 'HIUS130', title: 'History of the American West', description: 'Westward expansion, frontier mythology, environmental change, and multicultural communities.', credits: 4, category: 'elective', interestTags: ['history'], prereqs: [], genEdReqs: [] },
    { id: 'HINE120', title: 'History of the Space Age', description: 'Space exploration from V-2 rockets to Mars. Cold War competition, Apollo program, and commercial space.', credits: 4, category: 'elective', interestTags: ['history', 'space', 'astronomy'], prereqs: [], genEdReqs: [] },
    { id: 'HISC160', title: 'History of Science', description: 'Development of science from the Scientific Revolution to modern times. How science interacts with society.', credits: 4, category: 'elective', interestTags: ['history', 'space'], prereqs: [], genEdReqs: [] },
    { id: 'HIAF110', title: 'History of Africa', description: 'African civilizations from ancient Nubia and Great Zimbabwe to colonialism, independence, and the contemporary era.', credits: 4, category: 'elective', interestTags: ['history'], prereqs: [], genEdReqs: [] },

    // ===== ETHNIC STUDIES / CULTURAL STUDIES =====
    { id: 'ETHN1', title: 'Introduction to Ethnic Studies', description: 'Race, ethnicity, and identity in the US. Structural inequality, social movements, and cultural production.', credits: 4, category: 'elective', interestTags: ['cultural-studies'], prereqs: [], genEdReqs: ['disciplinary-breadth'] },
    { id: 'ETHN20', title: 'Introduction to Asian American Studies', description: 'Asian American history, community, identity, and activism. Immigration, exclusion, and contemporary experiences.', credits: 4, category: 'elective', interestTags: ['cultural-studies', 'history'], prereqs: [], genEdReqs: ['disciplinary-breadth'] },
    { id: 'ETHN112', title: 'Asian Americans & Popular Culture', description: 'Asian American representation in film, TV, music, and digital media. Stereotypes, counter-narratives, and cultural production.', credits: 4, category: 'elective', interestTags: ['cultural-studies'], prereqs: [], genEdReqs: [] },
    { id: 'ETHN127', title: 'Asian American Literature', description: 'Fiction, memoir, and poetry by Asian American writers. Immigration, identity, and cultural negotiation.', credits: 4, category: 'elective', interestTags: ['cultural-studies', 'literature'], prereqs: [], genEdReqs: [] },
    { id: 'ETHN140', title: 'Communities & Health', description: 'Health disparities across communities. Intergenerational trauma, cultural competency, and social determinants of health.', credits: 4, category: 'elective', interestTags: ['cultural-studies'], prereqs: [], genEdReqs: [] },

    // ===== DESIGN (UCSD DSGN program) =====
    { id: 'DSGN1', title: 'Design of Everyday Things', description: 'Introduction to human-centered design. Usability, affordances, mental models, and designing for people. Based on Don Norman\'s work (he founded the program).', credits: 4, category: 'elective', interestTags: ['design'], prereqs: [], genEdReqs: [] },
    { id: 'DSGN100', title: 'Prototyping', description: 'Rapid prototyping from paper to digital. Wireframing, user flows, interactive mockups, and usability testing.', credits: 4, category: 'elective', interestTags: ['design'], prereqs: ['DSGN1'], genEdReqs: [] },
    { id: 'DSGN110', title: 'User Experience Design', description: 'Full UX process: research, personas, journey maps, wireframes, prototypes, and user testing.', credits: 4, category: 'elective', interestTags: ['design'], prereqs: ['DSGN1'], genEdReqs: [] },
    { id: 'DSGN160', title: 'Design & Social Innovation', description: 'Using design thinking to address social challenges. Community engagement, participatory design, and impact measurement.', credits: 4, category: 'elective', interestTags: ['design'], prereqs: ['DSGN1'], genEdReqs: [] },
    { id: 'DSGN119', title: 'Design at Large', description: 'Lecture series featuring leading designers, researchers, and industry practitioners. Topics span interaction design, data visualization, civic technology, and design ethics.', credits: 2, category: 'elective', interestTags: ['design'], prereqs: [], genEdReqs: [] },
    { id: 'VIS141A', title: 'Digital Photography', description: 'Digital imaging as artistic practice. Camera techniques, post-processing, color theory, and visual storytelling for print and screen.', credits: 4, category: 'elective', interestTags: ['design'], prereqs: ['VIS1'], genEdReqs: [] },
    { id: 'VIS145A', title: 'Video Art & Digital Media', description: 'Time-based art: video production, editing, sound design, and installation. Explores narrative, documentary, and experimental moving-image work.', credits: 4, category: 'elective', interestTags: ['design'], prereqs: ['VIS1'], genEdReqs: [] },
    { id: 'VIS147A', title: 'Graphic Design', description: 'Visual communication fundamentals. Typography, layout, color systems, brand identity, and print/digital design using industry-standard tools.', credits: 4, category: 'elective', interestTags: ['design'], prereqs: ['VIS1'], genEdReqs: [] },
    { id: 'VIS148', title: 'Web & Interface Design', description: 'Designing for the web as a creative medium. HTML/CSS, responsive layout, motion design, and interactive art for browsers.', credits: 4, category: 'elective', interestTags: ['design', 'video-games'], prereqs: ['VIS1'], genEdReqs: [] },
    { id: 'VIS149', title: 'Data Visualization as Art', description: 'Representing complex data through visual art. Information aesthetics, generative graphics, and creative coding for data-driven storytelling.', credits: 4, category: 'elective', interestTags: ['design'], prereqs: ['VIS1'], genEdReqs: [] },

    // ===== GAME DESIGN / VIDEO GAMES =====
    { id: 'CSE8A', title: 'Introduction to Programming', description: 'Programming in Python for beginners. Variables, functions, loops, and data manipulation.', credits: 4, category: 'elective', interestTags: ['video-games'], prereqs: [], genEdReqs: [] },
    { id: 'CSE11', title: 'Introduction to Programming & Computational Problem-Solving', description: 'Object-oriented programming in Java. Data structures and algorithm design.', credits: 4, category: 'elective', interestTags: ['video-games'], prereqs: ['CSE8A'], genEdReqs: [] },
    { id: 'CSE167', title: 'Computer Graphics', description: 'Rendering, modeling, and animation. OpenGL/WebGL, ray tracing, and real-time graphics for games.', credits: 4, category: 'elective', interestTags: ['video-games', 'design'], prereqs: ['CSE11'], genEdReqs: [] },
    { id: 'CSE125', title: 'Software System Design & Implementation', description: 'Team-based game development. Students design and build a networked multiplayer game from scratch.', credits: 4, category: 'elective', interestTags: ['video-games'], prereqs: ['CSE11'], genEdReqs: [] },

    // ===== LITERATURE (expanded: world, classical, comparative) =====
    { id: 'LTEN27', title: 'Asian American Literature', description: 'Narratives of Asian American experience. Immigration, identity, displacement, and cultural production.', credits: 4, category: 'elective', interestTags: ['literature', 'cultural-studies'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'LTEN28', title: 'Science Fiction', description: 'Science fiction as social commentary. Technology, utopia/dystopia, identity, and speculative futures.', credits: 4, category: 'elective', interestTags: ['literature', 'space'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'LTEN29', title: 'Graphic Novels', description: 'Comics and graphic novels as literary and visual art. Sequential storytelling, manga, and independent comics.', credits: 4, category: 'elective', interestTags: ['literature', 'video-games'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'LTJA110', title: 'Japanese Literature in Translation', description: 'Major works of Japanese literature from classical to contemporary. Genji, Bashō, Kawabata, Murakami.', credits: 4, category: 'elective', interestTags: ['literature'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'LTCS120', title: 'Comparative World Literature', description: 'Literature across cultures and traditions. Themes of exile, belonging, and cross-cultural encounters.', credits: 4, category: 'elective', interestTags: ['literature'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'LTWL100', title: 'Creative Writing: Fiction', description: 'Workshop in short fiction. Craft, voice, structure, and revision through peer critique.', credits: 4, category: 'elective', interestTags: ['literature'], prereqs: [], genEdReqs: [] },
    { id: 'LTGK1', title: 'Greek Epic: The Iliad & Odyssey', description: 'Homer\'s epics in translation. Heroes, war, homecoming, and the foundations of Western literature.', credits: 4, category: 'elective', interestTags: ['literature', 'classics'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'LTLA1', title: 'Roman Literature in Translation', description: 'Virgil, Ovid, Seneca, and other Roman writers. Empire, myth, love, and power in Latin literature.', credits: 4, category: 'elective', interestTags: ['literature', 'classics'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'LTEN143', title: 'Shakespeare', description: 'Selected plays and sonnets. Comedy, tragedy, history, and the enduring power of Shakespeare\'s language.', credits: 4, category: 'elective', interestTags: ['literature'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'LTEN181', title: 'The Novel', description: 'History and theory of the novel as a literary form. From Cervantes to contemporary fiction.', credits: 4, category: 'elective', interestTags: ['literature'], prereqs: [], genEdReqs: [] },
    { id: 'LTRU130', title: 'Russian Literature in Translation', description: 'Dostoevsky, Tolstoy, Chekhov, and Bulgakov. The Russian literary tradition and its global influence.', credits: 4, category: 'elective', interestTags: ['literature'], prereqs: [], genEdReqs: ['humanities'] },

    // ===== PHILOSOPHY =====
    { id: 'PHIL10', title: 'Introduction to Philosophy', description: 'Fundamental questions: knowledge, reality, ethics, free will, and the nature of mind. Plato to contemporary thinkers.', credits: 4, category: 'elective', interestTags: ['philosophy'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'PHIL12', title: 'Science & Philosophy', description: 'What is science? Scientific method, explanation, theory change, and the relationship between science and values.', credits: 4, category: 'elective', interestTags: ['philosophy', 'space'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'PHIL13', title: 'Ethics', description: 'Major ethical theories: consequentialism, deontology, virtue ethics. Applied to contemporary moral problems.', credits: 4, category: 'elective', interestTags: ['philosophy'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'PHIL15', title: 'Introduction to Logic', description: 'Propositional and predicate logic, truth tables, validity, and formal proof methods.', credits: 4, category: 'elective', interestTags: ['philosophy', 'game-theory'], prereqs: [], genEdReqs: ['math-stats-logic'] },
    { id: 'PHIL28', title: 'Philosophy of Technology', description: 'Ethics of AI, automation, privacy, algorithmic bias, and the impact of technology on human autonomy.', credits: 4, category: 'elective', interestTags: ['philosophy', 'design'], prereqs: [], genEdReqs: [] },
    { id: 'PHIL120', title: 'Ancient Philosophy', description: 'Socrates, Plato, and Aristotle. The origins of Western philosophy: metaphysics, epistemology, ethics, and political thought.', credits: 4, category: 'elective', interestTags: ['philosophy', 'classics'], prereqs: [], genEdReqs: [] },
    { id: 'PHIL121', title: 'Existentialism', description: 'Kierkegaard, Nietzsche, Heidegger, Sartre, Beauvoir, and Camus. Freedom, authenticity, absurdity, and the meaning of existence.', credits: 4, category: 'elective', interestTags: ['philosophy'], prereqs: ['PHIL10'], genEdReqs: [] },
    { id: 'PHIL132', title: 'Philosophy of Law', description: 'Nature of law and legal reasoning. Natural law, legal positivism, rights, punishment, civil disobedience, and constitutional interpretation.', credits: 4, category: 'elective', interestTags: ['philosophy'], prereqs: ['PHIL13'], genEdReqs: [] },
    { id: 'PHIL148', title: 'Bioethics', description: 'Ethical issues in medicine and biological science. Genetic engineering, end-of-life care, clinical trials, reproductive ethics, and public health.', credits: 4, category: 'elective', interestTags: ['philosophy'], prereqs: ['PHIL13'], genEdReqs: [] },
    { id: 'PHIL155', title: 'Political Philosophy', description: 'Justice, liberty, equality, and the state. Rawls, Nozick, Marx, feminist political theory, and global justice.', credits: 4, category: 'elective', interestTags: ['philosophy'], prereqs: ['PHIL10'], genEdReqs: [] },
    { id: 'PHIL170', title: 'Philosophy of Mind', description: 'Consciousness, the mind-body problem, AI and machine consciousness, personal identity, and free will.', credits: 4, category: 'elective', interestTags: ['philosophy', 'design'], prereqs: ['PHIL10'], genEdReqs: [] },

    // ===== COGNITIVE SCIENCE =====
    { id: 'COGS1', title: 'Introduction to Cognitive Science', description: 'Interdisciplinary study of the mind. Neural computation, perception, language, learning, memory, and artificial intelligence.', credits: 4, category: 'elective', interestTags: ['design', 'philosophy'], prereqs: [], genEdReqs: ['disciplinary-breadth'] },
    { id: 'COGS101A', title: 'Sensation & Perception', description: 'How the brain transforms sensory signals into perception. Vision, audition, touch, and multisensory integration.', credits: 4, category: 'elective', interestTags: ['design'], prereqs: ['COGS1'], genEdReqs: [] },
    { id: 'COGS101B', title: 'Learning, Memory & Attention', description: 'Cognitive and neural mechanisms of learning and memory. Classical conditioning, working memory, attention, and cognitive control.', credits: 4, category: 'elective', interestTags: ['design'], prereqs: ['COGS1'], genEdReqs: [] },
    { id: 'COGS101C', title: 'Language', description: 'Cognitive science of language. Phonology, syntax, semantics, language acquisition, bilingualism, and computational models.', credits: 4, category: 'elective', interestTags: [], prereqs: ['COGS1'], genEdReqs: [] },
    { id: 'COGS108', title: 'Data Science in Practice', description: 'Hands-on data science with Python. Data wrangling, visualization, statistical inference, and machine learning applied to cognitive and social data.', credits: 4, category: 'elective', interestTags: ['design'], prereqs: ['COGS1'], genEdReqs: [] },
    { id: 'COGS118A', title: 'Supervised Machine Learning Algorithms', description: 'Classification and regression algorithms. Decision trees, SVMs, neural networks, model evaluation, and applications to cognitive data.', credits: 4, category: 'elective', interestTags: ['design', 'game-theory'], prereqs: ['COGS108'], genEdReqs: [] },
    { id: 'COGS187A', title: 'Usability & Information Architecture', description: 'Design of usable information systems. Card sorting, navigation design, wireframing, usability testing, and accessibility.', credits: 4, category: 'elective', interestTags: ['design'], prereqs: ['COGS1'], genEdReqs: [] },
    { id: 'COGS107A', title: 'Neuroanatomy & Neurophysiology', description: 'Structure and function of the nervous system. Neurons, neural circuits, brain regions, and how neural architecture gives rise to cognition. Lab-based.', credits: 4, category: 'elective', interestTags: ['design'], prereqs: ['COGS1'], genEdReqs: [] },
    { id: 'COGS109', title: 'Modeling & Data Analysis', description: 'Computational modeling of cognitive processes. Bayesian models, neural network simulations, and fitting models to behavioral and neural data.', credits: 4, category: 'elective', interestTags: ['design', 'game-theory'], prereqs: ['COGS108'], genEdReqs: [] },
    { id: 'COGS118B', title: 'Introduction to Unsupervised Machine Learning', description: 'Clustering, dimensionality reduction, generative models, and self-organizing maps. Applications to discovering structure in cognitive and neural datasets.', credits: 4, category: 'elective', interestTags: ['design', 'game-theory'], prereqs: ['COGS108'], genEdReqs: [] },
    { id: 'COGS143', title: 'Language & Brain', description: 'Neural basis of language processing. Aphasia, neuroimaging of speech and reading, bilingual brain organization, and computational models of language in the brain.', credits: 4, category: 'elective', interestTags: ['philosophy'], prereqs: ['COGS1'], genEdReqs: [] },
    { id: 'COGS187B', title: 'Practical Interaction Design', description: 'Advanced interaction design studio. Students design, prototype, and user-test a digital product from concept through high-fidelity interactive prototype.', credits: 4, category: 'elective', interestTags: ['design'], prereqs: ['COGS187A'], genEdReqs: [] },

    // ===== COMPUTER SCIENCE (for non-majors & interdisciplinary) =====
    { id: 'CSE110', title: 'Software Engineering', description: 'Software development lifecycle, agile methodology, version control, testing, code review, and team-based project development.', credits: 4, category: 'elective', interestTags: ['video-games', 'design'], prereqs: ['CSE11'], genEdReqs: [] },
    { id: 'CSE150A', title: 'Introduction to Artificial Intelligence: Search & Reasoning', description: 'Foundations of AI: search algorithms, constraint satisfaction, logical reasoning, planning, and knowledge representation.', credits: 4, category: 'elective', interestTags: ['video-games', 'game-theory'], prereqs: ['CSE11'], genEdReqs: [] },
    { id: 'CSE151A', title: 'Introduction to Machine Learning', description: 'Supervised and unsupervised learning. Regression, classification, clustering, neural networks, and practical ML pipelines.', credits: 4, category: 'elective', interestTags: ['game-theory'], prereqs: ['CSE11'], genEdReqs: [] },
    { id: 'CSE158', title: 'Recommender Systems & Web Mining', description: 'Building recommendation engines. Collaborative filtering, content-based methods, and analysis of large-scale web data.', credits: 4, category: 'elective', interestTags: ['design', 'game-theory'], prereqs: ['CSE11'], genEdReqs: [] },
    { id: 'CSE168', title: 'Computer Graphics II: Rendering', description: 'Advanced rendering: global illumination, path tracing, physically-based materials, and photorealistic image synthesis.', credits: 4, category: 'elective', interestTags: ['video-games', 'design'], prereqs: ['CSE167'], genEdReqs: [] },
    { id: 'CSE100', title: 'Advanced Data Structures', description: 'Hash tables, priority queues, balanced trees, graphs, and their applications. Algorithm analysis and C++ implementation for large-scale data.', credits: 4, category: 'elective', interestTags: ['video-games'], prereqs: ['CSE11'], genEdReqs: [] },
    { id: 'CSE134B', title: 'Web Client Languages', description: 'Modern web development: HTML5, CSS3, JavaScript, responsive design, accessibility, and progressive web apps. Build production-quality web interfaces.', credits: 4, category: 'elective', interestTags: ['design', 'video-games'], prereqs: ['CSE11'], genEdReqs: [] },
    { id: 'CSE150B', title: 'AI: Probabilistic Reasoning & Learning', description: 'Bayesian networks, Markov decision processes, reinforcement learning, and hidden Markov models. Probabilistic approaches to AI and decision-making.', credits: 4, category: 'elective', interestTags: ['game-theory'], prereqs: ['CSE150A'], genEdReqs: [] },
    { id: 'CSE170', title: 'Interaction Design', description: 'Human-computer interaction principles applied to interface design. Needfinding, prototyping, heuristic evaluation, and A/B testing in studio format.', credits: 4, category: 'elective', interestTags: ['design'], prereqs: ['CSE11'], genEdReqs: [] },
    { id: 'CSE163', title: 'Advanced Computer Graphics & Game Development', description: 'Real-time rendering, physics simulation, particle systems, and game engine architecture. Build interactive 3D applications and games.', credits: 4, category: 'elective', interestTags: ['video-games', 'design'], prereqs: ['CSE167'], genEdReqs: [] },

    // ===== STATISTICS / MATHEMATICS (upper-division) =====
    { id: 'MATH109', title: 'Mathematical Reasoning', description: 'Introduction to proof techniques: direct proof, contradiction, induction, sets, functions, and relations. Bridge to upper-division mathematics.', credits: 4, category: 'elective', interestTags: ['game-theory'], prereqs: ['MATH10C'], genEdReqs: [] },
    { id: 'MATH170A', title: 'Numerical Linear Algebra', description: 'Computational methods for solving linear systems, eigenvalue problems, least squares, and matrix factorizations.', credits: 4, category: 'elective', interestTags: [], prereqs: ['MATH10C'], genEdReqs: [] },
    { id: 'MATH180A', title: 'Introduction to Probability', description: 'Probability spaces, random variables, distributions, expectation, law of large numbers, and the central limit theorem.', credits: 4, category: 'elective', interestTags: ['game-theory'], prereqs: ['MATH10C'], genEdReqs: [] },
    { id: 'MATH180B', title: 'Introduction to Mathematical Statistics', description: 'Statistical inference: estimation, hypothesis testing, confidence intervals, maximum likelihood, and Bayesian methods.', credits: 4, category: 'elective', interestTags: ['game-theory'], prereqs: ['MATH180A'], genEdReqs: [] },
    { id: 'MATH180C', title: 'Applied Stochastic Processes', description: 'Markov chains, Poisson processes, queuing theory, Brownian motion, and applications to economics and biology.', credits: 4, category: 'elective', interestTags: ['game-theory'], prereqs: ['MATH180B'], genEdReqs: [] },
    { id: 'MATH181A', title: 'Introduction to Mathematical Statistics I', description: 'Point estimation, sufficiency, completeness, maximum likelihood, and method of moments. Rigorous treatment of statistical theory.', credits: 4, category: 'elective', interestTags: ['game-theory'], prereqs: ['MATH180A'], genEdReqs: [] },
    { id: 'MATH181B', title: 'Introduction to Mathematical Statistics II', description: 'Hypothesis testing, Neyman-Pearson lemma, confidence intervals, linear regression, and analysis of variance.', credits: 4, category: 'elective', interestTags: ['game-theory'], prereqs: ['MATH181A'], genEdReqs: [] },
    { id: 'MATH183', title: 'Statistical Methods', description: 'Applied statistics for data analysis. ANOVA, multiple regression, logistic regression, nonparametric methods, and real-world data projects.', credits: 4, category: 'elective', interestTags: [], prereqs: ['MATH180A'], genEdReqs: [] },
    { id: 'MATH189', title: 'Exploratory Data Analysis & Inference', description: 'Modern data analysis combining visualization, resampling methods, and Bayesian inference. Project-based with real datasets from social and natural sciences.', credits: 4, category: 'elective', interestTags: ['design'], prereqs: ['MATH180A'], genEdReqs: [] },
    { id: 'MATH185', title: 'Introduction to Computational Statistics', description: 'Monte Carlo methods, bootstrap, MCMC, EM algorithm, and simulation-based inference. Programming in R and Python.', credits: 4, category: 'elective', interestTags: ['game-theory'], prereqs: ['MATH180B'], genEdReqs: [] },

    // ===== POLITICAL SCIENCE (upper-division) =====
    { id: 'POLI100A', title: 'International Relations: Theory', description: 'Realism, liberalism, constructivism, and critical theories of international politics. War, cooperation, and global governance.', credits: 4, category: 'elective', interestTags: ['history', 'game-theory'], prereqs: ['POLI10'], genEdReqs: [] },
    { id: 'POLI110', title: 'Political Economy', description: 'Interaction of politics and markets. Trade policy, development, inequality, and the politics of economic institutions.', credits: 4, category: 'elective', interestTags: ['game-theory'], prereqs: ['POLI10'], genEdReqs: [] },
    { id: 'POLI120A', title: 'Game Theory in Political Science', description: 'Formal models of political behavior. Voting, bargaining, coalition formation, and strategic interaction between states.', credits: 4, category: 'elective', interestTags: ['game-theory'], prereqs: ['POLI10'], genEdReqs: [] },
    { id: 'POLI150', title: 'Public Policy Analysis', description: 'Policy design, implementation, and evaluation. Cost-benefit analysis, regulatory policy, and evidence-based policymaking.', credits: 4, category: 'elective', interestTags: [], prereqs: ['POLI10'], genEdReqs: [] },
    { id: 'POLI160', title: 'Environmental Politics & Policy', description: 'Politics of climate change, environmental regulation, international environmental agreements, and environmental justice.', credits: 4, category: 'elective', interestTags: ['history'], prereqs: ['POLI10'], genEdReqs: [] },
    { id: 'POLI100B', title: 'International Relations: Regional Conflicts', description: 'Case studies in international conflict and cooperation. Middle East, East Asia, and European security. Crisis bargaining and conflict resolution.', credits: 4, category: 'elective', interestTags: ['history', 'game-theory'], prereqs: ['POLI100A'], genEdReqs: [] },
    { id: 'POLI100J', title: 'International Law', description: 'Sources and subjects of international law. Human rights, laws of war, treaties, sovereignty, and the role of international courts and institutions.', credits: 4, category: 'elective', interestTags: ['history'], prereqs: ['POLI10'], genEdReqs: [] },
    { id: 'POLI113', title: 'Comparative Political Economy', description: 'Why nations differ in economic policy. Welfare states, labor markets, trade openness, and varieties of capitalism across democracies.', credits: 4, category: 'elective', interestTags: ['game-theory'], prereqs: ['POLI10'], genEdReqs: [] },
    { id: 'POLI100Q', title: 'Data Analytics for Political Science', description: 'Quantitative methods for political analysis. Survey design, regression, causal inference, and data visualization applied to elections, policy, and public opinion.', credits: 4, category: 'elective', interestTags: ['game-theory'], prereqs: ['POLI10'], genEdReqs: [] },
    { id: 'POLI142F', title: 'Politics of Immigration', description: 'Immigration policy, border politics, citizenship, refugee crises, and the political economy of migration in the US and globally.', credits: 4, category: 'elective', interestTags: ['history', 'cultural-studies'], prereqs: ['POLI10'], genEdReqs: [] },

    // ===== GEN-ED OPTIONS (Natural Science, other) =====
    { id: 'BILD1', title: 'The Cell', description: 'Cell biology: structure, function, genetics, and molecular biology. Lab included.', credits: 4, category: 'gen-ed', interestTags: ['science'], prereqs: [], genEdReqs: ['natural-science'] },
    { id: 'CHEM6A', title: 'General Chemistry I', description: 'Atoms, molecules, bonding, stoichiometry, and thermochemistry. Lab included.', credits: 4, category: 'gen-ed', interestTags: ['science'], prereqs: [], genEdReqs: ['natural-science'] },
    { id: 'PSYC1', title: 'Introduction to Psychology', description: 'Scientific study of behavior and mental processes. Brain, perception, learning, social psychology, and mental health.', credits: 4, category: 'gen-ed', interestTags: [], prereqs: [], genEdReqs: ['disciplinary-breadth'] },
    { id: 'POLI10', title: 'Introduction to Political Science', description: 'Political theory, institutions, and behavior. American politics, comparative politics, and international relations.', credits: 4, category: 'gen-ed', interestTags: [], prereqs: [], genEdReqs: ['disciplinary-breadth'] },
    { id: 'SOC10', title: 'Introduction to Sociology', description: 'Social structures, inequality, institutions, and social change. Research methods in sociology.', credits: 4, category: 'gen-ed', interestTags: [], prereqs: [], genEdReqs: ['disciplinary-breadth'] },
    { id: 'MUS4', title: 'Introduction to Music', description: 'Elements of music, listening skills, and musical traditions from around the world.', credits: 4, category: 'gen-ed', interestTags: [], prereqs: [], genEdReqs: ['fine-arts'] },
    { id: 'MUS5', title: 'Introduction to Music: Jazz', description: 'History and practice of jazz from its African American roots through contemporary forms.', credits: 4, category: 'gen-ed', interestTags: [], prereqs: [], genEdReqs: ['fine-arts'] },
    { id: 'ANTH1', title: 'Introduction to Anthropology', description: 'Human biological and cultural diversity. Evolution, archaeology, language, and ethnography.', credits: 4, category: 'gen-ed', interestTags: ['cultural-studies'], prereqs: [], genEdReqs: ['disciplinary-breadth'] },
    { id: 'LING1', title: 'Introduction to Linguistics', description: 'How language works: phonetics, syntax, semantics, language acquisition, and sociolinguistics.', credits: 4, category: 'gen-ed', interestTags: [], prereqs: [], genEdReqs: ['disciplinary-breadth'] },
  ],
};
