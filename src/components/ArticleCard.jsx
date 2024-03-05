import React from 'react'

const ArticleCard = ({imgSrc , date , author , desc}) => {
  return (
    <div className='flex flex-col font-inter gap-9'>
        
        <div className='p-3 rounded-xl ' style={{backgroundImage: `url(${imgSrc})`, height:"300px", width:"screen"}}>
            <button className=' bg-white  rounded-2xl px-3 py-1'> Trips</button>
        </div>
        <div className=' flex flex-col  gap-4 '> 
            <div className=' flex  text-sm font-light divide-x-2 gap-3'>
                <p>{date}</p>
                <p className=' pl-3'>by {author} </p>
            </div>
            <h4 className=' font-semibold text-lg'>{desc}</h4>
        </div>
    </div>
  )
}

export default ArticleCard