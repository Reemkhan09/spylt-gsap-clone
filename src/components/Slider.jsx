
import React, {useRef} from 'react'
import { useMediaQuery } from 'react-responsive'
import {flavourlists} from '../constant/flavourData'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';




const Slider = () => {
 const sliderRef = useRef();

 const isTablet = useMediaQuery({
  query: "(max-width: 1024px)",
 });

 useGSAP(() => {

  const scrollAmount = sliderRef.current.scrollWidth - window.innerWidth;

  let tl;
  if(!isTablet) {

    tl = gsap.timeline({
     scrollTrigger:{
       trigger: ".flavours-section",
      start: "2% top",
       end: `+=${scrollAmount + 1000}px`,
       scrub: true,
       pin: true,
     }

   })
   tl.to(".flavours-section", {
     x: `-${scrollAmount + 1000}px`,
     ease: "power1.inOut",
     });

    gsap.timeline({
    scrollTrigger : {
      trigger: ".flavours-section",
      start: "top top",
      end: "bottom 80%",
      scrub: true,
     containerAnimation: tl,
    },
  })
  .to(".first",{
    xPercent: -30,
    ease: "power1.inOut",
  }).to(".scroll",{
    xPercent: -22,
    ease: "power1.inOut"
  }, "<").to(".second",{
    xPercent: -10,
    ease: "power1.inOut"
  }, "<");

  
}
});



  return (
    <div ref={sliderRef} className='slider lg:h-dvh min-h-dvh md:min-h-fit w-full md:mt-20 mt-20'>
     <div className='drinks w-full h-full flex md:flex-row flex-col items-center lg:gap-52 md:gap-24 gap-4 flex-nowrap'>
        {
          flavourlists.map((flavour) => {
            return (
              <div key={flavour.name} className={`relative z-30 lg:w-[50vw] w-[80vw] lg:h-[80vh] md:w-[90vw] h-80 mb-60 ${flavour.rotation}`}>
                <img src={`${import.meta.env.BASE_URL}svg/${flavour.color}-bg.svg`} alt="background" className='absolute bottom-0' />

                <img src={`${import.meta.env.BASE_URL}images/${flavour.color}.webp`} alt="bottle" className='absolute left-[50%] -translate-x-1/2 bottom-0 md:h-full h-[68vh]'/>

                <img src={`${import.meta.env.BASE_URL}images/${flavour.color}-element.webp`} alt="" className='absolute md:top-0 md:bottom-auto bottom-10 w-full'/>

                <h1 className='absolute md:bottom-8 md:left-10 bottom-5 left-5 text-[#faeade] md:text-4xl text-3xl font-semibold uppercase tracking-tighter'>{flavour.name}</h1>
              </div>


            )
          })
        }
      </div> 

    
       
    </div>
  )
}

export default Slider
