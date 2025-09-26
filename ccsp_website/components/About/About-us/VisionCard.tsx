import React from 'react';
import { cards } from "@/constant/constant";
import { Card } from '@/components/ui/card';
import { useTranslations } from "next-intl";

interface HoverCardProps {
  title: string;
  description: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconColor: string;
  borderColor: string;
}

const HoverCard: React.FC<HoverCardProps> = ({ title, description, Icon, iconColor, borderColor }) => {
  return (
    <Card
      data-aos="zoom-in-up"
      className='container relative w-full bg-[#0f142ed9] border-gray-600 rounded-lg shadow-lg overflow-hidden flex flex-col items-center justify-center hover:bg-[#161b39d9] p-6 gap-4'
    >
      <div className={`relative w-40 h-40 border-2 ${borderColor} rounded-full flex items-center justify-center mb-4`}>
        <Icon className={`w-20 h-20 ${iconColor}`} />
      </div>
      <h3 className="text-xl text-center font-bold text-white">{title}</h3>
      <p className="leading-relaxed text-center text-gray-200 text-sm">{description}</p>
    </Card>
  );
};

const VisionCard = () => {
  const t = useTranslations("Vission");

  // Map cards to translation keys
  const translatedCards = cards.map((card, idx) => ({
    ...card,
    titleKey: `title${idx + 1}`,
    descriptionKey: `context${idx + 1}`
  }));

  return (
    <section className="my-20">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
        {translatedCards.map((card, index) => (
          <HoverCard
            key={index}
            title={t(card.titleKey)}
            description={t(card.descriptionKey)}
            Icon={card.icon}
            iconColor={card.iconColor}
            borderColor={card.borderColor}
          />
        ))}
      </div>
    </section>
  );
};

export default VisionCard;
