import React from 'react'
import HeroLeft from './HeroLeft'
import HeroRight from './HeroRight'
import HeroRight2 from './HeroRight2'
import '../styles/Hero.scss'

const Hero = () => {
  return (
    <>
    <div className="hero">

     <HeroLeft/>
     <HeroRight/>
     <HeroRight2/>
    </div>
    
    
    
    </>
  )
}

export default Hero