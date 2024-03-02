import React from 'react'
import offbg from '../assets/offbg1.png'

const Off = () => {
  return (
    <section 
    className=" max-w-[1530px] mx-auto font-inter my-20 flex items-center "  
    style={{backgroundImage:`url(${offbg})` , 
    width:"screen",  
    height:"607px" }} >
        <div className='flex flex-col gap-5 md:pl-24 pl-5' >


         <h1 className=' sm:text-5xl text-3xl font-bold '>Grab up to
             <span className=' text-via-orange'>35% off <br /> </span>
            on your favorite <br />
            Destination  </h1> 

            <p>Limited time offer, don't miss the opportunity</p>

            <button className=' bg-via-orange rounded-xl  text-white px-5 py-3 text-sm w-[170px]'>Book Now</button>
        </div>

    </section>
  )
}

export default Off