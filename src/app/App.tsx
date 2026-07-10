import { LanguageToggle } from "../components/LanguageToggle";
import { ThemeToggle } from "../components/ThemeToggle";
import { useLanguage } from "../i18n";
import { PortfolioLayout } from "../layouts/PortfolioLayout";
import { PortfolioPlaceholder } from "../sections/PortfolioPlaceholder";
import { useTheme } from "../theme";

export function App() {
  const { language, setLanguage, translation } = useLanguage();
  const { theme, setTheme } = useTheme();

  return (
    <PortfolioLayout>
      <div className="mx-auto flex max-w-3xl flex-wrap justify-end gap-4 pb-12">
        <LanguageToggle
          currentLanguage={language}
          label={translation.languageToggle.label}
          onLanguageChange={setLanguage}
        />
        <ThemeToggle currentTheme={theme} onThemeChange={setTheme} />
      </div>
      <PortfolioPlaceholder content={translation.placeholder} />
    </PortfolioLayout>
  );
}
