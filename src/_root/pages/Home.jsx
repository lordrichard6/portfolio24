import { motion } from "framer-motion";

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
  pos1: "FullStack Developer",
  pos2: "UI & UX Designer",
  pos3: "AI Engineer",
  // pos3: "Digital Marketing Strategist",
}

export const socialMedia = {
  linkedin: "https://www.linkedin.com/in/pauloreizinho/",
  instagram: "https://www.instagram.com/paulo_reizinho/",
  github: "https://github.com/lordrichard6",
  whatsapp: "https://wa.link/sru6m7"
}

const Home = () => {
  return (
    <>
      <header id="top" className='min-h-screen relative flex justify-center items-center mb-20 lg:mb-40'>
        <div className="section-width-default flex-centered relative">
          <motion.figure
            className='z-10 w-full sm:w-3/4 lg:w-[60%]'
            initial={{
              opacity: 0,
              y: -150
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 2,
              }
            }}
            viewport={{ once: true }}
          >
            <img src={armsCrossed} alt="paulo reizinho formal" />
          </motion.figure>
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

      <section className="who-am-i min-h-screen w-full flex-centered relative mb-20 lg:mb-40 overflow-hidden">
        <div className="section-width-default flex-centered">
          <motion.div
            className="clipped-bg"
            initial={{
              opacity: 0,
              x: 150,

            }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 1.2
              }
            }}
            viewport={{ once: true }}
          />
          <motion.div
            className="clipped-bg second"
            initial={{
              opacity: 0,
              x: -150,

            }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 1.5
              }
            }}
            viewport={{ once: true }}
          />
          <div className="z-10">
            <h1 className='mb-10 lg:mb-20'>{whoAmI.title}</h1>
            <div className="flex flex-col-reverse lg:flex-row mb-10 lg:mb-20">
              <div className="grid gap-2">
                <motion.h2
                  initial={{
                    opacity: 0,
                    x: -50
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 2
                    }
                  }}
                  viewport={{ once: true }}
                >
                  {whoAmI.pos1}
                </motion.h2>
                <motion.h2
                  initial={{
                    opacity: 0,
                    x: -50
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 2
                    }
                  }}
                  viewport={{ once: true }}
                >{whoAmI.pos2}</motion.h2>
                <motion.h2
                  initial={{
                    opacity: 0,
                    x: -50
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 2
                    }
                  }}
                  viewport={{ once: true }}
                >{whoAmI.pos3}</motion.h2>
              </div>
              <motion.figure
                className="image-hover mx-auto lg:mx-0 relative w-[260px] md:w-[400px] h-[260px] md:h-[400px] hover:cursor-pointer"
                initial={{
                  opacity: 0,
                  x: 50,

                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 1.5
                  }
                }}
                whileHover={{
                  scale: 1.2,
                  transition: {
                    duration: 0.5
                  }

                }}
                viewport={{ once: true }}
              >
                <img className="object-cover object-center" src={roundSmile} alt="paulo reizinho smiling" />
                <img className="object-cover object-center" src={roundSerious} alt="paulo reizinho serious" />
              </motion.figure>
            </div>
            <div className="btns flex-centered">
              <button className='btn primary pink'><a href="/about">Know more</a></button>
              <button className='btn primary social pink'><a target="_blank" href={socialMedia.linkedin}><SlSocialLinkedin /></a></button>
              <button className='btn primary social pink'><a target="_blank" href={socialMedia.instagram}><SlSocialInstagram /></a></button>
            </div>
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
                  description1={project.text1}
                  description2=""
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