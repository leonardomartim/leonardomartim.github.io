# 0005: Use Codex CLI

## Status

Accepted

## Context

The project benefits from AI-assisted development for planning, implementation support, documentation, and review, while still requiring controlled changes and validation.

## Decision

Use Codex CLI with the repository rules in `AGENTS.md`.

## Consequences

- Codex must inspect files before editing.
- Changes should stay small and scoped.
- Codex should not commit or push unless asked.
- Validation should run with `npm run lint` and `npm run build` before handoff.
- Human review remains required, especially for portfolio content accuracy and public-facing copy.
