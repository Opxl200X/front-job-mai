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
import { facultiesData, Faculty } from "@/data/facultiesData";

export function FacultyTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const [faculties, setFaculties] = useState<Faculty[]>(facultiesData);

  const filteredFaculties = faculties.filter(
    (f) =>
      f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.thaiName.includes(searchQuery)
  );

  const handleDelete = (id: number) => {
    setFaculties(faculties.filter((f) => f.id !== id));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold text-foreground">Faculties</h1>

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
              <TableHead className="text-white font-semibold">Color</TableHead>
              <TableHead className="text-white font-semibold text-center">Edit</TableHead>
              <TableHead className="text-white font-semibold text-center">Delete</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {filteredFaculties.map((f) => (
              <TableRow key={f.id}>
                <TableCell className="font-medium">{f.name}</TableCell>
                <TableCell>{f.thaiName}</TableCell>
                <TableCell className="font-medium">{f.color}</TableCell>
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
                    onClick={() => handleDelete(f.id)}
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
