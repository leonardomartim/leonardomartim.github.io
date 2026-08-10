export type ThemeName = "paperwarm" | "graphite";

export type ThemeToken =
  | "--color-background"
  | "--color-surface"
  | "--color-surface-muted"
  | "--color-text"
  | "--color-text-muted"
  | "--color-accent"
  | "--color-accent-muted"
  | "--color-border"
  | "--color-ring";

export type ThemeTokens = Record<ThemeToken, string>;

export type ThemeDefinition = {
  id: ThemeName;
  label: string;
  tokens: ThemeTokens;
};
