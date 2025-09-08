import AboutCCSP from '@/components/About/About-us/AboutCCSP'
import AboutMission from '@/components/About/About-us/AboutMission'
import AboutVision from '@/components/About/About-us/AboutVision'
import CarouselSlide from '@/components/About/About-us/CarouselSlide'
import React from 'react'

const AboutUs = () => {
    return (
    <div className='overflow-hidden'>
      <CarouselSlide/>
      <AboutCCSP/>
      <AboutMission/>
      <AboutVision/>
    </div>
  )
}

export default AboutUs
