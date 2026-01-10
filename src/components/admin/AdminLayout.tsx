import { AdminHeader } from "./AdminHeader";
import { AdminSidebar } from "./AdminSidebar";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <AdminHeader />
      <AdminSidebar />
      <main className="ml-[var(--sidebar-width)] pt-[var(--header-height)]">
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
