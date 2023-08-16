import React from 'react';
import Img1 from '../assets/img/exp-img1.png';
import Img2 from '../assets/img/exp-img2.png'

export default function Experience() {
  return (
    <section className='mb-12 lg:mb-24'>
    <div className='container mx-auto'>
    <div className='flex flex-col lg:flex-row min-h-[480px] lg:space-x-20 '>
    <div className='flex-1 flex space-x-6 items-center lg:space-x-12'>
    <div className='self-start' data-aos='fade-down' data-aos-delay='400'>
    <img src={Img1} alt='' />
    </div>
    <div className='self-end' data-aos='fade-up'>
    <img src={Img2} alt='' />
    </div>
    </div>
    <div className='flex-1 flex flex-col items-start justify-center mt-6 lg:mt-0' data-aos='fade-left' data-aos-delay='400'><h2 className='text-3xl font-bold mb-6'>New Experience In Playing Games</h2>
    <p className='font-secondary mb-6'>Lorem ipsum dolor sit amet consectetur adipiscing elit.Iste doloribus inventore hreum cumque blabities miniama. Hic, Nam!</p>
    <button className='btn'>Get it Now</button>
    </div>
    </div>
    </div>
    
    </section>
  )
}
