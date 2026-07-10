import { siteProfile } from "../data/siteProfile";

export function PortfolioPlaceholder() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col gap-6">
      <p className="text-sm font-medium uppercase tracking-wide text-cyan-300">
        {siteProfile.name}
      </p>
      <div className="space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          {siteProfile.headline}
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-slate-300">
          {siteProfile.status}
        </p>
      </div>
    </section>
  );
}
