# AI-Assisted Development

This project is developed with Codex CLI as an assistant workflow, while keeping human review and validation as required steps.

## Current Baseline

- `AGENTS.md` defines project rules, stack constraints, documentation expectations, and validation commands.
- Codex should inspect files before editing and keep changes scoped.
- Documentation must distinguish current implementation from planned work.

## Codex CLI Workflow

1. Read `AGENTS.md`.
2. Diagnose the current repo state.
3. Make a small plan for the requested scope.
4. Edit only the files required for the task.
5. Run validation:

```bash
npm run lint
npm run build
```

6. Summarize files changed, commands executed, validation result, and follow-up tasks.

## Guardrails

- Do not commit or push automatically.
- Do not add packages without approval.
- Do not generate the entire portfolio in one step.
- Do not document planned features as completed.
- Do not revert unrelated user changes.
