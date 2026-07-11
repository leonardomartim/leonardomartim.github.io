import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { useLanguage } from "../i18n";
import { useTypewriterMode } from "../hooks/useTypewriterMode";
import { PortfolioLayout } from "../layouts/PortfolioLayout";
import { AboutSection } from "../sections/AboutSection";
import { ArchitectureSection } from "../sections/ArchitectureSection";
import { BentoSection } from "../sections/BentoSection";
import { ContactSection } from "../sections/ContactSection";
import { HeroSection } from "../sections/HeroSection";
import { ProjectsSection } from "../sections/ProjectsSection";
import { StackSection } from "../sections/StackSection";
import { useTheme } from "../theme";

export function App() {
  const { language, setLanguage, translation } = useLanguage();
  const { theme, setTheme } = useTheme();
  const { typewriterEnabled, setTypewriterMode } = useTypewriterMode();

  return (
    <PortfolioLayout
      footer={<Footer content={translation.footer} />}
      header={
        <Header
          currentLanguage={language}
          currentTheme={theme}
          onLanguageChange={setLanguage}
          onThemeChange={setTheme}
          onTypewriterChange={setTypewriterMode}
          translation={translation}
          typewriterEnabled={typewriterEnabled}
        />
      }
      skipToContentLabel={translation.header.skipToContent}
    >
      <HeroSection content={translation.hero} typewriterEnabled={typewriterEnabled} />
      <AboutSection content={translation.about} />
      <BentoSection content={translation.bento} />
      <ProjectsSection content={translation.projects} />
      <StackSection content={translation.stack} />
      <ArchitectureSection content={translation.architecture} />
      <ContactSection content={translation.contact} />
    </PortfolioLayout>
  );
}
