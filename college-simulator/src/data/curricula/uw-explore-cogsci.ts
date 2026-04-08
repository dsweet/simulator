import { Curriculum } from '../../types';

export const uwExploreCogsci: Curriculum = {
  schoolId: 'uw-explore-cogsci',
  program: 'Exploration → Cognitive Science',
  degreeRequirements: {
    totalCredits: 180,
    majorCredits: 60, // PSYCH core (25) + cognitive emphasis (20) + cross-listed CogSci (10) + capstone (5)
    genEdCredits: 35,
    electiveCredits: 85,
    majorCourses: [
      'PSYCH101', 'PSYCH202', 'PSYCH209', 'PSYCH303', 'PSYCH306',
      'PSYCH345', 'PSYCH355', 'PSYCH315', 'PSYCH490',
    ],
    genEdCategories: [
      // === General Education Requirements (35cr) ===
      { id: 'english-comp', name: 'English Composition (5cr)', creditsRequired: 5, satisfiedBy: ['ENGL111', 'ENGL121', 'ENGL131', 'ENGL182'] },
      { id: 'writing', name: 'Writing (7cr — may overlap)', creditsRequired: 7, satisfiedBy: ['ENGL111', 'ENGL121', 'ENGL131', 'ENGL182', 'ENGL283'] },
      { id: 'arts-humanities', name: 'Arts & Humanities (A&H)', creditsRequired: 10, satisfiedBy: ['ART134', 'ENGL242', 'ENGL243', 'ENGL260', 'ENGL283', 'ENGL302', 'DXARTS200', 'MUSIC116', 'DRAMA101', 'CLIT240', 'CLIT250', 'CLIT270', 'PHIL100', 'PHIL114', 'PHIL360', 'MUSIC120', 'MUSIC162', 'MUSIC185', 'MUSIC280', 'LING200', 'COM270', 'COM382', 'RELIG101', 'CLASS205', 'PHIL200', 'PHIL344', 'ENGL220', 'ENGL230', 'ENGL240', 'ENGL250', 'ENGL310', 'ENGL320', 'CLIT260', 'CLIT265', 'CLIT280', 'CLIT290'] },
      { id: 'social-science', name: 'Social Sciences (SSc)', creditsRequired: 10, satisfiedBy: ['SOC101', 'ECON200', 'POL101', 'HIST111', 'HIST112', 'HIST215', 'HIST225', 'AAS101', 'ANTH215', 'INFO200', 'ECON201', 'POL201', 'POL203', 'SOC221', 'SOC225'] },
      { id: 'natural-world', name: 'Natural World (NW)', creditsRequired: 10, satisfiedBy: ['CHEM142', 'CHEM152', 'PHYS121', 'BIOL180', 'ASTR101', 'ASTR102', 'ASTR150', 'ESS101', 'ESS102', 'ATM101', 'ENVIR100', 'BIOL200', 'BIOL220'] },
      { id: 'addl-ah-ssc', name: 'Additional A&H or SSc', creditsRequired: 10, satisfiedBy: ['ART134', 'ENGL242', 'ENGL243', 'ENGL260', 'ENGL283', 'ENGL302', 'DXARTS200', 'MUSIC116', 'DRAMA101', 'CLIT240', 'CLIT250', 'CLIT270', 'PHIL100', 'PHIL114', 'PHIL360', 'SOC101', 'ECON200', 'POL101', 'HIST111', 'HIST112', 'HIST215', 'HIST225', 'AAS101', 'ANTH215', 'INFO200', 'MUSIC120', 'MUSIC162', 'MUSIC185', 'MUSIC280', 'LING200', 'COM270', 'COM382', 'RELIG101', 'CLASS205', 'PHIL200', 'PHIL344', 'ENGL220', 'ENGL230', 'ENGL240', 'ENGL250', 'ENGL310', 'ENGL320', 'CLIT260', 'CLIT265', 'CLIT280', 'CLIT290', 'ECON201', 'POL201', 'POL203', 'SOC221', 'SOC225'] },
      { id: 'diversity', name: 'Diversity (DIV — may overlap)', creditsRequired: 5, satisfiedBy: ['AAS101', 'AAS320', 'GWSS200', 'AIS200', 'ANTH215', 'ENGL262', 'SOC225', 'ENVIR310'] },
    ],
  },
  recommendedSequence: {
    years: 4,
    terms: [
      // ==================== YEAR 1: Broad Exploration (Shared) ====================
      {
        termLabel: 'Fall Year 1',
        courses: ['PSYCH101', 'ENGL111', 'SOC101'],
        locked: [true, true, false],
        slotLabels: ['Intro Psychology (major prereq)', 'English Composition', 'Exploration: Sociology'],
      },
      {
        termLabel: 'Winter Year 1',
        courses: ['PHIL100', 'MUSIC116', 'HIST111'],
        locked: [false, false, false],
        slotLabels: ['Exploration: Philosophy', 'Exploration: Music', 'Exploration: History'],
      },
      {
        termLabel: 'Spring Year 1',
        courses: ['DRAMA101', 'LING200', 'ART134'],
        locked: [false, false, false],
        slotLabels: ['Exploration: Theater', 'Intro Linguistics (CogSci cross-list)', 'Exploration: Ceramics'],
      },

      // ==================== YEAR 2: PSYCH Core + CogSci Foundations ====================
      {
        termLabel: 'Fall Year 2',
        courses: ['PSYCH202', 'PSYCH209', 'ECON200'],
        locked: [true, true, false],
        slotLabels: ['Biopsychology', 'Fundamentals of Psych Research', '🟢 Intro Microeconomics — SSc gen-ed (AP Stats covers stats)'],
      },
      {
        termLabel: 'Winter Year 2',
        courses: ['PSYCH303', 'PHIL115', 'ENGL283'],
        locked: [true, true, false],
        slotLabels: ['Cognitive Psychology', 'Philosophy of Mind (CogSci cross-list)', 'Writing / A&H elective'],
      },
      {
        termLabel: 'Spring Year 2',
        courses: ['PSYCH306', 'BIOL180', 'ASTR101'],
        locked: [true, false, false],
        slotLabels: ['Perception', 'NW elective', 'NW elective'],
      },

      // ==================== YEAR 3: Upper-Division CogSci Emphasis ====================
      {
        termLabel: 'Fall Year 3',
        courses: ['PSYCH345', 'PSYCH355', 'LING233'],
        locked: [true, true, false],
        slotLabels: ['Judgment & Decision Making', 'Human Memory', 'Phonetics (CogSci elective)'],
      },
      {
        termLabel: 'Winter Year 3',
        courses: ['PSYCH333', 'PSYCH360', 'PHIL230'],
        locked: [false, false, false],
        slotLabels: ['Major seminar elective', 'Major seminar elective', 'Phil of Language (CogSci)'],
      },
      {
        termLabel: 'Spring Year 3',
        courses: ['PSYCH315', 'PSYCH370', 'SOC225'],
        locked: [true, false, false],
        slotLabels: ['Psychology of Human Factors', 'Major seminar elective', 'DIV elective'],
      },

      // ==================== YEAR 4: Capstone + Electives ====================
      {
        termLabel: 'Fall Year 4',
        courses: ['PSYCH490', 'PSYCH440', 'LING400'],
        locked: [true, false, false],
        slotLabels: ['Senior Research Seminar', 'Major seminar elective', 'Syntax (CogSci elective)'],
      },
      {
        termLabel: 'Winter Year 4',
        courses: ['PSYCH450', 'PSYCH425', 'COM382'],
        locked: [false, false, false],
        slotLabels: ['Major seminar elective', 'Major seminar elective', 'A&H elective'],
      },
      {
        termLabel: 'Spring Year 4',
        courses: ['PSYCH460', 'MUSIC364', 'ENGL302'],
        locked: [false, false, false],
        slotLabels: ['Major seminar elective', 'Music Cognition (CogSci)', 'A&H elective'],
      },
    ],
  },
  courses: [
    // ===================================================================
    // MAJOR REQUIRED — Psychology Core (Cognitive Emphasis)
    // ===================================================================
    { id: 'PSYCH101', title: 'Introduction to Psychology', description: 'Scientific study of behavior and mental processes. Perception, learning, memory, personality, and social psychology.', credits: 5, category: 'major-required', interestTags: [], prereqs: [], genEdReqs: ['social-science', 'addl-ah-ssc'] },
    { id: 'PSYCH202', title: 'Biopsychology', description: 'Neural basis of behavior. Brain anatomy, neurotransmitters, sensory systems, and the biological foundations of learning, memory, and emotion.', credits: 5, category: 'major-required', interestTags: ['science'], prereqs: ['PSYCH101'], genEdReqs: [] },
    { id: 'PSYCH209', title: 'Fundamentals of Psychological Research', description: 'Research design, measurement, validity, ethics, and critical evaluation of psychological studies. APA writing format.', credits: 5, category: 'major-required', interestTags: [], prereqs: ['PSYCH101'], genEdReqs: [] },
    { id: 'PSYCH303', title: 'Cognitive Psychology', description: 'Attention, perception, memory, language, and problem-solving. How humans process information and make decisions.', credits: 5, category: 'major-required', interestTags: ['design'], prereqs: ['PSYCH101'], genEdReqs: [] },
    { id: 'PSYCH306', title: 'Perception', description: 'Visual, auditory, and haptic perception. Psychophysics, illusions, and the neural basis of sensory experience.', credits: 5, category: 'major-required', interestTags: ['design'], prereqs: ['PSYCH101'], genEdReqs: [] },
    { id: 'PSYCH345', title: 'Judgment & Decision Making', description: 'Heuristics, biases, prospect theory, and rational choice. How people make decisions under uncertainty.', credits: 5, category: 'major-required', interestTags: ['design', 'game-theory'], prereqs: ['PSYCH101'], genEdReqs: [] },
    { id: 'PSYCH355', title: 'Human Memory', description: 'Encoding, storage, and retrieval processes. Working memory, long-term memory, forgetting, and memory distortion.', credits: 5, category: 'major-required', interestTags: ['design'], prereqs: ['PSYCH101'], genEdReqs: [] },
    { id: 'PSYCH315', title: 'Psychology of Human Factors', description: 'Human performance in complex systems. Workload, situational awareness, error analysis, and designing for human limitations.', credits: 5, category: 'major-required', interestTags: ['design'], prereqs: ['PSYCH101'], genEdReqs: [] },
    { id: 'STAT290', title: 'Basic Statistics (AP Statistics equivalent)', description: 'Introductory probability and statistical methods. Equivalent awarded for AP Statistics score of 4+.', credits: 5, category: 'gen-ed', interestTags: [], prereqs: [], genEdReqs: [] },
    { id: 'PSYCH490', title: 'Senior Research Seminar', description: 'Capstone research experience in psychology. Students design, conduct, analyze, and present an original empirical study in cognitive science or related area.', credits: 5, category: 'major-required', interestTags: [], prereqs: ['PSYCH209', 'STAT290'], genEdReqs: [] },

    // ===================================================================
    // MAJOR ELECTIVES — Upper-Division Psychology + CogSci Cross-Lists
    // ===================================================================
    { id: 'PSYCH333', title: 'Psychology of Language', description: 'How we produce, comprehend, and acquire language. Speech perception, sentence processing, bilingualism, and reading.', credits: 5, category: 'major-elective', interestTags: ['linguistics', 'design'], prereqs: ['PSYCH303'], genEdReqs: [] },
    { id: 'PSYCH360', title: 'Developmental Psychology', description: 'Cognitive, social, and emotional development from infancy through adolescence. Piaget, Vygotsky, and contemporary research.', credits: 5, category: 'major-elective', interestTags: [], prereqs: ['PSYCH101'], genEdReqs: [] },
    { id: 'PSYCH370', title: 'Social Psychology', description: 'How people think about, influence, and relate to one another. Attitudes, conformity, prejudice, aggression, and group dynamics.', credits: 5, category: 'major-elective', interestTags: ['sociology'], prereqs: ['PSYCH101'], genEdReqs: [] },
    { id: 'PSYCH400', title: 'Abnormal Psychology', description: 'Psychological disorders: anxiety, depression, schizophrenia, personality disorders. Diagnosis, etiology, and treatment approaches.', credits: 5, category: 'major-elective', interestTags: [], prereqs: ['PSYCH101'], genEdReqs: [] },
    { id: 'PSYCH410', title: 'Learning & Behavior', description: 'Classical and operant conditioning, reinforcement schedules, observational learning, and computational models of learning.', credits: 5, category: 'major-elective', interestTags: [], prereqs: ['PSYCH101'], genEdReqs: [] },
    { id: 'PSYCH425', title: 'Cognitive Neuroscience', description: 'Brain mechanisms underlying cognition. fMRI, EEG, lesion studies, and what neuroimaging reveals about thinking, memory, and attention.', credits: 5, category: 'major-elective', interestTags: ['science'], prereqs: ['PSYCH303'], genEdReqs: [] },
    { id: 'PSYCH440', title: 'Attention & Performance', description: 'Selective attention, divided attention, automaticity, and the cognitive limits of multitasking. Eye-tracking and reaction time methods.', credits: 5, category: 'major-elective', interestTags: ['design'], prereqs: ['PSYCH303'], genEdReqs: [] },
    { id: 'PSYCH450', title: 'Computational Cognitive Science', description: 'Formal models of cognition: Bayesian inference, connectionism, reinforcement learning, and rational analysis applied to human behavior.', credits: 5, category: 'major-elective', interestTags: ['design', 'game-theory'], prereqs: ['PSYCH303', 'STAT290'], genEdReqs: [] },
    { id: 'PSYCH460', title: 'Emotion & Cognition', description: 'How emotions influence memory, attention, reasoning, and decision-making. Affective neuroscience and appraisal theories.', credits: 5, category: 'major-elective', interestTags: ['design'], prereqs: ['PSYCH303'], genEdReqs: [] },
    { id: 'PSYCH470', title: 'Psychology of Reasoning', description: 'Deductive and inductive reasoning, logical fallacies, bounded rationality, and dual-process theories of thought.', credits: 5, category: 'major-elective', interestTags: ['philosophy', 'game-theory'], prereqs: ['PSYCH303'], genEdReqs: [] },
    { id: 'PSYCH480', title: 'Human-Computer Interaction: Cognitive Perspectives', description: 'Cognitive models of user behavior, mental models, cognitive load, and usability from a psychology perspective.', credits: 5, category: 'major-elective', interestTags: ['design'], prereqs: ['PSYCH303'], genEdReqs: [] },

    // ===================================================================
    // CROSS-LISTED COGNITIVE SCIENCE COURSES
    // ===================================================================
    { id: 'LING200', title: 'Introduction to Linguistics', description: 'The scientific study of language: phonetics, phonology, morphology, syntax, semantics, and pragmatics.', credits: 5, category: 'major-elective', interestTags: ['linguistics', 'philosophy'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },
    { id: 'PHIL115', title: 'Philosophy of Mind', description: 'Consciousness, artificial intelligence, personal identity, and the mind-body problem. Deeply relevant to HCDE.', credits: 5, category: 'major-elective', interestTags: ['philosophy', 'design'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },
    { id: 'PHIL100', title: 'Introduction to Philosophy', description: 'Fundamental questions about knowledge, reality, ethics, and the good life. Reading classic and contemporary philosophers.', credits: 5, category: 'gen-ed', interestTags: ['philosophy'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },
    { id: 'LING233', title: 'Phonetics & Phonology', description: 'Sound systems of human language. Articulatory phonetics, acoustic analysis, and cross-linguistic sound patterns.', credits: 5, category: 'major-elective', interestTags: ['linguistics'], prereqs: ['LING200'], genEdReqs: [] },
    { id: 'LING400', title: 'Syntax', description: 'Sentence structure across languages. Phrase structure, transformations, and the architecture of grammar.', credits: 5, category: 'major-elective', interestTags: ['linguistics', 'philosophy'], prereqs: ['LING200'], genEdReqs: [] },
    { id: 'LING432', title: 'Semantics', description: 'Formal approaches to meaning: compositionality, quantification, tense, modality. Logic meets natural language.', credits: 5, category: 'major-elective', interestTags: ['linguistics', 'philosophy'], prereqs: ['LING200'], genEdReqs: [] },
    { id: 'LING461', title: 'Sociolinguistics', description: 'Language variation by region, class, gender, and ethnicity. Code-switching, dialect prestige, and linguistic identity.', credits: 5, category: 'elective', interestTags: ['linguistics', 'cultural-studies'], prereqs: ['LING200'], genEdReqs: [] },
    { id: 'PHIL230', title: 'Philosophy of Language', description: 'Meaning, reference, truth, speech acts, and the relationship between language and thought. Frege, Russell, Wittgenstein, and Kripke.', credits: 5, category: 'major-elective', interestTags: ['philosophy', 'linguistics'], prereqs: ['PHIL100'], genEdReqs: [] },
    { id: 'MUSIC364', title: 'Music Cognition', description: 'How the brain perceives, remembers, and responds to music. Pitch perception, rhythm, emotion, and musical training effects.', credits: 5, category: 'major-elective', interestTags: ['music', 'philosophy', 'science'], prereqs: [], genEdReqs: [] },

    // ===================================================================
    // STATISTICS / METHODS
    // ===================================================================
    { id: 'STAT311', title: 'Elements of Statistical Methods', description: 'Estimation, hypothesis testing, ANOVA, and simple linear regression. Applied statistics for science and engineering.', credits: 5, category: 'elective', interestTags: [], prereqs: [], genEdReqs: [] },
    { id: 'STAT390', title: 'Statistical Data Visualization', description: 'Visualizing data distributions, relationships, and uncertainty. R and ggplot2 for statistical graphics.', credits: 5, category: 'elective', interestTags: ['design'], prereqs: ['STAT290'], genEdReqs: [] },

    // ===================================================================
    // GEN-ED OPTIONS
    // ===================================================================
    { id: 'ENGL111', title: 'Composition: Literature', description: 'College-level writing through analysis of literary texts. Argumentation, evidence, and revision. Satisfies English Composition requirement.', credits: 5, category: 'gen-ed', interestTags: ['literature'], prereqs: [], genEdReqs: ['english-comp', 'writing'] },
    { id: 'ENGL121', title: 'Composition: Research Writing', description: 'Research-based writing. Finding, evaluating, and synthesizing sources to construct evidence-based arguments.', credits: 5, category: 'gen-ed', interestTags: [], prereqs: [], genEdReqs: ['english-comp', 'writing'] },
    { id: 'ENGL131', title: 'Composition: Exposition', description: 'Expository writing for academic audiences. Research, analysis, and clear argumentation.', credits: 5, category: 'gen-ed', interestTags: [], prereqs: [], genEdReqs: ['english-comp', 'writing'] },
    { id: 'ENGL182', title: 'Technical Writing', description: 'Writing for technical and professional audiences. Reports, proposals, documentation, and visual communication.', credits: 5, category: 'gen-ed', interestTags: [], prereqs: [], genEdReqs: ['english-comp', 'writing'] },
    { id: 'SOC101', title: 'Introduction to Sociology', description: 'Social structures, institutions, inequality, culture, and how society shapes individual behavior.', credits: 5, category: 'gen-ed', interestTags: ['sociology'], prereqs: [], genEdReqs: ['social-science', 'addl-ah-ssc'] },
    { id: 'POL101', title: 'Introduction to Political Science', description: 'Political systems, institutions, ideologies, and power. Comparative politics and international relations.', credits: 5, category: 'gen-ed', interestTags: ['politics'], prereqs: [], genEdReqs: ['social-science', 'addl-ah-ssc'] },
    { id: 'MUSIC116', title: 'Introduction to Music', description: 'Elements of music, historical periods, genres, and listening skills. No musical background required.', credits: 5, category: 'gen-ed', interestTags: ['music'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },
    { id: 'DRAMA101', title: 'Introduction to Theater', description: 'Theater as an art form. Acting, directing, design, and dramatic literature. Attendance at live performances.', credits: 5, category: 'gen-ed', interestTags: [], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },
    { id: 'ANTH215', title: 'Peoples & Cultures of Southeast Asia', description: 'Cultural diversity, religions, arts, and social change in Southeast Asian societies.', credits: 5, category: 'gen-ed', interestTags: ['cultural-studies', 'history'], prereqs: [], genEdReqs: ['social-science', 'diversity', 'addl-ah-ssc'] },
    { id: 'GWSS200', title: 'Introduction to Gender, Women & Sexuality Studies', description: 'Gender and sexuality as social constructs. Feminist theory, intersectionality, and social justice.', credits: 5, category: 'gen-ed', interestTags: [], prereqs: [], genEdReqs: ['social-science', 'diversity', 'addl-ah-ssc'] },
    { id: 'AIS200', title: 'Introduction to American Indian Studies', description: 'History, cultures, and contemporary issues of Indigenous peoples in the Americas. Sovereignty, identity, and representation.', credits: 5, category: 'gen-ed', interestTags: ['cultural-studies', 'history'], prereqs: [], genEdReqs: ['social-science', 'diversity', 'addl-ah-ssc'] },

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
    { id: 'ASTR101', title: 'Astronomy', description: 'Survey of modern astronomy: the solar system, stars, galaxies, and cosmology. Night sky observation sessions.', credits: 5, category: 'elective', interestTags: ['astronomy', 'space', 'science'], prereqs: [], genEdReqs: ['natural-world'] },
    { id: 'ASTR102', title: 'Introduction to Astrophysics', description: 'Physical principles governing astronomical phenomena. Light, gravity, nuclear fusion, and the evolution of stars.', credits: 5, category: 'elective', interestTags: ['astronomy', 'space', 'science'], prereqs: ['ASTR101'], genEdReqs: ['natural-world'] },
    { id: 'ASTR150', title: 'The Planets', description: 'Comparative planetology: formation, geology, atmospheres, and potential for life on planets and moons in our solar system.', credits: 5, category: 'elective', interestTags: ['astronomy', 'space', 'science'], prereqs: [], genEdReqs: ['natural-world'] },
    { id: 'ASTR322', title: 'Astrobiology', description: 'The science of life in the universe. Origin of life on Earth, extremophiles, biosignatures, and the search for extraterrestrial life.', credits: 5, category: 'elective', interestTags: ['astronomy', 'space', 'science'], prereqs: ['ASTR101'], genEdReqs: [] },
    { id: 'ESS101', title: 'Introduction to Earth Science', description: 'Earth systems, plate tectonics, minerals, rocks, geologic time, and the dynamic processes shaping our planet.', credits: 5, category: 'elective', interestTags: ['space', 'science'], prereqs: [], genEdReqs: ['natural-world'] },
    { id: 'ESS102', title: 'Space & Space Travel', description: 'Rocketry, orbital mechanics, space exploration history, current missions, and the future of human spaceflight.', credits: 5, category: 'elective', interestTags: ['astronomy', 'space', 'science'], prereqs: [], genEdReqs: ['natural-world'] },
    { id: 'ATM101', title: 'Weather & Climate', description: 'Atmospheric science, weather patterns, climate systems, and climate change science.', credits: 5, category: 'elective', interestTags: ['space', 'science'], prereqs: [], genEdReqs: ['natural-world'] },

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
    { id: 'AAS101', title: 'Introduction to Asian American Studies', description: 'History, culture, and contemporary experiences of Asian Americans. Immigration, identity, community, and activism.', credits: 5, category: 'gen-ed', interestTags: ['cultural-studies', 'history'], prereqs: [], genEdReqs: ['social-science', 'diversity', 'addl-ah-ssc'] },
    { id: 'AAS200', title: 'Asian Americans and the Arts', description: 'Asian American artistic expression in literature, film, visual art, and performance. Identity, representation, and cultural production.', credits: 5, category: 'elective', interestTags: ['cultural-studies', 'literature'], prereqs: [], genEdReqs: ['arts-humanities', 'diversity', 'addl-ah-ssc'] },
    { id: 'AAS310', title: 'Asian American Communities & Health', description: 'Health disparities, mental health, intergenerational trauma, and wellness in Asian American communities.', credits: 5, category: 'elective', interestTags: ['cultural-studies'], prereqs: ['AAS101'], genEdReqs: ['diversity'] },
    { id: 'AAS320', title: 'Asian Americans in the Pacific Northwest', description: 'Japanese American incarceration, Filipino cannery workers, Chinese exclusion, and contemporary Asian American life in the PNW.', credits: 5, category: 'elective', interestTags: ['cultural-studies', 'history'], prereqs: [], genEdReqs: ['social-science', 'diversity', 'addl-ah-ssc'] },
    { id: 'AAS330', title: 'Race, Technology & Society', description: 'How race shapes and is shaped by technology. Algorithmic bias, digital divide, surveillance, and tech workforce diversity.', credits: 5, category: 'elective', interestTags: ['cultural-studies', 'design'], prereqs: [], genEdReqs: ['diversity'] },

    // ===================================================================
    // LITERATURE
    // ===================================================================
    { id: 'ENGL242', title: 'Reading Fiction', description: 'Close reading of novels and short stories. Narrative structure, characterization, and literary analysis.', credits: 5, category: 'elective', interestTags: ['literature', 'classics'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },
    { id: 'ENGL243', title: 'Reading Poetry', description: 'Study of poetic forms, techniques, and traditions. Close reading and interpretation of poetry across periods.', credits: 5, category: 'elective', interestTags: ['literature'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },
    { id: 'ENGL262', title: 'Asian American Literature', description: 'Literature by Asian American writers exploring identity, immigration, belonging, and cultural negotiation.', credits: 5, category: 'elective', interestTags: ['literature', 'cultural-studies'], prereqs: [], genEdReqs: ['arts-humanities', 'diversity', 'addl-ah-ssc'] },
    { id: 'ENGL283', title: 'Introduction to Creative Writing', description: 'Workshop-based introduction to writing fiction and poetry. Peer critique and revision process.', credits: 5, category: 'elective', interestTags: ['literature'], prereqs: [], genEdReqs: ['arts-humanities', 'writing', 'addl-ah-ssc'] },
    { id: 'ENGL302', title: 'Science Fiction', description: 'The genre of science fiction from its origins to present. Utopia, dystopia, technology, and social commentary.', credits: 5, category: 'elective', interestTags: ['literature', 'space'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },
    { id: 'ENGL260', title: 'The Novel', description: 'History of the novel from Cervantes to contemporary fiction. Form, narrative technique, and cultural context.', credits: 5, category: 'elective', interestTags: ['literature'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },
    { id: 'CLIT240', title: 'Classical Literature in Translation', description: 'Homer, Virgil, Ovid, and Sappho. Epic, lyric, and drama from the ancient Mediterranean world.', credits: 5, category: 'elective', interestTags: ['literature', 'classics'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },
    { id: 'CLIT250', title: 'Russian Literature in Translation', description: 'Dostoevsky, Tolstoy, Chekhov, and Bulgakov. The Russian literary tradition and its global influence.', credits: 5, category: 'elective', interestTags: ['literature'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },
    { id: 'CLIT270', title: 'Introduction to Graphic Narrative', description: 'Comics, manga, and graphic novels as literary and visual art forms. Storytelling through sequential art.', credits: 5, category: 'elective', interestTags: ['literature', 'video-games'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },
    { id: 'CLIT260', title: 'Japanese Literature in Translation', description: 'Major Japanese literary works: The Tale of Genji, Bashō, Mishima, Murakami. Cultural context and literary innovation.', credits: 5, category: 'elective', interestTags: ['literature', 'cultural-studies'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },
    { id: 'CLIT265', title: 'Korean Literature in Translation', description: 'Contemporary Korean fiction and poetry: Han Kang, Bae Suah, Kim Hyesoon. History, trauma, and literary experiment.', credits: 5, category: 'elective', interestTags: ['literature', 'cultural-studies'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },
    { id: 'CLIT280', title: 'Comparative Literature', description: 'Reading across languages, cultures, and traditions. How literary forms travel, transform, and speak to each other across borders.', credits: 5, category: 'elective', interestTags: ['literature', 'cultural-studies'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },
    { id: 'CLIT290', title: 'Literature & Philosophy', description: 'The novel as philosophy, philosophy as literature. Dostoevsky, Sartre, Beauvoir, Borges, and the fiction of ideas.', credits: 5, category: 'elective', interestTags: ['literature', 'philosophy'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },
    { id: 'ENGL220', title: 'American Literature to 1900', description: 'Hawthorne, Melville, Dickinson, Whitman, Twain, and the invention of American literary identity. Transcendentalism, slavery narratives, and the frontier.', credits: 5, category: 'elective', interestTags: ['literature', 'history'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },
    { id: 'ENGL230', title: 'American Literature: 1900 to Present', description: 'Fitzgerald, Faulkner, Morrison, Pynchon, and contemporary voices. Modernism, the Harlem Renaissance, postmodernism, and multicultural American fiction.', credits: 5, category: 'elective', interestTags: ['literature', 'history'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },
    { id: 'ENGL310', title: 'Modern British Literature', description: 'Woolf, Joyce, Lawrence, Forster, Orwell, and Beckett. Stream of consciousness, formal experiment, and literature between the wars.', credits: 5, category: 'elective', interestTags: ['literature'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },
    { id: 'ENGL320', title: 'Contemporary Fiction', description: 'Fiction since 1980. Globalization, identity, technology, and literary form in the work of Ishiguro, Lahiri, Egan, Ferrante, and others.', credits: 5, category: 'elective', interestTags: ['literature'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },

    // ===================================================================
    // PHILOSOPHY
    // ===================================================================
    { id: 'PHIL114', title: 'Ethics', description: 'Major moral theories and contemporary ethical dilemmas. Utilitarianism, deontology, virtue ethics, and applied ethics.', credits: 5, category: 'elective', interestTags: ['philosophy'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },
    { id: 'PHIL120', title: 'Introduction to Logic', description: 'Formal and informal logic, valid arguments, fallacies, and truth tables.', credits: 5, category: 'elective', interestTags: ['philosophy', 'game-theory'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },
    { id: 'PHIL200', title: 'Political Philosophy', description: 'Justice, rights, liberty, and equality. Hobbes, Locke, Rousseau, Rawls, Nozick, and contemporary debates about the legitimate scope of state power.', credits: 5, category: 'elective', interestTags: ['philosophy', 'politics', 'history'], prereqs: ['PHIL100'], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },
    { id: 'PHIL240', title: 'Philosophy of Science', description: 'What makes science scientific? Theory change, realism, values in science, and scientific revolutions.', credits: 5, category: 'elective', interestTags: ['philosophy', 'space'], prereqs: [], genEdReqs: [] },
    { id: 'PHIL250', title: 'Metaphysics', description: 'Fundamental nature of reality: existence, identity, causation, time, free will, and possible worlds.', credits: 5, category: 'elective', interestTags: ['philosophy'], prereqs: ['PHIL100'], genEdReqs: [] },
    { id: 'PHIL300', title: 'Formal Logic', description: 'Predicate logic, natural deduction, completeness, soundness, and an introduction to modal logic.', credits: 5, category: 'elective', interestTags: ['philosophy', 'game-theory'], prereqs: ['PHIL120'], genEdReqs: [] },
    { id: 'PHIL320', title: 'Advanced Ethics: Moral Theory', description: 'Consequentialism, contractualism, moral realism, and metaethics. Contemporary debates in normative theory.', credits: 5, category: 'elective', interestTags: ['philosophy'], prereqs: ['PHIL114'], genEdReqs: [] },
    { id: 'PHIL340', title: 'Ethics of Technology', description: 'AI ethics, algorithmic bias, privacy, surveillance, and designing ethical technology. Connects directly to HCDE practice.', credits: 5, category: 'elective', interestTags: ['philosophy', 'design'], prereqs: ['PHIL100'], genEdReqs: [] },
    { id: 'PHIL344', title: 'Bioethics', description: 'Ethical issues in medicine and biological sciences. Genetic engineering, euthanasia, reproductive rights, and research ethics.', credits: 5, category: 'elective', interestTags: ['philosophy', 'science'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },
    { id: 'PHIL360', title: 'Existentialism', description: 'Freedom, authenticity, and meaning. Kierkegaard, Nietzsche, Heidegger, Sartre, de Beauvoir, and Camus.', credits: 5, category: 'elective', interestTags: ['philosophy', 'literature'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },

    // ===================================================================
    // SCIENCES (for NW requirement)
    // ===================================================================
    { id: 'CHEM142', title: 'General Chemistry', description: 'Atomic structure, chemical bonding, stoichiometry, thermodynamics, and equilibrium. Prerequisite: CHEM 110 or placement exam.', credits: 5, category: 'elective', interestTags: ['science'], prereqs: [], genEdReqs: ['natural-world'] },
    { id: 'PHYS121', title: 'Mechanics', description: 'Classical mechanics: motion, forces, energy, momentum, and rotational dynamics. Calculus-based physics for engineers.', credits: 5, category: 'elective', interestTags: ['science', 'space'], prereqs: [], genEdReqs: ['natural-world'] },
    { id: 'BIOL180', title: 'Introductory Biology', description: 'Cell biology, genetics, evolution, and ecology. How living systems function and change over time.', credits: 5, category: 'elective', interestTags: ['science', 'biology'], prereqs: [], genEdReqs: ['natural-world'] },
    { id: 'BIOL200', title: 'Genetics', description: 'Mendelian and molecular genetics, gene regulation, genomics, and the genetics of human disease.', credits: 5, category: 'elective', interestTags: ['biology', 'science'], prereqs: ['BIOL180'], genEdReqs: ['natural-world'] },
    { id: 'ENVIR100', title: 'Introduction to Environmental Science', description: 'Ecosystems, biodiversity, climate science, pollution, and resource depletion. The scientific basis for environmental policy.', credits: 5, category: 'elective', interestTags: ['environmental', 'science'], prereqs: [], genEdReqs: ['natural-world'] },

    // ===================================================================
    // SOCIOLOGY
    // ===================================================================
    { id: 'SOC221', title: 'Social Inequality', description: 'Class, race, gender, and their intersections. Theories of stratification, mobility, and the reproduction of privilege.', credits: 5, category: 'elective', interestTags: ['sociology', 'cultural-studies'], prereqs: ['SOC101'], genEdReqs: ['social-science', 'addl-ah-ssc'] },
    { id: 'SOC225', title: 'Race & Ethnicity', description: 'Racial formation, systemic racism, immigration, and multiracial identity. Quantitative and qualitative approaches.', credits: 5, category: 'elective', interestTags: ['sociology', 'cultural-studies'], prereqs: ['SOC101'], genEdReqs: ['social-science', 'diversity', 'addl-ah-ssc'] },
    { id: 'SOC270', title: 'Urban Sociology', description: 'Cities as social systems. Gentrification, segregation, community organizing, and the sociology of neighborhoods.', credits: 5, category: 'elective', interestTags: ['sociology', 'cultural-studies'], prereqs: ['SOC101'], genEdReqs: [] },

    // ===================================================================
    // MUSIC
    // ===================================================================
    { id: 'MUSIC120', title: 'Music Theory I', description: 'Scales, intervals, chords, voice leading, and basic harmonic analysis. Ear training included.', credits: 5, category: 'elective', interestTags: ['music'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },
    { id: 'MUSIC162', title: 'History of Jazz', description: 'Jazz from its origins to the present. Blues, swing, bebop, modal jazz, free jazz, and fusion.', credits: 5, category: 'elective', interestTags: ['music', 'history'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },
    { id: 'MUSIC185', title: 'World Music', description: 'Musical traditions from across the globe. West African drumming, Indian raga, Indonesian gamelan, and cross-cultural study.', credits: 5, category: 'elective', interestTags: ['music', 'cultural-studies'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },
    { id: 'MUSIC280', title: 'History of Western Music', description: 'Medieval chant to contemporary classical. Bach, Mozart, Beethoven, Wagner, Stravinsky, and minimalism in cultural context.', credits: 5, category: 'elective', interestTags: ['music', 'history'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },
    { id: 'MUSIC320', title: 'Digital Music Production', description: 'Recording, editing, mixing, and producing music using DAWs. Sound design, sampling, synthesis, and electronic composition.', credits: 5, category: 'elective', interestTags: ['music', 'design'], prereqs: [], genEdReqs: [] },

    // ===================================================================
    // FILM & MEDIA STUDIES
    // ===================================================================
    { id: 'COM270', title: 'Introduction to Film Studies', description: 'The language of cinema: mise-en-scene, cinematography, editing, sound, and narrative structure.', credits: 5, category: 'elective', interestTags: ['film', 'design'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },
    { id: 'COM361', title: 'Film Theory', description: 'Major theoretical frameworks: formalism, realism, auteur theory, feminism, psychoanalysis, and postcolonial approaches.', credits: 5, category: 'elective', interestTags: ['film', 'philosophy'], prereqs: ['COM270'], genEdReqs: [] },
    { id: 'COM382', title: 'East Asian Cinema', description: 'Japanese, Korean, and Chinese cinema from golden-age masters to the Korean New Wave. Ozu, Kurosawa, Bong Joon-ho.', credits: 5, category: 'elective', interestTags: ['film', 'cultural-studies'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },
    { id: 'COM450', title: 'Video Game Studies', description: 'Games as cultural texts. Ludology vs. narratology, player agency, procedural rhetoric, and representation in games.', credits: 5, category: 'elective', interestTags: ['film', 'video-games', 'design'], prereqs: [], genEdReqs: [] },

    // ===================================================================
    // ENVIRONMENTAL STUDIES
    // ===================================================================
    { id: 'ENVIR239', title: 'Climate Change: Science & Society', description: 'Atmospheric science, carbon cycles, climate modeling, international negotiations, and the economics of decarbonization.', credits: 5, category: 'elective', interestTags: ['environmental', 'science', 'politics'], prereqs: [], genEdReqs: [] },
    { id: 'ENVIR310', title: 'Environmental Justice', description: 'Unequal distribution of environmental harms by race and class. Toxic exposure, food deserts, and grassroots activism.', credits: 5, category: 'elective', interestTags: ['environmental', 'cultural-studies'], prereqs: [], genEdReqs: ['diversity'] },

    // ===================================================================
    // RELIGION & CLASSICS
    // ===================================================================
    { id: 'RELIG101', title: 'Introduction to World Religions', description: 'Comparative study of Judaism, Christianity, Islam, Hinduism, Buddhism, and indigenous traditions.', credits: 5, category: 'elective', interestTags: ['religion', 'philosophy', 'cultural-studies'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },
    { id: 'CLASS205', title: 'Classical Civilizations', description: 'Ancient Greece and Rome: politics, philosophy, art, literature, and their lasting influence on Western civilization.', credits: 5, category: 'elective', interestTags: ['classics', 'history'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },

    // ===================================================================
    // GAME DESIGN / INTERACTIVE MEDIA / CS
    // ===================================================================
    { id: 'CSE121', title: 'Intro to Computer Programming I', description: 'Introduction to programming concepts, data types, control flow, and functions. Java-based. Satisfies engineering fundamentals + placement.', credits: 4, category: 'elective', interestTags: ['video-games', 'design'], prereqs: [], genEdReqs: [] },
    { id: 'CSE160', title: 'Data Programming', description: 'Introduction to programming with Python for data analysis. Working with datasets, visualization, and basic statistics.', credits: 4, category: 'elective', interestTags: ['design'], prereqs: [], genEdReqs: [] },
    { id: 'DXARTS200', title: 'Digital Arts: Interdisciplinary Foundations', description: 'Creative coding, interactive art, digital fabrication. Intersection of art and technology.', credits: 5, category: 'elective', interestTags: ['design', 'video-games'], prereqs: [], genEdReqs: ['arts-humanities', 'addl-ah-ssc'] },
    { id: 'INFO200', title: 'Intellectual Foundations of Informatics', description: 'Information in society, human-information interaction, data ethics, and the social impact of technology.', credits: 5, category: 'elective', interestTags: ['design'], prereqs: [], genEdReqs: ['social-science', 'addl-ah-ssc'] },

    // ===================================================================
    // ECONOMICS (as electives)
    // ===================================================================
    { id: 'ECON200', title: 'Introduction to Microeconomics', description: 'Supply and demand, market structures, consumer behavior, and economic efficiency.', credits: 5, category: 'elective', interestTags: ['game-theory', 'economics'], prereqs: [], genEdReqs: ['social-science', 'addl-ah-ssc'] },
    { id: 'ECON201', title: 'Introduction to Macroeconomics', description: 'GDP, inflation, unemployment, monetary and fiscal policy, and international trade.', credits: 5, category: 'elective', interestTags: ['economics'], prereqs: ['ECON200'], genEdReqs: ['social-science', 'addl-ah-ssc'] },

    // ===================================================================
    // DESIGN
    // ===================================================================
    { id: 'DESIGN360', title: 'Visual Communication Design', description: 'Typography, layout, color systems, and visual hierarchy. Designing for print and digital media with emphasis on communication clarity.', credits: 5, category: 'elective', interestTags: ['design'], prereqs: [], genEdReqs: [] },

    // ===================================================================
    // POLITICAL SCIENCE (as electives)
    // ===================================================================
    { id: 'POL201', title: 'American Politics', description: 'Congress, the presidency, courts, parties, elections, public opinion, and political polarization in the United States.', credits: 5, category: 'elective', interestTags: ['politics', 'history'], prereqs: ['POL101'], genEdReqs: ['social-science', 'addl-ah-ssc'] },
    { id: 'POL203', title: 'International Relations', description: 'Theories of war and peace, alliances, international institutions, globalization, and human rights.', credits: 5, category: 'elective', interestTags: ['politics', 'history'], prereqs: ['POL101'], genEdReqs: ['social-science', 'addl-ah-ssc'] },
  ],
};
