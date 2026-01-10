import { Box, ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const navItems = ["Home", "Career", "AI Match", "Learning Path", "Track Progress", "News"];

export function AdminHeader() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex h-[var(--header-height)] items-center justify-between border-b border-border bg-background px-6">
      <div className="flex items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
          <Box className="h-5 w-5 text-primary-foreground" />
        </div>
        <span className="text-xl font-bold text-foreground">JOBMAIKUB</span>
      </div>
      
      <nav className="hidden items-center gap-8 md:flex">
        {navItems.map((item) => (
          <a
            key={item}
            href="#"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {item}
          </a>
        ))}
      </nav>
      
      <div className="flex items-center gap-2">
        <Avatar className="h-8 w-8">
          <AvatarImage src="" />
          <AvatarFallback className="bg-primary text-primary-foreground text-sm">U</AvatarFallback>
        </Avatar>
        <ChevronDown className="h-4 w-4 text-muted-foreground" />
      </div>
    </header>
  );
}
