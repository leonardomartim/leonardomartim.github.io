import type { ThemeDefinition, ThemeName } from "../types/theme";

export const themes: Record<ThemeName, ThemeDefinition> = {
  alpine: {
    id: "alpine",
    label: "Alpine",
    tokens: {
      "--color-background": "#f4f8f7",
      "--color-surface": "#ffffff",
      "--color-surface-muted": "#e6efec",
      "--color-text": "#17312b",
      "--color-text-muted": "#557168",
      "--color-accent": "#087f5b",
      "--color-accent-muted": "#cce8dd",
      "--color-border": "#bfd4cc",
      "--color-ring": "#0ca678",
    },
  },
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
  terminal: {
    id: "terminal",
    label: "Terminal",
    tokens: {
      "--color-background": "#07110c",
      "--color-surface": "#0c1a12",
      "--color-surface-muted": "#11291a",
      "--color-text": "#d9ffe5",
      "--color-text-muted": "#8fb79b",
      "--color-accent": "#42e878",
      "--color-accent-muted": "#174c28",
      "--color-border": "#28643b",
      "--color-ring": "#75f59d",
    },
  },
};

export const themeList = Object.values(themes);
export const defaultTheme: ThemeName = "alpine";
