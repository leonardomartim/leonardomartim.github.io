import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { useLanguage } from "../i18n";
import { PortfolioLayout } from "../layouts/PortfolioLayout";
import { HeroSection } from "../sections/HeroSection";
import { useTheme } from "../theme";

export function App() {
  const { language, setLanguage, translation } = useLanguage();
  const { theme, setTheme } = useTheme();

  return (
    <PortfolioLayout
      footer={<Footer content={translation.footer} />}
      header={
        <Header
          currentLanguage={language}
          currentTheme={theme}
          onLanguageChange={setLanguage}
          onThemeChange={setTheme}
          translation={translation}
        />
      }
      skipToContentLabel={translation.header.skipToContent}
    >
      <HeroSection content={translation.hero} />
    </PortfolioLayout>
  );
}
