import { languages, type Language } from "../i18n";

type LanguageToggleProps = {
  currentLanguage: Language;
  label: string;
  onLanguageChange: (language: Language) => void;
};

export function LanguageToggle({
  currentLanguage,
  label,
  onLanguageChange,
}: LanguageToggleProps) {
  return (
    <div aria-label={label} className="flex gap-2" role="group">
      {(Object.keys(languages) as Language[]).map((language) => (
        <button
          aria-pressed={language === currentLanguage}
          className="rounded border border-slate-700 px-3 py-1 text-sm font-medium text-slate-100 transition-colors hover:border-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
          key={language}
          onClick={() => onLanguageChange(language)}
          type="button"
        >
          {languages[language].shortLabel}
        </button>
      ))}
    </div>
  );
}
