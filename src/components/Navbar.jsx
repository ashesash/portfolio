import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='fixed w-full h-20 shadow-xl z-[100]'>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <Image
                    src="/..public/assets/as.svg"
                    alt="/"
                    width='125'
                    height='125'
                />
                {/* <div>
                    <ul>
                        <Link href='/'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                            <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Project</li>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                        </Link>
                    </ul>
                </div> */}
            </div>
        </div>
    )
};

export default Navbar;

