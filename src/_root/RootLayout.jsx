import { useState } from 'react';
import { Outlet } from 'react-router-dom'

import Topbar from './layout/Topbar'
import { ThemeSwitch } from './layout/ThemeSwitch';


const RootLayout = () => {

  return (
    <>
      <div className={`main-container relative light-background dark-background`}>
        <Topbar />
        {/* <LeftSidebar /> */}
        {/* <ThemeSwitch /> */}

        <main className='flex-centered flex-col'>
          <Outlet />
        </main>

        {/* <Bottombar /> */}
      </div>
    </>
  )
}

export default RootLayout