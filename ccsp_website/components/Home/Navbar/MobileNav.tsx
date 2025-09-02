"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavLinks as LINKS } from "@/constant/constant";

interface Props {
  currentLang: "en" | "km";
}

export default function MobileNav({ currentLang }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden flex items-center">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          <Menu className="w-7 h-7 text-white cursor-pointer" />
        </SheetTrigger>

        <SheetContent side="right" className="w-[280px] p-6 bg-[#0f142ed9] border-none">
          <div className="flex flex-col space-y-4 my-16 text-white">
            {LINKS.map(link => (
              <Link
                key={link.id}
                href={`/${currentLang}${link.url ? `/${link.url}` : ""}`}
                className="text-lg font-medium hover:text-[#1E40AF]"
                onClick={() => setOpen(false)} // close sheet on click
              >
                {link.label}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
