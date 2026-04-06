import { Curriculum } from '../../types';

export const rochesterBcs: Curriculum = {
  schoolId: 'rochester-bcs',
  program: 'Brain & Cognitive Sciences (BS)',
  degreeRequirements: {
    totalCredits: 32, // 128 credit hours = 32 four-credit courses
    majorCredits: 20, // BCS core (6) + science foundation (4) + stats (1) + lab (1) + track (4) + allied (2) + open (2)
    genEdCredits: 7, // Writing (1) + 2 clusters (3 each)
    electiveCredits: 5,
    majorCourses: [
      'BCS110', 'BCS111', 'BCS151', 'BCS152', 'BCS153', 'BCS310',
    ],
    genEdCategories: [
      { id: 'writing', name: 'Primary Writing Requirement', creditsRequired: 1, satisfiedBy: ['WRT105'] },
      { id: 'cluster-1', name: 'Cluster 1 — Humanities (3 related courses)', creditsRequired: 3, satisfiedBy: [] },
      { id: 'cluster-2', name: 'Cluster 2 — Social Sciences (3 related courses)', creditsRequired: 3, satisfiedBy: [] },
    ],
  },
  recommendedSequence: {
    years: 4,
    terms: [
      // YEAR 1 — BCS foundations + science prerequisites
      {
        termLabel: 'Fall Year 1',
        courses: ['BCS110', 'MTH161', 'BIO110', 'WRT105'],
        locked: [true, true, true, true],
        slotLabels: ['Neural Foundations of Behavior', 'Calculus IA (science foundation)', 'Principles of Biology (science foundation)', 'Writing requirement'],
      },
      {
        termLabel: 'Spring Year 1',
        courses: ['BCS111', 'CSC161', 'LIN110', 'SA100'],
        locked: [true, true, true, false],
        slotLabels: ['Foundations of Cognitive Science', 'Art of Programming (science foundation)', 'Intro Linguistic Analysis (science foundation)', '🟢 Intro Studio Art — Humanities cluster'],
      },
      // YEAR 2 — BCS core perception/cognition/language + stats + lab
      {
        termLabel: 'Fall Year 2',
        courses: ['BCS151', 'BCS152', 'STT212', 'SA161'],
        locked: [true, true, true, false],
        slotLabels: ['Perception and Action', 'Language and Psycholinguistics', 'Applied Statistics (formal methods)', '🟢 Ceramics I — Humanities cluster'],
      },
      {
        termLabel: 'Spring Year 2',
        courses: ['BCS153', 'BCS204', 'ECO108', 'SA110'],
        locked: [true, true, false, false],
        slotLabels: ['Cognition', 'Lab in Cognitive Neuroscience', '🟢 Principles of Economics — Social Sciences cluster', '🟢 Drawing I — Humanities cluster (complete)'],
      },
      // YEAR 3 — Track electives + allied fields + cluster completion
      {
        termLabel: 'Fall Year 3',
        courses: ['BCS229', 'BCS265', 'PSY211', 'PSC101'],
        locked: [false, false, false, false],
        slotLabels: ['🟢 Computer Models of Perception — track elective', '🟢 Language and the Brain — track elective', '🟢 Cognitive Psychology — allied field', '🟢 Intro Political Science — Social Sciences cluster'],
      },
      {
        termLabel: 'Spring Year 3',
        courses: ['BCS235', 'BCS261', 'PHL203', 'PSC215'],
        locked: [false, false, false, false],
        slotLabels: ['🟢 Natural Language Processing — track elective', '🟢 Language Use & Understanding — track elective', '🟢 Philosophy of Mind — allied field', '🟢 Political Economy — Social Sciences cluster (complete)'],
      },
      // YEAR 4 — Senior seminar + open electives
      {
        termLabel: 'Fall Year 4',
        courses: ['BCS310', 'BCS260', 'AST104', 'DMS103'],
        locked: [true, false, false, false],
        slotLabels: ['Senior Seminar (capstone)', '🟢 Music and the Mind — open elective', '🟢 Astronomy Survey — free elective', '🟢 Digital Media — free elective'],
      },
      {
        termLabel: 'Spring Year 4',
        courses: ['BCS246', 'ENG275', 'DMS310', 'AST203'],
        locked: [false, false, false, false],
        slotLabels: ['🟢 Biology of Mental Disorders — open elective', '🟢 Science Fiction — free elective', '🟢 UX/UI Design Studio — free elective', '🟢 Origins: Big Bang to Life — free elective'],
      },
    ],
  },
  courses: [
    // ===== BCS MAJOR CORE =====
    { id: 'BCS110', title: 'Neural Foundations of Behavior', description: 'Introduction to brain structure and function. Neurons, synapses, sensory systems, motor control, and the biological basis of behavior.', credits: 1, category: 'major-required', interestTags: ['science'], prereqs: [], genEdReqs: [] },
    { id: 'BCS111', title: 'Foundations of Cognitive Science', description: 'Interdisciplinary study of mind and brain. Perception, attention, memory, language, reasoning, and consciousness from psychology, neuroscience, AI, and philosophy perspectives.', credits: 1, category: 'major-required', interestTags: ['philosophy'], prereqs: [], genEdReqs: [] },
    { id: 'BCS151', title: 'Perception and Action', description: 'How we see, hear, and interact with the world. Visual and auditory perception, sensorimotor integration, and computational models of perception.', credits: 1, category: 'major-required', interestTags: ['design'], prereqs: ['BCS110', 'BCS111'], genEdReqs: [] },
    { id: 'BCS152', title: 'Language and Psycholinguistics', description: 'How we produce, comprehend, and acquire language. Phonology, syntax, semantics, and the neuroscience of language processing.', credits: 1, category: 'major-required', interestTags: ['linguistics'], prereqs: ['BCS110', 'BCS111'], genEdReqs: [] },
    { id: 'BCS153', title: 'Cognition', description: 'Attention, memory, categorization, reasoning, problem-solving, and decision-making. Classic experiments and computational models.', credits: 1, category: 'major-required', interestTags: ['philosophy', 'design'], prereqs: ['BCS110', 'BCS111'], genEdReqs: [] },
    { id: 'BCS310', title: 'Senior Seminar', description: 'Capstone seminar integrating BCS knowledge. Students present and critique current research, develop a research proposal, and engage with faculty.', credits: 1, category: 'major-required', interestTags: [], prereqs: ['BCS153'], genEdReqs: [] },

    // ===== SCIENCE FOUNDATION (prereqs) =====
    { id: 'MTH161', title: 'Calculus IA', description: 'Functions, limits, derivatives, and applications. First semester of calculus.', credits: 1, category: 'gen-ed', interestTags: [], prereqs: [], genEdReqs: [] },
    { id: 'BIO110', title: 'Principles of Biology I', description: 'Cell biology, genetics, molecular biology, and evolution. Foundation for neuroscience.', credits: 1, category: 'gen-ed', interestTags: ['science', 'biology'], prereqs: [], genEdReqs: [] },
    { id: 'CSC161', title: 'Art of Programming', description: 'Introduction to programming in Python. Problem-solving, data structures, algorithms, and software design.', credits: 1, category: 'gen-ed', interestTags: ['design'], prereqs: [], genEdReqs: [] },
    { id: 'LIN110', title: 'Introduction to Linguistic Analysis', description: 'Scientific study of language structure: phonetics, phonology, morphology, syntax, and semantics.', credits: 1, category: 'gen-ed', interestTags: ['linguistics', 'philosophy'], prereqs: [], genEdReqs: [] },

    // ===== FORMAL METHODS =====
    { id: 'STT212', title: 'Applied Statistics', description: 'Probability, statistical inference, regression, ANOVA, and experimental design for biological and physical sciences.', credits: 1, category: 'gen-ed', interestTags: [], prereqs: ['MTH161'], genEdReqs: [] },

    // ===== LAB COURSES =====
    { id: 'BCS204', title: 'Lab in Cognitive Neuroscience', description: 'Hands-on lab in brain imaging, EEG, eye-tracking, and behavioral experiments. Design and analyze cognitive neuroscience studies.', credits: 1, category: 'major-elective', interestTags: ['science'], prereqs: ['STT212'], genEdReqs: [] },
    { id: 'BCS205', title: 'Lab in Development and Learning', description: 'Experimental methods in developmental and learning research. Infant studies, learning paradigms, and data analysis.', credits: 1, category: 'major-elective', interestTags: ['science'], prereqs: ['STT212'], genEdReqs: [] },
    { id: 'BCS208', title: 'Lab in Perception and Cognition', description: 'Lab course in perceptual and cognitive experiments. Psychophysics, reaction time studies, and computational modeling.', credits: 1, category: 'major-elective', interestTags: ['design'], prereqs: ['STT212'], genEdReqs: [] },

    // ===== TRACK ELECTIVES — Computation & AI =====
    { id: 'BCS229', title: 'Computer Models of Perception and Cognition', description: 'Computational approaches to understanding perception, attention, memory, and decision-making. Neural networks and Bayesian models.', credits: 1, category: 'major-elective', interestTags: ['design'], prereqs: ['BCS153'], genEdReqs: [] },
    { id: 'BCS232', title: 'Artificial Intelligence', description: 'Search, planning, knowledge representation, machine learning, and natural language understanding from a cognitive science perspective.', credits: 1, category: 'major-elective', interestTags: ['design'], prereqs: ['BCS111'], genEdReqs: [] },
    { id: 'BCS235', title: 'Natural Language Processing', description: 'Computational linguistics: parsing, semantics, machine translation, sentiment analysis, and large language models.', credits: 1, category: 'major-elective', interestTags: ['linguistics'], prereqs: ['BCS152'], genEdReqs: [] },
    { id: 'BCS236', title: 'Machine Vision', description: 'Computer vision from a cognitive science perspective. Object recognition, scene understanding, and neural network models of visual processing.', credits: 1, category: 'major-elective', interestTags: ['design'], prereqs: ['BCS151'], genEdReqs: [] },

    // ===== TRACK ELECTIVES — Language & Psycholinguistics =====
    { id: 'BCS259', title: 'Language Development', description: 'How children acquire language: phonology, vocabulary, syntax, and pragmatics. Theories of language learning and critical periods.', credits: 1, category: 'major-elective', interestTags: ['linguistics'], prereqs: ['BCS152'], genEdReqs: [] },
    { id: 'BCS261', title: 'Language Use and Understanding', description: 'Sentence processing, discourse comprehension, pragmatics, and the real-time dynamics of language understanding.', credits: 1, category: 'major-elective', interestTags: ['linguistics'], prereqs: ['BCS152'], genEdReqs: [] },
    { id: 'BCS265', title: 'Language and the Brain', description: 'Neural basis of language: aphasia, brain imaging of language processing, bilingual brains, and sign language neuroscience.', credits: 1, category: 'major-elective', interestTags: ['linguistics', 'science'], prereqs: ['BCS152'], genEdReqs: [] },
    { id: 'BCS221', title: 'Auditory Perception', description: 'How we hear: the auditory system, sound localization, speech perception, music perception, and auditory scene analysis.', credits: 1, category: 'major-elective', interestTags: ['music'], prereqs: ['BCS151'], genEdReqs: [] },

    // ===== TRACK ELECTIVES — Music Cognition =====
    { id: 'BCS260', title: 'Music and the Mind', description: 'Psychology and neuroscience of music: pitch, rhythm, harmony, emotion, performance, and musical development.', credits: 1, category: 'major-elective', interestTags: ['music'], prereqs: ['BCS111'], genEdReqs: [] },

    // ===== TRACK ELECTIVES — Neurobiology =====
    { id: 'BCS240', title: 'Basic Neurobiology', description: 'Cellular and molecular neuroscience: ion channels, synaptic transmission, neural circuits, and plasticity.', credits: 1, category: 'major-elective', interestTags: ['science', 'biology'], prereqs: ['BCS110'], genEdReqs: [] },
    { id: 'BCS242', title: 'Neuropsychology', description: 'Brain damage and cognition: amnesia, agnosia, aphasia, neglect, and what lesion studies reveal about normal brain function.', credits: 1, category: 'major-elective', interestTags: ['science'], prereqs: ['BCS110'], genEdReqs: [] },
    { id: 'BCS246', title: 'Biology of Mental Disorders', description: 'Neuroscience of psychiatric and neurological conditions: depression, schizophrenia, anxiety, autism, and addiction.', credits: 1, category: 'major-elective', interestTags: ['science', 'biology'], prereqs: ['BCS110'], genEdReqs: [] },
    { id: 'BCS185', title: 'Social Cognition', description: 'How we understand other minds: theory of mind, empathy, social perception, stereotyping, and the neuroscience of social behavior.', credits: 1, category: 'major-elective', interestTags: ['philosophy'], prereqs: ['BCS111'], genEdReqs: [] },

    // ===== TRACK ELECTIVES — Perception & Action =====
    { id: 'BCS220', title: 'The Intelligent Eye', description: 'Visual perception: color, motion, depth, object recognition, and visual illusions. How the brain constructs visual experience.', credits: 1, category: 'major-elective', interestTags: ['design'], prereqs: ['BCS151'], genEdReqs: [] },
    { id: 'BCS227', title: 'Theory of Perception', description: 'Philosophical and computational theories of perception: direct perception, Bayesian inference, and predictive processing.', credits: 1, category: 'major-elective', interestTags: ['philosophy', 'design'], prereqs: ['BCS151'], genEdReqs: [] },

    // ===== ALLIED FIELD OPTIONS =====
    { id: 'PSY211', title: 'Cognitive Psychology', description: 'Attention, memory, problem-solving, and decision-making from a psychology perspective. Classic and modern experimental methods.', credits: 1, category: 'elective', interestTags: ['philosophy'], prereqs: [], genEdReqs: [] },
    { id: 'PHL203', title: 'Philosophy of Mind', description: 'Consciousness, artificial intelligence, free will, and the mind-body problem. What makes a mind?', credits: 1, category: 'elective', interestTags: ['philosophy', 'design'], prereqs: [], genEdReqs: [] },
    { id: 'CSC171', title: 'Introduction to Computer Science', description: 'Programming in Java. Problem-solving, data structures, algorithms, and object-oriented design.', credits: 1, category: 'elective', interestTags: [], prereqs: [], genEdReqs: [] },
    { id: 'PHL101', title: 'Introduction to Philosophy', description: 'Classic questions about knowledge, reality, ethics, free will, and the meaning of life.', credits: 1, category: 'elective', interestTags: ['philosophy'], prereqs: [], genEdReqs: [] },
    { id: 'PHL225', title: 'Philosophy of Science', description: 'What is science? Scientific method, theory change, realism, and the demarcation problem.', credits: 1, category: 'elective', interestTags: ['philosophy'], prereqs: [], genEdReqs: [] },

    // ===== CLUSTER / ELECTIVE OPTIONS =====
    // Humanities cluster options
    { id: 'SA100', title: 'Introduction to Studio Art', description: 'Fundamentals of visual art-making. Drawing, painting, sculpture, and digital media.', credits: 1, category: 'elective', interestTags: ['ceramics'], prereqs: [], clusterGroup: 'studio-art', genEdReqs: [] },
    { id: 'SA161', title: 'Ceramics I', description: 'Hand-building and wheel-throwing techniques. Clay chemistry, glazing, and firing. Open studio access.', credits: 1, category: 'elective', interestTags: ['ceramics'], prereqs: [], clusterGroup: 'studio-art', genEdReqs: [] },
    { id: 'SA110', title: 'Drawing I', description: 'Observational and expressive drawing. Graphite, charcoal, ink, and mixed media.', credits: 1, category: 'elective', interestTags: ['ceramics'], prereqs: [], clusterGroup: 'studio-art', genEdReqs: [] },
    { id: 'SA171', title: 'Sculpture I', description: 'Three-dimensional art: carving, casting, construction, and installation.', credits: 1, category: 'elective', interestTags: ['ceramics'], prereqs: [], clusterGroup: 'studio-art', genEdReqs: [] },
    { id: 'ENG275', title: 'Science Fiction', description: 'The genre from Mary Shelley to the present. Technology, society, utopia, dystopia, and social commentary.', credits: 1, category: 'elective', interestTags: ['literature', 'space'], prereqs: [], clusterGroup: 'literature', genEdReqs: [] },
    { id: 'ENG290', title: 'Japanese Literature in Translation', description: 'Major Japanese literary works: The Tale of Genji, Bashō, Mishima, Murakami.', credits: 1, category: 'elective', interestTags: ['literature', 'cultural-studies'], prereqs: [], clusterGroup: 'literature', genEdReqs: [] },
    { id: 'MUR101', title: 'Introduction to Music', description: 'Exploring music through listening, history, and theory. Eastman School of Music connection.', credits: 1, category: 'elective', interestTags: ['music'], prereqs: [], clusterGroup: 'music', genEdReqs: [] },

    // Social Sciences cluster options
    { id: 'ECO108', title: 'Principles of Economics', description: 'Unified introduction to micro and macroeconomics. Supply/demand, market structures, GDP, inflation, and policy.', credits: 1, category: 'elective', interestTags: ['economics', 'game-theory'], prereqs: [], clusterGroup: 'economics', genEdReqs: [] },
    { id: 'PSC101', title: 'Introduction to Political Science', description: 'Political systems, theories, and institutions. Democracy, authoritarianism, and political participation.', credits: 1, category: 'elective', interestTags: ['politics'], prereqs: [], clusterGroup: 'political-science', genEdReqs: [] },
    { id: 'PSC215', title: 'Political Economy', description: 'Interaction of politics and markets. Trade policy, redistribution, development, and the welfare state.', credits: 1, category: 'elective', interestTags: ['economics', 'politics'], prereqs: ['PSC101'], clusterGroup: 'political-science', genEdReqs: [] },
    { id: 'AAS100', title: 'Introduction to Asian American Studies', description: 'History, culture, and experience of Asian Americans. Immigration, exclusion, identity, and contemporary issues.', credits: 1, category: 'elective', interestTags: ['cultural-studies'], prereqs: [], clusterGroup: 'asian-american-studies', genEdReqs: [] },

    // Natural Sciences / free elective options
    { id: 'AST104', title: 'Astronomy Survey', description: 'Modern astronomy for non-scientists: planets, stars, black holes, galaxies, and the expanding universe.', credits: 1, category: 'elective', interestTags: ['astronomy', 'space', 'science'], prereqs: [], clusterGroup: 'astronomy', genEdReqs: [] },
    { id: 'AST203', title: 'Origins: From the Big Bang to Life', description: 'How the universe, galaxies, stars, planets, and life formed. Cosmology, stellar evolution, and astrobiology.', credits: 1, category: 'elective', interestTags: ['astronomy', 'space', 'science'], prereqs: [], clusterGroup: 'astronomy', genEdReqs: [] },

    // Digital media / design
    { id: 'DMS103', title: 'Digital Media & Visual Culture', description: 'How digital media shapes visual culture. Photography, video, interactive media, and virtual environments.', credits: 1, category: 'elective', interestTags: ['design'], prereqs: [], clusterGroup: 'digital-media', genEdReqs: [] },
    { id: 'DMS310', title: 'UX/UI Design Studio', description: 'User research, wireframing, prototyping in Figma, and iterative design. Build a complete design case study.', credits: 1, category: 'elective', interestTags: ['design'], prereqs: ['DMS103'], clusterGroup: 'digital-media', genEdReqs: [] },

    // Writing requirement
    { id: 'WRT105', title: 'Writing & the Arts of Language', description: 'College writing seminar. Argument, evidence, revision, and rhetorical strategies. Required for all first-years.', credits: 1, category: 'gen-ed', interestTags: [], prereqs: [], genEdReqs: ['writing'] },
  ],
};
