import React from 'react'
import Hero from './Hero/Hero'
import AboutClub from './About/AboutClub'
import ClubProject from './Projects/ClubProject'

const Home = () => {
  return ( 
    <div className='overflow-hidden '>
      <Hero/>
      <AboutClub/>
      <ClubProject/>
    </div>
  )
}

export default Home
