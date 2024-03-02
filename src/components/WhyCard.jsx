import React from 'react'

const WhyCard = ( { imgSrc , title , desc }) => {
  return (
    <div className=' font-inter flex flex-col items-start gap-5'>
        <img src={imgSrc} alt="" />
        <div className='flex flex-col gap-2'> 
            <h1 className='font-semibold text-lg '>{title}</h1>
            <p className=' text-sm leading-6'>{desc}</p>
        </div>
       
    </div>
  )
}

export default WhyCard