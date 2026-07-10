# 0003: Use GitHub Pages

## Status

Accepted

## Context

The repository is `leonardomartim.github.io`, which is suited to a GitHub Pages user site.

## Decision

Deploy the static Vite build to GitHub Pages with GitHub Actions.

## Consequences

- The site is served from the root path.
- Vite should not use a subpath `base`.
- The deployment workflow builds `dist/` and publishes it through GitHub Pages.
- `dist/` remains generated output and should not be tracked.
