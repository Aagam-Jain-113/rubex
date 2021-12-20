import React from 'react'
import Hamburger from "hamburger-react"
import Logo from '../assets/logo.png'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import { NavLink, useLocation } from 'react-router-dom';

function Navbar() {

    const location = useLocation();

    const [isOpen, setIsOpen] = React.useState(false);
    const [activeDropdown, setActiveDropdown] = React.useState(false);

    return (
        <nav className={'flex px-10 py-2 lg:py-6 text-white justify-between items-center flex-wrap ' + (location.pathname !== "/" ? "bg-primary" : "bg-transparent")}>
            <NavLink to="/">
                <img src={Logo} alt="Logo" className='h-8 lg:h-auto' />
            </NavLink>
            <div className="block cursor-pointer lg:hidden">
                <Hamburger color="#fff" onToggle={() => setIsOpen(!isOpen)} />
            </div>
            {isOpen ?
                <div className={'space-y-5 transform duration-300 text-sm text-center items-center justify-center flex flex-col w-full overflow-hidden relative' + (isOpen ? "h-80" : 'h-10')}>
                    <a href="/">Blog</a>
                    <div className='flex items-center cursor-pointer space-x-2' onClick={() => setActiveDropdown(!activeDropdown)}>
                        <p>About us</p>
                        {activeDropdown ? <BsChevronUp /> : <BsChevronDown />}
                    </div>
                    {activeDropdown &&
                        <div className='absolute cursor-pointer top-10 z-20 transform duration-300 h-24 rounded-lg w-36 bg-dropdown p-6 text-center'>
                            <NavLink to="/about" className='cursor-pointer'><p className='mb-2'>About RUBEX</p></NavLink>
                            <NavLink to="/contact" className='cursor-pointer'>Contact Us</NavLink>
                        </div>
                    }
                    <a href="/">Login</a>
                    <button href="/" className='border font-bold border-white w-32 rounded-xl h-10'>Sign Up</button>
                </div>
                :
                <div className='space-x-20 hidden text-sm text-center items-center lg:flex justify-between relative'>
                    <a href="/">Blog</a>
                    <div className='flex items-center cursor-pointer space-x-2' onMouseEnter={() => setActiveDropdown(!activeDropdown)} onClick={() => setActiveDropdown(!activeDropdown)}>
                        <p>About us</p>
                        {activeDropdown ? <BsChevronUp /> : <BsChevronDown />}
                    </div>
                    {activeDropdown &&
                        <div className='absolute top-10 z-20 h-20 rounded-lg w-36 bg-dropdown pt-4 text-center'>
                            <NavLink to="/about" className='cursor-pointer'><p className='mb-2'>About RUBEX</p></NavLink>
                            <NavLink to="/contact" className='cursor-pointer'>Contact Us</NavLink>
                        </div>
                    }
                    <a href="/">Login</a>
                    <button href="/" className='border font-bold border-white w-32 rounded-xl h-10'>Sign Up</button>
                </div>
            }
        </nav>
    )
}

export default Navbar
