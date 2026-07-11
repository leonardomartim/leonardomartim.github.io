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
    <div
      aria-label={label}
      className="inline-flex rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] p-0.5"
      role="group"
    >
      {(Object.keys(languages) as Language[]).map((language) => (
        <button
          aria-pressed={language === currentLanguage}
          className="rounded px-2.5 py-1 text-sm font-medium text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-ring)] aria-pressed:bg-[var(--color-accent-muted)] aria-pressed:text-[var(--color-text)]"
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
