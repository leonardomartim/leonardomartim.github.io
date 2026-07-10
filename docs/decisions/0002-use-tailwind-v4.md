# 0002: Use Tailwind CSS v4

## Status

Accepted

## Context

The portfolio needs a practical styling system that works well with React components and a small static build.

## Decision

Use Tailwind CSS v4 with the modern Vite plugin setup:

- `@tailwindcss/vite` in `vite.config.ts`
- `@import "tailwindcss";` in `src/index.css`

## Consequences

- No Tailwind config file is required unless a future feature needs one.
- Global CSS stays in `src/index.css`.
- Component styling should primarily use Tailwind utilities.
- Theme-specific values should use CSS variables when implemented.
