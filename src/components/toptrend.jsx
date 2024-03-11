import React from 'react'
import PropTypes from 'prop-types'
import { PopCards } from '../constants'
import PopCard from './PopCard'

const toptrend = props => {
  return (
    <section className='max-w-[1530px] mx-auto bg-slate-100 rounded-lg px-4 mb-10'>
      <div className=' max-w-[1320px] mx-auto py-24'>
        <div className=' flex font-inter justify-between'>
          <h1 className=' font-bold text-3xl'>Top Trending</h1>
          <button>See all</button>
        </div>

        <div className=' grid  grid-cols-8 gap-4 py-14 pl-10 md:pl-20 lg:pl-0 '>
          {PopCards.slice(0,4).map((pop) => (
            <div className=' col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2  bg-white rounded-xl' > 
              <PopCard {...pop}/> </div>
          ))}
        </div>

      </div>
    </section>
  )
}

toptrend.propTypes = {}

export default toptrend