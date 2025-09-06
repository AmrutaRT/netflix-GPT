import React, { use } from 'react';
import Header from './Header';
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies';
import { useSelector } from 'react-redux';
import GptSearch from './GptSearch'
import MainContainer from './MainContainer';

const Browse = () => {
    useNowPlayingMovies();
    const showGptSearch=useSelector((store)=>store.gpt.showGptSearch)
    return (
        <div>
            <Header/>
            {showGptSearch ? <GptSearch/>:<MainContainer/> }
        </div>
    );
};

export default Browse;