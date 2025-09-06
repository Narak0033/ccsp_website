"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslations } from "next-intl";
import { HelpCircle, CheckCircle2 } from "lucide-react";

export interface AnswerList {
  title?: string;
  items: string[];
}

export interface FAQ {
  questionKey: string;
  answerKey?: string;
  list?: AnswerList[];
}

const qaList: FAQ[] = [
  { questionKey: "qa.question1", answerKey: "qa.answer1" },
  { questionKey: "qa.question2", answerKey: "qa.answer2" },
  { questionKey: "qa.question3", answerKey: "qa.answer3" },
];

const AccordionQA: React.FC = () => {
  const t = useTranslations("FAQPage");

  return (
    <div className="space-y-4">
      <Accordion type="single" collapsible className="w-full space-y-4">
        {qaList.map((item, idx) => (
          <AccordionItem
            key={idx}
            value={`item-${idx}`}
            className="group bg-[#0f142ed9]/50 backdrop-blur-sm border border-gray-700/50 rounded-xl px-6 py-2 text-white hover:border-blue-400/30 hover:bg-[#1a1f3ed9]/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 data-[state=open]:border-blue-400/50 data-[state=open]:bg-[#1a1f3ed9]/70"
          >
            <AccordionTrigger className="text-lg text-white [&_svg]:text-blue-400 [&_svg]:transition-colors [&_svg]:duration-300 hover:text-blue-100 py-6 group-hover:[&_svg]:text-blue-300 data-[state=open]:text-blue-200 flex items-start gap-4 text-left">
              <div className="flex items-start gap-3 flex-1">
                <HelpCircle 
                  size={20} 
                  className="text-blue-400 mt-0.5 flex-shrink-0 transition-colors duration-300 group-hover:text-blue-300" 
                />
                <span className="leading-relaxed">
                  {t(item.questionKey)}
                </span>
              </div>
            </AccordionTrigger>
            
            <AccordionContent className="text-base space-y-4 pb-6 pl-7 text-gray-200 leading-relaxed">
              {item.answerKey && (
                <div className="relative pl-6">
                  <div className="absolute left-0 top-2 w-2 h-2 bg-blue-400 rounded-full opacity-60"></div>
                  <p className="text-gray-300/90 leading-relaxed">
                    {t(item.answerKey)}
                  </p>
                </div>
              )}

              {item.list?.map((listBlock, i) => (
                <div key={i} className="space-y-3 pl-6">
                  {listBlock.title && (
                    <h4 className="font-semibold text-white flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-green-400" />
                      {t(listBlock.title)}
                    </h4>
                  )}
                  <ul className="space-y-2 pl-6">
                    {listBlock.items.map((ans, j) => (
                      <li 
                        key={j} 
                        className="flex items-start gap-3 text-gray-300/90 leading-relaxed"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-400/60 rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>{t(ans)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

    </div>
  );
};

export default AccordionQA;