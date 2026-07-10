# 0004: Use Local i18n

## Status

Accepted for planned implementation

## Context

The portfolio needs PT-BR and EN-US content for Brazilian recruiters, US recruiters, and technical reviewers. The content surface is small and controlled by the repository.

## Decision

Use local TypeScript objects for i18n content when the UI is implemented.

## Consequences

- No CMS or remote translation service is required.
- Content can be typed and reviewed with normal code changes.
- Language switching can be implemented without network requests.
- Documentation must keep this marked as planned until the i18n files and toggle exist.
