"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavLinks as LINKS } from "@/constant/constant";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";

interface Props {
  currentLang: "en" | "km";
}

export default function MobileNav({ currentLang }: Props) {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const t = useTranslations("Navbar");
  return (
    
    <div className="lg:hidden flex items-center">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          <Menu className="w-7 h-7 text-white cursor-pointer" />
        </SheetTrigger>

        <SheetContent side="right" className="w-[280px] p-6 bg-[#0f142ed9] border-none">
          <div className="flex flex-col space-y-4 my-16 text-white">
            {LINKS.map((link) =>
              link.children ? (
                <div key={link.id} className="flex flex-col">
                  <button
                    className="flex justify-between items-center text-lg font-medium w-full "
                    onClick={() => setAboutOpen(!aboutOpen)}
                  >
                    {t(link.label)}
                    <ChevronDown className={`w-4 h-4 transition-transform ${aboutOpen ? "rotate-180" : ""}`} />
                  </button>
                  {aboutOpen &&
                    link.children.map((child) => (
                      
                      <Link
                        key={child.id}
                        href={`/${currentLang}/${child.url}`}
                        className="ml-4 mt-4 text-base font-normal"
                        onClick={() => setOpen(false)}
                      >
                        {t(child.label)}
                      </Link>
                    ))}
                </div>
              ) : (
                <Link
                  key={link.id}
                  href={`/${currentLang}${link.url ? `/${link.url}` : ""}`}
                  className="text-lg font-medium]"
                  onClick={() => setOpen(false)}
                >
                  {t(link.label)}
                </Link>
              )
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
