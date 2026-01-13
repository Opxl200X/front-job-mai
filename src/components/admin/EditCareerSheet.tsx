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
import { Career } from "@/data/careersData";

interface EditCareerSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: Career) => void;
  career: Career | null;
}

export function EditCareerSheet({ open, onOpenChange, onSubmit, career }: EditCareerSheetProps) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    industry: "",
    minSalary: 30000,
    maxSalary: 100000,
    growth: "" as "High" | "Medium" | "Stable" | "",
    image: "",
    responsibilities: "",
    skills: "",
  });

  useEffect(() => {
    if (career) {
      setFormData({
        title: career.title,
        description: "",
        industry: career.industry,
        minSalary: career.minSalary,
        maxSalary: 100000,
        growth: career.growth,
        image: career.image,
        responsibilities: "",
        skills: "",
      });
    }
  }, [career]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (career) {
      onSubmit({
        ...career,
        title: formData.title,
        industry: formData.industry,
        minSalary: formData.minSalary,
        growth: formData.growth as "High" | "Medium" | "Stable",
        image: formData.image,
      });
    }
    onOpenChange(false);
  };

  const handleCancel = () => {
    onOpenChange(false);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-[400px] sm:w-[540px] overflow-y-auto">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-xl font-semibold">Edit Career</SheetTitle>
        </SheetHeader>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="edit-title">
              Title <span className="text-destructive">*</span>
            </Label>
            <Input
              id="edit-title"
              placeholder="e.g. UX Designer"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="edit-description">
              Description <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="edit-description"
              placeholder="Write a description of this career..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="min-h-[80px]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="edit-industry">
              Industry <span className="text-destructive">*</span>
            </Label>
            <Input
              id="edit-industry"
              placeholder="e.g. Technology"
              value={formData.industry}
              onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="edit-minSalary">
              Min Salary(THB) <span className="text-destructive">*</span>
            </Label>
            <Input
              id="edit-minSalary"
              type="number"
              placeholder="30000"
              value={formData.minSalary}
              onChange={(e) => setFormData({ ...formData, minSalary: Number(e.target.value) })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="edit-maxSalary">
              Max Salary(THB) <span className="text-destructive">*</span>
            </Label>
            <Input
              id="edit-maxSalary"
              type="number"
              placeholder="100000"
              value={formData.maxSalary}
              onChange={(e) => setFormData({ ...formData, maxSalary: Number(e.target.value) })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="edit-growth">
              Growth Rate <span className="text-destructive">*</span>
            </Label>
            <Select
              value={formData.growth}
              onValueChange={(value) => setFormData({ ...formData, growth: value as "High" | "Medium" | "Stable" })}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Growth Rate" />
              </SelectTrigger>
              <SelectContent className="bg-background">
                <SelectItem value="High">High</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="Stable">Stable</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="edit-image">
              Image URL <span className="text-destructive">*</span>
            </Label>
            <Input
              id="edit-image"
              placeholder="https:// ..."
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="edit-responsibilities">
              Overview: Key Responsibilities <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="edit-responsibilities"
              placeholder="Write the responsibilities for this career. One per line..."
              value={formData.responsibilities}
              onChange={(e) => setFormData({ ...formData, responsibilities: e.target.value })}
              className="min-h-[80px]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="edit-skills">
              Required Skills <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="edit-skills"
              placeholder="Write the required skills for this career. One per line..."
              value={formData.skills}
              onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
              className="min-h-[80px]"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              className="flex-1"
              onClick={handleCancel}
            >
              Cancel
            </Button>
            <Button type="submit" className="flex-1">
              Update
            </Button>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  );
}
