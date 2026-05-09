import React from 'react'
import Hero from '../components/Hero'
import CarouselRibbon from '../components/CarouselRibbon'
import WhyChooseUs from '../components/WhyChooseUs'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <>
      <Hero />
      <CarouselRibbon />
      <WhyChooseUs />
      <Services />
      <Portfolio />
      <Contact />
    </>
  )
}

export default Home
