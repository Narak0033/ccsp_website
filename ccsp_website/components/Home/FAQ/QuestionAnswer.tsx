"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import AccordionQA from "./AccordionQA";
import Image from "next/image";
import { SquareUser } from "lucide-react";

const QuestionAnswer = () => {
  return (
    <section className="container my-20" aria-labelledby="faq-main-title">
      {/* Header */}
      <header className="flex items-center justify-center">
        <div className="w-full max-w-2xl lg:max-w-3xl flex flex-col items-center gap-3">
          <h1
            id="faq-main-title"
            className="text-header font-bold leading-snug text-center"
          >
            Frequently Asked Questions
          </h1>

          <p className="subtext text-center text-gray-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
            minus? Odit ex harum optio magni? Distinctio totam suscipit quod
            enim numquam, provident perspiciatis nemo quasi maiores sequi cumque.
            Omnis, harum.
          </p>
        </div>
      </header>

      {/* Main content */}
      <main className="grid grid-cols-1 lg:grid-cols-2 mt-16 gap-6 max-w-5xl mx-auto">
        {/* Questions */}
        <section
          className="order-2 lg:order-1"
          aria-labelledby="faq-questions-title"
        >
          <h2
            id="faq-questions-title"
            className="text-2xl lg:text-3xl mb-8 font-medium text-white"
          >
            FAQ List
          </h2>
          <AccordionQA />
        </section>

        {/* Image */}
        <figure
          className="order-1 lg:order-2 flex items-start justify-center"
          aria-labelledby="faq-image-caption"
        >
          <Image
            src="/images/home/FAQs-amico.png"
            alt="qa"
            width={300}
            height={300}
            style={{ width: "auto", height: "auto" }}
          />
        </figure>
      </main>

      {/* Contact Section */}
      <aside
        className="gap-6 my-12 max-w-6xl mx-auto"
        aria-labelledby="faq-contact-title"
      >
        <Card
          className="relative text-center bg-[#0f142ed9] text-white overflow-hidden px-8 py-20 md:py-18"
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
            <Link href="/us">
              <Button
                variant="ghost"
                className="bg-[#B22234]/60 w-60 h-full p-4 rounded-full text-base"
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
