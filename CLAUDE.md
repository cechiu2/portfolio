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