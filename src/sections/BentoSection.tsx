import { Braces, Layers3, Route, Workflow } from "lucide-react";

import { Container } from "../components/Container";
import type { Translation } from "../i18n";

type BentoSectionProps = {
  content: Translation["bento"];
};

const icons = [Braces, Route, Layers3, Workflow];

export function BentoSection({ content }: BentoSectionProps) {
  return (
    <section aria-labelledby="approach-title" className="py-16 sm:py-20">
      <Container>
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl" id="approach-title">{content.title}</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {content.items.map((item, index) => {
            const Icon = icons[index];

            return (
              <article className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6" key={item.title}>
                <Icon aria-hidden="true" className="h-5 w-5 text-[var(--color-accent)]" strokeWidth={1.75} />
                <h3 className="mt-8 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 leading-7 text-[var(--color-text-muted)]">{item.description}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
