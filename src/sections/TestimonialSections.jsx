import React from 'react'
import {cards} from '../constant/flavourData';
import { useRef } from 'react';
import {useGSAP} from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const TestimonialSections = () => {
    const vdRef = useRef([]);
    const sectionRef = useRef(null);
  useGSAP(() => {
    if(window.innerWidth > 768){
      gsap.set( sectionRef.current, {
        marginTop: "-90vh",
      });
    } else{
      gsap.set(sectionRef.current, {
        marginTop: "0vh",
      });
    }
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: sectionRef.current,
    start: "top bottom",
    end: "200% top",
    scrub: true,

  }
});
 tl.to(".testimonial-section .first-title", {
  xPercent : 70,
 }) 
 .to(".testimonial-section .second-title", {
   xPercent: 25,
  }, "<")
  .to(".testimonial-section .third-title", {
     xPercent: -50,
  }, "<");
  const pinTl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "top top",
      end: "250% top",
      scrub: 1.5,
      pin: true,

    }
  });

  pinTl.fromTo(
  ".vd-card",
  {
    yPercent: 120,
    opacity: 0,
  },
  {
    yPercent: -20, 
    opacity: 1,
    stagger: {
      each: 0.25,
      from: "start",
    },
    ease: "power2.out",
  }
); 


  });


  const handlePlay = (index) => {
   const video = vdRef.current[index];
    video.play();
  };

  const handlePause = (index) => {
   const video = vdRef.current[index];
    video.pause();
  }




  return (
    <section ref={sectionRef} className="testimonial-section bg-[#faeade] w-full md:h-[150dvh] h-[100dvh] relative z-30">
      <div className='flex flex-col items-center pt-8 absolute size-full'>
        <h1 className='first-title uppercase md:text-[18rem] text-[8rem] font-bold text-[#222123] leading-none'>What's</h1>
        <h1 className='second-title uppercase md:text-[18rem] text-[8rem] font-bold leading-none text-[#e3a458]'>Everyone</h1>
        <h1 className='third-title uppercase md:text-[18rem] text-[8rem] font-bold text-[#222123] leading-none'>Talking</h1>
      </div>

      <div className='box w-full absolute inset-0 md:flex md:items-center md:justify-center md:gap-0 ps-52 2xl:bottom-32 bottom-[50vh]'>
        <div className='relative w-full h-full flex md:flex-row flex-col items-center justify-center md:ms-[68vw]'>
        {cards.reverse().map((card, index) => 
        

          (
           <div key={index} className={`vd-card flex-none ${index === 0? 'md:relative' : 'md:relative' } absolute md:static md:w-96 w-80 md:rounded-[2vw] rounded-xl overflow-hidden border-[0.6vw] border-[#faeade] ${card.translation} ${card.rotation} `} 
          
           style={
            window.innerWidth <= 768 ? {top:0, left: 0, zIndex: index} : {left: `${index *-15}%`, zIndex: index,}}
            onMouseEnter={()=> handlePlay(index)}
           onMouseLeave={() => handlePause(index)} >
             <video ref={(el) => (vdRef.current[index] = el)} src={`${import.meta.env.BASE_URL}${card.src}`} playsInline muted loop  className='w-full h-full object-cover'/>
           </div>
           )
         
        )}
        </div>
      </div>
    </section>
  )
}

export default TestimonialSections

