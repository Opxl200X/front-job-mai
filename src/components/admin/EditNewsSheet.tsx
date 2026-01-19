// import { useState, useEffect, KeyboardEvent } from "react";
// import { X } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";
// import { Badge } from "@/components/ui/badge";
// import {
//   Sheet,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
// } from "@/components/ui/sheet";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { NewsItem } from "@/data/newsData";

// interface EditNewsSheetProps {
//   open: boolean;
//   onOpenChange: (open: boolean) => void;
//   onSubmit: (data: NewsItem) => void;
//   newsItem: NewsItem | null;
// }

// export function EditNewsSheet({ open, onOpenChange, onSubmit, newsItem }: EditNewsSheetProps) {
//   const [skillInput, setSkillInput] = useState("");
//   const [formData, setFormData] = useState({
//     title: "",
//     summary: "",
//     industry: "",
//     imageUrl: "",
//     sourceUrl: "",
//     sourceName: "",
//     skills: [] as string[],
//     date: "",
//   });

//   useEffect(() => {
//     if (newsItem) {
//       setFormData({
//         title: newsItem.title,
//         summary: "", // Set actual summary if exists in NewsItem
//         industry: newsItem.industry,
//         imageUrl: newsItem.image,
//         sourceUrl: "", 
//         sourceName: newsItem.source,
//         skills: [], 
//         date: newsItem.date || "",
//       });
//     }
//   }, [newsItem]);

//   const handleAddSkill = (e: KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === "Enter" && skillInput.trim()) {
//       e.preventDefault();
//       if (!formData.skills.includes(skillInput.trim())) {
//         setFormData({ ...formData, skills: [...formData.skills, skillInput.trim()] });
//       }
//       setSkillInput("");
//     }
//   };

//   const removeSkill = (skillToRemove: string) => {
//     setFormData({ ...formData, skills: formData.skills.filter((s) => s !== skillToRemove) });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (newsItem) {
//       onSubmit({
//         ...newsItem,
//         title: formData.title,
//         industry: formData.industry,
//         source: formData.sourceName,
//         image: formData.imageUrl,
//         date: formData.date,
//       });
//     }
//     onOpenChange(false);
//   };

//   return (
//     <Sheet open={open} onOpenChange={onOpenChange}>
//       <SheetContent className="w-[400px] sm:w-[540px] overflow-y-auto bg-[#FFFFFF]">
//         <SheetHeader className="mb-6">
//           <SheetTitle className="text-xl font-semibold">Edit News</SheetTitle>
//         </SheetHeader>

//         <form onSubmit={handleSubmit} className="space-y-5 bg-[#FFFFFF]">
//           <div className="space-y-2">
//             <Label htmlFor="edit-title">Title <span className="text-destructive">*</span></Label>
//             <Input
//               id="edit-title"
//               value={formData.title}
//               onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//               required
//               className="bg-[#FFFFFF]"
//             />
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="edit-summary">Summary <span className="text-destructive">*</span></Label>
//             <Textarea
//               id="edit-summary"
//               value={formData.summary}
//               onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
//               className="min-h-[100px] bg-[#FFFFFF]"
//               required
//             />
//           </div>

//           <div className="space-y-2 relative">
//             <Label htmlFor="edit-industry">Industry <span className="text-destructive">*</span></Label>
//             <select
//               tabIndex={-1}
//               required
//               value={formData.industry}
//               onChange={() => {}}
//               onInvalid={(e) => (e.target as HTMLSelectElement).setCustomValidity("please select an industry")}
//               onInput={(e) => (e.target as HTMLSelectElement).setCustomValidity("")}
//               style={{ opacity: 0, position: "absolute", bottom: 0, left: 0, width: "100%", height: "40px", pointerEvents: "none" }}
//             >
//               <option value=""></option>
//               <option value="Technology">Technology</option>
//               <option value="Marketing">Marketing</option>
//               <option value="Design">Design & Creative</option>
//               <option value="Education">Education</option>
//               <option value="Health">Health</option>
//             </select>
//             <Select value={formData.industry} onValueChange={(v) => setFormData({ ...formData, industry: v })}>
//               <SelectTrigger className="bg-[#FFFFFF]">
//                 <SelectValue placeholder="Select Industry" />
//               </SelectTrigger>
//               <SelectContent className="bg-[#FFFFFF]">
//                 <SelectItem value="Technology">Technology</SelectItem>
//                 <SelectItem value="Marketing">Marketing</SelectItem>
//                 <SelectItem value="Design">Design & Creative</SelectItem>
//                 <SelectItem value="Education">Education</SelectItem>
//                 <SelectItem value="Health">Health</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>

