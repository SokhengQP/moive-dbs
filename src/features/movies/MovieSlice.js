import { createSlice } from "@reduxjs/toolkit";
import { fetchMovie } from "./MovieAction";

const initialState = {
     data: {},
     status: '',
     error: {}
}

export const MovieSlice = createSlice({
     name: 'movie',
     initialState: initialState,
     reducer: {},
     extraReducers(builder) {
          builder
               .addCase(fetchMovie.pending, (state, action) => {
                    state.status = 'Pending';
               })
     
               .addCase(fetchMovie.fulfilled, (state, action) => {
                    state.status = 'Success';
                    console.log('payload', action.payload);
                    state.data = action.payload // payload from API
                    
               })
          
               .addCase(fetchMovie.rejected, (state, action) => {
                    console.log(action.error)
                    state.error = action.error;
               })
     }
})

export default MovieSlice.reducer;