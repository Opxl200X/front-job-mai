import {
  Users,
  GraduationCap,
  BookOpen,
  Lightbulb,
  Building2,
  BookMarked,
  FileText,
  Newspaper,
} from "lucide-react";

import { AdminLayout } from "@/components/admin/AdminLayout";
import StatCard from "@/components/admin/StatCard";

const stats = [
  { icon: Users, value: 3, label: "Users", variant: "blue" as const },
  { icon: GraduationCap, value: 3, label: "Faculties", variant: "pink" as const },
  { icon: BookOpen, value: 3, label: "Majors", variant: "purple" as const },
  { icon: Lightbulb, value: 3, label: "Skills", variant: "green" as const },
  { icon: Building2, value: 3, label: "Careers", variant: "coral" as const },
  { icon: BookMarked, value: 3, label: "Courses", variant: "pink" as const },
  { icon: FileText, value: 3, label: "Lessons", variant: "cyan" as const },
  { icon: Newspaper, value: 3, label: "News", variant: "mint" as const },
];

const DashboardPage = () => {
  return (
    <AdminLayout>
      <div>
        <h1 className="text-2xl font-bold text-foreground mb-6">
          Dashboard Overview
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <StatCard
              key={stat.label}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              variant={stat.variant}
            />
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default DashboardPage;