//           <div className="space-y-2 relative">
//             <Label htmlFor="edit-skills">
//               Skill Tags <span className="text-destructive">*</span> <span className="text-muted-foreground text-xs font-normal">(Press Enter to add)</span>
//             </Label>
//             <input
//               tabIndex={-1}
//               required
//               value={formData.skills.length > 0 ? "valid" : ""}
//               onInvalid={(e) => (e.target as HTMLInputElement).setCustomValidity("please fill in a skill")}
//               onInput={(e) => (e.target as HTMLInputElement).setCustomValidity("")}
//               style={{ opacity: 0, width: "100%", height: 0, position: "absolute", pointerEvents: "none" }}
//             />
//             <Input
//               id="edit-skills"
//               value={skillInput}
//               onChange={(e) => setSkillInput(e.target.value)}
//               onKeyDown={handleAddSkill}
//               className="bg-[#FFFFFF]"
//             />
//             <div className="flex flex-wrap gap-2 mt-2">
//               {formData.skills.map((skill) => (
//                 <Badge key={skill} variant="secondary" className="gap-1 bg-slate-100 text-slate-800">
//                   {skill}
//                   <X className="h-3 w-3 cursor-pointer hover:text-destructive" onClick={() => removeSkill(skill)} />
//                 </Badge>
//               ))}
//             </div>
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="edit-date">Publish Date <span className="text-destructive">*</span></Label>
//             <Input
//               id="edit-date"
//               type="date"
//               value={formData.date}
//               onChange={(e) => setFormData({ ...formData, date: e.target.value })}
//               required
//               className="bg-[#FFFFFF]"
//             />
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="edit-image">Image URL <span className="text-destructive">*</span></Label>
//             <Input
//               id="edit-image"
//               value={formData.imageUrl}
//               onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
//               required
//               className="bg-[#FFFFFF]"
//             />
//           </div>

//           <div className="flex gap-3 pt-4">
//             <Button
//               type="button"
//               variant="outline"
//               className="flex-1 bg-[#FFFFFF] hover:bg-[#FFFFFF] text-black hover:text-black"
//               onClick={() => onOpenChange(false)}
//             >
//               Cancel
//             </Button>
//             <Button type="submit" className="flex-1 bg-[#4A5DF9] hover:bg-[#4A5DF9]/90 text-white">
//               Update
//             </Button>
//           </div>
//         </form>
//       </SheetContent>
//     </Sheet>
//   );
// }

import { useState, useEffect, KeyboardEvent } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { NewsItem } from "@/data/newsData";

interface EditNewsSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: NewsItem) => void;
  newsItem: NewsItem | null;
}

