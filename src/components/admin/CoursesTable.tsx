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
import { coursesData, Course } from "@/data/coursesData";

export function CoursesTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const [courses, setCourses] = useState<Course[]>(coursesData);

  const filteredCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.career.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (id: number) => {
    setCourses(courses.filter((course) => course.id !== id));
  };

  const getLevelVariant = (level: Course["level"]) => {
    switch (level) {
      case "beginner":
        return "secondary";
      case "intermediate":
        return "outline";
      case "advanced":
        return "default";
      default:
        return "secondary";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold text-foreground">Courses</h1>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-[200px] pl-9"
            />
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Add New
          </Button>
        </div>
      </div>

      <div className="overflow-hidden rounded-lg border border-border">
        <Table>
          <TableHeader>
            <TableRow className="bg-table-header hover:bg-table-header">
              <TableHead className="text-table-header-foreground font-semibold">Image</TableHead>
              <TableHead className="text-table-header-foreground font-semibold">Title</TableHead>
              <TableHead className="text-table-header-foreground font-semibold">Career</TableHead>
              <TableHead className="text-table-header-foreground font-semibold">Level</TableHead>
              <TableHead className="text-table-header-foreground font-semibold text-center">Hours</TableHead>
              <TableHead className="text-table-header-foreground font-semibold text-center">Edit</TableHead>
              <TableHead className="text-table-header-foreground font-semibold text-center">Delete</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCourses.map((course) => (
              <TableRow 
                key={course.id} 
                className="transition-colors hover:bg-table-row-hover"
              >
                <TableCell>
                  <div className="h-12 w-20 overflow-hidden rounded-md bg-muted">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </TableCell>
                <TableCell className="font-medium">{course.title}</TableCell>
                <TableCell className="text-muted-foreground">{course.career}</TableCell>
                <TableCell>
                  <Badge variant={getLevelVariant(course.level)}>
                    {course.level}
                  </Badge>
                </TableCell>
                <TableCell className="text-center">{course.hours}</TableCell>
                <TableCell className="text-center">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8 text-muted-foreground hover:text-primary"
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                </TableCell>
                <TableCell className="text-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-muted-foreground hover:text-destructive"
                    onClick={() => handleDelete(course.id)}
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
