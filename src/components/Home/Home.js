import React from 'react'
import Hero from './Hero'
import Pattern1 from '../../assets/mask1.png'
import Mask2 from '../../assets/mask2.png'
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
// import Ability from '../../assets/ability.png'
// import Personality from '../../assets/personality.png'
// import Learningstyle from '../../assets/learningstyle.png'
// import AbilityPrev from '../../assets/abilitypreview.png'
// import PersonalityPrev from '../../assets/personalitypreview.png'
// import LearningstylePrev from '../../assets/learningstylepreview.png'
import Cycle from '../../assets/cycle1.gif'

import { Carousel } from '3d-react-carousal'

// import { Swiper, SwiperSlide } from "swiper/react";
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

    // const [thumbsSwiper, setThumbsSwiper] = React.useState(null);

    const Card = ({ title, image, content, tag }) => {
        return (
            <div className='bg-white relative rounded-2xl w-full h-96 px-10 py-12 text-center'>
                <p className='font-bold'>{title}</p>
                <img src={image} alt="Online classes" className='mt-6 mx-auto' />
                <p className='text-xs mt-6'>{content}</p>
                <p className='text-buttonBg font-bold mt-10'>{tag}</p>
            </div>
        )
    }

    const slides = [
        <Card title="Doubts" image={Doubts} content="Lots of doubts? we're here 24/7 to solve them." tag="Ask Doubt" />,
        <Card title="Take Test" image={Test} content="Lots of doubts? we're here 24/7 to solve them." tag="Take Test" />,
        <Card title="Live Classes" image={Liveclass} content="Lots of doubts? we're here 24/7 to solve them." tag="Join Class" />,
        <Card title="Practice Questions" image={Practice} content="Lots of doubts? we're here 24/7 to solve them." tag="Start Practice" />
    ]

    return (
        <div className='overflow-x-hidden'>

            <div className='hero min-h-screen'>
                <Navbar />
                <Hero />
            </div>

            <div className='bg-homeBg px-10 flex relative flex-col justify-center lg:min-h-screen'>
                <img src={Pattern1} alt="" className='absolute w-7/12 right-0 top-0' />
                <div className='grid items-center mt-10 lg:mt-0 grid-cols-2 gap-6'>
                    <div className='col-span-2 lg:col-span-1 text-center lg:text-left lg:pl-28 lg:pr-20'>
                        <p className='text-textPrimary font-bold text-lg lg:text-4xl'>Personal tutor for every child</p>
                        <p className='text-textSecondary mt-2 lg:mt-6 text-xs lg:text-xl'>Our algorithm understands your child, using AI assisted matchmaking every student is matched with a tutor who is able to convey topics in the way the student best perceives it.</p>
                    </div>
                    <div className='col-span-2 lg:col-span-1 flex space-x-10'>
                        <img src={Cycle} alt="" />
                    </div>
                </div>
            </div>

            <div className='bg-homeBg lg:px-10 pt-10 lg:pt-0 flex relative flex-col justify-center lg:min-h-screen'>
                <div className='flex flex-col-reverse text-center lg:text-inherit lg:grid items-center grid-cols-2 gap-12'>
                    <div className='col-span-2 lg:col-span-1 w-10/12 mx-auto'>
                        <Carousel slides={slides} arrows={false} />
                    </div>
                    <div className='col-span-2 lg:col-span-1 lg:text-left px-10 lg:pr-28'>
                        <p className='text-textPrimary font-bold text-lg lg:text-4xl'>Holistic learning experience</p>
                        <p className='text-textSecondary mt-2 lg:mt-6 text-xs lg:text-xl'>We have holistic approach for your child's complete learning experience, ranging from live classes to 1 on 1 live doubt sessions.</p>
                    </div>
                </div>
            </div>

            <div className='bg-homeBg py-10 px-6 lg:px-10 flex relative overflow-hidden flex-col justify-center pt-10 lg:pt-0 lg:min-h-screen'>
                <div className='grid mx-auto items-center grid-cols-2'>
                    <img src={Mask2} alt="" className='absolute lg:w-1/2 left-0 top-10' />
                    <div className='col-span-2 lg:col-span-1 text-center lg:text-left px-6 lg:px-24'>
                        <p className='text-textPrimary font-bold text-lg lg:text-4xl'>Why you should learn from RUBEX ?</p>
                        <p className='text-textSecondary mt-3 lg:mt-6 text-sm lg:text-xl'>Our flexible approach to learning allows students to learn at their pace and clear doubts whenever they arise.
                            <br /><br />
                            Multi-linguial support and up front payment makes for a comfortable learning environment.</p>
                    </div>
                    <div className='col-span-2 lg:col-span-1 z-10 mx-auto w-full mt-8 lg:mt-0 px-10'>
                        <div className='grid grid-cols-2 text-center mx-auto gap-6 lg:gap-12 lg:px-4'>
                            <div className='col-span-1 shadow-cards w-32 px-4 lg:w-48 h-36 lg:h-56 bg-white rounded-xl flex flex-col items-center justify-center'>
                                <img src={Personalised} className='h-16 lg:h-24' alt="" />
                                <p className='font-bold mt-5 lg:mt-10 font-roboto text-xs'>Personalised Learning</p>
                            </div>
                            <div className='col-span-1 shadow-cards w-32 px-4 lg:w-48 h-36 lg:h-56 bg-white rounded-xl flex flex-col items-center justify-center'>
                                <img src={Learning} className='h-16 lg:h-24' alt="" />
                                <p className='font-bold mt-5 lg:mt-10 font-roboto text-xs'>Real-time on-demand class</p>
                            </div>
                            <div className='col-span-1 shadow-cards lg:ml-10 w-32 px-4 lg:w-48 h-36 lg:h-56 bg-white rounded-xl flex flex-col items-center justify-center'>
                                <img src={Multilingual} className='h-16 lg:h-24' alt="" />
                                <p className='font-bold mt-5 lg:mt-10 font-roboto text-xs'>Multi-lingual mode of class</p>
                            </div>
                            <div className='col-span-1 shadow-cards lg:ml-10 w-32 px-4 lg:w-48 h-36 lg:h-56 bg-white rounded-xl flex flex-col items-center justify-center'>
                                <img src={Pay} className='h-16 lg:h-24' alt="" />
                                <p className='font-bold mt-5 lg:mt-10 font-roboto text-xs'>Pay for what you learn</p>
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
