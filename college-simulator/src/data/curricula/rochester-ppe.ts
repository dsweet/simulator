import { Curriculum } from '../../types';

export const rochesterPpe: Curriculum = {
  schoolId: 'rochester',
  program: 'PPE (Politics, Philosophy & Economics)',
  degreeRequirements: {
    totalCredits: 32, // 128 credit hours, ~32 courses
    majorCredits: 15, // 3 gateway + 3 core + 2 methods + 1 stats + 1 seminar + 5 concentration
    genEdCredits: 7, // Rochester's open curriculum: only writing + 2 clusters (3 courses each in 2 areas outside major)
    electiveCredits: 10,
    majorCourses: [
      'ECO108', 'PHL201', 'PSC101', // Gateway
      'PSC287', 'PHL223', 'ECO207', // Core
      'PHL105', 'PPE288', // Analytical Methods
      'STT211', // Statistics
      'PPE293', // Seminar
    ],
    genEdCategories: [
      { id: 'writing', name: 'Primary Writing Requirement', creditsRequired: 1, satisfiedBy: ['WRT105'] },
      { id: 'cluster-1', name: 'Cluster 1 (3 related courses in one area outside major)', creditsRequired: 3, satisfiedBy: [] },
      { id: 'cluster-2', name: 'Cluster 2 (3 related courses in a different area)', creditsRequired: 3, satisfiedBy: [] },
    ],
  },
  recommendedSequence: {
    years: 2,
    terms: [
      // YEAR 1 — Gateway courses, writing requirement, begin cluster exploration
      {
        termLabel: 'Fall Year 1',
        courses: ['ECO108', 'PHL201', 'WRT105', 'HIS100'],
        locked: [true, true, false, false],
        slotLabels: ['PPE Gateway (Principles of Economics)', 'PPE Gateway (Ethics)', 'Writing requirement (recommended first semester)', 'Cluster 1 course (choose a 3-course cluster)'],
      },
      {
        termLabel: 'Spring Year 1',
        courses: ['PSC101', 'PHL105', 'STT211', 'HIS150'],
        locked: [true, true, true, false],
        slotLabels: ['PPE Gateway (Intro Political Science)', 'PPE Analytical Methods (Reason & Argument)', 'PPE Statistics requirement', 'Cluster 1 course (continue cluster)'],
      },
      // YEAR 2 — Core courses, game theory, seminar, thematic concentration
      {
        termLabel: 'Fall Year 2',
        courses: ['ECO207', 'PHL223', 'PPE288', 'HIS205'],
        locked: [true, true, true, false],
        slotLabels: ['PPE Core (Intermediate Micro)', 'PPE Core (Social & Political Philosophy)', 'PPE Analytical Methods (Game Theory)', 'Cluster 1 course (complete cluster)'],
      },
      {
        termLabel: 'Spring Year 2',
        courses: ['PSC287', 'PPE293', 'PSC215', 'AST104'],
        locked: [true, true, false, false],
        slotLabels: ['PPE Core (Theories of Political Economy)', 'PPE Seminar (capstone component)', 'Thematic Concentration course (choose)', 'Cluster 2 course (choose a 3-course cluster)'],
      },
    ],
  },
  courses: [
    // ===== PPE GATEWAY COURSES (3 required — one from each discipline) =====
    { id: 'ECO108', title: 'Principles of Economics', description: 'Unified introduction to micro and macroeconomics. Supply/demand, market structures, GDP, inflation, and policy.', credits: 1, category: 'major-required', interestTags: ['game-theory'], prereqs: [], genEdReqs: [] },
    { id: 'PHL201', title: 'Ethics', description: 'Moral theories and their application. Utilitarianism, deontology, virtue ethics, and contemporary moral dilemmas.', credits: 1, category: 'major-required', interestTags: ['philosophy'], prereqs: [], clusterGroup: 'philosophy', genEdReqs: [] },
    { id: 'PSC101', title: 'Introduction to Political Science', description: 'Political systems, theories, and institutions. Democracy, authoritarianism, and political participation.', credits: 1, category: 'major-required', interestTags: [], prereqs: [], clusterGroup: 'political-science', genEdReqs: [] },

    // ===== PPE CORE COURSES (3 required) =====
    { id: 'ECO207', title: 'Intermediate Microeconomics', description: 'Consumer theory, producer theory, general equilibrium, game theory, information economics, and welfare analysis.', credits: 1, category: 'major-required', interestTags: ['game-theory'], prereqs: ['ECO108', 'MTH161'], genEdReqs: [] },
    { id: 'PHL223', title: 'Social & Political Philosophy', description: 'Justice, rights, liberty, equality, and political obligation. Hobbes, Locke, Rousseau, Rawls, Nozick, and contemporary debates about the legitimate scope of state power.', credits: 1, category: 'major-required', interestTags: ['philosophy', 'history'], prereqs: [], genEdReqs: [] },
    { id: 'PSC287', title: 'Theories of Political Economy', description: 'How political institutions shape economic outcomes and vice versa. Markets, property rights, collective action, redistribution, and the political foundations of capitalism and democracy.', credits: 1, category: 'major-required', interestTags: ['game-theory', 'philosophy'], prereqs: ['PSC101', 'ECO108'], genEdReqs: [] },

    // ===== PPE ANALYTICAL METHODS (2 required) =====
    { id: 'PHL105', title: 'Reason & Argument', description: 'Formal and informal logic, argument structure, fallacies, and critical reasoning. How to evaluate claims, construct sound arguments, and identify flawed reasoning.', credits: 1, category: 'major-required', interestTags: ['philosophy', 'game-theory'], prereqs: [], genEdReqs: [] },
    { id: 'PPE288', title: 'Game Theory', description: 'Strategic interaction across politics, philosophy, and economics. Nash equilibrium, sequential games, repeated games, bargaining, mechanism design, voting theory, and social choice.', credits: 1, category: 'major-required', interestTags: ['game-theory', 'philosophy'], prereqs: ['ECO108'], genEdReqs: [] },

    // ===== PPE STATISTICS (1 required — choose one) =====
    { id: 'STT211', title: 'Introduction to Statistics', description: 'Probability, distributions, confidence intervals, hypothesis testing, and regression basics.', credits: 1, category: 'major-required', interestTags: [], prereqs: [], genEdReqs: [] },

    // ===== PPE SEMINAR (1 required) =====
    { id: 'PPE293', title: 'PPE Seminar', description: 'Interdisciplinary capstone seminar integrating politics, philosophy, and economics. Students present research at the PPE colloquium. Cross-listed across all three departments.', credits: 1, category: 'major-required', interestTags: ['philosophy', 'game-theory'], prereqs: ['PHL223', 'PSC287', 'ECO207'], genEdReqs: [] },

    // ===== PPE THEMATIC CONCENTRATION OPTIONS =====
    // Economics depth
    { id: 'ECO209', title: 'Intermediate Macroeconomics', description: 'Long-run growth, business cycles, monetary and fiscal policy, open economy macroeconomics, and financial markets.', credits: 1, category: 'major-elective', interestTags: [], prereqs: ['ECO108', 'MTH161'], genEdReqs: [] },
    { id: 'ECO260', title: 'Game Theory', description: 'Strategic interaction: Nash equilibrium, sequential games, repeated games, bargaining, mechanism design, and auction theory. Applications across economics and political science.', credits: 1, category: 'major-elective', interestTags: ['game-theory'], prereqs: ['ECO207'], genEdReqs: [] },
    { id: 'ECO265', title: 'Behavioral Economics', description: 'Cognitive biases, prospect theory, intertemporal choice, social preferences, and nudge policy design.', credits: 1, category: 'major-elective', interestTags: ['game-theory'], prereqs: ['ECO207'], genEdReqs: [] },
    { id: 'ECO280', title: 'Financial Economics', description: 'Asset pricing, portfolio theory, risk management, derivatives, and financial market microstructure.', credits: 1, category: 'major-elective', interestTags: [], prereqs: ['ECO207'], genEdReqs: [] },
    { id: 'ECO285', title: 'International Economics', description: 'Trade theory, trade policy, exchange rates, capital flows, and globalization.', credits: 1, category: 'major-elective', interestTags: [], prereqs: ['ECO207'], genEdReqs: [] },
    { id: 'ECO290', title: 'Development Economics', description: 'Economic challenges of developing countries. Poverty, growth, institutions, health, education, and aid effectiveness.', credits: 1, category: 'major-elective', interestTags: [], prereqs: ['ECO207'], genEdReqs: [] },
    { id: 'ECO310', title: 'Public Finance', description: 'Taxation, public expenditure, externalities, public goods, social insurance, and fiscal federalism.', credits: 1, category: 'major-elective', interestTags: [], prereqs: ['ECO207'], genEdReqs: [] },
    { id: 'ECO340', title: 'Environmental Economics', description: 'Market failure and the environment, cap-and-trade, carbon taxation, cost-benefit analysis, and sustainability.', credits: 1, category: 'major-elective', interestTags: [], prereqs: ['ECO207'], genEdReqs: [] },
    { id: 'ECO305', title: 'Labor Economics', description: 'Labor supply and demand, human capital, wage determination, discrimination, unions, and labor market policy.', credits: 1, category: 'major-elective', interestTags: [], prereqs: ['ECO207'], genEdReqs: [] },

    // Philosophy depth
    { id: 'PHL101', title: 'Introduction to Philosophy', description: 'Classic questions about knowledge, reality, ethics, free will, and the meaning of life. Plato, Descartes, Hume, Kant, and contemporary thinkers.', credits: 1, category: 'major-elective', interestTags: ['philosophy'], prereqs: [], clusterGroup: 'philosophy', genEdReqs: [] },
    { id: 'PHL203', title: 'Philosophy of Mind', description: 'Consciousness, artificial intelligence, free will, and the mind-body problem. What makes a mind?', credits: 1, category: 'major-elective', interestTags: ['philosophy', 'design'], prereqs: [], clusterGroup: 'philosophy', genEdReqs: [] },
    { id: 'PHL210', title: 'Logic', description: 'Formal and informal logic. Valid arguments, fallacies, propositional logic, and truth tables.', credits: 1, category: 'major-elective', interestTags: ['philosophy', 'game-theory'], prereqs: [], clusterGroup: 'philosophy', genEdReqs: [] },
    { id: 'PHL225', title: 'Philosophy of Science', description: 'What is science? Scientific method, theory change, realism vs. anti-realism, and the demarcation problem.', credits: 1, category: 'major-elective', interestTags: ['philosophy', 'space'], prereqs: [], clusterGroup: 'philosophy', genEdReqs: [] },
    { id: 'PHL250', title: 'Existentialism', description: 'Freedom, authenticity, anxiety, and meaning. Kierkegaard, Nietzsche, Heidegger, Sartre, de Beauvoir, and Camus.', credits: 1, category: 'major-elective', interestTags: ['philosophy', 'literature'], prereqs: [], clusterGroup: 'philosophy', genEdReqs: [] },
    { id: 'PHL275', title: 'Philosophy of Technology', description: 'Ethics of AI, surveillance, social media, and algorithmic decision-making. Technology\'s impact on human life and society.', credits: 1, category: 'major-elective', interestTags: ['philosophy', 'design'], prereqs: [], clusterGroup: 'philosophy', genEdReqs: [] },
    { id: 'PHL310', title: 'Political Philosophy', description: 'Justice, rights, liberty, and equality. Hobbes, Locke, Rousseau, Marx, Rawls, and Nozick on the ideal society.', credits: 1, category: 'major-elective', interestTags: ['philosophy', 'history'], prereqs: ['PHL101'], clusterGroup: 'philosophy', genEdReqs: [] },
    { id: 'PHL330', title: 'Advanced Ethics: Moral Theory', description: 'Deep dive into consequentialism, contractualism, moral realism, and metaethics. Contemporary debates in normative theory.', credits: 1, category: 'major-elective', interestTags: ['philosophy'], prereqs: ['PHL201'], clusterGroup: 'philosophy', genEdReqs: [] },
    { id: 'PHL340', title: 'Formal Logic', description: 'Predicate logic, natural deduction, completeness, soundness, and an introduction to modal logic.', credits: 1, category: 'major-elective', interestTags: ['philosophy', 'game-theory'], prereqs: ['PHL210'], clusterGroup: 'philosophy', genEdReqs: [] },
    { id: 'PHL350', title: 'Philosophy of Language', description: 'Meaning, reference, truth, speech acts, and the relationship between language and thought. Frege, Russell, Wittgenstein, and Kripke.', credits: 1, category: 'major-elective', interestTags: ['philosophy'], prereqs: ['PHL101'], clusterGroup: 'philosophy', genEdReqs: [] },
    { id: 'PHL320', title: 'Metaphysics', description: 'Fundamental nature of reality: existence, identity, causation, time, free will, and possible worlds.', credits: 1, category: 'major-elective', interestTags: ['philosophy'], prereqs: ['PHL101'], clusterGroup: 'philosophy', genEdReqs: [] },

    // Political Science depth
    { id: 'PSC200', title: 'International Relations', description: 'Theories of war and peace, alliances, international institutions, globalization, and human rights.', credits: 1, category: 'major-elective', interestTags: ['history'], prereqs: ['PSC101'], clusterGroup: 'political-science', genEdReqs: [] },
    { id: 'PSC215', title: 'Political Economy', description: 'Interaction of politics and markets. Trade policy, redistribution, development, inequality, and the welfare state.', credits: 1, category: 'major-elective', interestTags: ['game-theory'], prereqs: ['PSC101'], clusterGroup: 'political-science', genEdReqs: [] },
    { id: 'PSC230', title: 'American Politics', description: 'Congress, the presidency, courts, parties, elections, public opinion, and political polarization in the United States.', credits: 1, category: 'major-elective', interestTags: ['history'], prereqs: ['PSC101'], clusterGroup: 'political-science', genEdReqs: [] },
    { id: 'PSC310', title: 'Game Theory & Politics', description: 'Formal models of political behavior: voting, coalition formation, bargaining, and strategic interaction among political actors.', credits: 1, category: 'major-elective', interestTags: ['game-theory'], prereqs: ['PSC101', 'ECO207'], clusterGroup: 'political-science', genEdReqs: [] },
    { id: 'PSC350', title: 'Public Policy Analysis', description: 'Policy design, implementation, and evaluation. Cost-benefit analysis, regulatory policy, and evidence-based policymaking.', credits: 1, category: 'major-elective', interestTags: [], prereqs: ['PSC101'], clusterGroup: 'political-science', genEdReqs: [] },

    // ===== MATH =====
    { id: 'MTH161', title: 'Calculus IA', description: 'Functions, limits, derivatives, and applications. First semester of calculus sequence.', credits: 1, category: 'elective', interestTags: [], prereqs: [], genEdReqs: [] },
    { id: 'MTH162', title: 'Calculus IIA', description: 'Integration, techniques of integration, sequences, series, and applications.', credits: 1, category: 'elective', interestTags: [], prereqs: ['MTH161'], genEdReqs: [] },
    { id: 'MTH165', title: 'Linear Algebra', description: 'Vector spaces, matrices, determinants, eigenvalues, linear transformations, and applications to data science and economics.', credits: 1, category: 'elective', interestTags: [], prereqs: ['MTH162'], clusterGroup: 'math', genEdReqs: [] },
    { id: 'MTH201', title: 'Introduction to Probability', description: 'Combinatorics, random variables, distributions, expectation, law of large numbers, and the central limit theorem.', credits: 1, category: 'elective', interestTags: [], prereqs: ['MTH162'], clusterGroup: 'math', genEdReqs: [] },

    // ===== CERAMICS / STUDIO ART =====
    { id: 'SA161', title: 'Ceramics I', description: 'Hand-building and wheel-throwing techniques. Clay chemistry, glazing, and firing. Open studio access.', credits: 1, category: 'elective', interestTags: ['ceramics'], prereqs: [], clusterGroup: 'studio-art', genEdReqs: [] },
    { id: 'SA261', title: 'Ceramics II: Form & Surface', description: 'Advanced wheel work, surface decoration, glaze formulation, and kiln firing techniques. Personal aesthetic development.', credits: 1, category: 'elective', interestTags: ['ceramics'], prereqs: ['SA161'], clusterGroup: 'studio-art', genEdReqs: [] },
    { id: 'SA361', title: 'Ceramics III: Advanced Projects', description: 'Independent ceramic projects. Sculptural and functional forms, alternative firing, exhibition preparation.', credits: 1, category: 'elective', interestTags: ['ceramics'], prereqs: ['SA261'], clusterGroup: 'studio-art', genEdReqs: [] },
    { id: 'SA100', title: 'Introduction to Studio Art', description: 'Fundamentals of visual art-making. Drawing, painting, sculpture, and digital media. No prior experience needed.', credits: 1, category: 'elective', interestTags: ['ceramics'], prereqs: [], clusterGroup: 'studio-art', genEdReqs: [] },
    { id: 'SA110', title: 'Drawing I', description: 'Observational and expressive drawing. Graphite, charcoal, ink, and mixed media. Composition and visual problem-solving.', credits: 1, category: 'elective', interestTags: ['ceramics'], prereqs: [], clusterGroup: 'studio-art', genEdReqs: [] },
    { id: 'SA171', title: 'Sculpture I', description: 'Three-dimensional art: carving, casting, construction, and installation. Conceptual and material exploration.', credits: 1, category: 'elective', interestTags: ['ceramics'], prereqs: [], clusterGroup: 'studio-art', genEdReqs: [] },

    // ===== ASTRONOMY / SPACE =====
    { id: 'AST104', title: 'Astronomy Survey', description: 'Modern astronomy for non-scientists: planets, stars, black holes, galaxies, and the expanding universe. Planetarium visits.', credits: 1, category: 'elective', interestTags: ['astronomy', 'space', 'science'], prereqs: [], clusterGroup: 'astronomy', genEdReqs: [] },
    { id: 'AST106', title: 'The Solar System', description: 'Planets, moons, comets, and asteroids. Planetary formation, geology, atmospheres, and the search for exoplanets.', credits: 1, category: 'elective', interestTags: ['astronomy', 'space', 'science'], prereqs: [], clusterGroup: 'astronomy', genEdReqs: [] },
    { id: 'AST200', title: 'Observational Astrophysics', description: 'Telescope techniques, CCD imaging, spectroscopy, and astronomical data analysis. Nighttime observing sessions at the C.E.K. Mees Observatory.', credits: 1, category: 'elective', interestTags: ['astronomy', 'space', 'science'], prereqs: ['AST104'], clusterGroup: 'astronomy', genEdReqs: [] },
    { id: 'AST203', title: 'Origins: From the Big Bang to Life', description: 'How the universe, galaxies, stars, planets, and life formed. Cosmology, stellar evolution, and astrobiology.', credits: 1, category: 'elective', interestTags: ['astronomy', 'space', 'science'], prereqs: [], clusterGroup: 'astronomy', genEdReqs: [] },
    { id: 'AST231', title: 'Stellar Astrophysics', description: 'Physics of stars: nuclear fusion, energy transport, stellar structure, evolution, and endpoints (white dwarfs, neutron stars, black holes).', credits: 1, category: 'elective', interestTags: ['astronomy', 'space', 'science'], prereqs: ['AST104', 'MTH161'], clusterGroup: 'astronomy', genEdReqs: [] },
    { id: 'AST232', title: 'Galaxies & Cosmology', description: 'Structure and evolution of galaxies. Dark matter, dark energy, cosmic microwave background, and the fate of the universe.', credits: 1, category: 'elective', interestTags: ['astronomy', 'space', 'science'], prereqs: ['AST104', 'MTH161'], clusterGroup: 'astronomy', genEdReqs: [] },
    { id: 'PHY113', title: 'General Physics I', description: 'Mechanics, waves, and thermodynamics with lab. Algebra-based for non-majors.', credits: 1, category: 'elective', interestTags: ['space', 'science'], prereqs: [], clusterGroup: 'astronomy', genEdReqs: [] },

    // ===== HISTORY =====
    { id: 'HIS100', title: 'Methods of Historical Inquiry', description: 'How historians think: primary sources, evidence, argument, and narrative construction.', credits: 1, category: 'elective', interestTags: ['history'], prereqs: [], clusterGroup: 'history', genEdReqs: [] },
    { id: 'HIS150', title: 'World History Since 1500', description: 'Global connections from early modern period to present. Colonialism, revolution, world wars, and decolonization.', credits: 1, category: 'elective', interestTags: ['history'], prereqs: [], clusterGroup: 'history', genEdReqs: [] },
    { id: 'HIS205', title: 'East Asian History', description: 'China, Japan, and Korea from imperial eras to the present. Political, cultural, and economic transformations.', credits: 1, category: 'elective', interestTags: ['history', 'cultural-studies'], prereqs: [], clusterGroup: 'history', genEdReqs: [] },
    { id: 'HIS225', title: 'Modern Japan', description: 'Meiji restoration to contemporary Japan. Industrialization, militarism, postwar miracle, and cultural globalization.', credits: 1, category: 'elective', interestTags: ['history', 'cultural-studies'], prereqs: [], clusterGroup: 'history', genEdReqs: [] },
    { id: 'HIS260', title: 'History of Science', description: 'Scientific thought from ancient Greece to quantum mechanics and beyond. Revolutions, paradigm shifts, science and society.', credits: 1, category: 'elective', interestTags: ['history', 'space'], prereqs: [], clusterGroup: 'history', genEdReqs: [] },
    { id: 'HIS280', title: 'The Space Age', description: 'History of space exploration from Sputnik to Mars rovers. Cold War competition, Apollo, and the future of spaceflight.', credits: 1, category: 'elective', interestTags: ['history', 'space', 'astronomy'], prereqs: [], clusterGroup: 'history', genEdReqs: [] },
    { id: 'HIST121', title: 'Ancient Greece', description: 'Greek civilization from the Bronze Age to Alexander. Democracy, philosophy, theater, and the Greek legacy.', credits: 1, category: 'elective', interestTags: ['history', 'classics'], prereqs: [], clusterGroup: 'history', genEdReqs: [] },
    { id: 'HIST122', title: 'Ancient Rome', description: 'Roman Republic and Empire. Law, engineering, expansion, and the fall. What Rome built and what endured.', credits: 1, category: 'elective', interestTags: ['history', 'classics'], prereqs: [], clusterGroup: 'history', genEdReqs: [] },
    { id: 'HIST200', title: 'Modern Europe: 1789 to Present', description: 'Revolutions, nationalism, world wars, the Holocaust, Cold War, and European integration.', credits: 1, category: 'elective', interestTags: ['history'], prereqs: [], clusterGroup: 'history', genEdReqs: [] },

    // ===== ASIAN AMERICAN / IDENTITY =====
    { id: 'AAS100', title: 'Introduction to Asian American Studies', description: 'History, culture, and experience of Asian Americans. Immigration, exclusion, identity, and contemporary issues.', credits: 1, category: 'elective', interestTags: ['cultural-studies', 'history'], prereqs: [], clusterGroup: 'asian-american-studies', genEdReqs: [] },
    { id: 'AAS210', title: 'Asian Americans & Popular Culture', description: 'Representation of Asian Americans in media, film, music, and digital culture. Stereotypes and counter-narratives.', credits: 1, category: 'elective', interestTags: ['cultural-studies', 'video-games'], prereqs: [], clusterGroup: 'asian-american-studies', genEdReqs: [] },
    { id: 'AAS250', title: 'Race & Identity in America', description: 'Racial formation theory, intersectionality, and the construction of racial identity in the United States.', credits: 1, category: 'elective', interestTags: ['cultural-studies', 'history'], prereqs: [], clusterGroup: 'asian-american-studies', genEdReqs: [] },

    // ===== GAME DESIGN / VIDEO GAMES / DIGITAL MEDIA =====
    { id: 'CSC171', title: 'Introduction to Computer Science', description: 'Programming in Java. Problem-solving, data structures, algorithms, and object-oriented design.', credits: 1, category: 'elective', interestTags: ['video-games'], prereqs: [], clusterGroup: 'cs', genEdReqs: [] },
    { id: 'CSC170', title: 'Introduction to Web Development', description: 'HTML, CSS, JavaScript, and web application fundamentals. Building interactive websites.', credits: 1, category: 'elective', interestTags: ['video-games', 'design'], prereqs: [], clusterGroup: 'cs', genEdReqs: [] },
    { id: 'DMS103', title: 'Digital Media & Visual Culture', description: 'How digital media shapes visual culture. Photography, video, interactive media, and virtual environments.', credits: 1, category: 'elective', interestTags: ['video-games', 'design'], prereqs: [], clusterGroup: 'digital-media', genEdReqs: [] },
    { id: 'DMS210', title: 'Interactive Digital Media', description: 'Creating interactive experiences. Animation, interactivity, game mechanics, and user engagement.', credits: 1, category: 'elective', interestTags: ['video-games', 'design'], prereqs: ['DMS103'], clusterGroup: 'digital-media', genEdReqs: [] },
    { id: 'DMS310', title: 'UX/UI Design Studio', description: 'User research, wireframing, prototyping in Figma, and iterative design. Build a complete design case study from research to high-fidelity mockup.', credits: 1, category: 'elective', interestTags: ['design', 'video-games'], prereqs: ['DMS103'], clusterGroup: 'digital-media', genEdReqs: [] },
    { id: 'DMS250', title: 'Data Visualization & Information Design', description: 'Principles of visual communication, chart design, interactive dashboards, and narrative data storytelling using D3.js and Tableau.', credits: 1, category: 'elective', interestTags: ['design'], prereqs: [], clusterGroup: 'digital-media', genEdReqs: [] },

    // ===== LITERATURE =====
    { id: 'ENG101', title: 'Introduction to Literary Studies', description: 'How to read closely and write analytically about literature. Fiction, poetry, drama, and critical theory.', credits: 1, category: 'elective', interestTags: ['literature'], prereqs: [], clusterGroup: 'literature', genEdReqs: [] },
    { id: 'ENG225', title: 'Asian American Literature', description: 'Literature by Asian American writers. Immigration, identity, generational conflict, and cultural negotiation.', credits: 1, category: 'elective', interestTags: ['literature', 'cultural-studies'], prereqs: [], clusterGroup: 'literature', genEdReqs: [] },
    { id: 'ENG250', title: 'Creative Writing: Fiction', description: 'Workshop in short fiction. Craft elements, peer critique, and revision. Small class, intensive feedback.', credits: 1, category: 'elective', interestTags: ['literature'], prereqs: [], clusterGroup: 'literature', genEdReqs: [] },
    { id: 'ENG275', title: 'Science Fiction', description: 'The science fiction genre from Mary Shelley to the present. Technology, society, utopia, and dystopia.', credits: 1, category: 'elective', interestTags: ['literature', 'space'], prereqs: [], clusterGroup: 'literature', genEdReqs: [] },
    { id: 'ENG290', title: 'Japanese Literature in Translation', description: 'Major Japanese literary works: The Tale of Genji, Bashō, Mishima, Murakami. Cultural context and literary innovation.', credits: 1, category: 'elective', interestTags: ['literature', 'cultural-studies'], prereqs: [], clusterGroup: 'literature', genEdReqs: [] },
    { id: 'ENG310', title: 'Graphic Novels & Visual Narrative', description: 'Comics and graphic novels as literary and artistic form. Maus, Persepolis, manga, and indie graphic novels.', credits: 1, category: 'elective', interestTags: ['literature', 'video-games'], prereqs: [], clusterGroup: 'literature', genEdReqs: [] },
    { id: 'CLS210', title: 'Greek & Roman Literature', description: 'Homer, Sophocles, Virgil, Ovid. Epic, tragedy, comedy, and lyric from the ancient world.', credits: 1, category: 'elective', interestTags: ['literature', 'classics'], prereqs: [], clusterGroup: 'literature', genEdReqs: [] },
    { id: 'RUS200', title: 'Russian Literature in Translation', description: 'Pushkin, Dostoevsky, Tolstoy, Chekhov. Moral philosophy, realism, and the Russian literary imagination.', credits: 1, category: 'elective', interestTags: ['literature'], prereqs: [], clusterGroup: 'literature', genEdReqs: [] },

    // ===== GEN-ED / OTHER =====
    { id: 'WRT105', title: 'Writing & the Arts of Language', description: 'College writing seminar. Argument, evidence, revision, and rhetorical strategies. Required for all first-years.', credits: 1, category: 'gen-ed', interestTags: [], prereqs: [], genEdReqs: ['writing'] },
    { id: 'PSY101', title: 'Introduction to Psychology', description: 'Scientific study of mind and behavior. Brain, perception, learning, memory, development, and social psychology.', credits: 1, category: 'elective', interestTags: [], prereqs: [], clusterGroup: 'psychology', genEdReqs: [] },
    { id: 'MUR101', title: 'Introduction to Music', description: 'Exploring music through listening, history, and theory. Eastman School of Music connection enriches the experience.', credits: 1, category: 'elective', interestTags: [], prereqs: [], clusterGroup: 'music', genEdReqs: [] },
    { id: 'MUR207', title: 'History of Jazz', description: 'Jazz from its origins to the present. Blues, swing, bebop, modal jazz, free jazz, and fusion.', credits: 1, category: 'elective', interestTags: ['history'], prereqs: [], clusterGroup: 'music', genEdReqs: [] },
    { id: 'ANT103', title: 'Cultural Anthropology', description: 'Human cultural diversity, kinship, religion, economics, and political organization across societies.', credits: 1, category: 'elective', interestTags: [], prereqs: [], clusterGroup: 'anthropology', genEdReqs: [] },

    // ===== BRAIN & COGNITIVE SCIENCES =====
    { id: 'BCS110', title: 'Introduction to Cognitive Science', description: 'Interdisciplinary study of the mind: perception, memory, language, reasoning, and consciousness. Perspectives from psychology, neuroscience, AI, and philosophy.', credits: 1, category: 'elective', interestTags: ['philosophy'], prereqs: [], clusterGroup: 'brain-cog-sci', genEdReqs: [] },
    { id: 'BCS240', title: 'Cognitive Psychology', description: 'Attention, memory, categorization, problem-solving, and decision-making. Classic experiments and current computational models.', credits: 1, category: 'elective', interestTags: ['philosophy'], prereqs: ['BCS110'], clusterGroup: 'brain-cog-sci', genEdReqs: [] },
    { id: 'BCS380', title: 'Judgment & Decision-Making', description: 'Heuristics, biases, prospect theory, neuroeconomics, and the science of rational and irrational choice.', credits: 1, category: 'elective', interestTags: ['game-theory', 'philosophy'], prereqs: ['BCS110'], clusterGroup: 'brain-cog-sci', genEdReqs: [] },
    { id: 'BCS360', title: 'Computational Cognitive Science', description: 'Bayesian models, neural networks, reinforcement learning, and rational analysis applied to human cognition and behavior.', credits: 1, category: 'elective', interestTags: ['game-theory'], prereqs: ['BCS110', 'STT211'], clusterGroup: 'brain-cog-sci', genEdReqs: [] },

    // ===== COMPUTER SCIENCE (upper-division) =====
    { id: 'CSC172', title: 'Data Structures & Algorithms', description: 'Lists, trees, graphs, sorting, searching, and algorithm analysis. Foundation for all upper-level CS.', credits: 1, category: 'elective', interestTags: ['video-games'], prereqs: ['CSC171'], clusterGroup: 'cs', genEdReqs: [] },
    { id: 'CSC280', title: 'Introduction to Artificial Intelligence', description: 'Search, knowledge representation, probabilistic reasoning, machine learning, natural language processing, and ethical AI.', credits: 1, category: 'elective', interestTags: ['game-theory', 'philosophy'], prereqs: ['CSC172'], clusterGroup: 'cs', genEdReqs: [] },

    // ===== STATISTICS =====
    { id: 'STT212', title: 'Applied Statistics II', description: 'Multiple regression, ANOVA, experimental design, and nonparametric methods. Emphasis on real data applications.', credits: 1, category: 'elective', interestTags: [], prereqs: ['STT211'], clusterGroup: 'statistics', genEdReqs: [] },
    { id: 'STT340', title: 'Data Mining & Machine Learning', description: 'Classification, clustering, decision trees, random forests, support vector machines, and cross-validation. Large-scale data analysis.', credits: 1, category: 'elective', interestTags: [], prereqs: ['STT212'], clusterGroup: 'statistics', genEdReqs: [] },

    // ===== SOCIOLOGY =====
    { id: 'SOC101', title: 'Introduction to Sociology', description: 'Social structures, institutions, inequality, and culture. How society shapes individual behavior and how individuals reshape society.', credits: 1, category: 'elective', interestTags: ['cultural-studies'], prereqs: [], clusterGroup: 'sociology', genEdReqs: [] },
    { id: 'SOC205', title: 'Social Inequality', description: 'Class, race, gender, and their intersections. Theories of stratification, mobility, wealth concentration, and the reproduction of privilege.', credits: 1, category: 'elective', interestTags: ['cultural-studies', 'history'], prereqs: ['SOC101'], clusterGroup: 'sociology', genEdReqs: [] },

    // ===== ENVIRONMENTAL STUDIES =====
    { id: 'ENV101', title: 'Introduction to Environmental Science', description: 'Ecosystems, biodiversity, climate science, pollution, and resource depletion. The scientific basis for environmental policy.', credits: 1, category: 'elective', interestTags: [], prereqs: [], clusterGroup: 'environmental', genEdReqs: [] },
    { id: 'ENV210', title: 'Climate Change: Science & Policy', description: 'Atmospheric science, carbon cycles, climate modeling, international negotiations, and the economics of decarbonization.', credits: 1, category: 'elective', interestTags: ['history'], prereqs: [], clusterGroup: 'environmental', genEdReqs: [] },
    { id: 'ENV240', title: 'Environmental Justice', description: 'Unequal distribution of environmental harms by race and class. Toxic exposure, food deserts, disaster vulnerability, and grassroots activism.', credits: 1, category: 'elective', interestTags: ['cultural-studies', 'history'], prereqs: [], clusterGroup: 'environmental', genEdReqs: [] },

    // ===== LINGUISTICS =====
    { id: 'LIN101', title: 'Introduction to Linguistics', description: 'The scientific study of language: phonetics, phonology, morphology, syntax, semantics, and pragmatics. How languages work and how they differ.', credits: 1, category: 'elective', interestTags: ['philosophy'], prereqs: [], clusterGroup: 'linguistics', genEdReqs: [] },
    { id: 'LIN250', title: 'Semantics', description: 'Formal approaches to meaning: compositionality, quantification, tense, modality, and the syntax-semantics interface. Logic meets natural language.', credits: 1, category: 'elective', interestTags: ['philosophy'], prereqs: ['LIN101'], clusterGroup: 'linguistics', genEdReqs: [] },
    { id: 'LIN270', title: 'Sociolinguistics', description: 'Language variation by region, class, gender, and ethnicity. Code-switching, dialect prestige, language change in progress, and linguistic identity.', credits: 1, category: 'elective', interestTags: ['cultural-studies'], prereqs: ['LIN101'], clusterGroup: 'linguistics', genEdReqs: [] },
  ],
};
