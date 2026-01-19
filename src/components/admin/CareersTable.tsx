// import { useState } from "react";
// import { Search, Plus, Pencil, Trash2 } from "lucide-react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { careersData, Career } from "@/data/careersData";
// import { AddCareerSheet, CareerFormData } from "./AddCareerSheet";
// import { EditCareerSheet } from "./EditCareerSheet";

// export function CareersTable() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [careers, setCareers] = useState<Career[]>(careersData);
//   const [isAddSheetOpen, setIsAddSheetOpen] = useState(false);
//   const [isEditSheetOpen, setIsEditSheetOpen] = useState(false);
//   const [selectedCareer, setSelectedCareer] = useState<Career | null>(null);

//   const filteredCareers = careers.filter(
//     (career) =>
//       career.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       career.industry.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const handleDelete = (id: number) => {
//     setCareers(careers.filter((career) => career.id !== id));
//   };

//   const handleAddCareer = (data: CareerFormData) => {
//     const newCareer: Career = {
//       id: Math.max(...careers.map((c) => c.id), 0) + 1,
//       title: data.title,
//       industry: data.industry,
//       minSalary: data.minSalary,
//       growth: data.growth as "High" | "Medium" | "Stable",
//       image: data.image || "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400",
//     };
//     setCareers([...careers, newCareer]);
//   };

//   const handleEditCareer = (updatedCareer: Career) => {
//     setCareers(careers.map((c) => (c.id === updatedCareer.id ? updatedCareer : c)));
//   };

//   const handleEditClick = (career: Career) => {
//     setSelectedCareer(career);
//     setIsEditSheetOpen(true);
//   };

//   return (
//     <div className="space-y-6">
//       <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
//         <h1 className="text-3xl font-bold text-foreground">Career</h1>
        
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
//             onClick={() => setIsAddSheetOpen(true)}
//           >
//             <Plus className="h-4 w-4" />
//             Add New
//           </Button>
//         </div>
//       </div>

//       <AddCareerSheet
//         open={isAddSheetOpen}
//         onOpenChange={setIsAddSheetOpen}
//         onSubmit={handleAddCareer}
//       />

//       <EditCareerSheet
//         open={isEditSheetOpen}
//         onOpenChange={setIsEditSheetOpen}
//         onSubmit={handleEditCareer}
//         career={selectedCareer}
//       />

//       <div className="overflow-hidden rounded-lg border border-border">
//         <Table>
//           <TableHeader>
//             <TableRow className="bg-table-header hover:bg-table-header">
//               <TableHead className="text-table-header-foreground font-semibold">Image</TableHead>
//               <TableHead className="text-table-header-foreground font-semibold">Title</TableHead>
//               <TableHead className="text-table-header-foreground font-semibold">Industry</TableHead>
//               <TableHead className="text-table-header-foreground font-semibold">Min Salary</TableHead>
//               <TableHead className="text-table-header-foreground font-semibold">Growth</TableHead>
//               <TableHead className="text-table-header-foreground font-semibold text-center">Edit</TableHead>
//               <TableHead className="text-table-header-foreground font-semibold text-center">Delete</TableHead>
//             </TableRow>
//           </TableHeader>

//           <TableBody>
//             {filteredCareers.map((career) => (
//               <TableRow 
//                 key={career.id} 
//                 className="bg-[#FFFFFF] hover:bg-[#F9FAFB] transition-colors border-b"
//               >
//                 <TableCell>
//                   <div className="h-12 w-20 overflow-hidden rounded-md bg-muted">
//                     <img
//                       src={career.image}
//                       alt={career.title}
//                       className="h-full w-full object-cover"
//                     />
//                   </div>
//                 </TableCell>
//                 <TableCell className="font-medium">{career.title}</TableCell>
                
//                 {/* UPDATED: Industry is now plain blue text instead of a badge */}
//                 <TableCell>
//                   <span className="text-[#4A5DF9] font-medium">
//                     {career.industry}
//                   </span>
//                 </TableCell>

