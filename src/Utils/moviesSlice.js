import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:"movies",
    initialState:[],
    reducers:{
    setNowPlayingMovies:(state,action)=>{
        return action.payload;
    }
}

});

export const{setNowPlayingMovies}= moviesSlice.actions;
export default moviesSlice.reducer;