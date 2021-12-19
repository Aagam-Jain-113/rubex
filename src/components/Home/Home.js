import React from 'react'
import Hero from './Hero'
import Pattern1 from '../../assets/pattern1.png'
import Personalised from '../../assets/personalised.png'
import Learning from '../../assets/learning.png'
import Multilingual from '../../assets/multiLingual.png'
import Pay from '../../assets/pay.png'
import Testimonials from '../shared/Testimonials'
import Experience from '../shared/Experience'
import Mobile from './Mobile'
import Footer from '../Footer'
import Liveclass from '../../assets/liveclass.png'
import Doubts from '../../assets/doubts.png'
import Practice from '../../assets/practice.png'
import Test from '../../assets/test.png'
import Ability from '../../assets/ability.png'
import Personality from '../../assets/personality.png'
import Learningstyle from '../../assets/learningstyle.png'
import AbilityPrev from '../../assets/abilitypreview.png'
import PersonalityPrev from '../../assets/personalitypreview.png'
import LearningstylePrev from '../../assets/learningstylepreview.png'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode"
import "swiper/css/thumbs"

import SwiperCore, {
    Autoplay, FreeMode, Thumbs, Pagination
} from 'swiper';
import Plan from './Plan'
import Navbar from '../Navbar'

SwiperCore.use([FreeMode, Thumbs, Autoplay, Pagination]);


