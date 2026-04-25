# College Curriculum Planner

An interactive 4-year course planning simulator that helps a student explore and compare degree programs across 6 schools in 4 academic tracks. Built with React + TypeScript + Vite.

## What it does

- **Browse programs** across 16 school/track combinations (UW, UCSD, UCLA, UPS, Richmond, Rochester)
- **Plan courses term-by-term** with prerequisite validation and intelligent auto-fill
- **Evaluate AP/IB credit** against each school's specific award policies
- **Track degree progress** toward major, gen-ed, and elective requirements
- **Generate narrative summaries** of the curriculum with career implications
- **Explore personas** — 24 example students showing how different interests shape a 4-year plan
- **Compare costs & outcomes** — tuition/aid, salaries, top employers, grad school rates

## Tracks & Schools

| Track | Schools |
|-------|---------|
| Engineering & Design | UW HCDE, UW HCDE Lite, UW ME + Art |
| Economics | UW Econ (BA), UW Econ (BS), UCSD, UCLA, UPS, Richmond |
| PPE / PPEL | Rochester PPE, Rochester Econ, Rochester BCS, Richmond PPEL |
| UW Exploration | Cognitive Science, Comparative Literature, Political Science, Political Economy |

## Data Model

### Core Types

**`Curriculum`** — Top-level container for each school/program:
- `schoolId`, `program` — identity
- `degreeRequirements` — total/major/genEd/elective credits, majorCourses list, genEdCategories
- `recommendedSequence` — default 4-year plan with term labels, course IDs, locked/elective flags
- `courses` — all ~100-200 courses available in that program

**`Course`** — Individual course entry:
- `id` — catalog number (e.g., `'ECON300'`, `'HCDE302'`)
- `title`, `description`, `credits`
- `category` — `'major-required'` | `'major-elective'` | `'gen-ed'` | `'elective'`
- `interestTags` — IDs from 37 interest tags (ceramics, astronomy, game-theory, etc.)
- `prereqs` — course IDs that must be completed first
- `genEdReqs` — which gen-ed categories this course satisfies
- `termAvailability?`, `yearLevel?`, `clusterGroup?` — optional scheduling metadata

**`DegreeRequirements`** — Graduation rules:
- Credit totals (total, major, genEd, elective)
- `majorCourses` — required course IDs
- `genEdCategories[]` — each with `id`, `name`, `creditsRequired`, and `satisfiedBy` (course IDs that can fill it)

**`CreditPolicy`** — Per-school AP/IB award rules:
- Min scores, course equivalents, credit caps, IB diploma bonuses
- `awards[]` — each mapping an exam + score threshold to credits and course equivalents

**`Persona`** — Example student archetype:
- Name, bio, archetype label, emoji
- `coursesByTerm` — full 4-year course plan
- `curriculumSummary` — narrative explaining course choices
- `careerTimeline` — projected career path with roles and years

### Supporting Types

| Type | Purpose |
|------|---------|
| `School` | Name, track, calendar (quarter/semester), size, enrollment |
| `CostData` | Tuition, room & board, aid, net cost, 4-year total |
| `OutcomeData` | Median salary, top employers, job titles, grad school rate |
| `StudentLifeData` | Location, housing, campus culture, diversity |
| `StudentProfile` | The student's AP/IB exam scores and assumptions |
| `SavedCurriculum` | Exported plan with term selections and generated narrative |

## Architecture

```
src/
  types/index.ts              # All TypeScript interfaces (~280 lines)

  data/
    curricula/                # 16 curriculum files, self-contained
      index.ts                # Registry mapping schoolId -> Curriculum
      uw-hcde.ts              # ~480 lines: degree reqs + ~230 courses
      ucsd-econ.ts            # ~250 lines: degree reqs + ~150 courses
      ...                     # 14 more school/program files
    schools.ts                # School metadata (16 schools)
    costs.ts                  # Cost of attendance data
    outcomes.ts               # Career outcomes data
    creditPolicies.ts         # AP/IB credit policies
    studentLife.ts            # Campus culture data
    student.ts                # Current student's exam scores
    personas.ts               # 8 HCDE personas
    econ-personas.ts          # 8 economics personas
    ppe-personas.ts           # 8 PPE personas

  engine/
    gameState.ts              # Plan creation & auto-fill algorithm
    progressTracker.ts        # Degree requirement tracking
    creditEvaluator.ts        # AP/IB credit matching & caps
    summaryGenerator.ts       # Narrative generation from course selections
    curriculumExport.ts       # Save/export to localStorage & text

  components/
    SchoolBrowser.tsx         # Track selection + school grid
    SchoolDetail.tsx          # School info, costs, outcomes preview
    CurriculumPlanner.tsx     # Term-by-term course selection UI
    DegreeProgress.tsx        # Visual progress toward graduation
    Summary.tsx               # Generated narrative + career outcomes
    Personas.tsx              # Persona browser with example plans
    SavedCurricula.tsx        # Saved plan management

  App.tsx                     # Main router & state orchestration
  App.css                     # Full styling (grid/flexbox layout)
```

## Key Algorithms

**Auto-fill** (`gameState.ts`) — Places courses into a 4-year plan respecting prerequisite chains, term availability, credit limits per term, and AP/IB credits already earned. Priority: major-required > gen-ed > major-elective > elective.

**Credit evaluation** (`creditEvaluator.ts`) — Matches AP/IB exams to course equivalents per school policy. Handles tiered awards, credit caps, and IB diploma bonuses. Preserves highest-value credits when caps apply.

**Progress tracking** (`progressTracker.ts`) — Computes completion toward each gen-ed category, major requirements, and elective credits. Special logic for Rochester's cluster system (3+ courses from one department).

**Narrative generation** (`summaryGenerator.ts`) — Analyzes selected courses by interest tags and categories. Generates a 3-5 sentence summary describing the curriculum's themes, pacing, and career implications.

## Development

```bash
npm install
npm run dev       # Start dev server
npm run build     # Production build
npm run lint      # ESLint
npx tsc --noEmit  # Type check
```

## Tech Stack

- React 19 + TypeScript 5.9
- Vite 8 (build tool)
- React Router 7 (navigation)
- No UI framework or state management library — minimal dependencies by design
