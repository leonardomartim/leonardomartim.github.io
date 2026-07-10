# Architecture

The project uses a static frontend architecture for GitHub Pages.

## Current Baseline

- Build tool: Vite
- UI runtime: React
- Language: TypeScript
- Styling: Tailwind CSS v4 through `@tailwindcss/vite`
- Deployment target: GitHub Pages user site at the repository root path

The current `src/` tree is minimal and does not yet implement the planned portfolio architecture.

## Planned Source Structure

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

## Constraints

- Keep files small and focused.
- Keep content outside JSX when practical.
- Use semantic HTML and accessible controls.
- Use CSS variables for theme values.
- Use Tailwind utilities for layout and styling.
- Do not add a backend, CMS, database, auth, Redux, Zustand, or component library without approval.
