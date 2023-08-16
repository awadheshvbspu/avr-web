import React from 'react'

export default function Explore() {
  return (
    <section className='min-h-[400px] mb-16 lg:mb-4'>
    <div className='container mx-auto h-full'></div>
    <div className='h-full bg-explore bg-no-repeat bg-cover p-14 flex flex-col items-start justify-center'>
    <h3 data-aos='fade-right' data-aos-offset='1000' className='text-3xl font-semibold mb-8'>Explore product in new way</h3>
    <p data-aos='fade-right' data-aos-offset='1100'  className='max-w-xs mb-12'>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>

    <form className='flex flex-col w-full space-y-4 gap-x-4 lg:flex-row lg:space-y-0' data-aos='fade-down' data-aos-offset='200'>
    <input type='text' placeholder='Your Email' className='bg-gradiant-to-t  from-[#341D38] to-[#271223] h-12 outline-none rounded-md pl-2 text-black' />
    <button className='btn'>Start</button>
    </form>
    </div>
    
    </section>
  )
}
