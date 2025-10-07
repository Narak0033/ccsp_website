"use client";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import { useTranslations } from 'next-intl';



const Hero: React.FC = () => {
  const t = useTranslations('HomePage');
  
  return (
  <section className="mt-20 lg:mt-0 lg:min-h-screen lg:flex lg:items-center lg:justify-center">      

      <div className="container max-w-7xl mx-auto px-4 text-center relative z-10 py-20">
        
        {/* Image with rounded corners */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <div className="relative">
            <div className="absolute inset-0 bg-white/20 rounded-sm blur-xl scale-110"></div>
            <Image
              src="/images/logo/official-logo.png"
              alt="main-logo"
              width={200}
              height={200}
              className="object-cover rounded-sm relative z-10 shadow-2xl"
            />
          </div>
        </div>
        
        {/* Name/Title */}
        <h1 className="text-header font-bold text-white mb-6 animate-fade-in-up">
          Committee for Community Service Program
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto animate-fade-in-up">
          {t("subtext")}
        </p>
        
        {/* Button */}
          <Link href="/about/about-us">
            <Button
              variant="ghost"
              className="bg-[#B22234]/60 w-40 h-full p-4 rounded-full text-base cursor-pointer"
            >
              {t("btn")}<ChevronRightIcon />
            </Button>
          </Link>
        
      </div>

    </section>
  );
};

export default Hero;