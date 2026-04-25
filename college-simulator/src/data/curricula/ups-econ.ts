import { Curriculum } from '../../types';

export const upsEcon: Curriculum = {
  schoolId: 'ups',
  program: 'Economics',
  degreeRequirements: {
    totalCredits: 32, // UPS uses "units" — 32 units = 128 semester credits equivalent, 1 unit = 1 course
    majorCredits: 11,
    genEdCredits: 14,
    electiveCredits: 7,
    majorCourses: [
      'ECON101', 'ECON102', 'ECON301', 'ECON302', 'ECON411',
      'MATH160', 'MATH180', 'MATH181',
    ],
    genEdCategories: [
      { id: 'writing', name: 'Written Communication (Seminars in Scholarly Inquiry)', creditsRequired: 2, satisfiedBy: ['SSI101', 'SSI102'] },
      { id: 'quantitative', name: 'Mathematical Reasoning', creditsRequired: 1, satisfiedBy: ['MATH160', 'MATH180', 'MATH181'] },
      { id: 'natural-science', name: 'Natural Scientific Approaches', creditsRequired: 2, satisfiedBy: ['PHYS109', 'BIOL101', 'CHEM110', 'GEOL101'] },
      { id: 'social-science', name: 'Social Scientific Approaches', creditsRequired: 2, satisfiedBy: ['ECON101', 'SOC100', 'PSYCH101', 'POL101'] },
      { id: 'humanities', name: 'Humanistic Approaches', creditsRequired: 2, satisfiedBy: ['ENGL220', 'PHIL101', 'HIST200', 'RELS101'] },
      { id: 'arts', name: 'Fine Arts', creditsRequired: 1, satisfiedBy: ['ART110', 'ART140', 'MUS101', 'THTR101'] },
      { id: 'diversity', name: 'Knowledge, Identity & Power', creditsRequired: 2, satisfiedBy: ['AAS200', 'AFAM200', 'GWSS201', 'HISP200'] },
      { id: 'connections', name: 'Connections', creditsRequired: 2, satisfiedBy: ['CONN210', 'CONN215', 'CONN220', 'CONN250', 'CONN305', 'CONN310', 'CONN350', 'CONN360'] },
    ],
  },
  recommendedSequence: {
    years: 2,
    terms: [
      // YEAR 1 — Intro econ + calculus sequence, SSI writing seminars, gen-ed electives
      {
        termLabel: 'Fall Year 1',
        courses: ['ECON101', 'MATH180', 'SSI101', 'PHYS109'],
        locked: [true, true, true, false],
        slotLabels: ['Major req (Intro Markets & Macro)', 'Major req (Calculus I)', 'Writing gen-ed (SSI sequence)', 'Natural Science gen-ed (choose one)'],
      },
      {
        termLabel: 'Spring Year 1',
        courses: ['ECON102', 'MATH181', 'SSI102', 'BIOL101'],
        locked: [true, true, true, false],
        slotLabels: ['Major req (Intro Behavior & Choice)', 'Major req (Calculus II)', 'Writing gen-ed (SSI sequence)', 'Natural Science gen-ed (choose one)'],
      },
      // YEAR 2 — Intermediate theory + statistics, fill diversity & humanities gen-eds
      {
        termLabel: 'Fall Year 2',
        courses: ['ECON301', 'MATH160', 'ENGL220', 'AAS200'],
        locked: [true, true, false, false],
        slotLabels: ['Major req (Micro Theory)', 'Major req (Statistics)', 'Humanities gen-ed (choose one)', 'Diversity gen-ed (choose one)'],
      },
      {
        termLabel: 'Spring Year 2',
        courses: ['ECON302', 'ART140', 'PHIL101', 'GWSS201'],
        locked: [true, false, false, false],
        slotLabels: ['Major req (Macro Theory)', 'Fine Arts gen-ed (choose one)', 'Humanities gen-ed (choose one)', 'Diversity gen-ed (choose one)'],
      },
    ],
  },
  courses: [
    // ===== ECONOMICS MAJOR REQUIRED =====
    { id: 'ECON101', title: 'Introduction to Markets and Macroeconomics', description: 'Microeconomic principles: supply and demand, consumer choice, firm behavior, market structures, and market failures.', credits: 1, category: 'major-required', interestTags: ['game-theory'], prereqs: [], genEdReqs: ['social-science'] },
    { id: 'ECON102', title: 'Introduction to Behavior and Choice', description: 'Macroeconomic principles: GDP, inflation, unemployment, monetary/fiscal policy, and international trade.', credits: 1, category: 'major-required', interestTags: [], prereqs: [], genEdReqs: ['social-science'] },
    { id: 'ECON301', title: 'Microeconomic Theory', description: 'Consumer optimization, producer theory, general equilibrium, welfare economics, and market failure analysis with mathematical rigor.', credits: 1, category: 'major-required', interestTags: ['game-theory'], prereqs: ['ECON101', 'ECON102', 'MATH180'], genEdReqs: [] },
    { id: 'ECON302', title: 'Macroeconomic Theory', description: 'IS-LM model, aggregate supply/demand, growth theory, business cycles, and monetary policy in open economies.', credits: 1, category: 'major-required', interestTags: [], prereqs: ['ECON101', 'ECON102'], genEdReqs: [] },
    { id: 'ECON411', title: 'Senior Thesis Seminar', description: 'Capstone research project. Original economic analysis using data and theory. Presentation and defense of findings.', credits: 1, category: 'major-required', interestTags: [], prereqs: ['ECON301', 'ECON302'], genEdReqs: [] },
    { id: 'MATH160', title: 'Statistics', description: 'Descriptive statistics, probability, inference, regression. Applications to social science research.', credits: 1, category: 'major-required', interestTags: [], prereqs: [], genEdReqs: ['quantitative'] },
    { id: 'MATH180', title: 'Calculus I', description: 'Limits, derivatives, and applications. Optimization and rate-of-change problems.', credits: 1, category: 'major-required', interestTags: [], prereqs: [], genEdReqs: ['quantitative'] },
    { id: 'MATH181', title: 'Calculus II', description: 'Integration, techniques of integration, infinite series, and applications.', credits: 1, category: 'major-required', interestTags: [], prereqs: ['MATH180'], genEdReqs: ['quantitative'] },

    // ===== ECONOMICS ELECTIVES =====
    { id: 'ECON380', title: 'Game Theory in Economics', description: 'Strategic interaction and decision-making. Nash equilibrium, bargaining, auctions, mechanism design, and evolutionary game theory.', credits: 1, category: 'major-elective', interestTags: ['game-theory'], prereqs: ['ECON301'], genEdReqs: [] },
    { id: 'ECON291', title: 'Behavioral Economics', description: 'How psychology influences economic decisions. Bounded rationality, prospect theory, nudges, and experimental methods.', credits: 1, category: 'major-elective', interestTags: ['game-theory'], prereqs: ['ECON101', 'ECON102'], genEdReqs: [] },
    { id: 'ECON327', title: 'Climate Change: Economics, Policy, and Politics', description: 'Market failures and the environment. Externalities, public goods, valuation of natural resources, and climate policy.', credits: 1, category: 'major-elective', interestTags: [], prereqs: ['ECON101'], genEdReqs: [] },
    { id: 'ECON271', title: 'International Economics', description: 'Comparative advantage, trade policy, globalization, trade agreements, and their effects on developing economies.', credits: 1, category: 'major-elective', interestTags: [], prereqs: ['ECON101'], genEdReqs: [] },
    { id: 'ECON335', title: 'Modern Labor and Gender Economics', description: 'Labor markets, wage determination, human capital, discrimination, unions, and immigration economics.', credits: 1, category: 'major-elective', interestTags: [], prereqs: ['ECON101', 'ECON102'], genEdReqs: [] },
    { id: 'ECON350', title: 'Economics of Education', description: 'Economic analysis of education systems. Returns to education, school choice, inequality, and education policy.', credits: 1, category: 'major-elective', interestTags: [], prereqs: ['ECON101', 'ECON102'], genEdReqs: [] },
    { id: 'ECON360', title: 'Health Economics', description: 'Economics of healthcare markets, insurance, pharmaceutical industry, and health policy.', credits: 1, category: 'major-elective', interestTags: [], prereqs: ['ECON101', 'ECON102'], genEdReqs: [] },

    // ===== CERAMICS / STUDIO ART =====
    { id: 'ART110', title: 'Drawing I', description: 'Fundamental drawing skills. Observational drawing, composition, value, and mark-making with various media.', credits: 1, category: 'elective', interestTags: ['ceramics'], prereqs: [], genEdReqs: ['arts'] },
    { id: 'ART140', title: 'Ceramics I', description: 'Introduction to ceramic arts. Hand-building, coil, slab, and beginning wheel work. Glazing and firing processes.', credits: 1, category: 'elective', interestTags: ['ceramics'], prereqs: [], genEdReqs: ['arts'] },
    { id: 'ART240', title: 'Ceramics II', description: 'Continued development of wheel-throwing and hand-building. Surface decoration, glaze application, and kiln loading.', credits: 1, category: 'elective', interestTags: ['ceramics'], prereqs: ['ART140'], genEdReqs: [] },
    { id: 'ART340', title: 'Ceramics III: Advanced Studio', description: 'Individual artistic development in ceramics. Personal aesthetic vision, exhibition preparation, and advanced techniques.', credits: 1, category: 'elective', interestTags: ['ceramics'], prereqs: ['ART240'], genEdReqs: [] },
    { id: 'ART150', title: 'Printmaking I', description: 'Relief, intaglio, and screen printing techniques. Edition printing and experimental approaches.', credits: 1, category: 'elective', interestTags: ['ceramics'], prereqs: [], genEdReqs: ['arts'] },
    { id: 'ART160', title: 'Sculpture I', description: 'Introduction to three-dimensional art. Wood, metal, plaster, and mixed media. Additive and subtractive processes.', credits: 1, category: 'elective', interestTags: ['ceramics'], prereqs: [], genEdReqs: ['arts'] },
    { id: 'ART210', title: 'Graphic Design Fundamentals', description: 'Typography, layout, color theory, and visual communication. Create posters, logos, and publications using Adobe Creative Suite in a hands-on studio course.', credits: 1, category: 'elective', interestTags: ['design'], prereqs: [], genEdReqs: [] },
    { id: 'ART220', title: 'Digital Photography', description: 'Composition, lighting, and digital editing. Develop a personal photographic voice through weekly assignments and critique sessions with peers and faculty.', credits: 1, category: 'elective', interestTags: ['design'], prereqs: [], genEdReqs: ['arts'] },
    { id: 'ART250', title: 'Painting I', description: 'Fundamentals of oil and acrylic painting. Color mixing, composition, and observational painting in UPS studio spaces overlooking the Puget Sound.', credits: 1, category: 'elective', interestTags: ['ceramics', 'design'], prereqs: [], genEdReqs: ['arts'] },
    { id: 'ART310', title: 'Design Thinking Studio', description: 'Human-centered design process applied to real problems. Empathy research, ideation, prototyping, and user testing in collaboration with campus and community partners.', credits: 1, category: 'elective', interestTags: ['design'], prereqs: [], genEdReqs: [] },
    { id: 'ART320', title: 'Book Arts & Typography', description: 'Letterpress printing, bookbinding, and typographic design. Craft artist books and broadsides using the department letterpress studio.', credits: 1, category: 'elective', interestTags: ['design', 'literature'], prereqs: [], genEdReqs: [] },

    // ===== ASTRONOMY / SPACE =====
    { id: 'PHYS109', title: 'Astronomy', description: 'Tour of the cosmos: planets, stars, galaxies, black holes, and the Big Bang. Observatory sessions included. No math prerequisite.', credits: 1, category: 'elective', interestTags: ['astronomy', 'space', 'science'], prereqs: [], genEdReqs: ['natural-science'] },
    { id: 'PHYS110', title: 'College Physics I', description: 'Mechanics, waves, and thermodynamics. Algebra-based physics with laboratory.', credits: 1, category: 'elective', interestTags: ['space', 'science'], prereqs: [], genEdReqs: ['natural-science'] },
    { id: 'GEOL101', title: 'Exploring the Earth', description: 'Earth processes: volcanoes, earthquakes, plate tectonics, minerals, and geologic history. Field trips to local geological sites.', credits: 1, category: 'elective', interestTags: ['space', 'science'], prereqs: [], genEdReqs: ['natural-science'] },
    { id: 'GEOL310', title: 'Planetary Geology', description: 'Comparative geology of terrestrial planets and moons. Surface processes, craters, volcanism on other worlds.', credits: 1, category: 'elective', interestTags: ['astronomy', 'space', 'science'], prereqs: ['GEOL101'], genEdReqs: [] },

    // ===== HISTORY =====
    { id: 'HIST200', title: 'The Ancient World', description: 'Mediterranean civilizations from Mesopotamia through Rome. Politics, culture, philosophy, and daily life.', credits: 1, category: 'elective', interestTags: ['history'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'HIST210', title: 'Modern Europe', description: 'Europe from the French Revolution to the present. Nationalism, industrialization, world wars, Cold War, and European integration.', credits: 1, category: 'elective', interestTags: ['history'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'HIST220', title: 'History of East Asia', description: 'China, Japan, and Korea: imperial systems, cultural traditions, modernization, and contemporary challenges.', credits: 1, category: 'elective', interestTags: ['history', 'cultural-studies'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'HIST240', title: 'American History to 1877', description: 'Colonial America through Reconstruction. Indigenous peoples, slavery, revolution, and the Civil War.', credits: 1, category: 'elective', interestTags: ['history'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'HIST340', title: 'History of the Pacific Rim', description: 'Transpacific connections: trade, migration, cultural exchange, and conflict across the Pacific world.', credits: 1, category: 'elective', interestTags: ['history', 'cultural-studies'], prereqs: [], genEdReqs: [] },
    { id: 'HIST360', title: 'History of Science & Technology', description: 'How scientific knowledge and technological innovation have shaped societies from the Scientific Revolution to the digital age.', credits: 1, category: 'elective', interestTags: ['history', 'space'], prereqs: [], genEdReqs: [] },
    { id: 'HIST201', title: 'Ancient Mediterranean World', description: 'Greece, Rome, Egypt, and Persia. Politics, philosophy, war, and cultural exchange in the ancient world.', credits: 1, category: 'elective', interestTags: ['history', 'classics'], prereqs: [], genEdReqs: ['social-science'] },
    { id: 'HIST202', title: 'Medieval Europe', description: 'Fall of Rome through the Renaissance. Feudalism, the Church, Crusades, Black Death, and cultural revival.', credits: 1, category: 'elective', interestTags: ['history'], prereqs: [], genEdReqs: ['social-science'] },
    { id: 'HIST275', title: 'Modern Europe: 1789 to Present', description: 'French Revolution to the EU. Nationalism, industrialization, two world wars, and European integration.', credits: 1, category: 'elective', interestTags: ['history'], prereqs: [], genEdReqs: ['social-science'] },
    { id: 'HIST215', title: 'Latin American History', description: 'Pre-Columbian civilizations through modern revolutions. Colonialism, independence, and contemporary challenges.', credits: 1, category: 'elective', interestTags: ['history'], prereqs: [], genEdReqs: [] },
    { id: 'HIST250', title: 'The Middle East in Modern Times', description: 'Ottoman Empire to the present. Nationalism, oil, the Arab-Israeli conflict, and the Arab Spring.', credits: 1, category: 'elective', interestTags: ['history'], prereqs: [], genEdReqs: [] },

    // ===== ASIAN AMERICAN / IDENTITY =====
    { id: 'AAS200', title: 'Introduction to Asian American Studies', description: 'Asian American history, identity, and experience. Immigration, exclusion, internment, activism, and contemporary issues.', credits: 1, category: 'elective', interestTags: ['cultural-studies', 'history'], prereqs: [], genEdReqs: ['diversity'] },
    { id: 'AAS250', title: 'Asian American Literature & Film', description: 'Narratives of Asian American experience through literature and cinema. Representation, stereotypes, and counter-narratives.', credits: 1, category: 'elective', interestTags: ['cultural-studies', 'literature'], prereqs: [], genEdReqs: ['diversity'] },
    { id: 'AAS300', title: 'Race & Immigration in the Pacific Northwest', description: 'How race and immigration have shaped communities in the Pacific Northwest. Japanese internment, Filipino laborers, recent immigration.', credits: 1, category: 'elective', interestTags: ['cultural-studies', 'history'], prereqs: [], genEdReqs: ['diversity'] },
    { id: 'AFAM200', title: 'Introduction to African American Studies', description: 'African American history, culture, and social thought from the Atlantic slave trade to the present. Civil rights, Black intellectual traditions, and contemporary issues.', credits: 1, category: 'elective', interestTags: ['cultural-studies', 'history'], prereqs: [], genEdReqs: ['diversity'] },
    { id: 'HISP200', title: 'Introduction to Latino/a Studies', description: 'Latino/a communities in the United States. Immigration, identity, language, labor, and cultural production across Chicano/a and other Latinx experiences.', credits: 1, category: 'elective', interestTags: ['cultural-studies', 'history'], prereqs: [], genEdReqs: ['diversity'] },

    // ===== LITERATURE =====
    { id: 'ENGL220', title: 'Introduction to Literary Studies', description: 'Close reading of fiction, poetry, and drama. Literary theory, interpretation, and critical writing.', credits: 1, category: 'elective', interestTags: ['literature'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'ENGL240', title: 'Creative Writing: Fiction', description: 'Workshop-based fiction writing. Short story craft, voice, character, and narrative structure. Peer critique.', credits: 1, category: 'elective', interestTags: ['literature'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'ENGL250', title: 'Creative Writing: Poetry', description: 'Workshop-based poetry writing. Form, imagery, sound, and revision. Reading contemporary poets.', credits: 1, category: 'elective', interestTags: ['literature'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'ENGL310', title: 'Japanese Literature in Translation', description: 'Major works of Japanese literature from The Tale of Genji to contemporary fiction. Cultural context and literary tradition.', credits: 1, category: 'elective', interestTags: ['literature', 'cultural-studies'], prereqs: [], genEdReqs: [] },
    { id: 'ENGL320', title: 'Science Fiction & Fantasy', description: 'Genre fiction exploring technology, society, and imagination. From Shelley to Le Guin to contemporary voices.', credits: 1, category: 'elective', interestTags: ['literature', 'space'], prereqs: [], genEdReqs: [] },
    { id: 'ENGL340', title: 'Graphic Narratives', description: 'Comics, manga, and graphic novels as literary and artistic forms. Visual storytelling and narrative structure.', credits: 1, category: 'elective', interestTags: ['literature', 'video-games'], prereqs: [], genEdReqs: [] },
    { id: 'ENGL235', title: 'Shakespeare', description: 'Close reading of major plays and sonnets. Tragedy, comedy, and the enduring power of Shakespeare\'s language.', credits: 1, category: 'elective', interestTags: ['literature', 'classics'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'ENGL260', title: 'The Novel', description: 'Development of the novel from the 18th century to the present. Austen, Brontë, Dickens, Morrison, and beyond.', credits: 1, category: 'elective', interestTags: ['literature'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'CLAS220', title: 'Greek & Roman Literature', description: 'Homer, Virgil, Ovid, Sappho. Epic, lyric, tragedy, and comedy from the ancient world.', credits: 1, category: 'elective', interestTags: ['literature', 'classics'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'ENGL270', title: 'Russian Literature', description: 'Dostoevsky, Tolstoy, Chekhov in translation. The Russian literary tradition and its exploration of the human condition.', credits: 1, category: 'elective', interestTags: ['literature'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'ENGL280', title: 'World Literature', description: 'Masterworks across cultures: African, Latin American, Asian, and European voices in comparative perspective.', credits: 1, category: 'elective', interestTags: ['literature'], prereqs: [], genEdReqs: ['humanities'] },

    // ===== OTHER GEN-ED OPTIONS =====
    { id: 'SSI101', title: 'Seminar in Scholarly Inquiry I', description: 'First-year writing seminar. Academic reading, research, argumentation, and writing across disciplines.', credits: 1, category: 'gen-ed', interestTags: [], prereqs: [], genEdReqs: ['writing'] },
    { id: 'SSI102', title: 'Seminar in Scholarly Inquiry II', description: 'Continuation of writing seminar. Extended research project and revision-intensive writing.', credits: 1, category: 'gen-ed', interestTags: [], prereqs: ['SSI101'], genEdReqs: ['writing'] },
    { id: 'SOC100', title: 'Introduction to Sociology', description: 'Social structures, inequality, institutions, and how society shapes individual life. Research methods in sociology.', credits: 1, category: 'gen-ed', interestTags: [], prereqs: [], genEdReqs: ['social-science'] },
    { id: 'PSYCH101', title: 'Introduction to Psychology', description: 'Scientific study of mind and behavior. Perception, learning, memory, development, and social psychology.', credits: 1, category: 'gen-ed', interestTags: [], prereqs: [], genEdReqs: ['social-science'] },
    { id: 'PHIL101', title: 'Introduction to Philosophy', description: 'Core philosophical questions: free will, knowledge, ethics, and the nature of reality. Reading classic and contemporary thinkers.', credits: 1, category: 'gen-ed', interestTags: ['philosophy'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'BIOL101', title: 'Biology: Concepts & Issues', description: 'Biology for non-majors. Genetics, evolution, ecology, and contemporary biological issues.', credits: 1, category: 'gen-ed', interestTags: ['science'], prereqs: [], genEdReqs: ['natural-science'] },
    { id: 'MUS101', title: 'Introduction to Music', description: 'Elements of music, historical periods, and diverse traditions. Active listening and concert attendance.', credits: 1, category: 'gen-ed', interestTags: [], prereqs: [], genEdReqs: ['arts'] },
    { id: 'THTR101', title: 'Introduction to Theater', description: 'Theater as collaborative art. Participation in production elements. Attendance at campus performances.', credits: 1, category: 'gen-ed', interestTags: [], prereqs: [], genEdReqs: ['arts'] },
    { id: 'POL101', title: 'Introduction to Political Science', description: 'Political systems, ideologies, and power. American and comparative politics.', credits: 1, category: 'gen-ed', interestTags: [], prereqs: [], genEdReqs: ['social-science'] },
    { id: 'RELS101', title: 'Introduction to Religious Studies', description: 'Major world religions: origins, beliefs, practices, and contemporary expressions.', credits: 1, category: 'gen-ed', interestTags: ['history'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'CHEM110', title: 'General Chemistry', description: 'Atomic structure, bonding, reactions, stoichiometry, and thermodynamics. Laboratory included.', credits: 1, category: 'gen-ed', interestTags: ['science'], prereqs: [], genEdReqs: ['natural-science'] },
    { id: 'CSCI161', title: 'Introduction to Computer Science', description: 'Programming fundamentals in Python. Problem solving, algorithms, data structures, and computational thinking.', credits: 1, category: 'elective', interestTags: ['video-games'], prereqs: [], genEdReqs: [] },
    { id: 'GWSS201', title: 'Introduction to Gender & Queer Studies', description: 'Gender, sexuality, and power. Feminist and queer theory, intersectionality, and social justice.', credits: 1, category: 'gen-ed', interestTags: [], prereqs: [], genEdReqs: ['diversity'] },

    // ===== PHILOSOPHY =====
    { id: 'PHIL201', title: 'Ethics', description: 'Major moral theories and their application to real-world problems. Small seminar format with discussion.', credits: 1, category: 'elective', interestTags: ['philosophy'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'PHIL210', title: 'Logic', description: 'Formal logic: propositional and predicate logic, truth tables, and proof methods.', credits: 1, category: 'elective', interestTags: ['philosophy', 'game-theory'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'PHIL220', title: 'Philosophy of Mind', description: 'Mind-body problem, consciousness, AI, and personal identity. What is it like to be a mind?', credits: 1, category: 'elective', interestTags: ['philosophy', 'design'], prereqs: ['PHIL101'], genEdReqs: [] },
    { id: 'PHIL250', title: 'Existentialism', description: 'Freedom, anxiety, and meaning. Kierkegaard, Nietzsche, Sartre, de Beauvoir, and Camus.', credits: 1, category: 'elective', interestTags: ['philosophy', 'literature'], prereqs: [], genEdReqs: [] },
    { id: 'PHIL260', title: 'Philosophy of Science', description: 'Scientific method, falsifiability, paradigms, and the relationship between science and society.', credits: 1, category: 'elective', interestTags: ['philosophy', 'space'], prereqs: [], genEdReqs: [] },
    { id: 'PHIL280', title: 'Environmental Ethics', description: 'Moral obligations to nature, animals, future generations. Climate ethics and sustainability philosophy.', credits: 1, category: 'elective', interestTags: ['philosophy'], prereqs: [], genEdReqs: [] },

    // ===== ECONOMICS UPPER-DIVISION ELECTIVES =====
    { id: 'ECON270', title: 'Economics of Money and Banking', description: 'Exchange rates, balance of payments, international capital flows, currency crises, and global financial institutions.', credits: 1, category: 'major-elective', interestTags: [], prereqs: ['ECON101'], genEdReqs: [] },
    { id: 'ECON261', title: 'Market Effects of Public Policy', description: 'Government taxation, expenditure, and debt. Tax incidence, public goods provision, cost-benefit analysis, and fiscal federalism.', credits: 1, category: 'major-elective', interestTags: [], prereqs: ['ECON101'], genEdReqs: [] },
    { id: 'ECON351', title: 'Industrial Organization', description: 'Asset pricing, portfolio theory, risk and return, efficient markets hypothesis, and behavioral finance.', credits: 1, category: 'major-elective', interestTags: ['game-theory'], prereqs: ['ECON301'], genEdReqs: [] },
    { id: 'ECON268', title: 'Development Economics', description: 'Economic growth and poverty in developing countries. Institutions, trade, aid, microfinance, and randomized evaluations.', credits: 1, category: 'major-elective', interestTags: ['cultural-studies'], prereqs: ['ECON101'], genEdReqs: [] },
    { id: 'ECON284', title: 'Introduction to Econometrics', description: 'Statistical methods for economic data. Multiple regression, instrumental variables, panel data, and causal inference.', credits: 1, category: 'major-elective', interestTags: [], prereqs: ['ECON101', 'ECON102', 'MATH160'], genEdReqs: [] },
    { id: 'ECON218', title: 'American Economic History', description: 'Long-run economic development from the Industrial Revolution to globalization. Institutions, technology, and demographic change.', credits: 1, category: 'major-elective', interestTags: ['history'], prereqs: ['ECON101'], genEdReqs: [] },
    { id: 'ECON241', title: 'Regional and Urban Economics', description: 'Economics of cities and regions. Housing markets, transportation, segregation, gentrification, and local public goods.', credits: 1, category: 'major-elective', interestTags: [], prereqs: ['ECON101'], genEdReqs: [] },
    { id: 'ECON275', title: 'Poverty, Inequality, and Public Policy', description: 'Income and wealth distribution, intergenerational mobility, discrimination, and policy responses to inequality.', credits: 1, category: 'major-elective', interestTags: [], prereqs: ['ECON101'], genEdReqs: [] },
    { id: 'ECON385', title: 'Money & Banking', description: 'Financial intermediation, central banking, monetary policy transmission, and the role of money in the macroeconomy.', credits: 1, category: 'major-elective', interestTags: [], prereqs: ['ECON302'], genEdReqs: [] },
    { id: 'ECON330', title: 'Law and Economics', description: 'Economic analysis of legal rules and institutions. Property rights, contracts, torts, crime, and regulation.', credits: 1, category: 'major-elective', interestTags: ['game-theory'], prereqs: ['ECON101', 'ECON102'], genEdReqs: [] },

    // ===== PHILOSOPHY UPPER-DIVISION =====
    { id: 'PHIL301', title: 'Advanced Ethics: Justice & Rights', description: 'Theories of justice from Rawls to Sen. Distributive justice, rights theory, global justice, and contemporary moral debates.', credits: 1, category: 'elective', interestTags: ['philosophy'], prereqs: ['PHIL201'], genEdReqs: [] },
    { id: 'PHIL310', title: 'Political Philosophy', description: 'Authority, liberty, democracy, and the state. Hobbes, Locke, Rousseau, Marx, and contemporary political thought.', credits: 1, category: 'elective', interestTags: ['philosophy', 'history'], prereqs: ['PHIL101'], genEdReqs: [] },
    { id: 'PHIL320', title: 'Philosophy of Mind: Consciousness', description: 'Advanced topics in consciousness, qualia, intentionality, artificial intelligence, and the hard problem of consciousness.', credits: 1, category: 'elective', interestTags: ['philosophy', 'design'], prereqs: ['PHIL220'], genEdReqs: [] },
    { id: 'PHIL330', title: 'Epistemology', description: 'Nature of knowledge, belief, and justification. Skepticism, foundationalism, coherentism, and social epistemology.', credits: 1, category: 'elective', interestTags: ['philosophy'], prereqs: ['PHIL101'], genEdReqs: [] },
    { id: 'PHIL340', title: 'Advanced Logic', description: 'Modal logic, metalogic, incompleteness theorems, and philosophical implications of formal systems.', credits: 1, category: 'elective', interestTags: ['philosophy', 'game-theory'], prereqs: ['PHIL210'], genEdReqs: [] },

    // ===== COGNITIVE SCIENCE / PSYCHOLOGY =====
    { id: 'PSYCH210', title: 'Research Methods in Psychology', description: 'Experimental design, data collection, statistical analysis, and scientific writing in psychological research.', credits: 1, category: 'elective', interestTags: [], prereqs: ['PSYCH101'], genEdReqs: [] },
    { id: 'PSYCH301', title: 'Cognitive Psychology', description: 'Attention, perception, memory, language, and decision-making. How the mind processes information.', credits: 1, category: 'elective', interestTags: ['philosophy'], prereqs: ['PSYCH101'], genEdReqs: [] },
    { id: 'PSYCH310', title: 'Behavioral Psychology', description: 'Learning theory, conditioning, reinforcement, and behavioral analysis. Applications to education and clinical practice.', credits: 1, category: 'elective', interestTags: [], prereqs: ['PSYCH101'], genEdReqs: [] },
    { id: 'PSYCH320', title: 'Social Psychology', description: 'How social context shapes thought, feeling, and behavior. Conformity, persuasion, group dynamics, and prejudice.', credits: 1, category: 'elective', interestTags: ['cultural-studies'], prereqs: ['PSYCH101'], genEdReqs: [] },
    { id: 'PSYCH340', title: 'Behavioral Neuroscience', description: 'Neural basis of behavior. Brain anatomy, neurotransmitters, sensory systems, and the biological underpinnings of cognition.', credits: 1, category: 'elective', interestTags: ['philosophy'], prereqs: ['PSYCH101', 'BIOL101'], genEdReqs: [] },
    { id: 'PSYCH330', title: 'Sensation & Perception', description: 'How the brain constructs experience from sensory input. Vision, hearing, touch, taste, and smell explored through hands-on demos and lab experiments in a small seminar setting.', credits: 1, category: 'elective', interestTags: ['philosophy', 'design'], prereqs: ['PSYCH101'], genEdReqs: [] },
    { id: 'PSYCH350', title: 'Developmental Psychology', description: 'Cognitive, social, and emotional development across the lifespan. Attachment, language acquisition, moral reasoning, and aging studied through classic and contemporary research.', credits: 1, category: 'elective', interestTags: ['philosophy'], prereqs: ['PSYCH101'], genEdReqs: [] },
    { id: 'PSYCH360', title: 'Cognitive Neuroscience', description: 'How brain systems give rise to perception, attention, memory, and language. Neuroimaging methods, case studies, and collaborative lab projects in a seminar of fifteen students.', credits: 1, category: 'elective', interestTags: ['philosophy'], prereqs: ['PSYCH301'], genEdReqs: [] },
    { id: 'PSYCH370', title: 'Psychology of Decision Making', description: 'Heuristics, biases, and the architecture of choice. Prospect theory, dual-process models, and nudge design explored through experiments you design and run yourself.', credits: 1, category: 'elective', interestTags: ['philosophy', 'game-theory'], prereqs: ['PSYCH101'], genEdReqs: [] },
    { id: 'PSYCH380', title: 'Language & Cognition', description: 'How humans acquire, produce, and comprehend language. Psycholinguistics, bilingualism, and the relationship between language and thought in a discussion-intensive seminar.', credits: 1, category: 'elective', interestTags: ['philosophy', 'cultural-studies'], prereqs: ['PSYCH301'], genEdReqs: [] },

    // ===== COMPUTER SCIENCE =====
    { id: 'CSCI261', title: 'Data Structures', description: 'Lists, trees, graphs, hash tables, and algorithm analysis. Object-oriented programming in Python and Java.', credits: 1, category: 'elective', interestTags: ['video-games'], prereqs: ['CSCI161'], genEdReqs: [] },
    { id: 'CSCI301', title: 'Data Science', description: 'Data wrangling, visualization, and machine learning fundamentals using Python. Real-world datasets and reproducible analysis.', credits: 1, category: 'elective', interestTags: ['design'], prereqs: ['CSCI161', 'MATH160'], genEdReqs: [] },
    { id: 'CSCI321', title: 'Database Systems', description: 'Relational databases, SQL, data modeling, normalization, and introduction to NoSQL systems.', credits: 1, category: 'elective', interestTags: ['design'], prereqs: ['CSCI161'], genEdReqs: [] },
    { id: 'CSCI341', title: 'Web Development', description: 'Full-stack web development. HTML, CSS, JavaScript, server-side programming, and deployment.', credits: 1, category: 'elective', interestTags: ['design', 'video-games'], prereqs: ['CSCI161'], genEdReqs: [] },
    { id: 'CSCI351', title: 'Algorithms', description: 'Algorithm design and analysis. Sorting, searching, graph algorithms, dynamic programming, and computational complexity.', credits: 1, category: 'elective', interestTags: ['game-theory'], prereqs: ['CSCI261', 'MATH180'], genEdReqs: [] },
    { id: 'CSCI311', title: 'Introduction to Artificial Intelligence', description: 'Search, knowledge representation, machine learning, and natural language processing. Build intelligent agents in small collaborative teams using Python.', credits: 1, category: 'elective', interestTags: ['game-theory', 'video-games'], prereqs: ['CSCI261'], genEdReqs: [] },
    { id: 'CSCI331', title: 'Human-Computer Interaction', description: 'User-centered design, usability testing, prototyping, and accessibility. Design and evaluate interfaces through iterative projects with real users from the campus community.', credits: 1, category: 'elective', interestTags: ['design'], prereqs: ['CSCI161'], genEdReqs: [] },
    { id: 'CSCI361', title: 'Software Engineering', description: 'Agile development, version control, testing, and team-based project management. Build a real application for a campus or community partner over the semester.', credits: 1, category: 'elective', interestTags: ['design'], prereqs: ['CSCI261'], genEdReqs: [] },
    { id: 'CSCI371', title: 'Computer Graphics & Visualization', description: 'Rendering, transformations, shading, and interactive graphics programming. Create visual simulations and data visualizations using OpenGL and Processing.', credits: 1, category: 'elective', interestTags: ['design', 'video-games'], prereqs: ['CSCI261', 'MATH260'], genEdReqs: [] },
    { id: 'CSCI381', title: 'Programming Languages', description: 'Paradigms of computation: functional, object-oriented, and logic programming. Language design, type systems, and interpreters built from scratch in a small seminar.', credits: 1, category: 'elective', interestTags: ['philosophy'], prereqs: ['CSCI261'], genEdReqs: [] },

    // ===== STATISTICS / MATH UPPER-DIVISION =====
    { id: 'MATH260', title: 'Linear Algebra', description: 'Vectors, matrices, linear transformations, eigenvalues, and applications to data science and economics.', credits: 1, category: 'elective', interestTags: [], prereqs: ['MATH180'], genEdReqs: [] },
    { id: 'MATH310', title: 'Probability Theory', description: 'Axioms of probability, random variables, distributions, expectation, and the central limit theorem.', credits: 1, category: 'elective', interestTags: ['game-theory'], prereqs: ['MATH181'], genEdReqs: [] },
    { id: 'MATH320', title: 'Mathematical Statistics', description: 'Estimation, hypothesis testing, confidence intervals, and regression theory with mathematical rigor.', credits: 1, category: 'elective', interestTags: [], prereqs: ['MATH310'], genEdReqs: [] },
    { id: 'MATH330', title: 'Applied Statistics & Data Analysis', description: 'Advanced regression, ANOVA, nonparametric methods, and statistical computing with R.', credits: 1, category: 'elective', interestTags: [], prereqs: ['MATH160'], genEdReqs: [] },
    { id: 'MATH340', title: 'Operations Research', description: 'Linear programming, optimization, queuing theory, and decision analysis. Applications to business and economics.', credits: 1, category: 'elective', interestTags: ['game-theory'], prereqs: ['MATH260'], genEdReqs: [] },
    { id: 'MATH350', title: 'Applied Regression Analysis', description: 'Multiple regression, model selection, diagnostics, and logistic regression. Hands-on data analysis with R in a workshop-style class where you bring your own research questions.', credits: 1, category: 'elective', interestTags: [], prereqs: ['MATH160'], genEdReqs: [] },
    { id: 'MATH360', title: 'Bayesian Statistics', description: 'Prior and posterior distributions, Markov chain Monte Carlo, and Bayesian inference applied to real-world problems. Collaborative projects using R and Stan.', credits: 1, category: 'elective', interestTags: ['philosophy'], prereqs: ['MATH310'], genEdReqs: [] },
    { id: 'MATH370', title: 'Time Series Analysis', description: 'Autocorrelation, ARIMA models, spectral analysis, and forecasting. Applications to economic, environmental, and social science data with R.', credits: 1, category: 'elective', interestTags: [], prereqs: ['MATH320'], genEdReqs: [] },
    { id: 'MATH380', title: 'Statistical Learning & Data Mining', description: 'Classification, clustering, cross-validation, tree methods, and regularization. Bridge between statistics and machine learning with real datasets.', credits: 1, category: 'elective', interestTags: ['game-theory'], prereqs: ['MATH330'], genEdReqs: [] },
    { id: 'MATH390', title: 'Experimental Design', description: 'Principles of designing experiments, randomization, blocking, factorial designs, and analysis of variance. Applications across natural and social sciences.', credits: 1, category: 'elective', interestTags: [], prereqs: ['MATH160'], genEdReqs: [] },

    // ===== POLITICAL SCIENCE =====
    { id: 'POL210', title: 'International Relations', description: 'Theories of world politics: realism, liberalism, constructivism. War, diplomacy, international organizations, and global governance.', credits: 1, category: 'elective', interestTags: ['history'], prereqs: ['POL101'], genEdReqs: [] },
    { id: 'POL310', title: 'Political Economy', description: 'Intersection of politics and economics. Trade policy, development, inequality, and the politics of globalization.', credits: 1, category: 'elective', interestTags: ['history'], prereqs: ['POL101'], genEdReqs: [] },
    { id: 'POL320', title: 'American Politics & Policy', description: 'Congress, the presidency, courts, and public opinion. Policy-making processes and contemporary American political debates.', credits: 1, category: 'elective', interestTags: ['history'], prereqs: ['POL101'], genEdReqs: [] },
    { id: 'POL330', title: 'Environmental Policy & Politics', description: 'Environmental regulation, climate change politics, energy policy, and the role of science in policy-making.', credits: 1, category: 'elective', interestTags: [], prereqs: ['POL101'], genEdReqs: [] },
    { id: 'POL340', title: 'Comparative Politics', description: 'Political systems across countries. Democracies, authoritarian regimes, regime transitions, and institutional design.', credits: 1, category: 'elective', interestTags: ['history', 'cultural-studies'], prereqs: ['POL101'], genEdReqs: [] },
    { id: 'POL350', title: 'International Security', description: 'War, deterrence, nuclear proliferation, terrorism, and peacekeeping. Case studies from the Cold War to contemporary conflicts debated in seminar discussions.', credits: 1, category: 'elective', interestTags: ['history'], prereqs: ['POL210'], genEdReqs: [] },
    { id: 'POL360', title: 'Politics of Developing Nations', description: 'Democratization, corruption, ethnic conflict, and state-building in the Global South. Country case studies with primary source analysis in a small discussion seminar.', credits: 1, category: 'elective', interestTags: ['history', 'cultural-studies'], prereqs: ['POL101'], genEdReqs: [] },
    { id: 'POL370', title: 'Constitutional Law', description: 'Supreme Court jurisprudence on individual rights, federalism, and separation of powers. Read landmark cases and argue both sides in moot court exercises.', credits: 1, category: 'elective', interestTags: ['history'], prereqs: ['POL101'], genEdReqs: [] },
    { id: 'POL380', title: 'Global Political Economy', description: 'International trade regimes, financial crises, development institutions, and the politics of globalization. Connects economic theory with political power in a cross-disciplinary seminar.', credits: 1, category: 'elective', interestTags: ['history', 'game-theory'], prereqs: ['POL101', 'ECON101'], genEdReqs: [] },
    { id: 'POL390', title: 'Politics of Race & Ethnicity', description: 'How race and ethnicity shape political behavior, representation, and policy in the United States and beyond. Immigration, voting rights, and social movements.', credits: 1, category: 'elective', interestTags: ['history', 'cultural-studies'], prereqs: ['POL101'], genEdReqs: [] },

    // ===== BUSINESS & LEADERSHIP =====
    { id: 'BUS210', title: 'Principles of Accounting', description: 'Financial and managerial accounting fundamentals. Financial statements, cost analysis, and budgeting for decision-making.', credits: 1, category: 'elective', interestTags: [], prereqs: [], genEdReqs: [] },
    { id: 'BUS310', title: 'Corporate Finance', description: 'Capital budgeting, valuation, capital structure, and dividend policy. Financial decision-making for managers.', credits: 1, category: 'elective', interestTags: ['game-theory'], prereqs: ['ECON101', 'MATH160'], genEdReqs: [] },
    { id: 'BUS320', title: 'Marketing Strategy', description: 'Consumer behavior, market segmentation, branding, pricing, and digital marketing strategy.', credits: 1, category: 'elective', interestTags: ['design'], prereqs: [], genEdReqs: [] },
    { id: 'BUS330', title: 'Organizational Leadership', description: 'Leadership theory, team dynamics, organizational culture, and strategic management in diverse organizations.', credits: 1, category: 'elective', interestTags: [], prereqs: [], genEdReqs: [] },
    { id: 'BUS340', title: 'Entrepreneurship & Innovation', description: 'Opportunity identification, business model design, lean startup methods, and social entrepreneurship.', credits: 1, category: 'elective', interestTags: ['design'], prereqs: [], genEdReqs: [] },

    // ===== CONNECTIONS (interdisciplinary upper-division seminars) =====
    { id: 'CONN210', title: 'Science & Economics of Climate Change', description: 'Interdisciplinary examination of climate change through economic models and natural science. Carbon markets, cost-benefit analysis, and climate data interpretation.', credits: 1, category: 'elective', interestTags: ['science'], prereqs: [], genEdReqs: ['connections'] },
    { id: 'CONN215', title: 'Math and Music', description: 'Mathematical structures in music: frequency ratios, symmetry, group theory, and algorithmic composition. Combines music theory with mathematical reasoning.', credits: 1, category: 'elective', interestTags: ['philosophy'], prereqs: [], genEdReqs: ['connections'] },
    { id: 'CONN220', title: 'City and Society', description: 'Urban life through sociological, historical, and economic lenses. Urbanization, public space, inequality, and community in cities from ancient Rome to modern Tacoma.', credits: 1, category: 'elective', interestTags: ['history', 'cultural-studies'], prereqs: [], genEdReqs: ['connections'] },
    { id: 'CONN250', title: 'Art-Science', description: 'Creative intersections of art and science. Visualization of data, scientific illustration, bio-art, and collaborative projects bridging studio practice and laboratory inquiry.', credits: 1, category: 'elective', interestTags: ['design', 'science'], prereqs: [], genEdReqs: ['connections'] },
    { id: 'CONN305', title: 'Hooch: Natural & Social Science of Liquor', description: 'Chemistry of fermentation and distillation meets the history, economics, and cultural politics of alcohol. Team-taught by faculty in chemistry and history.', credits: 1, category: 'elective', interestTags: ['science', 'history'], prereqs: [], genEdReqs: ['connections'] },
    { id: 'CONN310', title: 'The Psychedelic Renaissance', description: 'Neuroscience, philosophy, and cultural history of psychedelics. Consciousness research, therapeutic applications, and the politics of altered states.', credits: 1, category: 'elective', interestTags: ['philosophy', 'science'], prereqs: [], genEdReqs: ['connections'] },
    { id: 'CONN350', title: 'Modeling Earth\'s Climate', description: 'Build and analyze computational climate models. Combines mathematics, physics, and environmental science to understand past and future climate change.', credits: 1, category: 'elective', interestTags: ['science'], prereqs: [], genEdReqs: ['connections'] },
    { id: 'CONN360', title: 'Food, Culture & Society', description: 'Food systems examined through anthropology, economics, and environmental science. Agriculture, global food trade, food justice, and sustainable eating.', credits: 1, category: 'elective', interestTags: ['cultural-studies', 'history'], prereqs: [], genEdReqs: ['connections'] },
  ],
};