export function EditNewsSheet({ open, onOpenChange, onSubmit, newsItem }: EditNewsSheetProps) {
  const [skillInput, setSkillInput] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    industry: "",
    imageUrl: "",
    sourceUrl: "",
    sourceName: "",
    skills: [] as string[],
    date: "",
  });

  useEffect(() => {
    if (newsItem) {
      setFormData({
        title: newsItem.title || "",
        summary: "", 
        industry: newsItem.industry || "",
        imageUrl: newsItem.image || "",
        sourceUrl: newsItem.source || "", // Fixed: now mapping from newsItem
        sourceName: newsItem.source || "",
        skills: [], 
        date: newsItem.date || "",
      });
    }
  }, [newsItem]);

  const handleAddSkill = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && skillInput.trim()) {
      e.preventDefault();
      if (!formData.skills.includes(skillInput.trim())) {
        setFormData({ ...formData, skills: [...formData.skills, skillInput.trim()] });
      }
      setSkillInput("");
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setFormData({ ...formData, skills: formData.skills.filter((s) => s !== skillToRemove) });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsItem) {
      onSubmit({
        ...newsItem,
        title: formData.title,
        industry: formData.industry,
        source: formData.sourceName,
        image: formData.imageUrl,
        date: formData.date,
        // Ensure sourceUrl is also included in the data update if your NewsItem interface supports it
        ...(formData.sourceUrl && { sourceUrl: formData.sourceUrl })
      });
    }
    onOpenChange(false);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-[400px] sm:w-[540px] overflow-y-auto bg-[#FFFFFF]">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-xl font-semibold">Edit News</SheetTitle>
        </SheetHeader>

        <form onSubmit={handleSubmit} className="space-y-5 bg-[#FFFFFF]">
          <div className="space-y-2">
            <Label htmlFor="edit-title">Title <span className="text-destructive">*</span></Label>
            <Input id="edit-title" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} required className="bg-[#FFFFFF]" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="edit-summary">Summary <span className="text-destructive">*</span></Label>
            <Textarea id="edit-summary" value={formData.summary} onChange={(e) => setFormData({ ...formData, summary: e.target.value })} className="min-h-[100px] bg-[#FFFFFF]" required />
          </div>

          <div className="space-y-2 relative">
            <Label htmlFor="edit-industry">Industry <span className="text-destructive">*</span></Label>
            <Select value={formData.industry} onValueChange={(v) => setFormData({ ...formData, industry: v })}>
              <SelectTrigger className="bg-[#FFFFFF]"><SelectValue /></SelectTrigger>
              <SelectContent className="bg-[#FFFFFF]">
                <SelectItem value="Technology">Technology</SelectItem>
                <SelectItem value="Marketing">Marketing</SelectItem>
                <SelectItem value="Design">Design & Creative</SelectItem>
                <SelectItem value="Education">Education</SelectItem>
                <SelectItem value="Health">Health</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2 relative">
            <Label htmlFor="edit-skills">Skill Tags <span className="text-destructive">*</span></Label>
            <Input id="edit-skills" value={skillInput} onChange={(e) => setSkillInput(e.target.value)} onKeyDown={handleAddSkill} className="bg-[#FFFFFF]" />
            <div className="flex flex-wrap gap-2 mt-2">
              {formData.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="gap-1 bg-slate-100 text-slate-800">
                  {skill} <X className="h-3 w-3 cursor-pointer hover:text-destructive" onClick={() => removeSkill(skill)} />
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="edit-date">Publish Date <span className="text-destructive">*</span></Label>
            <Input
              id="edit-date"
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              required
              className="bg-[#FFFFFF] text-left block w-full [appearance:none] [&::-webkit-calendar-picker-indicator]:ml-auto"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="edit-image">Image URL <span className="text-destructive">*</span></Label>
            <Input id="edit-image" value={formData.imageUrl} onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })} required className="bg-[#FFFFFF]" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="edit-source-url">Source URL <span className="text-destructive">*</span></Label>
            <Input id="edit-source-url" value={formData.sourceUrl} onChange={(e) => setFormData({ ...formData, sourceUrl: e.target.value })} required className="bg-[#FFFFFF]" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="edit-source-name">Source Name <span className="text-destructive">*</span></Label>
            <Input id="edit-source-name" value={formData.sourceName} onChange={(e) => setFormData({ ...formData, sourceName: e.target.value })} required className="bg-[#FFFFFF]" />
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" className="flex-1 bg-[#FFFFFF] hover:bg-[#FFFFFF] text-black hover:text-black" onClick={() => onOpenChange(false)}>Cancel</Button>
            <Button type="submit" className="flex-1 bg-[#4A5DF9] hover:bg-[#4A5DF9]/90 text-white">Update</Button>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  );
}