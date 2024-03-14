import React from 'react'
import todo1 from '../assets/todo1.png'
import todo2 from '../assets/todo2.png'
import todo3 from '../assets/todo3.png'
import todo4 from '../assets/todo4.png'
import todo5 from '../assets/todo5.png'
import todo6 from '../assets/todo6.png'


const Todo = () => {
  return (
    <section className='max-w-[1320px] mx-auto text-white font-inter mb-20  px-4 '>
        <div className=' font-inter flex justify-between'>
          <h1 className=' text-3xl  font-bold  text-black '>Popular things to do</h1>
          <button className=' text-black'>See all </button>
        </div>
        <div className=' grid grid-cols-12 pt-10 gap-7'>
          <div className='flex flex-col md:col-span-3 sm:col-span-5 col-span-12 gap-7'>
            <div className=' rounded-xl bg-cover hover:scale-105 transition duration-700' style={{backgroundImage: `url(${todo1})`, height: '240px', width: "screen"}}>
              <h1 className='pt-48 md:pl-8 pl-2'>
                Cruises
              </h1>
            </div>
            <div className=' hover:scale-105 transition duration-700 bg-cover rounded-xl' style={{backgroundImage: `url(${todo2})`, height: '240px', width: "screen"}}>
              <h1 className='pt-48 md:pl-8 pl-2'>
                Museum Tours
              </h1>
            </div>
          </div>



          <div className='rounded-xl bg-cover md:col-span-4 sm:col-span-7 col-span-12 flex  flex-col justify-end hover:scale-105 transition duration-700' style={{backgroundImage:`url(${todo3})`, width: "screen", height: "510px"}} >
          <h1 className='pb-7 pl-8'>
                Beach Tours
              </h1>
            
            
          </div>



          <div className=' md:col-span-5 col-span-12  '>
            <div  className=' hover:scale-105 transition duration-700 flex flex-col justify-end  rounded-xl bg-cover' style={{backgroundImage:`url(${todo4})`, width: "screen", height: "240px"}}> 
            <h1 className='pb-7 pl-8'>
                City Tours
              </h1>
            </div>
            <div className='grid grid-cols-5 gap-7 pt-7 '>
              <div  className=' hover:scale-105 transition duration-700 flex  flex-col justify-end bg-cover rounded-xl sm:col-span-2 col-span-5' style={{backgroundImage:`url(${todo5})`, width: "screen", height: "240px"}}> 
              <h1 className='pb-7 pl-8'>
                Food
              </h1>
              
              </div>
              <div  className=' hover:scale-105 transition duration-700 flex flex-col justify-end placeholder: bg-cover rounded-xl sm:col-span-3 col-span-5' style={{backgroundImage:`url(${todo6})`, width: "screen", height: "240px"}}> 
              <h1 className='pb-7 pl-8'>
              Hiking
              </h1>
              
              </div>
            </div>
          
          </div>

        </div>

    </section>
  )
}

export default Todo