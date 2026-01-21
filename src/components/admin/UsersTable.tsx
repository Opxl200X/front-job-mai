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
// import { UserDetailsSheet } from "./UserDetailsSheet"; //

// export function UsersTable() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [users] = useState<User[]>(usersData);
  
//   // State for the side sheet
//   const [selectedUser, setSelectedUser] = useState<User | null>(null);
//   const [isDetailsOpen, setIsDetailsOpen] = useState(false);

//   const filteredUsers = users.filter(
//     (user) =>
//       user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       user.email.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   // Function to trigger the side sheet
//   const handleShowDetails = (user: User) => {
//     setSelectedUser(user);
//     setIsDetailsOpen(true);
//   };

//   return (
//     <div className="space-y-6">
//       {/* Header section with Page Title, Search and Add New button */}
//       <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
//         <h1 className="text-3xl font-bold text-foreground">Users</h1>

//         <div className="flex items-center gap-3">
//           <div className="relative">
//             <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
//             <Input
//               placeholder="Search..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-[250px] pl-9 bg-[#FFFFFF]"
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

//       {/* Side Sheet Component for User Details */}
//       <UserDetailsSheet 
//         open={isDetailsOpen} 
//         onOpenChange={setIsDetailsOpen} 
//         user={selectedUser} 
//       />

//       {/* Main Table section */}
//       <div className="overflow-hidden rounded-lg border border-border shadow-sm">
//         <Table>
//           <TableHeader>
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
//                 <TableCell className="text-muted-foreground">{user.id}</TableCell>
//                 <TableCell className="font-medium text-foreground">{user.name}</TableCell>
//                 <TableCell className="text-muted-foreground">{user.email}</TableCell>
//                 <TableCell>{user.role}</TableCell>
//                 <TableCell className="text-muted-foreground">{user.joinedDate}</TableCell>
//                 <TableCell className="text-center">
//                   <Button
//                     className="bg-[#4A5DF9] hover:bg-[#4A5DF9]/90 text-white h-8 px-4 text-xs rounded-md shadow-none"
//                     onClick={() => handleShowDetails(user)} //
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
// import { UserDetailsSheet } from "./UserDetailsSheet";

// export function UsersTable() {
//   const [searchQuery, setSearchQuery] = useState("");
//   // Using state for users to handle local UI updates if needed
//   const [users, setUsers] = useState<User[]>(usersData);
  
//   // State for the side sheet
//   const [selectedUser, setSelectedUser] = useState<User | null>(null);
//   const [isDetailsOpen, setIsDetailsOpen] = useState(false);

//   const filteredUsers = users.filter(
//     (user) =>
//       user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       user.email.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   // Function to trigger the side sheet
//   const handleShowDetails = (user: User) => {
//     setSelectedUser(user);
//     setIsDetailsOpen(true);
//   };

//   return (
//     <div className="space-y-6">
//       {/* Header section with Page Title, Search and Add New button */}
//       <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
//         <h1 className="text-3xl font-bold text-foreground">Users</h1>

//         <div className="flex items-center gap-3">
//           <div className="relative">
//             <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
//             <Input
//               placeholder="Search..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-[250px] pl-9 bg-[#FFFFFF]"
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

//       {/* Side Sheet Component for User Details */}
//       <UserDetailsSheet 
//         open={isDetailsOpen} 
//         onOpenChange={setIsDetailsOpen} 
//         user={selectedUser} 
//       />

//       {/* Main Table section */}
//       <div className="overflow-hidden rounded-lg border border-border shadow-sm">
//         <Table>
//           <TableHeader>
//             <TableRow className="bg-[#4A5DF9] hover:bg-[#4A5DF9]">
//               <TableHead className="text-white font-semibold">User ID</TableHead>
//               <TableHead className="text-white font-semibold">Fullname</TableHead>
//               <TableHead className="text-white font-semibold">Email</TableHead>
//               <TableHead className="text-white font-semibold">Role</TableHead>
//               <TableHead className="text-white font-semibold">Joined</TableHead>
//               <TableHead className="text-white font-semibold">Status</TableHead>
//               <TableHead className="text-white font-semibold text-center">Actions</TableHead>
//             </TableRow>
//           </TableHeader>

