"use client";

import React from "react";
import Image from "next/image";
import { footerLinks as links, socialLink } from "@/constant/constant";
import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import Link from "next/link";

const Footer = () => {
  const pathname = usePathname();
  const currentLangMatch = pathname.match(/^\/(en|km)/);
  const currentLang = (currentLangMatch ? currentLangMatch[1] : "en") as "en" | "km";

  const t = useTranslations("FooterPage");

  return (
    <footer className="bg-[#0f142e] text-gray-300 py-16">
      {/* Updated grid layout with consistent gaps */}
      <div className="container max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Main Logo + About - Centered on mobile */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <Image
            src="/images/logo/main-logo.webp"
            alt="CCSP Logo"
            width={200}
            height={150}
            style={{ width: "auto", height: "auto" }}
          />
          <p className="text-sm text-center ">Committee for Community Service Program</p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col lg:items-end item-start">
          <h3 className="text-lg font-semibold mb-4 text-white lg:mr-6 mr-0 ">{t("quicklink")}</h3>
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.id}>
                <Link
                  href={`/${currentLang}/${link.url}`}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {t(link.label)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex flex-col lg:items-end item-start">
          <h3 className="text-lg font-semibold mb-4 text-white">{t("social")}</h3>
          <div className="flex gap-6">
            {socialLink.map((social, idx) => (
              <Link
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src={social.src}
                  alt={social.label}
                  width={28}
                  height={28}
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Supported By */}
        <div className="flex flex-col lg:items-end item-start space-y-4 ">
          <h3 className="text-lg font-semibold  text-white">{t("spp")}</h3>
          <div className="flex gap-4 items-center">
            <Image
              src="/images/logo/AUPP_logo.webp"
              alt="AUPP Logo"
              width={50}
              height={50}
              style={{ width: "auto", height: "auto" }}
            />
            <Image
              src="/header-logo.webp"
              alt="AUPP Logo"
              width={50}
              height={50}
              style={{ width: "auto", height: "auto" }}
            />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 text-center border-t border-white/20 pt-6 text-gray-400 text-xs">
        © {new Date().getFullYear()} Committee for Community Service Program. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;