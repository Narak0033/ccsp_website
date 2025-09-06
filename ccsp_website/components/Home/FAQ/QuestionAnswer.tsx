"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import AccordionQA from "./AccordionQA";
import Image from "next/image";
import { SquareUser, Sparkles } from "lucide-react";

const QuestionAnswer = () => {
  return (
    <section className="container my-28 md:my-40" aria-labelledby="faq-main-title">
      {/* Header */}
      <header className="flex items-center justify-center mb-20">
        <div className="w-full max-w-2xl lg:max-w-4xl flex flex-col items-center gap-6 text-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-xl opacity-30"></div>
            <h1
              id="faq-main-title"
              className="relative text-header font-bold leading-snug bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent"
            >
              Frequently Asked Questions
            </h1>
          </div>

          <p className="subtext text-gray-300/90 leading-relaxed max-w-xl">
            Find answers to common questions about our services. Can&apos;t find what you&apos;re looking for? 
            <span className="text-blue-400"> We&apos;re here to help.</span>
          </p>
        </div>
      </header>

      {/* Main content */}
      <main className="grid grid-cols-1 lg:grid-cols-2 mt-16 gap-12 max-w-6xl mx-auto items-start">
        {/* Questions */}
        <section
          className="order-2 lg:order-1"
          aria-labelledby="faq-questions-title"
        >
          <div className="mb-10">
            <h2
              id="faq-questions-title"
              className="text-2xl lg:text-3xl font-semibold text-white mb-3 flex items-center gap-3"
            >
              <Sparkles size={24} className="text-blue-400" />
              FAQ List
            </h2>
          </div>
          <AccordionQA />
        </section>

        {/* Image */}
        <figure
          className="order-1 lg:order-2 flex items-center justify-center"
          aria-labelledby="faq-image-caption"
        >
       
              <Image
                src="/images/home/FAQs-amico.png"
                alt="Frequently Asked Questions illustration"
                width={350}
                height={350}
                style={{ width: "auto", height: "auto" }}
                className="transition-transform "
              />
        </figure>
      </main>

      {/* Contact Section */}
      <aside
        className="lg:px-8 my-20"
        aria-labelledby="faq-contact-title"
      >
        <Card
          className="relative text-center bg-[#0f142ed9] border border-gray-700/50 text-white overflow-hidden px-8 py-20 md:py-18"
          role="region"
          aria-labelledby="faq-contact-title"
        >
          <div className="relative z-10 max-w-4xl mx-auto">
            <h3
              id="faq-contact-title"
              className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 leading-relaxed text-center"
            >
              Still have questions? Contact us for more information
            </h3>
            <Link href="/contact">
              <Button
                variant="ghost"
                className="bg-[#B22234]/60 w-45 h-full p-4 rounded-full text-base"
              >
                <SquareUser /> Contact Us
              </Button>
            </Link>
          </div>
        </Card>
      </aside>
    </section>
  );
};

export default QuestionAnswer;