import { useEffect, useState } from "react";

import type { ThemeName } from "../types/theme";
import { applyTheme } from "./applyTheme";
import { loadTheme, saveTheme } from "./storage";
import { themes } from "./themes";

export function useTheme() {
  const [theme, setCurrentTheme] = useState<ThemeName>(loadTheme);

  useEffect(() => {
    applyTheme(themes[theme]);
  }, [theme]);

  function setTheme(nextTheme: ThemeName) {
    setCurrentTheme(nextTheme);
    saveTheme(nextTheme);
  }

  return { theme, setTheme };
}
