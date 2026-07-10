import type { Translation } from "../i18n";
import { Container } from "../components/Container";

type HeroSectionProps = {
  content: Translation["hero"];
};

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section aria-labelledby="hero-title" className="py-20 sm:py-28 lg:py-36" id="intro">
      <Container>
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-semibold tracking-[0.14em] text-[var(--color-accent)] uppercase">
            {content.eyebrow}
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl" id="hero-title">
            {content.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-text-muted)] sm:text-xl">
            {content.description}
          </p>
          <p className="mt-10 max-w-2xl border-l-2 border-[var(--color-accent)] pl-4 text-sm leading-6 text-[var(--color-text-muted)]">
            {content.notice}
          </p>
        </div>
      </Container>
    </section>
  );
}
