export type StackGroup = {
  name: string;
  technologies: string[];
};

export const stackGroups: StackGroup[] = [
  { name: "Backend", technologies: ["Node.js", "TypeScript", "REST APIs"] },
  { name: "Data", technologies: ["SQL", "PostgreSQL", "Data modeling"] },
  { name: "Delivery", technologies: ["Git", "GitHub Actions", "Docker"] },
  { name: "Quality", technologies: ["Testing", "Documentation", "Code review"] },
];
