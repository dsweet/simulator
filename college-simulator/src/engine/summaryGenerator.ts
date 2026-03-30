import { SchoolRun, Curriculum, OutcomeData, School, Course, INTEREST_TAGS } from '../types';

export interface CurriculumSummary {
  narrative: string;
  topInterests: string[];
  careerPaths: string[];
  skillsHighlight: string;
}

const INTEREST_NARRATIVES: Record<string, string> = {
  'ceramics': 'hands-on studio art and material exploration',
  'astronomy': 'the wonder of space science and cosmic phenomena',
  'history': 'historical inquiry and understanding how the past shapes the present',
  'classics': 'the ancient world and classical foundations of thought',
  'cultural-studies': 'cultural analysis and diverse perspectives on society',
  'game-theory': 'strategic reasoning and decision science',
  'video-games': 'interactive media and game design',
  'design': 'human-centered design thinking and creative problem solving',
  'literature': 'close reading, storytelling, and literary analysis',
  'philosophy': 'philosophical reasoning and big questions about ethics and knowledge',
  'space': 'space science and the frontiers of exploration',
  'science': 'scientific inquiry and understanding the natural world',
  'music': 'musical expression and the theory behind sound',
  'linguistics': 'the structure of language and how communication works',
  'film': 'visual storytelling and media criticism',
  'environmental': 'environmental stewardship and sustainability',
  'politics': 'political systems, governance, and policy-making',
  'economics': 'economic reasoning and how markets shape everyday life',
  'sociology': 'social structures, institutions, and human behavior',
  'religion': 'religious traditions and questions of meaning',
  'biology': 'biological systems and the science of living things',
};

