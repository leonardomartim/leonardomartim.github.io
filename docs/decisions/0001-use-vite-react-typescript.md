# 0001: Use Vite, React, and TypeScript

## Status

Accepted

## Context

The portfolio is a static frontend for GitHub Pages. It needs a fast local development loop, a simple production build, and typed React code.

## Decision

Use Vite with React and TypeScript.

## Consequences

- Development runs with `npm run dev`.
- Production builds run with `npm run build`.
- TypeScript catches common integration errors before deployment.
- The app remains a static site with no backend runtime requirement.
