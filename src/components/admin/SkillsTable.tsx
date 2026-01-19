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
// import { skillsData, Skill } from "@/data/skillsData";
// import { AddSkillsSheet, SkillFormData } from "./AddSkillsSheet";
// import { EditSkillsSheet } from "./EditSkillsSheet";

// export function SkillsTable() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [skills, setSkills] = useState<Skill[]>(skillsData);
//   const [isAddSheetOpen, setIsAddSheetOpen] = useState(false);
//   const [isEditSheetOpen, setIsEditSheetOpen] = useState(false);
//   const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

//   const filteredSkills = skills.filter(
//     (skill) =>
//       skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       skill.faculty.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       skill.major.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const handleAddSkill = (data: SkillFormData) => {
//     const newSkill: Skill = {
//       id: Math.max(...skills.map((s) => s.id), 0) + 1,
//       ...data,
//     };
//     setSkills([newSkill, ...skills]);
//   };

//   const handleEditClick = (skill: Skill) => {
//     setSelectedSkill(skill);
//     setIsEditSheetOpen(true);
//   };

//   const handleUpdateSkill = (updatedSkill: Skill) => {
//     setSkills(skills.map((s) => (s.id === updatedSkill.id ? updatedSkill : s)));
//   };

//   const handleDelete = (id: number) => {
//     setSkills(skills.filter((skill) => skill.id !== id));
//   };

//   return (
//     <div className="space-y-6">
//       <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
//         <h1 className="text-3xl font-bold text-foreground">Skills</h1>
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

//       <AddSkillsSheet open={isAddSheetOpen} onOpenChange={setIsAddSheetOpen} onSubmit={handleAddSkill} />
//       <EditSkillsSheet open={isEditSheetOpen} onOpenChange={setIsEditSheetOpen} onSubmit={handleUpdateSkill} skill={selectedSkill} />

//       <div className="overflow-hidden rounded-lg border border-border">
//         <Table>
//           <TableHeader>
//             <TableRow className="bg-table-header hover:bg-table-header">
//               <TableHead className="text-table-header-foreground font-semibold">Skill Name</TableHead>
//               <TableHead className="text-table-header-foreground font-semibold">Faculty</TableHead>
//               <TableHead className="text-table-header-foreground font-semibold">Major</TableHead>
//               <TableHead className="text-table-header-foreground font-semibold text-center">Edit</TableHead>
//               <TableHead className="text-table-header-foreground font-semibold text-center">Delete</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {filteredSkills.map((skill) => (
//               <TableRow key={skill.id} className="bg-[#FFFFFF] hover:bg-[#F9FAFB] transition-colors border-b">
//                 <TableCell className="font-medium">{skill.name}</TableCell>
//                 <TableCell className="text-[#4A5DF9] font-medium">{skill.faculty}</TableCell>
//                 <TableCell className="text-muted-foreground">{skill.major}</TableCell>
//                 <TableCell className="text-center">
//                   <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:bg-transparent hover:text-[#4A5DF9]" onClick={() => handleEditClick(skill)}>
//                     <Pencil className="h-4 w-4" />
//                   </Button>
//                 </TableCell>
//                 <TableCell className="text-center">
//                   <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:bg-transparent hover:text-destructive" onClick={() => handleDelete(skill.id)}>
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { skillsData, Skill } from "@/data/skillsData";
import { AddSkillsSheet, SkillFormData } from "./AddSkillsSheet";
import { EditSkillsSheet } from "./EditSkillsSheet";

export function SkillsTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const [skills, setSkills] = useState<Skill[]>(skillsData);
  const [isAddSheetOpen, setIsAddSheetOpen] = useState(false);
  const [isEditSheetOpen, setIsEditSheetOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const filteredSkills = skills.filter(
    (skill) =>
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.faculty.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.major.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddSkill = (data: SkillFormData) => {
    const newSkill: Skill = {
      id: Math.max(...skills.map((s) => s.id), 0) + 1,
      ...data,
    };
    setSkills([newSkill, ...skills]);
  };

  const handleEditClick = (skill: Skill) => {
    setSelectedSkill(skill);
    setIsEditSheetOpen(true);
  };

  const handleUpdateSkill = (updatedSkill: Skill) => {
    setSkills(skills.map((s) => (s.id === updatedSkill.id ? updatedSkill : s)));
  };

  const handleDelete = (id: number) => {
    setSkills(skills.filter((skill) => skill.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold text-foreground">Skills</h1>
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

      <AddSkillsSheet open={isAddSheetOpen} onOpenChange={setIsAddSheetOpen} onSubmit={handleAddSkill} />
      <EditSkillsSheet open={isEditSheetOpen} onOpenChange={setIsEditSheetOpen} onSubmit={handleUpdateSkill} skill={selectedSkill} />

      <div className="overflow-hidden rounded-lg border border-border">
        <Table>
          <TableHeader>
            <TableRow className="bg-table-header hover:bg-table-header">
              <TableHead className="text-table-header-foreground font-semibold">Skill Name</TableHead>
              <TableHead className="text-table-header-foreground font-semibold">Faculty</TableHead>
              <TableHead className="text-table-header-foreground font-semibold">Major</TableHead>
              <TableHead className="text-table-header-foreground font-semibold text-center">Edit</TableHead>
              <TableHead className="text-table-header-foreground font-semibold text-center">Delete</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredSkills.map((skill) => (
              <TableRow key={skill.id} className="bg-[#FFFFFF] hover:bg-[#F9FAFB] transition-colors border-b">
                <TableCell className="font-medium">{skill.name}</TableCell>
                
                {/* UPDATED: Changed from text-[#4A5DF9] to text-muted-foreground (Grey) */}
                <TableCell className="text-muted-foreground">{skill.faculty}</TableCell>
                
                <TableCell className="text-muted-foreground">{skill.major}</TableCell>
                <TableCell className="text-center">
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:bg-transparent hover:text-[#4A5DF9]" onClick={() => handleEditClick(skill)}>
                    <Pencil className="h-4 w-4" />
                  </Button>
                </TableCell>
                <TableCell className="text-center">
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:bg-transparent hover:text-destructive" onClick={() => handleDelete(skill.id)}>
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