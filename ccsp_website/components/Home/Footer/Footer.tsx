import React from "react";
import Image from "next/image";
import { NavLinks, socialLink } from "@/constant/constant";

const Footer = () => {
  return (
    <footer>
    <div className="w-full border-t border-white/20 my-8"/>
      <div className="container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 ">
        
        {/* Logo + About */} 
        <div className="flex flex-col items-center md:items-start col-span-1 md:col-span-1 lg:col-span-2 lg:px-8 max-w-md ">
          <Image
            src="/images/logo/main-logo.png"
            alt="Logo"
            width={225}
            height={100}
            className="mb-4"
            style={{ width: "auto", height: "auto" }}
          />
          <p className="text-sm text-gray-300 md:text-left text-center">
            Dedicated to fostering community engagement and providing impactful
            service programs for a better tomorrow.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col lg:items-start md:items-center">
          <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 md:text-left">
            {NavLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.url}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold mb-4 text-white">
            Social Media
          </h3>
          <div className="flex gap-6">
            {socialLink.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                <Image
                  src={social.src}
                  alt={social.label}
                  width={28}
                  height={28}
                  className="hover:opacity-80 transition-opacity"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center px-4">
        <p className="text-xs text-gray-400 my-12">
          © {new Date().getFullYear()} Committee for Community Service Program.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
