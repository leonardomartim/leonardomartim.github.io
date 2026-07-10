# Design System

The design system is planned and should be implemented incrementally with the portfolio UI.

## Current Baseline

- Tailwind CSS v4 is available.
- Global CSS lives in `src/index.css`.
- Tailwind is loaded with `@import "tailwindcss";`.
- The theme foundation is implemented with semantic CSS variables in `src/index.css`.
- `src/theme/` owns the four typed theme definitions, DOM application, persistence, and
  current-theme hook.

## Theme Foundation

- Alpine
- Paperwarm
- Graphite
- Terminal

Theme values are represented by semantic CSS variables. Components should consume those
variables instead of hardcoded palettes whenever theme behavior is needed.

The temporary baseline includes a theme selector only to demonstrate and validate the
foundation. Final themed visual design and portfolio components remain planned.

## UI Principles

- Use semantic HTML first.
- Prefer readable, restrained layouts for a professional portfolio.
- Keep motion subtle and respect `prefers-reduced-motion`.
- Ensure visible focus states and sufficient color contrast.
- Use responsive constraints so text and controls do not overlap.
- Use Lucide React icons for recognizable interface actions when icons are needed.

## Styling Rules

- Use Tailwind utilities for layout and component styling.
- Keep global CSS in `src/index.css`.
- Do not use `App.css` as the main styling layer.
- Do not add a Tailwind config file unless the project needs it.
