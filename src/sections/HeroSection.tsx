import type { Translation } from "../i18n";
import { Container } from "../components/Container";
import { useCyclingKeyword } from "../hooks/useCyclingKeyword";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

type HeroSectionProps = {
  content: Translation["hero"];
};

function DynamicKeyword({ words }: { words: string[] }) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const displayedWord = useCyclingKeyword(words, prefersReducedMotion);
  const reservedCharacters = Math.max(...words.map((word) => Array.from(word).length));

  return (
    <span
      className="inline-block whitespace-nowrap text-[var(--color-accent)]"
      style={{ minWidth: `${reservedCharacters}ch` }}
    >
      {displayedWord}
      {!prefersReducedMotion && (
        <span className="ml-[0.04em] text-[var(--color-text-muted)]" role="presentation">
          |
        </span>
      )}
    </span>
  );
}

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section
      aria-labelledby="hero-title"
      className="flex border-b border-[var(--color-border)] py-16 sm:py-24 lg:min-h-[calc(100svh-5rem)] lg:items-center lg:py-28"
      id="intro"
    >
      <Container className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end lg:gap-16">
        <div>
          <p className="mb-6 text-xs font-semibold tracking-[0.18em] text-[var(--color-accent)] uppercase sm:text-sm">
            {content.eyebrow}
          </p>
          <h1
            className="max-w-[17ch] text-[clamp(2.75rem,7vw,5.5rem)] leading-[1.02] font-semibold tracking-[-0.045em] text-balance"
            id="hero-title"
          >
            <span className="sr-only">{content.title}</span>
            <span aria-hidden="true">
              {content.titlePrefix}
              <DynamicKeyword key={content.titleKeywords[0]} words={content.titleKeywords} />
              {content.titleSuffix}
            </span>
          </h1>
          <p className="mt-7 max-w-[42rem] text-lg leading-8 text-[var(--color-text-muted)] sm:mt-8 sm:text-xl sm:leading-9">
            {content.description}
          </p>
        </div>
        <aside
          aria-label={content.eyebrow}
          className="border-l-2 border-[var(--color-accent)] bg-[var(--color-surface-muted)] px-5 py-4 lg:mb-1"
        >
          <p className="text-sm leading-6 text-[var(--color-text-muted)]">
            {content.notice}
          </p>
        </aside>
      </Container>
    </section>
  );
}
