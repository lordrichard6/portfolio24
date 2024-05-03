import React from 'react'

import { projects } from '../../constants'
import SignatureComponent from '../../components/signature'
import { SlSocialLinkedin, SlSocialInstagram } from "react-icons/sl";
import { SiGithub } from "react-icons/si";

import armsCrossed from '/src/assets/images/me_crossed_arms.png'
import roundSmile from '/src/assets/images/home_me_01.png'
import roundSerious from '/src/assets/images/home_me_03.png'
import FeaturedProject from '../../components/FeaturedProject';

const whoAmI = {
  title: "Who am I?",
  pos1: "Front-end Developer",
  pos2: "UI & UX Designer",
  pos3: "Digital Marketing Strategist",
}

const socialMedia = {
  linkedin: "https://www.linkedin.com/in/pauloreizinho/",
  instagram: "https://www.instagram.com/paulo_reizinho/",
  github: "https://github.com/lordrichard6"
}

const Home = () => {
  return (
    <>
      <header id="top" className='min-h-screen relative flex justify-center items-center mb-20 lg:mb-40'>
        <div className="section-width-default flex-centered relative">
          <figure className='z-10 w-full sm:w-3/4 lg:w-[60%] '>
            <img src={armsCrossed} alt="paulo reizinho formal" />
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
          <h1 className='mb-10 lg:mb-20'>{whoAmI.title}</h1>
          <div className="flex flex-col-reverse lg:flex-row mb-10 lg:mb-20">
            <div className="grid gap-2">
              <h2>{whoAmI.pos1}</h2>
              <h2>{whoAmI.pos2}</h2>
              <h2>{whoAmI.pos3}</h2>
            </div>
            <figure className="image-hover mx-auto lg:mx-0 relative w-[260px] md:w-[400px] h-[260px] md:h-[400px] hover:cursor-pointer">
              <img className="object-cover object-center" src={roundSmile} alt="paulo reizinho smiling" />
              <img className="object-cover object-center" src={roundSerious} alt="paulo reizinho serious" />
            </figure>
          </div>
          <div className="btns flex-centered">
            <button className='btn primary pink'><a href="/about">Know more</a></button>
            <button className='btn primary social pink'><a target="_blank" href={socialMedia.linkedin}><SlSocialLinkedin /></a></button>
            <button className='btn primary social pink'><a target="_blank" href={socialMedia.instagram}><SlSocialInstagram /></a></button>
          </div>
        </div>

      </section>

      <section className='featured-projects section-width-default min-h-screen w-full flex-centered relative lg:mb-20'>
        <div className="clipped-bg" />
        <div className="clipped-bg second" />
        <div className="clipped-bg third" />
        <div className="z-10">
          <h1 className='mb-20 lg:mb-40'>What I’ve build?</h1>
          {projects.map((project) => {
            if (project.featured) {
              return (
                <FeaturedProject
                  key={project.title}
                  imgSrc={project.image}
                  imgAlt={project.alt}
                  title={project.title}
                  description1={"This is an exploration of font sizing and optimal  character limits per line—because you know, there is a limit. Each line, except the first, aims for a character length between ~70 and ~75 characters. "}
                  description2={"This is an exploration of font sizing and optimal  character limits per line—because you know, there is a limit. Each line, except the first, aims for a character length between ~70 and ~75 characters. "}
                  variant={project.class}
                  link={project.link}
                  github={project.github}
                />
              )
            }
          })}
          <div className="flex-centered mb-10">
            <button className='btn primary pink'><a href="/projects">More projects</a></button>
            <button className='btn primary social pink'><a href={socialMedia.github} target="_blank"><SiGithub /></a></button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home