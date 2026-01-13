export interface Skill {
  id: number;
  name: string;
  category: "technical" | "analytical" | "soft" | "creative";
}
export const skillsData: Skill[] = [
  { id: 1, name: "Python Programming", category: "technical" },
  { id: 2, name: "JavaScript", category: "technical" },
  { id: 3, name: "Data Analysis", category: "analytical" },
  { id: 4, name: "Communication", category: "soft" },
  { id: 5, name: "Leadership", category: "soft" },
  { id: 6, name: "Problem Solving", category: "analytical" },
  { id: 7, name: "Project Management", category: "soft" },
  { id: 8, name: "Machine Learning", category: "technical" },
  { id: 9, name: "UX/UI Design", category: "creative" },
  { id: 10, name: "Digital Marketing", category: "creative" },
];
