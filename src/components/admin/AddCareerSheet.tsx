import { useState } from "react";
import { X } from "lucide-react";
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

interface AddCareerSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: CareerFormData) => void;
}

export interface CareerFormData {
  title: string;
  description: string;
  industry: string;
  minSalary: number;
  maxSalary: number;
  growth: string;
  image: string;
  responsibilities: string;
  skills: string;
}

export function AddCareerSheet({ open, onOpenChange, onSubmit }: AddCareerSheetProps) {
  const [formData, setFormData] = useState<CareerFormData>({
    title: "",
    description: "",
    industry: "",
    minSalary: 30000,
    maxSalary: 100000,
    growth: "",
    image: "",
    responsibilities: "",
    skills: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      title: "",
      description: "",
      industry: "",
      minSalary: 30000,
      maxSalary: 100000,
      growth: "",
      image: "",
      responsibilities: "",
      skills: "",
    });
    onOpenChange(false);
  };

  const handleCancel = () => {
    onOpenChange(false);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-[400px] sm:w-[540px] overflow-y-auto">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-xl font-semibold">Add New Career</SheetTitle>
        </SheetHeader>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="title">
              Title <span className="text-destructive">*</span>
            </Label>
            <Input
              id="title"
              placeholder="e.g. UX Designer"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">
              Description <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="description"
              placeholder="Write a description of this career..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="min-h-[80px]"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="industry">
              Industry <span className="text-destructive">*</span>
            </Label>
            <Input
              id="industry"
              placeholder="e.g. Technology"
              value={formData.industry}
              onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="minSalary">
              Min Salary(THB) <span className="text-destructive">*</span>
            </Label>
            <Input
              id="minSalary"
              type="number"
              placeholder="30000"
              value={formData.minSalary}
              onChange={(e) => setFormData({ ...formData, minSalary: Number(e.target.value) })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="maxSalary">
              Max Salary(THB) <span className="text-destructive">*</span>
            </Label>
            <Input
              id="maxSalary"
              type="number"
              placeholder="100000"
              value={formData.maxSalary}
              onChange={(e) => setFormData({ ...formData, maxSalary: Number(e.target.value) })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="growth">
              Growth Rate <span className="text-destructive">*</span>
            </Label>
            <Select
              value={formData.growth}
              onValueChange={(value) => setFormData({ ...formData, growth: value })}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Growth Rate" />
              </SelectTrigger>
              <SelectContent className="bg-background">
                <SelectItem value="High">High</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="Low">Low</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="image">
              Image URL <span className="text-destructive">*</span>
            </Label>
            <Input
              id="image"
              placeholder="https:// ..."
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="responsibilities">
              Overview: Key Responsibilities <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="responsibilities"
              placeholder="Write the responsibilities for this career. One per line..."
              value={formData.responsibilities}
              onChange={(e) => setFormData({ ...formData, responsibilities: e.target.value })}
              className="min-h-[80px]"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="skills">
              Required Skills <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="skills"
              placeholder="Write the required skills for this career. One per line..."
              value={formData.skills}
              onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
              className="min-h-[80px]"
              required
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
              Create
            </Button>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  );
}