//           <TableBody>
//             {filteredUsers.map((user) => (
//               <TableRow
//                 key={user.id}
//                 className="bg-[#FFFFFF] hover:bg-[#F9FAFB] transition-colors border-b"
//               >
//                 <TableCell className="text-muted-foreground">{user.id}</TableCell>
//                 <TableCell className="font-medium text-foreground">{user.name}</TableCell>
//                 <TableCell className="text-muted-foreground">{user.email}</TableCell>
//                 <TableCell>{user.role}</TableCell>
//                 <TableCell className="text-muted-foreground">{user.joinedDate}</TableCell>
//                 <TableCell>
//                   {/* Status Indicator */}
//                   <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${
//                     user.banHistory && user.banHistory.length > 0 
//                       ? "bg-red-100 text-red-600" 
//                       : "bg-green-100 text-green-600"
//                   }`}>
//                     {user.banHistory && user.banHistory.length > 0 ? "Banned" : "Active"}
//                   </span>
//                 </TableCell>
//                 <TableCell className="text-center">
//                   <Button
//                     className="bg-[#4A5DF9] hover:bg-[#4A5DF9]/90 text-white h-8 px-4 text-xs rounded-md shadow-none"
//                     onClick={() => handleShowDetails(user)}
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
// import { UserDetailsSheet } from "./UserDetailsSheet";

// export function UsersTable() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [users, setUsers] = useState<User[]>(usersData);
//   const [selectedUser, setSelectedUser] = useState<User | null>(null);
//   const [isDetailsOpen, setIsDetailsOpen] = useState(false);

//   const filteredUsers = users.filter(
//     (user) =>
//       user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       user.email.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const handleShowDetails = (user: User) => {
//     setSelectedUser(user);
//     setIsDetailsOpen(true);
//   };

//   // Function to handle Ban/Unban logic
//   const handleBanToggle = (userId: number) => {
//     setUsers((prevUsers) =>
//       prevUsers.map((u) => {
//         if (u.id === userId) {
//           const isBanned = u.banHistory && u.banHistory.length > 0;
//           return {
//             ...u,
//             // If banned, clear history (Unban); if active, add mock entry (Ban)
//             banHistory: isBanned 
//               ? [] 
//               : [{ banId: Date.now(), banDate: "Current Date", unbanDate: "-", reason: "Admin Action" }]
//           };
//         }
//         return u;
//       })
//     );
    
//     // Update the side sheet view immediately
//     if (selectedUser?.id === userId) {
//         const updatedUser = users.find(u => u.id === userId); // This is a simplification for the demo
//         setIsDetailsOpen(false); // Close and reopen to refresh or handle state better
//     }
//   };

//   return (
//     <div className="space-y-6">
//       <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
//         <h1 className="text-3xl font-bold text-foreground">Users</h1>
//         <div className="flex items-center gap-3">
//           <div className="relative">
//             <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
//             <Input
//               placeholder="Search..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-[250px] pl-9 bg-[#FFFFFF]"
//             />
//           </div>
//           <Button className="gap-2 bg-[#4A5DF9] hover:bg-[#4A5DF9]/90 text-white border-none shadow-sm">
//             <Plus className="h-4 w-4" />
//             Add New
//           </Button>
//         </div>
//       </div>

//       <UserDetailsSheet 
//         open={isDetailsOpen} 
//         onOpenChange={setIsDetailsOpen} 
//         user={users.find(u => u.id === selectedUser?.id) || null} 
//         onBanToggle={handleBanToggle} // Pass callback
//       />

//       <div className="overflow-hidden rounded-lg border border-border shadow-sm">
//         <Table>
//           <TableHeader>
//             <TableRow className="bg-[#4A5DF9] hover:bg-[#4A5DF9]">
//               <TableHead className="text-white font-semibold">User ID</TableHead>
//               <TableHead className="text-white font-semibold">Fullname</TableHead>
//               <TableHead className="text-white font-semibold">Email</TableHead>
//               <TableHead className="text-white font-semibold">Role</TableHead>
//               <TableHead className="text-white font-semibold">Joined</TableHead>
//               <TableHead className="text-white font-semibold">Status</TableHead>
//               <TableHead className="text-white font-semibold text-center">Actions</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {filteredUsers.map((user) => {
//               const isBanned = user.banHistory && user.banHistory.length > 0;
//               return (
//                 <TableRow key={user.id} className="bg-[#FFFFFF] hover:bg-[#F9FAFB] transition-colors border-b">
//                   <TableCell className="text-muted-foreground">{user.id}</TableCell>
//                   <TableCell className="font-medium text-foreground">{user.name}</TableCell>
//                   <TableCell className="text-muted-foreground">{user.email}</TableCell>
//                   <TableCell>{user.role}</TableCell>
//                   <TableCell className="text-muted-foreground">{user.joinedDate}</TableCell>
//                   <TableCell>
//                     <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${
//                       isBanned ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"
//                     }`}>
//                       {isBanned ? "Banned" : "Active"}
//                     </span>
//                   </TableCell>
//                   <TableCell className="text-center">
//                     <Button
//                       className="bg-[#4A5DF9] hover:bg-[#4A5DF9]/90 text-white h-8 px-4 text-xs rounded-md shadow-none"
//                       onClick={() => handleShowDetails(user)}
//                     >
//                       Show Details
//                     </Button>
//                   </TableCell>
//                 </TableRow>
//               );
//             })}
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
import { UserDetailsSheet } from "./UserDetailsSheet";
import { AddUsersSheet, UserFormData } from "./AddUsersSheet";

