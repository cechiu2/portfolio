# Portfolio Site — Claude Code Guidelines

## About this project
This is a personal portfolio site for a product designer who also codes and has experience as a software engineer.
The site itself is a design project — it should feel intentional, minimal, and well-crafted.

## Accessibility standards (non-negotiable)
- Follow WCAG 2.1 AA as a baseline, AA for everything, AAA where possible
- All images must have descriptive alt text
- All interactive elements must be keyboard navigable and have visible focus states
- Color contrast must meet AA ratio minimums (4.5:1 for normal text, 3:1 for large text)
- Use semantic HTML elements (nav, main, section, article, header, footer, h1-h6 in logical order)
- Never use divs where a semantic element exists
- All forms must have proper labels
- Motion and animation must respect prefers-reduced-motion
- Use aria-label or aria-labelledby on any element that needs context for screen readers
- Focus rings must always be high contrast against their immediate background — not just against the page background. On dark surfaces use a white focus ring, on light surfaces use plum (#412234).

## Design principles
- Mobile-first: design for small screens, then scale up
- Minimal and intentional: no decorative elements that don't serve a purpose
- Typography should be clear and readable — base font size no smaller than 16px
- Use Tailwind utility classes for all styling

## Code style
- Use TypeScript
- Components go in /components folder, one component per file
- Name components clearly (e.g. HeroSection.tsx, ProjectCard.tsx)
- Add a short comment above each component explaining what it does
- Keep components small and focused — if it's getting long, split it up

## Project stability notes
- This project has experienced repeated Turbopack instability and package.json corruption
- Never modify package.json, postcss.config.mjs, or any config files unless absolutely necessary
- If config files must be changed, make the smallest possible edit and confirm the change is valid before finishing
- Never leave any file in a partially edited state — always complete edits fully
- After making any changes, confirm all modified files are syntactically valid
- Do not run any npm install or package management commands unless explicitly asked to by the user
- The following files are PROTECTED and must never be modified under any circumstances:
  - postcss.config.mjs
  - next.config.ts
  - package.json
  - tsconfig.json
  - eslint.config.mjs
- If a task seems to require editing these files, stop and ask the user first

## Task tracking system (MANDATORY — no exceptions)
- TASKS.md is the single source of truth for all work done on this project
- Reading TASKS.md is the FIRST thing to do at the start of every session, before any other action
- Creating a task entry in TASKS.md is REQUIRED before starting any work — do not write a single line of code without first creating the task entry
- Update the task checklist in real time as each step is completed — do not batch updates at the end
- When a task is fully complete, IMMEDIATELY collapse it to a one-line entry in the Completed Tasks log — this must happen before starting the next task
- Never leave TASKS.md in a stale state — if code was written, TASKS.md must reflect it
- The last thing to do before ending any session is verify TASKS.md is fully up to date
- Format for completed entries: TASK-XXX | [task name] | Completed [date] | Files: [list of files changed]
- Task IDs follow the format TASK-001, TASK-002, etc. and are never reused

### TASKS.md update triggers (update the file when any of these happen):
- Starting a new task → create full task entry
- Completing a checklist item → check it off immediately
- Finishing a task → collapse to one-line history entry
- Starting a new session → read and report current state to user
- Ending a session → verify everything is up to date