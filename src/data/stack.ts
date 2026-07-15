export type StackGroup = {
  id: "foundation" | "presentation" | "quality" | "delivery";
  technologies: string[];
};

export const stackGroups: StackGroup[] = [
  { id: "foundation", technologies: ["React", "TypeScript", "Vite", "Tailwind CSS v4"] },
  { id: "presentation", technologies: ["Framer Motion", "Lucide React", "Local i18n", "CSS variables"] },
  { id: "quality", technologies: ["ESLint", "TypeScript build", "Human review", "ADRs"] },
  { id: "delivery", technologies: ["Git", "GitHub Actions", "GitHub Pages"] },
];
