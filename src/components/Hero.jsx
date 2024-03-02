import React from 'react'
import Hero from '../assets/herobg.png'

const hero = () => {
  return (
      <section className='w-full '>
        <div className=' flex  justify-between max-w-[1320px] mx-auto px-4 py-8' style={{backgroundImage: `url(${Hero}`, width:"200px", height:"screen"}}></div>
      </section>
  )
}

export default hero