// import { useState } from "react";
// import { Search, Plus } from "lucide-react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { 
//   Table, 
//   TableBody, 
//   TableCell, 
//   TableHead, 
//   TableHeader, 
//   TableRow 
// } from "@/components/ui/table";
// import { usersData, User } from "@/data/users";

// export function UsersTable() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [users, setUsers] = useState<User[]>(usersData);

//   const filteredUsers = users.filter(
//     (user) =>
//       user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       user.email.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const toggleBan = (id: number) => {
//     setUsers(
//       users.map((user) =>
//         user.id === id ? { ...user, isBanned: !user.isBanned } : user
//       )
//     );
//   };

//   return (
//     <div className="space-y-6">
//       {/* Header */}
//       <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
//         <h1 className="text-3xl font-bold text-foreground">Users</h1>

//         <div className="flex items-center gap-3">
//           <div className="relative">
//             <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
//             <Input
//               placeholder="Search..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               /* UPDATED: Search bar background to white FFFFFF */
//               className="w-[200px] pl-9 bg-[#FFFFFF]"
//             />
//           </div>
//           <Button 
//             /* UPDATED: Button background to blue 4A5DF9 */
//             className="gap-2 bg-[#4A5DF9] hover:bg-[#4A5DF9]/90 text-white border-none"
//           >
//             <Plus className="h-4 w-4" />
//             Add New
//           </Button>
//         </div>
//       </div>

//       {/* Table Section */}
//       <div className="overflow-hidden rounded-lg border border-border">
//         <Table>
//           <TableHeader>
//             <TableRow className="bg-table-header hover:bg-table-header">
//               <TableHead className="text-table-header-foreground font-semibold w-[70px]">User ID</TableHead>
//               <TableHead className="text-table-header-foreground font-semibold w-[180px]">Name</TableHead>
//               <TableHead className="text-table-header-foreground font-semibold w-[220px]">Email</TableHead>
//               <TableHead className="text-table-header-foreground font-semibold w-[120px]">Role</TableHead>
//               <TableHead className="text-table-header-foreground font-semibold w-[140px]">Joined</TableHead>
//               <TableHead className="text-table-header-foreground font-semibold text-center w-[100px]">Actions</TableHead>
//             </TableRow>
//           </TableHeader>

//           <TableBody>
//             {filteredUsers.map((user) => (
//               <TableRow 
//                 key={user.id}
//                 className="bg-[#FFFFFF] hover:bg-[#F9FAFB] transition-colors border-b"
//               >
//                 <TableCell className="font-medium">{user.id}</TableCell>
//                 <TableCell>{user.name}</TableCell>
//                 <TableCell className="text-muted-foreground">{user.email}</TableCell>
//                 <TableCell className="capitalize">{user.role}</TableCell>
//                 <TableCell>{user.joinedDate}</TableCell>
//                 <TableCell className="text-center">
//                   <Button
//                     size="icon"
//                     className={`h-8 min-w-[70px] px-3 text-sm rounded-full transition-all ${
//                       user.isBanned
//                         ? "bg-success text-success-foreground hover:bg-success/80"
//                         : "bg-destructive text-destructive-foreground hover:bg-destructive/80"
//                     }`}
//                     onClick={() => toggleBan(user.id)}
//                   >
//                     {user.isBanned ? "Unban" : "Ban"}
//                   </Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </div>
//     </div>
//   );
// }

// import { useState } from "react";
// import { Search, Plus } from "lucide-react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow
// } from "@/components/ui/table";
// import { usersData, User } from "@/data/usersData";

// export function UsersTable() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [users, setUsers] = useState<User[]>(usersData);

//   const filteredUsers = users.filter(
//     (user) =>
//       user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       user.email.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="space-y-6">
//       {/* Header */}
//       <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
//         <h1 className="text-3xl font-bold text-foreground">Users</h1>

