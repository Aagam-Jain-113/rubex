import React from 'react'
import Navbar from '../Navbar'
import Testimonials from '../shared/Testimonials'
import Experience from '../shared/Experience'
import Footer from '../Footer'
import Aboutus from '../../assets/about.png'
import Options from '../../assets/options.png'
import Time from '../../assets/time.png'
import OneonOne from '../../assets/oneonone.png'
import Personaldoubt from '../../assets/persondoubt.png'
import Aboutcard from '../../assets/aboutCard.png'
import Qualityedu from '../../assets/qualityedu.png'
import Inclusivity from '../../assets/inclusivity.png'
import Digiedu from '../../assets/digiedu.png'

function About() {

    const benefits = [
        {
            id: 1,
            image: Options,
            content: "Option to decide which concept you want to be taught.",
        },
        {
            id: 2,
            image: Time,
            content: "Ability to choose the time at which you want a class to be taken."
        },
        {
            id: 3,
            image: OneonOne,
            content: "Personalised one on one learning sessions with our subjects matter expert.",
        },
        {
            id: 4,
            image: Personaldoubt,
            content: "Option to clear doubts at any given time by directly communication with subjects experts.",
        }
    ]
    return (
        <div>
            <Navbar />
            <div className='mt-10 lg:mt-20 min-h-screen'>
                <p className='text-lg lg:text-4xl font-bold uppercase text-center'>About RUBEX</p>
                <div className='grid grid-cols-2 items-center gap-10 px-10 lg:px-28'>
                    <div className='col-span-2 lg:col-span-1 mt-4 lg:mt-10'>
                        <p className='text-primary text-lg text-center lg:text-left lg:text-3xl font-bold'>Teaching - done right</p>
                        <p className='text-primary text-lg text-center lg:text-left lg:text-3xl font-bold'>Learning - made simple</p>
                        <p className='text-textSecondary text-sm text-center lg:text-left md:text-xl mt-4 lg:mt-10'>We are an ed-tech firm specialising in online learning for grade 6 to grade 12. Rubex offers live classes, online doubts clearing sessions with subjects experts & practice learing material.</p>
                    </div>
                    <div className='col-span-2 lg:col-span-1 mx-auto mt-10'>
                        <img src={Aboutus} alt="" />
                    </div>
                </div>
            </div>

            <div className='px-10 lg:px-28 mt-10 text-center'>
                <p className='font-bold text-lg lg:text-4xl text-primary'>What you get at Rubex ?</p>
                <div className='flex flex-wrap mt-10 lg:mt-24 items-center justify-center'>
                    {benefits.map(({ id, image, content }) => {
                        return (
                            <div className='w-full lg:w-1/3 h-52' key={id}>
                                <img src={image} alt="" className='h-20 mx-auto' />
                                <p className='mt-3 w-full lg:w-64 mx-auto'>{content}</p>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className='px-10 py-4 w-10/12 bg-aboutCard mx-auto lg:mt-24 rounded-3xl shadow-cards'>
                <div className='grid grid-cols-3'>
                    <div className='col-span-3 lg:col-span-1 pt-6'>
                        <img src={Aboutcard} alt="3 Professionals" className='w-80 lg:w-full' />
                    </div>
                    <div className='col-span-3 mt-6 lg:col-span-2 lg:p-10'>
                        <p className='font-bold text-xl lg:text-4xl text-textPrimary'>We are different</p>
                        <p className='font-semibold mt-2 lg:mt-6 text-xs lg:text-xl text-textSecondary'>We are not subject matter expert, we are expert in YOU.</p>
                        <p className='text-textSecondary mt-2 lg:mt-6 text-xs lg:text-xl'>Technology offers you the ability to learn from an expert right at your desktop. But what's important is that the expert should not just be a subject expert. He should be an expert in YOU - i.e. he should understand your scope of learning, the purpose for which you are preparing your level of understanding. This is what we aim to deliver.</p>
                    </div>
                </div>
            </div>

            <div className='text-center mt-10 lg:mt-24 px-10 lg:px-28'>
                <p className='text-primary text-lg lg:text-4xl font-bold'>How we deliver value to you ?</p>
                <p className='text-xs lg:text-xl text-textSecondary mt-3 lg:mt-6'>We at RUBEX offer one-on-one classes on demand - when you want it, as you want it.</p>
                <div className='flex flex-wrap mt-10 justify-center'>
                    <div className='w-full lg:w-1/2'>
                        <img src={Qualityedu} alt="" className='mx-auto' />
                        <p className='mt-3 text-xs lg:text-xl'>We deliver affordable quality education to all.</p>
                    </div>
                    <div className='w-full lg:w-1/2'>
                        <img src={Inclusivity} alt=""  className='mx-auto my-8' />
                        <p className='mt-3 text-xs lg:text-xl w-full lg:w-96 mx-auto'>Our products are all-inclusive; no one is left out we make learning easy for all.</p>
                    </div>
                    <div className='mt-6'>
                        <img src={Digiedu} alt=""  className='mx-auto' />
                        <p className='mt-3 text-xs lg:text-xl w-full lg:w-64'>We use technology as an enabler of education, bringing the discipline onto your digital devices.</p>
                    </div>
                </div>
            </div>

            <div className='my-10 lg:my-24 px-10 text-center'>
                <p className='text-primary font-bold text-lg lg:text-4xl'>Dissecting RUBEX</p>
                <p className='w-full lg:w-450 mt-2 lg:mt-6 mx-auto text-xs lg:text-xl text-textSecondary'>The driving force behind creating RUBEX was to serve as a Reliable educator which is Universal, i.e. made for all, Blending modern technology with traditional pedagogy, to give you the best Educational Experience. And this is why we named it RUBEX.</p>
            </div>
            <Testimonials />
            <Experience />
            <Footer />
        </div>
    )
}

export default About
