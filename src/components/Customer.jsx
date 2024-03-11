import React from 'react'
import Custcard from './Custcard'



const Customer = () => {
  return (
    <section className=' mb-20 flex flex-col gap-20 max-w-[1320px] mx-auto px-4'>
        <h1 className='   text-2xl md:text-3xl lg:text-4xl font-bold font-inter text-center'>Customer Reviews</h1>
                <div>
          <Custcard/>
            
        </div>
    </section>
  )
}

export default Customer