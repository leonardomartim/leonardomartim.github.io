import type { ReactNode } from "react";

type PortfolioLayoutProps = {
  children: ReactNode;
  footer: ReactNode;
  header: ReactNode;
  skipToContentLabel: string;
};

export function PortfolioLayout({ children, footer, header, skipToContentLabel }: PortfolioLayoutProps) {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)]">
      <a
        className="sr-only fixed top-4 left-4 z-50 rounded bg-[var(--color-surface)] px-4 py-2 text-sm font-medium text-[var(--color-text)] shadow-sm focus:not-sr-only focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-ring)]"
        href="#main-content"
      >
        {skipToContentLabel}
      </a>
      {header}
      <main id="main-content">{children}</main>
      {footer}
    </div>
  );
}
