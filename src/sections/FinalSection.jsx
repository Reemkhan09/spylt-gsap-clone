
import { gsap } from "gsap";
 import {useGSAP} from "@gsap/react";
 import { ScrollTrigger } from "gsap/ScrollTrigger";
import {SplitText} from "gsap/all";
 gsap.registerPlugin(ScrollTrigger);
 gsap.registerPlugin(SplitText)

const FinalSection = () => {
  
  useGSAP(() => {
   const titleSplit =  SplitText. create(".first", {
      type: "chars",

    });

      const finalTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".final",
                start: "top 50%",
            },
        });

    finalTl.from(titleSplit.chars,{
      yPercent: 200,
      opacity: 0,
      duration: 1,
      stagger: 0.05,
      ease: "power2.out",
    })
 const revealTl = gsap.timeline({
            
            scrollTrigger:{
                trigger: ".final",
                start: "top 30%",
              
            }
        });

        revealTl.to(".second",{
           duration: 1,
           clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100% )",
           ease: "circ.inOut",
        });

  });
  
  return (
    <section className='final md:h-[140dvh] h-[70dvh] relative overflow-hidden bg-[#222123]'>
      <img src="./svg/curve.svg" alt="curve" className="w-full object-cover md:-translate-y-15 -translate-y-5" />
      <div className='md:h-[130vh] h-[50vh] relative md:pt-[20vh] bg-[url(./svg/footerbg.svg)] md:bg-cover bg-center bg-no-repeat w-full'>
        <div className='left-side flex flex-col justify-start ml-[8vw] relative'>
         <h1 className='first uppercase md:text-[8vw] text-[12vw] text-[#e9ddcd] font-bold tracking-tighter w-fit max-w-[100vw] md:ml-[6vw]'>right around</h1>
         <div style={{clipPath:"polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"}} className="second absolute top-[35%] rotate-[3deg] z-10">
         <div className=' bg-[#e3a458]'>
           <h1 className='uppercase md:text-[8vw] text-[12vw] text-[#523122] font-bold tracking-tighter px-4 leading-none py-2'>the corner</h1>
          </div> 
          </div> 

          <p className='text-[#faeade] md:text-[1.1vw] text-[2vw] md:mt-[18vh] mt-[14vh] md:w-[20%] w-[56%] font-[sans-serif] leading-1'>Buy our drinks at your local store or get them delivered(to your door).</p>

          <button className='bg-[#232224] w-[180px] text-[#e9ddcd] px-[16px] md:py-[16px] py-[10px] rounded-full md:mt-16 mt-2'>FIND IN STORES</button>
        </div>
      </div>
    </section>
  )
}

export default FinalSection
