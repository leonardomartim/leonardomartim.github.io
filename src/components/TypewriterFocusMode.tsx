import { useEffect, useRef } from "react";
import { X } from "lucide-react";

import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { useTypewriter } from "../hooks/useTypewriter";
import type { Translation } from "../i18n";

type TypewriterFocusModeProps = {
  content: Translation["hero"];
  labels: Translation["typewriter"];
  onClose: () => void;
  open: boolean;
};

function AnimatedParagraph({ text }: { text: string }) {
  const { displayedText, isAnimating } = useTypewriter(text);

  return (
    <span aria-hidden="true" className="absolute inset-0">
      {displayedText}
      {isAnimating && <span className="text-[var(--color-accent)]">_</span>}
    </span>
  );
}

export function TypewriterFocusMode({ content, labels, onClose, open }: TypewriterFocusModeProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const dialog = dialogRef.current;

    if (open && !dialog?.open) {
      dialog?.showModal();
    } else if (!open && dialog?.open) {
      dialog.close();
    }
  }, [open]);

  const shouldType = open && !prefersReducedMotion;

  return (
    <dialog
      aria-labelledby="typewriter-focus-title"
      className="m-auto h-dvh w-screen max-h-none max-w-none border-0 bg-transparent p-4 text-[var(--color-text)] backdrop:bg-black/70 open:grid open:place-items-center sm:p-8"
      onClose={onClose}
      ref={dialogRef}
    >
      <article className="relative flex h-[min(88dvh,62rem)] w-full max-w-[44rem] flex-col overflow-y-auto overscroll-contain border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-2xl sm:p-10 lg:p-14">
        <button
          aria-label={labels.closeLabel}
          className="absolute top-5 right-5 rounded p-2 text-[var(--color-text-muted)] transition-colors hover:bg-[var(--color-surface-muted)] hover:text-[var(--color-text)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-ring)]"
          onClick={() => dialogRef.current?.close()}
          type="button"
        >
          <X aria-hidden="true" className="h-5 w-5" />
        </button>

        <header className="border-b border-[var(--color-border)] pb-6 pr-12">
          <p className="text-xs font-semibold tracking-[0.18em] text-[var(--color-accent)] uppercase">
            {labels.modeLabel}
          </p>
          <p className="mt-2 text-sm text-[var(--color-text-muted)]">{content.eyebrow}</p>
        </header>

        <div className="flex flex-1 flex-col justify-center py-10 sm:py-14">
          <h2 className="max-w-[20ch] text-3xl leading-tight font-semibold tracking-[-0.03em] text-balance sm:text-4xl" id="typewriter-focus-title">
            {content.title}
          </h2>
          <div className="relative mt-8 max-w-[38rem] text-lg leading-8 text-[var(--color-text-muted)]">
            {shouldType ? (
              <>
                <p className="sr-only">{content.description}</p>
                <p aria-hidden="true" className="invisible">{content.description}</p>
                <AnimatedParagraph key={content.description} text={content.description} />
              </>
            ) : (
              <p>{content.description}</p>
            )}
          </div>
        </div>

        <footer className="border-t border-[var(--color-border)] pt-6 text-sm leading-6 text-[var(--color-text-muted)]">
          {content.notice}
        </footer>
      </article>
    </dialog>
  );
}
