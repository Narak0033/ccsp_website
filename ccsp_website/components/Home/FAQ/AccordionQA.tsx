"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslations } from "next-intl";


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
  { questionKey: "qa.question3", answerKey: "qa.answer3" },
];

const AccordionQA: React.FC = () => {
  const t = useTranslations("FAQPage");

  return (
    <Accordion type="single" collapsible className="w-full">
      {qaList.map((item, idx) => (
        <AccordionItem
          key={idx}
          value={`item-${idx}`}
          className="space-y-2  text-white"
        >
          <AccordionTrigger className="text-lg text-white [&_svg]:text-white">
            {t(item.questionKey)}
          
          </AccordionTrigger>
          <AccordionContent className="text-base space-y-3 ">
            {item.answerKey && <p>{t(item.answerKey)}</p>}

            {item.list?.map((listBlock, i) => (
              <div key={i} className="space-y-1">
                {listBlock.title && (
                  <h4 className="font-medium">{t(listBlock.title)}</h4>
                )}
                <ul className="list-disc pl-6 space-y-1">
                  {listBlock.items.map((ans, j) => (
                    <li key={j}>{t(ans)}</li>
                  ))}
                </ul>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionQA;
