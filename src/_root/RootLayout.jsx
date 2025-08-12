import { useState } from "react";
import { Outlet } from 'react-router-dom'

import Topbar from './layout/Topbar'
import Bottombar from './layout/Bottombar';
import Sidebar from './layout/Sidebar';


const RootLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // });

  return (
    <>
      <div className={`main-container relative light-background dark-background`}>
        <Sidebar isOpen={isOpen} toggle={toggle}  />
        <Topbar toggle={toggle} />

        <main className='flex-centered flex-col'>
          <Outlet />
        </main>

        <Bottombar />
      </div>
    </>
  )
}

export default RootLayout