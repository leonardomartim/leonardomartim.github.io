import type { ThemeName } from "../types/theme";
import { defaultTheme, themes } from "./themes";

const themeStorageKey = "leonardo-martim.theme";

function isTheme(value: string | null): value is ThemeName {
  return value !== null && value in themes;
}

export function loadTheme(): ThemeName {
  if (typeof window === "undefined") {
    return defaultTheme;
  }

  const storedTheme = window.localStorage.getItem(themeStorageKey);

  return isTheme(storedTheme) ? storedTheme : defaultTheme;
}

export function saveTheme(theme: ThemeName) {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(themeStorageKey, theme);
  }
}
