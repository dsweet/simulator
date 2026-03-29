import { Persona } from '../types';

export const personas: Persona[] = [
  // ============================================================
  // 1. THE CODER — Maya Chen
  // ============================================================
  {
    id: 'coder',
    name: 'Maya Chen',
    archetype: 'The Coder',
    emoji: '\u{1F4BB}',
    bio: 'Maya is a methodical builder who taught herself to code in middle school by making browser extensions that added live captions to her deaf older brother\'s video calls.',
    passion: 'Making software accessible from the first line of code, because exclusion by design is a choice and she refuses to make it.',
    coursesByTerm: [
      { termLabel: 'Fall Year 1', courses: ['MATH124', 'CHEM142', 'ENGR101'] },
      { termLabel: 'Winter Year 1', courses: ['MATH125', 'PHYS121', 'ENGL131'] },
      { termLabel: 'Spring Year 1', courses: ['MATH126', 'CSE122', 'AAS330'] },
      { termLabel: 'Fall Year 2', courses: ['CSE123', 'INFO200', 'AAS101'] },
      { termLabel: 'Winter Year 2', courses: ['CSE154', 'PHIL120', 'MATH308'] },
      { termLabel: 'Spring Year 2', courses: ['PHYS122', 'PSYCH101', 'MATH394'] },
      { termLabel: 'Fall Year 3', courses: ['HCDE302', 'HCDE308', 'HCDE310'] },
      { termLabel: 'Winter Year 3', courses: ['HCDE303', 'HCDE313', 'HCDE315'] },
      { termLabel: 'Spring Year 3', courses: ['HCDE321', 'HCDE322', 'HCDE351', 'PSYCH315'] },
      { termLabel: 'Fall Year 4', courses: ['HCDE492', 'HCDE410', 'HCDE412', 'HCDE496'] },
      { termLabel: 'Winter Year 4', courses: ['HCDE493', 'HCDE439', 'HCDE418'] },
      { termLabel: 'Spring Year 4', courses: ['HCDE417', 'INFO343', 'ENGR321'] },
    ],
    curriculumSummary: 'Maya takes the deepest CS sequence of the eight (CSE 121 via AP + 122 + 123 + 154), pairs it with INFO 200 for information architecture thinking, and rounds out her analytical toolkit with PHIL 120 (logic). Her HCDE electives \u2014 advanced interactive systems (410), software development for HCD (439), and data visualization (417) \u2014 give her the full stack for building accessible interfaces. Ethics in Design (412) and Design for Social Impact (418) ground her technical work in social responsibility.',
    visionLeavingUndergrad: 'Maya wants to write production code for assistive technology at a nonprofit or mission-driven company, building screen readers, alternative input systems, and adaptive interfaces that treat accessibility as a design principle, not a feature request.',
    careerTimeline: [
      { years: '1\u20132', role: 'Accessibility Engineer, Deque Systems', description: 'Audits enterprise websites for WCAG compliance and builds internal remediation tools. Begins contributing to the open-source axe-core accessibility testing library.' },
      { years: '2\u20133', role: 'Senior Developer, Trace Center', description: 'Builds adaptive interface toolkits deployed in K-12 school districts across three states at this disability research institute.' },
      { years: '3\u20135', role: 'Tech Lead, Gates Foundation project', description: 'Leads development of an open-source accessibility testing framework for state government digital services. Speaks regularly at the CSUN Assistive Technology Conference.' },
    ],
    futureThinking: 'Maya is weighing whether to become CTO of an accessibility-focused organization or pivot toward standards work at the W3C, where she could shape the next generation of WCAG guidelines \u2014 written by people who actually build assistive technology.',
    techOutcome: true,
    gradSchool: false,
  },

  // ============================================================
  // 2. THE DESIGNER — Jordan Okafor-Reeves
  // ============================================================
  {
    id: 'designer',
    name: 'Jordan Okafor-Reeves',
    archetype: 'The Designer',
    emoji: '\u{1F3A8}',
    bio: 'Jordan is a hands-on maker who grew up in her grandmother\'s woodworking shop in Tacoma, learning that the best-designed objects are the ones that feel right before you even think about why.',
    passion: 'Proving that sustainable consumer products can be as beautiful and functional as their wasteful alternatives, because the planet should not have to pay for good design.',
    coursesByTerm: [
      { termLabel: 'Fall Year 1', courses: ['MATH124', 'CHEM142', 'ENGR101'] },
      { termLabel: 'Winter Year 1', courses: ['MATH125', 'PHYS121', 'ENGL111'] },
      { termLabel: 'Spring Year 1', courses: ['MATH126', 'ME123', 'ART131'] },
      { termLabel: 'Fall Year 2', courses: ['MSE170', 'DESIGN360', 'GWSS200'] },
      { termLabel: 'Winter Year 2', courses: ['ESS101', 'ART134', 'MATH394'] },
      { termLabel: 'Spring Year 2', courses: ['CHEM152', 'DESIGN380', 'HIST312'] },
      { termLabel: 'Fall Year 3', courses: ['HCDE302', 'HCDE308', 'HCDE310'] },
      { termLabel: 'Winter Year 3', courses: ['HCDE303', 'HCDE313', 'HCDE315'] },
      { termLabel: 'Spring Year 3', courses: ['HCDE321', 'HCDE322', 'HCDE351', 'ENGL283'] },
      { termLabel: 'Fall Year 4', courses: ['HCDE492', 'HCDE438', 'HCDE419', 'HCDE497'] },
      { termLabel: 'Winter Year 4', courses: ['HCDE493', 'HCDE411', 'HCDE450'] },
      { termLabel: 'Spring Year 4', courses: ['HCDE410', 'DESIGN410', 'ENGR321'] },
    ],
    curriculumSummary: 'Jordan is the only persona who skips the CSE sequence for engineering fundamentals, instead choosing ME 123 (intro mechanical engineering) and MSE 170 (materials science) \u2014 courses that teach her how things are physically made and what they\'re made of. She pairs CHEM 152 with ESS 101 (earth science) for scientific literacy about material sustainability. Her sophomore year is rich with DESIGN 360/380 and ART 131/134, developing spatial and visual design skills. HCDE electives in advanced prototyping (438), information architecture (411), and design management (450) give her the toolkit to take a product from sketch to manufactured prototype.',
    visionLeavingUndergrad: 'Jordan wants to design physical consumer products \u2014 packaging, housewares, outdoor gear \u2014 at organizations that treat circular material flows as a design constraint, not a marketing claim.',
    careerTimeline: [
      { years: '1\u20132', role: 'Junior Industrial Designer, sustainable packaging startup (Portland)', description: 'Prototypes compostable alternatives to single-use plastic packaging for food and personal care brands.' },
      { years: '2\u20133', role: 'Design Researcher, Patagonia Materials Innovation', description: 'Conducts field studies with climbers and trail runners to inform repair-friendly gear designs using recycled and bio-based materials.' },
      { years: '3\u20134', role: 'Product Designer, Teague (Seattle)', description: 'Leads projects for outdoor brands transitioning to cradle-to-cradle material systems at this well-known design consultancy.' },
      { years: '4\u20135', role: 'Founder, own design studio', description: 'Launches a line of modular, repairable kitchen tools made from reclaimed ocean plastic and mycelium composites. First products sell direct-to-consumer and through specialty retail.' },
    ],
    futureThinking: 'Jordan is deciding whether to scale her studio into a full consumer brand or pursue a master\'s in materials science to deepen her ability to invent new sustainable materials rather than just design with existing ones.',
    techOutcome: false,
    gradSchool: false,
  },

  // ============================================================
  // 3. THE USER RESEARCHER — Priya Lakshmi Nair
  // ============================================================
  {
    id: 'researcher',
    name: 'Priya Lakshmi Nair',
    archetype: 'The User Researcher',
    emoji: '\u{1F50D}',
    bio: 'Priya is an empathetic listener who spent high school volunteering at a free clinic in the Rainier Valley, where she watched patients struggle with discharge instructions written at a 12th-grade reading level in a language that was not their first.',
    passion: 'Making healthcare navigable and humane for patients from immigrant and low-income communities, because the system fails people not because the medicine is bad but because the experience is designed for providers, not patients.',
    coursesByTerm: [
      { termLabel: 'Fall Year 1', courses: ['MATH124', 'CHEM142', 'ENGR101'] },
      { termLabel: 'Winter Year 1', courses: ['MATH125', 'PHYS121', 'ENGL121'] },
      { termLabel: 'Spring Year 1', courses: ['MATH126', 'BIOEN215', 'PSYCH101'] },
      { termLabel: 'Fall Year 2', courses: ['CSE122', 'PSYCH303', 'AIS200'] },
      { termLabel: 'Winter Year 2', courses: ['CSE123', 'ANTH215', 'MATH394'] },
      { termLabel: 'Spring Year 2', courses: ['INFO200', 'SOC101', 'MATH308'] },
      { termLabel: 'Fall Year 3', courses: ['HCDE302', 'HCDE308', 'HCDE310'] },
      { termLabel: 'Winter Year 3', courses: ['HCDE303', 'HCDE313', 'HCDE315'] },
      { termLabel: 'Spring Year 3', courses: ['HCDE321', 'HCDE322', 'HCDE351', 'PSYCH355'] },
      { termLabel: 'Fall Year 4', courses: ['HCDE492', 'HCDE439', 'HCDE412', 'HCDE499'] },
      { termLabel: 'Winter Year 4', courses: ['HCDE493', 'HCDE417', 'HCDE419'] },
      { termLabel: 'Spring Year 4', courses: ['HCDE411', 'ENGL242', 'ENGR490'] },
    ],
    curriculumSummary: 'Priya uniquely takes BIOEN 215 (bioengineering fundamentals) for her engineering fundamentals, connecting engineering directly to biological and health systems. Her sophomore year is a deep study of human behavior in context: PSYCH 101 and 303 (cognitive psychology to understand patients under stress), ANTH 215 (peoples and cultures of Southeast Asia), and SOC 101 (social structures of care). AIS 200 (American Indian Studies) satisfies diversity while deepening her understanding of health inequity in Indigenous communities. Her HCDE electives \u2014 advanced user research (439), data visualization (417), and information architecture (411) \u2014 all directly support healthcare UX research.',
    visionLeavingUndergrad: 'Priya wants to work as a UX researcher in a healthcare organization, studying how patients experience care at every touchpoint and redesigning those moments to be clearer, more humane, and more equitable.',
    careerTimeline: [
      { years: '1\u20132', role: 'UX Researcher, Providence Health System', description: 'Conducts patient journey mapping studies for the patient portal, discharge process, and appointment scheduling flow.' },
      { years: '2\u20133', role: 'Lead Researcher, multilingual communication redesign', description: 'Runs participatory design sessions with Somali, Vietnamese, and Spanish-speaking patient advisory boards. The redesigned discharge materials reduce 30-day readmission rates in pilot clinics.' },
      { years: '3\u20134', role: 'Research Director, health equity nonprofit', description: 'Designs community-based participatory research studies on healthcare access barriers in rural eastern Washington.' },
      { years: '4\u20135', role: 'Head of Research, digital health startup', description: 'Builds the UX research practice from scratch for a platform connecting community health workers with patients managing chronic conditions.' },
    ],
    futureThinking: 'Priya is planning to pursue a master\'s in public health (MPH) to complement her design research skills with epidemiological and health systems expertise, positioning her to eventually lead patient experience strategy at the state health department or CMS.',
    techOutcome: false,
    gradSchool: false,
  },

  // ============================================================
  // 4. THE GAME THEORY PERSON — Soren Lindquist
  // ============================================================
  {
    id: 'game-theory',
    name: 'Soren Lindquist',
    archetype: 'The Game Theory Person',
    emoji: '\u{1F3B2}',
    bio: 'Soren is a systems thinker who became fascinated with collective decision-making after watching his small-town school board in Bellingham repeatedly adopt policies that no individual board member actually wanted \u2014 a real-world Abilene paradox playing out over school lunches and textbook budgets.',
    passion: 'Understanding why groups of rational people make irrational collective decisions, and designing choice environments that help communities arrive at decisions they genuinely endorse rather than ones they silently regret.',
    coursesByTerm: [
      { termLabel: 'Fall Year 1', courses: ['MATH124', 'CHEM142', 'ENGR101'] },
      { termLabel: 'Winter Year 1', courses: ['MATH125', 'PHYS121', 'ENGL182'] },
      { termLabel: 'Spring Year 1', courses: ['MATH126', 'EE215', 'ECON200'] },
      { termLabel: 'Fall Year 2', courses: ['CSE122', 'ECON300', 'PSYCH101'] },
      { termLabel: 'Winter Year 2', courses: ['CSE123', 'PHIL114', 'POL101'] },
      { termLabel: 'Spring Year 2', courses: ['MATH308', 'PSYCH345', 'ENGL302'] },
      { termLabel: 'Fall Year 3', courses: ['HCDE302', 'HCDE308', 'HCDE310'] },
      { termLabel: 'Winter Year 3', courses: ['HCDE303', 'HCDE313', 'HCDE315'] },
      { termLabel: 'Spring Year 3', courses: ['HCDE321', 'HCDE322', 'HCDE351', 'MATH394'] },
      { termLabel: 'Fall Year 4', courses: ['HCDE492', 'HCDE417', 'HCDE412', 'ENGR321'] },
      { termLabel: 'Winter Year 4', courses: ['HCDE493', 'HCDE410', 'HCDE485'] },
      { termLabel: 'Spring Year 4', courses: ['HCDE439', 'GWSS200', 'ENGR490'] },
    ],
    curriculumSummary: 'Soren builds the most interdisciplinary path. His sophomore year stacks microeconomics (ECON 200), game theory (ECON 300), judgment and decision-making psychology (PSYCH 345), ethics (PHIL 114), political science (POL 101), and linear algebra (MATH 308) into a theoretical toolkit for understanding how people make choices in groups. EE 215 for engineering fundamentals gives him systems-modeling intuition. His HCDE electives \u2014 data visualization (417), ethics in design (412), design & policy (485), and advanced interactive systems (410) \u2014 prepare him for a PhD studying how choice architecture shapes democratic governance.',
    visionLeavingUndergrad: 'Soren plans to pursue a PhD in behavioral economics or public policy, studying how choice architecture and information design can improve collective decision-making in democratic governance, climate policy, and urban planning.',
    careerTimeline: [
      { years: '1\u20133', role: 'PhD Student, Carnegie Mellon (Behavioral Economics)', description: 'Researches how information visualization design affects public deliberation outcomes in municipal participatory budgeting processes. Supported by an NSF Graduate Research Fellowship.' },
      { years: '3', role: 'Published Researcher', description: 'Publishes first major paper on "nudge infrastructure" \u2014 how the UX design of digital public comment platforms systematically amplifies certain voices and suppresses others.' },
      { years: '4\u20135', role: 'Research Fellow, Behavioral Insights Team', description: 'Runs randomized field experiments on redesigned public participation interfaces in three pilot cities. Tests whether changing how budget trade-off information is presented changes which projects communities fund.' },
    ],
    futureThinking: 'Soren envisions becoming a professor who runs an applied research lab at the intersection of behavioral economics, information design, and democratic governance \u2014 training a new generation of "choice architects" for public institutions and publishing open-source toolkits for better civic decision-making.',
    techOutcome: false,
    gradSchool: true,
    gradSchoolType: 'PhD',
  },

  // ============================================================
  // 5. THE ALGORITHMS PERSON — Tariq Osman
  // ============================================================
  {
    id: 'algorithms',
    name: 'Tariq Osman',
    archetype: 'The Algorithms Person',
    emoji: '\u{1F9E0}',
    bio: 'Tariq is a pattern-spotter who grew up bilingual (Arabic/English) in Dearborn, Michigan, and noticed in high school that the Arabic-language internet his parents consumed was saturated with medical misinformation and conspiracy theories that English-language fact-checkers never caught.',
    passion: 'Building computational tools that detect and counter misinformation in under-resourced languages, because content moderation built for English and scaled to other languages as an afterthought is failing billions of people.',
    coursesByTerm: [
      { termLabel: 'Fall Year 1', courses: ['MATH124', 'CHEM142', 'ENGR101'] },
      { termLabel: 'Winter Year 1', courses: ['MATH125', 'PHYS121', 'ENGL131'] },
      { termLabel: 'Spring Year 1', courses: ['MATH126', 'CSE122', 'STAT311'] },
      { termLabel: 'Fall Year 2', courses: ['CSE123', 'MATH308', 'COM271'] },
      { termLabel: 'Winter Year 2', courses: ['CSE163', 'AMATH301', 'AAS101'] },
      { termLabel: 'Spring Year 2', courses: ['PHIL115', 'PSYCH101', 'MATH394'] },
      { termLabel: 'Fall Year 3', courses: ['HCDE302', 'HCDE308', 'HCDE310'] },
      { termLabel: 'Winter Year 3', courses: ['HCDE303', 'HCDE313', 'HCDE315'] },
      { termLabel: 'Spring Year 3', courses: ['HCDE321', 'HCDE322', 'HCDE351', 'ENGL262'] },
      { termLabel: 'Fall Year 4', courses: ['HCDE492', 'HCDE417', 'HCDE418', 'HCDE496'] },
      { termLabel: 'Winter Year 4', courses: ['HCDE493', 'HCDE439', 'HCDE485'] },
      { termLabel: 'Spring Year 4', courses: ['HCDE410', 'HIST112', 'ENGR321'] },
    ],
    curriculumSummary: 'Tariq builds the strongest quantitative and computational foundation. Beyond the full CSE sequence (121 via AP + 122 + 123 + 163), he stacks STAT 311, MATH 308 (linear algebra), and AMATH 301 (applied math) \u2014 the mathematical prerequisites for machine learning. COM 271 (interactive media design) gives him frameworks for understanding how information spreads through networks. PHIL 115 (philosophy of mind) grounds his technical work in questions about consciousness, AI, and epistemic responsibility. His HCDE electives \u2014 data visualization (417), design for social impact (418), software development (439), and design & policy (485) \u2014 support building responsible, human-centered AI tools.',
    visionLeavingUndergrad: 'Tariq wants to work at a nonprofit or research organization building multilingual misinformation detection tools, combining NLP engineering with human-centered design to create systems that serve Arabic, Urdu, Swahili, and other under-resourced language communities.',
    careerTimeline: [
      { years: '1\u20132', role: 'Research Engineer, Meedan', description: 'Develops Arabic NLP classifiers for the Check platform and conducts user research with fact-checkers at MENA region news organizations at this nonprofit building multilingual fact-checking tools.' },
      { years: '2\u20133', role: 'Team Lead, Multilingual Detection Pipeline', description: 'Presents research at ACM FAccT on systematic bias in cross-lingual misinformation classifiers. Co-authors a paper showing that Arabic health misinformation models trained on translated English data miss 40% of culturally specific false claims.' },
      { years: '3\u20134', role: 'Technical Researcher, Partnership on AI', description: 'Studies how major platform content moderation systems perform across 12 languages and publishes recommendations adopted by two platform companies.' },
      { years: '4\u20135', role: 'CTO, open-source misinformation detection nonprofit', description: 'Builds a community-governed misinformation detection toolkit designed for use by local news organizations and civil society groups in the Global South.' },
    ],
    futureThinking: 'Tariq is considering a part-time or industry PhD in computational social science to publish foundational research on multilingual information integrity while continuing to ship tools that make an immediate difference. He does not see academia and applied work as a binary choice.',
    techOutcome: true,
    gradSchool: false,
  },

  // ============================================================
  // 6. THE MARKETER — Kai Nakamura
  // ============================================================
  {
    id: 'marketer',
    name: 'Kai Nakamura',
    archetype: 'The Marketer',
    emoji: '\u{1F4E3}',
    bio: 'Kai is a storytelling strategist who grew up on the Olympic Peninsula and spent weekends working at her family\'s outdoor gear shop in Sequim, where she watched customers light up when they found brands that genuinely shared their values \u2014 and walk away from ones that felt like they were faking it.',
    passion: 'Helping mission-driven outdoor and sustainability brands communicate authentically, because companies doing real environmental work deserve strategists who can tell true stories compellingly, and greenwashing poisons the well for everyone.',
    coursesByTerm: [
      { termLabel: 'Fall Year 1', courses: ['MATH124', 'CHEM142', 'ENGR101'] },
      { termLabel: 'Winter Year 1', courses: ['MATH125', 'PHYS121', 'ENGL182'] },
      { termLabel: 'Spring Year 1', courses: ['MATH126', 'ENGR115', 'COM271'] },
      { termLabel: 'Fall Year 2', courses: ['NME220', 'PSYCH101', 'ENGL283'] },
      { termLabel: 'Winter Year 2', courses: ['INFO200', 'DRAMA101', 'MATH394'] },
      { termLabel: 'Spring Year 2', courses: ['ESS101', 'AAS310', 'ATM101'] },
      { termLabel: 'Fall Year 3', courses: ['HCDE302', 'HCDE308', 'HCDE310'] },
      { termLabel: 'Winter Year 3', courses: ['HCDE303', 'HCDE313', 'HCDE315'] },
      { termLabel: 'Spring Year 3', courses: ['HCDE321', 'HCDE322', 'HCDE351', 'ENGL283'] },
      { termLabel: 'Fall Year 4', courses: ['HCDE492', 'HCDE417', 'HCDE450', 'ENGR321'] },
      { termLabel: 'Winter Year 4', courses: ['HCDE493', 'HCDE411', 'HCDE419'] },
      { termLabel: 'Spring Year 4', courses: ['HCDE438', 'HIST312', 'ENGR490'] },
    ],
    curriculumSummary: 'Kai is the communications specialist. She takes ENGR 115 (engineering communication) and NME 220 (new media) for engineering fundamentals \u2014 both directly relevant to brand storytelling. Her sophomore year builds narrative and persuasion skills: COM 271 (interactive media), ENGL 283 (creative writing), DRAMA 101 (theatrical storytelling), and PSYCH 101 (understanding consumer motivation). ESS 101 (earth science) gives her scientific grounding to evaluate environmental brand claims. Her HCDE electives \u2014 data visualization (417), design management (450), information architecture (411), and global design (419) \u2014 support a strategist who understands both the making and managing of brand experiences.',
    visionLeavingUndergrad: 'Kai wants to work as a brand strategist for outdoor and sustainability companies, building campaigns grounded in real environmental impact data and authentic community storytelling rather than vague aspirational messaging.',
    careerTimeline: [
      { years: '1\u20132', role: 'Brand Strategist, Civilization (Seattle)', description: 'Develops campaigns for REI, Filson, and emerging sustainable gear startups at this creative agency known for outdoor brand work.' },
      { years: '2\u20133', role: 'Content Strategist, REI', description: 'Leads a project to redesign how product sustainability information is communicated to members \u2014 replacing vague eco-labels with clear, data-backed impact stories.' },
      { years: '3\u20134', role: 'Senior Brand Strategist, REI', description: 'Launches REI\'s first "product impact dashboard" that lets members see supply chain data, carbon footprint, and repairability scores for every product. The project wins a Webby.' },
      { years: '4\u20135', role: 'Co-founder, brand strategy consultancy', description: 'Starts a consultancy focused exclusively on outdoor, food, and sustainability brands that want to communicate environmental commitments honestly. First clients include a regenerative agriculture startup and a B-Corp outdoor apparel brand.' },
    ],
    futureThinking: 'Kai is interested in how brand storytelling can shift cultural norms around consumption, not just sell products. She\'s considering writing a book on "honest brand communication" \u2014 a practical framework for marketers who want to tell true environmental stories that still resonate \u2014 and eventually teaching a course on it.',
    techOutcome: false,
    gradSchool: false,
  },

  // ============================================================
  // 7. THE POLICY ADVOCATE — Elena Vasquez-Torres
  // ============================================================
  {
    id: 'policy',
    name: 'Elena Vasquez-Torres',
    archetype: 'The Policy Advocate',
    emoji: '\u{2696}\u{FE0F}',
    bio: 'Elena is a precise reader and fierce debater who became politically activated at 16 when her school district in Yakima adopted an AI-powered disciplinary prediction system that flagged Latino students at disproportionate rates \u2014 and no one on the school board understood how it worked.',
    passion: 'Ensuring that technology policy protects the people technology claims to serve. She believes engineers build the systems, lawyers write the rules, and the gap between those two worlds is where harm happens \u2014 she wants to stand in that gap.',
    coursesByTerm: [
      { termLabel: 'Fall Year 1', courses: ['MATH124', 'CHEM142', 'ENGR101'] },
      { termLabel: 'Winter Year 1', courses: ['MATH125', 'PHYS121', 'ENGL111'] },
      { termLabel: 'Spring Year 1', courses: ['MATH126', 'CSE122', 'POL101'] },
      { termLabel: 'Fall Year 2', courses: ['CSE123', 'PHIL114', 'AAS200'] },
      { termLabel: 'Winter Year 2', courses: ['INFO200', 'HIST215', 'MATH308'] },
      { termLabel: 'Spring Year 2', courses: ['INFO310', 'ENGL242', 'PSYCH101'] },
      { termLabel: 'Fall Year 3', courses: ['HCDE302', 'HCDE308', 'HCDE310'] },
      { termLabel: 'Winter Year 3', courses: ['HCDE303', 'HCDE313', 'HCDE315'] },
      { termLabel: 'Spring Year 3', courses: ['HCDE321', 'HCDE322', 'HCDE351', 'AAS330'] },
      { termLabel: 'Fall Year 4', courses: ['HCDE492', 'HCDE417', 'HCDE418', 'HCDE499'] },
      { termLabel: 'Winter Year 4', courses: ['HCDE493', 'HCDE439', 'HCDE412'] },
      { termLabel: 'Spring Year 4', courses: ['HCDE410', 'PHIL340', 'ENGR321'] },
    ],
    curriculumSummary: 'Elena builds a pre-law intellectual foundation through philosophy, political science, and history. PHIL 114 (ethics) and PHIL 340 (ethics of technology) bookend her undergraduate career, giving her rigorous training in moral reasoning about tech. POL 101 and HIST 215 (East Asian history) provide political and historical context. INFO 310 (information ethics & policy) is the course most directly preparing her for tech policy work. She takes CSE 122+123 so she can credibly discuss the technology she wants to regulate. ENGL 242 (reading fiction) trains close reading \u2014 a skill that transfers directly to legal analysis. Her HCDE electives emphasize the social dimensions: social impact (418), ethics in design (412), plus data visualization (417) and software development (439) for technical literacy.',
    visionLeavingUndergrad: 'Elena plans to attend law school focusing on technology law, civil rights, and administrative regulation. She wants to become a tech policy attorney who can read both code and case law, advocating for algorithmic accountability and digital rights.',
    careerTimeline: [
      { years: '1\u20133', role: 'JD Student, Georgetown Law', description: 'Specializes in technology law and civil rights. 1L summer at the ACLU\'s Speech, Privacy, and Technology Project. 2L summer at the FTC Bureau of Consumer Protection, working on algorithmic fairness enforcement.' },
      { years: '3', role: 'Published Law Review Author', description: 'Publishes "Algorithmic Due Process" \u2014 arguing that government use of predictive AI in education and criminal justice triggers constitutional procedural protections current frameworks fail to provide.' },
      { years: '4\u20135', role: 'Legal Fellow, Electronic Frontier Foundation', description: 'Litigates cases challenging government deployment of facial recognition in public schools. Co-drafts model state legislation on AI transparency introduced in three state legislatures.' },
    ],
    futureThinking: 'Elena sees herself eventually leading a new kind of regulatory body \u2014 an agency staffed by people who understand both engineering and civil rights \u2014 or running for state office where she can write the rules rather than just argue about them in court.',
    techOutcome: false,
    gradSchool: true,
    gradSchoolType: 'JD',
  },

  // ============================================================
  // 8. THE STORYTELLER — Nkem Adeyemi
  // ============================================================
  {
    id: 'storyteller',
    name: 'Nkem Adeyemi',
    archetype: 'The Storyteller',
    emoji: '\u{1F3DB}\u{FE0F}',
    bio: 'Nkem is an imaginative world-builder who spent childhood Saturdays at the Burke Museum and evenings at the Museum of Pop Culture, convinced that the most powerful way to help someone understand something is to let them walk through it, touch it, and feel it change around them.',
    passion: 'Creating immersive educational experiences \u2014 museum exhibits, interactive installations, experiential environments \u2014 that make complex subjects visceral and personal, because people don\'t learn from being told facts; they learn from living inside stories.',
    coursesByTerm: [
      { termLabel: 'Fall Year 1', courses: ['MATH124', 'CHEM142', 'ENGR101'] },
      { termLabel: 'Winter Year 1', courses: ['MATH125', 'PHYS121', 'ENGL121'] },
      { termLabel: 'Spring Year 1', courses: ['MATH126', 'NME220', 'ART130'] },
      { termLabel: 'Fall Year 2', courses: ['ENGR115', 'DXARTS200', 'PSYCH101'] },
      { termLabel: 'Winter Year 2', courses: ['ART134', 'GWSS200', 'MATH394'] },
      { termLabel: 'Spring Year 2', courses: ['DXARTS310', 'PSYCH306', 'CLIT270'] },
      { termLabel: 'Fall Year 3', courses: ['HCDE302', 'HCDE308', 'HCDE310'] },
      { termLabel: 'Winter Year 3', courses: ['HCDE303', 'HCDE313', 'HCDE315'] },
      { termLabel: 'Spring Year 3', courses: ['HCDE321', 'HCDE322', 'HCDE351', 'ENGL302'] },
      { termLabel: 'Fall Year 4', courses: ['HCDE492', 'HCDE410', 'HCDE412', 'HCDE497'] },
      { termLabel: 'Winter Year 4', courses: ['HCDE493', 'HCDE411', 'HCDE450'] },
      { termLabel: 'Spring Year 4', courses: ['HCDE438', 'MUSIC116', 'ENGR321'] },
    ],
    curriculumSummary: 'Nkem has the most arts-intensive path. She takes NME 220 (new media) and ENGR 115 (engineering communication) for engineering fundamentals, choosing media and communication tools over traditional engineering hardware. Her sophomore year is a deep immersion in making and perception: DXARTS 200 and 310 (digital arts theory and interactive media), ART 130 (drawing) and ART 134 (ceramics), and PSYCH 306 (perception \u2014 understanding how people process multisensory environments). MUSIC 116 rounds out her sensory vocabulary in senior year. Her HCDE electives \u2014 advanced interactive systems (410), information architecture (411), design management (450), and advanced prototyping (438) \u2014 form a complete toolkit for experiential design.',
    visionLeavingUndergrad: 'Nkem wants to design museum exhibits and interactive educational experiences that transform abstract subjects \u2014 climate change, cellular biology, the history of migration \u2014 into spatial, sensory, emotional journeys visitors carry with them long after they leave.',
    careerTimeline: [
      { years: '1\u20132', role: 'Exhibit Design Assistant, Exploratorium (San Francisco)', description: 'Prototypes interactive science exhibits and runs visitor observation studies to understand how people engage with hands-on installations.' },
      { years: '2\u20133', role: 'Associate Exhibit Designer, Exploratorium', description: 'Leads design of a climate change gallery using sensor-responsive environments and physical computing to let visitors experience 200 years of temperature data through light, sound, and vibration. Wins an AAM Excellence in Exhibition award.' },
      { years: '3\u20134', role: 'Experience Designer, Belle & Wissell (Seattle)', description: 'Works on projects for children\'s museums, science centers, and corporate visitor experiences. Develops a specialty in "data-physical" exhibits that translate datasets into spatial, tactile installations.' },
      { years: '4\u20135', role: 'Lead Exhibit Designer, Smithsonian NMAAHC', description: 'Designs a new temporary gallery on the African diaspora using immersive spatial storytelling, oral history listening stations, and interactive digital media.' },
    ],
    futureThinking: 'Nkem dreams of launching her own experiential design practice focused on stories that traditional museums struggle to tell \u2014 oral histories of displaced communities, the invisible science of everyday life, the sensory experiences of people with different cognitive profiles. She\'s also considering an MFA in immersive media to push her craft further.',
    techOutcome: false,
    gradSchool: false,
  },
];
