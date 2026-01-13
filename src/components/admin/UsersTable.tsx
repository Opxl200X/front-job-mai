import { useState } from "react";
import { Search, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { usersData, User } from "@/data/users";

export function UsersTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const [users, setUsers] = useState<User[]>(usersData);

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleBan = (id: number) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, isBanned: !user.isBanned } : user
      )
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold text-foreground">Users</h1>

        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-[200px] pl-9"
            />
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Add New
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-lg border border-border">
        <Table>
          <TableHeader>
            <TableRow className="bg-table-header hover:bg-table-header">
              <TableHead className="text-table-header-foreground font-semibold w-[70px]">User ID</TableHead>
              <TableHead className="text-table-header-foreground font-semibold w-[180px]">Name</TableHead>
              <TableHead className="text-table-header-foreground font-semibold w-[220px]">Email</TableHead>
              <TableHead className="text-table-header-foreground font-semibold w-[120px]">Role</TableHead>
              <TableHead className="text-table-header-foreground font-semibold w-[140px]">Joined</TableHead>
              <TableHead className="text-table-header-foreground font-semibold text-center w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell className="text-muted-foreground">{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>{user.joinedDate}</TableCell>
                <TableCell className="text-center">
                  <Button
                    size="icon"
                    className={`h-8 min-w-[70px] px-3 text-sm rounded-full ${
                      user.isBanned
                        ? "bg-success text-success-foreground hover:bg-success/80"
                        : "bg-destructive text-destructive-foreground hover:bg-destructive/80"
                    }`}
                    onClick={() => toggleBan(user.id)}
                  >
                    {user.isBanned ? "Unban" : "Ban"}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
