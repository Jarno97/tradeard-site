import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Loader from '../Loader';

function Home() {
    return (
        <>
            <HeroSection />
            <Cards />
        </>
    );
}

export default Home;