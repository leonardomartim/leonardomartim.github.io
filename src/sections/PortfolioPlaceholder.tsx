import type { Translation } from "../i18n";

type PortfolioPlaceholderProps = {
  content: Translation["placeholder"];
};

export function PortfolioPlaceholder({ content }: PortfolioPlaceholderProps) {
  return (
    <section className="mx-auto flex max-w-3xl flex-col gap-6">
      <p className="text-sm font-medium uppercase tracking-wide text-[var(--color-accent)]">
        {content.name}
      </p>
      <div className="space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          {content.headline}
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-[var(--color-text-muted)]">
          {content.status}
        </p>
      </div>
    </section>
  );
}
