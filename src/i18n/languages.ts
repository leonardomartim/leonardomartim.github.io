export const languages = {
  "pt-BR": {
    label: "Português (Brasil)",
    shortLabel: "PT",
  },
  "en-US": {
    label: "English (United States)",
    shortLabel: "EN",
  },
} as const;

export type Language = keyof typeof languages;

export const defaultLanguage: Language = "pt-BR";
