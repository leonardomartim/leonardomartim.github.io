import { themeList, type ThemeName } from "../theme";

type ThemeToggleProps = {
  currentTheme: ThemeName;
  onThemeChange: (theme: ThemeName) => void;
};

export function ThemeToggle({ currentTheme, onThemeChange }: ThemeToggleProps) {
  return (
    <div aria-label="Theme" className="flex flex-wrap gap-2" role="group">
      {themeList.map((theme) => {
        const isActive = theme.id === currentTheme;

        return (
          <button
            aria-pressed={isActive}
            className="rounded border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-sm font-medium text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-ring)] aria-pressed:border-[var(--color-accent)] aria-pressed:bg-[var(--color-accent-muted)]"
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
