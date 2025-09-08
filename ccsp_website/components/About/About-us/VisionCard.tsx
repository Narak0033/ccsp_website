import React from 'react'
import { cards } from "@/constant/constant";
import { Card } from '@/components/ui/card';

interface HoverCardProps {
  title: string;
  description: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconColor: string;
  borderColor: string;
}

const HoverCard: React.FC<HoverCardProps> = ({ title, description, Icon, iconColor, borderColor }) => {
  return (
    <Card className='container relative w-full bg-[#0f142ed9] border-gray-600 rounded-lg shadow-lg overflow-hidden flex items-center justify-center hover:bg-[#161b39d9]'>
      <div className={`relative w-40 h-40 border-2 ${borderColor} rounded-full flex flex-col items-center justify-center group cursor-pointer`}>
        <Icon className={`w-20 h-20 ${iconColor}`} />
    </div>
    <h3 className="text-xl text-center font-bold text-white z-10">{title}</h3>

      {/* Description fades up under title on hover */}
      <p className="leading-relaxed text-center text-gray-200 text-sm">
        {description}
      </p>
    </Card>
    // <div className="relative w-full h-72 bg-[#0f142ed9] rounded-lg shadow-lg overflow-hidden flex items-center justify-center">
    //   {/* Icon Circle */}
    //   <div className={`relative w-40 h-40 bg-[#0f142ed9] border-2 ${borderColor} rounded-full flex flex-col items-center justify-center group cursor-pointer`}>
    //     <Icon className={`w-12 h-12 ${iconColor}`} />

    //     {/* Title Absolute on Icon */}
    //     <h3 className="absolute top-4 text-center font-bold text-lg text-white z-10">{title}</h3>

    //     {/* Description fades up under title on hover */}
    //     <p className="mt-16 text-center text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    //       {description}
    //     </p>
    //   </div>
    // </div>
  )
}

const VisionCard = () => {
  return (
    <section className="my-20">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <HoverCard
            key={index}
            title={card.title}
            description={card.description}
            Icon={card.icon}
            iconColor={card.iconColor}
            borderColor={card.borderColor}
          />
        ))}
      </div>
    </section>
  )
}

export default VisionCard
