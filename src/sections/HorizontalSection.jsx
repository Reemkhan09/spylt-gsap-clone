import React from 'react'
import FlavourHead from '../components/FlavourHead'
import Slider from '../components/Slider'


const HorizontalSection = () => {
  return (
   <section className='flavours-section min-h-dvh bg-[#faeade]'>
    <div className='relative h-full flex lg:flex-row flex-col items-center gap-20'>
        <div className='lg:w-[70%] h-80 lg:h-full '>
            <FlavourHead />
        </div>
        <div className='h-full'>
          <Slider />
        </div>
    </div>
   </section>
  )
}

export default HorizontalSection
