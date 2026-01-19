// src/data/coursesData.ts
export interface Course {
  id: number;
  image: string;
  title: string;
  career: string;
  level: "beginner" | "intermediate" | "advanced";
  hours: number;
  description?: string;
  externalUrl?: string;
  order?: number;
  skillsTaught?: string;
}

export const coursesData: Course[] = [
  { id: 1, image: "/placeholder.svg", title: "Introduction to UX Design", career: "UX Designer", level: "beginner", hours: 8 },
  { id: 2, image: "/placeholder.svg", title: "Figma for Beginners", career: "UX Designer", level: "beginner", hours: 6 },
  { id: 3, image: "/placeholder.svg", title: "Advanced UX Research Methods", career: "UX Designer", level: "intermediate", hours: 10 },
  { id: 4, image: "/placeholder.svg", title: "Python for Data Science", career: "Data Scientist", level: "beginner", hours: 15 },
  { id: 5, image: "/placeholder.svg", title: "Machine Learning Fundamentals", career: "Data Scientist", level: "intermediate", hours: 20 },
  { id: 6, image: "/placeholder.svg", title: "Deep Learning with TensorFlow", career: "Data Scientist", level: "advanced", hours: 25 },
  { id: 7, image: "/placeholder.svg", title: "Product Management 101", career: "Product Manager", level: "beginner", hours: 8 },
  { id: 8, image: "/placeholder.svg", title: "Web Development Bootcamp", career: "Software Engineer", level: "beginner", hours: 40 },
  { id: 9, image: "/placeholder.svg", title: "React.js Essentials", career: "Software Engineer", level: "intermediate", hours: 20 },
  { id: 10, image: "/placeholder.svg", title: "Node.js Backend Development", career: "Software Engineer", level: "intermediate", hours: 18 },
  { id: 11, image: "/placeholder.svg", title: "Database Design Principles", career: "Software Engineer", level: "beginner", hours: 12 },
  { id: 12, image: "/placeholder.svg", title: "UI Animation Masterclass", career: "UX Designer", level: "advanced", hours: 14 },
  { id: 13, image: "/placeholder.svg", title: "Agile Project Management", career: "Product Manager", level: "intermediate", hours: 10 },
  { id: 14, image: "/placeholder.svg", title: "Data Visualization with Python", career: "Data Scientist", level: "intermediate", hours: 16 },
  { id: 15, image: "/placeholder.svg", title: "Mobile App Development with Flutter", career: "Software Engineer", level: "intermediate", hours: 22 },
];
