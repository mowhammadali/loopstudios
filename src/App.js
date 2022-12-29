import React from 'react';

// components
import Hero from './Components/Hero';
import Feature from './Components/Feature';
import Creations from './Components/Creations';
import Footer from './Components/Footer';

const App = () => {
    return (
        <div>
            <Hero />
            <Feature />
            <Creations />
            <Footer />
        </div>
    );
};

export default App;