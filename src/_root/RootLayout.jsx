import { Outlet } from 'react-router-dom'

import Topbar from './layout/Topbar'
import Bottombar from './layout/Bottombar';


const RootLayout = () => {

  return (
    <>
      <div className={`main-container relative light-background dark-background`}>
        <Topbar />
        {/* <LeftSidebar /> */}

        <main className='flex-centered flex-col'>
          <Outlet />
        </main>

        <Bottombar />
      </div>
    </>
  )
}

export default RootLayout