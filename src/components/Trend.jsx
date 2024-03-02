import React from 'react'
import { TrendCards } from '../constants'
import TrendCard from './TendCard'

const Trend = () => {
  return (
    <section className=' max-w-[1320px] mx-auto flex flex-col gap-20  py-10 px-4 '>
        <div className=' flex justify-between'>
            <h1 className=' font-bold text-3xl '>Trending destinations</h1>
            <button>See all</button>
        </div>
        <div className='grid grid-cols-8 md:gap-0 gap-5'>
          {TrendCards.map((cards) => (
            <div className='   col-span-3 md:col-span-2 xl:col-span-1'>
              <TrendCard {...cards}/>
              </div>
          ))}
        </div>
    </section>
  )
}

export default Trend