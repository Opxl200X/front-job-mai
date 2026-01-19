import { useState } from "react";
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
// Import the coursesData from your data file
import { coursesData } from "@/data/coursesData";

interface AddLessonsSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: LessonFormData) => void;
}

export interface LessonFormData {
  title: string;
  course: string;
  order: number;
  duration: number;
  externalUrl: string;
}

export function AddLessonsSheet({ open, onOpenChange, onSubmit }: AddLessonsSheetProps) {
  const [formData, setFormData] = useState<LessonFormData>({
    title: "",
    course: "",
    order: 1,
    duration: 0,
    externalUrl: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ title: "", course: "", order: 1, duration: 30, externalUrl: "" });
    onOpenChange(false);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-[400px] sm:w-[540px] overflow-y-auto bg-white">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-xl font-semibold">Add New Lessons</SheetTitle>
        </SheetHeader>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="lesson-title">Title <span className="text-destructive">*</span></Label>
            <Input
              id="lesson-title"
              placeholder="e.g. Introduction to UX"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
              className="bg-[#FFFFFF]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="lesson-course">Course <span className="text-destructive">*</span></Label>
            <Select 
              onValueChange={(v) => setFormData({ ...formData, course: v })} 
              required
              value={formData.course}
            >
              <SelectTrigger className="bg-[#FFFFFF]">
                <SelectValue placeholder="Select Course" />
              </SelectTrigger>
              <SelectContent className="bg-[#FFFFFF]">
                {/* Dynamically map through all courses from your data */}
                {coursesData.map((course) => (
                  <SelectItem key={course.id} value={course.title}>
                    {course.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="lesson-order">Order <span className="text-destructive">*</span></Label>
            <Input
              id="lesson-order"
              type="number"
              value={formData.order}
              onChange={(e) => setFormData({ ...formData, order: Number(e.target.value) })}
              required
              className="bg-[#FFFFFF]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="lesson-duration">Duration (minutes) <span className="text-destructive">*</span></Label>
            <Input
              id="lesson-duration"
              type="number"
              value={formData.duration}
              onChange={(e) => setFormData({ ...formData, duration: Number(e.target.value) })}
              required
              className="bg-[#FFFFFF]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="lesson-url">External URL <span className="text-destructive">*</span></Label>
            <Input
              id="lesson-url"
              placeholder="https://..."
              value={formData.externalUrl}
              onChange={(e) => setFormData({ ...formData, externalUrl: e.target.value })}
              required
              className="bg-[#FFFFFF]"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button 
              type="button" 
              variant="outline" 
              className="flex-1 bg-[#FFFFFF] text-black hover:bg-[#FFFFFF] hover:text-black border-input" 
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button type="submit" className="flex-1 bg-[#4A5DF9] hover:bg-[#4A5DF9]/90 text-white">
              Create
            </Button>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  );
}