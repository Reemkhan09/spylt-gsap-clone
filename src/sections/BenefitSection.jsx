import React from 'react';
import '../index.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import VideoSection from '../components/VideoSection';

const BenefitSection = () => {
  useGSAP(() => {
   const benefitTl = gsap.timeline({
    scrollTrigger: {
      delay: 1,
     trigger: '.benefit-section',
     start: 'top 50%',
      end: 'top top',
     scrub: 1.5,

    }

   });

   benefitTl.to('.benefit-section .first-heading', {
    duration: 1,
    opacity: 1,
     clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
     ease: 'circ.out',
   })
   .to('.benefit-section .second-heading', {
  duration: 1,
    opacity: 1,
     clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
     ease: 'circ.out',
   })
   .to('.benefit-section .third-heading', {
  duration: 1,
    opacity: 1,
     clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
     ease: 'circ.out',
  })
  .to('.benefit-section .fourth-heading', {
       duration: 1,
    opacity: 1,
     clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
     ease: 'circ.out',
  })

    
  });
  return (
    <section className='benefit-section  min-h-dvh bg-[#222123] overflow-hidden relative font-antonio'>
       <div className='container mx-auto pt-20 text-[#faeade]'>
        <div className="flex flex-col items-center justify-center text-center">
          <p>Unlock the Advantages:<br></br> Explore the key Benefits of choosing SPYLT</p>

          <div className="first-heading mt-20 bg-[#dc9450] rotate-[3deg] md:border-8 border-2 border-[#222123] relative z-10 opacity-0" style={{clipPath:"polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)"}}>
            <div className="md:text-9xl text-6xl tracking-tighter leading-none px-8 py-4 font-bold">SHELF STABLE</div>
          </div>
 
              <div className="second-heading bg-[#faeade] opacity: 0"  style={{clipPath:"polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)"}}>
            <div className="md:text-9xl text-6xl tracking-tighter leading-none px-8 py-4 font-bold text-[#222123]">PROTEIN + CAFFAINE</div>
          </div>

          <div className="third-heading md:mt-1 -mt-2 bg-[#7f3b2d] md:border-8 border-2 border-[#222123] relative z-10 rotate-[1deg] opacity: 0"  style={{clipPath:"polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)"}}>
            <div className="md:text-9xl text-6xl tracking-tighter leading-none px-8 py-4 font-bold">INFINITELY RECYCLEABLE</div>
          </div>

             <div className="fourth-heading md:mt-1 bg-[#a26833] rotate-[-3deg] md:border-8 border-[#222123] opacity: 0"  style={{clipPath:"polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)"}}>
            <div className="md:text-9xl text-6xl tracking-tighter leading-none px-8 py-4 font-bold">LACTOSE FREE</div>
          </div>

          <p className='mt-10 font-sans'>And much more...</p>

        </div>
       </div>

       <div className='video-container relative'>
        <VideoSection />
       </div>
    </section>
  )
}

export default BenefitSection
