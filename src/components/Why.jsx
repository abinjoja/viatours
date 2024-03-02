import React from 'react'
import { whycards } from '../constants'
import WhyCard from './WhyCard'

const Why = () => {
  return (
    <section  className='w-full py-10 px-4'>
        <div className=' max-w-[1320px] mx-auto  flex flex-col gap-20'>
            <div className=' font-inter'>
                <h1 className=' text-3xl font-bold'>Why choose Tourz</h1>
            </div>
            <div className=' grid grid-cols-12 col-span-10'>
                {whycards.map((card) => (
                 <div className=' lg:col-span-3 sm:col-span-6 col-start-4 col-span-8 max-w-[255px]'> 
                    <WhyCard {...card}/>
                 </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Why