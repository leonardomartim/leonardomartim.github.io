import { useState } from "react";

import { type Language } from "./languages";
import { loadLanguage, saveLanguage } from "./storage";
import { translations } from "./translations";

export function useLanguage() {
  const [language, setCurrentLanguage] = useState<Language>(loadLanguage);

  function setLanguage(nextLanguage: Language) {
    setCurrentLanguage(nextLanguage);
    saveLanguage(nextLanguage);
  }

  return {
    language,
    setLanguage,
    translation: translations[language],
  };
}
