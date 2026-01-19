// // import { useState, useEffect } from "react";
// // import { Button } from "@/components/ui/button";
// // import { Input } from "@/components/ui/input";
// // import { Textarea } from "@/components/ui/textarea";
// // import { Label } from "@/components/ui/label";
// // import {
// //   Sheet,
// //   SheetContent,
// //   SheetHeader,
// //   SheetTitle,
// // } from "@/components/ui/sheet";
// // import {
// //   Select,
// //   SelectContent,
// //   SelectItem,
// //   SelectTrigger,
// //   SelectValue,
// // } from "@/components/ui/select";
// // import { Course } from "@/data/coursesData";

// // interface EditCoursesSheetProps {
// //   open: boolean;
// //   onOpenChange: (open: boolean) => void;
// //   onSubmit: (data: Course) => void;
// //   course: Course | null;
// // }

// // export function EditCoursesSheet({ open, onOpenChange, onSubmit, course }: EditCoursesSheetProps) {
// //   const [formData, setFormData] = useState<Partial<Course>>({});

// //   useEffect(() => {
// //     if (course) {
// //       setFormData(course);
// //     }
// //   }, [course]);

// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault();
// //     if (course) {
// //       onSubmit({ ...course, ...formData } as Course);
// //       onOpenChange(false);
// //     }
// //   };

// //   return (
// //     <Sheet open={open} onOpenChange={onOpenChange}>
// //       <SheetContent className="w-[400px] sm:w-[540px] overflow-y-auto bg-white">
// //         <SheetHeader className="mb-6">
// //           <SheetTitle className="text-xl font-semibold">Edit Course</SheetTitle>
// //         </SheetHeader>

// //         <form onSubmit={handleSubmit} className="space-y-5">
// //           <div className="space-y-2">
// //             <Label htmlFor="edit-title">Title <span className="text-destructive">*</span></Label>
// //             <Input
// //               id="edit-title"
// //               value={formData.title || ""}
// //               onChange={(e) => setFormData({ ...formData, title: e.target.value })}
// //               required
// //               className="bg-white"
// //             />
// //           </div>

// //           <div className="space-y-2">
// //             <Label htmlFor="edit-description">Description <span className="text-destructive">*</span></Label>
// //             <Textarea
// //               id="edit-description"
// //               value={formData.description || ""}
// //               onChange={(e) => setFormData({ ...formData, description: e.target.value })}
// //               required
// //               className="bg-white min-h-[100px]"
// //             />
// //           </div>

// //           <div className="space-y-2">
// //             <Label>Career Path <span className="text-destructive">*</span></Label>
// //             <Select 
// //               value={formData.career} 
// //               onValueChange={(v) => setFormData({ ...formData, career: v })} 
// //               required
// //             >
// //               <SelectTrigger className="bg-white">
// //                 <SelectValue placeholder="Select Career Path" />
// //               </SelectTrigger>
// //               <SelectContent className="bg-white">
// //                 <SelectItem value="UX Designer">UX Designer</SelectItem>
// //                 <SelectItem value="Data Scientist">Data Scientist</SelectItem>
// //                 <SelectItem value="Software Engineer">Software Engineer</SelectItem>
// //                 <SelectItem value="Product Manager">Product Manager</SelectItem>
// //               </SelectContent>
// //             </Select>
// //           </div>

// //           <div className="space-y-2">
// //             <Label>Level <span className="text-destructive">*</span></Label>
// //             <Select 
// //               value={formData.level} 
// //               onValueChange={(v: any) => setFormData({ ...formData, level: v })} 
// //               required
// //             >
// //               <SelectTrigger className="bg-white">
// //                 <SelectValue placeholder="Select Level" />
// //               </SelectTrigger>
// //               <SelectContent className="bg-white">
// //                 <SelectItem value="beginner">Beginner</SelectItem>
// //                 <SelectItem value="intermediate">Intermediate</SelectItem>
// //                 <SelectItem value="advanced">Advanced</SelectItem>
// //               </SelectContent>
// //             </Select>
// //           </div>

// //           <div className="space-y-2">
// //             <Label htmlFor="edit-duration">Duration (hours) <span className="text-destructive">*</span></Label>
// //             <Input
// //               id="edit-duration"
// //               type="number"
// //               value={formData.hours || 0}
// //               onChange={(e) => setFormData({ ...formData, hours: Number(e.target.value) })}
// //               required
// //               className="bg-white"
// //             />
// //           </div>

// //           <div className="space-y-2">
// //             <Label htmlFor="edit-url">External URL <span className="text-destructive">*</span></Label>
// //             <Input
// //               id="edit-url"
// //               value={formData.externalUrl || ""}
// //               onChange={(e) => setFormData({ ...formData, externalUrl: e.target.value })}
// //               required
// //               className="bg-white"
// //             />
// //           </div>

