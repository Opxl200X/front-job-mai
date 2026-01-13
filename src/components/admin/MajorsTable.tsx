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
import { majorsData, Major } from "@/data/majorsData";

export function MajorsTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const [majors, setMajors] = useState<Major[]>(majorsData);

  const filteredMajors = majors.filter(
    (major) =>
      major.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      major.thaiName.includes(searchQuery) ||
      major.faculty.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (id: number) => {
    setMajors(majors.filter((major) => major.id !== id));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold text-foreground">Majors</h1>

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

      {/* Table */}
      <div className="overflow-hidden rounded-lg border border-border">
        <Table>
          <TableHeader>
            <TableRow className="bg-table-header hover:bg-table-header">
              <TableHead className="text-white font-semibold">Name</TableHead>
              <TableHead className="text-white font-semibold">Thai Name</TableHead>
              <TableHead className="text-white font-semibold">Faculty</TableHead>
              <TableHead className="text-white font-semibold text-center">Edit</TableHead>
              <TableHead className="text-white font-semibold text-center">Delete</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {filteredMajors.map((major) => (
              <TableRow key={major.id}>
                <TableCell className="font-medium">{major.name}</TableCell>
                <TableCell>{major.thaiName}</TableCell>
                <TableCell>{major.faculty}</TableCell>
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
                    onClick={() => handleDelete(major.id)}
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
