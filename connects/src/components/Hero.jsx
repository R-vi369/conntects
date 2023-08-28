import React from 'react'
import HeroLeft from './HeroLeft'
import HeroRight from './HeroRight'
import '../styles/Hero.scss'

const Hero = () => {
  return (
    <>
    <div className="hero">

     <HeroLeft/>
     <HeroRight/>
    </div>
    
    
    
    </>
  )
}

export default Hero