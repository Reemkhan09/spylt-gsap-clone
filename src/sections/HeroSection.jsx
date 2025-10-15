import {useGSAP} from "@gsap/react";
import {SplitText} from "gsap/all";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const HeroSection = () => {
    useGSAP(() => {
       const titleSplit = SplitText.create(".hero-title",{
          type: "chars",
        });
      
        const tl = gsap.timeline({
          delay: 1,
        });
      
        tl.to(".hero-content", {
         opacity: 1,
         y:0,
         ease: "power1.inOut",
        }) .to(".hero-text-scroll", {
          duration:1,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100% )",
          ease: "circ.out",
      
        }, "-=0.5")
        .from(titleSplit.chars, {
           yPercent: 200,
           stagger: 0.05,
           ease:"power2.out", 
        }, "-=0.5");
        const herotl = gsap.timeline({
            scrollTrigger: {
                trigger: ".hero-container",
                start: "1% top",
                end: "bottom top",
                scrub: true,
               
            },
        });
        herotl.to(".hero-container",{
          rotate: 7,
          scale: 0.9,
          yPercent:30,
          ease: "power1.inOut",
        })
        
    });

  return (
   <section className="bg-[#232224]">
    <div className="hero-container relative w-screen h-dvh overflow-hidden bg-[#faeade]">

        <video 
         className="hidden md:block absolute bottom-0 left-1/2 -translate-x-1/2 object-auto md:scale-150"
         autoPlay  
        muted
        playsInline
      >
        <source src="/videos/milkvid2.mp4" type="video/mp4"
        />
         </video> 

         <img src="./images/firstimg.png" alt="" className="block md:hidden absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-[-60%] object-contain w-auto h-[80vh]" />
  
     <div className="hero-content opacity-0 relative z-10 w-full h-full flex flex-col 2xl:justify-center items-center translate-y-10 2xl:pt-0 md:pt-32 pt-14 ">
        <div className="overflow-hidden">
            <h1 className="hero-title text-[#523122] md:text-[6.5rem] text-[5rem] font-bold uppercase md:leading-[9vw] tracking-[-.35vw] font-['Antonio', sans-serif]">Freaking Delicious</h1>
        </div>
        <div style=
        {
            {
                clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)"
            }
        } className="hero-text-scroll border-[#d9c2b1] border-[.5vw] mb-8 rotate-[-3deg]">
           <div className="hero-subtitle bg-[#a26833] md:py-0 py-2">
            <h1 className="uppercase font-bold text-[#fce1cd] md:text-[6.5rem] text-[5rem] leading-[9vw] tracking-[-.35vw] px-3 pb-5 py-3">Protein + Caffine</h1>
           </div>
        </div>
        <h2 className="text-[#523122] text-center md:max-w-lg max-w-lg px-5 md:text-lg leading-[115%] mt-3 font-[sans-serif]">Live life to the fullest  with SPYLT: Shatter boredom and embrace your inner kid with every deliciously smooth chug.</h2>
       <div className="md:mt-14 mt-10 text-[#523122] bg-[#e3a458] uppercase font-bold text-md rounded-full md:p-4 p-3 md:px-14 px-10 tracking-tighter">
         <p className="text-center">chug a SPLTY</p>
       </div>
     </div>
    </div>
   
   </section>
  )
}

export default HeroSection
