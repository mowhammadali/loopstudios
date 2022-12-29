import React from 'react';

const Card = ({mobileImg , desktopImg , title}) => {
    return (
        <div className='group relative cursor-pointer overflow-hidden text-white'>
            <img className='w-full md:hidden brightness-[0.6]
            group-hover:scale-110 group-hover:opacity-60
            duration-300' alt='creation' src={mobileImg}/>
            <img className='w-full hidden brightness-[0.6]
            group-hover:scale-110 duration-300
            group-hover:opacity-60 md:block'
            alt='creation' src={desktopImg}/>
            <h2 className='absolute bottom-6 left-6
            uppercase text-3xl font-light max-w-[160px]
            group-hover:scale-110 group-hover:text-black
            duration-300'>
                {title}
            </h2>
        </div>
    );
};

export default Card;