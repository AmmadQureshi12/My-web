import React from 'react'
import Image from 'next/image'

const Project = () => {
  return (
    <div>
    <section className='mt-60'>
      <h1 className='text-white text-4xl text-center mt-10 animate-bounce duration-500'><span>My</span> Pro<span>je</span>cts</h1>
      <div className='text-white justify-items-center mt-40 grid grid-cols-2 md:grid-cols-3 text-center'>
      
       <div className="items-center justify-center p-4">
      <Image
        src="/count.jpg" alt="Countdown" width={300} height={300} className="w-64 h-40 rounded-lg shadow-lg shadow-white hover:scale-105 duration-500 "/>
        <a href="https://countdown-timer-eta-sepia.vercel.app/" target="_blank"><h3 className='mt-6 mb-10 underline hover:text-black'>Count Down Timer</h3></a>
       </div> 

       <div className=" items-center justify-center p-4">
      <Image 
        src="/resume.png" alt="resumebuilder" width={300} height={300} className="w-64 h-40 rounded-lg shadow-lg shadow-white hover:scale-105 duration-500 "/>
        <a href="https://github.com/AmmadQureshi12/Hacathon-Milestone-3-Editable-Resume-Builder" target="_blank"><h3 className='mt-6 mb-10 underline hover:text-black'>Interactive Resume Builder</h3></a>
       </div>


      <div className=" items-center justify-center p-4">
      <Image
        src="/currency_converter.jpg" alt="currency convertor" width={300} height={300} className="w-64 h-40 rounded-lg shadow-lg shadow-white hover:scale-105 duration-500"/>
        <a href="" target="_blank"><h3 className='mt-6 mb-10 underline hover:text-black'>Currency Convertor</h3></a>
      </div>

      <div className=" items-center justify-center p-4">
      <Image
        src="/To-Do_List_App.webp" alt="todo app" width={300} height={300} className="w-64 h-40 rounded-lg shadow-lg shadow-white hover:scale-105 duration-500"/>
        <a href="https://to-do-app-flax-gamma.vercel.app/" target="_blank"><h3 className='mt-6 mb-10 underline hover:text-black'>To-Do List App</h3></a>
      </div>

      <div className=" items-center justify-center p-4">
      <Image
        src="/Atm.jpg" alt="atm machine" width={300} height={300} className="w-64 h-40 rounded-lg shadow-lg shadow-white hover:scale-105 duration-500"/>
        <a href="https://github.com/AmmadQureshi12/Atm-Project" target="_blank"><h3 className='mt-6 mb-10 underline hover:text-black'>ATM Machine</h3></a>
      </div>

      <div className=" items-center justify-center p-4">
      <Image
        src="/calculatorr.jpg" alt="calculator" width={300} height={300} className="w-64 h-40 rounded-lg shadow-lg shadow-white hover:scale-105 duration-500"/>
        <a href="" target="_blank"><h3 className='mt-6 mb-10 underline hover:text-black'>Calculator</h3></a>
      </div>
      
      </div>
      
        </section>
    </div>
  )
}

export default Project
