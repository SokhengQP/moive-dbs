import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider  } from 'react-router';
import { Provider } from 'react-redux';

import { Store } from './Store';
import MasterLayout from './MasterLayout';

import AboutUs from './Components/AboutUs';
import People from './Components/People';
import ContactUs from './Components/ContactUs';
import Cart from './Components/Cart';
import LogIn from './Components/LogIn';
import MovieDetails from './Components/MovieDetails';
import RootError from './RootError';
import Home from './Components/Home'
const routes = createBrowserRouter([
  {
    path: '/',
    element: <MasterLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about-us',
        element: <AboutUs />
      },
      {
        path: '/contact-us',
        element: <ContactUs />
      },
      {
        path: '/people',
        element: <People/>
      },
      {
        path: '/movie-details',
        element: <MovieDetails />
      },
      {
        path: '/favorites',
        element: <Cart />
      },
      {
        path: '/log-in',
        element: <LogIn />
      },
    ],
    errorElement: <RootError/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={ Store }>
      <RouterProvider router={ routes } />
    </Provider>
  </StrictMode>,
)
