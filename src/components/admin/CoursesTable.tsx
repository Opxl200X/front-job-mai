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
    <div>
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">Course</h1>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-64 pl-10"
            />
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Add New
          </Button>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow className="bg-primary/10 hover:bg-primary/10">
            <TableHead className="text-primary font-semibold">Image</TableHead>
            <TableHead className="text-primary font-semibold">Title</TableHead>
            <TableHead className="text-primary font-semibold">Career</TableHead>
            <TableHead className="text-primary font-semibold">Level</TableHead>
            <TableHead className="text-primary font-semibold">Hours</TableHead>
            <TableHead className="text-primary font-semibold text-center">Edit</TableHead>
            <TableHead className="text-primary font-semibold text-center">Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredCourses.map((course) => (
            <TableRow key={course.id}>
              <TableCell>
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-12 w-16 rounded-md object-cover"
                />
              </TableCell>
              <TableCell className="font-medium">{course.title}</TableCell>
              <TableCell>{course.career}</TableCell>
              <TableCell>
                <Badge variant={getLevelVariant(course.level)}>
                  {course.level}
                </Badge>
              </TableCell>
              <TableCell>{course.hours}</TableCell>
              <TableCell className="text-center">
                <Button variant="ghost" size="icon">
                  <Pencil className="h-4 w-4 text-muted-foreground" />
                </Button>
              </TableCell>
              <TableCell className="text-center">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleDelete(course.id)}
                >
                  <Trash2 className="h-4 w-4 text-muted-foreground" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
