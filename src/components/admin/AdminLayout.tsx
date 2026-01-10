import { useState } from "react";
import { AdminHeader } from "./AdminHeader";
import { AdminSidebar } from "./AdminSidebar";
import { SidebarItemId } from "@/data/lessonsData";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export function AdminLayout({ children }: AdminLayoutProps) {
  const [activeItem, setActiveItem] = useState<SidebarItemId>("lessons");

  return (
    <div className="min-h-screen bg-background">
      <AdminHeader />
      <AdminSidebar activeItem={activeItem} onItemClick={setActiveItem} />
      <main className="ml-[var(--sidebar-width)] pt-[var(--header-height)]">
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
