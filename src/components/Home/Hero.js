import React from 'react'
import heroimg from '../../assets/hero.png'
import heroanim from '../../assets/heroanimation.gif'

function Hero() {
    return (
        <div className='text-center min-h-screen text-white flex-col-reverse flex lg:flex-row lg:space-x-20 items-center justify-center px-6 w-screen'>
            <div>
                <p className='uppercase text-xl lg:text-4xl font-bold'>On-demand live class</p>
                <p className='mt-2 lg:mt-6 lg:text-base text-xs'>Personalised live learning platform for 6th to 12th graders</p>
                <button className='uppercase lg:text-xl text-xs mt-6 lg:mt-10 bg-buttonBg rounded-xl h-10 lg:h-16 w-48 lg:w-72 px-4 text-center font-bold'>Join Your Class Now </button>
            </div>
            <div className='flex mt-12 lg:mt-0 flex-col relative items-center'>
                <img src={heroanim} alt="" className='absolute w-1/2 md:w-52 md:left-52 md:-top-12 lg:w-72 -top-32 lg:left-1/4 lg:-top-24 left-16' />
                <img src={heroimg} alt="Hero" />
            </div>
        </div>
    )
}

export default Hero
