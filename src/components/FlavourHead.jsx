import React from 'react'
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const FlavourHead = () => {
  useGSAP(() => {
    const firstTextSplit = SplitText.create(".one h1",{
        type: "chars"
    });
    const secondTextSplit = SplitText.create(".second h1",{
        type: "chars"
    });
    gsap.from(firstTextSplit.chars, {
      yPercent: 200,
      ease:"power1.in"  ,
      stagger:0.02,
      scrollTrigger: {
        trigger: ".flavours",
        start: "top 30%",
       
      },
    }); 

    gsap.to(".scroll",{
      duration:1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100% )",
      scrollTrigger:{
        trigger: ".flavours",
        start: "top 10%",
       
      }
    });

    gsap.from(secondTextSplit.chars, {
      yPercent: 200,
      ease:"power1.in"  ,
      stagger:0.02,
      scrollTrigger: {
        trigger: ".flavours",
        start: "top 1%",
       
      },
    });
  })
  return (
    <div className='h-screen flex flex-col justify-center items-center md:leading-[7vw] tracking-[-0.3vw] md:text-8xl text-7xl font-semibold ml-10 md:mt-0 mt-[-10rem] relative'>
        <div className='one text-[#523122] overflow-hidden py-10'>
        <h1 className='text-center whitespace-nowrap uppercase'>We have 6</h1>
       </div>
       <div style={{clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100% )"}} className='scroll absolute md:translate-y-6 z-10 rotate-[-3deg] border-[.5vw] border-[#faeade]'>
        <div className='bg-[#a26833] md:text-8xl uppercase tracking-[-0.4vw] px-6 py-4 pt-4'>
            <h1 className='text-[#faeade]'>Freaking</h1>
        </div>
       </div>
       <div className='second text-[#523122] overflow-hidden py-14'>
        <h1 className='text-center whitespace-nowrap uppercase'>Delicious flavours</h1>
       </div>
    </div>
  )
}

export default FlavourHead
