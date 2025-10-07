import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

const AboutClub = () => {
  const t = useTranslations("AboutPage");
  return (
    <div className="relative overflow-hidden">

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:px-2 lg:px-0 items-center">
          <div className="space-y-6">
            <div className="relative">
              <h1 data-aos="fade-up" className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                <span className="text-white bg-clip-text ">{t("title")}</span>
                <br />
                <span className="text-white bg-clip-text">AUPP CCSP</span>
              </h1>
            </div>
          </div>

          <div className="space-y-8">
            {/* Modern content card */}
            <div data-aos="fade-up" className="relative ">
              {/* Glassmorphism effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-lg border border-gray-700/50"></div>

              <div className="relative p-8 space-y-6">
                <p className="text-white/90 text-lg leading-relaxed font-light">
                  The Committee for Community Service Program{" "}
                  <span className="font-bold text-[#B22234] bg-white/10 px-2 py-1 rounded-md border border-[#B22234]/30">
                    (CCSP)
                  </span>{" "}
                  {t("content")}
                </p>

                <Link href="/about/about-us">
                  <Button
                    variant="ghost"
                    className="bg-[#B22234]/60 w-35 h-full p-4 rounded-full text-base cursor-pointer"
                  >
                    {t("btn")}
                    <ArrowRight />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="absolute -right-4 top-4 w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-60 animate-bounce delay-700"></div>
            <div className="absolute -left-2 bottom-8 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-40 animate-bounce delay-1000"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutClub;
