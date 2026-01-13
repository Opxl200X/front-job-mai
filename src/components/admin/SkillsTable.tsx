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

export function SkillsTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const [skills, setSkills] = useState<Skill[]>(skillsData);

  const filteredSkills = skills.filter(
    (skill) =>
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (id: number) => {
    setSkills(skills.filter((skill) => skill.id !== id));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold text-foreground">Skills</h1>

        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search skills..."
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

      {/* Table */}
      <div className="overflow-hidden rounded-lg border border-border">
        <Table>
          <TableHeader>
            <TableRow className="bg-table-header hover:bg-table-header">
              <TableHead className="text-table-header-foreground font-semibold">
                Skill Name
              </TableHead>
              <TableHead className="text-table-header-foreground font-semibold text-center">
                Category
              </TableHead>
              <TableHead className="text-table-header-foreground font-semibold text-center">
                Edit
              </TableHead>
              <TableHead className="text-table-header-foreground font-semibold text-center">
                Delete
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {filteredSkills.map((skill) => (
              <TableRow
                key={skill.id}
                className="transition-colors hover:bg-table-row-hover"
              >
                <TableCell className="font-medium">
                  {skill.name}
                </TableCell>

                <TableCell className="text-center capitalize">
                  {skill.category}
                </TableCell>

                <TableCell className="text-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-muted-foreground hover:bg-transparent hover:text-muted-foreground"
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                </TableCell>
                <TableCell className="text-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-destructive hover:bg-transparent hover:text-destructive"
                    onClick={() => handleDelete(skill.id)}
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
