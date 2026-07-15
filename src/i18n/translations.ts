import type { Language } from "./languages";

export type Translation = {
  header: {
    navigationLabel: string;
    preferencesLabel: string;
    themeLabel: string;
    skipToContent: string;
  };
  languageToggle: {
    label: string;
  };
  typewriter: {
    closeLabel: string;
    modeLabel: string;
    openLabel: string;
  };
  navigation: {
    intro: string;
    about: string;
    projects: string;
    stack: string;
    architecture: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    titleKeywords: string[];
    titlePrefix: string;
    titleSuffix: string;
    description: string;
    notice: string;
  };
  about: {
    eyebrow: string;
    title: string;
    description: string;
    principles: string[];
  };
  bento: {
    title: string;
    items: Array<{ title: string; description: string }>;
  };
  projects: {
    eyebrow: string;
    title: string;
    description: string;
    fields: {
      problem: string;
      context: string;
      responsibilities: string;
      architectureDecisions: string;
      technologies: string;
      tradeOffs: string;
      validation: string;
      links: string;
    };
    statusLabels: Record<"planned" | "inProgress" | "prototype" | "pendingContent", string>;
  };
  stack: {
    eyebrow: string;
    title: string;
    description: string;
    groupLabels: Record<"foundation" | "presentation" | "quality" | "delivery", string>;
  };
  architecture: {
    eyebrow: string;
    title: string;
    description: string;
    steps: Array<{ title: string; description: string }>;
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    availability: string;
  };
  footer: {
    status: string;
    copyright: string;
  };
};

