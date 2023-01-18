import React from 'react';
import Carousel from "./Carousel";
import Newsongs from './Newsongs';
import Topdaysong from './Topdaysong';
import Trendingartists from './Trendingartists';

const Home = () => {
    return (
        <div>
            <Carousel/>
            <Newsongs/>
            <Topdaysong/>
            <Trendingartists/>
            
        </div>
    );
}

export default Home;