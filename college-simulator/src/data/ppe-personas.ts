import { Persona } from '../types';

// PPE/PPEL personas: 4 use Richmond PPEL courses, 4 use Rochester PPE courses
// Richmond personas use JAPN201/202 (3rd & 4th in series) for foreign language
// Rochester personas include two 3-course clusters outside the major

export const ppePersonas: Persona[] = [
  // ================================================================
  // RICHMOND PPEL PERSONAS (4)
  // ================================================================

  // ============================================================
  // 1. THE CONSTITUTIONAL ADVOCATE — Amara Osei-Mensah
  // ============================================================
  {
    id: 'ppel-constitutional-advocate',
    name: 'Amara Osei-Mensah',
    archetype: 'The Constitutional Advocate',
    emoji: '\u{2696}\u{FE0F}',
    bio: 'Amara is the daughter of Ghanaian immigrants in Northern Virginia who grew up hearing her parents\u2019 stories of constitutional crises in Ghana and watching American constitutional debates play out on cable news \u2014 struck by how similar the underlying questions were: who gets to vote, what the courts can do, and what happens when the people with power rewrite the rules.',
    passion: 'Ensuring that constitutional rights are real protections and not just words on paper, because a right that can\u2019t be enforced is just a promise that nobody has to keep.',
    coursesByTerm: [
      { termLabel: 'Fall Year 1', courses: ['FYS100', 'ECON101', 'HIST100', 'JAPN201'] },
      { termLabel: 'Spring Year 1', courses: ['PPEL261', 'PLSC100', 'BIOL100', 'JAPN202'] },
      { termLabel: 'Fall Year 2', courses: ['PPEL262', 'PHIL201', 'HIST245', 'ART130'] },
      { termLabel: 'Spring Year 2', courses: ['PPEL363', 'PLSC331', 'ENGL203', 'PSYCH100'] },
      { termLabel: 'Fall Year 3', courses: ['PLSC333', 'PHIL364', 'PLSC315', 'AMST250'] },
      { termLabel: 'Spring Year 3', courses: ['ECON231', 'PHIL310', 'LDSP200', 'ASTR130'] },
      { termLabel: 'Fall Year 4', courses: ['PPEL401', 'PLSC350', 'PHIL250', 'HIST310'] },
      { termLabel: 'Spring Year 4', courses: ['PPEL388', 'PHIL350', 'ECON345', 'ART230'] },
    ],
    curriculumSummary: 'Amara builds the deepest legal foundation of the PPEL personas. Her PPEL area courses \u2014 constitutional law (PLSC 331), civil rights & liberties (PLSC 333), and law & economics (ECON 231) \u2014 form a comprehensive pre-law toolkit. Philosophy of law (PHIL 364) and political philosophy (PHIL 250) give her rigorous training in moral reasoning about legal institutions. She chooses ethics (PHIL 201) for the PPEL ethics area, then goes deeper with ethics & contemporary society (PHIL 310) and advanced political philosophy (PHIL 350). American political theory (PLSC 315) and comparative politics (PLSC 350) provide structural context for understanding how constitutional systems work and fail. Race & ethnicity in American history (HIST 245) and the civil rights movement (HIST 310) ground her legal thinking in the history it claims to serve. Japanese language (JAPN 201\u2013202) satisfies the foreign language requirement at the intermediate level, continuing the IB Japanese foundation. Ceramics (ART 130, 230) provides a contemplative counterweight to dense legal reading.',
    visionLeavingUndergrad: 'Amara plans to attend law school focusing on constitutional law and civil rights, with particular interest in how algorithmic systems interact with equal protection guarantees \u2014 she wants to be the lawyer who understands both the Fourteenth Amendment and the algorithm.',
    careerTimeline: [
      { years: '1\u20133', role: 'JD Student, Georgetown Law', description: 'Concentrates in constitutional law and technology. 1L summer at the ACLU Voting Rights Project. 2L summer at a constitutional litigation boutique working on redistricting challenges.' },
      { years: '3', role: 'Published Law Review Author', description: 'Publishes "Algorithmic Gerrymandering" \u2014 arguing that redistricting software that optimizes for partisan advantage while technically satisfying Voting Rights Act requirements constitutes a new form of vote dilution that existing doctrine fails to address.' },
      { years: '4\u20135', role: 'Staff Attorney, Brennan Center for Justice', description: 'Litigates voting rights cases challenging AI-assisted voter purge systems. Co-drafts model state legislation on algorithmic transparency in election administration, adopted by two state legislatures.' },
    ],
    futureThinking: 'Amara sees herself eventually arguing a case before the Supreme Court \u2014 or deciding that the real leverage is in state constitutional law, where bold theories about algorithmic accountability can be tested without needing five justices\u2019 approval.',
    techOutcome: false,
    gradSchool: true,
    gradSchoolType: 'JD',
  },

  // ============================================================
  // 2. THE POLICY ANALYST — Kai Tanaka-Morrison
  // ============================================================
  {
    id: 'ppel-policy-analyst',
    name: 'Kai Tanaka-Morrison',
    archetype: 'The Policy Analyst',
    emoji: '\u{1F4CB}',
    bio: 'Kai grew up in Portland, OR, where a parent who worked for the city planning office brought home stories of how economic data shaped policy decisions \u2014 and how often the data was misread, the models were wrong, or the analysis answered the wrong question entirely.',
    passion: 'Making government decisions smarter by connecting economic evidence to policy design, because bad policy isn\u2019t usually caused by bad intentions \u2014 it\u2019s caused by good intentions that never met good data.',
    coursesByTerm: [
      { termLabel: 'Fall Year 1', courses: ['FYS100', 'ECON101', 'PLSC100', 'JAPN201'] },
      { termLabel: 'Spring Year 1', courses: ['PPEL261', 'ECON102', 'BIOL100', 'JAPN202'] },
      { termLabel: 'Fall Year 2', courses: ['PPEL262', 'ECON270', 'HIST100', 'ART130'] },
      { termLabel: 'Spring Year 2', courses: ['PPEL363', 'PLSC340', 'ENGL203', 'PSYCH100'] },
      { termLabel: 'Fall Year 3', courses: ['ECON315', 'PLSC320', 'HIST245', 'LDSP200'] },
      { termLabel: 'Spring Year 3', courses: ['ECON325', 'MATH350', 'AMST250', 'ASTR130'] },
      { termLabel: 'Fall Year 4', courses: ['PPEL401', 'ECON345', 'PLSC390', 'CMSC150'] },
      { termLabel: 'Spring Year 4', courses: ['ECON390', 'PLSC360', 'CMSC301', 'LDST340'] },
    ],
    curriculumSummary: 'Kai builds the most economics-intensive PPEL path. He takes the economics concentration, adding macroeconomics (ECON 102) and intermediate micro (ECON 270) beyond the PPEL core to build analytical depth. Behavioral economics (315), public finance (325), inequality (345), and development economics (390) give him range across policy-relevant subfields. Public policy analysis (PLSC 340), political economy (PLSC 320), and game theory & politics (PLSC 360) connect economic thinking to political institutions. Applied data analysis (MATH 350) and computing (CMSC 150, 301) build the practical data skills that policy analysis requires. His capstone project analyzes the distributional effects of Oregon\u2019s cap-and-invest program, estimating how carbon pricing revenue should be redistributed to avoid burdening low-income households.',
    visionLeavingUndergrad: 'Kai plans to attend a public policy graduate program, then work in government data analytics \u2014 building the capacity of state and local governments to use evidence rigorously in program design and evaluation.',
    careerTimeline: [
      { years: '1\u20132', role: 'MPA Student, Princeton School of Public and International Affairs', description: 'Focuses on domestic policy analysis and quantitative methods. Summer fellowship at the Congressional Budget Office scoring proposed legislation for fiscal impact.' },
      { years: '2\u20133', role: 'Policy Analyst, Oregon Department of Revenue', description: 'Evaluates tax policy proposals for distributional impact. Builds Oregon\u2019s first microsimulation model for estimating how tax changes affect households at different income levels.' },
      { years: '3\u20134', role: 'Director of Data Analytics, State Treasurer\u2019s Office', description: 'Leads a team of analysts building dashboards and models for evidence-based budgeting. The team\u2019s analysis of early childhood investment returns influences the state\u2019s budget allocation.' },
      { years: '4\u20135', role: 'Chief Data Officer, state government', description: 'Oversees the integration of data analytics into policy design across agencies. Launches an open data initiative that lets researchers and journalists access anonymized administrative data for independent policy evaluation.' },
    ],
    futureThinking: 'Kai is interested in whether the model he\u2019s building in Oregon can be replicated nationally \u2014 a network of state-level data analytics offices that share methods, code, and lessons learned, raising the analytical quality of government decision-making across the country.',
    techOutcome: false,
    gradSchool: true,
    gradSchoolType: 'MPP',
  },

  // ============================================================
  // 3. THE CIVIC ENTREPRENEUR — Sade Abiodun-Williams
  // ============================================================
  {
    id: 'ppel-civic-entrepreneur',
    name: 'Sade Abiodun-Williams',
    archetype: 'The Civic Entrepreneur',
    emoji: '\u{1F3DB}\u{FE0F}',
    bio: 'Sade grew up in Atlanta watching her neighborhood change as longtime residents were displaced by development that claimed to be "for the community" but was really for the developers. The community meetings where residents voiced their concerns were theater \u2014 the decisions had already been made \u2014 and she decided that the only way to change the outcome was to change who owned the assets.',
    passion: 'Building economic structures that let communities own their own futures, because telling people they have a voice while someone else holds the deed is not empowerment \u2014 it\u2019s performance.',
    coursesByTerm: [
      { termLabel: 'Fall Year 1', courses: ['FYS100', 'ECON101', 'PHIL101', 'JAPN201'] },
      { termLabel: 'Spring Year 1', courses: ['PPEL261', 'PLSC100', 'BIOL100', 'JAPN202'] },
      { termLabel: 'Fall Year 2', courses: ['PPEL262', 'PHIL201', 'HIST100', 'ART130'] },
      { termLabel: 'Spring Year 2', courses: ['PPEL363', 'PLSC312', 'ENGL203', 'PSYCH100'] },
      { termLabel: 'Fall Year 3', courses: ['ECON233', 'LDSP200', 'HIST245', 'ASTR130'] },
      { termLabel: 'Spring Year 3', courses: ['PLSC350', 'LDST310', 'LDST330', 'AMST250'] },
      { termLabel: 'Fall Year 4', courses: ['PPEL401', 'PHIL369', 'ECON102', 'ENGL280'] },
      { termLabel: 'Spring Year 4', courses: ['PPEL388', 'PHIL310', 'ART230', 'HIST310'] },
    ],
    curriculumSummary: 'Sade uniquely combines PPEL with Richmond\u2019s Jepson School of Leadership Studies \u2014 one of the only undergraduate leadership programs in the country. Leadership studies (LDSP 200), leadership ethics (LDST 310), and social movements & leadership (LDST 330) give her organizational and ethical tools for building institutions, not just analyzing them. Within PPEL, she takes ethics (PHIL 201), economic justice (PHIL 369), and ethics & contemporary society (PHIL 310) for deep moral reasoning about property, ownership, and community. Modern political theory (PLSC 312) and comparative politics (PLSC 350) examine how political structures enable or block community power. Ethics & economics (ECON 233) directly addresses the moral dimensions of markets. Creative writing (ENGL 280) develops her communication skills for advocacy. Her capstone project examines community land trust models in Atlanta, Richmond, and Burlington, analyzing why some succeed at preventing displacement and others don\u2019t.',
    visionLeavingUndergrad: 'Sade wants to work directly in community economic development \u2014 not studying it from a distance but building organizations that give neighborhoods real economic power through cooperative ownership, community land trusts, and local investment structures.',
    careerTimeline: [
      { years: '1\u20132', role: 'Program Associate, Maggie Walker Community Land Trust (Richmond, VA)', description: 'Works on the ground with families navigating the community land trust homeownership model \u2014 learning the legal, financial, and organizational mechanics of shared-equity housing.' },
      { years: '2\u20133', role: 'Community Organizer, commercial corridor revitalization', description: 'Organizes small business owners in a historically Black Richmond neighborhood to form a commercial cooperative, pooling resources to negotiate a collective lease that prevents displacement when the block is redeveloped.' },
      { years: '3\u20134', role: 'Co-founder, cooperative development nonprofit', description: 'Launches an organization that helps neighborhoods create cooperative ownership structures for commercial property \u2014 so that when a neighborhood gentrifies, the community owns the buildings, not just the memories.' },
      { years: '4\u20135', role: 'Executive Director, growing the model', description: 'Expands to three cities, partnering with CDFIs and local governments to create a replicable toolkit for community commercial ownership. The model attracts attention from the Urban Institute and the Ford Foundation.' },
    ],
    futureThinking: 'Sade is deciding whether to grow her organization into a national network or run for local office where she can change the zoning, tax, and land use policies that determine whether community ownership is possible in the first place.',
    techOutcome: false,
    gradSchool: false,
  },

  // ============================================================
  // 4. THE BRIDGE BUILDER — Ethan Kovac-Nguyen
  // ============================================================
  {
    id: 'ppel-bridge-builder',
    name: 'Ethan Kovac-Nguyen',
    archetype: 'The Bridge Builder',
    emoji: '\u{1F30F}',
    bio: 'Ethan is the child of a Croatian refugee father and a Vietnamese-American mother in Richmond, VA, who grew up navigating between cultures and languages \u2014 translating not just words but assumptions, values, and political frameworks that didn\u2019t map neatly onto each other.',
    passion: 'Building genuine cross-cultural understanding through structured dialogue, because international cooperation fails when people assume that "freedom," "justice," and "democracy" mean the same thing in every language.',
    coursesByTerm: [
      { termLabel: 'Fall Year 1', courses: ['FYS100', 'ECON101', 'HIST230', 'JAPN201'] },
      { termLabel: 'Spring Year 1', courses: ['PPEL261', 'PLSC100', 'BIOL100', 'JAPN202'] },
      { termLabel: 'Fall Year 2', courses: ['PPEL262', 'PLSC310', 'HIST100', 'ART101'] },
      { termLabel: 'Spring Year 2', courses: ['PPEL363', 'PHIL201', 'ENGL260', 'PSYCH100'] },
      { termLabel: 'Fall Year 3', courses: ['PLSC350', 'ECON102', 'HIST245', 'ASTR130'] },
      { termLabel: 'Spring Year 3', courses: ['PLSC320', 'PLSC390', 'ENGL203', 'LDSP200'] },
      { termLabel: 'Fall Year 4', courses: ['PPEL401', 'PPEL381', 'ECON231', 'ENGL280'] },
      { termLabel: 'Spring Year 4', courses: ['PPEL388', 'PLSC340', 'PHIL250', 'HIST250'] },
    ],
    curriculumSummary: 'Ethan builds the most internationally oriented PPEL path. International relations (PLSC 310), comparative politics (PLSC 350), politics of developing nations (PLSC 390), and political economy (PLSC 320) give him a comprehensive understanding of how different political systems interact. East Asian civilizations (HIST 230) deepens his family connection to Vietnamese history and culture. Asian American literature (ENGL 260) explores diasporic identity through narrative. Within PPEL, he takes ethics (PHIL 201) and political philosophy (PHIL 250) for moral reasoning about international justice, and law & economics (ECON 231) for understanding how legal frameworks structure international cooperation. Leadership studies (LDSP 200) and the PPEL internship (388) provide practical experience. Creative writing (ENGL 280) develops his ability to communicate across cultural contexts. His capstone project compares how "rule of law" is conceptualized in American, Vietnamese, and Croatian political thought \u2014 and what those differences mean for international institution design.',
    visionLeavingUndergrad: 'Ethan wants to work in international education and cultural diplomacy \u2014 designing programs that bring people from different political traditions into genuine dialogue, not the kind of international exchange where everyone agrees on liberal democratic principles at the closing ceremony and then goes home unchanged.',
    careerTimeline: [
      { years: '1\u20132', role: 'Program Coordinator, Fulbright Vietnam', description: 'Manages educational exchange programs between Vietnamese and American universities. Designs a new policy dialogue track pairing Vietnamese public administration students with American policy students.' },
      { years: '2\u20133', role: 'Program Officer, Asia Foundation (San Francisco)', description: 'Develops cross-cultural governance exchange programs connecting local government officials in Southeast Asia with U.S. counterparts. Focuses on comparative approaches to public participation in urban planning.' },
      { years: '3\u20134', role: 'Director of Programs, cultural diplomacy nonprofit', description: 'Designs and runs a year-long fellowship bringing early-career policy professionals from East Asia, Southeast Asia, and the US into structured dialogue on governance, environmental policy, and economic development.' },
      { years: '4\u20135', role: 'Executive Director, cross-cultural policy exchange', description: 'Founds an organization hosting annual policy dialogues where participants must engage with traditions outside their own before proposing solutions \u2014 the opposite of most international conferences.' },
    ],
    futureThinking: 'Ethan is interested in whether the "structured dialogue" model can be applied to domestic polarization \u2014 whether the same skills that help a Vietnamese official and an American mayor find common ground on urban planning could help Americans from different political tribes hear each other.',
    techOutcome: false,
    gradSchool: false,
  },

  // ================================================================
  // ROCHESTER PPE PERSONAS (4)
  // ================================================================

  // ============================================================
  // 5. THE DEMOCRATIC THEORIST — Zara Petrov-Williams
  // ============================================================
  {
    id: 'ppe-democratic-theorist',
    name: 'Zara Petrov-Williams',
    archetype: 'The Democratic Theorist',
    emoji: '\u{1F5F3}\u{FE0F}',
    bio: 'Zara grew up in a dual-citizen household (US and Russia) in upstate New York, watching democratic norms strain in both countries simultaneously \u2014 the slow erosion in one and the sudden crackdowns in the other \u2014 and became obsessed with the question of why democratic institutions survive in some places and crumble in others.',
    passion: 'Understanding what makes democracy actually work \u2014 not the textbook version with informed citizens and fair elections, but the messy real version where institutions bend under pressure and the question is whether they break.',
    coursesByTerm: [
      { termLabel: 'Fall Year 1', courses: ['ECO108', 'PHL201', 'WRT105', 'HIS100'] },
      { termLabel: 'Spring Year 1', courses: ['PSC101', 'PHL105', 'PHL210', 'HIS150'] },
      { termLabel: 'Fall Year 2', courses: ['ECO207', 'PHL223', 'PPE288', 'HIS205'] },
      { termLabel: 'Spring Year 2', courses: ['PSC287', 'PHL101', 'AST104', 'AST106'] },
      { termLabel: 'Fall Year 3', courses: ['PPE293', 'PHL330', 'PHL340', 'AST203'] },
      { termLabel: 'Spring Year 3', courses: ['PHL310', 'PHL320', 'PSC310', 'ECO265'] },
      { termLabel: 'Fall Year 4', courses: ['PHL350', 'PSC215', 'ECO260', 'ENG101'] },
      { termLabel: 'Spring Year 4', courses: ['PHL275', 'PSC230', 'PSC350', 'ENG250'] },
    ],
    curriculumSummary: 'Zara builds the deepest philosophy concentration of the PPE personas. Her philosophy sequence \u2014 logic (PHL 210), formal logic (PHL 340), political philosophy (PHL 310), advanced ethics (PHL 330), metaphysics (PHL 320), philosophy of language (PHL 350), and philosophy of technology (PHL 275) \u2014 gives her the formal reasoning tools to analyze democratic institutions with precision. She pairs this with political science depth: game theory & politics (PSC 310), political economy (PSC 215), American politics (PSC 230), and public policy (PSC 350). Economics game theory (ECO 260) and behavioral economics (ECO 265) add strategic and psychological dimensions. History cluster (HIS 100, 150, 205) traces the rise and fall of democratic institutions across time and geography. Astronomy cluster (AST 104, 106, 203) provides a contemplative counterbalance \u2014 and a reminder that not every hard question has a political answer. Her PPE seminar paper develops a formal model of democratic resilience under information asymmetry.',
    visionLeavingUndergrad: 'Zara plans to pursue a PhD in political philosophy, studying how democratic institutions can be designed to survive populist stress tests \u2014 not by being fragile and pure, but by being robust enough to bend without breaking.',
    careerTimeline: [
      { years: '1\u20133', role: 'PhD Student, Yale (Political Science \u2014 Political Theory)', description: 'Develops a formal theory of democratic resilience that models how institutional safeguards interact with citizen behavior under conditions of declining trust. Supported by a graduate fellowship and teaching political philosophy to undergraduates.' },
      { years: '3', role: 'Published Researcher', description: 'Publishes a paper in the Journal of Politics showing that deliberative institutions (citizen assemblies, sortition panels) generate more legitimate outcomes than plebiscitary ones \u2014 but only when participants can\u2019t self-select. The paper is discussed in popular media.' },
      { years: '4\u20135', role: 'Postdoctoral Fellow, Stanford Center on Democracy', description: 'Studies real-world democratic innovations \u2014 Ireland\u2019s Citizens\u2019 Assembly, Bogotá\u2019s participatory budgeting, Taiwan\u2019s digital democracy platform \u2014 to test whether her formal models of deliberative resilience hold up in practice.' },
    ],
    futureThinking: 'Zara envisions becoming a political theorist who publishes in philosophy journals and advises democratic reform commissions \u2014 someone who can prove a theorem about social choice and then explain to a state legislator why it matters for redistricting.',
    techOutcome: false,
    gradSchool: true,
    gradSchoolType: 'PhD',
  },

  // ============================================================
  // 6. THE POLITICAL ECONOMIST — Deshawn Marcus-Okafor
  // ============================================================
  {
    id: 'ppe-political-economist',
    name: 'Deshawn Marcus-Okafor',
    archetype: 'The Political Economist',
    emoji: '\u{1F4C8}',
    bio: 'Deshawn grew up in Rochester, NY, watching a Rust Belt city try to reinvent itself \u2014 some neighborhoods getting new restaurants and bike lanes, others left with boarded storefronts and lead paint \u2014 and the politics of who got what was never just about economics. It was about race, history, and which communities had a seat at the table.',
    passion: 'Understanding why cities invest in some neighborhoods and abandon others, because the economic models that explain urban development leave out the political choices that drive it.',
    coursesByTerm: [
      { termLabel: 'Fall Year 1', courses: ['ECO108', 'PHL201', 'WRT105', 'SA100'] },
      { termLabel: 'Spring Year 1', courses: ['PSC101', 'PHL105', 'MTH162', 'SA161'] },
      { termLabel: 'Fall Year 2', courses: ['ECO207', 'PHL223', 'PPE288', 'SA261'] },
      { termLabel: 'Spring Year 2', courses: ['PSC287', 'ECO209', 'PSC215', 'HIS100'] },
      { termLabel: 'Fall Year 3', courses: ['PPE293', 'ECO260', 'PSC310', 'HIS150'] },
      { termLabel: 'Spring Year 3', courses: ['ECO265', 'ECO285', 'PSC200', 'HIS205'] },
      { termLabel: 'Fall Year 4', courses: ['ECO310', 'ECO340', 'MTH165', 'PSY101'] },
      { termLabel: 'Spring Year 4', courses: ['ECO290', 'ECO305', 'PSC350', 'BCS110'] },
    ],
    curriculumSummary: 'Deshawn builds the deepest economics concentration within PPE. Beyond the required intermediate micro (ECO 207), he takes intermediate macro (ECO 209), game theory (ECO 260), behavioral economics (ECO 265), international economics (ECO 285), public finance (ECO 310), environmental economics (ECO 340), development economics (ECO 290), and labor economics (ECO 305) \u2014 nearly the full economics elective catalog. Calculus II (MTH 162) and linear algebra (MTH 165) give him the math for PhD-level work. Political economy (PSC 215) and game theory & politics (PSC 310) connect economic models to political institutions. Studio art cluster \u2014 intro studio (SA 100), ceramics I (SA 161), ceramics II (SA 261) \u2014 gives him a physical creative practice far removed from optimization problems. History cluster (HIS 100, 150, 205) provides context for understanding how economic and political systems co-evolve. His PPE seminar paper studies the political economy of urban renewal spending in mid-size American cities.',
    visionLeavingUndergrad: 'Deshawn plans to pursue a PhD in political economy, studying how political institutions determine the distribution of public investment across neighborhoods \u2014 why some communities get resources and others get neglect, and how the rules of the game could be redesigned.',
    careerTimeline: [
      { years: '1\u20133', role: 'PhD Student, Princeton (Politics)', description: 'Studies the political economy of urban investment, building a dataset of municipal capital spending decisions linked to political representation, demographic change, and lobbying. Supported by a Mellon Fellowship.' },
      { years: '3', role: 'Published Researcher', description: 'Publishes a paper showing that cities with ward-based representation distribute infrastructure spending more equally across neighborhoods than at-large systems \u2014 but the effect disappears when ward boundaries are gerrymandered. The paper is featured in CityLab.' },
      { years: '4\u20135', role: 'Research Fellow, Brookings Institution (Metropolitan Policy)', description: 'Advises city governments on equitable infrastructure investment. Develops a publicly available "equity audit" tool that lets residents compare per-capita spending across neighborhoods in their city.' },
    ],
    futureThinking: 'Deshawn envisions becoming a professor who splits time between academic research and direct work with cities \u2014 publishing in the American Political Science Review and also sitting in on municipal budget hearings, because theory without practice just produces more papers that nobody with a pothole reads.',
    techOutcome: false,
    gradSchool: true,
    gradSchoolType: 'PhD',
  },

  // ============================================================
  // 7. THE CIVIC TECHNOLOGIST — Miriam Feldstein-Choi
  // ============================================================
  {
    id: 'ppe-civic-technologist',
    name: 'Miriam Feldstein-Choi',
    archetype: 'The Civic Technologist',
    emoji: '\u{1F4BB}',
    bio: 'Miriam grew up in a politically active Korean-Jewish household in suburban DC, watched her parents organize voter registration drives using increasingly sophisticated digital tools \u2014 and noticed that the tools were often designed by people who didn\u2019t understand the communities using them. The best organizing still happened face-to-face; the technology just got in the way unless it was built with the organizers, not for them.',
    passion: 'Building digital tools that make civic participation real and accessible, because technology that claims to empower citizens but is designed by people who\u2019ve never knocked on a door is just another barrier dressed up as a solution.',
    coursesByTerm: [
      { termLabel: 'Fall Year 1', courses: ['ECO108', 'PHL201', 'WRT105', 'DMS103'] },
      { termLabel: 'Spring Year 1', courses: ['PSC101', 'PHL105', 'CSC170', 'DMS210'] },
      { termLabel: 'Fall Year 2', courses: ['ECO207', 'PHL223', 'PPE288', 'DMS310'] },
      { termLabel: 'Spring Year 2', courses: ['PSC287', 'PHL275', 'PHL203', 'HIS100'] },
      { termLabel: 'Fall Year 3', courses: ['PPE293', 'PSC215', 'PSC230', 'HIS150'] },
      { termLabel: 'Spring Year 3', courses: ['PSC350', 'ECO265', 'CSC171', 'HIS205'] },
      { termLabel: 'Fall Year 4', courses: ['PSC200', 'ECO340', 'DMS250', 'BCS110'] },
      { termLabel: 'Spring Year 4', courses: ['ECO290', 'PHL225', 'ENV210', 'ENV240'] },
    ],
    curriculumSummary: 'Miriam uniquely combines PPE with Rochester\u2019s digital media and computing courses. Her digital media cluster \u2014 digital media & visual culture (DMS 103), interactive digital media (DMS 210), and UX/UI design studio (DMS 310) \u2014 teaches her to design digital experiences with intention. Web development (CSC 170) and intro CS (CSC 171) give her technical literacy. Data visualization & information design (DMS 250) connects data to communication. Within PPE, philosophy of technology (PHL 275) and philosophy of mind (PHL 203) provide critical frameworks for thinking about what technology can and can\u2019t do for democracy. Political economy (PSC 215), American politics (PSC 230), and public policy (PSC 350) ground her in how political systems actually work. History cluster (HIS 100, 150, 205) contextualizes current democratic challenges. Her PPE seminar paper evaluates three participatory budgeting platforms, analyzing how design choices \u2014 information architecture, voting mechanics, mobile accessibility \u2014 affect who participates and what gets funded.',
    visionLeavingUndergrad: 'Miriam wants to join a civic technology organization building tools that help communities participate in government decisions \u2014 designing interfaces and systems in partnership with organizers and residents, not in a tech company conference room.',
    careerTimeline: [
      { years: '1\u20132', role: 'Design Fellow, Code for America', description: 'Works with a city government to redesign its public comment process for zoning decisions. Conducts user research with community organizers and residents who\u2019ve never used the city\u2019s online systems. Prototype tested in three neighborhoods.' },
      { years: '2\u20133', role: 'Product Designer, Participatory Budgeting Project', description: 'Designs the mobile interface for a participatory budgeting platform used in six cities. Conducts accessibility audits to ensure the platform works for users with limited English, low digital literacy, and disabilities.' },
      { years: '3\u20134', role: 'Design Lead, civic technology nonprofit', description: 'Leads a team building open-source tools for public engagement in climate planning. The platform lets residents visualize how proposed climate policies would affect their neighborhood\u2019s air quality, transit access, and energy costs.' },
      { years: '4\u20135', role: 'Director of Design, national civic technology organization', description: 'Oversees design strategy across multiple products, establishing a user research practice that centers community organizers as co-designers, not just end-users. Publishes a design principles guide adopted by several civic tech organizations.' },
    ],
    futureThinking: 'Miriam is interested in whether civic technology can move beyond making existing government processes digital and actually create new forms of civic participation \u2014 tools that let communities make collective decisions in ways that governments haven\u2019t imagined yet.',
    techOutcome: false,
    gradSchool: false,
  },

  // ============================================================
  // 8. THE SYSTEMS THINKER — Owen Ramirez-Nakamura
  // ============================================================
  {
    id: 'ppe-systems-thinker',
    name: 'Owen Ramirez-Nakamura',
    archetype: 'The Systems Thinker',
    emoji: '\u{1F504}',
    bio: 'Owen is the son of a Mexican-American environmental engineer and a Japanese-American city planner who grew up in the Bay Area watching his parents tackle connected problems from separate angles \u2014 his mom designing water treatment systems while his dad zoned housing that needed the water \u2014 and realized that the biggest policy failures happen at the seams between systems that nobody sees as connected.',
    passion: 'Bridging the gap between environmental science, economic models, and political feasibility, because climate policy that ignores economics gets vetoed and economic policy that ignores climate gets us all underwater.',
    coursesByTerm: [
      { termLabel: 'Fall Year 1', courses: ['ECO108', 'PHL201', 'WRT105', 'BCS110'] },
      { termLabel: 'Spring Year 1', courses: ['PSC101', 'PHL105', 'BCS240', 'AST104'] },
      { termLabel: 'Fall Year 2', courses: ['ECO207', 'PHL223', 'PPE288', 'BCS380'] },
      { termLabel: 'Spring Year 2', courses: ['PSC287', 'ECO260', 'PSC215', 'AST106'] },
      { termLabel: 'Fall Year 3', courses: ['PPE293', 'ECO265', 'ECO340', 'AST203'] },
      { termLabel: 'Spring Year 3', courses: ['PSC310', 'ECO310', 'PHL225', 'SA161'] },
      { termLabel: 'Fall Year 4', courses: ['ECO305', 'ENV101', 'ENV210', 'SA261'] },
      { termLabel: 'Spring Year 4', courses: ['PSC350', 'PHL275', 'ENV240', 'SA361'] },
    ],
    curriculumSummary: 'Owen builds the most interdisciplinary PPE path, connecting economics, environmental science, and cognitive science. His brain & cognitive science cluster \u2014 intro cognitive science (BCS 110), cognitive psychology (BCS 240), and judgment & decision-making (BCS 380) \u2014 grounds his policy thinking in how people actually process risk, uncertainty, and tradeoffs. Within PPE, he takes the economics concentration: game theory (ECO 260), behavioral economics (ECO 265), environmental economics (ECO 340), public finance (ECO 310), and labor economics (ECO 305). Environmental studies courses \u2014 environmental science (ENV 101), climate change science & policy (ENV 210), and environmental justice (ENV 240) \u2014 give him the scientific and equity context that pure economics misses. Philosophy of science (PHL 225) and philosophy of technology (PHL 275) help him think rigorously about how scientific uncertainty should inform policy decisions. Astronomy cluster (AST 104, 106, 203) satisfies his curiosity about planetary systems. Ceramics (SA 161\u2013361) gives him a making practice. His PPE seminar paper models the political economy of state-level carbon pricing, analyzing why some states adopt carbon taxes while others with identical economic conditions don\u2019t.',
    visionLeavingUndergrad: 'Owen wants to work in climate policy where environmental science, economics, and political strategy intersect \u2014 the kind of job where you need to understand carbon cycling, cost-benefit analysis, and legislative vote-counting all in the same week.',
    careerTimeline: [
      { years: '1\u20132', role: 'Research Associate, Climate Policy Initiative', description: 'Analyzes the economic impact of state climate policies, building models that estimate job creation and displacement from clean energy transitions in fossil fuel-dependent communities.' },
      { years: '2\u20133', role: 'Policy Analyst, California Air Resources Board', description: 'Works on the economic analysis team for the state\u2019s cap-and-trade program. Models how carbon price changes affect electricity costs across income levels and proposes a progressive rebate structure.' },
      { years: '3\u20134', role: 'Senior Advisor, state environmental agency', description: 'Bridges the gap between the environmental science team and the economic analysis team. Designs a framework for incorporating environmental justice screening into cost-benefit analysis of pollution regulations.' },
      { years: '4\u20135', role: 'Director of Climate Policy, environmental think tank', description: 'Leads a team publishing state-level climate policy recommendations that are both economically rigorous and politically viable. The team\u2019s model for pricing climate adaptation costs is adopted by a state legislature.' },
    ],
    futureThinking: 'Owen is considering whether to stay in policy or pursue a mid-career PhD in environmental economics, where he could formalize the systems-thinking approach he\u2019s developed through practice into models that other policy analysts can use \u2014 turning hard-won practical knowledge into transferable methodology.',
    techOutcome: false,
    gradSchool: false,
  },
];
