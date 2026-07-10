# AGENTS.md

## Role

You are a software engineer working on a production-quality personal portfolio.

Work like a mid-level engineer with senior-level discipline:
- small changes
- clean architecture
- readable TypeScript
- stable builds
- accessible UI
- no unnecessary abstractions
- no broken imports
- no outdated setup

Do not generate the entire portfolio in one step.

## Project

This repository is the personal portfolio website for Leonardo Martim.

Repository:
- leonardomartim.github.io

Hosting:
- GitHub Pages user site
- root path deployment
- no Vite subpath base

Professional focus:
- backend development
- API design
- software architecture
- agile planning
- AI-assisted development

Audience:
- Brazilian recruiters
- US recruiters
- technical interviewers
- engineering leads

## Stack

Use:
- Vite
- React
- TypeScript
- Tailwind CSS v4
- @tailwindcss/vite
- Framer Motion
- Lucide React
- local i18n with TypeScript objects
- GitHub Actions
- GitHub Pages

Do not add without approval:
- Next.js
- backend server
- database
- CMS
- authentication
- Redux
- Zustand
- component libraries
- styling libraries
- unnecessary packages

## Tailwind CSS v4

Use the modern Tailwind v4 Vite setup.

vite.config.ts must use:
- react()
- tailwindcss()

src/index.css must include:
- @import "tailwindcss";

Do not use:
- tailwind.config.js unless necessary
- @tailwind base
- @tailwind components
- @tailwind utilities
- App.css as the main styling layer

Global CSS belongs in:
- src/index.css

## File Size Rules

Keep files small.

Targets:
- components: max 150 lines
- sections: max 250 lines
- data files: max 300 lines
- i18n files: max 400 lines
- utilities: max 150 lines

If a file approaches 300-400 lines:
- split the file
- extract data
- extract subcomponents
- extract types
- extract constants

Never create a massive App.tsx.

## Architecture

Preferred structure:

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

Responsibilities:

app/
- app composition
- providers
- global setup

components/
- reusable UI components

sections/
- page sections

data/
- static portfolio data

i18n/
- PT-BR and EN-US content

theme/
- theme definitions
- theme persistence
- CSS variable mapping

hooks/
- reusable React hooks

lib/
- non-React helpers

types/
- shared TypeScript types

utils/
- generic utilities

## Required Features

The portfolio should include:
- Header
- Hero
- About
- Bento grid
- Projects
- Stack
- Architecture / Agents section
- Contact
- Footer

Required behavior:
- PT-BR / EN-US toggle
- four visual themes
- manual typewriter mode toggle
- responsive layout
- accessible navigation
- SEO metadata
- GitHub Pages deployment

Themes:
- Alpine
- Paperwarm
- Graphite
- Terminal

## Code Rules

Use:
- named components
- semantic HTML
- TypeScript types for shared data
- content outside components when possible
- CSS variables for themes
- Tailwind utilities for layout and styling

Avoid:
- fake metrics
- fake companies
- broken imports
- unused variables
- excessive animation
- unnecessary useEffect
- hardcoded large content inside JSX

## Accessibility

Always consider:
- semantic landmarks
- keyboard navigation
- visible focus states
- aria-label when needed
- color contrast
- prefers-reduced-motion

Animations must be subtle and non-blocking.

## Documentation

Documentation is part of the product.

Maintain:
- README.md
- docs/overview.md
- docs/architecture.md
- docs/development-workflow.md
- docs/design-system.md
- docs/ai-assisted-development.md
- docs/deployment.md
- docs/decisions/

Update documentation when changing:
- architecture
- build setup
- deployment
- theme system
- i18n
- AI workflow

Do not document unimplemented features as completed.
Mark planned features clearly as planned.

## Validation

After code changes, run:

npm run lint
npm run build

Before finishing any task, check:
- no unresolved imports
- no unused variables
- no missing dependencies
- no outdated Tailwind setup
- no dist tracked
- no node_modules tracked
- build passes

## Git Rules

Do not commit automatically unless asked.
Do not push automatically unless asked.

After changes, summarize:
- files changed
- commands executed
- validation result
- risks or follow-ups

## Workflow

Work in phases:

1. diagnose
2. plan
3. implement architecture
4. validate build
5. implement one feature
6. validate again
7. document
8. stop for review

Always inspect files before editing.
Always keep the project buildable.