export const translations: Record<Language, Translation> = {
  "pt-BR": {
    header: {
      navigationLabel: "Navegação principal",
      preferencesLabel: "Preferências de visualização",
      themeLabel: "Selecionar tema",
      skipToContent: "Pular para o conteúdo",
    },
    languageToggle: {
      label: "Selecionar idioma",
    },
    typewriter: {
      closeLabel: "Fechar modo de digitação",
      modeLabel: "Modo de escrita",
      openLabel: "Abrir modo de digitação",
    },
    navigation: {
      intro: "Início",
      about: "Sobre",
      projects: "Projetos",
      stack: "Stack",
      architecture: "Arquitetura",
      contact: "Contato",
    },
    hero: {
      eyebrow: "Leonardo Martim · Desenvolvimento de software",
      title: "Backend, APIs e arquitetura para produtos que precisam evoluir.",
      titleKeywords: ["evoluir", "escalar", "crescer", "amadurecer", "integrar"],
      titlePrefix: "Backend, APIs e arquitetura para produtos que precisam ",
      titleSuffix: ".",
      description:
        "Desenvolvedor backend focado em desenhar sistemas claros, integrações confiáveis e entregas com apoio de IA de forma responsável.",
      notice:
        "O portfólio completo está sendo construído seção por seção. Em breve: projetos selecionados, stack e visão de arquitetura.",
    },
    about: {
      eyebrow: "Sobre",
      title: "Sistemas sustentáveis começam com decisões claras.",
      description:
        "Meu foco é backend e arquitetura: entender o problema, definir contratos úteis e criar uma base que o time consiga manter e evoluir.",
      principles: ["Clareza antes de complexidade", "APIs pensadas para quem integra", "Planejamento iterativo e visível"],
    },
    bento: {
      title: "Como eu abordo o trabalho",
      items: [
        { title: "Backend", description: "Serviços, regras de negócio e integrações desenhados com responsabilidade bem definida." },
        { title: "APIs", description: "Contratos consistentes, erros previsíveis e documentação útil para consumidores." },
        { title: "Arquitetura", description: "Decisões proporcionais ao contexto, com atenção à evolução do sistema." },
        { title: "Entrega", description: "Pequenas etapas verificáveis, alinhadas ao que gera valor no produto." },
      ],
    },
    projects: {
      eyebrow: "Projetos",
      title: "Estudos de caso com evidências verificáveis.",
      description: "Cada caso separa contexto, decisões, limites e validação. Experiências profissionais externas permanecem pendentes até que conteúdo real possa ser publicado.",
      fields: {
        problem: "Problema",
        context: "Contexto",
        responsibilities: "Responsabilidades",
        architectureDecisions: "Decisões de arquitetura",
        technologies: "Tecnologias",
        tradeOffs: "Trade-offs",
        validation: "Validação",
        links: "Links",
      },
      statusLabels: { planned: "Planejado", inProgress: "Em andamento", prototype: "Protótipo", pendingContent: "Conteúdo pendente" },
    },
    stack: {
      eyebrow: "Stack",
      title: "Tecnologias que orientam meus estudos e entregas.",
      description: "Agrupadas pelo uso prático comprovado neste repositório; experiência externa por tecnologia permanece pendente de estudos de caso reais.",
      groupLabels: { foundation: "Base da interface", presentation: "Interação e apresentação", quality: "Qualidade e revisão", delivery: "Entrega" },
    },
    architecture: {
      eyebrow: "Arquitetura e agentes",
      title: "IA como apoio ao raciocínio, não substituto de responsabilidade.",
      description: "O fluxo real combina regras em AGENTS.md, decisões em ADRs, implementação assistida por Codex, validação local, revisão humana e publicação pelo GitHub Actions.",
      steps: [
        { title: "Regras e contexto", description: "AGENTS.md define escopo, stack, acessibilidade, documentação e critérios de validação." },
        { title: "Decisões registradas", description: "ADRs documentam escolhas como Vite, Tailwind v4, i18n local, GitHub Pages e Codex." },
        { title: "Implementação assistida", description: "Codex inspeciona o repositório e propõe mudanças pequenas dentro das restrições definidas." },
        { title: "Validação e revisão", description: "ESLint e build TypeScript verificam a mudança; a revisão humana confirma conteúdo e impacto." },
        { title: "Entrega", description: "Após aprovação e push na main, o GitHub Actions constrói e publica o artefato no GitHub Pages." },
      ],
    },
    contact: {
      eyebrow: "Contato",
      title: "Vamos conversar sobre um problema que vale resolver.",
      description: "Os canais públicos de contato estão sendo organizados como parte da evolução deste portfólio.",
      availability: "Informações de contato serão incluídas em breve.",
    },
    footer: {
      status: "Portfólio em construção contínua.",
      copyright: "Leonardo Martim",
    },
  },
  "en-US": {
    header: {
      navigationLabel: "Main navigation",
      preferencesLabel: "Display preferences",
      themeLabel: "Select theme",
      skipToContent: "Skip to content",
    },
    languageToggle: {
      label: "Select language",
    },
    typewriter: {
      closeLabel: "Close typing mode",
      modeLabel: "Writing mode",
      openLabel: "Open typing mode",
    },
    navigation: {
      intro: "Home",
      about: "About",
      projects: "Projects",
      stack: "Stack",
      architecture: "Architecture",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Leonardo Martim · Software development",
      title: "Backend, APIs, and architecture for products built to evolve.",
      titleKeywords: ["evolve", "scale", "grow", "mature", "integrate"],
      titlePrefix: "Backend, APIs, and architecture for products built to ",
      titleSuffix: ".",
      description:
        "Backend developer focused on clear systems, reliable integrations, and responsible AI-assisted delivery.",
      notice:
        "The full portfolio is being built section by section. Selected projects, stack, and architecture insights are coming next.",
    },
    about: {
      eyebrow: "About",
      title: "Sustainable systems start with clear decisions.",
      description:
        "My focus is backend and architecture: understanding the problem, defining useful contracts, and creating a foundation a team can maintain and evolve.",
      principles: ["Clarity before complexity", "APIs designed for integrators", "Iterative, visible planning"],
    },
    bento: {
      title: "How I approach the work",
      items: [
        { title: "Backend", description: "Services, business rules, and integrations with clearly defined responsibilities." },
        { title: "APIs", description: "Consistent contracts, predictable errors, and useful documentation for consumers." },
        { title: "Architecture", description: "Context-proportionate decisions with attention to how a system evolves." },
        { title: "Delivery", description: "Small, verifiable steps aligned with what creates product value." },
      ],
    },
    projects: {
      eyebrow: "Projects",
      title: "Case studies backed by verifiable evidence.",
      description: "Each case separates context, decisions, constraints, and validation. External professional experience remains pending until real content can be published.",
      fields: {
        problem: "Problem",
        context: "Context",
        responsibilities: "Responsibilities",
        architectureDecisions: "Architecture decisions",
        technologies: "Technologies",
        tradeOffs: "Trade-offs",
        validation: "Validation",
        links: "Links",
      },
      statusLabels: { planned: "Planned", inProgress: "In progress", prototype: "Prototype", pendingContent: "Content pending" },
    },
    stack: {
      eyebrow: "Stack",
      title: "Technologies that guide my learning and delivery work.",
      description: "Grouped by practical use demonstrated in this repository; external experience by technology remains pending real case studies.",
      groupLabels: { foundation: "Interface foundation", presentation: "Interaction and presentation", quality: "Quality and review", delivery: "Delivery" },
    },
    architecture: {
      eyebrow: "Architecture and agents",
      title: "AI supports reasoning; it does not replace accountability.",
      description: "The actual workflow combines AGENTS.md rules, decisions in ADRs, Codex-assisted implementation, local validation, human review, and GitHub Actions publishing.",
      steps: [
        { title: "Rules and context", description: "AGENTS.md defines scope, stack, accessibility, documentation, and validation criteria." },
        { title: "Recorded decisions", description: "ADRs document choices including Vite, Tailwind v4, local i18n, GitHub Pages, and Codex." },
        { title: "Assisted implementation", description: "Codex inspects the repository and proposes small changes within the defined constraints." },
        { title: "Validation and review", description: "ESLint and the TypeScript build check changes; human review confirms content and impact." },
        { title: "Delivery", description: "After approval and a push to main, GitHub Actions builds and publishes the artifact to GitHub Pages." },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let’s discuss a problem worth solving.",
      description: "Public contact channels are being organized as part of this portfolio’s ongoing development.",
      availability: "Contact details will be added soon.",
    },
    footer: {
      status: "Portfolio under continuous development.",
      copyright: "Leonardo Martim",
    },
  },
};
