import React from 'react'
import Hamburger from "hamburger-react"
import Logo from '../assets/logo.png'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'

function Navbar() {

    const [isOpen, setIsOpen] = React.useState(false);
    const [activeDropdown, setActiveDropdown] = React.useState(false);

    return (
        <nav className='flex px-10 py-4 bg-primary text-white justify-between items-center flex-wrap'>
            <img src={Logo} alt="Logo" />
            <div className="block cursor-pointer lg:hidden">
                <Hamburger color="#fff" onToggle={() => setIsOpen(!isOpen)} />
            </div>
            {isOpen ?
                <div className={'space-y-5 transform duration-300 lg:space-x-10 text-sm text-center items-center justify-center flex flex-col lg:flex-row w-full overflow-hidden lg:justify-between relative' + (isOpen ? "h-80" : 'h-10')}>
                    <a href="/">Blog</a>
                    <a href="/">About us</a>
                    <a href="/">Login</a>
                    <button href="/" className='border font-bold border-white w-32 rounded-xl h-10'>Sign Up</button>
                </div>
                :
                <div className={'transform hidden duration-300 space-x-20 text-sm text-center items-center lg:flex justify-between relative'}>
                    <a href="/">Blog</a>
                    <div className='flex items-center space-x-2' onMouseEnter={() => setActiveDropdown(true)} onClick={() => setActiveDropdown(!activeDropdown)}>
                        <p>About us</p>
                        {activeDropdown ? <BsChevronUp /> : <BsChevronDown />}
                    </div>
                    {activeDropdown &&
                        <div onMouseLeave={() => setActiveDropdown(false)} className='absolute top-10 transform duration-300 h-24 rounded-lg w-36 bg-dropdown p-6 text-center'>
                            <p>About RUBEX</p>
                            <p className='mt-3'>Contact Us</p>
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
