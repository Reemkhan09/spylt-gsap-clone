import React from 'react'

const NavBar = () => {
  return (
 <nav className='fixed top-0 left-0 z-50 md:p-9 p-4 flex justify-between w-full'>
   <img className='md:w-24 w-20' src="public/svg/nav-logo.svg" alt="nav-logo" /> 
   <button className='bg-white rounded-full tracking-tighter leading-none font-[600] px-6 py-4  hover:bg-[#c58162] hover:text-[#faeade]  font-["7b_Proxima Nova", sans-serif]'>FIND IN STORES</button>
 </nav>
  )
}

export default NavBar
