import React, { useState } from 'react';

// components
import Card from './Card';

// data
import { data } from './data';

const Creations = () => {
    const [images] = useState(data);
    return (
        <div id='creations'>
            <section className='container max-w-6xl mx-auto px-6 text-gray-900'>
                <div className='flex items-center mb-12 justify-center md:justify-between'>
                    <h1 className='text-4xl font-light md:text-5xl'>Our Creations</h1>
                    <button className='btn-dark hidden md:block'>
                        See All
                    </button>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-6 mb-12'>
                    {images.map(image => <Card key={image.id} {...image}/>)}
                </div>
                <button className='btn-dark w-full mb-32 md:hidden'>See All</button>
            </section>
        </div>
    );
};

export default Creations;