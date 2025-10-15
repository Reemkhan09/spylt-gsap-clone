import React from 'react'
import {nutrientLists} from '../constant/flavourData';
import {useMediaQuery} from 'react-responsive';
import {useEffect, useState} from 'react';
import {useGSAP} from "@gsap/react";
import gsap from 'gsap';
import {SplitText} from 'gsap/all';

const NutritionSection = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const [lists, setLists] = useState(nutrientLists);

  useEffect(() => {
    if (isMobile) {
      setLists(nutrientLists.slice(0, 3));
    } else{
      setLists(nutrientLists);
    }
  }, [isMobile]);

  useGSAP(() => {
    const titleSplit = SplitText.create(".nutrition-title",{
     type: "chars", 
    });
    const paragraphSplit = SplitText.create(".nutrition-section p",{
      type: "words, lines",
    });

    const contentTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".nutrition-section",
        start: "top center",
       
      }
    });
    contentTl.from(titleSplit.chars,{
      yPercent: 100,
      stagger: 0.02,
       ease: "power2.out"

    }).from(paragraphSplit.words,{
      yPercent: 300,
      rotate: 3,
      ease: "power1.inOut",
      duration: 1,
      stagger: 0.01,
    });

    const textTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".nutrition-section",
        start:"top 80%",
       
      }
    });
    textTl.to(".nutrition-text",{
      duration: 1,
      opacity: 1,
      clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100% )",
      ease: "power1.inOut",
    })
  });

  return (
    <section className='nutrition-section h-[115dvh] relative overflow-hidden bg-[#e3d3bc]'>
      <img src="public/svg/curve2.svg" alt="" className='w-full object-cover' />

      <img src="/images/glass.webp" alt="" className='md:w-full w-[100%] md:h-full h-[80vh] md:object-contain object-cover absolute top-4 md:mt-4 mt-[8rem]'/>

        <div className='flex md:flex-row flex-col justify-between px-6'>
      <div className='relative inline-block md:translate-y-20'>

        <div className='2xl:text-[8.5rem] md:text-9xl text-7xl font-bold uppercase md:leading-[8vw] tracking-[-.35vw] relative flex flex-col justify-center items-center md:mt-0 mt-8'>
            <div className='overflow-hidden place-self-start'>
                <h1 className="nutrition-title">It still does</h1>
            </div>
            <div className='nutrition-text border-[#e3d3bc] border-8 rotate-[-3deg] text-nowrap absolute md:translate-y-32 translate-y-24 md:translate-x-0 -translate-x-32 ' style={{clipPath:"polygon(0% 0%, 0% 0%, 0% 100%, 0% 100% )"}}>
                <div className='bg-[#a26833] px-6 py-4'>
                    <h1 className='md:text-9xl uppercase tracking-tighter font-semibold text-[#e3d3bc]'>Body good</h1>
                </div>
            </div>
        </div>

        </div>
        <div className='flex md:w-[20%] max-w-md md:justify-center items-center mb-40 md:translate-y-20'>
            <p className='hidden md:block text-[16px] md:text-right text-balance font-[sans-serif]'>Milk contains wide array of nutrients including vitamins, minerals, and protein and this is lactose free</p>
           </div>
        </div>
        <div className='w-full px-10 absolute md:bottom-8 bottom-32 md:left-36'>
            <div className='bg-[#fdebd2] md:border-8 border-[#e8ddca] rounded-full max-auto max-w-6xl md:py-6 py-5 flex justify-between items-center font-[sans-serif]'>
              {lists.map((nutrient, index) => 
               <div key={index} className='relative flex-1 col-center'>
                <div className='text-[#a26833] text-center'>
                    <p className='text-md '>{nutrient.label}</p>
                    <p className='text-sm md:mb-0 mb-2'>up to</p>
                    <p className='text-3xl font-bold font-[antonio]'>{nutrient.amount}</p>
                </div>
                {index !== lists.length - 1 && <div className='absolute top-1/2 right-0 transform -translate-y-1/2 md:h-24 h-16 w-px bg-[#C89C6E]'></div>}
               </div>
              )}
            
            </div>
      </div>
    </section>
  )
}

export default NutritionSection
