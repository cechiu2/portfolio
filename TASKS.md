# TASKS.md — Portfolio Project Task Tracker

## How to use this file
- Active and in-progress tasks are tracked in full detail below
- Completed tasks are collapsed to one-line entries in the Completed Tasks log
- Task IDs are never reused
- This file must be updated in real time as work progresses

---

## Active Tasks

TASK-026 | Add GatherBriefSection and GatherScopeSection + wire into page | Completed 2026-02-25 | Files: components/gather/GatherBriefSection.tsx (new), components/gather/GatherScopeSection.tsx (new), app/gather/page.tsx
TASK-027 | Add body copy to Onboarding and The Event Page decision blocks | Completed 2026-02-26 | Files: components/gather/GatherDesignDecisionsSection.tsx
TASK-028 | Add body copy for Map, Profile, and Event Creation decision blocks with bold markup | Completed 2026-02-26 | Files: components/gather/GatherDesignDecisionsSection.tsx, components/gather/GatherDecisionBlock.tsx

















<!-- TASK TEMPLATE — copy this block for each new task
### TASK-XXX: [Short task name]
**Stage:** [Planning | In Progress | Review | Blocked]
**Status:** [NOT_STARTED | IN_PROGRESS | COMPLETE | BLOCKED]
**Started:** [date]
**Last updated:** [date]

**Implementation spec:**
[A clear description of what needs to be built or changed and why]

**Checklist:**
- [ ] Step one
- [ ] Step two
- [ ] Step three

**Files affected:**
- `path/to/file.tsx`
- `path/to/other/file.ts`

**Notes:**
[Any important decisions made, blockers encountered, or context for the next session]
-->

---

## Completed Tasks
<!-- Collapsed one-line entries go here once a task is fully done -->
<!-- Format: TASK-XXX | [task name] | Completed [date] | Files: [list of files changed] -->
TASK-001 | Restructure homepage layout — compact intro + work section | Completed 2026-02-24 | Files: app/page.tsx, components/WorkSection.tsx (new)
TASK-002 | Replace circular photo placeholder with real portrait image | Completed 2026-02-24 | Files: components/IntroSection.tsx
TASK-003 | Create Gather and Goodreads placeholder pages, wire up project card links | Completed 2026-02-24 | Files: app/gather/page.tsx (new), app/goodreads/page.tsx (new), app/page.tsx
TASK-004 | Update footer with attribution text and nav links | Completed 2026-02-24 | Files: components/Footer.tsx
TASK-005 | Build /goodreads case study page with 9 components | Completed 2026-02-24 | Files: components/CaseStudyLayout.tsx (new), components/CaseStudyHero.tsx (new), components/ProjectMeta.tsx (new), components/ProblemSection.tsx (new), components/ResearchSection.tsx (new), components/DesignDecisionsSection.tsx (new), components/OutcomeSection.tsx (new), components/ReflectionSection.tsx (new), components/NextProject.tsx (new), app/goodreads/page.tsx
TASK-006 | Rebuild CaseStudyHero with before/after comparison and Framer Motion | Completed 2026-02-24 | Files: components/CaseStudyHero.tsx, app/goodreads/page.tsx
TASK-007 | Add staggered scroll animation to ProjectMeta | Completed 2026-02-24 | Files: components/ProjectMeta.tsx
TASK-008 | Build ResearchCard component and rewrite ResearchSection | Completed 2026-02-24 | Files: components/ResearchCard.tsx (new), components/ResearchSection.tsx, app/goodreads/page.tsx
TASK-009 | Build DecisionBlock + rewrite DesignDecisionsSection with sticky scroll | Completed 2026-02-24 | Files: components/DecisionBlock.tsx (new), components/DesignDecisionsSection.tsx, app/goodreads/page.tsx
TASK-010 | Build out OutcomeSection, ReflectionSection, NextProject | Completed 2026-02-24 | Files: components/OutcomeSection.tsx, components/ReflectionSection.tsx, components/NextProject.tsx, app/goodreads/page.tsx
TASK-011 | Create FaviconAnimator component and add to root layout | Completed 2026-02-24 | Files: components/FaviconAnimator.tsx (new), app/layout.tsx
TASK-012 | Add video mockup for Navigation Restructure decision block | Completed 2026-02-25 | Files: components/NavigationVideoMockup.tsx (new), app/goodreads/page.tsx
TASK-013 | Fix phone screen swap + sticky phone centering in DesignDecisionsSection | Completed 2026-02-25 | Files: components/DesignDecisionsSection.tsx
TASK-014 | Add video mockups for Tracking and Social decision blocks | Completed 2026-02-25 | Files: components/TrackingVideoMockup.tsx (new), components/SocialVideoMockup.tsx (new), app/goodreads/page.tsx
TASK-015 | Add autoplay video thumbnail to Goodreads ProjectCard on homepage | Completed 2026-02-25 | Files: components/ProjectCard.tsx, app/page.tsx

TASK-016 | Replace CaseStudyHero before/after with single hero video | Completed 2026-02-25 | Files: components/CaseStudyHero.tsx, app/goodreads/page.tsx
TASK-017 | Scaffold /gather case study page with empty shell components | Completed 2026-02-25 | Files: components/gather/GatherProblemSection.tsx (new), components/gather/GatherApproachSection.tsx (new), components/gather/GatherVisualDirectionSection.tsx (new), components/gather/GatherDesignDecisionsSection.tsx (new), components/gather/GatherOutcomeSection.tsx (new), app/gather/page.tsx
TASK-018 | Wire up CaseStudyHero and ProjectMeta props on /gather | Completed 2026-02-25 | Files: components/CaseStudyHero.tsx, app/gather/page.tsx
TASK-019 | Fill in GatherProblemSection and GatherApproachSection | Completed 2026-02-25 | Files: components/gather/GatherProblemSection.tsx, components/gather/GatherApproachSection.tsx
TASK-020 | Fill in GatherVisualDirectionSection | Completed 2026-02-25 | Files: components/gather/GatherVisualDirectionSection.tsx
TASK-021 | Build GatherDecisionBlock + fill in GatherDesignDecisionsSection | Completed 2026-02-25 | Files: components/gather/GatherDecisionBlock.tsx (new), components/gather/GatherDesignDecisionsSection.tsx
TASK-022 | Fill in GatherOutcomeSection; wire up ReflectionSection and NextProject | Completed 2026-02-25 | Files: components/gather/GatherOutcomeSection.tsx, app/gather/page.tsx
TASK-023 | Accessibility pass on /components/gather/ — 7 issues fixed | Completed 2026-02-25 | Files: components/gather/GatherApproachSection.tsx, components/gather/GatherVisualDirectionSection.tsx, components/gather/GatherDecisionBlock.tsx
TASK-024 | Fix Framer Motion Variants TypeScript errors across 5 components | Completed 2026-02-25 | Files: components/gather/GatherProblemSection.tsx, components/gather/GatherApproachSection.tsx, components/gather/GatherVisualDirectionSection.tsx, components/ProjectMeta.tsx, components/ResearchSection.tsx

TASK-025 | NextProject coming soon state + wire Goodreads→Gather navigation | Completed 2026-02-25 | Files: components/NextProject.tsx, app/goodreads/page.tsx, app/gather/page.tsx
