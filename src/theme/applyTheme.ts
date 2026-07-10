import type { ThemeDefinition } from "../types/theme";

export function applyTheme(theme: ThemeDefinition) {
  const root = document.documentElement;

  root.dataset.theme = theme.id;

  Object.entries(theme.tokens).forEach(([token, value]) => {
    root.style.setProperty(token, value);
  });
}
