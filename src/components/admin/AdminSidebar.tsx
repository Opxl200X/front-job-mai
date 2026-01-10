import { 
  LayoutDashboard, 
  Users, 
  GraduationCap, 
  BookOpen, 
  Lightbulb, 
  Briefcase, 
  FolderOpen, 
  FileText, 
  Newspaper 
} from "lucide-react";
import { sidebarItems, SidebarItemId } from "@/data/lessonsData";
import { cn } from "@/lib/utils";

const iconMap = {
  LayoutDashboard,
  Users,
  GraduationCap,
  BookOpen,
  Lightbulb,
  Briefcase,
  FolderOpen,
  FileText,
  Newspaper,
};

interface AdminSidebarProps {
  activeItem: SidebarItemId;
  onItemClick: (id: SidebarItemId) => void;
}

export function AdminSidebar({ activeItem, onItemClick }: AdminSidebarProps) {
  return (
    <aside className="fixed left-0 top-[var(--header-height)] h-[calc(100vh-var(--header-height))] w-[var(--sidebar-width)] border-r border-sidebar-border bg-sidebar">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-foreground">Admin Panel</h2>
        <p className="text-sm text-muted-foreground">Manage Data</p>
      </div>
      
      <nav className="px-3">
        {sidebarItems.map((item) => {
          const Icon = iconMap[item.icon as keyof typeof iconMap];
          const isActive = activeItem === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onItemClick(item.id)}
              className={cn(
                "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                isActive 
                  ? "bg-sidebar-accent text-sidebar-accent-foreground" 
                  : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
              )}
            >
              <Icon className="h-5 w-5" />
              {item.label}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
