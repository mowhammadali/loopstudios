import React from 'react';

// images
import interactive from "../assets/images/desktop/image-interactive.jpg";

const Feature = () => {
    return (
        <div id='feature'>
            <section className='container relative max-w-6xl flex-col
            md:flex-row items-center mx-auto my-32 px-6 md:px-0 text-gray-900'>
                <img  alt='interactive' src={interactive}/>
                <div className='flex flex-col items-center md:absolute
                md:bottom-0 md:right-0 bg-white
                md:py-20 md:px-8'>
                    <h2 className='max-w-sm text-center md:text-center 
                    text-4xl md:text-5xl uppercase mb-6 mt-8 md:mt-0'>
                        The leader in interactive VR
                    </h2>
                    <p className='font-serif max-w-md text-center text-sm text-zinc-700'>
                        Founded in 2011, Loopstudios has been producing
                        world-class virtual reality projects for some of the
                        best companies around the globe. Our award-winning
                        creations have transformed businesses through digital
                        experiences that bind to their brand. 
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Feature;