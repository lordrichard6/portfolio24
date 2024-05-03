import React from 'react'


import SignatureComponent from '../../components/signature'
import { SlSocialLinkedin, SlSocialInstagram } from "react-icons/sl";
import { SiGithub } from "react-icons/si";

import { imageLinks } from "../../constants"
import logo from '/src/assets/images/me_crossed_arms.png'

const Home = () => {
  return (
    <>
      <header id="top" className='min-h-screen relative flex justify-center items-center mb-20 lg:mb-40'>
        <div className="section-width-default flex-centered relative">
          <figure className='z-10 w-full sm:w-3/4 lg:w-[60%] '>
            <img className='01' src={imageLinks[0].src} alt={imageLinks[0].alt} />
            {/* <img className='02' src={require('/src/assets/images/me_crossed_arms.png')} alt={imageLinks[0].alt} /> */}
            <img className='03' src={logo} alt={imageLinks[0].alt} />
          </figure>
          <div className="blob-container hidden lg:contents z-0">
            <div className="blobs">
              <div className="blob a">a</div>
              <div className="blob b">b</div>
              <div className="blob c">c</div>
            </div>
          </div>
        </div>
        <SignatureComponent />
      </header>

      <section className="who-am-i section-width-default min-h-screen w-full flex-centered relative mb-20 lg:mb-40">
        <div className="clipped-bg" />
        <div className="clipped-bg second" />
        <div className="z-10">
          <h1 className='mb-10 lg:mb-20'>Who am I?</h1>
          <div className="flex flex-col-reverse lg:flex-row mb-10 lg:mb-20">
            <div className="grid gap-2">
              <h2>Front-end Developer</h2>
              <h2>UI & UX Designer</h2>
              <h2>Digital Marketing Strategist</h2>
            </div>
            <figure className="relative w-[260px] md:w-[400px] h-[260px] md:h-[400px] image-hover hover:cursor-pointer">
              <img className="object-cover object-center" src="/src/assets/images/home_me_01.png" alt="" />
              <img className="object-cover object-center" src="/src/assets/images/home_me_03.png" alt="" />
              {/* <img className='w-[280px] h-[280px] mb-10 lg:mb-0 rounded-full object-cover' src="/src/assets/images/test.jpg" alt="" /> */}
            </figure>
          </div>
          <div className="flex-centered">
            <button className='btn-primary'>Know more</button>
            <button className='btn-social pink'><SlSocialLinkedin /></button>
            <button className='btn-social pink'><SlSocialInstagram /></button>
          </div>
        </div>

      </section>

      <section className='featured-projects section-width-default min-h-screen w-full flex-centered relative mb-40'>
        <div className="clipped-bg" />
        <div className="clipped-bg second" />
        <div className="clipped-bg third" />
        <div className="z-10">
          <h1 className='mb-40'>What I’ve build?</h1>
          <div className="project-container flex flex-col-reverse lg:flex-row mb-40">
            <img className='lg:w-[400px] lg:h-[400px] object-cover' src="/src/assets/images/test.jpg" alt="" />
            <div className="ml-10">
              <h2>Project 1</h2>
              <p>This is an exploration of font sizing and optimal  character limits per line—because you know, there is a limit. Each line, except the first, aims for a character length between ~70 and ~75 characters. </p>
              <br />
              <p>This is an exploration of font sizing and optimal  character limits per line—because you know, there is a limit. Each line, except the first, aims for a character length between ~70 and ~75 characters. </p>
              <div className="w-full flex justify-end items-end mt-20">
                <button className='btn-small ml-auto pink'>Visit project</button>
              </div>
            </div>
          </div>
          <div className="project-container flex flex-col-reverse lg:flex-row  mb-40">
            <div className="mr-10">
              <h2 className='text-right'>Project 2</h2>
              <p>This is an exploration of font sizing and optimal  character limits per line—because you know, there is a limit. Each line, except the first, aims for a character length between ~70 and ~75 characters. </p>
              <br />
              <p>This is an exploration of font sizing and optimal  character limits per line—because you know, there is a limit. Each line, except the first, aims for a character length between ~70 and ~75 characters. </p>
              <div className="w-full flex justify-start items-end mt-20">
                <button className='btn-small ml-auto pink'>Visit project</button>
              </div>
            </div>
            <img className='lg:w-[400px] lg:h-[400px] object-cover' src="/src/assets/images/test.jpg" alt="" />
          </div>
          <div className="project-container flex flex-col-reverse lg:flex-row  mb-40">
            <img className='lg:w-[400px] lg:h-[400px] object-cover' src="/src/assets/images/test.jpg" alt="" />
            <div className="ml-10">
              <h2>Project 3</h2>
              <p>This is an exploration of font sizing and optimal  character limits per line—because you know, there is a limit. Each line, except the first, aims for a character length between ~70 and ~75 characters. </p>
              <br />
              <p>This is an exploration of font sizing and optimal  character limits per line—because you know, there is a limit. Each line, except the first, aims for a character length between ~70 and ~75 characters. </p>
              <div className="w-full flex justify-end items-end mt-20">
                <button className='btn-small ml-auto pink'>Visit project</button>
              </div>
            </div>
          </div>
          <div className="flex-centered mb-40">
            <button className='btn-primary'>More projects</button>
            <button className='btn-social pink'><SiGithub /></button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home