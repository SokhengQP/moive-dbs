import { Link } from "react-router";
import { IoIosLogIn } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function Header() {
     const count = useSelector((state) => state.counter.value);
     
     const links = [
     
          { id: 0, title: 'Home', path: '/' },
          { id: 1, title: 'About Us', path: '/about-us' },
          { id: 2, title: 'Contact Us', path: '/contact-us' },
          { id: 3, title: 'People', path: '/people' },
          { id: 4, title: 'Movie Details', path: '/movie-details' },
          { id: 5, title: 'Log in', path: '/log-in', icons: <IoIosLogIn/>},
     ];
     
     const mypf = [
          { imgs: 'https://cdn.pixabay.com/photo/2013/07/13/01/21/popcorn-155602_1280.png' }
     ];
     
     const addCard = [
          { title: 'Favorite', path: '/favorites', icons: <FaCartPlus /> }
     ];
     
     return (
          <>
               <div className="absolute w-24 h-24 border blur-[60px] bg-red-500 top-44" />
               <div className="absolute" />
               <div className="flex justify-between items-center mx-4 flex-shrink-0" data-aos="fade-down">
                    
                    {mypf.map(items =>
                         <Link to='/'>
                              <img className="w-12 rounded-[50%] mix-blend-screen" src={items.imgs} alt="my-pf" />
                         </Link>
                    )}

                    
                    <div className="flex items-center gap-2">
                         <div className="flex border rounded-md mx-4" data-aos="fade-down">
                              {addCard.map((item) => { 
                                   const { title, icons, path } = item;
                                   return (
                                        <Link to={path} className="flex items-center gap-2 py-1 px-4 group shadow-[#fdf0d5] hover:shadow-[0_0_10px] text-[14px] relative">
                                             <span className="">{ title }</span>
                                             <div className="">{icons}</div>
                                             <span className="absolute z-10 -top-2 -left-2 bg-red-600 px-2 rounded-md text-[10px]">{ count }</span>
                                        </Link>
                                   )
                              })}
                              
                         </div>
                         
                         <div className="flex" data-aos="fade-up-right">
                              {links.map((items) => {
                                   const { id, title, path, icons } = items;
                                   return (
                                        <div>
                                             <Link key={id} to={path} className="flex items-center gap-2 flex-shrink-0 px-4 py-1 mx-4 rounded-md border shadow-[#fdf0d5] hover:shadow-[0_0_10px] text-[14px] group">
                                                  {title}
                                                  {icons}
                                             </Link>
                              
                                        </div>
                                   )
                              })}
                         </div>
                    </div>
               </div>
          </>
     )
}

