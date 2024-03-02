import React from 'react'
import { PopCards } from '../constants'
import PopCard from './PopCard'

const Popular = () => {
  return (
    <section className='max-w-[1320px] mx-auto flex flex-col gap-20  py-10 px-4'> 
        <div className=' flex justify-between'>
            <h1 className=' font-bold font-inter text-3xl '> Find Popular Tours</h1>
            <button>see all</button>
        </div>

        <div className='grid grid-cols-8 gap-4 '>
            {PopCards.map((Pop) => (
                <div className=' md:col-span-2  sm:col-span-4  col-span-6 '>
                    <PopCard{...Pop}/>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Popular