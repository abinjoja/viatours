import React from 'react'
import Cust1 from '../assets/cust1.png'
import Cust2 from '../assets/cust2.png'

const Custcard = () => {
  return (
    <div className=' flex flex-col items-center gap-12 font-inter max-w-[]  '>
        <div className=' flex flex-col items-center  '> 
            <img src={Cust2} alt=""  className=' absolute left-[150px] sm:left-[285px] md:left-[330px] lg:left-[446px] xl:left-[580px] 2xl:left-[890px]'/>
        <img src={Cust1} alt="" />
        </div>
        <div className=' flex flex-col items-center max-w-[600px] gap-5'>  
            <h1 className=' font-bold text-via-orange '>Excellent Service!</h1>
        <p className=' text-center  font-semibold  leading-8'>I had an amazing experience with this company. The service was
top-notch, and the staff was incredibly friendly. I highly
recommend them!</p>
</div>
        
        <div className=' flex flex-col items-center gap-2  text-sm'>
            <h1 className=' font-semibold'>John Smith</h1>
            <p>Traveler</p>
        </div>
    </div>
  )
}

export default Custcard