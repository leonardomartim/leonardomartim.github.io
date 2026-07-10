import { ArrowUpRight } from "lucide-react";

import { Container } from "../components/Container";
import type { Translation } from "../i18n";

type ProjectsSectionProps = {
  content: Translation["projects"];
};

export function ProjectsSection({ content }: ProjectsSectionProps) {
  return (
    <section aria-labelledby="projects-title" className="border-y border-[var(--color-border)] bg-[var(--color-surface-muted)] py-16 sm:py-20" id="projects">
      <Container>
        <p className="text-sm font-semibold tracking-[0.14em] text-[var(--color-accent)] uppercase">{content.eyebrow}</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl" id="projects-title">{content.title}</h2>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--color-text-muted)]">{content.description}</p>
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {content.items.map((item) => {
            const statusLabel = item.status === "inProgress" ? content.progressLabel : content.plannedLabel;

            return (
              <article className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6" key={item.title}>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <span className="shrink-0 rounded-full bg-[var(--color-accent-muted)] px-3 py-1 text-xs font-semibold text-[var(--color-text)]">
                    {statusLabel}
                  </span>
                </div>
                <p className="mt-4 leading-7 text-[var(--color-text-muted)]">{item.description}</p>
                <p className="mt-6 flex items-center gap-1 text-sm font-medium text-[var(--color-accent)]">
                  {statusLabel} <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
