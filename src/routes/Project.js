import React from 'react'
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import HeroImage2 from '../components/HeroImage2';
import PricingCard from '../components/PricingCard';


const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroImage2 heading="PROJECTS." text="Check out some of my recent works!" />
      <PricingCard/>
      <Footer/>
    </div>
  )
}

export default Project
