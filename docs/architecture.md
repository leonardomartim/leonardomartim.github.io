# Architecture

The project uses a static frontend architecture for GitHub Pages.

## Current Baseline

- Build tool: Vite
- UI runtime: React
- Language: TypeScript
- Styling: Tailwind CSS v4 through `@tailwindcss/vite`
- Deployment target: GitHub Pages user site at the repository root path

The base source architecture is in place. It provides a small app composition path and
keeps the existing baseline page available while the portfolio is implemented section by
section.

## Source Structure

```text
src/
  app/
  components/
  sections/
  layouts/
  data/
  i18n/
  theme/
  hooks/
  lib/
  types/
  utils/
```

## Responsibilities

- `app/`: app composition, providers, global setup
- `components/`: reusable UI components
- `sections/`: page sections
- `layouts/`: layout shells and page structure
- `data/`: static portfolio data
- `i18n/`: PT-BR and EN-US content objects
- `theme/`: theme definitions, persistence, and CSS variable mapping
- `hooks/`: reusable React hooks
- `lib/`: non-React helpers
- `types/`: shared TypeScript types
- `utils/`: generic utilities

## Current Implementation Scope

- `app/`, `layouts/`, and `sections/` compose the portfolio layout shell: header,
  main content region, introductory hero, and footer. Additional portfolio sections
  remain planned.
- `i18n/` provides typed PT-BR and EN-US content, language metadata, and a local
  language hook. The selected language persists in `localStorage`.
- `components/` contains reusable layout primitives plus the language and theme controls.
- `theme/` provides typed theme definitions, CSS-variable application, `localStorage`
  persistence, and a React hook for current theme state.
- `data/`, `hooks/`, `lib/`, and `utils/` are reserved for their respective feature work.

## Constraints

- Keep files small and focused.
- Keep content outside JSX when practical.
- Use semantic HTML and accessible controls.
- Use CSS variables for theme values.
- Use Tailwind utilities for layout and styling.
- Do not add a backend, CMS, database, auth, Redux, Zustand, or component library without approval.
