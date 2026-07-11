import type { Translation } from "../i18n";
import { Container } from "../components/Container";

type AboutSectionProps = {
  content: Translation["about"];
};

export function AboutSection({ content }: AboutSectionProps) {
  return (
    <section aria-labelledby="about-title" className="py-16 sm:py-20 lg:py-24" id="about">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(18rem,0.7fr)] lg:gap-16">
          <div>
            <p className="text-sm font-semibold tracking-[0.14em] text-[var(--color-accent)] uppercase">{content.eyebrow}</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl" id="about-title">
              {content.title}
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--color-text-muted)]">{content.description}</p>
          </div>
          <ul className="space-y-3 self-end" aria-label={content.eyebrow}>
            {content.principles.map((principle) => (
              <li className="border-l-2 border-[var(--color-accent)] pl-4 text-sm leading-6 text-[var(--color-text-muted)]" key={principle}>
                {principle}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
