import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub, Fa500Px } from 'react-icons/fa'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div>
            <div className='fixed w-full h-20 shadow-xl z-[100]'>
                <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                    <Image src="/assets/as.svg" alt="logo" width='100' height='100' />
                    <div>
                        <ul className='hidden md:flex'>
                            <Link href='/'>
                                <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                            </Link>
                            <Link href='/'>
                                <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                            </Link>
                            <Link href='/'>
                                <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                            </Link>
                            <Link href='/'>
                                <li className='ml-10 text-sm uppercase hover:border-b'>Project</li>
                            </Link>
                            <Link href='/'>
                                <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                            </Link>
                        </ul>
                    </div>
                    {/* hamburger menu */}
                    <div onClick={handleNav} className=''>
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>
            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                {/* the slide in menu */}
                <div className={nav ? 'fixed left-0 top-0 w-[40%] sm:w-[20%] md:w-[15%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' : 'fixed left-[-100] top-0 p-10 ease-in duration-500'}>
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <Image src="/assets/as.svg" alt="logo" width='80' height='80' />
                            <div onClick={handleNav} className='rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer'>
                                <AiOutlineClose size={10} />
                            </div>
                        </div>
                    </div>
                    <div className='py-4 flex flex-col'>
                        <ul className='uppercase'>
                            <Link href='/'>
                                <li className='py-4 text-sm uppercase'>Home</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm uppercase'>About</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm uppercase'>Skills</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm uppercase'>Project</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm uppercase'>Contact</li>
                            </Link>
                        </ul>
                        <div className='pt-40'>
                            <p className='uppercase tracking-widest text-[#5651e5]'>Let's connect</p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover-scale-105 ease-in duration-500'>
                                    <FaLinkedinIn />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover-scale-105 ease-in duration-500'>
                                    <FaGithub />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover-scale-105 ease-in duration-500'>
                                    <Fa500Px />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover-scale-105 ease-in duration-500'>
                                    <AiOutlineMail />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

