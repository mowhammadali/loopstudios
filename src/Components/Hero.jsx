import React, { useRef } from 'react';

// images
import logo from '../assets/svgs/logo.svg';

const Hero = () => {

    const menu = useRef(null);
    const handleMenu = e => {
        e.currentTarget.classList.toggle("open");
        menu.current.classList.toggle('flex');
        menu.current.classList.toggle('hidden');
    }

    return (
        <section id='hero'>
            <div className='container max-w-6xl mx-auto py-12 px-6'>
                {/* nav section */}
                <nav className='flex justify-between items-center font-bold text-white'>
                    {/* logo */}
                    <img alt='logo' src={logo}/>
                    {/* desktop menu */}
                    <div className='hidden md:flex space-x-8'>
                        <a className='border-b-2 border-transparent hover:border-white' href='#'>About</a>
                        <a className='border-b-2 border-transparent hover:border-white' href='#'>Careers</a>
                        <a className='border-b-2 border-transparent hover:border-white' href='#'>Events</a>
                        <a className='border-b-2 border-transparent hover:border-white' href='#'>Products</a>
                        <a className='border-b-2 border-transparent hover:border-white' href='#'>Support</a>
                    </div>
                    {/* hambergur menu */}
                    <div className='md:hidden'>
                        <button onClick={handleMenu}
                        className='md:hidden hambergur z-40 block'>
                            <span className='hambergur-top'></span>
                            <span className='hambergur-middle'></span>
                            <span className='hambergur-bottom'></span>
                        </button>
                    </div>
                </nav>
                {/* mobile menu */}
                <div ref={ menu }
                className='hidden flex-col absolute top-0 bottom-0 
                left-0 w-full min-h-screen bg-black text-white
                pt-40 pl-12 text-lg uppercase space-y-5 md:hidden'>
                    <a className='hover:text-pink-500' href='#'>About</a>
                    <a className='hover:text-pink-500' href='#'>Careers</a>
                    <a className='hover:text-pink-500' href='#'>Event</a>
                    <a className='hover:text-pink-500' href='#'>Products</a>
                    <a className='hover:text-pink-500' href='#'>Suport</a>
                </div>
                {/* card */}
                <div className='max-w-lg mt-32 mb-36 p-4 md:p-10 border-2 text-2xl 2xs:text-4xl
                md:text-6xl uppercase text-white'>
                    Impressive Experiences That Deliver
                </div>
            </div>
        </section>
    );
};

export default Hero;