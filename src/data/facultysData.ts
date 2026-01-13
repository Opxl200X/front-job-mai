export interface Faculty {
  id: number;
  name: string;       // Name (English)
  thaiName: string;   // Thai Name
  color: string;
}

export const facultiesData: Faculty[] = [
{ id: 1, name: "Engineering", thaiName: "วิศวกรรมศาสตร์", color: "blue" },
{ id: 2, name: "Science", thaiName: "วิทยาศาสตร์", color: "green" },
{ id: 3, name: "Information Technology", thaiName: "เทคโนโลยีสารสนเทศ", color: "indigo" },
{ id: 4, name: "Business Administration", thaiName: "บริหารธุรกิจ", color: "purple" },
{ id: 5, name: "Arts & Humanities", thaiName: "ศิลปศาสตร์", color: "pink" },

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
