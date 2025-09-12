"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";
import LanguageSwitcher from "./LanguageSwitcher";
import { usePathname } from "@/i18n/navigation";
import { NavLinks as LINKS } from "@/constant/constant";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Nav = () => {
  const pathname = usePathname();
  const currentLangMatch = pathname.match(/^\/(en|km)/);
  const currentLang = (currentLangMatch ? currentLangMatch[1] : "en") as "en" | "km";

  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => setNavBg(window.scrollY >= 90);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`transition-all duration-200 h-[12vh] fixed w-full z-50 ${
        navBg ? "bg-[#0f142ed9] shadow-md" : ""
      }`}
    >
      <div className="flex items-center justify-between h-full container">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/images/logo/main-logo.png"
            alt="logo"
            width={150}
            height={200}
            style={{ width: "auto", height: "auto" }}
            priority
          />
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {LINKS.map((link) =>
            link.children ? (
              <DropdownMenu key={link.id}>
                <DropdownMenuTrigger asChild>
                  <Button className="flex items-center gap-2 text-base font-medium bg-transparent hover:bg-transparent">
                    {link.label} <ChevronDown className="w-5 h-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent >
                  {link.children.map((child) => (
                    <DropdownMenuItem key={child.id} asChild >
                      <Link href={`/${currentLang}/${child.url}`}>{child.label}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
            <Link
                  key={link.id}
                  href={`/${currentLang}${link.url ? `/${link.url}` : ""}`}
                  className="text-base hover:text-[#B22234] text-white font-medium transition-all duration-200"
                >
                  {link.label}
            </Link>
            )
          )}
        </div>

        {/* Right side */}
        <div className="flex items-center">
          <LanguageSwitcher currentLang={currentLang} />
          <MobileNav currentLang={currentLang} />
        </div>
      </div>
    </div>
  );
};

export default Nav;
