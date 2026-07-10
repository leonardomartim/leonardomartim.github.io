import type { Translation } from "../i18n";
import { Container } from "./Container";

type FooterProps = {
  content: Translation["footer"];
};

export function Footer({ content }: FooterProps) {
  return (
    <footer className="border-t border-[var(--color-border)] py-6">
      <Container className="flex flex-col gap-2 text-sm text-[var(--color-text-muted)] sm:flex-row sm:justify-between">
        <p>{content.status}</p>
        <p>© {new Date().getFullYear()} {content.copyright}</p>
      </Container>
    </footer>
  );
}
