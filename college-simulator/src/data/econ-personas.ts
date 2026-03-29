import { Persona } from '../types';

// All 6 Economics personas use UPS course IDs (semester-based, 4 courses per term)
// The student enters with IB/AP credit for MATH170 (Calc I) and MATH160 (Statistics)

export const econPersonas: Persona[] = [
  // ============================================================
  // 1. THE COMMUNITY BUILDER — Rosa Gutiérrez-Park
  // ============================================================
  {
    id: 'econ-community-builder',
    name: 'Rosa Gutiérrez-Park',
    archetype: 'The Community Builder',
    emoji: '\u{1F33E}',
    bio: 'Rosa grew up in a small farming community in the Yakima Valley watching her parents \u2014 a Mexican-born orchard manager and a Korean-American agronomist \u2014 navigate the economics of small-scale agriculture: unpredictable crop prices, predatory lending, and a banking system that didn\u2019t speak their language.',
    passion: 'Building financial systems that serve rural and immigrant communities, because the people who grow the food shouldn\u2019t be the ones the economy forgets.',
    coursesByTerm: [
      { termLabel: 'Fall Year 1', courses: ['ECON170', 'MATH180', 'SSI101', 'BIOL101'] },
      { termLabel: 'Spring Year 1', courses: ['ECON171', 'SSI102', 'PHYS109', 'AAS200'] },
      { termLabel: 'Fall Year 2', courses: ['ECON272', 'ENGL220', 'SOC100', 'GWSS201'] },
      { termLabel: 'Spring Year 2', courses: ['ECON273', 'ECON355', 'HIST200', 'ART140'] },
      { termLabel: 'Fall Year 3', courses: ['ECON315', 'ECON340', 'POL101', 'HIST215'] },
      { termLabel: 'Spring Year 3', courses: ['ECON365', 'ECON335', 'BUS340', 'ART240'] },
      { termLabel: 'Fall Year 4', courses: ['ECON399', 'ECON380', 'MATH330', 'HIST340'] },
      { termLabel: 'Spring Year 4', courses: ['ECON375', 'POL310', 'BUS210', 'ART340'] },
    ],
    curriculumSummary: 'Rosa builds the most community-oriented economics path. After the core micro/macro sequence and Calc II, she stacks development economics (ECON 355), public finance (335), behavioral economics (315), and labor economics (340) into a toolkit for understanding how money flows \u2014 and doesn\u2019t flow \u2014 through rural communities. Her econometrics (365) training gives her the quantitative chops to evaluate lending programs rigorously. She pairs economics with sociology (SOC 100), political economy (POL 310), and Latin American history (HIST 215) for structural context, and takes the full ceramics sequence (ART 140\u2192240\u2192340) as a grounding creative practice. Her senior thesis analyzes the impact of CDFI lending on agricultural worker homeownership rates in eastern Washington.',
    visionLeavingUndergrad: 'Rosa wants to work at a community development financial institution (CDFI) or credit union serving agricultural and immigrant communities, eventually building a regional organization that combines affordable lending with financial literacy and technical assistance for small-scale farmers.',
    careerTimeline: [
      { years: '1\u20132', role: 'Community Development Loan Officer, Craft3 (Pacific Northwest CDFI)', description: 'Underwrites small business and agricultural loans in rural eastern Washington. Conducts outreach in Spanish to farming families who\u2019ve never had access to affordable credit.' },
      { years: '2\u20133', role: 'Program Manager, Rural Economic Development', description: 'Designs a bilingual financial coaching program paired with microloans for seasonal agricultural workers transitioning to year-round employment. The pilot serves 200 families in its first year.' },
      { years: '3\u20134', role: 'Director of Lending, community credit union', description: 'Leads a credit union\u2019s expansion into agricultural micro-lending, creating loan products designed around harvest cycles and seasonal income patterns.' },
      { years: '4\u20135', role: 'Executive Director, regional economic development nonprofit', description: 'Launches an organization connecting rural communities across the Pacific Northwest with capital, technical assistance, and cooperative business models. First-year partnerships with twelve farming cooperatives.' },
    ],
    futureThinking: 'Rosa is weighing whether to scale her nonprofit into a national model for rural community finance or pursue a mid-career master\u2019s in public policy to build the regulatory expertise needed to influence federal agricultural lending reform.',
    techOutcome: false,
    gradSchool: false,
  },

  // ============================================================
  // 2. THE DATA STORYTELLER — Marcus Obi-Chen
  // ============================================================
  {
    id: 'econ-data-storyteller',
    name: 'Marcus Obi-Chen',
    archetype: 'The Data Storyteller',
    emoji: '\u{1F4CA}',
    bio: 'Marcus is a newspaper kid from a Chicago suburb who ran the school paper and noticed that economic statistics in news stories were either too dry for readers or too simplified for accuracy \u2014 the truth always fell through the gap between the numbers and the narrative.',
    passion: 'Making economic data legible and honest for the public, because democracy requires citizens who can read a jobs report and know when they\u2019re being lied to.',
    coursesByTerm: [
      { termLabel: 'Fall Year 1', courses: ['ECON170', 'MATH180', 'SSI101', 'PHYS109'] },
      { termLabel: 'Spring Year 1', courses: ['ECON171', 'SSI102', 'BIOL101', 'AAS200'] },
      { termLabel: 'Fall Year 2', courses: ['ECON272', 'MATH260', 'ENGL220', 'HISP200'] },
      { termLabel: 'Spring Year 2', courses: ['ECON273', 'ENGL240', 'ART210', 'ART220'] },
      { termLabel: 'Fall Year 3', courses: ['ECON365', 'ECON315', 'PSYCH101', 'CSCI161'] },
      { termLabel: 'Spring Year 3', courses: ['ECON310', 'MATH330', 'CSCI301', 'PHIL101'] },
      { termLabel: 'Fall Year 4', courses: ['ECON399', 'ECON370', 'CSCI341', 'POL101'] },
      { termLabel: 'Spring Year 4', courses: ['ECON345', 'MATH350', 'ENGL320', 'BUS320'] },
    ],
    curriculumSummary: 'Marcus builds the most data-and-communication-intensive path. He pairs econometrics (ECON 365) and applied statistics (MATH 330, MATH 350) with data science (CSCI 301), web development (CSCI 341), and graphic design (ART 210) \u2014 the full production pipeline for turning economic analysis into visual stories. Creative writing (ENGL 240) trains narrative craft. Linear algebra (MATH 260) gives mathematical depth. His econ electives \u2014 game theory (310), behavioral econ (315), financial econ (345), and economic history (370) \u2014 give him range across economic subfields so he can cover any beat. His senior thesis is a data visualization project: an interactive web piece showing how local property tax structures create school funding inequality across Pierce County.',
    visionLeavingUndergrad: 'Marcus wants to work as an economics journalist who can both analyze data and tell stories that make economic forces visible and personal for non-expert readers \u2014 not dumbed down, but made vivid.',
    careerTimeline: [
      { years: '1\u20132', role: 'Economics Reporter, The Tacoma News Tribune', description: 'Covers local economic development, housing costs, and labor markets. Starts a weekly data column visualizing Pierce County economic trends.' },
      { years: '2\u20133', role: 'Data Journalist, The Markup', description: 'Investigates algorithmic pricing in housing and insurance markets. Co-authors an investigation showing how dynamic pricing algorithms disproportionately raise insurance premiums in communities of color.' },
      { years: '3\u20134', role: 'Senior Data Reporter, ProPublica', description: 'Leads a team building interactive tools that let readers explore economic data for their own communities. A project on eviction economics is a Pulitzer finalist.' },
      { years: '4\u20135', role: 'Founder, data journalism fellowship', description: 'Launches a fellowship program placing underrepresented journalists in economics newsrooms for one-year residencies with data training and mentorship. First cohort of eight fellows placed at five publications.' },
    ],
    futureThinking: 'Marcus is considering writing a book on the gap between economic reality and economic storytelling \u2014 how newsroom conventions systematically distort economic reporting \u2014 and eventually teaching a course on data journalism and economic literacy.',
    techOutcome: false,
    gradSchool: false,
  },

  // ============================================================
  // 3. THE ECOSYSTEM ECONOMIST — Linnea Johansson
  // ============================================================
  {
    id: 'econ-ecosystem',
    name: 'Linnea Johansson',
    archetype: 'The Ecosystem Economist',
    emoji: '\u{1F41F}',
    bio: 'Linnea grew up on San Juan Island watching salmon populations decline while waterfront development boomed. Her parents \u2014 a marine biologist and a fishing boat captain \u2014 talked about the tension between economic growth and ecological health every night at dinner, and she decided someone needed to speak both languages.',
    passion: 'Designing economic systems that value ecosystems honestly, because pricing nature at zero is the most expensive mistake markets make.',
    coursesByTerm: [
      { termLabel: 'Fall Year 1', courses: ['ECON170', 'MATH180', 'SSI101', 'BIOL101'] },
      { termLabel: 'Spring Year 1', courses: ['ECON171', 'SSI102', 'CHEM110', 'GEOL101'] },
      { termLabel: 'Fall Year 2', courses: ['ECON272', 'MATH260', 'ENGL220', 'AAS200'] },
      { termLabel: 'Spring Year 2', courses: ['ECON273', 'ECON320', 'PHIL260', 'ART140'] },
      { termLabel: 'Fall Year 3', courses: ['ECON365', 'ECON310', 'PHIL280', 'GWSS201'] },
      { termLabel: 'Spring Year 3', courses: ['ECON315', 'MATH310', 'GEOL310', 'PHIL101'] },
      { termLabel: 'Fall Year 4', courses: ['ECON399', 'ECON335', 'MATH320', 'POL330'] },
      { termLabel: 'Spring Year 4', courses: ['ECON355', 'MATH350', 'HIST360', 'PSYCH101'] },
    ],
    curriculumSummary: 'Linnea builds the strongest natural science foundation among the economics personas. She pairs the full econ sequence with biology (BIOL 101), chemistry (CHEM 110), geology (GEOL 101), and planetary geology (GEOL 310) \u2014 unusual for an econ major but essential for someone who wants to value ecosystems credibly. Environmental economics (ECON 320), game theory (310), and environmental ethics (PHIL 280) form her intellectual core. Deep quantitative preparation \u2014 linear algebra (MATH 260), probability (310), mathematical statistics (320), and applied regression (MATH 350) \u2014 positions her for PhD-level empirical work. Environmental policy (POL 330) and history of science (HIST 360) give her the interdisciplinary range to think about how scientific knowledge becomes policy. Her senior thesis estimates the economic value of salmon habitat in the San Juan Islands using hedonic pricing and contingent valuation methods.',
    visionLeavingUndergrad: 'Linnea plans to pursue a PhD in environmental and resource economics, studying how market mechanisms can be designed to protect ecosystems without reducing nature to a single dollar figure \u2014 she wants to make economic models that take ecological complexity seriously.',
    careerTimeline: [
      { years: '1\u20133', role: 'PhD Student, UC Berkeley (Agricultural & Resource Economics)', description: 'Researches the economics of ecosystem services valuation in Pacific Northwest watersheds. Develops a model that prices salmon habitat restoration based on downstream fishery productivity, water quality benefits, and recreational value. Supported by an EPA STAR Fellowship.' },
      { years: '3', role: 'Published Researcher', description: 'Publishes a paper showing that traditional cost-benefit analysis systematically undervalues old-growth forest ecosystems because it discounts future ecological benefits at market interest rates \u2014 proposes an alternative framework and it gets cited in a state environmental impact review.' },
      { years: '4\u20135', role: 'Research Fellow, Resources for the Future', description: 'Works on designing cap-and-trade mechanisms for salmon habitat credits in the Pacific Northwest. Tests whether market-based instruments can achieve conservation outcomes that regulation alone has failed to deliver.' },
    ],
    futureThinking: 'Linnea envisions becoming a professor who runs a research group at the intersection of economics and ecology \u2014 training economists who can read an ecological survey and ecologists who can design an incentive structure \u2014 and publishing open-source tools for ecosystem services valuation that state agencies actually use.',
    techOutcome: false,
    gradSchool: true,
    gradSchoolType: 'PhD',
  },

  // ============================================================
  // 4. THE MICROFINANCE RESEARCHER — Amir Okoye-Sharma
  // ============================================================
  {
    id: 'econ-microfinance',
    name: 'Amir Okoye-Sharma',
    archetype: 'The Microfinance Researcher',
    emoji: '\u{1F30D}',
    bio: 'Amir is the son of a Nigerian immigrant doctor and an Indian immigrant engineer who spent a summer before college in rural southeastern Nigeria visiting his grandmother and seeing how microfinance programs actually worked on the ground \u2014 some transformative, some extractive, most somewhere in between, and nobody seemed to be measuring which was which.',
    passion: 'Figuring out which economic development interventions actually help poor communities and which just help the organizations that run them, because good intentions without rigorous evidence are not enough.',
    coursesByTerm: [
      { termLabel: 'Fall Year 1', courses: ['ECON170', 'MATH180', 'SSI101', 'PHYS109'] },
      { termLabel: 'Spring Year 1', courses: ['ECON171', 'SSI102', 'BIOL101', 'AAS200'] },
      { termLabel: 'Fall Year 2', courses: ['ECON272', 'MATH260', 'ENGL220', 'AFAM200'] },
      { termLabel: 'Spring Year 2', courses: ['ECON273', 'ECON355', 'HIST200', 'ART140'] },
      { termLabel: 'Fall Year 3', courses: ['ECON365', 'ECON315', 'MATH310', 'POL101'] },
      { termLabel: 'Spring Year 3', courses: ['ECON310', 'MATH320', 'POL360', 'PSYCH101'] },
      { termLabel: 'Fall Year 4', courses: ['ECON399', 'ECON380', 'MATH330', 'PHIL201'] },
      { termLabel: 'Spring Year 4', courses: ['ECON325', 'ECON370', 'MATH350', 'HIST220'] },
    ],
    curriculumSummary: 'Amir builds the most quantitatively rigorous path among the non-Theo personas. Beyond the core econ sequence, he stacks linear algebra (MATH 260), probability (MATH 310), mathematical statistics (MATH 320), applied statistics (MATH 330), and applied regression (MATH 350) \u2014 the full mathematical toolkit for designing and analyzing field experiments. Development economics (ECON 355) and behavioral economics (315) provide the theoretical foundation, while econometrics (365) and game theory (310) complete his analytical arsenal. African American Studies (AFAM 200), East Asian history (HIST 220), and politics of developing nations (POL 360) give him the cultural and political context that purely quantitative training misses. His senior thesis is a power analysis and pre-registration plan for a randomized controlled trial of mobile savings products in Lagos.',
    visionLeavingUndergrad: 'Amir plans to pursue a PhD in development economics, designing and running field experiments that test whether financial inclusion programs actually improve welfare for the poorest households \u2014 with particular focus on how program design interacts with local social structures.',
    careerTimeline: [
      { years: '1\u20133', role: 'PhD Student, MIT (Economics)', description: 'Works with the Abdul Latif Jameel Poverty Action Lab (J-PAL). Designs and launches a randomized controlled trial of mobile banking adoption among market women in southeastern Nigeria. The study tracks 3,000 participants across 18 months. Supported by a GRO grant from the World Bank.' },
      { years: '3', role: 'Published Researcher', description: 'Publishes first major paper showing that mobile savings products increase women\u2019s financial autonomy only when accompanied by financial literacy training \u2014 the technology alone doesn\u2019t change behavior if people don\u2019t trust the system.' },
      { years: '4\u20135', role: 'Research Fellow, J-PAL Africa (Cape Town)', description: 'Scales the Nigerian study to three additional West African countries. Begins a second research stream on how informal savings groups (known as esusu or ajo) interact with formal financial products \u2014 asking whether banks can learn from community structures rather than replacing them.' },
    ],
    futureThinking: 'Amir sees himself becoming a professor who runs a research lab embedded in the communities it studies \u2014 not flying in to run experiments and flying out, but building long-term partnerships with local organizations. He wants to publish academic papers, yes, but also policy briefs that microfinance practitioners actually read.',
    techOutcome: false,
    gradSchool: true,
    gradSchoolType: 'PhD',
  },

  // ============================================================
  // 5. THE EDUCATION ECONOMIST — Jade Whitehawk
  // ============================================================
  {
    id: 'econ-education',
    name: 'Jade Whitehawk',
    archetype: 'The Education Economist',
    emoji: '\u{1F4DA}',
    bio: 'Jade grew up on the Tulalip reservation north of Seattle and attended schools where per-pupil spending was a fraction of the neighboring Mukilteo district\u2019s budget. She watched talented teachers leave every year because the funding wasn\u2019t there, and the community knew the problem wasn\u2019t a lack of caring but a lack of resources that nobody with decision-making power seemed motivated to fix.',
    passion: 'Using rigorous economic evidence to close education funding gaps in Indigenous communities \u2014 not as an outsider studying a problem, but as a community member building the case for what her people have always known: that investment in Native education pays returns that no cost-benefit analysis can fully capture.',
    coursesByTerm: [
      { termLabel: 'Fall Year 1', courses: ['ECON170', 'MATH180', 'SSI101', 'PHYS109'] },
      { termLabel: 'Spring Year 1', courses: ['ECON171', 'SSI102', 'BIOL101', 'AAS200'] },
      { termLabel: 'Fall Year 2', courses: ['ECON272', 'MATH260', 'ENGL220', 'AAS300'] },
      { termLabel: 'Spring Year 2', courses: ['ECON273', 'ECON350', 'SOC100', 'PSYCH101'] },
      { termLabel: 'Fall Year 3', courses: ['ECON365', 'ECON340', 'MATH310', 'POL101'] },
      { termLabel: 'Spring Year 3', courses: ['ECON315', 'MATH320', 'PSYCH210', 'ART140'] },
      { termLabel: 'Fall Year 4', courses: ['ECON399', 'ECON380', 'MATH330', 'PHIL201'] },
      { termLabel: 'Spring Year 4', courses: ['ECON335', 'MATH350', 'POL320', 'HIST240'] },
    ],
    curriculumSummary: 'Jade builds the education-and-policy path. Economics of education (ECON 350) is the course that crystallizes her focus, giving her tools to analyze the very funding disparities she experienced. Labor economics (340) connects education to workforce outcomes. Behavioral economics (315) helps her understand why policy interventions sometimes fail to change behavior. Her quantitative preparation is deep: linear algebra (MATH 260), probability (310), mathematical statistics (320), applied statistics (330), and applied regression (350). Race & Immigration in the Pacific Northwest (AAS 300) centers her research in its geographic and cultural context. Research methods in psychology (PSYCH 210) adds qualitative and experimental design skills. Her senior thesis uses a regression discontinuity design to estimate the impact of Washington state\u2019s school funding reform on educational outcomes in tribal schools.',
    visionLeavingUndergrad: 'Jade plans to pursue a PhD in education economics, producing research that informs federal Indian education policy \u2014 research designed in consultation with tribal education leaders, not just about Indigenous communities but for them.',
    careerTimeline: [
      { years: '1\u20133', role: 'PhD Student, Harvard (Education Economics)', description: 'Studies the causal effects of equitable funding formulas on educational outcomes in Bureau of Indian Education schools. Develops a novel dataset linking tribal school funding to long-run outcomes. Supported by an Institute of Education Sciences fellowship.' },
      { years: '3', role: 'Published Researcher', description: 'Publishes a paper demonstrating that states that weight tribal school funding formulas for cultural programming see higher graduation rates and lower out-migration \u2014 the first causal evidence that culturally responsive curricula have measurable economic returns.' },
      { years: '4\u20135', role: 'Postdoctoral Researcher, National Bureau of Economic Research', description: 'Extends her research to study how tribal language immersion programs affect cognitive development and educational attainment, partnering with tribal education departments in Washington, Montana, and Arizona.' },
    ],
    futureThinking: 'Jade envisions becoming a professor at a university near tribal communities \u2014 not at a coastal research school where the work would be disconnected from the people it\u2019s about. She wants to build a research center that trains tribal members in education policy analysis, so the expertise stays in the community.',
    techOutcome: false,
    gradSchool: true,
    gradSchoolType: 'PhD',
  },

  // ============================================================
  // 6. THE CHOICE ARCHITECT — Theo Papadopoulos
  // ============================================================
  {
    id: 'econ-choice-architect',
    name: 'Theo Papadopoulos',
    archetype: 'The Choice Architect',
    emoji: '\u{265F}\u{FE0F}',
    bio: 'Theo is a chess player and amateur poker theorist from suburban Seattle who noticed that his opponents made predictable irrational decisions under time pressure \u2014 and wondered whether the same cognitive shortcuts that lose chess games also cause people to choose the wrong health insurance plan, save too little for retirement, and agree to loan terms they don\u2019t understand.',
    passion: 'Understanding how the design of choice environments shapes human decisions, because if a Medicare plan comparison website systematically leads people to pick against their own interests, that\u2019s not a failure of individual rationality \u2014 it\u2019s a failure of design.',
    coursesByTerm: [
      { termLabel: 'Fall Year 1', courses: ['ECON170', 'MATH180', 'SSI101', 'PHYS109'] },
      { termLabel: 'Spring Year 1', courses: ['ECON171', 'SSI102', 'PSYCH101', 'AAS200'] },
      { termLabel: 'Fall Year 2', courses: ['ECON272', 'MATH260', 'PHIL101', 'BIOL101'] },
      { termLabel: 'Spring Year 2', courses: ['ECON273', 'ECON310', 'PHIL210', 'ART140'] },
      { termLabel: 'Fall Year 3', courses: ['ECON315', 'ECON365', 'PSYCH370', 'GWSS201'] },
      { termLabel: 'Spring Year 3', courses: ['ECON390', 'MATH310', 'PSYCH301', 'ENGL220'] },
      { termLabel: 'Fall Year 4', courses: ['ECON399', 'ECON345', 'MATH320', 'PHIL340'] },
      { termLabel: 'Spring Year 4', courses: ['MATH360', 'PSYCH320', 'PHIL220', 'HIST360'] },
    ],
    curriculumSummary: 'Theo builds the most interdisciplinary path, weaving together economics, psychology, philosophy, and mathematics into a unified study of human decision-making. His econ electives \u2014 game theory (310), behavioral economics (315), law & economics (390), and financial economics (345) \u2014 cover strategic, psychological, legal, and market dimensions of choice. The psychology sequence \u2014 intro (101), decision-making (370), cognitive (301), and social (320) \u2014 grounds his economic models in how minds actually work. Philosophy of mind (PHIL 220) and advanced logic (PHIL 340) push him to think rigorously about rationality, consciousness, and formal reasoning. The math stack \u2014 linear algebra (260), probability (310), mathematical statistics (320), and Bayesian statistics (360) \u2014 gives him the quantitative tools for experimental design and causal inference. His senior thesis is a lab experiment testing whether restructuring the information architecture of a simulated health insurance marketplace reduces choice overload and improves plan-to-need matching.',
    visionLeavingUndergrad: 'Theo plans to pursue a PhD in behavioral economics, studying how the design of information environments \u2014 insurance comparison tools, retirement savings interfaces, medical treatment consent forms \u2014 shapes decisions in ways that standard economic models fail to predict.',
    careerTimeline: [
      { years: '1\u20133', role: 'PhD Student, University of Chicago (Economics)', description: 'Studies choice architecture in healthcare markets. Designs and runs a large-scale field experiment with CMS testing whether redesigning the Medicare Plan Finder interface improves plan selection. Supported by an NSF Graduate Research Fellowship.' },
      { years: '3', role: 'Published Researcher', description: 'Publishes a paper showing that reordering Medicare plan information from "lowest premium" to "best match for your prescription drugs" reduces out-of-pocket spending by 12% for participants who switch plans \u2014 the design change costs nothing but the welfare gains are substantial.' },
      { years: '4\u20135', role: 'Research Fellow, Behavioral Insights Team (North America)', description: 'Runs randomized experiments testing choice architecture interventions in government benefit programs across three states. Tests whether simplifying Medicaid enrollment forms increases take-up among eligible populations.' },
    ],
    futureThinking: 'Theo envisions becoming a professor who bridges the gap between behavioral economics research and public policy implementation \u2014 someone who doesn\u2019t just publish papers about how choice environments could be improved but actually works with government agencies to redesign them. He\u2019s also interested in the ethics of nudging: when does helping people choose better become manipulating them?',
    techOutcome: false,
    gradSchool: true,
    gradSchoolType: 'PhD',
  },
];
