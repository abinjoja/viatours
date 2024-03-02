import React from 'react'

const TendCard = ( { imgSrc, title , desc}) => {
  return (
    <div className='flex flex-col  items-center gap-6'>
        <img src={imgSrc} alt="" />
        <div className=' font-inter flex flex-col gap-1 '>
            <h1 className=' font-semibold text-lg '>{title}</h1>
        <p className='text-sm'>{desc}</p>
        </div>
        
    </div>
  )
}

export default TendCard