function getTopInterestTags(courses: Course[], topN: number): { id: string; count: number }[] {
  const tagCounts = new Map<string, number>();
  for (const course of courses) {
    for (const tag of course.interestTags) {
      tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1);
    }
  }
  return Array.from(tagCounts.entries())
    .map(([id, count]) => ({ id, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, topN);
}

function getCategoryBreakdown(courses: Course[]) {
  const counts = { 'major-required': 0, 'major-elective': 0, 'gen-ed': 0, 'elective': 0 };
  for (const course of courses) {
    counts[course.category] = (counts[course.category] || 0) + 1;
  }
  const total = courses.length || 1;
  return {
    counts,
    majorPct: (counts['major-required'] + counts['major-elective']) / total,
    genEdPct: counts['gen-ed'] / total,
    electivePct: counts['elective'] / total,
  };
}

function describeBalance(breakdown: ReturnType<typeof getCategoryBreakdown>): string {
  if (breakdown.majorPct >= 0.6) return 'deeply focused on your major';
  if (breakdown.electivePct >= 0.3) return 'richly exploratory with lots of room for curiosity';
  if (breakdown.genEdPct >= 0.35) return 'grounded in a broad liberal arts foundation';
  return 'well-balanced between depth in your major and breadth across disciplines';
}

function describePacing(
  allCourses: Course[],
  termSelections: SchoolRun['termSelections'],
  termsPerYear: number,
): string {
  const courseMap = new Map(allCourses.map(c => [c.id, c]));
  let earlyMajor = 0, earlyTotal = 0, lateMajor = 0, lateTotal = 0;
  const midpoint = termSelections.length / 2;

  termSelections.forEach((term, i) => {
    for (const cid of term.courses) {
      const c = courseMap.get(cid);
      if (!c) continue;
      if (i < midpoint) {
        earlyTotal++;
        if (c.category === 'major-required' || c.category === 'major-elective') earlyMajor++;
      } else {
        lateTotal++;
        if (c.category === 'major-required' || c.category === 'major-elective') lateMajor++;
      }
    }
  });

  const earlyRatio = earlyTotal > 0 ? earlyMajor / earlyTotal : 0;
  const lateRatio = lateTotal > 0 ? lateMajor / lateTotal : 0;

  if (earlyRatio < 0.4 && lateRatio >= 0.5) {
    return 'Your early terms lay a broad foundation, and the later years deepen into your major — a classic arc that lets you explore before committing.';
  }
  if (earlyRatio >= 0.5 && lateRatio < 0.4) {
    return 'You dive into the core of your major from the start, freeing up later years for electives and personal interests — an approach that builds expertise early.';
  }
  if (earlyRatio >= 0.5 && lateRatio >= 0.5) {
    return 'Your path is intensely focused on the major throughout, building deep mastery year after year.';
  }
  return 'Your schedule stays balanced throughout, weaving major coursework and exploration together each year.';
}

function pickRelevantCareers(topTags: string[], outcomeData: OutcomeData): string[] {
  // Return a curated subset of job titles that feel most relevant to the interest pattern
  const tagSet = new Set(topTags);
  const relevant: string[] = [];

  // Prioritize jobs that connect to the student's interests
  for (const title of outcomeData.commonJobTitles) {
    const lower = title.toLowerCase();
    if (tagSet.has('design') && (lower.includes('design') || lower.includes('ux'))) relevant.push(title);
    else if (tagSet.has('economics') && (lower.includes('analyst') || lower.includes('economist'))) relevant.push(title);
    else if (tagSet.has('politics') && (lower.includes('policy') || lower.includes('legislative'))) relevant.push(title);
    else if (tagSet.has('film') && (lower.includes('media') || lower.includes('content'))) relevant.push(title);
    else if (tagSet.has('environmental') && lower.includes('sustain')) relevant.push(title);
  }

  // Fill to 3 if needed
  for (const title of outcomeData.commonJobTitles) {
    if (relevant.length >= 3) break;
    if (!relevant.includes(title)) relevant.push(title);
  }

  return relevant.slice(0, 3);
}

function pickRelevantGradPrograms(topTags: string[], outcomeData: OutcomeData): string[] {
  const results: string[] = [];
  const tagSet = new Set(topTags);

  for (const prog of outcomeData.commonGradPrograms) {
    const lower = prog.toLowerCase();
    if (tagSet.has('design') && (lower.includes('design') || lower.includes('hci'))) results.push(prog);
    else if (tagSet.has('economics') && (lower.includes('econ') || lower.includes('mba') || lower.includes('finance'))) results.push(prog);
    else if (tagSet.has('politics') && (lower.includes('policy') || lower.includes('law') || lower.includes('political'))) results.push(prog);
    else if (tagSet.has('philosophy') && (lower.includes('philosophy') || lower.includes('law'))) results.push(prog);
    else if (tagSet.has('science') && (lower.includes('science') || lower.includes('data'))) results.push(prog);
  }

  for (const prog of outcomeData.commonGradPrograms) {
    if (results.length >= 3) break;
    if (!results.includes(prog)) results.push(prog);
  }

  return results.slice(0, 3);
}

export function generateCurriculumSummary(
  run: SchoolRun,
  curriculum: Curriculum,
  outcomeData: OutcomeData,
  school: School,
): CurriculumSummary {
  // Resolve all selected courses
  const courseMap = new Map(curriculum.courses.map(c => [c.id, c]));
  const allSelectedCourses: Course[] = [];
  for (const term of run.termSelections) {
    for (const cid of term.courses) {
      const c = courseMap.get(cid);
      if (c) allSelectedCourses.push(c);
    }
  }

  const breakdown = getCategoryBreakdown(allSelectedCourses);
  const topTags = getTopInterestTags(allSelectedCourses, 3);
  const topTagIds = topTags.map(t => t.id);
  const topTagLabels = topTags.map(t => INTEREST_TAGS.find(it => it.id === t.id)?.label || t.id);

  const balanceDesc = describeBalance(breakdown);
  const termsPerYear = school.calendar === 'quarter' ? 3 : 2;
  const pacingDesc = describePacing(curriculum.courses, run.termSelections, termsPerYear);

  // Build interest narrative
  const interestPhrases = topTags
    .map(t => INTEREST_NARRATIVES[t.id] || t.id)
    .filter(Boolean);

  let interestNarrative = '';
  if (interestPhrases.length === 1) {
    interestNarrative = `Your elective choices center on ${interestPhrases[0]}, giving your education a distinctive thematic thread.`;
  } else if (interestPhrases.length === 2) {
    interestNarrative = `Your choices weave together ${interestPhrases[0]} and ${interestPhrases[1]}, creating an unusual and personal intellectual combination.`;
  } else if (interestPhrases.length >= 3) {
    interestNarrative = `Your path threads through ${interestPhrases[0]}, ${interestPhrases[1]}, and ${interestPhrases[2]} — a combination that reflects genuine curiosity across very different ways of thinking.`;
  }

  const careers = pickRelevantCareers(topTagIds, outcomeData);
  const gradProgs = pickRelevantGradPrograms(topTagIds, outcomeData);

  const careerStr = careers.length > 0
    ? `This combination positions you well for roles like ${careers.join(', ')}.`
    : '';

  const gradStr = gradProgs.length > 0
    ? `It also opens doors to graduate programs in ${gradProgs.join(', ')}.`
    : '';

  const totalCourses = allSelectedCourses.length;
  const totalTerms = run.termSelections.length;
  const years = Math.ceil(totalTerms / termsPerYear);

  const opening = `Over ${years} year${years !== 1 ? 's' : ''} and ${totalCourses} courses, this curriculum is ${balanceDesc}.`;

  const narrative = [opening, interestNarrative, pacingDesc, careerStr, gradStr]
    .filter(Boolean)
    .join(' ');

  const skillsHighlight = topTagLabels.length > 0
    ? `Key themes: ${topTagLabels.join(', ')}`
    : 'A broad curriculum with varied skills';

  return {
    narrative,
    topInterests: topTagLabels,
    careerPaths: careers,
    skillsHighlight,
  };
}
