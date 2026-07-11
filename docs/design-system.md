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

The layout shell places the theme selector in the header alongside the language
selector. Final themed visual design and the remaining portfolio components remain planned.

## UI Principles

- Use semantic HTML first.
- Prefer readable, restrained layouts for a professional portfolio.
- Keep motion subtle and respect `prefers-reduced-motion`.
- Ensure visible focus states and sufficient color contrast.
- Use responsive constraints so text and controls do not overlap.
- Use Lucide React icons for recognizable interface actions when icons are needed.

## Layout and Type

- The shared content container is capped at `76rem`, with responsive inline padding.
- Hero typography uses a fluid display scale with a constrained measure to preserve a
  clear reading order across mobile and desktop layouts.
- The hero fills the available first screen on large viewports and returns to content-led
  spacing on smaller screens where the header height varies.
- Supporting information uses muted surfaces and accent borders rather than decorative
  effects, keeping all four themes visually consistent.

## Typewriter Focus Mode

- The header offers an explicit action that opens a separate, document-like focus view.
- The normal portfolio and hero remain static and unchanged while the mode is closed.
- The modal uses native dialog behavior for focus containment, keyboard access, and
  Escape-to-close support.
- Only supporting copy inside the document is typed. Its full footprint and accessible
  text remain available throughout the effect.
- Reduced-motion preferences render the complete document copy without animation.

## Styling Rules

- Use Tailwind utilities for layout and component styling.
- Keep global CSS in `src/index.css`.
- Do not use `App.css` as the main styling layer.
- Do not add a Tailwind config file unless the project needs it.