export function UsersTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const [users, setUsers] = useState<User[]>(usersData);
  
  // State for side sheets
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isAddSheetOpen, setIsAddSheetOpen] = useState(false);

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Function to trigger the detail side sheet
  const handleShowDetails = (user: User) => {
    setSelectedUser(user);
    setIsDetailsOpen(true);
  };

  // Function to handle adding a new user
  const handleAddUser = (data: UserFormData) => {
    const newUser: User = {
      id: Math.max(...users.map((u) => u.id), 0) + 1,
      name: data.name,
      email: data.email,
      role: data.role,
      joinedDate: new Date().toISOString().split('T')[0],
      banHistory: []
    };
    setUsers([newUser, ...users]);
  };

  // Function to handle Ban/Unban logic from the detail sheet
  const handleBanToggle = (userId: number) => {
    setUsers((prevUsers) =>
      prevUsers.map((u) => {
        if (u.id === userId) {
          const isCurrentlyBanned = u.banHistory && u.banHistory.length > 0;
          return {
            ...u,
            // Mocking the toggle: clear history to unban, add mock entry to ban
            banHistory: isCurrentlyBanned 
              ? [] 
              : [{ banId: Date.now(), banDate: "2026-01-21", unbanDate: "-", reason: "Admin Action" }]
          };
        }
        return u;
      })
    );
  };

  return (
    <div className="space-y-6">
      {/* Header section */}
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
            onClick={() => setIsAddSheetOpen(true)}
          >
            <Plus className="h-4 w-4" />
            Add New
          </Button>
        </div>
      </div>

      {/* Side Sheet Components */}
      <AddUsersSheet 
        open={isAddSheetOpen} 
        onOpenChange={setIsAddSheetOpen} 
        onSubmit={handleAddUser} 
      />

      <UserDetailsSheet 
        open={isDetailsOpen} 
        onOpenChange={setIsDetailsOpen} 
        user={users.find(u => u.id === selectedUser?.id) || null} 
        onBanToggle={handleBanToggle}
      />

      {/* Main Table section */}
      <div className="overflow-hidden rounded-lg border border-border shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#4A5DF9] hover:bg-[#4A5DF9]">
              <TableHead className="text-white font-semibold">User ID</TableHead>
              <TableHead className="text-white font-semibold">Fullname</TableHead>
              <TableHead className="text-white font-semibold">Email</TableHead>
              <TableHead className="text-white font-semibold">Role</TableHead>
              <TableHead className="text-white font-semibold">Joined</TableHead>
              <TableHead className="text-white font-semibold">Status</TableHead>
              <TableHead className="text-white font-semibold text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {filteredUsers.map((user) => {
              const isBanned = user.banHistory && user.banHistory.length > 0;
              
              return (
                <TableRow
                  key={user.id}
                  className="bg-[#FFFFFF] hover:bg-[#F9FAFB] transition-colors border-b"
                >
                  <TableCell className="text-muted-foreground">{user.id}</TableCell>
                  <TableCell className="font-medium text-foreground">{user.name}</TableCell>
                  <TableCell className="text-muted-foreground">{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell className="text-muted-foreground">{user.joinedDate}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${
                      isBanned ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"
                    }`}>
                      {isBanned ? "Banned" : "Active"}
                    </span>
                  </TableCell>
                  <TableCell className="text-center">
                    <Button
                      className="bg-[#4A5DF9] hover:bg-[#4A5DF9]/90 text-white h-8 px-4 text-xs rounded-md shadow-none"
                      onClick={() => handleShowDetails(user)}
                    >
                      Show Details
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}