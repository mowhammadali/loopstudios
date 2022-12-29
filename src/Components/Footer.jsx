import React from 'react';

import logo from "../assets/svgs/logo.svg";
import pinterest from "../assets/svgs/icon-pinterest.svg";
import instagram from "../assets/svgs/icon-instagram.svg";
import twitter from "../assets/svgs/icon-twitter.svg";
import facebook from "../assets/svgs/icon-facebook.svg";

const Footer = () => {
    return (
        <div className='bg-black' id='footer'>
            <div className='container max-w-6xl flex flex-col
            items-center mx-auto px-6 pt-12 pb-10 md:pb-16 md:flex-row md:justify-between md:items-start'>
                <div className='flex flex-col items-center space-y-6 mb-16 md:mb-0 md:items-start md:space-y-2'>
                    <img alt='logo' src={logo}/>
                    <ul className='flex flex-col items-center space-y-7
                    text-white text-lg md:flex-row md:space-x-6 md:items-baseline'>
                        <a className='border-b-2 border-transparent hover:border-white' href='#'>About</a>
                        <a className='border-b-2 border-transparent hover:border-white' href='#'>Careers</a>
                        <a className='border-b-2 border-transparent hover:border-white' href='#'>Events</a>
                        <a className='border-b-2 border-transparent hover:border-white' href='#'>Product</a>
                        <a className='border-b-2 border-transparent hover:border-white' href='#'>Suport</a>
                    </ul>
                </div>
                <div className='flex flex-col items-center
                space-y-6 md:items-start text-white'>
                    <div className='flex items-center space-x-5'>
                        <img className='cursor-pointer' alt='pinterest' src={pinterest}/>
                        <img className='cursor-pointer' alt='instagram' src={instagram}/>
                        <img className='cursor-pointer' alt='facebook' src={facebook}/>
                        <img className='cursor-pointer' alt='twitter' src={twitter}/>
                    </div>
                    <p className='text-zinc-500'>© 2022 Loopstudios. All Rights Reserved </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;