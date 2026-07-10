import type { Translation } from "../i18n";

export type NavigationItem = {
  href: string;
  labelKey: keyof Translation["navigation"];
};

export const navigationItems: NavigationItem[] = [
  { href: "#intro", labelKey: "intro" },
];
