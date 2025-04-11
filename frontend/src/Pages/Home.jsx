import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import PopularCourse from '../components/PopularCourse'
import Footer from '../components/Footer'
import FeatureSection from '../components/FeatureSection'

export default function Home() {
  return (
    <div className='w-full'>

    <Navbar/>
    <HeroSection/>
    <FeatureSection/>
   
    <PopularCourse/>
    <Footer/>    

 
    </div>

    
  )
}
