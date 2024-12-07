import React from 'react'
import Navbar from './components/navbar/page'
import Hero from './components/hero/page'
import About from './components/about/page'
import Skills from './components/skills/page'
import Contact from './components/contact/page'
import Project from './components/project/page'

const Portfolio = () => {
  return (
    <div>
   <Navbar/>
   <Hero/>
   <About/>
   <Skills/>
   <Project/>
   <Contact/>
   <p className='text-center py-10'><span>&copy;Ammad Qureshi.All rights reserved</span></p>
   
  
  
    </div>
  )
}

export default Portfolio