//         <div className="flex items-center gap-3">
//           <div className="relative">
//             <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
//             <Input
//               placeholder="Search..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-[200px] pl-9 bg-[#FFFFFF]"
//             />
//           </div>
//           <Button
//             className="gap-2 bg-[#4A5DF9] hover:bg-[#4A5DF9]/90 text-white border-none shadow-sm"
//           >
//             <Plus className="h-4 w-4" />
//             Add New
//           </Button>
//         </div>
//       </div>

//       {/* Table Section */}
//       <div className="overflow-hidden rounded-lg border border-border">
//         <Table>
//           <TableHeader>
//             {/* UPDATED: Header background to Blue 4A5DF9 to match image_150288.png */}
//             <TableRow className="bg-[#4A5DF9] hover:bg-[#4A5DF9]">
//               <TableHead className="text-white font-semibold">User ID</TableHead>
//               <TableHead className="text-white font-semibold">Fullname</TableHead>
//               <TableHead className="text-white font-semibold">Email</TableHead>
//               <TableHead className="text-white font-semibold">Role</TableHead>
//               <TableHead className="text-white font-semibold">Joined</TableHead>
//               <TableHead className="text-white font-semibold text-center">Actions</TableHead>
//             </TableRow>
//           </TableHeader>

//           <TableBody>
//             {filteredUsers.map((user) => (
//               <TableRow
//                 key={user.id}
//                 className="bg-[#FFFFFF] hover:bg-[#F9FAFB] transition-colors border-b"
//               >
//                 <TableCell className="font-medium">{user.id}</TableCell>
//                 <TableCell>{user.name}</TableCell>
//                 <TableCell className="text-muted-foreground">{user.email}</TableCell>
//                 <TableCell>{user.role}</TableCell>
//                 <TableCell className="text-muted-foreground">{user.joinedDate}</TableCell>
//                 <TableCell className="text-center">
//                   {/* UPDATED: Replaced Ban button with "Show Details" button per image_150288.png */}
//                   <Button
//                     className="h-8 px-4 text-xs bg-[#4A5DF9] hover:bg-[#4A5DF9]/90 text-white rounded-full transition-all"
//                     onClick={() => console.log("Show details for user:", user.id)}
//                   >
//                     Show Details
//                   </Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </div>
//     </div>
//   );
// }

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
import { usersData, User } from "@/data/usersData";

export function UsersTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const [users] = useState<User[]>(usersData);

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header section with Page Title, Search and Add New button */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold text-foreground">Users</h1>

        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-[250px] pl-9 bg-[#FFFFFF]"
            />
          </div>
          <Button
            className="gap-2 bg-[#4A5DF9] hover:bg-[#4A5DF9]/90 text-white border-none shadow-sm"
          >
            <Plus className="h-4 w-4" />
            Add New
          </Button>
        </div>
      </div>

      {/* Main Table section */}
      <div className="overflow-hidden rounded-lg border border-border shadow-sm">
        <Table>
          <TableHeader>
            {/* Header with blue background to match image_150288.png */}
            <TableRow className="bg-[#4A5DF9] hover:bg-[#4A5DF9]">
              <TableHead className="text-white font-semibold">User ID</TableHead>
              <TableHead className="text-white font-semibold">Fullname</TableHead>
              <TableHead className="text-white font-semibold">Email</TableHead>
              <TableHead className="text-white font-semibold">Role</TableHead>
              <TableHead className="text-white font-semibold">Joined</TableHead>
              <TableHead className="text-white font-semibold text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow
                key={user.id}
                className="bg-[#FFFFFF] hover:bg-[#F9FAFB] transition-colors border-b"
              >
                <TableCell className="text-muted-foreground">{user.id}</TableCell>
                <TableCell className="font-medium text-foreground">{user.name}</TableCell>
                <TableCell className="text-muted-foreground">{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell className="text-muted-foreground">{user.joinedDate}</TableCell>
                <TableCell className="text-center">
                  <Button
                    className="bg-[#4A5DF9] hover:bg-[#4A5DF9]/90 text-white h-8 px-4 text-xs rounded-md shadow-none"
                    onClick={() => console.log("Showing details for user:", user.id)}
                  >
                    Show Details
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