import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {SplitText} from "gsap/all";
import { ScrollTrigger } from "gsap/all";

const MessageSection = () => {
  useGSAP(() => {
        const firstMsgSplit = SplitText.create(".first-msg",{
            type: "words"
        });
          const secondMsgSplit = SplitText.create(".second-msg",{
            type: "words"
        });
          const paraSplit = SplitText.create(".message-content p",{
            type: "words, lines",
            linesClass: "paragraph-line",
        });

        gsap.to(firstMsgSplit.words,{
          color: "#faeade",
          ease:"power1.in"  ,
          stagger:0.5,
          scrollTrigger: {
            trigger: ".message-content",
            start: "top 50%",
            end: "30% center",
            scrub:1,
            
          },
        });

        gsap.to(secondMsgSplit.words,{
          color: "#faeade",
          ease: "power1.in",
          stagger:0.5,
          scrollTrigger: {
            trigger: ".second-msg",
            start: "top 50%",
            end: "bottom center",
            scrub:1,
           
          }, 
        });

        const revealTl = gsap.timeline({
            delay: 1.5,
            scrollTrigger:{
                trigger: ".msg-text",
                start: "top 60%",
              
            }
        });

        revealTl.to(".msg-text",{
           duration: 1,
           clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100% )",
           ease: "circ.inOut",
        });

        const paragraphTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".message-content p",
                start: "top 50%",
            
             
            },
        });
         paragraphTl.from(paraSplit.words, {
           yPercent: 300,
           rotate: 3,
           ease: "power2.out",
           duration: 1,
           stagger: 0.01,
        });

    })
  return (
  <section className='message-content bg-[#7f3b2d] text-[#faeade] min-h-dvh overflow-hidden flex justify-center items-center relative z-20'>
    <div className='container mx-auto flex justify-center items-center py-18 relative'>
        <div className='w-full h-full'>
            <div className='msg-wrapper md:text-[7rem] text-[5rem] font-bold  uppercase leading-[9vw] tracking-[-.35vw] flex flex-col justify-center items-center md:gap-24 gap-24 md:mt-20'>
                <h1 className='first-msg md:max-w-5xl max-w-2xl text-center text-[#faeade10] leading-none'>stir up your <br />fearless past and</h1>

              <div className='msg-text rotate-[3deg]  md:translate-y-8 -translate-y-20 absolute z-10 border-[0.5vw] border-[#7f3b2d]' style={{clipPath:"polygon(0% 0%, 0% 0%, 0% 100%, 0% 100% )"}}>
                <div className='bg-[#e3a458] md:pb-2 px-4 md:py-0 py-6'>

                <h2 className='text-[#7f3b2d]'>fuel up</h2>
                </div>
                </div> 
                <h1 className='second-msg md:max-w-5xl max-w-md text-center leading-none text-[#faeade10]'>Your future with every gulp of perfect protein</h1> 
            </div>
            <div className='flex justify-center items-center md:mt-20 mt-10'>
                <div className='md:max-w-sm max-w-lg flex justify-center items-center overflow-hidden'>
                    <p className='text-[#faeade]  text-center font-[sans-serif] mb-20'>Rev up your rebel spirit and feed the adventure of life with SPYLT, where you’re one chug away from epic nostalgia and fearless fun.</p>
                </div>
            </div>
           <div>

           </div>
        </div>
     
    </div>
 
  </section>
  )
}

export default MessageSection
