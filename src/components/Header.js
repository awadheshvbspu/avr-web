import React from 'react';
import Logo from '../assets/img/logo.svg';
import Nav from './Nav';
import {HiMenu} from 'react-icons/hi'
export default function Header({setNav}) {
  return (
    <>
    <header className='py-6' data-aos='fade-down' data-aos-duration='2000' data-aos-delay='900'>
    <div className='container mx-auto'>
    <div className='flex justify-between items-center'>
   <a href='#'>
   <img src={Logo} alt='' className='h-[30px]'/>
   </a>
   <Nav/>
  {/*nav mobile menu */} 
  <HiMenu onClick={()=>setNav(true)} className='lg:hidden text-3xl text-white cursor-pointer'/>
    </div>
    </div>
    </header>
    </>
  )
}
