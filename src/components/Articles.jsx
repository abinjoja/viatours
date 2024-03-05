import React from 'react'
import { artCards } from '../constants'
import ArticleCard from './ArticleCard'

const Articles = () => {
  return (
    <section className=' max-w-[1320px] mx-auto flex flex-col gap-10 mb-20 px-4  '>
        <div className='flex justify-between font-inter '>
            <h1 className='font-bold text-3xl'>Travel Articles</h1>
            <button className=''>See all</button>
        </div>
        <div className='grid grid-cols-6  gap-11 sm:px-14
        '>
            {artCards.map((art) => (
                <div className=' lg:col-span-2 md:col-span-3 col-span-4'>
                    <ArticleCard {...art}/>
                     
                </div>
            ))}
        </div>

    </section>
  )
}

export default Articles