import { CheckCircle2 } from "lucide-react";

import { Container } from "../components/Container";
import type { Translation } from "../i18n";

type ArchitectureSectionProps = {
  content: Translation["architecture"];
};

export function ArchitectureSection({ content }: ArchitectureSectionProps) {
  return (
    <section aria-labelledby="architecture-title" className="border-y border-[var(--color-border)] bg-[var(--color-surface-muted)] py-16 sm:py-20" id="architecture">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-[0.14em] text-[var(--color-accent)] uppercase">{content.eyebrow}</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl" id="architecture-title">{content.title}</h2>
          <p className="mt-5 text-lg leading-8 text-[var(--color-text-muted)]">{content.description}</p>
        </div>
        <ol className="mt-8 grid gap-4 lg:grid-cols-3">
          {content.steps.map((step, index) => (
            <li className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6" key={step.title}>
              <div className="flex items-center justify-between text-[var(--color-accent)]">
                <CheckCircle2 aria-hidden="true" className="h-5 w-5" />
                <span className="text-sm font-semibold">0{index + 1}</span>
              </div>
              <h3 className="mt-8 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 leading-7 text-[var(--color-text-muted)]">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
