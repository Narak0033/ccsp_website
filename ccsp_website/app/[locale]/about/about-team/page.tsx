import React from 'react'
import CarouselSlide from '@/components/About/About-us/CarouselSlide'
import AboutTeam from '@/components/About/About-team/AboutTeam'
import { slide } from "@/constant/constant";
import { useTranslations } from 'next-intl'

const Team = () => {
  const t = useTranslations("SlideTitle");
  return (
    <div className='overflow-hidden'>
        <CarouselSlide slide={slide} title={t("title2")} />
        <AboutTeam/>
    </div>
  )
}

export default Team
