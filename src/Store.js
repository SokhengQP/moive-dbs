import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counterSlice';
import MovieReducer from './features/movies/MovieSlice';
export const Store = configureStore({
     reducer: {
          counter: counterReducer,
          movie: MovieReducer
     }    
})
