import { API_OPTIONS } from '../constants';
import { useEffect } from 'react';
import { setNowPlayingMovies } from '../Utils/moviesSlice';
import { useDispatch } from 'react-redux';

const useNowPlayingMovies = () => {
    const dispatch=useDispatch();

    const getNowPlayingMovies=async ()=>{
        const response= await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
        const data= await response.json();
        dispatch(setNowPlayingMovies(data.results));
        console.log(data);
    }

    useEffect (()=>{
        getNowPlayingMovies();
    },[])
}

export default useNowPlayingMovies;