import { Keyboard } from "lucide-react";

type TypewriterButtonProps = {
  openLabel: string;
  onOpen: () => void;
};

export function TypewriterButton({ openLabel, onOpen }: TypewriterButtonProps) {
  return (
    <button
      aria-label={openLabel}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-ring)]"
      onClick={onOpen}
      type="button"
    >
      <Keyboard aria-hidden="true" className="h-[1.125rem] w-[1.125rem]" strokeWidth={1.75} />
    </button>
  );
}
