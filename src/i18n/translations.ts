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
    cta: string;
    email: string;
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
      title: "Software bem pensado para ideias que precisam sair do papel.",
      description:
        "Desenvolvedor focado em entregar sistemas para empresas B2B e clientes B2C, combinando arquitetura, interfaces, APIs e desenvolvimento assistido por IA para transformar ideias em produtos digitais.",
      notice:
        "Do planejamento à entrega, com decisões técnicas que acompanham o objetivo de cada produto.",
    },
    about: {
      eyebrow: "Sobre",
      title: "Estudante de Sistemas de Informação em evolução para o mercado.",
      description:
        "Meu foco é construir uma base sólida em engenharia de software, arquitetura, desenvolvimento de produtos digitais e uso responsável de IA no processo de criação.",
      principles: ["Formação em Sistemas de Informação", "Construção prática de projetos reais", "Visão de produto, código e entrega"],
    },
    bento: {
      title: "Como eu abordo o trabalho",
      items: [
        { title: "Produtos digitais", description: "Sites, apps e sistemas orientados por objetivos claros de negócio e experiência." },
        { title: "APIs e integrações", description: "Contratos consistentes e conexões confiáveis entre serviços, produtos e pessoas." },
        { title: "Arquitetura", description: "Decisões proporcionais ao contexto, com atenção à evolução do sistema." },
        { title: "Entrega", description: "Pequenas etapas verificáveis, alinhadas ao que gera valor no produto." },
      ],
    },
    projects: {
      eyebrow: "Projetos",
      title: "Projetos que conectam contexto, produto e engenharia.",
      description: "Cada caso apresenta o problema, as decisões técnicas, os limites e como a solução foi validada.",
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
      title: "Tecnologias para criar produtos digitais de ponta a ponta.",
      description: "Uma base prática para construir interfaces, integrações, qualidade e entregas consistentes.",
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
      title: "Vamos conversar?",
      description: "Se você precisa criar um site, aplicativo, sistema interno, API ou transformar uma ideia em produto digital, posso ajudar a estruturar e desenvolver uma solução clara, funcional e bem pensada.",
      cta: "Enviar e-mail",
      email: "contact.martim@gmail.com",
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
      title: "Thoughtful software for ideas ready to take shape.",
      description:
        "Developer focused on delivering systems for B2B companies and B2C clients, combining architecture, interfaces, APIs, and AI-assisted development to turn ideas into digital products.",
      notice:
        "From planning to delivery, with technical decisions that support each product’s goals.",
    },
    about: {
      eyebrow: "About",
      title: "Information Systems student building market-ready software skills.",
      description:
        "My focus is to build a solid foundation in software engineering, architecture, digital product development, and responsible AI-assisted workflows.",
      principles: ["Information Systems background", "Practical real-world project building", "Product, code, and delivery mindset"],
    },
    bento: {
      title: "How I approach the work",
      items: [
        { title: "Digital products", description: "Websites, apps, and systems shaped by clear business and experience goals." },
        { title: "APIs and integrations", description: "Consistent contracts and reliable connections between services, products, and people." },
        { title: "Architecture", description: "Context-proportionate decisions with attention to how a system evolves." },
        { title: "Delivery", description: "Small, verifiable steps aligned with what creates product value." },
      ],
    },
    projects: {
      eyebrow: "Projects",
      title: "Projects that connect context, product, and engineering.",
      description: "Each case presents the problem, technical decisions, constraints, and how the solution was validated.",
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
      title: "Technologies for building end-to-end digital products.",
      description: "A practical foundation for building interfaces, integrations, quality, and consistent delivery.",
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
      title: "Let’s talk?",
      description: "If you need a website, app, internal system, API, or want to turn an idea into a digital product, I can help structure and build a clear, functional, and well-designed solution.",
      cta: "Send email",
      email: "contact.martim@gmail.com",
    },
    footer: {
      status: "Portfolio under continuous development.",
      copyright: "Leonardo Martim",
    },
  },
};
