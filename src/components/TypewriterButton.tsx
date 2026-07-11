type TypewriterButtonProps = {
  label: string;
  openLabel: string;
  onOpen: () => void;
};

export function TypewriterButton({ label, openLabel, onOpen }: TypewriterButtonProps) {
  return (
    <button
      aria-label={openLabel}
      className="rounded border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-sm font-medium text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-ring)]"
      onClick={onOpen}
      type="button"
    >
      {label}
    </button>
  );
}
