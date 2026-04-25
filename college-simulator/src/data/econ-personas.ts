import { Persona } from '../types';

// Personas 1–6 use UPS course IDs (semester-based, 4 courses per term)
// Personas 7–8 use UCSD and UCLA course IDs (quarter-based, 4 courses per term, 12 terms)
// UPS: student enters with IB/AP credit for MATH180 (Calc I) and MATH160 (Statistics)
// UCSD: student enters with IB Math HL → MATH10A+10B, AP Stats → MATH11
// UCLA: student enters with IB Math HL → MATH31A+31B, AP Stats → STATS10

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
      { termLabel: 'Fall Year 1', courses: ['ECON101', 'MATH180', 'SSI101', 'BIOL101'] },
      { termLabel: 'Spring Year 1', courses: ['ECON102', 'SSI102', 'PHYS109', 'AAS200'] },
      { termLabel: 'Fall Year 2', courses: ['ECON301', 'ENGL220', 'SOC100', 'GWSS201'] },
      { termLabel: 'Spring Year 2', courses: ['ECON302', 'ECON268', 'HIST200', 'ART140'] },
      { termLabel: 'Fall Year 3', courses: ['ECON291', 'ECON335', 'POL101', 'HIST215'] },
      { termLabel: 'Spring Year 3', courses: ['ECON284', 'ECON261', 'BUS340', 'ART240'] },
      { termLabel: 'Fall Year 4', courses: ['ECON411', 'ECON275', 'MATH330', 'HIST340'] },
      { termLabel: 'Spring Year 4', courses: ['ECON241', 'POL310', 'BUS210', 'ART340'] },
    ],
    curriculumSummary: 'Rosa builds the most community-oriented economics path. After the core micro/macro sequence and Calc II, she stacks development economics (ECON 268), market effects of public policy (261), behavioral economics (291), and modern labor and gender economics (335) into a toolkit for understanding how money flows \u2014 and doesn\u2019t flow \u2014 through rural communities. Her econometrics (284) training gives her the quantitative chops to evaluate lending programs rigorously. She pairs economics with sociology (SOC 100), political economy (POL 310), and Latin American history (HIST 215) for structural context, and takes the full ceramics sequence (ART 140\u2192240\u2192340) as a grounding creative practice. Her senior thesis analyzes the impact of CDFI lending on agricultural worker homeownership rates in eastern Washington.',
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
      { termLabel: 'Fall Year 1', courses: ['ECON101', 'MATH180', 'SSI101', 'PHYS109'] },
      { termLabel: 'Spring Year 1', courses: ['ECON102', 'SSI102', 'BIOL101', 'AAS200'] },
      { termLabel: 'Fall Year 2', courses: ['ECON301', 'MATH260', 'ENGL220', 'HISP200'] },
      { termLabel: 'Spring Year 2', courses: ['ECON302', 'ENGL240', 'ART210', 'ART220'] },
      { termLabel: 'Fall Year 3', courses: ['ECON284', 'ECON291', 'PSYCH101', 'CSCI161'] },
      { termLabel: 'Spring Year 3', courses: ['ECON380', 'MATH330', 'CSCI301', 'PHIL101'] },
      { termLabel: 'Fall Year 4', courses: ['ECON411', 'ECON218', 'CSCI341', 'POL101'] },
      { termLabel: 'Spring Year 4', courses: ['ECON351', 'MATH350', 'ENGL320', 'BUS320'] },
    ],
    curriculumSummary: 'Marcus builds the most data-and-communication-intensive path. He pairs econometrics (ECON 284) and applied statistics (MATH 330, MATH 350) with data science (CSCI 301), web development (CSCI 341), and graphic design (ART 210) \u2014 the full production pipeline for turning economic analysis into visual stories. Creative writing (ENGL 240) trains narrative craft. Linear algebra (MATH 260) gives mathematical depth. His econ electives \u2014 game theory (380), behavioral econ (291), industrial organization (351), and economic history (218) \u2014 give him range across economic subfields so he can cover any beat. His senior thesis is a data visualization project: an interactive web piece showing how local property tax structures create school funding inequality across Pierce County.',
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
      { termLabel: 'Fall Year 1', courses: ['ECON101', 'MATH180', 'SSI101', 'BIOL101'] },
      { termLabel: 'Spring Year 1', courses: ['ECON102', 'SSI102', 'CHEM110', 'GEOL101'] },
      { termLabel: 'Fall Year 2', courses: ['ECON301', 'MATH260', 'ENGL220', 'AAS200'] },
      { termLabel: 'Spring Year 2', courses: ['ECON302', 'ECON327', 'PHIL260', 'ART140'] },
      { termLabel: 'Fall Year 3', courses: ['ECON284', 'ECON380', 'PHIL280', 'GWSS201'] },
      { termLabel: 'Spring Year 3', courses: ['ECON291', 'MATH310', 'GEOL310', 'PHIL101'] },
      { termLabel: 'Fall Year 4', courses: ['ECON411', 'ECON261', 'MATH320', 'POL330'] },
      { termLabel: 'Spring Year 4', courses: ['ECON268', 'MATH350', 'HIST360', 'PSYCH101'] },
    ],
    curriculumSummary: 'Linnea builds the strongest natural science foundation among the economics personas. She pairs the full econ sequence with biology (BIOL 101), chemistry (CHEM 110), geology (GEOL 101), and planetary geology (GEOL 310) \u2014 unusual for an econ major but essential for someone who wants to value ecosystems credibly. Climate change economics (ECON 327), game theory (380), and environmental ethics (PHIL 280) form her intellectual core. Deep quantitative preparation \u2014 linear algebra (MATH 260), probability (310), mathematical statistics (320), and applied regression (MATH 350) \u2014 positions her for PhD-level empirical work. Environmental policy (POL 330) and history of science (HIST 360) give her the interdisciplinary range to think about how scientific knowledge becomes policy. Her senior thesis estimates the economic value of salmon habitat in the San Juan Islands using hedonic pricing and contingent valuation methods.',
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
      { termLabel: 'Fall Year 1', courses: ['ECON101', 'MATH180', 'SSI101', 'PHYS109'] },
      { termLabel: 'Spring Year 1', courses: ['ECON102', 'SSI102', 'BIOL101', 'AAS200'] },
      { termLabel: 'Fall Year 2', courses: ['ECON301', 'MATH260', 'ENGL220', 'AFAM200'] },
      { termLabel: 'Spring Year 2', courses: ['ECON302', 'ECON268', 'HIST200', 'ART140'] },
      { termLabel: 'Fall Year 3', courses: ['ECON284', 'ECON291', 'MATH310', 'POL101'] },
      { termLabel: 'Spring Year 3', courses: ['ECON380', 'MATH320', 'POL360', 'PSYCH101'] },
      { termLabel: 'Fall Year 4', courses: ['ECON411', 'ECON275', 'MATH330', 'PHIL201'] },
      { termLabel: 'Spring Year 4', courses: ['ECON270', 'ECON218', 'MATH350', 'HIST220'] },
    ],
    curriculumSummary: 'Amir builds the most quantitatively rigorous path among the non-Theo personas. Beyond the core econ sequence, he stacks linear algebra (MATH 260), probability (MATH 310), mathematical statistics (MATH 320), applied statistics (MATH 330), and applied regression (MATH 350) \u2014 the full mathematical toolkit for designing and analyzing field experiments. Development economics (ECON 268) and behavioral economics (291) provide the theoretical foundation, while econometrics (284) and game theory (380) complete his analytical arsenal. African American Studies (AFAM 200), East Asian history (HIST 220), and politics of developing nations (POL 360) give him the cultural and political context that purely quantitative training misses. His senior thesis is a power analysis and pre-registration plan for a randomized controlled trial of mobile savings products in Lagos.',
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
      { termLabel: 'Fall Year 1', courses: ['ECON101', 'MATH180', 'SSI101', 'PHYS109'] },
      { termLabel: 'Spring Year 1', courses: ['ECON102', 'SSI102', 'BIOL101', 'AAS200'] },
      { termLabel: 'Fall Year 2', courses: ['ECON301', 'MATH260', 'ENGL220', 'AAS300'] },
      { termLabel: 'Spring Year 2', courses: ['ECON302', 'ECON350', 'SOC100', 'PSYCH101'] },
      { termLabel: 'Fall Year 3', courses: ['ECON284', 'ECON335', 'MATH310', 'POL101'] },
      { termLabel: 'Spring Year 3', courses: ['ECON291', 'MATH320', 'PSYCH210', 'ART140'] },
      { termLabel: 'Fall Year 4', courses: ['ECON411', 'ECON275', 'MATH330', 'PHIL201'] },
      { termLabel: 'Spring Year 4', courses: ['ECON261', 'MATH350', 'POL320', 'HIST240'] },
    ],
    curriculumSummary: 'Jade builds the education-and-policy path. Economics of education (ECON 350) is the course that crystallizes her focus, giving her tools to analyze the very funding disparities she experienced. Modern labor and gender economics (335) connects education to workforce outcomes. Behavioral economics (291) helps her understand why policy interventions sometimes fail to change behavior. Her quantitative preparation is deep: linear algebra (MATH 260), probability (310), mathematical statistics (320), applied statistics (330), and applied regression (350). Race & Immigration in the Pacific Northwest (AAS 300) centers her research in its geographic and cultural context. Research methods in psychology (PSYCH 210) adds qualitative and experimental design skills. Her senior thesis uses a regression discontinuity design to estimate the impact of Washington state\u2019s school funding reform on educational outcomes in tribal schools.',
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
      { termLabel: 'Fall Year 1', courses: ['ECON101', 'MATH180', 'SSI101', 'PHYS109'] },
      { termLabel: 'Spring Year 1', courses: ['ECON102', 'SSI102', 'PSYCH101', 'AAS200'] },
      { termLabel: 'Fall Year 2', courses: ['ECON301', 'MATH260', 'PHIL101', 'BIOL101'] },
      { termLabel: 'Spring Year 2', courses: ['ECON302', 'ECON380', 'PHIL210', 'ART140'] },
      { termLabel: 'Fall Year 3', courses: ['ECON291', 'ECON284', 'PSYCH370', 'GWSS201'] },
      { termLabel: 'Spring Year 3', courses: ['ECON330', 'MATH310', 'PSYCH301', 'ENGL220'] },
      { termLabel: 'Fall Year 4', courses: ['ECON411', 'ECON351', 'MATH320', 'PHIL340'] },
      { termLabel: 'Spring Year 4', courses: ['MATH360', 'PSYCH320', 'PHIL220', 'HIST360'] },
    ],
    curriculumSummary: 'Theo builds the most interdisciplinary path, weaving together economics, psychology, philosophy, and mathematics into a unified study of human decision-making. His econ electives \u2014 game theory (380), behavioral economics (291), law and economics (330), and industrial organization (351) \u2014 cover strategic, psychological, legal, and market dimensions of choice. The psychology sequence \u2014 intro (101), decision-making (370), cognitive (301), and social (320) \u2014 grounds his economic models in how minds actually work. Philosophy of mind (PHIL 220) and advanced logic (PHIL 340) push him to think rigorously about rationality, consciousness, and formal reasoning. The math stack \u2014 linear algebra (260), probability (310), mathematical statistics (320), and Bayesian statistics (360) \u2014 gives him the quantitative tools for experimental design and causal inference. His senior thesis is a lab experiment testing whether restructuring the information architecture of a simulated health insurance marketplace reduces choice overload and improves plan-to-need matching.',
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

  // ============================================================
  // 7. THE DECISION SCIENTIST — Priya Navarro-Chatterjee (UCSD)
  // Quarter system: 12 terms × 4 courses. Marshall College DOC sequence.
  // ============================================================
  {
    id: 'econ-decision-scientist',
    name: 'Priya Navarro-Chatterjee',
    archetype: 'The Decision Scientist',
    emoji: '\u{1F9E0}',
    bio: 'Priya grew up in San Diego watching her mother \u2014 a psychiatrist \u2014 and her father \u2014 a financial advisor \u2014 have the same argument in different languages. Her mother saw bad financial decisions as symptoms of cognitive limitations: anxiety, loss aversion, present bias. Her father saw them as rational responses to bad options. By high school Priya realized both were right, but neither field had the math to model the interaction.',
    passion: 'Building computational models of how people actually make decisions under uncertainty, because the gap between economic theory and cognitive reality is where the most important questions live.',
    coursesByTerm: [
      { termLabel: 'Fall Year 1', courses: ['DOC1', 'MATH10C', 'ECON1', 'COGS1'] },
      { termLabel: 'Winter Year 1', courses: ['DOC2', 'ECON3', 'PHYS1A', 'PSYC1'] },
      { termLabel: 'Spring Year 1', courses: ['DOC3', 'ECON100A', 'PHIL15', 'BILD1'] },
      { termLabel: 'Fall Year 2', courses: ['ECON100B', 'ECON120A', 'MATH180A', 'HILD7A'] },
      { termLabel: 'Winter Year 2', courses: ['ECON100C', 'ECON120B', 'MATH180B', 'VIS1'] },
      { termLabel: 'Spring Year 2', courses: ['ECON120C', 'ECON110A', 'COGS108', 'CHEM6A'] },
      { termLabel: 'Fall Year 3', courses: ['ECON109', 'MATH180C', 'COGS101B', 'PHIL10'] },
      { termLabel: 'Winter Year 3', courses: ['ECON171', 'MATH109', 'COGS109', 'PHIL170'] },
      { termLabel: 'Spring Year 3', courses: ['ECON113', 'ECON121', 'COGS101A', 'LTCS120'] },
      { termLabel: 'Fall Year 4', courses: ['ECON122', 'MATH181A', 'COGS107A', 'ANTH1'] },
      { termLabel: 'Winter Year 4', courses: ['MATH181B', 'ECON173A', 'COGS118A', 'PHIL28'] },
      { termLabel: 'Spring Year 4', courses: ['MATH185', 'ECON175', 'COGS143', 'ETHN20'] },
    ],
    curriculumSummary: 'Priya builds the most mathematically intensive path in the economics cohort, and the only one that systematically bridges economics and cognitive science. After the Marshall College DOC writing sequence and Calc III, she runs two parallel quantitative tracks: the full UCSD probability and mathematical statistics sequence (MATH 180A\u2192180B\u2192180C\u2192181A\u2192181B) plus computational statistics (185), and the complete econometrics pipeline including applied econometrics and data analysis (ECON 121\u2192122). Her economics electives \u2014 long-run macroeconomics (110A), game theory (109), decisions under uncertainty (171), and mathematical economics (113) \u2014 all sit at the intersection of formal theory and psychological reality. The cognitive science stack \u2014 data science (COGS 108), computational modeling (109), learning and memory (101B), sensation and perception (101A), neuroanatomy (107A), machine learning (118A), and language and brain (143) \u2014 gives her the tools to study decision-making as a neural process, not just an economic abstraction. Philosophy of mind (PHIL 170) and formal logic (PHIL 15) sharpen her thinking about what it means to model a mind mathematically.',
    visionLeavingUndergrad: 'Priya wants to build computational models that capture how real neural circuits learn to make decisions under uncertainty \u2014 not the utility-maximizing agents of textbook economics, but the noisy, adaptive, pattern-matching systems that brains actually are. She plans to pursue a PhD in computational neuroscience or neuroeconomics.',
    careerTimeline: [
      { years: '1\u20132', role: 'PhD Student, Caltech (Computation & Neural Systems)', description: 'Joins a lab studying decision-making under uncertainty using computational modeling and neuroimaging. Develops a reinforcement learning model that predicts when people will deviate from expected utility theory based on the structure of the learning environment. Supported by an NSF Graduate Research Fellowship.' },
      { years: '2\u20133', role: 'Published Researcher', description: 'Publishes a paper in Nature Human Behaviour showing that prospect theory\u2019s loss aversion parameter isn\u2019t a stable trait but varies systematically with the volatility of recent reward history \u2014 people aren\u2019t inherently loss-averse, they learn to be in uncertain environments.' },
      { years: '3\u20134', role: 'Visiting Researcher, Riken Center for Brain Science (Tokyo)', description: 'Spends a year at Riken collaborating on cross-cultural studies of risk preference, testing whether her computational models of learned loss aversion replicate across different economic and cultural contexts.' },
      { years: '4\u20135', role: 'Postdoctoral Scholar, Stanford Decision Neuroscience Lab', description: 'Extends her models to clinical populations, testing whether the same computational framework that predicts financial risk behavior can identify early markers of anxiety disorders \u2014 bridging her parents\u2019 professions in a way neither anticipated.' },
    ],
    futureThinking: 'Priya is positioning for faculty jobs at the intersection of economics, cognitive science, and neuroscience \u2014 departments that barely existed a decade ago but are now where the most interesting questions about human behavior live. She wants to build a lab that trains students to be fluent in all three languages.',
    techOutcome: false,
    gradSchool: true,
    gradSchoolType: 'PhD',
  },

  // ============================================================
  // 8. THE BEHAVIORAL STRATEGIST — Jalen Park-Okonkwo (UCLA)
  // Quarter system: 12 terms × 4 courses.
  // ============================================================
  {
    id: 'econ-behavioral-strategist',
    name: 'Jalen Park-Okonkwo',
    archetype: 'The Behavioral Strategist',
    emoji: '\u{1F3AF}',
    bio: 'Jalen grew up in Los Angeles watching his Korean grandmother clip coupons with mathematical precision while his Nigerian father \u2014 an engineering PhD \u2014 made consistently terrible investment decisions. The contrast was so stark it became a family joke, but Jalen couldn\u2019t let it go: why do smart people make predictable mistakes with money, and can you design systems that help without patronizing them?',
    passion: 'Designing choice environments that help people make decisions aligned with their own goals, because the gap between what people want and what they choose is usually a design problem, not a character flaw.',
    coursesByTerm: [
      { termLabel: 'Fall Year 1', courses: ['ECON1', 'ECON11', 'ENGCOMP3', 'ASTRO3'] },
      { termLabel: 'Winter Year 1', courses: ['ECON2', 'ECON41', 'PHILOS1', 'PSYCH10'] },
      { termLabel: 'Spring Year 1', courses: ['ECON101', 'PHILOS7', 'ASAMST1', 'LS7A'] },
      { termLabel: 'Fall Year 2', courses: ['ECON102', 'ECON103', 'STATS100A', 'PSYCH120A'] },
      { termLabel: 'Winter Year 2', courses: ['ECON104', 'ECON106V', 'STATS100B', 'ENGL1A'] },
      { termLabel: 'Spring Year 2', courses: ['ECON106G', 'STATS20', 'PSYCH130', 'PHILOS8'] },
      { termLabel: 'Fall Year 3', courses: ['ECON106I', 'STATS101A', 'PSYCH120B', 'SOCIOL1'] },
      { termLabel: 'Winter Year 3', courses: ['ECON145', 'ECON180', 'PSYCH124A', 'COMSCI31'] },
      { termLabel: 'Spring Year 3', courses: ['ECON130', 'STATS140SL', 'COMSCI161', 'POLSCI10'] },
      { termLabel: 'Fall Year 4', courses: ['ECON106H', 'PHILOS185', 'COMSCI188', 'ART11A'] },
      { termLabel: 'Winter Year 4', courses: ['ECON171', 'DESMA10', 'ART11B', 'HIST1B'] },
      { termLabel: 'Spring Year 4', courses: ['ECON107', 'DESMA160', 'ART11C', 'ETHNSTD1'] },
    ],
    curriculumSummary: 'Jalen builds the most applied behavioral path, systematically combining economic theory with cognitive science, statistics, computation, and design. His econ core is front-loaded: he finishes the full micro/macro theory and econometrics sequence (including advanced econometrics, ECON 104) by the end of sophomore year. His econ electives \u2014 behavioral economics (106V), game theory (106G), industrial organization (106I), law and economics (145), economics of technology (180), public economics (130), health economics (106H), political economy (171), and history of economic thought (107) \u2014 cover strategic behavior from every angle. The psychology sequence \u2014 cognitive psychology (120A), perception (120B), computational cognitive science (130), and language and cognition (124A) \u2014 grounds his economic intuitions in how minds actually process information. The full UCLA probability and mathematical statistics sequence (STATS 100A\u2192100B) plus applied regression (101A) and statistical consulting (140SL) gives him hands-on quantitative practice. Philosophy of mind (PHILOS 7), formal logic (PHILOS 8), and philosophy of technology and AI (PHILOS 185) push him to think about the ethics of behavioral intervention. Junior year he picks up programming (COMSCI 31), AI (COMSCI 161), and HCI (COMSCI 188) to prototype his ideas. Senior year he adds design media arts (DESMA 10, 160) for UX skills and the ceramics sequence (ART 11A\u2192B\u2192C) because he finds working with clay helps him think.',
    visionLeavingUndergrad: 'Jalen wants to work at the intersection of behavioral economics and design \u2014 not in academia but in organizations that apply behavioral insights to real products and policies. He\u2019s particularly interested in healthcare and financial decision-making, where the stakes of poor choice architecture are highest.',
    careerTimeline: [
      { years: '1\u20132', role: 'Associate, ideas42 (Behavioral Design Consultancy)', description: 'Designs and runs randomized experiments testing behavioral interventions for financial services clients. Leads a project redesigning a health insurance enrollment flow that increases plan-switching rates by 23% among employees who were previously defaulting into suboptimal plans.' },
      { years: '2\u20133', role: 'Behavioral Scientist, California Department of Health Care Services', description: 'Joins the state\u2019s behavioral insights team. Designs nudge interventions for Medi-Cal enrollment and preventive care uptake. Runs the first statewide RCT testing whether simplified renewal forms reduce Medicaid churn among eligible families.' },
      { years: '3\u20134', role: 'Senior Behavioral Scientist, Nava PBC (Government Technology)', description: 'Leads behavioral design for government benefits platforms. Redesigns the information architecture of a state benefits portal, applying computational cognitive science to reduce cognitive load in eligibility screening. The redesign increases successful application completion by 34%.' },
      { years: '4\u20135', role: 'Director of Behavioral Strategy, health technology startup', description: 'Leads a team applying behavioral economics and HCI research to chronic disease management tools. Designs personalized choice architectures that adapt to individual cognitive profiles \u2014 bringing together everything from game theory to perception to computational modeling.' },
    ],
    futureThinking: 'Jalen is wrestling with whether to stay in industry where he can see immediate impact or pursue a mid-career PhD to publish the research he keeps designing in his head. He\u2019s also increasingly interested in the ethics of behavioral intervention at scale \u2014 when does a well-designed nudge become manipulation, and who gets to decide?',
    techOutcome: true,
    gradSchool: false,
  },
];
