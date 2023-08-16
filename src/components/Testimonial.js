import React from 'react';
import TestimonialSlider from './TestimonialSlider';

export default function Testimonial() {
  return (
    <section className='mb-24 lg:mb-48'>
    <div className='container mx-auto'>
    <div className='bg-purple-400/10 max-h-[400px]  p-12 rounded-lg'>
    <div className='text-center'><h2 className='text-3xl font-bold mb-6' data-aos='fade-up' data-aos-delay='1600' data-aos-offset='300'>What our Client say</h2>
    <p data-aos='fade-up' data-aos-delay='1800' data-aos-offset='300' className='max-w-2xl mx-auto mb-12'>Lorem ipsum dolor sit amet consectetur adipiscing elit. Iste doloribus inventore hreum cumque blabities miniama.provident deleiti. Elus soluta quisquam ex,nam dolor exceptturi id accusmus.</p>
    </div>

    <div className='' data-aos='fade-up' data-aos-delay='2000' data-aos-offset='300'>
    <TestimonialSlider/>
    </div>
    </div>
    </div>
    
    </section>
  )
}
