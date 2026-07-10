# Development Workflow

## Install

```bash
npm install
```

## Local Development

```bash
npm run dev
```

Vite starts a local development server with hot reload.

## Validation

Run validation before finishing changes:

```bash
npm run lint
npm run build
```

## Preview Production Build

```bash
npm run preview
```

This previews the built app locally after `npm run build`.

## Working Rules

- Inspect existing files before editing.
- Keep changes small and scoped.
- Do not change application code when the task is documentation-only.
- Keep the project buildable after each phase.
- Do not commit or push unless explicitly asked.
- Do not track `dist/` or `node_modules/`.

## Documentation Updates

Update docs when changing architecture, build setup, deployment, theme system, i18n, or the AI workflow.

Do not describe planned features as completed.
