import React from 'react'
import heroimg from '../../assets/hero.png'
import heroanim from '../../assets/heroanimation.gif'

function Hero() {
    return (
        <div className='text-center lg:text-left min-h-screen lg:pl-36 px-10 lg:pr-20 lg:space-x-0 w-screen text-white flex-col-reverse flex lg:flex-row items-center justify-center'>
            <div className='w-full lg:w-1/2'>
                <p className='uppercase text-xl lg:text-40 leading-10 font-bold'>On-demand live class</p>
                <p className='mt-0 lg:mt-6 lg:text-base text-xs'>Personalised live learning platform for 6th to 12th graders</p>
                <button className='uppercase lg:text-xl text-xs mt-6 lg:mt-10 bg-buttonBg rounded-xl h-10 lg:h-16 w-48 lg:w-72 px-4 text-center font-bold'>Join Your Class Now </button>
            </div>
            <div className='flex mt-12 lg:mt-0 flex-col relative items-center'>
                <img src={heroanim} alt="" className='absolute drop-shadow-animation w-3/4 md:w-80 md:left-44 md:-top-24 -top-3/4 lg:left-132 lg:-top-32 left-6' />
                <img src={heroimg} alt="Hero" className='w-full' />
            </div>
        </div>
    )
}

export default Hero
