import Header from "./navbar/Header";
import { Outlet } from 'react-router';

export default function MasterLayout() {
     return (
          <>
               <Header />
               <Outlet />
          </>
     )
}