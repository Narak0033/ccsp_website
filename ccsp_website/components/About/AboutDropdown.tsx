"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AboutDropdown() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleNavigation = (path: string) => {
    setOpen(false);
    router.push(path);
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button className="flex items-center gap-2 text-base font-medium bg-transparent hover:bg-transparent">
          About
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuItem
          onClick={() => handleNavigation("/about/about-us")}
          className="cursor-pointer"
        >
          About CCSP
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => handleNavigation("/about/about-team")}
          className="cursor-pointer"
        >
          About Team
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
