import React, { useState } from "react";

import { SiGithub } from "react-icons/si";

import { projects } from '../../constants';

import iphonePortfolio from '../../assets/images/iPhone-1.png'
import iphoneAngry from '../../assets/images/iPhone-2.png'
import macThink from '../../assets/images/mac.png'
import ProjectCard from '../../components/ProjectCard';

const headerText = {
  title: "Projects",
  subtitle: "Big ideas don't fall from the sky...",
  text: "Explore my portfolio further to discover the range and depth of my projects."
}

const portfolioIntro = {
  title: "Portfolio",
  text1: "This is an exploration of font sizing and optimal  character limits per line—because you know, there is a limit. Each line, except the first, aims for a character length between ~70 and ~75 characters.",
  text2: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui modi, quis nisi incidunt quidem ducimus soluta doloribus minima laboriosam mollitia veniam quo asperiores sit aliquid quae? Nobis aliquid excepturi voluptatum."
}

const tags = ["#all", "#javascript", "#python", "#typescript", "#react", "#nextjs", "#angular", "#django"];

const Projects = () => {
  const [selectedTag, setSelectedTag] = useState();

  const sortedProjectsByDate = [...projects]
    .sort((a, b) => a.date.localeCompare(b.date))
    .reverse();

  const filteredProjects = selectedTag
    ? sortedProjectsByDate.filter((project) =>
      project.hiddenTags.includes(selectedTag)
    )
    : sortedProjectsByDate;

  return (
    <>
      <header id="top" className='projects-header max-h-screen min-h-screen w-full relative mb-20 lg:mb-40 flex-centered'>
        <div className="section-width-default grid grid-rows-2 xl:grid-rows-1 content-center">
          <div className="">
            <h1 className='massive-text z-10 mb-10 lg:mb-20'>{headerText.title}</h1>
            <h2 className='z-10 relative mb-10 lg:mb-20'>{headerText.subtitle}</h2>
            <p className='mb-6 max-w-[600px]'>{headerText.text}</p>
          </div>
          <div className="relative w-full h-full">
            <img className='object-cover w-[400px] lg:w-auto h-auto absolute bottom-[-10%] lg:bottom-0 right-0 lg:right-10 z-0' src={macThink} alt="macbook thinkbig project" />
            <img className='object-cover w-[200px] lg:w-auto h-auto absolute bottom-0 lg:bottom-10 right-12 lg:right-20 z-0' src={iphoneAngry} alt="iphone angry fish project" />
            <img className='object-cover w-[200px] lg:w-auto h-auto absolute bottom-[-5%] lg:bottom-0 right-0 lg:right-0 z-0' src={iphonePortfolio} alt="iphone portfolio project" />
          </div>
        </div>
      </header>
      <section className="portfolio-intro section-width-default w-full flex-centered relative mb-20 lg:mb-40">
        <div className="flex-centered flex-col">
          <h1 className='mb-20 lg:mb-40'>{portfolioIntro.title}</h1>
          <p>{portfolioIntro.text1}</p>
          <br />
          <p>{portfolioIntro.text2}</p>
        </div>
      </section>

      <section className="projects-main section-width-default min-h-screen w-full flex-centered flex-col relative">

        <div className="tags-container grid grid-rows-4 grid-flow-col gap-4 mb-20 lg:mb-40">
          {
            tags.map((tag) => {
              return (
                <button className={`btn-tag ${tag === selectedTag ? 'selected' : ''}`} key={tag} onClick={() => setSelectedTag(tag)}>{tag}</button>
              )
            })
          }
        </div>

        <div className="projects-container">
            {filteredProjects.map((item) => {
              return(
                <ProjectCard 
                  key={item.title}
                  imgSrc={item.image}
                  imgAlt={item.alt}
                  title={item.title}
                  text1={item.text1}
                  text2={item.text2}
                  tags={item.tags}
                  variant={item.class}
                  github={item.github}
                  link={item.link}
                  btn={item.btnColor}
                  techs={item.icon}
                />

              )
            })}
        </div>
      </section>
    </>
  )
}

export default Projects