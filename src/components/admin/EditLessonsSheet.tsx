// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
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
// import { Lesson } from "@/data/lessonsData";
// import { coursesData } from "@/data/coursesData";

// interface EditLessonsSheetProps {
//   open: boolean;
//   onOpenChange: (open: boolean) => void;
//   onSubmit: (data: Lesson) => void;
//   lesson: Lesson | null;
// }

// export function EditLessonsSheet({ open, onOpenChange, onSubmit, lesson }: EditLessonsSheetProps) {
//   const [formData, setFormData] = useState({
//     title: "",
//     course: "",
//     order: 1,
//     duration: 30,
//   });

//   // Populate form when a lesson is selected
//   useEffect(() => {
//     if (lesson) {
//       setFormData({
//         title: lesson.title,
//         course: lesson.course,
//         order: lesson.order,
//         duration: lesson.duration,
//       });
//     }
//   }, [lesson]);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (lesson) {
//       onSubmit({
//         ...lesson,
//         title: formData.title,
//         course: formData.course,
//         order: formData.order,
//         duration: formData.duration,
//       });
//     }
//     onOpenChange(false);
//   };

//   const handleCancel = () => {
//     onOpenChange(false);
//   };

//   return (
//     <Sheet open={open} onOpenChange={onOpenChange}>
//       <SheetContent className="w-[400px] sm:w-[540px] overflow-y-auto bg-white">
//         <SheetHeader className="mb-6">
//           <SheetTitle className="text-xl font-semibold">Edit Lesson</SheetTitle>
//         </SheetHeader>

//         <form onSubmit={handleSubmit} className="space-y-5">
//           {/* Title Field */}
//           <div className="space-y-2">
//             <Label htmlFor="edit-lesson-title">
//               Title <span className="text-destructive">*</span>
//             </Label>
//             <Input
//               id="edit-lesson-title"
//               placeholder="e.g. Introduction to UX"
//               value={formData.title}
//               onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//               required
//               className="bg-[#FFFFFF]"
//             />
//           </div>

//           {/* Course Selection */}
//           <div className="space-y-2">
//             <Label htmlFor="edit-lesson-course">
//               Course <span className="text-destructive">*</span>
//             </Label>
//             <Select 
//               value={formData.course} 
//               onValueChange={(v) => setFormData({ ...formData, course: v })} 
//               required
//             >
//               <SelectTrigger className="bg-[#FFFFFF]">
//                 <SelectValue placeholder="Select Course" />
//               </SelectTrigger>
//               <SelectContent className="bg-[#FFFFFF]">
//                 {coursesData.map((course) => (
//                   <SelectItem key={course.id} value={course.title}>
//                     {course.title}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//           </div>

//           {/* Order Field */}
//           <div className="space-y-2">
//             <Label htmlFor="edit-lesson-order">
//               Order <span className="text-destructive">*</span>
//             </Label>
//             <Input
//               id="edit-lesson-order"
//               type="number"
//               value={formData.order}
//               onChange={(e) => setFormData({ ...formData, order: Number(e.target.value) })}
//               required
//               className="bg-[#FFFFFF]"
//             />
//           </div>

//           {/* Duration Field */}
//           <div className="space-y-2">
//             <Label htmlFor="edit-lesson-duration">
//               Duration (minutes) <span className="text-destructive">*</span>
//             </Label>
//             <Input
//               id="edit-lesson-duration"
//               type="number"
//               value={formData.duration}
//               onChange={(e) => setFormData({ ...formData, duration: Number(e.target.value) })}
//               required
//               className="bg-[#FFFFFF]"
//             />
//           </div>

//           {/* Form Actions */}
//           <div className="flex gap-3 pt-4">
//             <Button 
//               type="button" 
//               variant="outline" 
//               className="flex-1 bg-[#FFFFFF] text-black hover:bg-[#FFFFFF] hover:text-black border-input" 
//               onClick={handleCancel}
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
import { Lesson } from "@/data/lessonsData";
import { coursesData } from "@/data/coursesData";

interface EditLessonsSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: Lesson) => void;
  lesson: Lesson | null;
}

export function EditLessonsSheet({ open, onOpenChange, onSubmit, lesson }: EditLessonsSheetProps) {
  const [formData, setFormData] = useState({
    title: "",
    course: "",
    order: 1,
    duration: 30,
    externalUrl: "", // Added field
  });

  // Populate form when a lesson is selected for editing
  useEffect(() => {
    if (lesson) {
      setFormData({
        title: lesson.title,
        course: lesson.course,
        order: lesson.order,
        duration: lesson.duration,
        externalUrl: lesson.externalUrl || "", // Populate from lesson data
      });
    }
  }, [lesson]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (lesson) {
      onSubmit({
        ...lesson,
        title: formData.title,
        course: formData.course,
        order: formData.order,
        duration: formData.duration,
        externalUrl: formData.externalUrl, // Include in update
      });
    }
    onOpenChange(false);
  };

  const handleCancel = () => {
    onOpenChange(false);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-[400px] sm:w-[540px] overflow-y-auto bg-white">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-xl font-semibold">Edit Lesson</SheetTitle>
        </SheetHeader>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Title Field */}
          <div className="space-y-2">
            <Label htmlFor="edit-lesson-title">
              Title <span className="text-destructive">*</span>
            </Label>
            <Input
              id="edit-lesson-title"
              placeholder="e.g. Introduction to UX"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
              className="bg-[#FFFFFF]"
            />
          </div>

          {/* Course Selection */}
          <div className="space-y-2">
            <Label htmlFor="edit-lesson-course">
              Course <span className="text-destructive">*</span>
            </Label>
            <Select 
              value={formData.course} 
              onValueChange={(v) => setFormData({ ...formData, course: v })} 
              required
            >
              <SelectTrigger className="bg-[#FFFFFF]">
                <SelectValue placeholder="Select Course" />
              </SelectTrigger>
              <SelectContent className="bg-[#FFFFFF]">
                {coursesData.map((course) => (
                  <SelectItem key={course.id} value={course.title}>
                    {course.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Order Field */}
          <div className="space-y-2">
            <Label htmlFor="edit-lesson-order">
              Order <span className="text-destructive">*</span>
            </Label>
            <Input
              id="edit-lesson-order"
              type="number"
              value={formData.order}
              onChange={(e) => setFormData({ ...formData, order: Number(e.target.value) })}
              required
              className="bg-[#FFFFFF]"
            />
          </div>

          {/* Duration Field */}
          <div className="space-y-2">
            <Label htmlFor="edit-lesson-duration">
              Duration (minutes) <span className="text-destructive">*</span>
            </Label>
            <Input
              id="edit-lesson-duration"
              type="number"
              value={formData.duration}
              onChange={(e) => setFormData({ ...formData, duration: Number(e.target.value) })}
              required
              className="bg-[#FFFFFF]"
            />
          </div>

          {/* External URL Field */}
          <div className="space-y-2">
            <Label htmlFor="edit-lesson-url">
              External URL <span className="text-destructive">*</span>
            </Label>
            <Input
              id="edit-lesson-url"
              placeholder="https://..."
              value={formData.externalUrl}
              onChange={(e) => setFormData({ ...formData, externalUrl: e.target.value })}
              required
              className="bg-[#FFFFFF]"
            />
          </div>

          {/* Form Actions */}
          <div className="flex gap-3 pt-4">
            <Button 
              type="button" 
              variant="outline" 
              className="flex-1 bg-[#FFFFFF] text-black hover:bg-[#FFFFFF] hover:text-black border-input" 
              onClick={handleCancel}
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