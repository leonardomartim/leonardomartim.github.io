import type { Translation } from "../i18n";
import type { Language } from "../i18n";
import type { ThemeName } from "../theme";
import { navigationItems } from "../data/navigation";
import { Container } from "./Container";
import { LanguageToggle } from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";
import { TypewriterToggle } from "./TypewriterToggle";

type HeaderProps = {
  currentLanguage: Language;
  currentTheme: ThemeName;
  onLanguageChange: (language: Language) => void;
  onThemeChange: (theme: ThemeName) => void;
  onTypewriterChange: (enabled: boolean) => void;
  translation: Translation;
  typewriterEnabled: boolean;
};

export function Header({
  currentLanguage,
  currentTheme,
  onLanguageChange,
  onThemeChange,
  onTypewriterChange,
  translation,
  typewriterEnabled,
}: HeaderProps) {
  return (
    <header className="border-b border-[var(--color-border)] bg-[var(--color-background)]">
      <Container className="flex flex-col gap-4 py-4 lg:min-h-20 lg:flex-row lg:items-center lg:justify-between lg:py-3">
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-5">
          <a
            className="text-sm font-semibold tracking-[-0.01em] text-[var(--color-text)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-ring)]"
            href="#intro"
          >
            Leonardo Martim
          </a>
          <nav aria-label={translation.header.navigationLabel}>
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[var(--color-text-muted)]">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <a
                    className="rounded-sm transition-colors hover:text-[var(--color-accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-ring)]"
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
          <TypewriterToggle
            disableLabel={translation.typewriterToggle.disableLabel}
            enableLabel={translation.typewriterToggle.enableLabel}
            enabled={typewriterEnabled}
            label={translation.typewriterToggle.label}
            onChange={onTypewriterChange}
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
