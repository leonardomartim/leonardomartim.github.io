import { ExternalLink } from "lucide-react";

import { Container } from "../components/Container";
import { projects } from "../data/projects";
import type { Language, Translation } from "../i18n";
import type { LocalizedText, ProjectLink } from "../types/project";

type ProjectsSectionProps = {
  content: Translation["projects"];
  language: Language;
};

type DetailProps = {
  label: string;
  values: LocalizedText[];
  language: Language;
};

function DetailList({ label, values, language }: DetailProps) {
  return (
    <div>
      <dt className="text-sm font-semibold text-[var(--color-text)]">{label}</dt>
      <dd>
        <ul className="mt-2 space-y-2 text-sm leading-6 text-[var(--color-text-muted)]">
          {values.map((value) => <li className="before:mr-2 before:text-[var(--color-accent)] before:content-['•']" key={value[language]}>{value[language]}</li>)}
        </ul>
      </dd>
    </div>
  );
}

function CaseStudyLink({ link, language }: { link: ProjectLink; language: Language }) {
  if (!link.url) {
    return <span className="text-sm text-[var(--color-text-muted)]">{link.label[language]}</span>;
  }

  return (
    <a className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-accent)] underline-offset-4 hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-focus)]" href={link.url} rel="noreferrer" target="_blank">
      {link.label[language]} <ExternalLink aria-hidden="true" className="h-4 w-4" />
    </a>
  );
}

export function ProjectsSection({ content, language }: ProjectsSectionProps) {
  return (
    <section aria-labelledby="projects-title" className="border-y border-[var(--color-border)] bg-[var(--color-surface-muted)] py-16 sm:py-20" id="projects">
      <Container>
        <p className="text-sm font-semibold tracking-[0.14em] text-[var(--color-accent)] uppercase">{content.eyebrow}</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl" id="projects-title">{content.title}</h2>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--color-text-muted)]">{content.description}</p>
        <div className="mt-8 space-y-6">
          {projects.map((project) => (
            <article className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8" key={project.id}>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold">{project.title[language]}</h3>
                  <p className="mt-3 max-w-3xl leading-7 text-[var(--color-text-muted)]">{project.summary[language]}</p>
                </div>
                <span className="w-fit shrink-0 rounded-full bg-[var(--color-accent-muted)] px-3 py-1 text-xs font-semibold">
                  {content.statusLabels[project.status]}
                </span>
              </div>
              <dl className="mt-8 grid gap-6 border-t border-[var(--color-border)] pt-6 lg:grid-cols-2">
                <div>
                  <dt className="text-sm font-semibold">{content.fields.problem}</dt>
                  <dd className="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">{project.problem[language]}</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold">{content.fields.context}</dt>
                  <dd className="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">{project.context[language]}</dd>
                </div>
                <DetailList label={content.fields.responsibilities} language={language} values={project.responsibilities} />
                <DetailList label={content.fields.architectureDecisions} language={language} values={project.architectureDecisions} />
                <div>
                  <dt className="text-sm font-semibold">{content.fields.technologies}</dt>
                  <dd className="mt-3 flex flex-wrap gap-2">{project.technologies.map((technology) => <span className="rounded-full bg-[var(--color-surface-muted)] px-3 py-1 text-sm text-[var(--color-text-muted)]" key={technology}>{technology}</span>)}</dd>
                </div>
                <DetailList label={content.fields.tradeOffs} language={language} values={project.tradeOffs} />
                <DetailList label={content.fields.validation} language={language} values={project.validation} />
                <div>
                  <dt className="text-sm font-semibold">{content.fields.links}</dt>
                  <dd className="mt-3 flex flex-wrap gap-x-6 gap-y-3"><CaseStudyLink language={language} link={project.repository} /><CaseStudyLink language={language} link={project.liveDemo} /></dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
