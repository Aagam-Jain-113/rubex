import React from 'react'
import Navbar from '../Navbar'
import Contactus from '../../assets/contactus.png'
import Office from '../../assets/office.png'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import Footer from '../Footer'

function Contact() {
    return (
        <div>
            <Navbar />
            <div className='mt-10 lg:mt-20 min-h-screen'>
                <p className='text-lg lg:text-4xl font-bold uppercase text-center'>Contact Us</p>
                <div className='flex flex-col-reverse lg:grid grid-cols-2 gap-10 px-10 lg:px-28'>
                    <div className='col-span-2 lg:col-span-1 mt-3 lg:mt-10'>
                        <p className='text-primary text-lg lg:text-3xl font-semibold'>Drop us a line</p>
                        <p className='text-textSecondary text-xs lg:text-xl lg:mt-6'>Enter your details so we may contact you</p>
                        <input type='text' placeholder='Name' className="mt-6 h-8 px-4 block rounded-xl border border-contact" />
                        <input type='tel' placeholder='Mobile Number' className="mt-4 h-8 block rounded-xl px-4 border border-contact" />
                        <input type='email' placeholder='Email' className="mt-4 px-4 block h-8 rounded-xl border border-contact" />
                        <textarea placeholder='Query' className="mt-4 w-10/12 block px-4 rounded-xl h-28 pt-2 border border-contact" />
                        <button className='text-white bg-primary mt-6 h-7 w-20 text-xs font-bold rounded-xl'>Submit</button>
                    </div>
                    <div className='col-span-2 lg:col-span-1 mx-auto mt-6 lg:mt-10'>
                        <img src={Contactus} alt="" />
                    </div>
                </div>
            </div>
            <div className='w-10/12 rounded-3xl mt-10 mb-20 grid grid-cols-3 mx-auto shadow-cards'>
                <div className='col-span-3 lg:col-span-1'>
                    <img src={Office} alt="" className='rounded-t-3xl lg:rounded-l-3xl' />
                </div>
                <div className='col-span-3 lg:col-span-2 text-xl text-textSecondary p-6 lg:p-10'>
                    <p className='font-bold'>Headoffice</p>
                    <p className='w-full lg:w-3/4 mt-3'>C - 2/19, Shiv shakti Apartments, sector 71 Noida, Utar Pradesh 201301</p>
                    <p className='mt-3'>9********* , 9*********</p>

                    <p className='mt-10 font-bold'>Connect with us on</p>

                    <div className='flex mt-6 space-x-10 text-contact'>
                        <FaLinkedinIn />
                        <FaFacebookF />
                        <FaTwitter />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact
