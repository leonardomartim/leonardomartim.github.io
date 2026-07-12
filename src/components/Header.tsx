import type { Translation } from "../i18n";
import type { Language } from "../i18n";
import type { ThemeName } from "../theme";
import { navigationItems } from "../data/navigation";
import { Container } from "./Container";
import { LanguageToggle } from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";
import { TypewriterButton } from "./TypewriterButton";

type HeaderProps = {
  currentLanguage: Language;
  currentTheme: ThemeName;
  onLanguageChange: (language: Language) => void;
  onThemeChange: (theme: ThemeName) => void;
  onTypewriterOpen: () => void;
  translation: Translation;
};

export function Header({
  currentLanguage,
  currentTheme,
  onLanguageChange,
  onThemeChange,
  onTypewriterOpen,
  translation,
}: HeaderProps) {
  return (
    <header className="border-b border-[var(--color-border)] bg-[var(--color-background)]">
      <Container className="flex flex-col gap-3 py-3.5 xl:min-h-20 xl:flex-row xl:items-center xl:justify-between xl:py-3">
        <div className="flex flex-col items-start gap-3 lg:flex-row lg:items-center lg:gap-6">
          <a
            className="shrink-0 rounded-sm text-sm font-semibold tracking-[-0.01em] text-[var(--color-text)] transition-colors hover:text-[var(--color-accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-ring)]"
            href="#intro"
          >
            Leonardo Martim
          </a>
          <nav aria-label={translation.header.navigationLabel} className="max-w-full">
            <ul className="flex flex-wrap items-center gap-0.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-1 text-sm text-[var(--color-text-muted)]">
              {navigationItems.map((item) => {
                const isContact = item.href === "#contact";

                return (
                  <li
                    className={
                      isContact
                        ? "ml-0.5 border-l border-[var(--color-border)] pl-1"
                        : undefined
                    }
                    key={item.href}
                  >
                    <a
                      className={`inline-flex rounded-md px-2.5 py-1.5 font-medium transition-colors hover:bg-[var(--color-surface-muted)] hover:text-[var(--color-text)] focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[var(--color-ring)] ${
                        isContact
                          ? "bg-[var(--color-accent-muted)] text-[var(--color-text)] hover:text-[var(--color-accent)]"
                          : ""
                      }`}
                      href={item.href}
                    >
                      {translation.navigation[item.labelKey]}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <div
          aria-label={translation.header.preferencesLabel}
          className="flex flex-wrap items-center gap-2 border-t border-[var(--color-border)] pt-3 xl:border-t-0 xl:border-l xl:pt-0 xl:pl-4"
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
          <TypewriterButton onOpen={onTypewriterOpen} openLabel={translation.typewriter.openLabel} />
        </div>
      </Container>
    </header>
  );
}
