import React from 'react'
import Bluedesign from '../../assets/bluedesign.png'
import Reddesign from '../../assets/reddesign.png'
import Experienceimg from '../../assets/experience.png'
import Experienceguy from '../../assets/experienceguy.png'

function Experience() {
    return (
        <div className='px-10 relative w-full flex flex-col items-center justify-center min-h-screen'>
            <img src={Bluedesign} alt="hello" className='absolute w-24 lg:w-auto top-0 left-0' />
            <img src={Experienceimg} alt="" className='absolute hidden lg:block w-10/12 transform -translate-x-1/2 left-1/2 top-1/3 -translate-y-1/3' />
            <img src={Experienceguy} alt="" className='lg:hidden' />
            <div className="text-center mt-6 lg:mt-20">
                <p className='text-xl lg:text-3xl font-bold text-experience'>Experience RUBEX for free!</p>
                <p className='mt-2 lg:mt-4 text-textPrimary w-80 lg:w-96 mx-auto text-xs lg:text-xl'>Get a free class and see if we are the right fit for your child. If not satisfied, we will not bug you.</p>
            </div>
            <button className='h-8 lg:h-16 lg:absolute lg:bottom-20 bg-buttonBg text-white mt-6 lg:mt-10 transform lg:-translate-x-1/2 left-1/2 rounded-xl text-xs lg:text-2xl px-6 lg:px-24'>Take my free class now!</button>
            <img src={Reddesign} alt="" className='absolute w-24 lg:w-auto bottom-0 right-0' />
        </div>
    )
}

export default Experience