// //           <div className="space-y-2">
// //             <Label htmlFor="edit-order">Order <span className="text-destructive">*</span></Label>
// //             <Input
// //               id="edit-order"
// //               type="number"
// //               value={formData.order || 1}
// //               onChange={(e) => setFormData({ ...formData, order: Number(e.target.value) })}
// //               required
// //               className="bg-white"
// //             />
// //           </div>

// //           <div className="space-y-2">
// //             <Label htmlFor="edit-skills">Skills Taught <span className="text-destructive">*</span></Label>
// //             <Textarea
// //               id="edit-skills"
// //               value={formData.skillsTaught || ""}
// //               onChange={(e) => setFormData({ ...formData, skillsTaught: e.target.value })}
// //               required
// //               className="bg-white min-h-[100px]"
// //             />
// //           </div>

// //           <div className="flex gap-3 pt-4">
// //             <Button
// //               type="button"
// //               variant="outline"
// //               className="flex-1 bg-white hover:bg-white text-black hover:text-black border-none"
// //               onClick={() => onOpenChange(false)}
// //             >
// //               Cancel
// //             </Button>
// //             <Button type="submit" className="flex-1 bg-[#4A5DF9] hover:bg-[#4A5DF9]/90 text-white">
// //               Update
// //             </Button>
// //           </div>
// //         </form>
// //       </SheetContent>
// //     </Sheet>
// //   );
// // }

// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";
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
// import { Course } from "@/data/coursesData";

// interface EditCoursesSheetProps {
//   open: boolean;
//   onOpenChange: (open: boolean) => void;
//   onSubmit: (data: Course) => void;
//   course: Course | null;
// }

// export function EditCoursesSheet({ open, onOpenChange, onSubmit, course }: EditCoursesSheetProps) {
//   const [formData, setFormData] = useState<Partial<Course>>({});

//   useEffect(() => {
//     if (course) {
//       setFormData(course);
//     }
//   }, [course]);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (course) {
//       onSubmit({ ...course, ...formData } as Course);
//       onOpenChange(false);
//     }
//   };

//   return (
//     <Sheet open={open} onOpenChange={onOpenChange}>
//       <SheetContent className="w-[400px] sm:w-[540px] overflow-y-auto bg-white">
//         <SheetHeader className="mb-6">
//           <SheetTitle className="text-xl font-semibold">Edit Course</SheetTitle>
//         </SheetHeader>

//         <form onSubmit={handleSubmit} className="space-y-5">
//           <div className="space-y-2">
//             <Label htmlFor="edit-title">Title <span className="text-destructive">*</span></Label>
//             <Input
//               id="edit-title"
//               value={formData.title || ""}
//               onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//               required
//               className="bg-white"
//             />
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="edit-description">Description <span className="text-destructive">*</span></Label>
//             <Textarea
//               id="edit-description"
//               value={formData.description || ""}
//               onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//               required
//               className="bg-white min-h-[100px]"
//             />
//           </div>

//           <div className="space-y-2">
//             <Label>Career Path <span className="text-destructive">*</span></Label>
//             <Select 
//               value={formData.career} 
//               onValueChange={(v) => setFormData({ ...formData, career: v })} 
//               required
//             >
//               <SelectTrigger className="bg-white">
//                 <SelectValue placeholder="Select Career Path" />
//               </SelectTrigger>
//               <SelectContent className="bg-white">
//                 <SelectItem value="UX Designer">UX Designer</SelectItem>
//                 <SelectItem value="Data Scientist">Data Scientist</SelectItem>
//                 <SelectItem value="Software Engineer">Software Engineer</SelectItem>
//                 <SelectItem value="Product Manager">Product Manager</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>

//           <div className="space-y-2">
//             <Label>Level <span className="text-destructive">*</span></Label>
//             <Select 
//               value={formData.level} 
//               onValueChange={(v: any) => setFormData({ ...formData, level: v })} 
//               required
//             >
//               <SelectTrigger className="bg-white">
//                 <SelectValue placeholder="Select Level" />
//               </SelectTrigger>
//               <SelectContent className="bg-white">
//                 <SelectItem value="beginner">Beginner</SelectItem>
//                 <SelectItem value="intermediate">Intermediate</SelectItem>
//                 <SelectItem value="advanced">Advanced</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="edit-duration">Duration (hours) <span className="text-destructive">*</span></Label>
//             <Input
//               id="edit-duration"
//               type="number"
//               value={formData.hours || 0}
//               onChange={(e) => setFormData({ ...formData, hours: Number(e.target.value) })}
//               required
//               className="bg-white"
//             />
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="edit-url">External URL <span className="text-destructive">*</span></Label>
//             <Input
//               id="edit-url"
//               value={formData.externalUrl || ""}
//               onChange={(e) => setFormData({ ...formData, externalUrl: e.target.value })}
//               required
//               className="bg-white"
//             />
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="edit-order">Order <span className="text-destructive">*</span></Label>
//             <Input
//               id="edit-order"
//               type="number"
//               value={formData.order || 1}
//               onChange={(e) => setFormData({ ...formData, order: Number(e.target.value) })}
//               required
//               className="bg-white"
//             />
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="edit-skills">Skills Taught <span className="text-destructive">*</span></Label>
//             <Textarea
//               id="edit-skills"
//               value={formData.skillsTaught || ""}
//               onChange={(e) => setFormData({ ...formData, skillsTaught: e.target.value })}
//               required
//               className="bg-white min-h-[100px]"
//             />
//           </div>

