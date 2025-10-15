import React from 'react';
import './index.css';
import NavBar from './components/NavBar';
import HeroSection from './sections/HeroSection';
import gsap from 'gsap';
import {ScrollSmoother, ScrollTrigger} from 'gsap/all';
import MessageSection from './sections/MessageSection';
import HorizontalSection from './sections/HorizontalSection';
import {useGSAP} from "@gsap/react";
import NutritionSection from './sections/NutritionSection';
import BenefitSection from './sections/BenefitSection';
import TestimonialSections from './sections/TestimonialSections';
import FinalSection from './sections/FinalSection';
import FooterSection from './sections/FooterSection';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
const App = () => {
  useGSAP(() => {
    ScrollSmoother.create({
       smooth: 3,
      effects: true,
    })
  });
  return (
    <main>
    <NavBar />
    <div id="smooth-wrapper">
    <div id="smooth-content">
    <HeroSection />
    <MessageSection />
    <HorizontalSection />
    <NutritionSection />
    <div>
     <BenefitSection />
    <TestimonialSections />
    </div>
    <FinalSection />
    <FooterSection />
   </div>
   </div>
   </main>
  )
}

export default App


