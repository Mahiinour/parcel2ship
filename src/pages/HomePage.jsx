import React from 'react';
import HowItWorksSection from '../components/HowItWorksSection';  

import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Courier from '../components/Courier';
import ShippingCalculator from '../components/ShippingCalculator';

const HomePage = () =>  {
  
    return (
      <div>
        <Navbar/>
        <HeroSection/>
        <Courier/>
        {/* <HowItWorksSection/> */}
        <ShippingCalculator/>
      </div>
    );
  }

export default HomePage;

