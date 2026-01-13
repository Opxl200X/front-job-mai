import { AdminLayout } from "@/components/admin/AdminLayout";
import UserManagement from "@/components/UserManagement";

export default function UsersPage() {
  return (
    <AdminLayout>
      <UserManagement />
    </AdminLayout>
  );
}
