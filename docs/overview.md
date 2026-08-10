# Overview

This repository contains the personal portfolio website for Leonardo Martim.

The site is intended for Brazilian recruiters, US recruiters, technical interviewers, engineering leads, and potential clients. Its professional focus includes websites, apps, internal systems, APIs, software architecture, and AI-assisted development.

## Current State

The project is in its initial baseline:

- Vite, React, TypeScript, and Tailwind CSS v4 are installed.
- `@tailwindcss/vite` is configured in `vite.config.ts`.
- `src/index.css` imports Tailwind with `@import "tailwindcss";`.
- GitHub Pages deployment workflow exists in `.github/workflows/deploy.yml`.
- The header, hero, About, Bento grid, Projects, Stack, Architecture / Agents, Contact,
  and footer sections are implemented with responsive, localized base content.
- The Projects section has a typed case-study foundation and currently documents this
  repository. Additional case studies remain planned.
- The Contact section provides a direct email channel for software-service inquiries.

## Implemented Sections

- Header
- Hero
- About
- Bento grid
- Projects
- Stack
- Architecture / Agents
- Contact
- Footer

## Planned Content

- Additional case studies based on real project information

## Product Behavior

- PT-BR / EN-US language toggle (implemented)
- Two visual themes: Paperwarm and Graphite (implemented)
- Responsive layout (implemented)
- Accessible navigation (implemented baseline)
- SEO metadata (planned)
- GitHub Pages deployment from `main` (configured)
