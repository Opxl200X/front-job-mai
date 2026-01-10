export interface Lesson {
  id: number;
  title: string;
  course: string;
  order: number;
  duration: number;
}

export const lessonsData: Lesson[] = [
  { id: 1, title: "What is UX Design?", course: "Introduction to UX Design", order: 1, duration: 45 },
  { id: 2, title: "Understanding User Needs", course: "Introduction to UX Design", order: 2, duration: 60 },
  { id: 3, title: "User Research Methods", course: "Introduction to UX Design", order: 3, duration: 50 },
  { id: 4, title: "Create User Personas", course: "Introduction to UX Design", order: 4, duration: 55 },
  { id: 5, title: "Wireframing Basics", course: "Introduction to UX Design", order: 5, duration: 45 },
  { id: 6, title: "Prototyping Fundamentals", course: "Introduction to UX Design", order: 6, duration: 60 },
  { id: 7, title: "Usability Testing", course: "Introduction to UX Design", order: 7, duration: 50 },
  { id: 8, title: "Design Iteration Process", course: "Introduction to UX Design", order: 8, duration: 40 },
];

export const sidebarItems = [
  { id: "dashboard", label: "Dashboard", icon: "LayoutDashboard", path: "/" },
  { id: "users", label: "Users", icon: "Users", path: "/users" },
  { id: "faculty", label: "Faculty", icon: "GraduationCap", path: "/faculty" },
  { id: "majors", label: "Majors", icon: "BookOpen", path: "/majors" },
  { id: "skills", label: "Skills", icon: "Lightbulb", path: "/skills" },
  { id: "careers", label: "Careers", icon: "Briefcase", path: "/careers" },
  { id: "courses", label: "Courses", icon: "FolderOpen", path: "/courses" },
  { id: "lessons", label: "Lessons", icon: "FileText", path: "/lessons" },
  { id: "news", label: "News", icon: "Newspaper", path: "/news" },
] as const;

export type SidebarItemId = typeof sidebarItems[number]["id"];
