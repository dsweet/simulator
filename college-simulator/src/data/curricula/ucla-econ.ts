import { Curriculum } from '../../types';

export const uclaEcon: Curriculum = {
  schoolId: 'ucla',
  program: 'Economics',
  degreeRequirements: {
    totalCredits: 180, // quarter credits
    majorCredits: 76,
    genEdCredits: 60,
    electiveCredits: 44,
    majorCourses: [
      'ECON1', 'ECON2', 'ECON11', 'ECON41',
      'ECON101', 'ECON102', 'ECON103', 'ECON104',
      'MATH31A', 'MATH31B',
    ],
    genEdCategories: [
      { id: 'writing', name: 'English Composition', creditsRequired: 10, satisfiedBy: ['ENGCOMP3', 'ENGCOMP3H'] },
      { id: 'quantitative', name: 'Quantitative Reasoning', creditsRequired: 5, satisfiedBy: ['MATH31A', 'MATH31B'] },
      { id: 'natural-science', name: 'Physical Sciences / Life Sciences', creditsRequired: 10, satisfiedBy: ['ASTRO3', 'PHYSICS1', 'EPS1', 'CHEM14A', 'LS7A'] },
      { id: 'social-science', name: 'Social Analysis', creditsRequired: 10, satisfiedBy: ['ECON1', 'POLSCI10', 'PSYCH10', 'SOCIOL1'] },
      { id: 'humanities', name: 'Philosophical & Linguistic Analysis / Literary & Cultural Analysis', creditsRequired: 10, satisfiedBy: ['PHILOS1', 'ENGL1A', 'COMP1', 'ARTVIS10'] },
      { id: 'diversity', name: 'Diversity', creditsRequired: 5, satisfiedBy: ['ASAMST1', 'ETHNSTD1', 'LGBTQS5'] },
    ],
  },
  recommendedSequence: {
    years: 2,
    terms: [
      // YEAR 1 — Intro econ + calculus sequence + GE foundations
      {
        termLabel: 'Fall Year 1',
        courses: ['ECON1', 'MATH31A', 'ENGCOMP3', 'ASTRO3'],
        locked: [true, true, false, false],
        slotLabels: ['Major req (Intro Micro)', 'Major req (Calculus I)', 'English Composition GE (choose one)', 'Physical/Life Sciences GE (choose one)'],
      },
      {
        termLabel: 'Winter Year 1',
        courses: ['ECON2', 'MATH31B', 'PHILOS1', 'PSYCH10'],
        locked: [true, true, false, false],
        slotLabels: ['Major req (Intro Macro)', 'Major req (Calculus II)', 'Humanities GE (choose one)', 'Social Analysis GE (choose one)'],
      },
      {
        termLabel: 'Spring Year 1',
        courses: ['ECON11', 'ECON41', 'ASAMST1', 'LS7A'],
        locked: [true, true, false, false],
        slotLabels: ['Major req (Math for Economists)', 'Major req (Statistics)', 'Diversity GE (choose one)', 'Physical/Life Sciences GE (choose one)'],
      },
      // YEAR 2 — Intermediate theory + econometrics + interest electives
      {
        termLabel: 'Fall Year 2',
        courses: ['ECON101', 'ECON102', 'ENGL1A', 'ART11A'],
        locked: [true, true, false, false],
        slotLabels: ['Major req (Micro Theory)', 'Major req (Macro Theory)', 'Humanities GE (choose one)', 'Interest elective (choose one)'],
      },
      {
        termLabel: 'Winter Year 2',
        courses: ['ECON103', 'ECON106G', 'ETHNSTD1', 'HIST1B'],
        locked: [true, false, false, false],
        slotLabels: ['Major req (Intro Econometrics)', 'Econ elective (choose one)', 'Diversity/Social Analysis GE (choose one)', 'Interest elective (choose one)'],
      },
      {
        termLabel: 'Spring Year 2',
        courses: ['ECON104', 'ECON106V', 'DESMA10', 'POLSCI10'],
        locked: [true, false, false, false],
        slotLabels: ['Major req (Adv Econometrics)', 'Econ elective (choose one)', 'Interest elective (choose one)', 'Social Analysis GE (choose one)'],
      },
    ],
  },
  courses: [
    // ===== ECONOMICS MAJOR REQUIRED =====
    { id: 'ECON1', title: 'Principles of Economics', description: 'Introduction to microeconomics: scarcity, supply/demand, market structures, and efficiency.', credits: 5, category: 'major-required', interestTags: ['game-theory'], prereqs: [], genEdReqs: ['social-science'] },
    { id: 'ECON2', title: 'Principles of Economics', description: 'Introduction to macroeconomics: GDP, unemployment, inflation, fiscal and monetary policy.', credits: 5, category: 'major-required', interestTags: [], prereqs: [], genEdReqs: ['social-science'] },
    { id: 'ECON11', title: 'Mathematics for Economists', description: 'Mathematical methods for economics: optimization, linear algebra, and multivariate calculus applications.', credits: 5, category: 'major-required', interestTags: [], prereqs: ['MATH31A', 'MATH31B'], genEdReqs: [] },
    { id: 'ECON41', title: 'Statistics for Economists', description: 'Probability, sampling distributions, estimation, hypothesis testing, and regression for economic analysis.', credits: 5, category: 'major-required', interestTags: [], prereqs: ['MATH31B'], genEdReqs: [] },
    { id: 'ECON101', title: 'Microeconomic Theory', description: 'Consumer and producer theory, general equilibrium, welfare economics, and introduction to game theory.', credits: 4, category: 'major-required', interestTags: ['game-theory'], prereqs: ['ECON11'], genEdReqs: [] },
    { id: 'ECON102', title: 'Macroeconomic Theory', description: 'Growth, business cycles, monetary/fiscal policy, and open-economy macroeconomics.', credits: 4, category: 'major-required', interestTags: [], prereqs: ['ECON11'], genEdReqs: [] },
    { id: 'ECON103', title: 'Introduction to Econometrics', description: 'Regression analysis, hypothesis testing, and empirical methods for economic research.', credits: 4, category: 'major-required', interestTags: [], prereqs: ['ECON41', 'ECON101'], genEdReqs: [] },
    { id: 'ECON104', title: 'Advanced Econometrics', description: 'Panel data, instrumental variables, differences-in-differences, and causal inference methods.', credits: 4, category: 'major-required', interestTags: [], prereqs: ['ECON103'], genEdReqs: [] },
    { id: 'MATH31A', title: 'Differential & Integral Calculus', description: 'Derivatives, integrals, and applications. Single-variable calculus for social science students.', credits: 4, category: 'major-required', interestTags: [], prereqs: [], genEdReqs: ['quantitative'] },
    { id: 'MATH31B', title: 'Integration & Infinite Series', description: 'Techniques of integration, improper integrals, sequences, and infinite series.', credits: 4, category: 'major-required', interestTags: [], prereqs: ['MATH31A'], genEdReqs: ['quantitative'] },

    // ===== ECONOMICS ELECTIVES =====
    { id: 'ECON106G', title: 'Game Theory', description: 'Strategic interaction in economics and social science. Nash equilibrium, extensive form games, bargaining, auctions, and mechanism design.', credits: 4, category: 'major-elective', interestTags: ['game-theory'], prereqs: ['ECON101'], genEdReqs: [] },
    { id: 'ECON106V', title: 'Behavioral Economics', description: 'Psychology meets economics. Bounded rationality, prospect theory, mental accounting, and nudge policy.', credits: 4, category: 'major-elective', interestTags: ['game-theory'], prereqs: ['ECON101'], genEdReqs: [] },
    { id: 'ECON106F', title: 'Finance', description: 'Financial markets, asset pricing, portfolio theory, risk management, and corporate finance.', credits: 4, category: 'major-elective', interestTags: [], prereqs: ['ECON101'], genEdReqs: [] },
    { id: 'ECON106I', title: 'Industrial Organization', description: 'Firm strategy, market power, pricing, antitrust, and platform economics.', credits: 4, category: 'major-elective', interestTags: ['game-theory'], prereqs: ['ECON101'], genEdReqs: [] },
    { id: 'ECON106L', title: 'Labor Economics', description: 'Wages, human capital, discrimination, immigration, unions, and education returns.', credits: 4, category: 'major-elective', interestTags: [], prereqs: ['ECON101'], genEdReqs: [] },
    { id: 'ECON106T', title: 'International Trade', description: 'Trade theory, globalization, trade agreements, tariffs, and effects on developing economies.', credits: 4, category: 'major-elective', interestTags: [], prereqs: ['ECON101'], genEdReqs: [] },
    { id: 'ECON106D', title: 'Development Economics', description: 'Poverty, growth, institutions, health, education, and aid effectiveness in developing countries.', credits: 4, category: 'major-elective', interestTags: [], prereqs: ['ECON101'], genEdReqs: [] },
    { id: 'ECON106P', title: 'Environmental Economics', description: 'Climate change economics, carbon pricing, environmental regulation, and sustainable development.', credits: 4, category: 'major-elective', interestTags: [], prereqs: ['ECON101'], genEdReqs: [] },
    { id: 'ECON106H', title: 'Health Economics', description: 'Healthcare markets, insurance, moral hazard, public health policy, and the economics of pharmaceuticals.', credits: 4, category: 'major-elective', interestTags: [], prereqs: ['ECON101'], genEdReqs: [] },
    { id: 'ECON106U', title: 'Urban Economics', description: 'Housing markets, land use, transportation, spatial inequality, and the economics of cities.', credits: 4, category: 'major-elective', interestTags: [], prereqs: ['ECON101'], genEdReqs: [] },
    { id: 'ECON107', title: 'History of Economic Thought', description: 'From Adam Smith to Keynes to modern heterodox traditions. How economic ideas shaped and were shaped by history.', credits: 4, category: 'major-elective', interestTags: ['history'], prereqs: ['ECON101'], genEdReqs: [] },
    { id: 'ECON130', title: 'Public Economics', description: 'Taxation, public goods, externalities, social insurance, and the economic role of government.', credits: 4, category: 'major-elective', interestTags: [], prereqs: ['ECON101'], genEdReqs: [] },
    { id: 'ECON137', title: 'Environmental and Resource Economics', description: 'Natural resource management, pollution control, cost-benefit analysis, and sustainability policy.', credits: 4, category: 'major-elective', interestTags: [], prereqs: ['ECON101'], genEdReqs: [] },
    { id: 'ECON145', title: 'Law and Economics', description: 'Economic analysis of legal rules. Property rights, contracts, torts, crime, and regulation through an efficiency lens.', credits: 4, category: 'major-elective', interestTags: ['game-theory'], prereqs: ['ECON101'], genEdReqs: [] },
    { id: 'ECON160A', title: 'International Finance', description: 'Exchange rates, balance of payments, capital flows, currency crises, and the international monetary system.', credits: 4, category: 'major-elective', interestTags: [], prereqs: ['ECON102'], genEdReqs: [] },
    { id: 'ECON160B', title: 'International Macroeconomics', description: 'Open-economy models, sovereign debt, global imbalances, and monetary policy in an interconnected world.', credits: 4, category: 'major-elective', interestTags: [], prereqs: ['ECON102'], genEdReqs: [] },
    { id: 'ECON171', title: 'Political Economy', description: 'Voting, lobbying, institutions, and corruption. How political incentives shape economic outcomes.', credits: 4, category: 'major-elective', interestTags: ['game-theory'], prereqs: ['ECON101'], genEdReqs: [] },
    { id: 'ECON180', title: 'Special Topics: Economics of Technology', description: 'Network effects, platform competition, data markets, digital advertising, and regulation of tech firms.', credits: 4, category: 'major-elective', interestTags: ['design'], prereqs: ['ECON101'], genEdReqs: [] },

    // ===== CERAMICS / STUDIO ART =====
    { id: 'ARTVIS10', title: 'Introduction to Visual Culture', description: 'Art and visual communication across cultures and media. How images construct meaning.', credits: 5, category: 'elective', interestTags: ['ceramics', 'design'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'ART11A', title: 'Ceramics I', description: 'Hand-building and wheel-throwing. Clay preparation, glazing techniques, and kiln operation. Open studio.', credits: 4, category: 'elective', interestTags: ['ceramics'], prereqs: [], genEdReqs: [] },
    { id: 'ART11B', title: 'Ceramics II', description: 'Intermediate ceramics: advanced wheel forms, surface decoration, glaze chemistry, and sculptural approaches.', credits: 4, category: 'elective', interestTags: ['ceramics'], prereqs: ['ART11A'], genEdReqs: [] },
    { id: 'ART11C', title: 'Ceramics III: Advanced Studio', description: 'Personal artistic vision in clay. Large-scale work, mixed media, exhibition preparation. Individual critiques.', credits: 4, category: 'elective', interestTags: ['ceramics'], prereqs: ['ART11B'], genEdReqs: [] },
    { id: 'ART1A', title: 'Drawing I', description: 'Fundamentals of drawing: observation, composition, value, and mark-making. Various media.', credits: 4, category: 'elective', interestTags: ['ceramics'], prereqs: [], genEdReqs: [] },
    { id: 'ART15', title: 'Sculpture I', description: 'Three-dimensional art. Carving, casting, welding, and mixed-media construction.', credits: 4, category: 'elective', interestTags: ['ceramics'], prereqs: [], genEdReqs: [] },

    // ===== ASTRONOMY / SPACE =====
    { id: 'ASTRO3', title: 'Nature of the Universe', description: 'Modern astronomy for non-science majors: planets, stars, galaxies, black holes, dark matter, and cosmology.', credits: 5, category: 'elective', interestTags: ['astronomy', 'space'], prereqs: [], genEdReqs: ['natural-science'] },
    { id: 'ASTRO4', title: 'Cosmic Evolution', description: 'History of the universe from the Big Bang to the present. Formation of galaxies, stars, and planets.', credits: 5, category: 'elective', interestTags: ['astronomy', 'space'], prereqs: [], genEdReqs: ['natural-science'] },
    { id: 'EPS1', title: 'Introduction to Earth Science', description: 'Plate tectonics, minerals, rocks, volcanoes, earthquakes, and Earth\'s history. Lab included.', credits: 5, category: 'elective', interestTags: ['space'], prereqs: [], genEdReqs: ['natural-science'] },
    { id: 'EPS15', title: 'Planets & Their Environments', description: 'Planetary science: atmospheres, surfaces, interiors, and magnetic fields of planets in our solar system and beyond.', credits: 5, category: 'elective', interestTags: ['astronomy', 'space'], prereqs: [], genEdReqs: ['natural-science'] },
    { id: 'EPS200', title: 'Astrobiology: Life in the Universe', description: 'Origin of life, extremophiles, biosignatures, and the search for life on Mars, Europa, and exoplanets.', credits: 4, category: 'elective', interestTags: ['astronomy', 'space'], prereqs: [], genEdReqs: [] },
    { id: 'PHYSICS1', title: 'Physics for Non-Scientists', description: 'Mechanics, energy, waves, electricity, and modern physics. Conceptual approach, algebra-based.', credits: 5, category: 'elective', interestTags: ['space'], prereqs: [], genEdReqs: ['natural-science'] },

    // ===== HISTORY =====
    { id: 'HIST1A', title: 'World History to 1500', description: 'Global civilizations from prehistory to 1500. Agriculture, empires, religions, and cross-cultural exchange.', credits: 4, category: 'elective', interestTags: ['history'], prereqs: [], genEdReqs: [] },
    { id: 'HIST1B', title: 'World History Since 1500', description: 'The modern world: colonialism, revolution, industrialization, world wars, decolonization, and globalization.', credits: 4, category: 'elective', interestTags: ['history'], prereqs: [], genEdReqs: [] },
    { id: 'HIST8A', title: 'History of East Asia: China', description: 'Chinese civilization from ancient origins to the modern era. Philosophy, governance, art, and revolution.', credits: 4, category: 'elective', interestTags: ['history', 'cultural-studies'], prereqs: [], genEdReqs: [] },
    { id: 'HIST8B', title: 'History of East Asia: Japan', description: 'Japanese history from Heian court culture to anime and J-pop. Samurai, Meiji, empire, and postwar reinvention.', credits: 4, category: 'elective', interestTags: ['history', 'cultural-studies'], prereqs: [], genEdReqs: [] },
    { id: 'HIST13C', title: 'History of the United States', description: 'Modern America from the Gilded Age to the present. Immigration, civil rights, Cold War, and cultural change.', credits: 4, category: 'elective', interestTags: ['history', 'cultural-studies'], prereqs: [], genEdReqs: [] },
    { id: 'HIST191', title: 'History of Science & Medicine', description: 'How scientific and medical knowledge developed and changed societies. From alchemy to genomics.', credits: 4, category: 'elective', interestTags: ['history', 'space'], prereqs: [], genEdReqs: [] },
    { id: 'HIST3A', title: 'Western Civilization: Ancient to Medieval', description: 'Greece, Rome, Christianity, Islam, feudalism, and the medieval world. Foundations of Western thought.', credits: 4, category: 'elective', interestTags: ['history', 'classics'], prereqs: [], genEdReqs: ['social-science'] },
    { id: 'HIST3B', title: 'Western Civilization: Early Modern to Present', description: 'Renaissance, Reformation, Enlightenment, revolutions, world wars, and the postwar world.', credits: 4, category: 'elective', interestTags: ['history'], prereqs: [], genEdReqs: ['social-science'] },
    { id: 'HIST8B', title: 'African History Since 1800', description: 'Colonialism, independence movements, apartheid, and contemporary Africa. Politics, culture, and global connections.', credits: 4, category: 'elective', interestTags: ['history'], prereqs: [], genEdReqs: [] },
    { id: 'HIST127A', title: 'The Roman Republic & Empire', description: 'From Romulus to the fall. Politics, law, engineering, and daily life in the Roman world.', credits: 5, category: 'elective', interestTags: ['history', 'classics'], prereqs: [], genEdReqs: [] },
    { id: 'HIST160', title: 'History of the Islamic World', description: 'Muhammad to the modern era. Caliphates, Crusades, Ottoman Empire, and contemporary politics.', credits: 5, category: 'elective', interestTags: ['history'], prereqs: [], genEdReqs: [] },

    // ===== ASIAN AMERICAN STUDIES (UCLA has one of the strongest AAS programs) =====
    { id: 'ASAMST1', title: 'Introduction to Asian American Studies', description: 'History, politics, and culture of Asian Americans. Immigration, exclusion, civil rights, and contemporary issues.', credits: 5, category: 'elective', interestTags: ['cultural-studies', 'history'], prereqs: [], genEdReqs: ['diversity'] },
    { id: 'ASAMST10', title: 'History of Asian Americans', description: 'In-depth historical treatment from Chinese exclusion to present. Japanese internment, Korean War, Vietnamese refugees, and modern diaspora.', credits: 4, category: 'elective', interestTags: ['cultural-studies', 'history'], prereqs: [], genEdReqs: [] },
    { id: 'ASAMST20', title: 'Asian Americans & Contemporary Issues', description: 'Model minority myth, anti-Asian hate, mental health, AAPI political participation, and cultural identity.', credits: 4, category: 'elective', interestTags: ['cultural-studies'], prereqs: [], genEdReqs: [] },
    { id: 'ASAMST130', title: 'Asian American Literature', description: 'Fiction, poetry, and memoir by Asian American writers. Maxine Hong Kingston, Chang-rae Lee, Ocean Vuong, and more.', credits: 4, category: 'elective', interestTags: ['cultural-studies', 'literature'], prereqs: [], genEdReqs: [] },
    { id: 'ASAMST135', title: 'Asian Americans in Film & Media', description: 'Representation and self-representation in film, TV, and digital media. From Charlie Chan to Everything Everywhere All at Once.', credits: 4, category: 'elective', interestTags: ['cultural-studies', 'video-games'], prereqs: [], genEdReqs: [] },
    { id: 'ASAMST140', title: 'Japanese American Experience', description: 'Immigration, community building, WWII internment, redress movement, and contemporary Japanese American identity.', credits: 4, category: 'elective', interestTags: ['cultural-studies', 'history'], prereqs: [], genEdReqs: [] },

    // ===== GAME DESIGN / VIDEO GAMES (Design Media Arts + CS) =====
    { id: 'DESMA10', title: 'Design Media Arts: Introduction', description: 'Introduction to digital media art and design. Image, interactivity, and creative coding.', credits: 5, category: 'elective', interestTags: ['design', 'video-games'], prereqs: [], genEdReqs: [] },
    { id: 'DESMA24', title: 'Motion Design', description: 'Animation, motion graphics, and time-based media. Storytelling through movement and visual design.', credits: 4, category: 'elective', interestTags: ['design', 'video-games'], prereqs: ['DESMA10'], genEdReqs: [] },
    { id: 'DESMA157', title: 'Game Design', description: 'Game mechanics, level design, narrative in games, playtesting, and the game development pipeline. Build a complete game.', credits: 4, category: 'elective', interestTags: ['video-games', 'design'], prereqs: ['DESMA10'], genEdReqs: [] },
    { id: 'DESMA159', title: 'Game Art & Interactive Media', description: 'Art direction for games, 3D modeling, texturing, lighting, and environmental storytelling in interactive spaces.', credits: 4, category: 'elective', interestTags: ['video-games', 'design'], prereqs: ['DESMA10'], genEdReqs: [] },
    { id: 'DESMA160', title: 'User Experience Design', description: 'UX research, wireframing, prototyping, and user testing. Designing for web, mobile, and emerging platforms.', credits: 4, category: 'elective', interestTags: ['design'], prereqs: ['DESMA10'], genEdReqs: [] },
    { id: 'COM10', title: 'Introduction to Communication Studies', description: 'Media, technology, and society. How communication shapes culture, politics, and identity.', credits: 5, category: 'elective', interestTags: ['design'], prereqs: [], genEdReqs: [] },

    // ===== LITERATURE =====
    { id: 'ENGL1A', title: 'Introduction to Literature: Poetry', description: 'Reading and interpreting poetry from diverse traditions. Form, language, and meaning.', credits: 5, category: 'elective', interestTags: ['literature'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'ENGL1B', title: 'Introduction to Literature: Prose', description: 'Reading novels and short stories. Narrative structure, character, voice, and critical analysis.', credits: 5, category: 'elective', interestTags: ['literature'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'ENGL90', title: 'Introduction to Creative Writing', description: 'Workshop in fiction and poetry. Craft elements, peer critique, and revision.', credits: 5, category: 'elective', interestTags: ['literature'], prereqs: [], genEdReqs: [] },
    { id: 'COMP1', title: 'Introduction to Comparative Literature', description: 'Literature across languages and cultures. Translation, adaptation, and cross-cultural storytelling.', credits: 5, category: 'elective', interestTags: ['literature'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'JAPAN50', title: 'Japanese Literature in Translation', description: 'Major works of Japanese literature from The Pillow Book to contemporary manga-inspired fiction.', credits: 5, category: 'elective', interestTags: ['literature', 'cultural-studies'], prereqs: [], genEdReqs: [] },
    { id: 'ENGL85', title: 'Science Fiction', description: 'The science fiction tradition from H.G. Wells to Octavia Butler. Technology, society, and speculative futures.', credits: 5, category: 'elective', interestTags: ['literature', 'space'], prereqs: [], genEdReqs: [] },
    { id: 'ENGL10A', title: 'English Literature: Medieval to 1700', description: 'Chaucer, Spenser, Shakespeare, Milton. Poetry, drama, and prose of the English literary tradition.', credits: 5, category: 'elective', interestTags: ['literature', 'classics'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'ENGL10B', title: 'English Literature: 1700 to Present', description: 'Austen, Dickens, Woolf, and beyond. The novel, Romanticism, modernism, and postcolonial voices.', credits: 5, category: 'elective', interestTags: ['literature'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'CLASSIC10', title: 'Ancient Greek Literature', description: 'Homer, Sophocles, Euripides, Aristophanes. Epic, tragedy, comedy, and the birth of Western literature.', credits: 5, category: 'elective', interestTags: ['literature', 'classics'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'SLAVC90', title: 'Russian Literature in Translation', description: 'Pushkin, Dostoevsky, Tolstoy, Chekhov. Love, suffering, revolution, and the Russian soul.', credits: 5, category: 'elective', interestTags: ['literature'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'COMPTL10', title: 'Introduction to World Literature', description: 'Masterworks across cultures: African, Latin American, Asian, and European voices in dialogue.', credits: 5, category: 'elective', interestTags: ['literature'], prereqs: [], genEdReqs: ['humanities'] },

    // ===== PHILOSOPHY =====
    { id: 'PHILOS1', title: 'Introduction to Philosophy', description: 'Fundamental problems of philosophy: knowledge, mind, free will, ethics, and the existence of God.', credits: 5, category: 'elective', interestTags: ['philosophy'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'PHILOS6', title: 'Introduction to Ethics', description: 'Major moral theories and applied ethics. Utilitarianism, Kantian ethics, virtue ethics, and contemporary dilemmas.', credits: 5, category: 'elective', interestTags: ['philosophy'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'PHILOS7', title: 'Introduction to Philosophy of Mind', description: 'What is consciousness? AI and minds, the hard problem, personal identity, and mental causation.', credits: 5, category: 'elective', interestTags: ['philosophy', 'design'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'PHILOS8', title: 'Introduction to Logic', description: 'Formal logic: validity, soundness, propositional logic, predicate logic, and proof methods.', credits: 5, category: 'elective', interestTags: ['philosophy', 'game-theory'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'PHILOS22', title: 'Philosophy of Science', description: 'Scientific explanation, theory change, realism, and the role of values in science.', credits: 4, category: 'elective', interestTags: ['philosophy', 'space'], prereqs: [], genEdReqs: [] },
    { id: 'PHILOS135', title: 'Existentialism', description: 'Freedom, anxiety, authenticity, and absurdity. Kierkegaard, Nietzsche, Sartre, de Beauvoir, and Camus.', credits: 4, category: 'elective', interestTags: ['philosophy', 'literature'], prereqs: ['PHILOS1'], genEdReqs: [] },
    { id: 'PHILOS185', title: 'Philosophy of Technology & AI', description: 'Ethical and philosophical implications of AI, autonomous systems, social media, and technological determinism.', credits: 4, category: 'elective', interestTags: ['philosophy', 'design'], prereqs: [], genEdReqs: [] },
    { id: 'PHILOS125', title: 'Philosophy of Law', description: 'Nature of law, legal reasoning, justice, punishment, rights, and the relationship between law and morality.', credits: 4, category: 'elective', interestTags: ['philosophy'], prereqs: ['PHILOS1'], genEdReqs: [] },
    { id: 'PHILOS170', title: 'Political Philosophy', description: 'Liberty, equality, justice, and democracy. Hobbes, Locke, Rousseau, Marx, Rawls, and Nozick.', credits: 4, category: 'elective', interestTags: ['philosophy', 'history'], prereqs: ['PHILOS1'], genEdReqs: [] },
    { id: 'PHILOS124', title: 'Philosophy of Science: Advanced', description: 'Theory choice, scientific revolutions, realism vs. anti-realism, models, and explanation in the natural and social sciences.', credits: 4, category: 'elective', interestTags: ['philosophy', 'space'], prereqs: ['PHILOS22'], genEdReqs: [] },
    { id: 'PHILOS130', title: 'Aesthetics', description: 'The nature of beauty, art, taste, and aesthetic experience. From Plato and Kant to contemporary art criticism.', credits: 4, category: 'elective', interestTags: ['philosophy', 'design'], prereqs: ['PHILOS1'], genEdReqs: [] },
    { id: 'PHILOS100A', title: 'Ancient Philosophy', description: 'Presocratic thought, Socrates, Plato, and Aristotle. Metaphysics, epistemology, and ethics in the Greek tradition.', credits: 4, category: 'elective', interestTags: ['philosophy', 'classics'], prereqs: ['PHILOS1'], genEdReqs: [] },

    // ===== GEN-ED OPTIONS =====
    { id: 'ENGCOMP3', title: 'English Composition', description: 'College-level writing: argument, evidence, research methods, and revision. Required for all UCLA students.', credits: 5, category: 'gen-ed', interestTags: [], prereqs: [], genEdReqs: ['writing'] },
    { id: 'PSYCH10', title: 'Introductory Psychology', description: 'Scientific study of behavior. Brain, perception, learning, memory, personality, and social psychology.', credits: 5, category: 'gen-ed', interestTags: [], prereqs: [], genEdReqs: ['social-science'] },
    { id: 'POLSCI10', title: 'Introduction to Political Science', description: 'American government, political behavior, public policy, and political institutions.', credits: 5, category: 'gen-ed', interestTags: [], prereqs: [], genEdReqs: ['social-science'] },
    { id: 'SOCIOL1', title: 'Introduction to Sociology', description: 'Social structures, institutions, stratification, and culture. How society shapes individual lives.', credits: 5, category: 'gen-ed', interestTags: [], prereqs: [], genEdReqs: ['social-science'] },
    { id: 'LS7A', title: 'Genetics, Evolution & Ecology', description: 'Life science for non-majors. DNA, heredity, natural selection, biodiversity, and ecosystems.', credits: 5, category: 'gen-ed', interestTags: [], prereqs: [], genEdReqs: ['natural-science'] },
    { id: 'CHEM14A', title: 'General Chemistry', description: 'Atomic structure, bonding, reactions, and equilibrium. Lab included.', credits: 5, category: 'gen-ed', interestTags: [], prereqs: [], genEdReqs: ['natural-science'] },
    { id: 'ETHNSTD1', title: 'Introduction to Ethnic Studies', description: 'Race, ethnicity, and inequality in the United States. Structural analysis and social movements.', credits: 5, category: 'gen-ed', interestTags: ['cultural-studies'], prereqs: [], genEdReqs: ['diversity'] },
    { id: 'ENGCOMP3H', title: 'English Composition (Honors)', description: 'Honors-level college writing. Advanced argumentation, research synthesis, and critical analysis for high-achieving students.', credits: 5, category: 'gen-ed', interestTags: [], prereqs: [], genEdReqs: ['writing'] },
    { id: 'LGBTQS5', title: 'Introduction to LGBTQ Studies', description: 'History, culture, and politics of LGBTQ communities. Identity, representation, activism, and intersectionality.', credits: 5, category: 'gen-ed', interestTags: ['cultural-studies'], prereqs: [], genEdReqs: ['diversity'] },
  ],
};
