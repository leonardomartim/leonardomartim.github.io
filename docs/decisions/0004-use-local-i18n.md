# 0004: Use Local i18n

## Status

Accepted and implemented

## Context

The portfolio needs PT-BR and EN-US content for Brazilian recruiters, US recruiters, and technical reviewers. The content surface is small and controlled by the repository.

## Decision

Use local TypeScript objects for i18n content.

## Consequences

- No CMS or remote translation service is required.
- Content can be typed and reviewed with normal code changes.
- Language switching works without network requests.
- Shared content contracts keep PT-BR and EN-US structures aligned at build time.
