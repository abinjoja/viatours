import React from 'react'


const PopCard = ( {imgSrc , place, desc,  rating , price }) => {
  return (
    <div className='border rounded-xl font-inter  '>
        <div className='p-3 flex flex-col gap-2'> 
            
             <div className=' border-b-[1px] flex flex-col  gap-2 pb-3 '>
               <img src={imgSrc} alt="" />
                <p className=' text-[12px] pl-4 text-slate-500'>{place}</p>
                <p className='font-semibold  text-sm'>{desc}</p>
                <p className=' text-[11px] pl-[30%]'>{rating}</p>
            </div>
            <div className='p-3 flex justify-between'>
                <p className=' text-sm'>4 days</p>
                <p className=' text-sm'>from <span className=' font-semibold '>{price}</span></p>
            </div>
        
        </div>
      
    </div>
  )
}

export default PopCard