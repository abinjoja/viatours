import React from 'react'
import bookbg from '../assets/bookbg.png'
import phones from '../assets/phones.png'

const book = () => {
  return (
    <section className=' max-w-[1530px] mx-auto  flex  justify-between mb-20' style={{ backgroundImage:`url(${bookbg})`, width:"screen", height:"514px"}}>
        <div className=' flex flex-col font-inter text-white md:pl-24 pl-4 gap-10 justify-center '>
            <div className='flex flex-col gap-5 '>
                 <h1 className=' font-bold  text-4xl '>Get 5% off your 1st <br />
             app booking</h1>
             <p className=' text-sm font-light'>Booking's better on the app.
              Use promo code <br />
             "TourBooking" to save!</p>
             </div>
             <div className='flex flex-col gap-4'>
                <p className=' font-light'>Get a magic link sent to your email</p>
                 <form className='flex gap-3 '>
                    <input type="text" placeholder='Email' className='p-4 rounded-xl 
                   md:w-[350px] w-[240px]' />
                 
                 <button className='bg-white p-4 text-black rounded-xl '> Send</button> </form>
             </div>
           
        </div> 

        <div className='flex max-lg:hidden '>
            <img src={phones} alt="" />
        </div>

    </section>
  )
}

export default book