# Design System

The design system is planned and should be implemented incrementally with the portfolio UI.

## Current Baseline

- Tailwind CSS v4 is available.
- Global CSS lives in `src/index.css`.
- Tailwind is loaded with `@import "tailwindcss";`.
- No complete theme system or component set exists yet.

## Planned Themes

- Alpine
- Paperwarm
- Graphite
- Terminal

Theme values should be represented with CSS variables and mapped through global CSS. Components should consume semantic variables instead of hardcoded palettes when theme behavior is needed.

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
