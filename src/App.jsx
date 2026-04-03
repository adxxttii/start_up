import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'

function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Footer />
    </>
  )
}

export default App
