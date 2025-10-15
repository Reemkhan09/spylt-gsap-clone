import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
 import { ScrollTrigger } from 'gsap/all';
  import { useMediaQuery } from 'react-responsive';
   gsap.registerPlugin(ScrollTrigger);
    const VideoSection = () => { 
      const isMobile = useMediaQuery({ query:'(max-width: 768px)', })
       useGSAP(() => { if(!isMobile){
       const tl = gsap.timeline({
    scrollTrigger: 
  { trigger: '.video-section',
     start: "top top",
      end: "+=100%",
       scrub: 1,
        pin : true,
       pinSpacing: false,
     }
   })
  tl.to(".box",
     { clipPath: "circle(100% at 50% 50%)", ease: "power1.inOut", duration: 1,

      });
     }
   });
    return ( 
    <div className={`video-section relative z-10 ${isMobile ? "h-screen" : "md:h-[200vh] md:-translate-y-[15%]"}`}>
 <div style={{clipPath: isMobile ? "circle(100% at 50% 50%)" : "circle(6% at 50% 50%)"}} className={`box absolute inset-0 h-full w-full md:-mt-40 p-0 `}>
 <video src='/videos/milkvid3.mp4' autoPlay loop muted playsInline className='w-full h-full object-cover'> 
   </video>
  <div className='absolute md:top-[50%] top-[30%] md:left-1/2 left-[50%] -translate-x-[50%] -translate-y-[50%] md:scale-100 scale-50'>
   <img src="/svg/circletext.svg" alt="" className='animate-[spin_20s_linear_infinite]'/> 
     <div className='absolute md:top-[50%] top-[50%] md:left-1/2 left-[50%] -translate-x-[50%] -translate-y-[50%] md:size-[5vw] flex justify-center items-center bg-[#ffffff1a] backdrop-blur-sm rounded-full'> 
         <img src="svg/buttonimg.svg" alt="" />
          </div>
        </div>  
           </div>
     </div>
     ) }
                             
                             
   export default VideoSection
