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
    plannedLabel: string;
    progressLabel: string;
    items: Array<{ title: string; description: string; status: "planned" | "inProgress" }>;
  };
  stack: {
    eyebrow: string;
    title: string;
    description: string;
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
      title: "Casos em preparação para publicação.",
      description: "Os próximos estudos de caso vão detalhar contexto, decisões técnicas e aprendizados sem expor informações confidenciais.",
      plannedLabel: "Planejado",
      progressLabel: "Em andamento",
      items: [
        { title: "Estudo de caso de API", description: "Documentação de uma abordagem de API orientada a contratos e manutenção.", status: "inProgress" },
        { title: "Fluxo de integração", description: "Exemplo prático de integração entre serviços, com foco em confiabilidade e observabilidade.", status: "planned" },
      ],
    },
    stack: {
      eyebrow: "Stack",
      title: "Tecnologias que orientam meus estudos e entregas.",
      description: "Esta lista representa áreas de trabalho e aprendizado contínuo; detalhes de experiência por projeto serão adicionados aos estudos de caso.",
    },
    architecture: {
      eyebrow: "Arquitetura e agentes",
      title: "IA como apoio ao raciocínio, não substituto de responsabilidade.",
      description: "Uso ferramentas assistidas por IA para acelerar exploração, revisão e documentação, mantendo decisões técnicas, validação e contexto sob controle humano.",
      steps: [
        { title: "Contextualizar", description: "Definir objetivo, restrições e critérios de aceitação antes de delegar uma tarefa." },
        { title: "Verificar", description: "Revisar resultados, testar hipóteses e confirmar impactos antes de incorporar mudanças." },
        { title: "Registrar", description: "Transformar decisões e aprendizados em documentação que o time possa reutilizar." },
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
      title: "Case studies being prepared for publication.",
      description: "The next case studies will cover context, technical decisions, and lessons learned without exposing confidential information.",
      plannedLabel: "Planned",
      progressLabel: "In progress",
      items: [
        { title: "API case study", description: "Documentation of a contract-first API approach designed for long-term maintenance.", status: "inProgress" },
        { title: "Integration flow", description: "A practical service-integration example focused on reliability and observability.", status: "planned" },
      ],
    },
    stack: {
      eyebrow: "Stack",
      title: "Technologies that guide my learning and delivery work.",
      description: "This list represents active work and continuous-learning areas; project-level experience details will be added to case studies.",
    },
    architecture: {
      eyebrow: "Architecture and agents",
      title: "AI supports reasoning; it does not replace accountability.",
      description: "I use AI-assisted tools to speed up exploration, review, and documentation while keeping technical decisions, validation, and context under human control.",
      steps: [
        { title: "Set context", description: "Define the objective, constraints, and acceptance criteria before delegating a task." },
        { title: "Verify", description: "Review results, test assumptions, and confirm impact before adopting a change." },
        { title: "Record", description: "Turn decisions and lessons into documentation the team can reuse." },
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
