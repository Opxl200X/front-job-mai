// // src/components/InterestsTable.tsx

// import { useState } from "react";
// import { Search, Plus, Pencil, Trash2 } from "lucide-react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { interestsData, Interest } from "@/data/interestsData";

// export function InterestsTable() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [interests, setInterests] = useState<Interest[]>(interestsData);

//   // Filtering logic based on name
//   const filteredInterests = interests.filter((item) =>
//     item.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const handleDelete = (id: number) => {
//     setInterests(interests.filter((item) => item.id !== id));
//   };

//   return (
//     <div className="space-y-6">
//       {/* Header Section */}
//       <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
//         <h1 className="text-3xl font-bold text-foreground">Interests</h1>
        
//         <div className="flex items-center gap-3">
//           <div className="relative">
//             <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
//             <Input
//               placeholder="Search interests..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-[250px] pl-9 bg-[#FFFFFF]"
//             />
//           </div>
//           <Button 
//             className="gap-2 bg-[#4A5DF9] hover:bg-[#4A5DF9]/90 text-white border-none shadow-sm"
//             onClick={() => console.log("Open Add Sheet")} // Placeholder for sheet logic
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
//               <TableHead className="text-table-header-foreground font-semibold">
//                 Interest Name
//               </TableHead>
//               <TableHead className="text-table-header-foreground font-semibold text-center w-[100px]">
//                 Edit
//               </TableHead>
//               <TableHead className="text-table-header-foreground font-semibold text-center w-[100px]">
//                 Delete
//               </TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {filteredInterests.length > 0 ? (
//               filteredInterests.map((item) => (
//                 <TableRow 
//                   key={item.id} 
//                   className="bg-[#FFFFFF] hover:bg-[#F9FAFB] transition-colors border-b"
//                 >
//                   <TableCell className="font-medium">
//                     {item.name}
//                   </TableCell>
//                   <TableCell className="text-center">
//                     <Button 
//                       variant="ghost" 
//                       size="icon" 
//                       className="h-8 w-8 text-muted-foreground hover:text-[#4A5DF9] hover:bg-transparent"
//                       onClick={() => console.log("Edit", item.id)}
//                     >
//                       <Pencil className="h-4 w-4" />
//                     </Button>
//                   </TableCell>
//                   <TableCell className="text-center">
//                     <Button
//                       variant="ghost"
//                       size="icon"
//                       className="text-destructive hover:bg-transparent hover:text-destructive"
//                       onClick={() => handleDelete(item.id)}
//                     >
//                       <Trash2 className="h-4 w-4" />
//                     </Button>
//                   </TableCell>
//                 </TableRow>
//               ))
//             ) : (
//               <TableRow>
//                 <TableCell colSpan={3} className="h-24 text-center text-muted-foreground">
//                   No interests found.
//                 </TableCell>
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { Search, Plus, Pencil, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { interestsData, Interest } from "@/data/interestsData";
import { AddInterestsSheet, InterestFormData } from "./AddInterestsSheet";
import { EditInterestsSheet } from "./EditInterestsSheet";

export function InterestsTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const [interests, setInterests] = useState<Interest[]>(interestsData);
  const [isAddSheetOpen, setIsAddSheetOpen] = useState(false);
  const [isEditSheetOpen, setIsEditSheetOpen] = useState(false);
  const [selectedInterest, setSelectedInterest] = useState<Interest | null>(null);

  const filteredInterests = interests.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddInterest = (data: InterestFormData) => {
    const newEntry: Interest = {
      id: Math.max(...interests.map((i) => i.id), 0) + 1,
      name: data.name,
    };
    setInterests([newEntry, ...interests]);
  };

  const handleEditClick = (item: Interest) => {
    setSelectedInterest(item);
    setIsEditSheetOpen(true);
  };

  const handleUpdateInterest = (updatedItem: Interest) => {
    setInterests(interests.map((i) => (i.id === updatedItem.id ? updatedItem : i)));
  };

  const handleDelete = (id: number) => {
    setInterests(interests.filter((item) => item.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold text-foreground">Interests</h1>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search interests..."
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

      {/* Sheets Integration */}
      <AddInterestsSheet 
        open={isAddSheetOpen} 
        onOpenChange={setIsAddSheetOpen} 
        onSubmit={handleAddInterest} 
      />
      <EditInterestsSheet 
        open={isEditSheetOpen} 
        onOpenChange={setIsEditSheetOpen} 
        onSubmit={handleUpdateInterest} 
        interest={selectedInterest} 
      />

      <div className="overflow-hidden rounded-lg border border-border">
        <Table>
          <TableHeader>
            <TableRow className="bg-table-header hover:bg-table-header">
              <TableHead className="text-table-header-foreground font-semibold">Interest Name</TableHead>
              <TableHead className="text-table-header-foreground font-semibold text-center w-[100px]">Edit</TableHead>
              <TableHead className="text-table-header-foreground font-semibold text-center w-[100px]">Delete</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredInterests.map((item) => (
              <TableRow key={item.id} className="bg-[#FFFFFF] hover:bg-[#F9FAFB] transition-colors border-b">
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell className="text-center">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8 text-muted-foreground hover:text-[#4A5DF9] hover:bg-transparent"
                    onClick={() => handleEditClick(item)}
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                </TableCell>
                <TableCell className="text-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-destructive hover:bg-transparent hover:text-destructive"
                    onClick={() => handleDelete(item.id)}
                  >
                    <Trash2 className="h-4 w-4" />
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