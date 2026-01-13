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
import { careersData, Career } from "@/data/careersData";

export function CareersTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const [careers, setCareers] = useState<Career[]>(careersData);

  const filteredCareers = careers.filter(
    (career) =>
      career.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      career.industry.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (id: number) => {
    setCareers(careers.filter((career) => career.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold text-foreground">Career</h1>
        
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
              <TableHead className="text-table-header-foreground font-semibold">Industry</TableHead>
              <TableHead className="text-table-header-foreground font-semibold">Min Salary</TableHead>
              <TableHead className="text-table-header-foreground font-semibold">Growth</TableHead>
              <TableHead className="text-table-header-foreground font-semibold text-center">Edit</TableHead>
              <TableHead className="text-table-header-foreground font-semibold text-center">Delete</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCareers.map((career) => (
              <TableRow 
                key={career.id} 
                className="transition-colors hover:bg-table-row-hover"
              >
                <TableCell>
                  <div className="h-12 w-20 overflow-hidden rounded-md bg-muted">
                    <img
                      src={career.image}
                      alt={career.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </TableCell>
                <TableCell className="font-medium">{career.title}</TableCell>
                <TableCell>
                  <Badge variant="outline" className="bg-white text-black border-border">
                    {career.industry}
                  </Badge>
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {career.minSalary.toLocaleString()}
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className="bg-white text-black border-border">
                    {career.growth}
                  </Badge>
                </TableCell>
                <TableCell className="text-center">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8 text-muted-foreground hover:text-primary hover:bg-transparent"
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                </TableCell>
                <TableCell className="text-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-muted-foreground hover:text-destructive hover:bg-transparent"
                    onClick={() => handleDelete(career.id)}
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
