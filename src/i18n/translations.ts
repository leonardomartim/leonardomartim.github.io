import type { Language } from "./languages";

export type Translation = {
  languageToggle: {
    label: string;
  };
  placeholder: {
    name: string;
    headline: string;
    status: string;
  };
};

export const translations: Record<Language, Translation> = {
  "pt-BR": {
    languageToggle: {
      label: "Selecionar idioma",
    },
    placeholder: {
      name: "Leonardo Martim",
      headline:
        "Desenvolvedor backend com foco em APIs, arquitetura e entregas assistidas por IA.",
      status:
        "Base do portfólio em desenvolvimento. A experiência completa incluirá conteúdo bilíngue, interface com temas, projetos selecionados e detalhes do fluxo de engenharia.",
    },
  },
  "en-US": {
    languageToggle: {
      label: "Select language",
    },
    placeholder: {
      name: "Leonardo Martim",
      headline: "Backend developer focused on APIs, architecture, and AI-assisted delivery.",
      status:
        "Portfolio baseline in progress. The full experience will add bilingual content, themed UI, selected projects, and engineering workflow details.",
    },
  },
};
