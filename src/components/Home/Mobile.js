import React from 'react'
import GooglePlay from '../../assets/googleplay.png'
import Appstore from '../../assets/appstore.png'
import Verticalphone from '../../assets/verticalphone.png'
import Horizontalphone from '../../assets/horizontalphone.png'

function Mobile() {
    return (
        <div className='bg-homeBg px-10 pt-10 lg:px-40 min-h-screen flex flex-col justify-center'>
            <div className='grid grid-cols-2 items-center'>
                <div className='col-span-2 lg:col-span-1'>
                    <p className='text-textPrimary uppercase font-bold text-lg lg:text-3xl'>Anytime,<br /> Anywhere Learning!</p>
                    <p className='lg:w-7/12 w-full mt-4 lg:mt-10'>Take class on the go with RUBEX Mobile App. Download the App and learn from your most comfortable place!</p>
                    <img src={GooglePlay} alt="Google Play download" className='mt-6 lg:mt-10 mx-auto w-56 lg:mx-0' />
                    <div className='relative mt-10'>
                        <img src={Appstore} alt="Google Play download" className='w-56 mx-auto lg:mx-0' />
                        <p className='absolute top-0 rounded-xl text-xl left-1/2 -translate-x-1/2 lg:-translate-x-0 lg:left-0 font-bold bg-blurcolor w-56 pt-4 text-center h-full text-white'><span className='mt-3'>Coming Soon</span></p>
                    </div>
                </div>
                <div className='col-span-2 lg:col-span-1 mt-6 lg:mt-0 flex relative'>
                    <img src={Verticalphone} alt="Phone vertically" className='w-52 lg:w-auto z-10' />
                    <img src={Horizontalphone} alt="Phone horizontally" className='absolute w-80 lg:w-auto bottom-10 left-10 lg:left-40 z-0' />
                </div>
            </div>
        </div>
    )
}

export default Mobile
