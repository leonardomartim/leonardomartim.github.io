import type { ReactNode } from "react";

type PortfolioLayoutProps = {
  children: ReactNode;
};

export function PortfolioLayout({ children }: PortfolioLayoutProps) {
  return (
    <main className="min-h-screen bg-[var(--color-background)] px-6 py-16 text-[var(--color-text)] transition-colors">
      {children}
    </main>
  );
}
