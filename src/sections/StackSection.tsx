import { Container } from "../components/Container";
import { stackGroups } from "../data/stack";
import type { Translation } from "../i18n";

type StackSectionProps = {
  content: Translation["stack"];
};

export function StackSection({ content }: StackSectionProps) {
  return (
    <section aria-labelledby="stack-title" className="py-16 sm:py-20" id="stack">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-[0.14em] text-[var(--color-accent)] uppercase">{content.eyebrow}</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl" id="stack-title">{content.title}</h2>
          <p className="mt-5 text-lg leading-8 text-[var(--color-text-muted)]">{content.description}</p>
        </div>
        <dl className="mt-8 grid gap-4 sm:grid-cols-2">
          {stackGroups.map((group) => (
            <div className="rounded-lg border border-[var(--color-border)] p-5" key={group.id}>
              <dt className="font-semibold">{content.groupLabels[group.id]}</dt>
              <dd className="mt-3 flex flex-wrap gap-2">
                {group.technologies.map((technology) => (
                  <span className="rounded-full bg-[var(--color-surface-muted)] px-3 py-1 text-sm text-[var(--color-text-muted)]" key={technology}>{technology}</span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