//                 <TableCell className="text-muted-foreground">
//                   {career.minSalary.toLocaleString()}
//                 </TableCell>
//                 <TableCell>
//                   <Badge variant="outline" className="bg-white text-black border-border">
//                     {career.growth}
//                   </Badge>
//                 </TableCell>
//                 <TableCell className="text-center">
//                   <Button 
//                     variant="ghost" 
//                     size="icon" 
//                     className="h-8 w-8 text-muted-foreground hover:text-primary hover:bg-transparent"
//                     onClick={() => handleEditClick(career)}
//                   >
//                     <Pencil className="h-4 w-4" />
//                   </Button>
//                 </TableCell>
//                 <TableCell className="text-center">
//                   <Button
//                     variant="ghost"
//                     size="icon"
//                     className="text-destructive hover:bg-transparent hover:text-destructive"
//                     onClick={() => handleDelete(career.id)}
//                   >
//                     <Trash2 className="h-4 w-4" />
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
import { Search, Plus, Pencil, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { careersData, Career } from "@/data/careersData";
import { AddCareerSheet, CareerFormData } from "./AddCareerSheet";
import { EditCareerSheet } from "./EditCareerSheet";

export function CareersTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const [careers, setCareers] = useState<Career[]>(careersData);
  const [isAddSheetOpen, setIsAddSheetOpen] = useState(false);
  const [isEditSheetOpen, setIsEditSheetOpen] = useState(false);
  const [selectedCareer, setSelectedCareer] = useState<Career | null>(null);

  const filteredCareers = careers.filter(
    (career) =>
      career.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      career.industry.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (id: number) => {
    setCareers(careers.filter((career) => career.id !== id));
  };

  const handleAddCareer = (data: CareerFormData) => {
    const newCareer: Career = {
      id: Math.max(...careers.map((c) => c.id), 0) + 1,
      title: data.title,
      industry: data.industry,
      minSalary: data.minSalary,
      growth: data.growth as "High" | "Medium" | "Stable",
      image: data.image || "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400",
    };
    setCareers([...careers, newCareer]);
  };

  const handleEditCareer = (updatedCareer: Career) => {
    setCareers(careers.map((c) => (c.id === updatedCareer.id ? updatedCareer : c)));
  };

  const handleEditClick = (career: Career) => {
    setSelectedCareer(career);
    setIsEditSheetOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold text-foreground">Career</h1>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-[200px] pl-9 bg-[#FFFFFF]"
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

      <AddCareerSheet
        open={isAddSheetOpen}
        onOpenChange={setIsAddSheetOpen}
        onSubmit={handleAddCareer}
      />

      <EditCareerSheet
        open={isEditSheetOpen}
        onOpenChange={setIsEditSheetOpen}
        onSubmit={handleEditCareer}
        career={selectedCareer}
      />

      <div className="overflow-hidden rounded-lg border border-border">
        <Table>
          <TableHeader>
            <TableRow className="bg-table-header hover:bg-table-header">
              <TableHead className="text-table-header-foreground font-semibold">Image</TableHead>
              <TableHead className="text-table-header-foreground font-semibold">Title</TableHead>
              <TableHead className="text-table-header-foreground font-semibold">Industry</TableHead>
              <TableHead className="text-table-header-foreground font-semibold">Min Salary</TableHead>
              <TableHead className="text-table-header-foreground font-semibold">Growth</TableHead>
              <TableHead className="text-table-header-foreground font-semibold text-center">Edit</TableHead>
              <TableHead className="text-table-header-foreground font-semibold text-center">Delete</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {filteredCareers.map((career) => (
              <TableRow 
                key={career.id} 
                className="bg-[#FFFFFF] hover:bg-[#F9FAFB] transition-colors border-b"
              >
                <TableCell>
                  <div className="h-12 w-20 overflow-hidden rounded-md bg-muted">
                    <img
                      src={career.image}
                      alt={career.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </TableCell>
                <TableCell className="font-medium">{career.title}</TableCell>
                
                <TableCell>
                  <span className="text-[#4A5DF9] font-medium">
                    {career.industry}
                  </span>
                </TableCell>

                <TableCell className="text-muted-foreground">
                  {career.minSalary.toLocaleString()}
                </TableCell>
                <TableCell>
                  {/* UPDATED: Added font-normal to make the text regular weight */}
                  <Badge variant="outline" className="bg-white text-black border-border font-normal">
                    {career.growth}
                  </Badge>
                </TableCell>
                <TableCell className="text-center">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8 text-muted-foreground hover:text-primary hover:bg-transparent"
                    onClick={() => handleEditClick(career)}
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                </TableCell>
                <TableCell className="text-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-destructive hover:bg-transparent hover:text-destructive"
                    onClick={() => handleDelete(career.id)}
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