//           <div className="flex gap-3 pt-4">
//             <Button
//               type="button"
//               variant="outline"
//               className="flex-1 bg-white hover:bg-white text-black hover:text-black border-slate-200 shadow-none"
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

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
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
import { Course } from "@/data/coursesData";

interface EditCoursesSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: Course) => void;
  course: Course | null;
}

export function EditCoursesSheet({ open, onOpenChange, onSubmit, course }: EditCoursesSheetProps) {
  // Use Partial to handle potentially undefined initial state before useEffect
  const [formData, setFormData] = useState<Partial<Course & { learningOutcome: string }>>({});

  useEffect(() => {
    if (course) {
      setFormData({
        ...course,
        learningOutcome: (course as any).learningOutcome || "", // Fallback if not in original data
      });
    }
  }, [course]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (course) {
      onSubmit({ ...course, ...formData } as Course);
      onOpenChange(false);
    }
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-[400px] sm:w-[540px] overflow-y-auto bg-white">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-xl font-semibold">Edit Course</SheetTitle>
        </SheetHeader>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="edit-title">Title <span className="text-destructive">*</span></Label>
            <Input
              id="edit-title"
              value={formData.title || ""}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
              className="bg-white"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="edit-description">Description <span className="text-destructive">*</span></Label>
            <Textarea
              id="edit-description"
              value={formData.description || ""}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              required
              className="bg-white min-h-[100px]"
            />
          </div>

          <div className="space-y-2">
            <Label>Career Path <span className="text-destructive">*</span></Label>
            <Select 
              value={formData.career} 
              onValueChange={(v) => setFormData({ ...formData, career: v })} 
              required
            >
              <SelectTrigger className="bg-white">
                <SelectValue placeholder="Select Career Path" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="UX Designer">UX Designer</SelectItem>
                <SelectItem value="Data Scientist">Data Scientist</SelectItem>
                <SelectItem value="Software Engineer">Software Engineer</SelectItem>
                <SelectItem value="Product Manager">Product Manager</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Level <span className="text-destructive">*</span></Label>
            <Select 
              value={formData.level} 
              onValueChange={(v: any) => setFormData({ ...formData, level: v })} 
              required
            >
              <SelectTrigger className="bg-white">
                <SelectValue placeholder="Select Level" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="beginner">Beginner</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="edit-duration">Duration (hours) <span className="text-destructive">*</span></Label>
            <Input
              id="edit-duration"
              type="number"
              value={formData.hours || 0}
              onChange={(e) => setFormData({ ...formData, hours: Number(e.target.value) })}
              required
              className="bg-white"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="edit-url">External URL <span className="text-destructive">*</span></Label>
            <Input
              id="edit-url"
              value={formData.externalUrl || ""}
              onChange={(e) => setFormData({ ...formData, externalUrl: e.target.value })}
              required
              className="bg-white"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="edit-order">Order <span className="text-destructive">*</span></Label>
            <Input
              id="edit-order"
              type="number"
              value={formData.order || 1}
              onChange={(e) => setFormData({ ...formData, order: Number(e.target.value) })}
              required
              className="bg-white"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="edit-skills">Skills Taught <span className="text-destructive">*</span></Label>
            <Textarea
              id="edit-skills"
              value={formData.skillsTaught || ""}
              onChange={(e) => setFormData({ ...formData, skillsTaught: e.target.value })}
              required
              className="bg-white min-h-[100px]"
            />
          </div>

          {/* New Learning Outcome Field */}
          <div className="space-y-2">
            <Label htmlFor="edit-learningOutcome">Learning Outcome <span className="text-destructive">*</span></Label>
            <Textarea
              id="edit-learningOutcome"
              value={formData.learningOutcome || ""}
              onChange={(e) => setFormData({ ...formData, learningOutcome: e.target.value })}
              required
              className="bg-white min-h-[100px]"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              className="flex-1 bg-white hover:bg-white text-black hover:text-black border-slate-200 shadow-none"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button type="submit" className="flex-1 bg-[#4A5DF9] hover:bg-[#4A5DF9]/90 text-white">
              Update
            </Button>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  );
}