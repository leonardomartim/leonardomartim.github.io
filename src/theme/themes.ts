import type { ThemeDefinition, ThemeName } from "../types/theme";

export const themes: Record<ThemeName, ThemeDefinition> = {
  paperwarm: {
    id: "paperwarm",
    label: "Paperwarm",
    tokens: {
      "--color-background": "#f8f2e7",
      "--color-surface": "#fffaf1",
      "--color-surface-muted": "#efe3cd",
      "--color-text": "#3d2d20",
      "--color-text-muted": "#795f4b",
      "--color-accent": "#aa4a24",
      "--color-accent-muted": "#f2d4c4",
      "--color-border": "#d9c5a9",
      "--color-ring": "#c65a2e",
    },
  },
  graphite: {
    id: "graphite",
    label: "Graphite",
    tokens: {
      "--color-background": "#18191b",
      "--color-surface": "#242629",
      "--color-surface-muted": "#303338",
      "--color-text": "#f3f4f6",
      "--color-text-muted": "#b1b5bc",
      "--color-accent": "#8ab4f8",
      "--color-accent-muted": "#263b5b",
      "--color-border": "#454a52",
      "--color-ring": "#b7d0ff",
    },
  },
};

export const themeList = Object.values(themes);
export const defaultTheme: ThemeName = "graphite";
