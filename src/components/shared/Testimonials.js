import React from 'react'
import Inverted from '../../assets/invertedcommas.png'
import Niharika from '../../assets/niharika.png'
import Nishu from '../../assets/nishu.png'
import Siddharth from '../../assets/siddharth.png'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"

import SwiperCore, {
    Pagination
} from 'swiper';

SwiperCore.use([Pagination]);

function Testimonials() {

    const data = [
        {
            content: "Real time sessions make the class interactive and reduce pressure from student and make us free to ask any doubt",
            name: "Nishu",
            classnum: "XI",
            profilepic: Nishu,
        },
        {
            content: "Experience of Live Class is enriching and keep us active during the sessions",
            name: "Niharika",
            classnum: "IX",
            profilepic: Niharika,
        },
        {
            content: "The concepts are explained in lucid way, that even complex ones seems easy",
            name: "Siddharth",
            classnum: "XI",
            profilepic: Siddharth,
        },
    ]
    return (
        <div className='bg-testimonialBg text-center py-10 pt-20 min-h-screen'>
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
                {data.map(({ content, name, classnum, profilepic }) => {
                    return (
                        <SwiperSlide className='flex flex-col items-center justify-center px-10'>
                            <img src={Inverted} alt="" className='' />
                            <p className='lg:text-2xl text-textSecondary font-semibold mt-6'>{content}</p>
                            <img src={profilepic} alt="Profile" className='mt-10 rounded-full h-20' />
                            <div className='mt-5 text-xs lg:text-xl'>
                                <p>{name}</p>
                                <p>Class {classnum}</p>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default Testimonials
