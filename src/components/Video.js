import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import '../modalVideo.scss';
import { BsPlayCircleFill } from 'react-icons/bs';

export default function Video() {

  const [isOpen,setIsOpen] = useState(false)
  return (
    <div className='bg-[#534686]/30 py-6'>
    <div className='container mx-auto'>
    <div className='flex flex-col justify-center items-center lg:flex-row lg:justify-between'>
    <h3 className='text-2xl font-semibold mb-8 lg:mb-0' data-aos='fade-right' data-aos-delay='350'>Awesome experience with virtual World.</h3>
    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId='NOk_M1Ib5F0' onClose={() =>setIsOpen(false)} />

    <div className='bg-videoBg bg-no-repeat w-[270px] h-[180px] flex items-center justify-center' data-aos='fade-left' data-aos-delay='350'>
    <div className='cursor-pointer' onClick={() =>setIsOpen(!isOpen)}>
    <BsPlayCircleFill className='text-4xl text-white/80 hover:text-white hover:scale-110 transition-all'/>
    </div>
    </div>
    </div>
    </div>
    
    </div>
  )
}
