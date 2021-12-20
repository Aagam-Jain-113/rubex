import React from 'react'
import Logo from '../assets/logo.png'
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaTwitter, FaTelegramPlane } from 'react-icons/fa'

function Footer() {
    return (
        <div>
            <div className='bg-footerBg py-12 px-10 lg:px-28'>
                <div className='grid grid-cols-4 text-white gap-x-0'>
                    <div className='col-span-2 lg:col-span-1'>
                        <p className='text-xl font-bold'>Quick Links</p>
                        <ul className='list-style-none mt-3 text-xs space-y-2'>
                            <li>Live class</li>
                            <li>Doubtbook</li>
                            <li>Test series</li>
                            <li>Practice Papers</li>
                        </ul>
                    </div>
                    <div className='col-span-2 lg:col-span-1'>
                        <p className='text-xl font-bold'>Company</p>
                        <ul className='list-style-none mt-3 text-xs space-y-2'>
                            <li>About Us</li>
                            <li>Become an instructor</li>
                            <li>Blog</li>
                            <li>Terms of Service</li>
                            <li>FAQ</li>
                            <li>Privacy Policy</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                    <div className='col-span-4 mt-6 lg:mt-0 lg:col-span-2'>
                        <p className='text-xl font-bold'>Reach out to us</p>
                        <div className='block lg:flex lg:space-x-8 mt-3'>
                            <input type="text" placeholder='Name' className='px-4 w-full outline-none lg:w-72 bg-transparent h-8 text-white mt-2 rounded-md border border-white' />
                            <input type="text" placeholder='Email' className='px-4 w-full outline-none lg:w-72 bg-transparent h-8 text-white mt-4 lg:mt-2 rounded-md border borde-white' />
                        </div>
                        <textarea className='h-28 w-full bg-white outline-none text-black mt-3 rounded-xl p-4' placeholder='Your message' />
                        <button className='transparent text-white rounded-xl border border-white w-16 h-8 mt-3'>Send</button>
                    </div>
                </div>
            </div>
            <div className='bg-social py-4 lg:pl-12 lg:h-20 lg:pr-28 flex lg:flex-row flex-col-reverse justify-between'>
                <img src={Logo} alt="Logo" className='w-10 h-10 mt-6 lg:mt-4 mx-auto lg:mx-0' />
                <div className='flex justify-around items-center text-lg space-x-0 lg:space-x-10 text-white'>
                    <FaLinkedinIn />
                    <FaFacebookF />
                    <FaInstagram />
                    <FaTwitter />
                    <FaTelegramPlane />
                </div>
            </div>
        </div>
    )
}

export default Footer
