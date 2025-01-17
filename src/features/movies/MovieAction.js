import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMovie = createAsyncThunk('/product/fetch/',
     async () => {
          try {
               let response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=995b46c34578880175b2df0cb63164cd`);
               let json = await response.json();
               return json;
          }
          catch (error) {
               return Promise.reject(error);
          }
     }
)
