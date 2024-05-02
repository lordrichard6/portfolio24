import React from 'react'
import { SiGithub } from "react-icons/si";

const Projects = () => {
  return (
    <>
      <header id="top" className='projects-header max-h-screen min-h-screen w-full relative mb-40 flex-centered'>
        <div className="section-width-default">
          <h1 className='text-[220px] z-10 relative'>Projects</h1>
          <h2 className='z-10 relative mb-20'>Big ideas don't fall from the sky...</h2>
          <p className='w-[600px] mb-[30rem]'>Explore my portfolio further to discover the range and depth of my projects.</p>
          <img className='object-cover w-auto h-auto absolute bottom-1/3 right-1/4 z-0' src="/src/assets/images/mac.png" alt="" />
          <img className='object-cover w-auto h-auto absolute bottom-[40%] right-1/4 z-0' src="/src/assets/images/iPhone-2.png" alt="" />
          <img className='object-cover w-auto h-auto absolute bottom-1/3 right-[20%] z-0' src="/src/assets/images/iPhone-1.png" alt="" />
        </div>
      </header>

      <section className="portfolio-intro section-width-default w-full flex-centered relative mb-40">
        <div className="flex-centered flex-col">
          <h1 className='mb-40'>Portfolio</h1>
          <p>This is an exploration of font sizing and optimal  character limits per line—because you know, there is a limit. Each line, except the first, aims for a character length between ~70 and ~75 characters. </p>
          <br />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui modi, quis nisi incidunt quidem ducimus soluta doloribus minima laboriosam mollitia veniam quo asperiores sit aliquid quae? Nobis aliquid excepturi voluptatum.</p>
        </div>
      </section>

      <section className="projects-main section-width-default min-h-screen w-full flex-centered flex-col relative">
        <div className="tags-container grid grid-rows-2 grid-flow-col gap-4 mb-40">
          <button className='btn-tag'>#tag</button>
          <button className='btn-tag'>#tag</button>
          <button className='btn-tag'>#tag</button>
          <button className='btn-tag'>#tag</button>
          <button className='btn-tag'>#tag</button>
          <button className='btn-tag'>#tag</button>
          <button className='btn-tag'>#tag</button>
          <button className='btn-tag'>#tag</button>
          <button className='btn-tag'>#tag</button>
          <button className='btn-tag'>#tag</button>
          <button className='btn-tag'>#tag</button>
          <button className='btn-tag'>#tag</button>
        </div>
        <div className="projects-container">

          <div className="project variant-01 flex-centered w-screen">
            <div className="flex section-width-default flex-centered">
              <div className="w-fit my-20">
                <img className='object-cover min-w-[480px] h-[480px] rounded' src="/src/assets/images/test-dark.jpg" alt="" />
              </div>
              <div className="h-full flex flex-col justify-between ml-10">
                <div className="flex justify-between">
                  <h2>Project 1</h2>
                  <div className="text-xl grid grid-flow-col gap-4">
                    <span>#tag</span>
                    <span>#tag</span>
                    <span>#tag</span>
                    <span>#tag</span>
                    <span>#tag</span>
                  </div>
                </div>
                <p>This is an exploration of font sizing and optimal  character limits per line—because you know, there is a limit. Each line, except the first, aims for a character length between ~70 and ~75 characters. </p>
                <br />
                <p>This is an exploration of font sizing and optimal  character limits per line—because you know, there is a limit. Each line, except the first, aims for a character length between ~70 and ~75 characters. </p>
                <div className="w-full flex justify-end items-end mt-20">
                  <button className='btn-small blue ml-auto'>Visit project</button>
                  <button className='btn-social blue small'><SiGithub /></button>
                </div>
              </div>
            </div>
          </div>

          <div className="project variant-02 flex-centered bg-[#C4E4FF] dark:bg-[#00224D] w-screen">
            <div className="flex section-width-default flex-centered">
              <div className="w-fit my-20">
                <img className='object-cover min-w-[480px] h-[480px] rounded' src="/src/assets/images/test-dark.jpg" alt="" />
              </div>
              <div className="h-full flex flex-col justify-between ml-10">
                <div className="flex justify-between">
                  <h2>Project 2</h2>
                  <div className="text-xl grid grid-flow-col gap-4">
                    <span>#tag</span>
                    <span>#tag</span>
                    <span>#tag</span>
                    <span>#tag</span>
                    <span>#tag</span>
                  </div>
                </div>
                <p>This is an exploration of font sizing and optimal  character limits per line—because you know, there is a limit. Each line, except the first, aims for a character length between ~70 and ~75 characters. </p>
                <br />
                <p>This is an exploration of font sizing and optimal  character limits per line—because you know, there is a limit. Each line, except the first, aims for a character length between ~70 and ~75 characters. </p>
                <div className="w-full flex justify-end items-end mt-20">
                  <button className='btn-small pink ml-auto'>Visit project</button>
                  <button className='btn-social pink small'><SiGithub /></button>
                </div>
              </div>
            </div>
          </div>

          <div className="project variant-01 flex-centered bg-[#E1AFD1] dark:bg-[#610C9F] w-screen">
            <div className="flex section-width-default flex-centered">
              <div className="w-fit my-20">
                <img className='object-cover min-w-[480px] h-[480px] rounded' src="/src/assets/images/test-dark.jpg" alt="" />
              </div>
              <div className="h-full flex flex-col justify-between ml-10">
                <div className="flex justify-between">
                  <h2>Project 3</h2>
                  <div className="text-xl grid grid-flow-col gap-4">
                    <span>#tag</span>
                    <span>#tag</span>
                    <span>#tag</span>
                    <span>#tag</span>
                    <span>#tag</span>
                  </div>
                </div>
                <p>This is an exploration of font sizing and optimal  character limits per line—because you know, there is a limit. Each line, except the first, aims for a character length between ~70 and ~75 characters. </p>
                <br />
                <p>This is an exploration of font sizing and optimal  character limits per line—because you know, there is a limit. Each line, except the first, aims for a character length between ~70 and ~75 characters. </p>
                <div className="w-full flex justify-end items-end mt-20">
                  <button className='btn-small blue ml-auto'>Visit project</button>
                  <button className='btn-social blue small'><SiGithub /></button>
                </div>
              </div>
            </div>
          </div>

          <div className="project variant-02 flex-centered bg-[#C4E4FF] dark:bg-[#00224D] w-screen">
            <div className="flex section-width-default flex-centered">
              <div className="w-fit my-20">
                <img className='object-cover min-w-[480px] h-[480px] rounded' src="/src/assets/images/test-dark.jpg" alt="" />
              </div>
              <div className="h-full flex flex-col justify-between ml-10">
                <div className="flex justify-between">
                  <h2>Project 4</h2>
                  <div className="text-xl grid grid-flow-col gap-4">
                    <span>#tag</span>
                    <span>#tag</span>
                    <span>#tag</span>
                    <span>#tag</span>
                    <span>#tag</span>
                  </div>
                </div>
                <p>This is an exploration of font sizing and optimal  character limits per line—because you know, there is a limit. Each line, except the first, aims for a character length between ~70 and ~75 characters. </p>
                <br />
                <p>This is an exploration of font sizing and optimal  character limits per line—because you know, there is a limit. Each line, except the first, aims for a character length between ~70 and ~75 characters. </p>
                <div className="w-full flex justify-end items-end mt-20">
                  <button className='btn-small pink ml-auto'>Visit project</button>
                  <button className='btn-social pink small'><SiGithub /></button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Projects