import { Curriculum } from '../../types';

export const richmondEcon: Curriculum = {
  schoolId: 'richmond',
  program: 'Economics',
  degreeRequirements: {
    totalCredits: 35, // Richmond uses units — 35 units to graduate
    majorCredits: 11,
    genEdCredits: 14,
    electiveCredits: 10,
    majorCourses: [
      'ECON101', 'ECON102', 'ECON270', 'ECON271', 'ECON272',
      'MATH211', 'MATH212', 'MATH119',
    ],
    genEdCategories: [
      { id: 'writing', name: 'First-Year Seminar (FYS)', creditsRequired: 1, satisfiedBy: ['FYS100'] },
      { id: 'quantitative', name: 'Symbolic Reasoning (SR)', creditsRequired: 1, satisfiedBy: ['MATH119', 'MATH211', 'MATH212'] },
      { id: 'natural-science', name: 'Natural Science (NS)', creditsRequired: 2, satisfiedBy: ['BIOL100', 'CHEM101', 'PHYS101', 'ASTR130'] },
      { id: 'social-science', name: 'Social Analysis (SA)', creditsRequired: 2, satisfiedBy: ['ECON101', 'PSYCH100', 'SOC100', 'PLSC100'] },
      { id: 'humanities', name: 'Literary Studies (LS)', creditsRequired: 1, satisfiedBy: ['ENGL203', 'ENGL210', 'ENGL240'] },
      { id: 'historical', name: 'Historical Studies (HS)', creditsRequired: 2, satisfiedBy: ['HIST100', 'HIST201', 'HIST230'] },
      { id: 'arts', name: 'Visual & Performing Arts (VPA)', creditsRequired: 1, satisfiedBy: ['ART101', 'ART130', 'MUSC100', 'THTR100'] },
      { id: 'diversity', name: 'Diverse Perspectives', creditsRequired: 2, satisfiedBy: ['AMST250', 'ENGL260', 'HIST245'] },
      { id: 'foreign-language', name: 'Foreign Language', creditsRequired: 2, satisfiedBy: ['JAPN101', 'JAPN102', 'JAPN201', 'JAPN202', 'SPAN101', 'SPAN102', 'FREN101', 'FREN102'] },
    ],
  },
  recommendedSequence: {
    years: 2,
    terms: [
      // YEAR 1 — Intro econ + math foundations, first-year seminar, begin gen-ed distribution
      {
        termLabel: 'Fall Year 1',
        courses: ['FYS100', 'ECON101', 'MATH211', 'HIST100'],
        locked: [true, true, true, false],
        slotLabels: ['First-Year Seminar (FYS, required)', 'Major req (Intro Micro)', 'Major req (Calculus I — also satisfies SR)', 'Historical Studies gen-ed (choose one)'],
      },
      {
        termLabel: 'Spring Year 1',
        courses: ['ECON102', 'MATH119', 'BIOL100', 'ENGL203'],
        locked: [true, true, false, false],
        slotLabels: ['Major req (Intro Macro — also satisfies SA)', 'Major req (Statistics — also satisfies SR)', 'Natural Science gen-ed (choose one)', 'Literary Studies gen-ed (choose one)'],
      },
      // YEAR 2 — Intermediate econ theory, remaining math, gen-ed distribution + electives
      {
        termLabel: 'Fall Year 2',
        courses: ['ECON270', 'MATH212', 'HIST245', 'ART130'],
        locked: [true, true, false, false],
        slotLabels: ['Major req (Intermediate Micro — prereqs: ECON101, MATH211)', 'Major req (Calculus II)', 'Historical Studies + Diverse Perspectives gen-ed (choose one)', 'Visual & Performing Arts gen-ed (choose one)'],
      },
      {
        termLabel: 'Spring Year 2',
        courses: ['ECON271', 'AMST250', 'ASTR130', 'PSYCH100'],
        locked: [true, false, false, false],
        slotLabels: ['Major req (Intermediate Macro — prereqs: ECON102, MATH211)', 'Diverse Perspectives gen-ed (choose one)', 'Natural Science gen-ed (choose one)', 'Elective / Social Analysis gen-ed (choose one)'],
      },
    ],
  },
  courses: [
    // ===== ECONOMICS MAJOR REQUIRED =====
    { id: 'ECON101', title: 'Principles of Microeconomics', description: 'Supply and demand, consumer theory, firm behavior, market structures, and market efficiency. Foundation for all upper-level economics.', credits: 1, category: 'major-required', interestTags: ['game-theory'], prereqs: [], genEdReqs: ['social-science'] },
    { id: 'ECON102', title: 'Principles of Macroeconomics', description: 'National income, unemployment, inflation, monetary and fiscal policy, and international economics.', credits: 1, category: 'major-required', interestTags: [], prereqs: [], genEdReqs: ['social-science'] },
    { id: 'ECON270', title: 'Intermediate Microeconomic Theory', description: 'Rigorous treatment of consumer and producer theory, general equilibrium, welfare economics, and game theory.', credits: 1, category: 'major-required', interestTags: ['game-theory'], prereqs: ['ECON101', 'MATH211'], genEdReqs: [] },
    { id: 'ECON271', title: 'Intermediate Macroeconomic Theory', description: 'Models of aggregate economic activity. Growth theory, business cycles, monetary policy, and open-economy macroeconomics.', credits: 1, category: 'major-required', interestTags: [], prereqs: ['ECON102', 'MATH211'], genEdReqs: [] },
    { id: 'ECON272', title: 'Econometrics', description: 'Statistical methods for economic analysis. Regression, hypothesis testing, and causal inference using real-world data.', credits: 1, category: 'major-required', interestTags: [], prereqs: ['ECON270', 'MATH119'], genEdReqs: [] },
    { id: 'MATH211', title: 'Calculus I', description: 'Limits, derivatives, and applications. Optimization, related rates, and introductory integration.', credits: 1, category: 'major-required', interestTags: [], prereqs: [], genEdReqs: ['quantitative'] },
    { id: 'MATH212', title: 'Calculus II', description: 'Techniques of integration, sequences, series, and multivariable calculus introduction.', credits: 1, category: 'major-required', interestTags: [], prereqs: ['MATH211'], genEdReqs: ['quantitative'] },
    { id: 'MATH119', title: 'Introduction to Statistics', description: 'Descriptive statistics, probability, distributions, confidence intervals, and hypothesis testing.', credits: 1, category: 'major-required', interestTags: [], prereqs: [], genEdReqs: ['quantitative'] },

    // ===== ECONOMICS ELECTIVES =====
    { id: 'ECON310', title: 'Game Theory & Strategic Behavior', description: 'Formal models of strategic interaction. Nash equilibrium, sequential games, repeated games, bargaining, and auction theory.', credits: 1, category: 'major-elective', interestTags: ['game-theory'], prereqs: ['ECON270'], genEdReqs: [] },
    { id: 'ECON315', title: 'Behavioral Economics', description: 'Integrating psychology into economic models. Prospect theory, bounded rationality, self-control, and nudge policy.', credits: 1, category: 'major-elective', interestTags: ['game-theory'], prereqs: ['ECON270'], genEdReqs: [] },
    { id: 'ECON320', title: 'Money & Banking', description: 'Financial markets, banking institutions, central banking, monetary policy, and financial crises.', credits: 1, category: 'major-elective', interestTags: [], prereqs: ['ECON271'], genEdReqs: [] },
    { id: 'ECON325', title: 'Public Finance', description: 'Government revenue, taxation, public expenditure, social insurance, and cost-benefit analysis.', credits: 1, category: 'major-elective', interestTags: [], prereqs: ['ECON270'], genEdReqs: [] },
    { id: 'ECON335', title: 'International Trade & Finance', description: 'Trade theory, exchange rates, balance of payments, trade policy, and global financial markets.', credits: 1, category: 'major-elective', interestTags: [], prereqs: ['ECON270'], genEdReqs: [] },
    { id: 'ECON345', title: 'Economics of Inequality', description: 'Income and wealth distribution, social mobility, discrimination, and policies to address inequality.', credits: 1, category: 'major-elective', interestTags: [], prereqs: ['ECON270'], genEdReqs: [] },

    // ===== CERAMICS / STUDIO ART =====
    { id: 'ART101', title: 'Fundamentals of Art', description: 'Elements and principles of visual art. Color theory, composition, and 2D/3D design thinking.', credits: 1, category: 'elective', interestTags: ['ceramics'], prereqs: [], genEdReqs: ['arts'] },
    { id: 'ART130', title: 'Ceramics I', description: 'Introduction to ceramic arts. Hand-building with coils, slabs, and pinch pots. Beginning wheel throwing. Glazing and kiln firing.', credits: 1, category: 'elective', interestTags: ['ceramics'], prereqs: [], genEdReqs: ['arts'] },
    { id: 'ART230', title: 'Ceramics II: Wheel Throwing', description: 'Development of wheel-throwing skills. Functional pottery, surface treatment, glaze chemistry basics, and kiln atmosphere.', credits: 1, category: 'elective', interestTags: ['ceramics'], prereqs: ['ART130'], genEdReqs: [] },
    { id: 'ART330', title: 'Ceramics III: Advanced Studio', description: 'Personal artistic vision in clay. Sculptural ceramics, mixed-media, exhibition preparation. Independent studio work.', credits: 1, category: 'elective', interestTags: ['ceramics'], prereqs: ['ART230'], genEdReqs: [] },
    { id: 'ART120', title: 'Drawing I', description: 'Observational drawing in graphite, charcoal, and ink. Composition, perspective, and tonal rendering.', credits: 1, category: 'elective', interestTags: ['ceramics'], prereqs: [], genEdReqs: ['arts'] },
    { id: 'ART140', title: 'Painting I', description: 'Introduction to oil and acrylic painting. Color mixing, brushwork, and painting from observation and imagination.', credits: 1, category: 'elective', interestTags: ['ceramics'], prereqs: [], genEdReqs: ['arts'] },
    { id: 'ART150', title: 'Sculpture I', description: 'Three-dimensional art in wood, plaster, metal, and found materials. Additive and subtractive processes.', credits: 1, category: 'elective', interestTags: ['ceramics'], prereqs: [], genEdReqs: ['arts'] },

    // ===== DESIGN / DIGITAL MEDIA =====
    { id: 'ART160', title: 'Graphic Design Fundamentals', description: 'Typography, layout, color systems, and visual hierarchy. Projects in poster, publication, and identity design using Adobe Creative Suite.', credits: 1, category: 'elective', interestTags: ['design'], prereqs: [], genEdReqs: ['arts'] },
    { id: 'ART260', title: 'Digital Photography', description: 'Camera techniques, digital editing, composition, and visual storytelling. Lightroom and Photoshop workflows for artistic and documentary photography.', credits: 1, category: 'elective', interestTags: ['design'], prereqs: [], genEdReqs: ['arts'] },
    { id: 'ART270', title: 'Digital Media & Animation', description: 'Motion graphics, 2D animation, and video editing. Storytelling through time-based media using After Effects and Premiere Pro.', credits: 1, category: 'elective', interestTags: ['design', 'video-games'], prereqs: [], genEdReqs: [] },
    { id: 'ART360', title: 'Interactive Design', description: 'Designing for screens and digital experiences. User interface mockups, clickable prototypes, and responsive design principles using Figma.', credits: 1, category: 'elective', interestTags: ['design'], prereqs: ['ART160'], genEdReqs: [] },
    { id: 'ART370', title: 'Visual Communication & Branding', description: 'Building cohesive visual identities. Logo systems, brand guidelines, packaging, and environmental graphics. Client-based studio projects.', credits: 1, category: 'elective', interestTags: ['design'], prereqs: ['ART160'], genEdReqs: [] },

    // ===== ASTRONOMY / SPACE =====
    { id: 'ASTR130', title: 'Introduction to Astronomy', description: 'Tour of the universe: solar system, stars, galaxies, and cosmology. Nighttime observatory sessions on campus.', credits: 1, category: 'elective', interestTags: ['astronomy', 'space', 'science'], prereqs: [], genEdReqs: ['natural-science'] },
    { id: 'PHYS101', title: 'General Physics I', description: 'Mechanics, waves, and thermodynamics. Algebra-based with lab. Foundation for understanding physical sciences.', credits: 1, category: 'elective', interestTags: ['space', 'science'], prereqs: [], genEdReqs: ['natural-science'] },
    { id: 'PHYS102', title: 'General Physics II', description: 'Electricity, magnetism, optics, and modern physics. Laboratory included.', credits: 1, category: 'elective', interestTags: ['space', 'science'], prereqs: ['PHYS101'], genEdReqs: ['natural-science'] },

    // ===== HISTORY =====
    { id: 'HIST100', title: 'Introduction to Historical Thinking', description: 'How historians work: primary sources, interpretation, context, and constructing historical arguments.', credits: 1, category: 'elective', interestTags: ['history'], prereqs: [], genEdReqs: ['historical'] },
    { id: 'HIST201', title: 'United States History to 1865', description: 'Colonial America through the Civil War. Indigenous encounters, slavery, revolution, and national expansion.', credits: 1, category: 'elective', interestTags: ['history'], prereqs: [], genEdReqs: ['historical'] },
    { id: 'HIST230', title: 'East Asian Civilizations', description: 'History of China, Japan, and Korea from ancient origins to the modern era. Philosophy, art, governance, and cultural exchange.', credits: 1, category: 'elective', interestTags: ['history', 'cultural-studies'], prereqs: [], genEdReqs: ['historical'] },
    { id: 'HIST245', title: 'Race & Ethnicity in American History', description: 'How racial categories were constructed and contested throughout American history. Immigration, civil rights, and social justice.', credits: 1, category: 'elective', interestTags: ['history', 'cultural-studies'], prereqs: [], genEdReqs: ['historical', 'diversity'] },
    { id: 'HIST310', title: 'The Civil Rights Movement', description: 'The movement for racial equality in America from WWII to the present. Leaders, strategies, and lasting impact.', credits: 1, category: 'elective', interestTags: ['history'], prereqs: [], genEdReqs: [] },
    { id: 'HIST335', title: 'Modern Japan', description: 'Japan from the Meiji Restoration to present. Modernization, imperialism, WWII, postwar recovery, and contemporary culture.', credits: 1, category: 'elective', interestTags: ['history', 'cultural-studies'], prereqs: [], genEdReqs: [] },
    { id: 'HIST345', title: 'Cold War America', description: 'American society, politics, and culture during the Cold War. McCarthyism, space race, Vietnam, and cultural change.', credits: 1, category: 'elective', interestTags: ['history', 'space'], prereqs: [], genEdReqs: [] },
    { id: 'HIST130', title: 'Ancient Greece & Rome', description: 'Greek democracy, Roman Republic, and the ancient Mediterranean. Philosophy, art, and war.', credits: 1, category: 'elective', interestTags: ['history', 'classics'], prereqs: [], genEdReqs: ['historical-studies'] },
    { id: 'HIST131', title: 'Medieval & Early Modern Europe', description: 'Feudalism to the Enlightenment. Crusades, Renaissance, Reformation, and scientific revolution.', credits: 1, category: 'elective', interestTags: ['history'], prereqs: [], genEdReqs: ['historical-studies'] },
    { id: 'HIST250', title: 'Modern Europe', description: 'French Revolution to the present. Nationalism, industrialization, world wars, Cold War, and the EU.', credits: 1, category: 'elective', interestTags: ['history'], prereqs: [], genEdReqs: [] },
    { id: 'HIST240', title: 'History of the Middle East', description: 'Ottoman Empire to contemporary politics. Colonialism, nationalism, oil, and the Arab-Israeli conflict.', credits: 1, category: 'elective', interestTags: ['history'], prereqs: [], genEdReqs: [] },
    { id: 'HIST260', title: 'African History', description: 'Precolonial kingdoms through independence movements. Slavery, colonialism, and postcolonial challenges.', credits: 1, category: 'elective', interestTags: ['history'], prereqs: [], genEdReqs: [] },

    // ===== ASIAN AMERICAN / IDENTITY =====
    { id: 'AMST250', title: 'Introduction to American Studies', description: 'Interdisciplinary study of American culture, identity, and society. Race, gender, class, and cultural production.', credits: 1, category: 'elective', interestTags: ['cultural-studies'], prereqs: [], genEdReqs: ['diversity'] },
    { id: 'ENGL260', title: 'Asian American Literature', description: 'Fiction, poetry, and memoir by Asian American writers. Immigration narratives, identity, cultural hybridity, and belonging.', credits: 1, category: 'elective', interestTags: ['cultural-studies', 'literature'], prereqs: [], genEdReqs: ['diversity'] },
    { id: 'SOC310', title: 'Race, Class & Gender', description: 'Intersectional analysis of inequality in American society. Structural racism, class stratification, and gender norms.', credits: 1, category: 'elective', interestTags: ['cultural-studies'], prereqs: ['SOC100'], genEdReqs: ['diversity'] },

    // ===== LITERATURE =====
    { id: 'ENGL203', title: 'Introduction to Literary Analysis', description: 'Close reading of fiction, poetry, and drama. Critical approaches, literary terminology, and interpretive writing.', credits: 1, category: 'elective', interestTags: ['literature'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'ENGL210', title: 'British Literature I', description: 'Survey from Beowulf to the Romantics. Medieval, Renaissance, Enlightenment literary traditions.', credits: 1, category: 'elective', interestTags: ['literature'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'ENGL240', title: 'American Literature', description: 'Major American literary works from the colonial period to the present. Diverse voices and national identity.', credits: 1, category: 'elective', interestTags: ['literature'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'ENGL280', title: 'Creative Writing: Fiction', description: 'Workshop in short fiction. Craft of storytelling, character, voice, and revision through peer critique.', credits: 1, category: 'elective', interestTags: ['literature'], prereqs: [], genEdReqs: [] },
    { id: 'ENGL285', title: 'Creative Writing: Poetry', description: 'Workshop in poetry. Form, imagery, sound, and revision. Reading and responding to contemporary poetry.', credits: 1, category: 'elective', interestTags: ['literature'], prereqs: [], genEdReqs: [] },
    { id: 'ENGL350', title: 'The Novel', description: 'Development of the novel as literary form. Close reading of major novels across periods and traditions.', credits: 1, category: 'elective', interestTags: ['literature'], prereqs: ['ENGL203'], genEdReqs: [] },
    { id: 'ENGL205', title: 'Shakespeare', description: 'Major plays and sonnets with attention to performance, language, and cultural context.', credits: 1, category: 'elective', interestTags: ['literature', 'classics'], prereqs: [], genEdReqs: ['literary-studies'] },
    { id: 'ENGL250', title: 'The British Novel', description: 'Defoe to Zadie Smith. The novel as social mirror: class, empire, and individual consciousness.', credits: 1, category: 'elective', interestTags: ['literature'], prereqs: [], genEdReqs: ['literary-studies'] },
    { id: 'CLAS200', title: 'Classical Literature', description: 'Homer, Virgil, Ovid, Sappho. Epic, tragedy, and lyric poetry from Greece and Rome.', credits: 1, category: 'elective', interestTags: ['literature', 'classics'], prereqs: [], genEdReqs: ['literary-studies'] },
    { id: 'RHCS240', title: 'Russian Literature', description: 'Dostoevsky, Tolstoy, Chekhov, Bulgakov. The Russian tradition: moral philosophy through fiction.', credits: 1, category: 'elective', interestTags: ['literature'], prereqs: [], genEdReqs: ['literary-studies'] },
    { id: 'ENGL275', title: 'World Literature', description: 'Voices from across the globe: African, Latin American, Asian, and Middle Eastern literary traditions.', credits: 1, category: 'elective', interestTags: ['literature'], prereqs: [], genEdReqs: ['literary-studies'] },

    // ===== FOREIGN LANGUAGE =====
    { id: 'JAPN101', title: 'Elementary Japanese I', description: 'Introduction to spoken and written Japanese. Hiragana, katakana, basic grammar, and everyday conversation.', credits: 1, category: 'gen-ed', interestTags: ['cultural-studies'], prereqs: [], genEdReqs: ['foreign-language'] },
    { id: 'JAPN102', title: 'Elementary Japanese II', description: 'Continuation of Japanese I. More grammar, reading, and writing. Introduction to kanji.', credits: 1, category: 'gen-ed', interestTags: ['cultural-studies'], prereqs: ['JAPN101'], genEdReqs: ['foreign-language'] },
    { id: 'JAPN201', title: 'Intermediate Japanese I', description: 'Intermediate grammar, reading, and conversation. More complex kanji and written expression.', credits: 1, category: 'gen-ed', interestTags: ['cultural-studies'], prereqs: ['JAPN102'], genEdReqs: ['foreign-language'] },
    { id: 'JAPN202', title: 'Intermediate Japanese II', description: 'Continued development of reading, writing, and speaking. Cultural topics and authentic materials.', credits: 1, category: 'gen-ed', interestTags: ['cultural-studies'], prereqs: ['JAPN201'], genEdReqs: ['foreign-language'] },
    { id: 'SPAN101', title: 'Elementary Spanish I', description: 'Introduction to Spanish language and culture. Speaking, listening, reading, and writing fundamentals.', credits: 1, category: 'gen-ed', interestTags: [], prereqs: [], genEdReqs: ['foreign-language'] },
    { id: 'SPAN102', title: 'Elementary Spanish II', description: 'Continuation of Spanish I. More complex grammar, vocabulary, and cultural exploration.', credits: 1, category: 'gen-ed', interestTags: [], prereqs: ['SPAN101'], genEdReqs: ['foreign-language'] },
    { id: 'FREN101', title: 'Elementary French I', description: 'Introduction to French language. Pronunciation, grammar, conversation, and Francophone cultures.', credits: 1, category: 'gen-ed', interestTags: [], prereqs: [], genEdReqs: ['foreign-language'] },
    { id: 'FREN102', title: 'Elementary French II', description: 'Continuation of French I. Reading, writing, and oral expression with cultural content.', credits: 1, category: 'gen-ed', interestTags: [], prereqs: ['FREN101'], genEdReqs: ['foreign-language'] },

    // ===== GENERAL ED OPTIONS =====
    { id: 'FYS100', title: 'First-Year Seminar', description: 'Small seminar introducing college-level thinking and writing. Topics vary by section. Class size capped at 16 students.', credits: 1, category: 'gen-ed', interestTags: [], prereqs: [], genEdReqs: ['writing'] },
    { id: 'PSYCH100', title: 'Introduction to Psychology', description: 'Scientific study of behavior and mental processes. Research methods, brain, learning, memory, and social behavior.', credits: 1, category: 'gen-ed', interestTags: [], prereqs: [], genEdReqs: ['social-science'] },
    { id: 'SOC100', title: 'Introduction to Sociology', description: 'Social structures, institutions, inequality, and change. How society shapes individual experience.', credits: 1, category: 'gen-ed', interestTags: [], prereqs: [], genEdReqs: ['social-science'] },
    { id: 'PLSC100', title: 'Introduction to Political Science', description: 'Political systems, institutions, and ideologies. American government, comparative politics, and international relations.', credits: 1, category: 'gen-ed', interestTags: [], prereqs: [], genEdReqs: ['social-science'] },
    { id: 'BIOL100', title: 'Biology for Non-Majors', description: 'Genetics, evolution, ecology, and contemporary issues in biology. Laboratory included.', credits: 1, category: 'gen-ed', interestTags: ['science'], prereqs: [], genEdReqs: ['natural-science'] },
    { id: 'CHEM101', title: 'General Chemistry I', description: 'Atomic theory, bonding, reactions, stoichiometry, and gases. Laboratory included.', credits: 1, category: 'gen-ed', interestTags: ['science'], prereqs: [], genEdReqs: ['natural-science'] },
    { id: 'MUSC100', title: 'Introduction to Music', description: 'Elements of music, historical periods, and diverse musical traditions. Concert attendance required.', credits: 1, category: 'gen-ed', interestTags: [], prereqs: [], genEdReqs: ['arts'] },
    { id: 'THTR100', title: 'Introduction to Theater', description: 'Theater as art form and cultural expression. Acting, design, and dramatic literature. Performance attendance.', credits: 1, category: 'gen-ed', interestTags: [], prereqs: [], genEdReqs: ['arts'] },
    { id: 'CSCI150', title: 'Introduction to Computing', description: 'Computational problem-solving with Python. Variables, loops, functions, and data manipulation.', credits: 1, category: 'elective', interestTags: ['video-games'], prereqs: [], genEdReqs: [] },
    { id: 'LDSP200', title: 'Leadership Studies', description: 'Theories and practices of leadership. Self-awareness, group dynamics, ethics, and community engagement.', credits: 1, category: 'elective', interestTags: [], prereqs: [], genEdReqs: [] },

    // ===== PHILOSOPHY =====
    { id: 'PHIL101', title: 'Introduction to Philosophy', description: 'Fundamental questions about knowledge, reality, free will, and the good life. Socratic seminar format.', credits: 1, category: 'elective', interestTags: ['philosophy'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'PHIL201', title: 'Ethics', description: 'Moral theories and their application. Utilitarianism, Kantian ethics, virtue ethics, and contemporary dilemmas.', credits: 1, category: 'elective', interestTags: ['philosophy'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'PHIL210', title: 'Logic', description: 'Propositional and predicate logic. Valid reasoning, truth tables, and formal proof techniques.', credits: 1, category: 'elective', interestTags: ['philosophy', 'game-theory'], prereqs: [], genEdReqs: [] },
    { id: 'PHIL240', title: 'Philosophy of Mind', description: 'Consciousness, personal identity, AI and minds, and the mind-body problem.', credits: 1, category: 'elective', interestTags: ['philosophy', 'design'], prereqs: ['PHIL101'], genEdReqs: [] },
    { id: 'PHIL250', title: 'Political Philosophy', description: 'Justice, rights, liberty, equality, and democracy. Rawls, Nozick, and contemporary debates.', credits: 1, category: 'elective', interestTags: ['philosophy'], prereqs: [], genEdReqs: [] },
    { id: 'PHIL260', title: 'Existentialism', description: 'Freedom, absurdity, and authentic living. Kierkegaard, Nietzsche, Heidegger, Sartre, de Beauvoir, and Camus.', credits: 1, category: 'elective', interestTags: ['philosophy', 'literature'], prereqs: [], genEdReqs: [] },
    { id: 'PHIL270', title: 'Philosophy of Science', description: 'Nature of scientific knowledge, falsification, paradigm shifts, and the role of values in science.', credits: 1, category: 'elective', interestTags: ['philosophy', 'space'], prereqs: [], genEdReqs: [] },
    { id: 'PHIL310', title: 'Ethics & Contemporary Society', description: 'Applied ethics in technology, medicine, business, and the environment. Case-based analysis of moral dilemmas in modern life.', credits: 1, category: 'elective', interestTags: ['philosophy'], prereqs: ['PHIL201'], genEdReqs: [] },
    { id: 'PHIL340', title: 'Epistemology', description: 'Theories of knowledge, justification, and belief. Skepticism, foundationalism, coherentism, and social epistemology.', credits: 1, category: 'elective', interestTags: ['philosophy'], prereqs: ['PHIL101'], genEdReqs: [] },
    { id: 'PHIL350', title: 'Advanced Political Philosophy', description: 'Global justice, immigration, reparations, democratic theory, and the ethics of political institutions.', credits: 1, category: 'elective', interestTags: ['philosophy'], prereqs: ['PHIL250'], genEdReqs: [] },
    { id: 'PHIL360', title: 'Philosophy of Art & Aesthetics', description: 'What is art? Beauty, taste, artistic expression, and the role of art in human experience. From Plato to contemporary theory.', credits: 1, category: 'elective', interestTags: ['philosophy'], prereqs: ['PHIL101'], genEdReqs: [] },
    { id: 'PHIL375', title: 'Advanced Philosophy of Science', description: 'Causation, explanation, scientific realism, and the structure of scientific revolutions. Case studies from physics and biology.', credits: 1, category: 'elective', interestTags: ['philosophy', 'space'], prereqs: ['PHIL270'], genEdReqs: [] },

    // ===== UPPER-DIVISION ECONOMICS ELECTIVES =====
    { id: 'ECON330', title: 'Labor Economics', description: 'Labor markets, wage determination, human capital, unemployment, discrimination, and immigration. Empirical analysis of labor policy.', credits: 1, category: 'major-elective', interestTags: [], prereqs: ['ECON270'], genEdReqs: [] },
    { id: 'ECON340', title: 'Environmental Economics', description: 'Market failures and externalities. Pollution regulation, climate policy, natural resource management, and cost-benefit analysis.', credits: 1, category: 'major-elective', interestTags: [], prereqs: ['ECON270'], genEdReqs: [] },
    { id: 'ECON350', title: 'Financial Economics', description: 'Asset pricing, portfolio theory, risk and return, efficient markets, and behavioral finance. Bridges economics and finance.', credits: 1, category: 'major-elective', interestTags: [], prereqs: ['ECON270', 'MATH119'], genEdReqs: [] },
    { id: 'ECON360', title: 'Economic History', description: 'Long-run economic growth from the Industrial Revolution to globalization. Institutions, technology, and divergence across nations.', credits: 1, category: 'major-elective', interestTags: ['history'], prereqs: ['ECON271'], genEdReqs: [] },
    { id: 'ECON370', title: 'Health Economics', description: 'Economics of healthcare markets, insurance, public health policy, and the pharmaceutical industry. US and comparative systems.', credits: 1, category: 'major-elective', interestTags: [], prereqs: ['ECON270'], genEdReqs: [] },
    { id: 'ECON380', title: 'Monetary Economics', description: 'Money supply, central banking, interest rate policy, inflation targeting, and unconventional monetary policy. Historical and current debates.', credits: 1, category: 'major-elective', interestTags: [], prereqs: ['ECON271'], genEdReqs: [] },
    { id: 'ECON390', title: 'Development Economics', description: 'Poverty, growth, and institutions in developing countries. Microfinance, foreign aid, trade, and randomized policy evaluation.', credits: 1, category: 'major-elective', interestTags: ['cultural-studies'], prereqs: ['ECON270'], genEdReqs: [] },
    { id: 'ECON410', title: 'Advanced Econometrics', description: 'Instrumental variables, panel data, difference-in-differences, regression discontinuity, and machine learning methods for causal inference.', credits: 1, category: 'major-elective', interestTags: [], prereqs: ['ECON272'], genEdReqs: [] },
    { id: 'ECON420', title: 'Advanced International Trade', description: 'New trade theory, gravity models, trade agreements, offshoring, and the political economy of trade policy.', credits: 1, category: 'major-elective', interestTags: [], prereqs: ['ECON335'], genEdReqs: [] },
    { id: 'ECON450', title: 'Senior Seminar in Economics', description: 'Capstone research seminar. Students design and execute an original empirical research project using econometric methods.', credits: 1, category: 'major-elective', interestTags: [], prereqs: ['ECON272'], genEdReqs: [] },

    // ===== COGNITIVE SCIENCE / PSYCHOLOGY =====
    { id: 'PSYC310', title: 'Cognitive Psychology', description: 'Perception, attention, memory, language, and problem-solving. How the mind processes, stores, and retrieves information.', credits: 1, category: 'elective', interestTags: ['philosophy'], prereqs: ['PSYCH100'], genEdReqs: [] },
    { id: 'PSYC320', title: 'Behavioral Psychology', description: 'Classical and operant conditioning, reinforcement, behavior modification, and applications to education and therapy.', credits: 1, category: 'elective', interestTags: [], prereqs: ['PSYCH100'], genEdReqs: [] },
    { id: 'PSYC330', title: 'Research Methods in Psychology', description: 'Experimental design, survey methods, observational studies, and statistical analysis. Hands-on lab projects with IRB protocols.', credits: 1, category: 'elective', interestTags: [], prereqs: ['PSYCH100', 'MATH119'], genEdReqs: [] },
    { id: 'PSYC340', title: 'Social Cognition', description: 'How people perceive, judge, and remember others. Stereotyping, attribution, attitudes, and persuasion from a cognitive perspective.', credits: 1, category: 'elective', interestTags: ['philosophy'], prereqs: ['PSYCH100'], genEdReqs: [] },
    { id: 'PSYC350', title: 'Judgment & Decision-Making', description: 'Heuristics, biases, and rationality. Prospect theory, framing effects, and the psychology behind economic and everyday choices.', credits: 1, category: 'elective', interestTags: ['game-theory', 'philosophy'], prereqs: ['PSYCH100'], genEdReqs: [] },
    { id: 'PSYC360', title: 'Neuroscience of Decision-Making', description: 'Neural mechanisms underlying reward, risk, and choice. Brain imaging studies of economic and social decisions. Bridges neuroscience and behavioral economics.', credits: 1, category: 'elective', interestTags: ['philosophy', 'game-theory'], prereqs: ['PSYC310'], genEdReqs: [] },
    { id: 'PSYC370', title: 'Perception & Sensation', description: 'Visual, auditory, and haptic perception. Neural coding of sensory information, perceptual illusions, and attention as a gateway to conscious experience.', credits: 1, category: 'elective', interestTags: ['philosophy', 'design'], prereqs: ['PSYCH100'], genEdReqs: [] },
    { id: 'PSYC380', title: 'Introduction to Neuroscience', description: 'Structure and function of the nervous system. Neurons, synapses, neurotransmitters, and the neural basis of behavior, emotion, and cognition.', credits: 1, category: 'elective', interestTags: ['philosophy'], prereqs: ['PSYCH100'], genEdReqs: [] },
    { id: 'PSYC410', title: 'Cognitive Neuroscience', description: 'Brain mechanisms of memory, language, attention, and executive function. fMRI and EEG methods for studying the neural architecture of thought.', credits: 1, category: 'elective', interestTags: ['philosophy'], prereqs: ['PSYC310', 'PSYC380'], genEdReqs: [] },
    { id: 'PSYC420', title: 'Language & the Mind', description: 'How humans acquire, produce, and comprehend language. Psycholinguistics, bilingualism, language disorders, and computational models of language processing.', credits: 1, category: 'elective', interestTags: ['philosophy'], prereqs: ['PSYC310'], genEdReqs: [] },

    // ===== COMPUTER SCIENCE =====
    { id: 'CMSC150', title: 'Introduction to Computer Science', description: 'Foundational CS concepts using Python. Abstraction, algorithms, data structures, and object-oriented programming.', credits: 1, category: 'elective', interestTags: ['video-games'], prereqs: [], genEdReqs: [] },
    { id: 'CMSC301', title: 'Data Science', description: 'Data wrangling, visualization, and statistical modeling in Python. Pandas, matplotlib, and real-world data analysis projects.', credits: 1, category: 'elective', interestTags: [], prereqs: ['CMSC150'], genEdReqs: [] },
    { id: 'CMSC310', title: 'Introduction to Machine Learning', description: 'Supervised and unsupervised learning, decision trees, neural networks, and model evaluation. Hands-on projects with scikit-learn.', credits: 1, category: 'elective', interestTags: [], prereqs: ['CMSC150', 'MATH119'], genEdReqs: [] },
    { id: 'CMSC320', title: 'Database Systems', description: 'Relational databases, SQL, data modeling, normalization, and an introduction to NoSQL and cloud-based data storage.', credits: 1, category: 'elective', interestTags: [], prereqs: ['CMSC150'], genEdReqs: [] },
    { id: 'CMSC330', title: 'Web Development', description: 'Full-stack web development with HTML, CSS, JavaScript, and server-side frameworks. Building and deploying interactive applications.', credits: 1, category: 'elective', interestTags: ['design', 'video-games'], prereqs: ['CMSC150'], genEdReqs: [] },
    { id: 'CMSC340', title: 'Human-Computer Interaction', description: 'User-centered design principles, usability testing, prototyping, and interface evaluation. Design thinking applied to software systems.', credits: 1, category: 'elective', interestTags: ['design'], prereqs: ['CMSC150'], genEdReqs: [] },
    { id: 'CMSC350', title: 'Artificial Intelligence', description: 'Search algorithms, knowledge representation, natural language processing, and ethical implications of AI systems. Hands-on projects in Python.', credits: 1, category: 'elective', interestTags: ['philosophy', 'game-theory'], prereqs: ['CMSC150', 'MATH119'], genEdReqs: [] },
    { id: 'CMSC360', title: 'Data Visualization', description: 'Principles of effective data communication. Interactive dashboards, narrative visualization, and design choices that shape interpretation. D3.js and Tableau.', credits: 1, category: 'elective', interestTags: ['design'], prereqs: ['CMSC150'], genEdReqs: [] },
    { id: 'CMSC370', title: 'Software Engineering', description: 'Agile development, version control, testing, and collaborative coding. Team-based project building a real application from requirements to deployment.', credits: 1, category: 'elective', interestTags: ['video-games'], prereqs: ['CMSC150'], genEdReqs: [] },
    { id: 'CMSC380', title: 'Algorithms & Data Structures', description: 'Sorting, searching, graph algorithms, trees, and hash tables. Computational complexity and algorithm design strategies for efficient problem-solving.', credits: 1, category: 'elective', interestTags: ['game-theory'], prereqs: ['CMSC150'], genEdReqs: [] },

    // ===== STATISTICS / MATH =====
    { id: 'MATH310', title: 'Mathematical Statistics', description: 'Probability theory, distributions, maximum likelihood, Bayesian inference, and hypothesis testing with mathematical rigor.', credits: 1, category: 'elective', interestTags: [], prereqs: ['MATH212', 'MATH119'], genEdReqs: [] },
    { id: 'MATH320', title: 'Probability Theory', description: 'Axioms of probability, random variables, expectation, limit theorems, and stochastic processes. Applications to science and economics.', credits: 1, category: 'elective', interestTags: [], prereqs: ['MATH212'], genEdReqs: [] },
    { id: 'MATH330', title: 'Linear Algebra', description: 'Vector spaces, matrices, eigenvalues, linear transformations, and applications to data science and economics.', credits: 1, category: 'elective', interestTags: [], prereqs: ['MATH212'], genEdReqs: [] },
    { id: 'MATH340', title: 'Operations Research', description: 'Linear programming, optimization, network models, queuing theory, and decision analysis. Applications to business and policy.', credits: 1, category: 'elective', interestTags: ['game-theory'], prereqs: ['MATH330'], genEdReqs: [] },
    { id: 'MATH350', title: 'Applied Data Analysis', description: 'Multivariate statistics, regression modeling, classification, and clustering. R-based lab work with real datasets.', credits: 1, category: 'elective', interestTags: [], prereqs: ['MATH119'], genEdReqs: [] },
    { id: 'MATH360', title: 'Regression Analysis', description: 'Simple and multiple regression, diagnostics, model selection, and logistic regression. Emphasis on interpretation and real-world applications in social science.', credits: 1, category: 'elective', interestTags: [], prereqs: ['MATH119', 'MATH212'], genEdReqs: [] },
    { id: 'MATH370', title: 'Bayesian Statistics', description: 'Prior and posterior distributions, Markov chain Monte Carlo, hierarchical models, and Bayesian decision theory. R and Stan programming.', credits: 1, category: 'elective', interestTags: ['philosophy'], prereqs: ['MATH310'], genEdReqs: [] },
    { id: 'MATH380', title: 'Time Series Analysis', description: 'ARIMA models, forecasting, spectral analysis, and state-space models. Applications to financial markets and economic indicators.', credits: 1, category: 'elective', interestTags: [], prereqs: ['MATH119', 'MATH212'], genEdReqs: [] },
    { id: 'MATH390', title: 'Statistical Learning', description: 'Cross-validation, regularization, splines, tree-based methods, and support vector machines. Bridge between classical statistics and machine learning.', credits: 1, category: 'elective', interestTags: [], prereqs: ['MATH330', 'MATH119'], genEdReqs: [] },
    { id: 'MATH355', title: 'Experimental Design', description: 'Randomized experiments, factorial designs, blocking, ANOVA, and power analysis. Planning studies that yield credible causal conclusions.', credits: 1, category: 'elective', interestTags: [], prereqs: ['MATH119'], genEdReqs: [] },

    // ===== POLITICAL SCIENCE =====
    { id: 'PLSC310', title: 'International Relations', description: 'Theories of world politics: realism, liberalism, constructivism. Security, trade, diplomacy, and international organizations.', credits: 1, category: 'elective', interestTags: ['history'], prereqs: ['PLSC100'], genEdReqs: [] },
    { id: 'PLSC320', title: 'Political Economy', description: 'Intersection of politics and economics. Trade policy, development, globalization, and the role of institutions in economic outcomes.', credits: 1, category: 'elective', interestTags: ['game-theory'], prereqs: ['PLSC100'], genEdReqs: [] },
    { id: 'PLSC330', title: 'Constitutional Law', description: 'Supreme Court jurisprudence on federalism, separation of powers, due process, equal protection, and the Bill of Rights.', credits: 1, category: 'elective', interestTags: ['history'], prereqs: ['PLSC100'], genEdReqs: [] },
    { id: 'PLSC340', title: 'Public Policy Analysis', description: 'Frameworks for analyzing public policy. Healthcare, education, environment, and criminal justice. Evidence-based policy evaluation.', credits: 1, category: 'elective', interestTags: [], prereqs: ['PLSC100'], genEdReqs: [] },
    { id: 'PLSC350', title: 'Comparative Politics', description: 'Political systems across democracies and authoritarian regimes. Elections, parties, institutions, and political culture worldwide.', credits: 1, category: 'elective', interestTags: ['cultural-studies'], prereqs: ['PLSC100'], genEdReqs: [] },
    { id: 'PLSC360', title: 'Game Theory & Politics', description: 'Formal models of political behavior. Voting paradoxes, coalition formation, arms races, and strategic interaction in legislatures and international negotiations.', credits: 1, category: 'elective', interestTags: ['game-theory'], prereqs: ['PLSC100'], genEdReqs: [] },
    { id: 'PLSC370', title: 'International Security', description: 'War, deterrence, terrorism, nuclear proliferation, and cybersecurity. Theories and case studies of conflict and cooperation among states.', credits: 1, category: 'elective', interestTags: ['history'], prereqs: ['PLSC310'], genEdReqs: [] },
    { id: 'PLSC380', title: 'American Foreign Policy', description: 'US foreign policy from the Cold War to the present. Decision-making processes, grand strategy, alliances, and the domestic politics of international engagement.', credits: 1, category: 'elective', interestTags: ['history'], prereqs: ['PLSC100'], genEdReqs: [] },
    { id: 'PLSC390', title: 'Politics of Developing Nations', description: 'Democratization, state-building, ethnic conflict, and economic reform in the Global South. Case studies from Africa, Asia, and Latin America.', credits: 1, category: 'elective', interestTags: ['cultural-studies', 'history'], prereqs: ['PLSC100'], genEdReqs: [] },
    { id: 'PLSC410', title: 'Civil Liberties & the Supreme Court', description: 'First Amendment freedoms, privacy, criminal justice rights, and equal protection doctrine. Landmark cases and contemporary constitutional debates.', credits: 1, category: 'elective', interestTags: ['history', 'philosophy'], prereqs: ['PLSC330'], genEdReqs: [] },

    // ===== LEADERSHIP STUDIES (JEPSON SCHOOL) =====
    { id: 'LDST310', title: 'Leadership Ethics', description: 'Ethical theories applied to leadership practice. Moral courage, responsibility, power dynamics, and ethical decision-making frameworks.', credits: 1, category: 'elective', interestTags: ['philosophy'], prereqs: ['LDSP200'], genEdReqs: [] },
    { id: 'LDST320', title: 'Organizational Behavior & Leadership', description: 'Motivation, team dynamics, organizational culture, change management, and the psychology of leading within institutions.', credits: 1, category: 'elective', interestTags: [], prereqs: ['LDSP200'], genEdReqs: [] },
    { id: 'LDST330', title: 'Social Movements & Leadership', description: 'How movements emerge, mobilize, and create change. Civil rights, environmentalism, labor, and contemporary activism.', credits: 1, category: 'elective', interestTags: ['history'], prereqs: ['LDSP200'], genEdReqs: [] },
    { id: 'LDST340', title: 'Civic Engagement & Democratic Leadership', description: 'Community-based leadership, deliberative democracy, service-learning, and the role of citizens in governance.', credits: 1, category: 'elective', interestTags: [], prereqs: ['LDSP200'], genEdReqs: [] },
    { id: 'LDST350', title: 'Nonprofit Management & Leadership', description: 'Leading mission-driven organizations. Fundraising, board governance, volunteer management, and social enterprise strategy.', credits: 1, category: 'elective', interestTags: [], prereqs: ['LDSP200'], genEdReqs: [] },
  ],
};
