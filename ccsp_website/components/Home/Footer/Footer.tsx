"use client";

import React from "react";
import Image from "next/image";
import { footerLinks as links, socialLink } from "@/constant/constant";
import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";

const Footer = () => {
  const pathname = usePathname();
  const currentLangMatch = pathname.match(/^\/(en|km)/);
  const currentLang = (currentLangMatch ? currentLangMatch[1] : "en") as "en" | "km";

  const t = useTranslations("FooterPage");

  return (
    <footer className="bg-[#0f142e] text-gray-300 py-16">
      {/* Updated grid layout */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
        {/* Support Logos - 1st column */}
        <div className="flex flex-col items-start space-y-">
          <h3 className="text-lg font-semibold text-white">{t("spp")}</h3>
          <div className="flex gap-4 items-center">
            <Image
              src="/images/logo/AUPP-logo.png"
              alt="AUPP Logo"
              width={185}
              height={135}
              style={{ width: "auto", height: "auto" }}
              className="mt-8"
            />
          </div>
        </div>

        {/* Main Logo + About - 2nd column */}
        <div className="flex flex-col items-start space-y-2">
          <h3 className="text-lg font-semibold text-white">{t("create")}</h3>
          <Image
            src="/images/logo/main-logo.png"
            alt="CCSP Logo"
            width={130}
            height={80}
            style={{ width: "auto", height: "auto" }}
          />
        </div>

        {/* Quick Links - 3rd column */}
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold mb-4 text-white">{t("quicklink")}</h3>
          <ul className="space-y-2 text-start md:text-left">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`/${currentLang}/${link.url}`}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {t(link.label)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media - 4th column */}
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold mb-4 text-white">{t("social")}</h3>
          <div className="flex gap-6">
            {socialLink.map((social, idx) => (
              <a
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
              </a>
            ))}
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