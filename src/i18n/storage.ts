import { defaultLanguage, type Language } from "./languages";

const languageStorageKey = "leonardo-martim.language";

function isLanguage(value: string | null): value is Language {
  return value === "pt-BR" || value === "en-US";
}

export function loadLanguage(): Language {
  if (typeof window === "undefined") {
    return defaultLanguage;
  }

  const storedLanguage = window.localStorage.getItem(languageStorageKey);

  return isLanguage(storedLanguage) ? storedLanguage : defaultLanguage;
}

export function saveLanguage(language: Language) {
  window.localStorage.setItem(languageStorageKey, language);
}
