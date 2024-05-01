import React from 'react'
import SignatureComponent from '../../components/signature'

const Home = () => {
  return (
    <>
      <header id="top" className='w-screen min-h-screen max-h-screen relative flex justify-center items-center py-24'>
        <div className="section-width-default flex-centered w-full flex-col-reverse xl:flex-row z-20 relative">
          <div className="flex-centered absolute z-10 md:w-[50vw] lg:w-2/3l xl:w-5/12 px-4 md:px-0 max-h-[80vh] max-w-[700px]">
            <img className='w-full p-0 xl:p-6 lg:mx-auto' src="/src/assets/images/me_crossed_arms.png" alt="" />
          </div>
          <div className="blob-container">
            <div className="blobs">
              <div className="blob a">a</div>
              <div className="blob b">b</div>
              <div className="blob c">c</div>
            </div>
          </div>
        </div>
        <SignatureComponent />
      </header>
      <section className="home-quote flex-centered w-full mb-20 sm:mb-0 relative">
        

      </section>
    </>
  )
}

export default Home