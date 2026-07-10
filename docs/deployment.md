# Deployment

The site is deployed as a GitHub Pages user site from this repository.

## Current Baseline

- Workflow file: `.github/workflows/deploy.yml`
- Trigger: push to `main`
- Node version in CI: 24
- Install command in CI: `npm ci`
- Build command in CI: `npm run build`
- Published artifact: `dist/`
- Deploy action: `actions/deploy-pages@v4`

## GitHub Pages Notes

This is a user site repository, so deployment should use the root path. Do not configure a Vite subpath base.

In GitHub repository settings, Pages should be configured to use GitHub Actions as the source.

## Local Build Check

```bash
npm install
npm run lint
npm run build
npm run preview
```

`dist/` is generated output and should not be committed.
