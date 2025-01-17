import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchMovie } from "../features/movies/MovieAction";

export default function Home() {
     const dispatch = useDispatch();
     const { data, status } = useSelector((state) => state.movie);
     
     useEffect(() => {
          dispatch(fetchMovie());
     }, [])
     
     return (
          <>
               <div>
                    {data.results && data.results.map((movie) => {
                         const url = 'https://image.tmdb.org/t/p/w500';
                         const { backdrop_path, id, original_title, release_date } = movie;
                         return (
                         
                              <div key={id} className="inline-block mx-2 p-2">
                                   <img loading="lazy" className="rounded-md aspect-video w-80" src={url + backdrop_path} alt="movie-pf" />
                                   <div>{ id }</div>
                                   <div className="">{ original_title }</div>
                                   <div>{ release_date }</div>
                              </div>
                         )
                    })}
               </div>
                    
          </>
     )
}