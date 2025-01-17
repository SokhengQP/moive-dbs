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
               <div className="flex flex-wrap justify-center" data-aos="fade-up-right">
                    {data.results && data.results.map((movie) => {
                         const url = 'https://image.tmdb.org/t/p/w500';
                         const { backdrop_path, id, original_title, release_date } = movie;
                         return (
                         
                              <div data-aos="fade-up-right" key={id} className="inline-block mx-2 my-4 overflow-hidden">
                                   <img loading="lazy" className="rounded-md aspect-video w-80" src={url + backdrop_path} alt="movie-pf" />
                                   <div className="px-4 py-1">
                                        <div>{ id }</div>
                                        <div className="text-[14px]">{ original_title }</div>
                                        <div>{ release_date }</div>
                                   </div>
                              </div>
                         )
                    })}
               </div>
                    
          </>
     )
}