function Home() {

    const [thumbsSwiper, setThumbsSwiper] = React.useState(null);

    return (
        <div className='overflow-x-hidden'>
            <div className='hero min-h-screen'>
                <Navbar />
                <Hero />
            </div>
            <div className='bg-homeBg px-10 flex relative flex-col justify-center min-h-screen'>
                <img src={Pattern1} alt="" className='absolute w-7/12 right-0 top-0' />
                <div className='grid items-center mt-10 lg:mt-0 grid-cols-2 gap-6'>
                    <div className='col-span-2 lg:col-span-1 text-center lg:px-16'>
                        <p className='text-textPrimary font-bold text-lg lg:text-4xl'>Personal tutor for every child</p>
                        <p className='text-textSecondary mt-2 lg:mt-6 text-xs lg:text-xl'>Our algorithm understands your child, using AI assisted matchmaking every student is matched with a tutor who is able to convey topics in the way the student best perceives it.</p>
                    </div>
                    <div className='col-span-2 lg:col-span-1 flex space-x-10'>
                        <Swiper style={{ '--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff' }} autoplay={{
                            "delay": 2500,
                            "disableOnInteraction": false
                        }} spaceBetween={10} onMouseEnter={() => Swiper.autoplay.stop()} navigation={true} thumbs={{ swiper: thumbsSwiper }} className="w-80">
                            <SwiperSlide><img src={Ability} alt="" /></SwiperSlide>
                            <SwiperSlide><img src={Personality} alt="" /></SwiperSlide>
                            <SwiperSlide><img src={Learningstyle} alt="" /></SwiperSlide>
                        </Swiper>
                        <Swiper onSwiper={setThumbsSwiper} spaceBetween={10} slidesPerView={3} freeMode={true} watchSlidesProgress={true} className="w-72 thumbs hidden lg:block lg:mt-16">
                            <SwiperSlide><img src={AbilityPrev} alt="" /></SwiperSlide>
                            <SwiperSlide><img src={PersonalityPrev} alt="" /></SwiperSlide>
                            <SwiperSlide><img src={LearningstylePrev} alt="" /></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>

            <div className='bg-homeBg lg:px-10 pt-10 lg:pt-0 flex relative flex-col justify-center min-h-screen'>
                <div className='flex flex-col-reverse text-center lg:text-inherit lg:grid items-center grid-cols-2 gap-6'>
                    <div className='col-span-2 lg:col-span-1 w-3/4 mx-auto'>
                        <Swiper slidesPerView={1} initialSlide={1} pagination={{
                            "clickable": true
                        }} spaceBetween={20} centeredSlides={true} className="holisticSwiper font-roboto" breakpoints={{
                            "1024": {
                                "slidesPerView": 2,
                                "spaceBetween": 0,
                                "pagination": false
                            }
                        }}
                        >
                            <SwiperSlide >
                                <div className='flex flex-col bg-white relative items-center justify-center rounded-xl p-10 pb-4 text-center'>
                                    <p className='font-bold'>Doubts</p>
                                    <img src={Doubts} alt="Online classes" className='mt-6 lg:w-2/3' />
                                    <p className='text-xs mt-6'>Lots of doubts? we’re here 24/7 to solve them.</p>
                                    <p className='text-buttonBg absolute -bottom-6 lg:-bottom-12 font-bold mt-10'>Ask Doubt</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='flex flex-col bg-white relative items-center justify-center rounded-xl p-10 pb-4 text-center'>
                                    <p className='font-bold'>Take Test</p>
                                    <img src={Test} alt="Online classes" className='mt-6 lg:w-10/12' />
                                    <p className='text-xs mt-6'>Analyse your takeaway of every topic by taking tests on your own</p>
                                    <p className='text-buttonBg absolute -bottom-6 lg:-bottom-12 font-bold mt-10'>Take Test</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='flex flex-col bg-white relative items-center justify-center rounded-xl p-10 pb-4 text-center'>
                                    <p className='font-bold'>Live Classes</p>
                                    <img src={Liveclass} alt="Online classes" className='mt-6 lg:w-2/3' />
                                    <p className='text-xs mt-6'>Schedule a class with a top educator for a topic of your choosing</p>
                                    <p className='text-buttonBg absolute -bottom-6 lg:-bottom-12 font-bold mt-10'>Join Class</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='flex flex-col bg-white relative items-center justify-center rounded-xl p-10 pb-4 text-center'>
                                    <p className='font-bold'>Practice Questions</p>
                                    <img src={Practice} alt="Online classes" className='mt-6 lg:w-2/3' />
                                    <p className='text-xs mt-6'>Put your leaning into practice with our practice questions</p>
                                    <p className='text-buttonBg absolute -bottom-6 lg:-bottom-12 font-bold mt-10'>Start Practice</p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className='col-span-2 lg:col-span-1 px-10 lg:px-16'>
                        <p className='text-textPrimary font-bold text-lg lg:text-4xl'>Holistic learning experience</p>
                        <p className='text-textSecondary mt-2 lg:mt-6 text-xs lg:text-xl'>We have holistic approach for your child's complete learning experience, ranging from live classes to 1 on 1 live doubt sessions.</p>
                    </div>
                </div>
            </div>

            <div className='bg-homeBg py-10 lg:py-0 px-6 lg:px-10 flex relative overflow-hidden flex-col justify-center min-h-screen'>
                <div className='grid mx-auto items-center grid-cols-2 gap-6'>
                    <img src={Pattern1} alt="" className='absolute lg:w-1/2 left-0 top-10' />
                    <div className='col-span-2 lg:col-span-1 text-center lg:text-left px-6 lg:px-16'>
                        <p className='text-textPrimary font-bold text-lg lg:text-4xl'>Why you should learn from RUBEX ?</p>
                        <p className='text-textSecondary mt-3 lg:mt-6 text-sm lg:text-xl'>Our flexible approach to learning allows students to learn at their pace and clear doubts whenever they arise.
                            <br /><br />
                            Multi-linguial suupport and up front payment makes for a comfortable learning environment.</p>
                    </div>
                    <div className='col-span-2 lg:col-span-1 z-10 mx-auto w-full px-4 lg:w-11/12 lg:px-10'>
                        <div className='grid grid-cols-2 mx-auto gap-x-4 gap-y-10 lg:px-10'>
                            <div className='col-span-1 shadow-cards w-40 lg:w-48 h-56 bg-white rounded-xl flex flex-col items-center justify-center'>
                                <img src={Personalised} className='h-24' alt="" />
                                <p className='font-bold mt-10 font-roboto text-xs'>Personalised Learning</p>
                            </div>
                            <div className='col-span-1 shadow-cards w-40 lg:w-48 h-56 bg-white rounded-xl flex flex-col items-center justify-center'>
                                <img src={Learning} className='h-24' alt="" />
                                <p className='font-bold mt-10 font-roboto text-xs'>Real-time on-demand class</p>
                            </div>
                            <div className='col-span-1 shadow-cards lg:ml-10 w-40 lg:w-48 h-56 bg-white rounded-xl flex flex-col items-center justify-center'>
                                <img src={Multilingual} className='h-24' alt="" />
                                <p className='font-bold mt-10 font-roboto text-xs'>Multi-lingual mode of class</p>
                            </div>
                            <div className='col-span-1 shadow-cards lg:ml-10 w-40 lg:w-48 h-56 bg-white rounded-xl flex flex-col items-center justify-center'>
                                <img src={Pay} className='h-24' alt="" />
                                <p className='font-bold mt-10 font-roboto text-xs'>Pay for what you learn</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Testimonials />

            <Plan />

            <Experience />

            <Mobile />

            <Footer />
        </div>
    )
}

export default Home
