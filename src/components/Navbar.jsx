import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import Logo from '../assets/logo.svg';


//react icons
import {FaXmark, FaBars} from "react-icons/fa6";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    // set toggle Menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // navItems array
    const navItems = [
        { link: 'Home', path: 'home' },
        { link: 'Service', path: 'service' },
        { link: 'About', path: 'about' },
        { link: 'Product', path: 'product' },
        { link: 'Testimonial', path: 'testimonial' },
        { link: 'FAQ', path: 'faq' },
    ];

    return (
        <>
            <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
                <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 right-0 left-0 berder-b bg-white duration-300":""}`}>
                    <div className="flex justify-between items-center text-base gap-8">
                        <a href="/" className='text-2xl font-semibold flex items-center space-x-3'>
                            <img className='w-10 inline-block items-center' src={Logo} alt="logo" />
                            <span className='uppercase text-[#263238]'>nexcent</span>
                        </a>
                        <ul className='md:flex space-x-12 hidden'>
                        {navItems.map(({ link, path }) => (
                        <li key={path}>
                            <Link
                                to={path}
                                spy={true}
                                smooth={true}
                                offset={-100}
                                className='text-base text-gray900 hover:text-brandPrimary first:font-medium'
                                onClick={() => {
                                    // Handle any additional behavior when clicking on scroll links
                                    // Example: Close menu after clicking on a link
                                    // setIsMenuOpen(false);
                                }}
                            >
                                {link}
                            </Link>
                        </li>
                    ))}
                        </ul>

                        {/* btn for large devices */}
                        <div className="space-x-12 hidden lg:flex items-center">
                            <a href="/" className='hidden lg:flex items-center text-brandPrimary hover:text-gray900 uppercase'>login</a>
                            <button className='bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey uppercase'>sign up</button>
                        </div>
                        {/* menu btn for only mobile devices */}
                        <div className="md:hidden">
                            <button 
                            onClick={toggleMenu}
                            className='focus:outline-none focus:text-gray-600 text-neutralDGrey'>
                                {
                                    isMenuOpen ? (<FaXmark className='h-6 w-6'/>): (<FaBars className='h-6 w-6'/>)
                                }
                            </button>
                        </div>
                    </div>

                    {/* nav items for mobile devices */}
                    <div className='md:hidden'>
                        <ul className={`space-y-0 px-0 mt-2 py-0 bg-brandPrimary rounded ${isMenuOpen ? "block ficed top-0 right-0 left-0":"hidden"}`}>

                    {navItems.map(({ link, path }) => (
                        <li key={path} className='hover:bg-green-500 hover:text-gray900 px-5 py-2.5 rounded text-base text-white  first:font-medium'>
                            <Link
                                to={path}
                                spy={true}
                                smooth={true}
                                offset={-100}
                                className=''
                                onClick={() => {}}>
                                {link}
                            </Link>
                        </li>
                    ))}
                    </ul>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Navbar;
