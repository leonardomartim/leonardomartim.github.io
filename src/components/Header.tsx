import type { Translation } from "../i18n";
import type { Language } from "../i18n";
import type { ThemeName } from "../theme";
import { navigationItems } from "../data/navigation";
import { Container } from "./Container";
import { LanguageToggle } from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";

type HeaderProps = {
  currentLanguage: Language;
  currentTheme: ThemeName;
  onLanguageChange: (language: Language) => void;
  onThemeChange: (theme: ThemeName) => void;
  translation: Translation;
};

export function Header({
  currentLanguage,
  currentTheme,
  onLanguageChange,
  onThemeChange,
  translation,
}: HeaderProps) {
  return (
    <header className="border-b border-[var(--color-border)] bg-[var(--color-background)]">
      <Container className="flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center justify-between gap-5">
          <a
            className="text-sm font-semibold tracking-tight text-[var(--color-text)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-ring)]"
            href="#intro"
          >
            Leonardo Martim
          </a>
          <nav aria-label={translation.header.navigationLabel}>
            <ul className="flex items-center gap-4 text-sm text-[var(--color-text-muted)]">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <a
                    className="rounded-sm hover:text-[var(--color-accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-ring)]"
                    href={item.href}
                  >
                    {translation.navigation[item.labelKey]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div
          aria-label={translation.header.preferencesLabel}
          className="flex flex-wrap items-center gap-3"
          role="group"
        >
          <LanguageToggle
            currentLanguage={currentLanguage}
            label={translation.languageToggle.label}
            onLanguageChange={onLanguageChange}
          />
          <ThemeToggle
            currentTheme={currentTheme}
            label={translation.header.themeLabel}
            onThemeChange={onThemeChange}
          />
        </div>
      </Container>
    </header>
  );
}
