type TypewriterToggleProps = {
  disableLabel: string;
  enableLabel: string;
  enabled: boolean;
  label: string;
  onChange: (enabled: boolean) => void;
};

export function TypewriterToggle({
  disableLabel,
  enableLabel,
  enabled,
  label,
  onChange,
}: TypewriterToggleProps) {
  return (
    <button
      aria-label={enabled ? disableLabel : enableLabel}
      aria-pressed={enabled}
      className="rounded border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-sm font-medium text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-ring)] aria-pressed:border-[var(--color-accent)] aria-pressed:bg-[var(--color-accent-muted)]"
      onClick={() => onChange(!enabled)}
      type="button"
    >
      {label}
    </button>
  );
}
