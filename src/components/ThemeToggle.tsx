import { themeList, type ThemeName } from "../theme";

type ThemeToggleProps = {
  currentTheme: ThemeName;
  label: string;
  onThemeChange: (theme: ThemeName) => void;
};

export function ThemeToggle({ currentTheme, label, onThemeChange }: ThemeToggleProps) {
  return (
    <div
      aria-label={label}
      className="inline-flex flex-wrap rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] p-0.5"
      role="group"
    >
      {themeList.map((theme) => {
        const isActive = theme.id === currentTheme;

        return (
          <button
            aria-pressed={isActive}
            className="rounded px-2.5 py-1 text-sm font-medium text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-ring)] aria-pressed:bg-[var(--color-accent-muted)] aria-pressed:text-[var(--color-text)]"
            key={theme.id}
            onClick={() => onThemeChange(theme.id)}
            type="button"
          >
            {theme.label}
          </button>
        );
      })}
    </div>
  );
}
