import { Mail } from "lucide-react";

import { Container } from "../components/Container";
import type { Translation } from "../i18n";

type ContactSectionProps = {
  content: Translation["contact"];
};

export function ContactSection({ content }: ContactSectionProps) {
  return (
    <section aria-labelledby="contact-title" className="py-16 sm:py-20" id="contact">
      <Container>
        <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-10">
          <Mail aria-hidden="true" className="h-6 w-6 text-[var(--color-accent)]" />
          <p className="mt-6 text-sm font-semibold tracking-[0.14em] text-[var(--color-accent)] uppercase">{content.eyebrow}</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl" id="contact-title">{content.title}</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--color-text-muted)]">{content.description}</p>
          <p className="mt-6 text-sm leading-6 text-[var(--color-text-muted)]">{content.availability}</p>
        </div>
      </Container>
    </section>
  );
}
