import AboutCCSP from '@/components/About/About-us/AboutCCSP'
import AboutMission from '@/components/About/About-us/AboutMission'
import AboutVision from '@/components/About/About-us/AboutVision'
import CarouselSlide from '@/components/About/About-us/CarouselSlide'
import React from 'react'
import { slide } from "@/constant/constant";
import { useTranslations } from 'next-intl'


const AboutUs = () => {
  const t = useTranslations("SlideTitle");
    return (
    <div className='overflow-hidden'>
      <CarouselSlide slide={slide} title={t("title1")} />
      <AboutCCSP/>
      <AboutMission/>
      <AboutVision/>
    </div>
  )
}

export default AboutUs
