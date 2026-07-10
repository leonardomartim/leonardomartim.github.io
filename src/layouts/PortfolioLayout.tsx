import type { ReactNode } from "react";

type PortfolioLayoutProps = {
  children: ReactNode;
};

export function PortfolioLayout({ children }: PortfolioLayoutProps) {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-slate-100">
      {children}
    </main>
  );
}
