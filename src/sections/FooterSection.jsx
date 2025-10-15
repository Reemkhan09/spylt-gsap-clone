import React from 'react'
import { FaYoutube, FaInstagram, FaTiktok, FaArrowRight } from "react-icons/fa";

const FooterSection = () => {
  return (
    <section className='h-[130vh] bg-[#232224] relative'>
        <div className='overflow-hidden z-10'>
          <h1 className='footer-title uppercase text-[#faeade] text-center md:text-[7rem] text-[5rem] font-bold md:mt-[7rem] mt-[2rem]'>#chugresponsibly</h1>

        </div>

        <video src="./videos/milkfooter.mp4" autoPlay loop muted playsInline className='absolute top-0 object-contain mix-blend-lighten'/>
          <div className='btn absolute top-[35%] left-[40%] md:-translate-y-10 -translate-y-36 flex gap-4 z-20'>
             <div className='circle md:w-[4.5rem] w-[3rem] md:h-[4.5rem] h-[3rem] bg-transparent rounded-full border-gray-500 border-[1px] hover:backdrop-blur-md  hover:bg-white/10' style={{ display: "flex", alignItems: "center", justifyContent: "center", fontSize:window.innerWidth < 768 ? "1.5rem" : "2rem",  }}>
               <FaYoutube color="#ffffff" />
             </div>
             <div className='circle md:w-[4.5rem] w-[3rem] md:h-[4.5rem] h-[3rem] bg-transparent rounded-full border-gray-500 border-[1px] hover:backdrop-blur-md  hover:bg-white/10' style={{ display: "flex", alignItems: "center", justifyContent: "center", fontSize: window.innerWidth < 768 ? "1.5rem" : "2rem", }}>
              <FaInstagram color="#ffffff" />
             </div>
             <div className='circle md:w-[4.5rem] w-[3rem] md:h-[4.5rem] h-[3rem] bg-transparent rounded-full border-gray-500 border-[1px] hover:backdrop-blur-md  hover:bg-white/10' style={{ display: "flex", alignItems: "center", justifyContent: "center", fontSize: window.innerWidth < 768 ? "1.5rem" : "2rem",  }}>
             <FaTiktok color="#ffffff" />
             </div>
          </div>

          <div className='mt-60 md:px-10 px-5 flex gap-10 md:flex-row flex-col justify-between text-[#faeade] text-md font-small font-[sans-serif]'>
            <div className='flex items-center md:gap-16 gap-40'>
              <div>
                <p>SPYLT Flavours</p>
              </div>
              <div className='ml-14'>
                <p>Chug club</p>
                <p>Student marketing</p>
                <p>Dairy dealer</p>
              </div>
              <div>
                <p>Company</p>
                <p>Contacts</p>
                <p>Tasty Talk</p>
              </div>
            </div>

            <div className='md:max-w-lg'>
              <p>Get Exclusive Early Access and Stay Informed Updates, Events and More!</p>
             
             <div className='flex justify-between items-center border-b border-[#D9D9D9] p-5 md:mt-10 mt-4'>
              <input type="email"  placeholder="Enter your email" className='w-full 2xl:text-4xl md:text-3xl text-2xl placeholder:font-bold placeholder:tracking-tighter bg-[#232224]'/>
              <FaArrowRight className="text-white text-4xl font-medium" />
             </div>
            </div>
            
          </div>
    </section>
  )
}

export default FooterSection
