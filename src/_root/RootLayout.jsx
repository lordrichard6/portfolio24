import { useState } from 'react';
import { Outlet } from 'react-router-dom'

import Topbar from './layout/Topbar'
import { ThemeSwitch } from './layout/ThemeSwitch';


const RootLayout = () => {

  return (
    <>
      <div className={`main-container w-full md:flex relative light-background dark-background`}>
        <Topbar />
        {/* <LeftSidebar /> */}
        {/* <ThemeSwitch /> */}

        <section>
          <Outlet />
        </section>

        {/* <Bottombar /> */}
      </div>
    </>
  )
}

export default RootLayout