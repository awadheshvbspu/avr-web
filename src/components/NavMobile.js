import React from 'react';
import {IoClose} from 'react-icons/io5'

export default function NavMobile({setNav}) {
  return (
    <div className='lg:hidden bg-[#251f3f] w-full h-full' onClick={()=>setNav(false)}>
    <IoClose className='text-3xl absolute left-4 top-6 cursor-pointer'/>
    <ul className='flex flex-col items-center justify-center space-y-8 h-full font-secondary'>
    <li className='text-lg'><a href='#'>Home</a></li>
    <li className='text-lg'><a href='#'>Company</a></li>
    <li className='text-lg'><a href='#'>Features</a></li>
    <li className='btn'><a href='#'>Sign up</a></li>
  </ul>
    </div>
  )
}
