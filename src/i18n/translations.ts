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
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    notice: string;
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
    },
    hero: {
      eyebrow: "Leonardo Martim · Desenvolvimento de software",
      title: "Backend, APIs e arquitetura para produtos que precisam evoluir bem.",
      description:
        "Desenvolvedor backend focado em desenhar sistemas claros, integrações confiáveis e entregas com apoio de IA de forma responsável.",
      notice:
        "O portfólio completo está sendo construído seção por seção. Em breve: projetos selecionados, stack e visão de arquitetura.",
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
    },
    hero: {
      eyebrow: "Leonardo Martim · Software development",
      title: "Backend, APIs, and architecture for products built to evolve.",
      description:
        "Backend developer focused on clear systems, reliable integrations, and responsible AI-assisted delivery.",
      notice:
        "The full portfolio is being built section by section. Selected projects, stack, and architecture insights are coming next.",
    },
    footer: {
      status: "Portfolio under continuous development.",
      copyright: "Leonardo Martim",
    },
  },
};
