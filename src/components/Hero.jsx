import React, { useEffect, useState } from 'react'
import Hero from '../assets/herobg1.png'
import { MdOutlinePlace, MdSafetyCheck } from "react-icons/md";
import { IoCalendarClearOutline } from "react-icons/io5";
import { MdTravelExplore } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { destinations } from '../constants';


const hero = () => {
  const [isOpen , setIsOpen] = useState(false) 
   
  return (
      <section className='w-full '>
        <div className=' flex flex-col  justify-evenly max-w-[1800px] mx-auto px-4 py-8 items-center rounded-xl' style={{backgroundImage: `url(${Hero}`, width:"full", height:"703px"}}>
             
             <div className=' flex flex-col font-inter text-white gap-10 items-center'>
                <h1 className='font-bold text-7xl ' >Your world of joy</h1>
                <p  className=' text-lg ' >From local escapes to far-flung adventures, find what makes you happy anytime, anywhere</p>
             </div>
             <div className= ' bg-white rounded-lg flex  md:flex-row flex-col  gap-8 py-3 px-3 ' data-aos ="fade-up" data-aos-duration="3000">
             
             
              <div className='   '>
                <button 
                onClick={() => setIsOpen((prev) => !prev)}
                className='flex items-center  gap-3'>
                <MdOutlinePlace  className=' border rounded size-10'/> 
                <div className=' font-inter flex justify-between items-center gap-4'>
                    <div><h1 className=' font-semibold text-sm'>Where</h1>
                    <p className=' text-[10px]'>Search Desitination</p></div>
                    {!isOpen ? (
                      <MdKeyboardArrowUp className='h-6' />
                    ):(
                      <MdOutlineKeyboardArrowDown className='h-6 ' />

                    )
                  }
                </div>
                </button>

                {isOpen && <div className=' bg-blue-300 absolute flex flex-col items-start p-2 w-'>

                  {destinations.map((item,i) => (
                    <div className='text-white'>   
                      <h3>{item.city}</h3>
                      </div>
                  ))}
                  </div>
                   }
                   </div>
                


                <div className='flex items-center  gap-3'>
                <IoCalendarClearOutline   className=' border rounded size-10'/> 
                <div className=' font-inter'>
                    <h1 className=' font-semibold text-sm'>When</h1>
                    <p className=' text-[10px]'>feb-02 - mar-02</p>
                </div>
                </div>
                <div className='flex items-center  gap-3'>
                <MdTravelExplore   className=' border rounded size-10 ' /> 
                <div className=' font-inter'>
                    <h1 className=' font-semibold text-sm'>Tour type</h1>
                    <p className=' text-[10px]'>All tour </p>
                </div>
                </div>
                <button className=' bg-via-orange rounded-lg px-6 text-white text-sm  '> Search </button>

             </div>
        </div>
      </section>
  )
}

export default hero