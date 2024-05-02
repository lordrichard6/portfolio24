import React from 'react'
import { FaLaptopCode } from "react-icons/fa";
import { BsLayoutWtf } from "react-icons/bs";
import { IoShareSocialOutline } from "react-icons/io5";

const About = () => {
  return (
    <>
      <header id="top" className='about-header max-h-screen min-h-screen w-full relative'>
        <h1 className='text-[220px] absolute top-[20%] z-10'>About</h1>
        <div className="dark:hidden">
          {/* <img className='object-cover w-screen h-full absolute top-0 z-0' src="/src/assets/images/h-about-full.png" alt="" /> */}
          <img className='object-cover w-screen h-auto absolute bottom-0 z-20' src="/src/assets/images/h-about-blur.png" alt="" />
          <img className='object-cover w-screen h-auto absolute bottom-0 z-20' src="/src/assets/images/h-about-sand.png" alt="" />
        </div>
        <div className="hidden dark:contents">
          <img className='object-cover w-screen h-full absolute top-0 z-0' src="/src/assets/images/h-about-full-dark.png" alt="" />
          <img className='object-cover w-screen h-auto absolute bottom-0 z-20' src="/src/assets/images/h-about-blur-dark.png" alt="" />
          <img className='object-cover w-screen h-auto absolute bottom-0 z-20' src="/src/assets/images/h-about-sand-dark.png" alt="" />
        </div>
      </header>
      <section className="partners relative flex-centered flex-col w-full">
        <img className='object-cover dark:hidden w-screen h-full top-0 z-0' src="/src/assets/images/h-about-upside.png" alt="" />
        <img className='object-cover hidden dark:block w-screen h-full top-0 z-0' src="/src/assets/images/h-about-upside-dark.png" alt="" />
        <div className="fading absolute w-screen h-full top-0 z-0" />
        <h2 className='z-10'>Learning with the best!</h2>
        <div className="z-20 grid grid-rows-2 grid-flow-col gap-20 items-center mb-40">
          <img className='object-cover dark:invert w-[200px]' src="/src/assets/images/meta-Logo.png" alt="" />
          <img className='object-cover w-[200px]' src="/src/assets/images/google-logo.png" alt="" />
          <img className='object-cover w-[200px]' src="/src/assets/images/coursera-logo.png" alt="" />
          <img className='object-cover dark:invert w-[200px]' src="/src/assets/images/udemy-logo.png" alt="" />
          <img className='object-cover dark:invert w-[200px]' src="/src/assets/images/freecodecamp-logo.png" alt="" />
          <img className='object-cover w-[200px] p-6' src="/src/assets/images/youtube-logo.png" alt="" />
        </div>
      </section>

      <section className='about-intro flex-centered relative mb-40'>
        <div className="flex-centered bg-[#E6EBE4] dark:bg-[#44671f] w-screen">
          <div className="clipped-bg" />
          <div className="clipped-bg second" />
          <div className="clipped-bg third" />
          <div className="flex section-width-default flex-centered z-10">
            <div className="w-fit my-20">
              <img className='object-cover min-w-[480px] h-[480px]' src="/src/assets/images/test.jpg" alt="" />
            </div>
            <div className="h-full flex flex-col justify-between ml-10">
              <div className="flex justify-between">
                <h3>Hi, I’m Paulo Reizinho</h3>
              </div>
              <p>As a Google Ads specialist, I help ambitious companies get the most out of Google Ads. I work for a select number of clients and am responsible for over €1,500,000 per month in ad spend.</p>
              <br />
              <p>Over the years, I have had the opportunity to work on more than 100 Google Ads accounts. Often challenging accounts from great names, including Weight Watchers, Louwman, Harley Davidson, KPMG, Schoonenberg, and more.</p>
              <br />
              <p>I also provide Google Ads courses and 1-on-1 coaching sessions. In these, I share my knowledge with novice to very advanced Google Ads advertisers. This way, they learn the intricacies of the business.</p>
            </div>
          </div>
        </div>
      </section>

      <section className='skills-section section-width-default flex-centered relative mb-40'>
        <div className="flex-centered flex-col">
          <h1 className='mb-40'>What can I do for you?</h1>
          <div className="grid grid-cols-3 gap-16">

            <div className="card text-center flex-centered flex-col px-7 py-7 bg-[#C4E4FF] dark:bg-[#1679AB]">
              <FaLaptopCode className='w-[80px] h-[80px] mb-7' />
              <h3 className='mb-7'>Front-end Development</h3>
              <p className='mb-7 px-4'>I get the most out of your Google Ads campaigns. Let me setup, manage and optimize your account.</p>
              <button className="btn-small bg-[#FEF3DF] dark:bg-[#504024]">Learn more</button>
            </div>

            <div className="card text-center flex-centered flex-col px-7 py-7 bg-[#E6EBE4] dark:bg-[#44671f]">
              <BsLayoutWtf className='w-[80px] h-[80px] mb-7' />
              <h3 className='mb-7'>UI & UX Designer</h3>
              <p className='mb-7 px-4'>I get the most out of your Google Ads campaigns. Let me setup, manage and optimize your account.</p>
              <button className="btn-small blue">Learn more</button>
            </div>

            <div className="card text-center flex-centered flex-col px-7 py-7 bg-[#E1AFD1] dark:bg-[#5D1176]">
              <IoShareSocialOutline className='w-[80px] h-[80px] mb-7' />
              <h3 className='mb-7'>Digital Marketing Strategy</h3>
              <p className='mb-7 px-4'>I get the most out of your Google Ads campaigns. Let me setup, manage and optimize your account.</p>
              <button className="btn-small bg-[#E6EBE4] dark:bg-[#475342]">Learn more</button>
            </div>

          </div>
        </div>
      </section>

      <section className='work-together bg-[#E0F1F1] dark:bg-[#2d4a4a] w-full flex-centered relative'>
        <div className="flex-centered section-width-default w-screen">
          <div className="clipped-bg" />
          <div className="section-width-default flex-centered z-10">
            <div className="h-full flex-centered">
              <div className="flex flex-col justify-between h-[350px] w-[570px]">
                <h3>Lets work together</h3>
                <p>Let’s talk about the results I can get for your business. Free of jargon and without bullshit bingo.</p>
                <div className="">
                  <button className="btn-primary pink">Get in touch</button>
                </div>
              </div>
              <div className="w-[350px] h-[480px] my-20">
                <img className='object-cover max-w-[350px] h-[480px]' src="/src/assets/images/test.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About