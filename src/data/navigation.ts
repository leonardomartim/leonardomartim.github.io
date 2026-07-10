import type { Translation } from "../i18n";

export type NavigationItem = {
  href: string;
  labelKey: keyof Translation["navigation"];
};

export const navigationItems: NavigationItem[] = [
  { href: "#intro", labelKey: "intro" },
  { href: "#about", labelKey: "about" },
  { href: "#projects", labelKey: "projects" },
  { href: "#stack", labelKey: "stack" },
  { href: "#architecture", labelKey: "architecture" },
  { href: "#contact", labelKey: "contact" },
];
