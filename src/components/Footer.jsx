import React from 'react'
import footer from '../assets/footerbg.svg'
import pay1 from '../assets/pay1.png'
import pay2 from '../assets/pay2.png'
import pay3 from '../assets/pay3.png'
import pay4 from '../assets/pay4.png'
import pay5 from '../assets/pay5.png'
import pay6 from '../assets/pay6.png'

const Footer = () => {
  return (
    <section  className='max-w-[1920px] '>
        <div className='mx-auto bg-contain sm:bg max-w-[1800px]  '  style={{backgroundImage: `url(${footer}`, width:"", height:"screen"}}>
            <div className='max-w-[1320px] mx-auto flex flex-col divide-y-2  divide-red-200   px-4'>
                <div className='flex  md:flex-row flex-col justify-between font-inter font-semibold px-3 md:px-20  py-3 md:py-24 '>
                    <h1 className=' md:text-xl text-lg '>Speak to our expert at <span className=' text-via-orange'> 1-800-453-6744</span></h1>
                    <h1 className='text-sm '>follow us</h1>
                </div>

                <div className='flex md:flex-row flex-col justify-between font-inter py-10  md:gap-0 gap-5'>
                    <div className='flex flex-col gap-10'>
                        <h1 className='font-semibold '>Contact</h1>
                        <ul className=' text-[12px] flex flex-col gap-3'>
                            <li>328 Queensberry Street, North Melbourne VIC3051,
                         Australia.</li>
                         <li>hi@viatours.com</li>
                         </ul>
                        
                         
                    </div>

                    <div className='flex flex-col gap-10'>
                        <h1 className='font-semibold'>Company</h1>
                        <ul className=' text-[12px] flex flex-col gap-3'>
                            <li>About us</li>
                            <li>Tourz Reviews</li>
                            <li>Contact Us</li>
                            <li>Travel Guides</li>
                            <li>Data Policy</li>
                            <li>Cookie Policy</li>
                            <li>Legal</li>
                            <li>Sidemap</li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-10'>
                        <h1 className='font-semibold'>Support</h1>
                        <ul className=' text-[12px] flex flex-col gap-3'> 
                            <li>Get in Touch</li>
                            <li>Help Center</li>
                            <li>Live Chat</li>
                            <li>How it works</li>
                        </ul>
                    </div>

                    <div className=' flex flex-col gap-10  '>
                        <div className='flex flex-col gap-5'>
                            <h1 className='font-semibold'>Newsletter</h1>
                        <p className='text-[12px]'>Subscribe to the free newsletter and stay <br />
                        up to date</p>
                        <form className='bg-white border flex md:justify-between justify-start px-2 rounded-lg md:h-14 h-9 md:w-auto sm:w-[350px] '>
                            <input type="text" placeholder='Your email adress' className=''/> <button className='text-sm'>Send</button>
                        </form>
                        </div>
                        

                        <div className='flex flex-col gap-10'> 
                            <h1 className='font-semibold '>  Mobile Apps</h1>
                             <ul className='text-[12px] flex flex-col gap-3'>
                                <li>Ios Apps</li>
                                <li>Android Apps</li>
                             </ul>
                        </div>
                    </div>

                </div>
                



            </div>

        </div>
        <div className='flex md:flex-row  items-center flex-col md:justify-between justify-center px-4 py-4 max-w-[1500px] mx-auto '>
            <h4>© Copyright Viatours 2024</h4> 
            <div className='flex '>
                <img src={pay1} alt="" />
                <img src={pay2} alt="" />
                <img src={pay3} alt="" />
                <img src={pay4} alt="" />
                <img src={pay5} alt="" />
                <img src={pay6} alt="" />
            </div>
        </div>

    </section>
  )
}

export default Footer