import React from 'react'
import navlogo from '../assets/logo.png'
import { FcMenu } from "react-icons/fc";

const Navbar = () => {
  return (
    <section className='w-full'>
        <div className='flex  justify-between max-w-[1320px] mx-auto px-4 py-8'>
            <div className='flex lg:flex-row flex-col items-center lg:gap-20 gap-5'>  
            <img src={navlogo} 
            alt="logoimg" />
            <form className=''> 
                
                    <input type="text" name='' id='place' placeholder='Search destinations or activities' className='bg-transparent text-md  font-inter w-64 ' />
                
            </form>
            
        </div>
        
            <ul className='flex gap-10 lg:text-[15px] md:text-[13px] max-md:hidden items-center font-inter
            ' >
                <li className=' hover:border rounded-full hover:bg-via-orange hover:text-white p-2'>Destination</li>
                <li className=' hover:border rounded-full hover:bg-via-orange hover:text-white p-2'>Activities</li>
                <li className=' hover:border rounded-full hover:bg-via-orange hover:text-white p-2'>USD</li>
                <li className=' hover:border rounded-full hover:bg-via-orange hover:text-white p-2'>Sign up</li>
                <li className=' bg-via-orange rounded-2xl px-3 py-1 text-white  text-center'>Log in</li>
            </ul>

            <div className='hidden max-md:block items-center '>
                <FcMenu size={25} />
                </div>
            
            </div>
        
        
    </section>
  )
}

export default Navbar