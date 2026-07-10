import { LanguageToggle } from "../components/LanguageToggle";
import { useLanguage } from "../i18n";
import { PortfolioLayout } from "../layouts/PortfolioLayout";
import { PortfolioPlaceholder } from "../sections/PortfolioPlaceholder";

export function App() {
  const { language, setLanguage, translation } = useLanguage();

  return (
    <PortfolioLayout>
      <div className="mx-auto flex max-w-3xl justify-end pb-12">
        <LanguageToggle
          currentLanguage={language}
          label={translation.languageToggle.label}
          onLanguageChange={setLanguage}
        />
      </div>
      <PortfolioPlaceholder content={translation.placeholder} />
    </PortfolioLayout>
  );
}
