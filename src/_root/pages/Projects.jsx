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
  text1: <p>My <strong>commitment</strong> to staying abreast of the latest trends and best practices in front-end development allows me to consistently push the boundaries of what's possible, <strong>creativity</strong> doesn't have limits if you have the drive and the <strong>passion</strong>.</p>,
  text2: <p>Having worked with <strong>Angular</strong> and <strong>Django</strong> in professional settings, built personal projects with <strong>React</strong> and <strong>NextJS</strong> always focusing and improving the <strong>UI</strong> and <strong>UX</strong> in each project, this website is one of my latest <strong>achievments</strong>. I possess a good understanding of both <strong>front-end</strong> and <strong>back-end</strong> development, allowing me to create seamless, integrated solutions that <strong>exceed</strong> client <strong>expectations</strong>.</p>,
  text3: <p>In summary, my expertise as a front-end developer extends <strong>beyond</strong> mere coding proficiency. It encompasses a holistic approach to <strong>design</strong> and <strong>development</strong>, rooted in a deep understanding of user behavior and an unwavering commitment to <strong>excellence</strong>. With a proven track record of success and a <strong>passion</strong> for innovation, I am poised to make a <strong>meaningful</strong> impact on any project I undertake.</p>
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
            <div className="overlapping-title">
              <span data-text="Aim high"></span>
              <span data-text="stay humble."></span>
            </div>
            <h1 className='massive-text absolute top-[5%] left-[5%] lg:top-[10%] lg:left-[10%] z-10 opacity-20 blur-sm'>{headerText.title}</h1>
            <h2 className='z-10 relative mb-6 lg:mb-20'>{headerText.subtitle}</h2>
            <p className='mb-6 max-w-[600px]'>{headerText.text}</p>
          </div>
          <div className="relative w-full h-full">
            <img className='object-cover w-[400px] lg:w-auto h-auto absolute bottom-[-10%] lg:bottom-0 right-0 lg:right-10 z-0' src={macThink} alt="macbook thinkbig project" />
            <img className='object-cover w-[200px] lg:w-auto h-auto absolute bottom-0 lg:bottom-10 right-16 lg:right-20 z-0' src={iphoneAngry} alt="iphone angry fish project" />
            <img className='object-cover w-[200px] lg:w-auto h-auto absolute bottom-[-5%] lg:bottom-0 right-0 lg:right-0 z-0' src={iphonePortfolio} alt="iphone portfolio project" />
          </div>
        </div>
      </header>

      <section className="portfolio-intro section-width-default w-full flex-centered relative mb-20 lg:mb-40">
        <div className="flex-centered flex-col">
          <h1 className='mb-20 lg:mb-40'>{portfolioIntro.title}</h1>
          {portfolioIntro.text1}
          <br />
          {portfolioIntro.text2}
          <br />
          {portfolioIntro.text3}
        </div>
      </section>

      <section className="projects-main section-width-default min-h-screen w-full flex-centered flex-col relative">

        <div className="tags-container grid grid-cols-2 lg:grid-rows-2 lg:grid-cols-4 gap-4 mb-20 lg:mb-40">
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
            return (
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