import React from 'react'
import Inverted from '../../assets/invertedcommas.png'
import Testimonial1 from '../../assets/testimonial1.png'
import Testimonial2 from '../../assets/testimonial2.png'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"

import SwiperCore, {
    Pagination
} from 'swiper';

SwiperCore.use([Pagination]);

function Testimonials() {

    return (
        <div className='bg-testimonialBg text-center p-10 pt-20 min-h-screen'>
            <p className='text-lg lg:text-4xl uppercase font-bold'>OUR USERS <span className='text-love'> &#10084; </span> US</p>
            <p className='text-xs lg:text-xl mt-6'>Here's why</p>

            <Swiper slidesPerView={1} spaceBetween={10} centeredSlides={true} breakpoints={{
                "1024": {
                    "slidesPerView": 2,
                    "spaceBetween": 0
                }
            }} pagination={{
                "clickable": true
            }} className="mySwiper mt-10">
                <SwiperSlide className='flex flex-col items-center justify-center px-10'>
                    <img src={Inverted} alt="" />
                    <p className='lg:text-2xl text-textSecondary font-semibold mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id pulvinar eleifend vel nisi tempus tristique lorem lacus, feugiat. Neque aenean sed mattis </p>
                    <img src={Testimonial1} alt="Profile" className='mt-10' />
                    <div className='mt-5 text-xs lg:text-xl'>
                        <p>Maria Dias</p>
                        <p>Class XI</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='flex flex-col items-center justify-center px-10'>
                    <img src={Inverted} alt="" />
                    <p className='lg:text-2xl text-textSecondary font-semibold mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id pulvinar eleifend vel nisi tempus tristique lorem lacus, feugiat. Neque aenean sed mattis </p>
                    <img src={Testimonial2} alt="Profile" className='mt-10' />
                    <div className='mt-5 text-xs lg:text-xl'>
                        <p>Randy Rhiel Madsen</p>
                        <p>Class XII</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='flex flex-col items-center justify-center px-10'>
                    <img src={Inverted} alt="" />
                    <p className='lg:text-2xl text-textSecondary font-semibold mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id pulvinar eleifend vel nisi tempus tristique lorem lacus, feugiat. Neque aenean sed mattis </p>
                    <img src={Testimonial1} alt="Profile" className='mt-10' />
                    <div className='mt-5 text-xs lg:text-xl'>
                        <p>Maria Dias</p>
                        <p>Class XI</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='flex flex-col items-center justify-center px-10'>
                    <img src={Inverted} alt="" />
                    <p className='lg:text-2xl text-textSecondary font-semibold mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id pulvinar eleifend vel nisi tempus tristique lorem lacus, feugiat. Neque aenean sed mattis </p>
                    <img src={Testimonial2} alt="Profile" className='mt-10' />
                    <div className='mt-5 text-xs lg:text-xl'>
                        <p>Randy Rhiel Madsen</p>
                        <p>Class XII</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='flex flex-col items-center justify-center px-10'>
                    <img src={Inverted} alt="" />
                    <p className='lg:text-2xl text-textSecondary font-semibold mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id pulvinar eleifend vel nisi tempus tristique lorem lacus, feugiat. Neque aenean sed mattis </p>
                    <img src={Testimonial1} alt="Profile" className='mt-10' />
                    <div className='mt-5 text-xs lg:text-xl'>
                        <p>Maria Dias</p>
                        <p>Class XI</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='flex flex-col items-center justify-center px-10'>
                    <img src={Inverted} alt="" />
                    <p className='lg:text-2xl text-textSecondary font-semibold mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id pulvinar eleifend vel nisi tempus tristique lorem lacus, feugiat. Neque aenean sed mattis </p>
                    <img src={Testimonial2} alt="Profile" className='mt-10' />
                    <div className='mt-5 text-xs lg:text-xl'>
                        <p>Randy Rhiel Madsen</p>
                        <p>Class XII</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Testimonials
