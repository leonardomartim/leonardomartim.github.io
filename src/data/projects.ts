import type { ProjectCaseStudy } from "../types/project";

export const projects: ProjectCaseStudy[] = [
  {
    id: "portfolio-foundation",
    title: {
      "pt-BR": "Portfólio bilíngue no GitHub Pages",
      "en-US": "Bilingual portfolio on GitHub Pages",
    },
    summary: {
      "pt-BR": "Base estática e tipada para apresentar experiência de engenharia sem depender de backend ou CMS.",
      "en-US": "A typed static foundation for presenting engineering experience without a backend or CMS.",
    },
    status: "inProgress",
    problem: {
      "pt-BR": "Criar um portfólio acessível a públicos no Brasil e nos EUA, com evidências técnicas revisáveis e publicação compatível com um site de usuário do GitHub Pages.",
      "en-US": "Create a portfolio accessible to audiences in Brazil and the US, with reviewable technical evidence and publishing compatible with a GitHub Pages user site.",
    },
    context: {
      "pt-BR": "Aplicação frontend estática construída seção por seção neste repositório. Estudos de caso profissionais externos ainda aguardam conteúdo real.",
      "en-US": "A static frontend application built section by section in this repository. External professional case studies still await real content.",
    },
    responsibilities: [
      {
        "pt-BR": "Manter conteúdo PT-BR e EN-US em objetos TypeScript locais e tipados.",
        "en-US": "Maintain PT-BR and EN-US content in typed local TypeScript objects.",
      },
      {
        "pt-BR": "Preservar navegação acessível, layout responsivo e quatro temas persistidos localmente.",
        "en-US": "Preserve accessible navigation, responsive layout, and four locally persisted themes.",
      },
      {
        "pt-BR": "Entregar mudanças pequenas com lint, build e revisão humana antes da publicação.",
        "en-US": "Deliver small changes with lint, build, and human review before publishing.",
      },
    ],
    architectureDecisions: [
      {
        "pt-BR": "Vite, React e TypeScript para uma aplicação estática com verificação de tipos.",
        "en-US": "Vite, React, and TypeScript for a static application with type checking.",
      },
      {
        "pt-BR": "Tailwind CSS v4 via plugin do Vite e variáveis CSS para os temas.",
        "en-US": "Tailwind CSS v4 through the Vite plugin and CSS variables for themes.",
      },
      {
        "pt-BR": "i18n local para manter conteúdo bilíngue versionado e revisável.",
        "en-US": "Local i18n to keep bilingual content versioned and reviewable.",
      },
      {
        "pt-BR": "GitHub Actions publica o artefato estático no caminho raiz do GitHub Pages.",
        "en-US": "GitHub Actions publishes the static artifact at the GitHub Pages root path.",
      },
    ],
    technologies: ["Vite", "React", "TypeScript", "Tailwind CSS v4", "GitHub Actions", "GitHub Pages"],
    tradeOffs: [
      {
        "pt-BR": "Conteúdo local elimina serviços externos, mas cada atualização exige mudança de código e nova publicação.",
        "en-US": "Local content removes external services, but every update requires a code change and a new deployment.",
      },
      {
        "pt-BR": "Hospedagem estática simplifica a operação, mas não oferece recursos de backend.",
        "en-US": "Static hosting simplifies operations but provides no backend capabilities.",
      },
    ],
    validation: [
      {
        "pt-BR": "ESLint com npm run lint.",
        "en-US": "ESLint through npm run lint.",
      },
      {
        "pt-BR": "TypeScript e build de produção com npm run build.",
        "en-US": "TypeScript and the production build through npm run build.",
      },
      {
        "pt-BR": "Revisão humana solicitada antes de commit ou push.",
        "en-US": "Human review requested before any commit or push.",
      },
    ],
    repository: {
      label: { "pt-BR": "Ver repositório", "en-US": "View repository" },
      url: "https://github.com/leonardomartim/leonardomartim.github.io",
    },
    liveDemo: {
      label: { "pt-BR": "Demo pública pendente", "en-US": "Public demo pending" },
    },
  },
];
