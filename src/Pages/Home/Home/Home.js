import React from 'react';
import Contact from '../../Shared/Contact/Contact';
import Banner from '../Banner/Banner';
import ImageCarosel from '../ImageCarosel/ImageCarosel';
import Progress from '../Progress/Progress';
import SDG from '../SDG/SDG';

const Home = () => {
    return (
        <div className=' min-h-[100vh] '>
            <Banner></Banner>
            <SDG></SDG>
            <Progress></Progress>
            <ImageCarosel></ImageCarosel>
            <Contact></Contact>
            <div className="divider"></div>
        </div>
    );
};

export default Home;