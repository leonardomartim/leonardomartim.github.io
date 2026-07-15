import type { Language } from "../i18n/languages";

export type ProjectStatus = "planned" | "inProgress" | "prototype" | "pendingContent";

export type LocalizedText = Record<Language, string>;

export type ProjectLink = {
  label: LocalizedText;
  url?: string;
};

export type ProjectCaseStudy = {
  id: string;
  title: LocalizedText;
  summary: LocalizedText;
  status: ProjectStatus;
  problem: LocalizedText;
  context: LocalizedText;
  responsibilities: LocalizedText[];
  architectureDecisions: LocalizedText[];
  technologies: string[];
  tradeOffs: LocalizedText[];
  validation: LocalizedText[];
  repository: ProjectLink;
  liveDemo: ProjectLink;
};
