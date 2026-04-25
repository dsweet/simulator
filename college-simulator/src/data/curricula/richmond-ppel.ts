import { Curriculum } from '../../types';

export const richmondPpel: Curriculum = {
  schoolId: 'richmond',
  program: 'PPEL (Philosophy, Politics, Economics & Law)',
  degreeRequirements: {
    totalCredits: 35, // Richmond uses units — 35 units to graduate
    majorCredits: 14, // 5 core + 3 area courses + ~6 concentration
    genEdCredits: 14,
    electiveCredits: 7,
    majorCourses: [
      'ECON101', 'PPEL261', 'PPEL262', 'PPEL363', 'PPEL401',
    ],
    genEdCategories: [
      { id: 'writing', name: 'First-Year Seminar (FYS)', creditsRequired: 1, satisfiedBy: ['FYS100'] },
      { id: 'quantitative', name: 'Symbolic Reasoning (SR)', creditsRequired: 1, satisfiedBy: ['MATH211', 'MATH212', 'MATH119'] },
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
      // YEAR 1 — PPEL foundations: micro econ, intro philosophy, intro poli sci, first-year seminar
      {
        termLabel: 'Fall Year 1',
        courses: ['FYS100', 'ECON101', 'PHIL101', 'HIST100'],
        locked: [true, true, false, false],
        slotLabels: ['First-Year Seminar (FYS, required)', 'PPEL Core (Intro Micro — also satisfies SA)', 'PPEL Concentration / Area course (choose)', 'Historical Studies gen-ed (choose one)'],
      },
      {
        termLabel: 'Spring Year 1',
        courses: ['PPEL261', 'PLSC100', 'BIOL100', 'ENGL203'],
        locked: [true, false, false, false],
        slotLabels: ['PPEL Core (Theory & Public Policy)', 'PPEL Concentration / Area course (choose)', 'Natural Science gen-ed (choose one)', 'Literary Studies gen-ed (choose one)'],
      },
      // YEAR 2 — PPEL seminars, area courses, concentration depth
      {
        termLabel: 'Fall Year 2',
        courses: ['PPEL262', 'PHIL201', 'HIST245', 'ART130'],
        locked: [true, false, false, false],
        slotLabels: ['PPEL Core (Law & Social Order)', 'PPEL Area: Ethics (choose one)', 'Historical Studies + Diverse Perspectives gen-ed', 'Visual & Performing Arts gen-ed (choose one)'],
      },
      {
        termLabel: 'Spring Year 2',
        courses: ['PPEL363', 'PLSC331', 'AMST250', 'PSYCH100'],
        locked: [true, false, false, false],
        slotLabels: ['PPEL Core (Rational Choice & Political Theory)', 'PPEL Area: Law (choose one)', 'Diverse Perspectives gen-ed (choose one)', 'Elective / Social Analysis gen-ed (choose one)'],
      },
    ],
  },
  courses: [
    // ===== PPEL CORE REQUIRED (5 courses) =====
    { id: 'ECON101', title: 'Principles of Microeconomics', description: 'Supply and demand, consumer theory, firm behavior, market structures, and market efficiency. Foundation for all upper-level economics. Required for PPEL with grade of C or better.', credits: 1, category: 'major-required', interestTags: ['game-theory'], prereqs: [], genEdReqs: ['social-science'] },
    { id: 'PPEL261', title: 'Seminar in Theory & Public Policy', description: 'Interdisciplinary seminar examining how philosophical, political, and economic theories inform public policy debates. Foundational PPEL course integrating all three disciplines.', credits: 1, category: 'major-required', interestTags: ['philosophy'], prereqs: ['ECON101'], genEdReqs: [] },
    { id: 'PPEL262', title: 'Seminar in Law & Social Order', description: 'How legal institutions structure society. Theories of law, regulation, property rights, and the relationship between legal rules and social outcomes.', credits: 1, category: 'major-required', interestTags: ['philosophy'], prereqs: [], genEdReqs: [] },
    { id: 'PPEL363', title: 'Rational Choice & Political Theory', description: 'Formal models of rational decision-making applied to political and social problems. Game theory, social choice theory, voting paradoxes, and mechanism design.', credits: 1, category: 'major-required', interestTags: ['game-theory', 'philosophy'], prereqs: ['ECON101', 'PPEL261'], genEdReqs: [] },
    { id: 'PPEL401', title: 'Senior Capstone Seminar', description: 'Culminating PPEL seminar. Students design and present an original interdisciplinary research project integrating philosophy, politics, economics, and law.', credits: 1, category: 'major-required', interestTags: ['philosophy'], prereqs: ['PPEL261', 'PPEL262', 'PPEL363'], genEdReqs: [] },

    // ===== PPEL AREA: ETHICS (choose 1) =====
    { id: 'PHIL201', title: 'Ethics', description: 'Major moral theories and their application. Utilitarianism, Kantian ethics, virtue ethics, and contemporary dilemmas.', credits: 1, category: 'major-elective', interestTags: ['philosophy'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'PHIL120', title: 'Contemporary Moral Issues', description: 'Applied ethics: abortion, euthanasia, capital punishment, animal rights, economic justice, and emerging technology. Argument-driven seminar format.', credits: 1, category: 'major-elective', interestTags: ['philosophy'], prereqs: [], genEdReqs: [] },
    { id: 'PHIL265', title: 'Bioethics', description: 'Ethical issues in medicine and biotechnology. Informed consent, genetic engineering, end-of-life care, resource allocation, and clinical trials.', credits: 1, category: 'major-elective', interestTags: ['philosophy'], prereqs: [], genEdReqs: [] },
    { id: 'ECON233', title: 'Ethics & Economics', description: 'Moral dimensions of economic life. Markets and morality, distributive justice, corporate responsibility, and the ethics of globalization.', credits: 1, category: 'major-elective', interestTags: ['philosophy', 'game-theory'], prereqs: ['ECON101'], genEdReqs: [] },

    // ===== PPEL AREA: POLITICAL THEORY / POLITICAL PHILOSOPHY (choose 1) =====
    { id: 'PLSC311', title: 'Classical Political Thought', description: 'Political philosophy from Plato and Aristotle through Machiavelli. Justice, the ideal state, citizenship, and the foundations of Western political thought.', credits: 1, category: 'major-elective', interestTags: ['philosophy', 'classics'], prereqs: ['PLSC100'], genEdReqs: [] },
    { id: 'PLSC312', title: 'Modern Political Theory', description: 'Hobbes, Locke, Rousseau, Marx, and Mill. Social contract, natural rights, liberty, equality, and the legitimacy of political authority.', credits: 1, category: 'major-elective', interestTags: ['philosophy', 'history'], prereqs: ['PLSC100'], genEdReqs: [] },
    { id: 'PLSC315', title: 'American Political Theory', description: 'Political ideas that shaped the United States. Federalism, democracy, rights, slavery, and the evolving American political tradition.', credits: 1, category: 'major-elective', interestTags: ['philosophy', 'history'], prereqs: ['PLSC100'], genEdReqs: [] },
    { id: 'PHIL369', title: 'Economic Justice', description: 'Philosophical theories of distributive justice. Rawls, Nozick, Sen, and debates over inequality, welfare, taxation, and economic rights.', credits: 1, category: 'major-elective', interestTags: ['philosophy', 'game-theory'], prereqs: ['PHIL101'], genEdReqs: [] },

    // ===== PPEL AREA: LAW (choose 1) =====
    { id: 'PLSC331', title: 'Constitutional Law', description: 'Supreme Court jurisprudence on federalism, separation of powers, due process, equal protection, and the Bill of Rights.', credits: 1, category: 'major-elective', interestTags: ['history'], prereqs: ['PLSC100'], genEdReqs: [] },
    { id: 'PLSC333', title: 'Civil Rights & Liberties', description: 'First Amendment freedoms, privacy, criminal procedure, and equal protection. Landmark cases and contemporary constitutional debates.', credits: 1, category: 'major-elective', interestTags: ['history', 'philosophy'], prereqs: ['PLSC100'], genEdReqs: [] },
    { id: 'PHIL364', title: 'Philosophy of Law', description: 'What is law? Natural law, legal positivism, legal realism, and critical legal theory. The relationship between law, morality, and justice.', credits: 1, category: 'major-elective', interestTags: ['philosophy'], prereqs: ['PHIL101'], genEdReqs: [] },
    { id: 'ECON231', title: 'Law & Economics', description: 'Economic analysis of legal rules. Property rights, contracts, torts, crime, and regulation through the lens of efficiency and incentives.', credits: 1, category: 'major-elective', interestTags: ['game-theory'], prereqs: ['ECON101'], genEdReqs: [] },

    // ===== PPEL CONCENTRATION: ECONOMICS =====
    { id: 'ECON102', title: 'Principles of Macroeconomics', description: 'National income, unemployment, inflation, monetary and fiscal policy, and international economics.', credits: 1, category: 'major-elective', interestTags: [], prereqs: [], genEdReqs: ['social-science'] },
    { id: 'ECON270', title: 'Introductory Econometrics', description: 'Techniques for rigorously testing economic theory. Regression analysis, estimation, functional form, dummy variables, inference, and assumption violations.', credits: 1, category: 'major-elective', interestTags: [], prereqs: ['ECON101', 'ECON102', 'MATH119', 'MATH211'], genEdReqs: [] },
    { id: 'ECON271', title: 'Microeconomic Theory', description: 'Theory of price determination in output and input markets. Consumer and firm behavior under various market structures, theories of exchange and distribution.', credits: 1, category: 'major-elective', interestTags: ['game-theory'], prereqs: ['ECON101', 'ECON102', 'MATH211'], genEdReqs: [] },
    { id: 'ECON310', title: 'Game Theory & Strategic Behavior', description: 'Formal models of strategic interaction. Nash equilibrium, sequential games, repeated games, bargaining, and auction theory.', credits: 1, category: 'major-elective', interestTags: ['game-theory'], prereqs: ['ECON270'], genEdReqs: [] },
    { id: 'ECON315', title: 'Behavioral Economics', description: 'Integrating psychology into economic models. Prospect theory, bounded rationality, self-control, and nudge policy.', credits: 1, category: 'major-elective', interestTags: ['game-theory'], prereqs: ['ECON270'], genEdReqs: [] },
    { id: 'ECON325', title: 'Public Finance', description: 'Government revenue, taxation, public expenditure, social insurance, and cost-benefit analysis.', credits: 1, category: 'major-elective', interestTags: [], prereqs: ['ECON270'], genEdReqs: [] },
    { id: 'ECON345', title: 'Economics of Inequality', description: 'Income and wealth distribution, social mobility, discrimination, and policies to address inequality.', credits: 1, category: 'major-elective', interestTags: [], prereqs: ['ECON270'], genEdReqs: [] },
    { id: 'ECON340', title: 'Environmental Economics', description: 'Market failures and externalities. Pollution regulation, climate policy, natural resource management, and cost-benefit analysis.', credits: 1, category: 'major-elective', interestTags: [], prereqs: ['ECON270'], genEdReqs: [] },
    { id: 'ECON390', title: 'Development Economics', description: 'Poverty, growth, and institutions in developing countries. Microfinance, foreign aid, trade, and randomized policy evaluation.', credits: 1, category: 'major-elective', interestTags: ['cultural-studies'], prereqs: ['ECON270'], genEdReqs: [] },

    // ===== PPEL CONCENTRATION: PHILOSOPHY =====
    { id: 'PHIL101', title: 'Introduction to Philosophy', description: 'Fundamental questions about knowledge, reality, free will, and the good life. Socratic seminar format.', credits: 1, category: 'major-elective', interestTags: ['philosophy'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'PHIL210', title: 'Logic', description: 'Propositional and predicate logic. Valid reasoning, truth tables, and formal proof techniques.', credits: 1, category: 'major-elective', interestTags: ['philosophy', 'game-theory'], prereqs: [], genEdReqs: [] },
    { id: 'PHIL250', title: 'Political Philosophy', description: 'Justice, rights, liberty, equality, and democracy. Rawls, Nozick, and contemporary debates.', credits: 1, category: 'major-elective', interestTags: ['philosophy'], prereqs: [], genEdReqs: [] },
    { id: 'PHIL260', title: 'Existentialism', description: 'Freedom, absurdity, and authentic living. Kierkegaard, Nietzsche, Heidegger, Sartre, de Beauvoir, and Camus.', credits: 1, category: 'major-elective', interestTags: ['philosophy', 'literature'], prereqs: [], genEdReqs: [] },
    { id: 'PHIL270', title: 'Philosophy of Science', description: 'Nature of scientific knowledge, falsification, paradigm shifts, and the role of values in science.', credits: 1, category: 'major-elective', interestTags: ['philosophy', 'space'], prereqs: [], genEdReqs: [] },
    { id: 'PHIL310', title: 'Ethics & Contemporary Society', description: 'Applied ethics in technology, medicine, business, and the environment. Case-based analysis of moral dilemmas in modern life.', credits: 1, category: 'major-elective', interestTags: ['philosophy'], prereqs: ['PHIL201'], genEdReqs: [] },
    { id: 'PHIL340', title: 'Epistemology', description: 'Theories of knowledge, justification, and belief. Skepticism, foundationalism, coherentism, and social epistemology.', credits: 1, category: 'major-elective', interestTags: ['philosophy'], prereqs: ['PHIL101'], genEdReqs: [] },
    { id: 'PHIL350', title: 'Advanced Political Philosophy', description: 'Global justice, immigration, reparations, democratic theory, and the ethics of political institutions.', credits: 1, category: 'major-elective', interestTags: ['philosophy'], prereqs: ['PHIL250'], genEdReqs: [] },
    { id: 'PHIL240', title: 'Philosophy of Mind', description: 'Consciousness, personal identity, AI and minds, and the mind-body problem.', credits: 1, category: 'major-elective', interestTags: ['philosophy', 'design'], prereqs: ['PHIL101'], genEdReqs: [] },
    { id: 'PHIL360', title: 'Philosophy of Art & Aesthetics', description: 'What is art? Beauty, taste, artistic expression, and the role of art in human experience. From Plato to contemporary theory.', credits: 1, category: 'major-elective', interestTags: ['philosophy'], prereqs: ['PHIL101'], genEdReqs: [] },

    // ===== PPEL CONCENTRATION: POLITICAL SCIENCE =====
    { id: 'PLSC100', title: 'Introduction to Political Science', description: 'Political systems, institutions, and ideologies. American government, comparative politics, and international relations.', credits: 1, category: 'major-elective', interestTags: [], prereqs: [], genEdReqs: ['social-science'] },
    { id: 'PLSC310', title: 'International Relations', description: 'Theories of world politics: realism, liberalism, constructivism. Security, trade, diplomacy, and international organizations.', credits: 1, category: 'major-elective', interestTags: ['history'], prereqs: ['PLSC100'], genEdReqs: [] },
    { id: 'PLSC320', title: 'Political Economy', description: 'Intersection of politics and economics. Trade policy, development, globalization, and the role of institutions in economic outcomes.', credits: 1, category: 'major-elective', interestTags: ['game-theory'], prereqs: ['PLSC100'], genEdReqs: [] },
    { id: 'PLSC330', title: 'Constitutional Law', description: 'Supreme Court jurisprudence on federalism, separation of powers, due process, equal protection, and the Bill of Rights.', credits: 1, category: 'major-elective', interestTags: ['history'], prereqs: ['PLSC100'], genEdReqs: [] },
    { id: 'PLSC340', title: 'Public Policy Analysis', description: 'Frameworks for analyzing public policy. Healthcare, education, environment, and criminal justice. Evidence-based policy evaluation.', credits: 1, category: 'major-elective', interestTags: [], prereqs: ['PLSC100'], genEdReqs: [] },
    { id: 'PLSC350', title: 'Comparative Politics', description: 'Political systems across democracies and authoritarian regimes. Elections, parties, institutions, and political culture worldwide.', credits: 1, category: 'major-elective', interestTags: ['cultural-studies'], prereqs: ['PLSC100'], genEdReqs: [] },
    { id: 'PLSC360', title: 'Game Theory & Politics', description: 'Formal models of political behavior. Voting paradoxes, coalition formation, arms races, and strategic interaction in legislatures and international negotiations.', credits: 1, category: 'major-elective', interestTags: ['game-theory'], prereqs: ['PLSC100'], genEdReqs: [] },
    { id: 'PLSC390', title: 'Politics of Developing Nations', description: 'Democratization, state-building, ethnic conflict, and economic reform in the Global South. Case studies from Africa, Asia, and Latin America.', credits: 1, category: 'major-elective', interestTags: ['cultural-studies', 'history'], prereqs: ['PLSC100'], genEdReqs: [] },

    // ===== PPEL SPECIAL TOPICS / EXPERIENTIAL =====
    { id: 'PPEL381', title: 'Selected Topics in PPEL', description: 'Special topics seminar exploring emerging issues at the intersection of philosophy, politics, economics, and law. Topics vary by semester.', credits: 1, category: 'major-elective', interestTags: ['philosophy'], prereqs: ['PPEL261'], genEdReqs: [] },
    { id: 'PPEL388', title: 'PPEL Internship', description: 'Supervised internship in law, government, policy, or advocacy. Structured reflection connecting fieldwork to PPEL coursework.', credits: 1, category: 'major-elective', interestTags: [], prereqs: ['PPEL261'], genEdReqs: [] },

    // ===== MATH / STATISTICS =====
    { id: 'MATH211', title: 'Calculus I', description: 'Limits, derivatives, and applications. Optimization, related rates, and introductory integration.', credits: 1, category: 'elective', interestTags: [], prereqs: [], genEdReqs: ['quantitative'] },
    { id: 'MATH212', title: 'Calculus II', description: 'Techniques of integration, sequences, series, and multivariable calculus introduction.', credits: 1, category: 'elective', interestTags: [], prereqs: ['MATH211'], genEdReqs: ['quantitative'] },
    { id: 'MATH119', title: 'Introduction to Statistics', description: 'Descriptive statistics, probability, distributions, confidence intervals, and hypothesis testing.', credits: 1, category: 'elective', interestTags: [], prereqs: [], genEdReqs: ['quantitative'] },
    { id: 'MATH330', title: 'Linear Algebra', description: 'Vector spaces, matrices, eigenvalues, linear transformations, and applications to data science and economics.', credits: 1, category: 'elective', interestTags: [], prereqs: ['MATH212'], genEdReqs: [] },
    { id: 'MATH350', title: 'Applied Data Analysis', description: 'Multivariate statistics, regression modeling, classification, and clustering. R-based lab work with real datasets.', credits: 1, category: 'elective', interestTags: [], prereqs: ['MATH119'], genEdReqs: [] },

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

    // ===== ASTRONOMY / SPACE =====
    { id: 'ASTR130', title: 'Introduction to Astronomy', description: 'Tour of the universe: solar system, stars, galaxies, and cosmology. Nighttime observatory sessions on campus.', credits: 1, category: 'elective', interestTags: ['astronomy', 'space', 'science'], prereqs: [], genEdReqs: ['natural-science'] },
    { id: 'PHYS101', title: 'General Physics I', description: 'Mechanics, waves, and thermodynamics. Algebra-based with lab. Foundation for understanding physical sciences.', credits: 1, category: 'elective', interestTags: ['space', 'science'], prereqs: [], genEdReqs: ['natural-science'] },

    // ===== HISTORY =====
    { id: 'HIST100', title: 'Introduction to Historical Thinking', description: 'How historians work: primary sources, interpretation, context, and constructing historical arguments.', credits: 1, category: 'elective', interestTags: ['history'], prereqs: [], genEdReqs: ['historical'] },
    { id: 'HIST201', title: 'United States History to 1865', description: 'Colonial America through the Civil War. Indigenous encounters, slavery, revolution, and national expansion.', credits: 1, category: 'elective', interestTags: ['history'], prereqs: [], genEdReqs: ['historical'] },
    { id: 'HIST230', title: 'East Asian Civilizations', description: 'History of China, Japan, and Korea from ancient origins to the modern era. Philosophy, art, governance, and cultural exchange.', credits: 1, category: 'elective', interestTags: ['history', 'cultural-studies'], prereqs: [], genEdReqs: ['historical'] },
    { id: 'HIST245', title: 'Race & Ethnicity in American History', description: 'How racial categories were constructed and contested throughout American history. Immigration, civil rights, and social justice.', credits: 1, category: 'elective', interestTags: ['history', 'cultural-studies'], prereqs: [], genEdReqs: ['historical', 'diversity'] },
    { id: 'HIST310', title: 'The Civil Rights Movement', description: 'The movement for racial equality in America from WWII to the present. Leaders, strategies, and lasting impact.', credits: 1, category: 'elective', interestTags: ['history'], prereqs: [], genEdReqs: [] },
    { id: 'HIST130', title: 'Ancient Greece & Rome', description: 'Greek democracy, Roman Republic, and the ancient Mediterranean. Philosophy, art, and war.', credits: 1, category: 'elective', interestTags: ['history', 'classics'], prereqs: [], genEdReqs: ['historical'] },
    { id: 'HIST250', title: 'Modern Europe', description: 'French Revolution to the present. Nationalism, industrialization, world wars, Cold War, and the EU.', credits: 1, category: 'elective', interestTags: ['history'], prereqs: [], genEdReqs: [] },
    { id: 'HIST240', title: 'History of the Middle East', description: 'Ottoman Empire to contemporary politics. Colonialism, nationalism, oil, and the Arab-Israeli conflict.', credits: 1, category: 'elective', interestTags: ['history'], prereqs: [], genEdReqs: [] },

    // ===== CULTURAL STUDIES / IDENTITY =====
    { id: 'AMST250', title: 'Introduction to American Studies', description: 'Interdisciplinary study of American culture, identity, and society. Race, gender, class, and cultural production.', credits: 1, category: 'elective', interestTags: ['cultural-studies'], prereqs: [], genEdReqs: ['diversity'] },
    { id: 'ENGL260', title: 'Asian American Literature', description: 'Fiction, poetry, and memoir by Asian American writers. Immigration narratives, identity, cultural hybridity, and belonging.', credits: 1, category: 'elective', interestTags: ['cultural-studies', 'literature'], prereqs: [], genEdReqs: ['diversity'] },

    // ===== LITERATURE =====
    { id: 'ENGL203', title: 'Introduction to Literary Analysis', description: 'Close reading of fiction, poetry, and drama. Critical approaches, literary terminology, and interpretive writing.', credits: 1, category: 'elective', interestTags: ['literature'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'ENGL210', title: 'British Literature I', description: 'Survey from Beowulf to the Romantics. Medieval, Renaissance, Enlightenment literary traditions.', credits: 1, category: 'elective', interestTags: ['literature'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'ENGL240', title: 'American Literature', description: 'Major American literary works from the colonial period to the present. Diverse voices and national identity.', credits: 1, category: 'elective', interestTags: ['literature'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'ENGL280', title: 'Creative Writing: Fiction', description: 'Workshop in short fiction. Craft of storytelling, character, voice, and revision through peer critique.', credits: 1, category: 'elective', interestTags: ['literature'], prereqs: [], genEdReqs: [] },
    { id: 'CLAS200', title: 'Classical Literature', description: 'Homer, Virgil, Ovid, Sappho. Epic, tragedy, and lyric poetry from Greece and Rome.', credits: 1, category: 'elective', interestTags: ['literature', 'classics'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'ENGL205', title: 'Shakespeare', description: 'Major plays and sonnets with attention to performance, language, and cultural context.', credits: 1, category: 'elective', interestTags: ['literature', 'classics'], prereqs: [], genEdReqs: ['humanities'] },

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
    { id: 'BIOL100', title: 'Biology for Non-Majors', description: 'Genetics, evolution, ecology, and contemporary issues in biology. Laboratory included.', credits: 1, category: 'gen-ed', interestTags: ['science'], prereqs: [], genEdReqs: ['natural-science'] },
    { id: 'CHEM101', title: 'General Chemistry I', description: 'Atomic theory, bonding, reactions, stoichiometry, and gases. Laboratory included.', credits: 1, category: 'gen-ed', interestTags: ['science'], prereqs: [], genEdReqs: ['natural-science'] },
    { id: 'MUSC100', title: 'Introduction to Music', description: 'Elements of music, historical periods, and diverse musical traditions. Concert attendance required.', credits: 1, category: 'gen-ed', interestTags: [], prereqs: [], genEdReqs: ['arts'] },
    { id: 'THTR100', title: 'Introduction to Theater', description: 'Theater as art form and cultural expression. Acting, design, and dramatic literature. Performance attendance.', credits: 1, category: 'gen-ed', interestTags: [], prereqs: [], genEdReqs: ['arts'] },
    { id: 'CSCI150', title: 'Introduction to Computing', description: 'Computational problem-solving with Python. Variables, loops, functions, and data manipulation.', credits: 1, category: 'elective', interestTags: ['video-games'], prereqs: [], genEdReqs: [] },

    // ===== LEADERSHIP STUDIES (JEPSON SCHOOL) =====
    { id: 'LDSP200', title: 'Leadership Studies', description: 'Theories and practices of leadership. Self-awareness, group dynamics, ethics, and community engagement.', credits: 1, category: 'elective', interestTags: [], prereqs: [], genEdReqs: [] },
    { id: 'LDST310', title: 'Leadership Ethics', description: 'Ethical theories applied to leadership practice. Moral courage, responsibility, power dynamics, and ethical decision-making frameworks.', credits: 1, category: 'elective', interestTags: ['philosophy'], prereqs: ['LDSP200'], genEdReqs: [] },
    { id: 'LDST330', title: 'Social Movements & Leadership', description: 'How movements emerge, mobilize, and create change. Civil rights, environmentalism, labor, and contemporary activism.', credits: 1, category: 'elective', interestTags: ['history'], prereqs: ['LDSP200'], genEdReqs: [] },
    { id: 'LDST340', title: 'Civic Engagement & Democratic Leadership', description: 'Community-based leadership, deliberative democracy, service-learning, and the role of citizens in governance.', credits: 1, category: 'elective', interestTags: [], prereqs: ['LDSP200'], genEdReqs: [] },

    // ===== COGNITIVE SCIENCE / PSYCHOLOGY =====
    { id: 'PSYC350', title: 'Judgment & Decision-Making', description: 'Heuristics, biases, and rationality. Prospect theory, framing effects, and the psychology behind economic and everyday choices.', credits: 1, category: 'elective', interestTags: ['game-theory', 'philosophy'], prereqs: ['PSYCH100'], genEdReqs: [] },
    { id: 'PSYC340', title: 'Social Cognition', description: 'How people perceive, judge, and remember others. Stereotyping, attribution, attitudes, and persuasion from a cognitive perspective.', credits: 1, category: 'elective', interestTags: ['philosophy'], prereqs: ['PSYCH100'], genEdReqs: [] },

    // ===== COMPUTER SCIENCE =====
    { id: 'CMSC150', title: 'Introduction to Computer Science', description: 'Foundational CS concepts using Python. Abstraction, algorithms, data structures, and object-oriented programming.', credits: 1, category: 'elective', interestTags: ['video-games'], prereqs: [], genEdReqs: [] },
    { id: 'CMSC301', title: 'Data Science', description: 'Data wrangling, visualization, and statistical modeling in Python. Pandas, matplotlib, and real-world data analysis projects.', credits: 1, category: 'elective', interestTags: [], prereqs: ['CMSC150'], genEdReqs: [] },
    { id: 'CMSC350', title: 'Artificial Intelligence', description: 'Search algorithms, knowledge representation, natural language processing, and ethical implications of AI systems. Hands-on projects in Python.', credits: 1, category: 'elective', interestTags: ['philosophy', 'game-theory'], prereqs: ['CMSC150', 'MATH119'], genEdReqs: [] },
  ],
};
