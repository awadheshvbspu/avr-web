import React, { useEffect, useState } from 'react'
import './App.css';
import Banner from './components/Banner';
import Header from './components/Header'
import NavMobile from './components/NavMobile';
import Experience from './components/Experience'
import Video from './components/Video';
import Headsets from './components/Headsets';
import Testimonial from './components/Testimonial';
import Explore from './components/Explore';


import Aos from 'aos';
import 'aos/dist/aos.css';


function App() {
  const [nav,setNav] = useState(false)

  useEffect(()=>{
   Aos.init({
    duration: 2500,
    delay:400,
   })
  },[])
  return (
    <>
    <div className='relative overflow-hidden before:w-[600px] before:h-[200px] before:bg-circle before:bg-no-repeat before:absolute before:-top-16 before:left-[600px] before:hidden before:lg:flex'>
    <Header setNav={setNav}/>
    <Banner/>
    <div  className={`${nav ? 'right-0' : '-right-full'} fixed top-0 bottom-0 w-48 transition-all`}>
    <NavMobile setNav={setNav}/>
    </div>
    <Experience/>
    <Video/>
    <Headsets/>
    <Testimonial/>
    <Explore/>
    </div>
    </>
  );
}

export default App;
