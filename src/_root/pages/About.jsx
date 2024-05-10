import SideScroller from '../../components/SideScroller'

import { FaReact, FaAngular, FaVuejs, FaFigma   } from "react-icons/fa";
import { SiNextdotjs, SiAdobephotoshop, SiAdobeillustrator } from "react-icons/si";
import { DiGoogleAnalytics } from "react-icons/di";

import meta from '/src/assets/images/meta-Logo.png'
import google from '/src/assets/images/google-logo.png'
import coursera from '/src/assets/images/coursera-logo.png'
import udemy from '/src/assets/images/udemy-logo.png'
import freecodecamp from '/src/assets/images/freecodecamp-logo.png'
import youtube from '/src/assets/images/youtube-logo.png'
import SkillCard from '../../components/SkillCard';

import meHeader from '../../assets/images/me03.jpg'
import meAbout from '../../assets/images/me02.jpg'
import meContact from '../../assets/images/me01.jpg'
import dev01 from '../../assets/icons/front-01.svg'
import dev02 from '../../assets/icons/front-02.svg'
import dev03 from '../../assets/icons/front-03.svg'
import design01 from '../../assets/icons/design-01.svg'
import design02 from '../../assets/icons/design-02.svg'
import design03 from '../../assets/icons/design-03.svg'
import mark01 from '../../assets/icons/mark-01.svg'
import mark02 from '../../assets/icons/mark-02.svg'
import mark03 from '../../assets/icons/mark-03.svg'

const header = {
  title: "Unveiling the Story Behind the Journey",
  image: meHeader,
  alt: "my picture"
}

const learnTitle = "Learning with the best!"

const aboutMe = {
  title: "Hi, I’m Paulo Reizinho",
  text_01: "As a Google Ads specialist, I help ambitious companies get the most out of Google Ads. I work for a select number of clients and am responsible for over €1,500,000 per month in ad spend.",
  text_02: "Over the years, I have had the opportunity to work on more than 100 Google Ads accounts. Often challenging accounts from great names, including Weight Watchers, Louwman, Harley Davidson, KPMG, Schoonenberg, and more.",
  text_03: "I also provide Google Ads courses and 1-on-1 coaching sessions. In these, I share my knowledge with novice to very advanced Google Ads advertisers. This way, they learn the intricacies of the business.",
  image: meAbout,
  alt: "my picture"
}

const learningPartners = [
  {
    logo: meta,
    alt: "meta logo",
    style: "dark:invert"
  },
  {
    logo: google,
    alt: "google logo",
    style: ""
  },
  {
    logo: coursera,
    alt: "coursera logo",
    style: ""
  },
  {
    logo: udemy,
    alt: "udemy logo",
    style: "dark:invert"
  },
  {
    logo: freecodecamp,
    alt: "freecodecamp logo",
    style: "dark:invert"
  },
  {
    logo: youtube,
    alt: "youtube logo",
    style: ""
  },
].map(({ logo, alt, style }) => ({
  image: logo,
  alt,
  id: alt,
  style: style
}))

const skillsSection = {
  title: "What can I do for you?"
}

const skillCards = [
  {
    title: "Front-end Development",
    text: "I specialize in developing dynamic websites using either React or Angular frameworks to ensure optimal performance and user experience.",
    img01: dev01,
    img02: dev02,
    img03: dev03,
    alt01: "web development puzzle icon",
    alt02: "web development puzzle icon",
    alt03: "web development puzzle icon",
    cardClass: "card-dev",
    btnColor: "green",
    tasks: [
      "Build Responsive and Interactive Websites that adapt seamlessly to various screen sizes and devices.",
      "Translate design mockups into functional and visually accurate web interfaces.",
      "Optimize Performance and Accessibility with the best practices and techniques to optimize website performance."
    ],
    techs: [
      <FaReact className='text-sky-900 dark:text-sky-400' />,
      <SiNextdotjs className='text-slate-900 dark:text-slate-100' />,
      <FaAngular className='text-rose-600 dark:text-rose-400' />,
      <FaVuejs className='text-green-800 dark:text-green-400' />
    ]
  },
  {
    title: "UI & UX Design",
    text: "I craft visually captivating and user-friendly interfaces using Figma, ensuring seamless experiences for users.",
    img01: design01,
    img02: design02,
    img03: design03,
    alt01: "interface organizing icon",
    alt02: "interface organizing icon",
    alt03: "interface organizing icon",
    cardClass: "card-design",
    btnColor: "pink",
    tasks: [
      "Conduct thorough user Research and Analysis to understand user needs, behaviors, and pain points.",
      "Develop wireframes and prototypes using Figma or Sketch to visualize design concepts, user flows, and interactions.",
      "Optimize Performance and Accessibility with the best practices and techniques to optimize website performance."
    ],
    techs: [
      <FaFigma className='text-rose-600 dark:text-rose-400' />,
      <SiAdobephotoshop  className='text-sky-900 dark:text-sky-400' />,
      <SiAdobeillustrator  className='text-yellow-600 dark:text-yellow-300' />,
    ]
  },
  {
    title: "Digital Marketing Strategy",
    text: "I devise effective digital marketing strategies to boost brand visibility and engagement online.",
    img01: mark01,
    img02: mark02,
    img03: mark03,
    alt01: "targeting mobile marketing icon",
    alt02: "targeting mobile marketing icon",
    alt03: "targeting mobile marketing icon",
    cardClass: "card-mark",
    btnColor: "blue",
    tasks: [
      "Tailor digital marketing strategies to meet business objectives using channels like SEO, SEM, and social media.",
      "Track and optimize key metrics to enhance campaign ROI and drive continuous growth.",
      "Stay Updated on Industry Trends and adapt strategies accordingly to remain competitive."
    ],
    techs: [
      <DiGoogleAnalytics className='text-yellow-600 dark:text-yellow-300' />,

    ]
  },
]

const contactMe = {
  title: "Lets work together",
  text: "Let’s talk about the results I can get for your business. Free of jargon and without bullshit bingo.",
  image: meContact,
  alt: "my picture"
}

const About = () => {

  return (
    <>
      <header id="top" className='about-header max-h-screen min-h-screen w-full relative flex-centered flex-col'>
        <h1 className='massive-text absolute top-[10%] left-[10%] z-10 opacity-20 blur-sm'>About</h1>
        <h1 className='absolute z-0 lg:w-1/2 mx-6 leading-relaxed lg:leading-none blur-sm'>{header.title}</h1>
        <h1 className='absolute z-0 lg:w-1/2 mx-6 leading-relaxed lg:leading-none'>{header.title}</h1>
        <h1 className='title absolute z-20 lg:w-1/2 mx-6 leading-relaxed lg:leading-none'>{header.title}</h1>
        <div className="clipped-bg shape1 z-10" />
        <div className="clipped-bg shape2 z-10" />
        <div className="clipped-bg shape3 z-10" />
        <div className="lg:w-[350px] lg:h-[480px] mx-10 mt-[30rem] z-10 lg:absolute bottom-[3%] right-[25%]">
          <img className='object-cover lg:max-w-[450px] lg:h-[580px] rounded-xl drop-shadow-lg' src={header.image} alt={header.alt} />
        </div>
      </header>

      <section className="partners relative flex-centered flex-col w-full my-20">
        <h2>{learnTitle}</h2>
        <SideScroller images={learningPartners} speed={8000} />
      </section>

      <section className='about-intro flex-centered relative mb-40'>
        <div className="bg-container flex-centered w-screen">
          <div className="clipped-bg" />
          <div className="clipped-bg second" />
          <div className="clipped-bg third" />
          <div className="section-width-default grid grid-cols-1 lg:grid-cols-6 gap-4 z-10 py-10 lg:py-20">
            <div className="col-span-1 lg:col-span-2">
              <img className='object-cover w-[480px] h-[480px] drop-shadow-lg' src={aboutMe.image} alt={aboutMe.alt} />
            </div>
            <div className="col-span-1 lg:col-span-4 ml-10">
              <div className="flex justify-between">
                <h3 className='mb-6'>{aboutMe.title}</h3>
              </div>
              <p>{aboutMe.text_01}</p>
              <br />
              <p>{aboutMe.text_02}</p>
              <br />
              <p>{aboutMe.text_03}</p>
            </div>
          </div>
        </div>
      </section>

      <section className='skills-section section-width-default flex-centered relative mb-20'>
        <div className="flex-centered flex-col">
          <h1 className='mb-20'>{skillsSection.title}</h1>
          <div style={{perspective: '1000px'}} className="grid grid-rows-3 lg:grid-rows-1 lg:grid-cols-3 gap-16">
            {skillCards.map((item) => {
              return (
                <SkillCard
                  key={item.cardClass}
                  title={item.title}
                  text={item.text}
                  icon01={item.img01}
                  icon02={item.img02}
                  icon03={item.img03}
                  alt01={item.alt01}
                  alt02={item.alt02}
                  alt03={item.alt03}
                  cardClass={item.cardClass}
                  btnColor={item.btnColor}
                  tasks={item.tasks}
                  techs={item.techs}
                />
              )
            })}
          </div>
        </div>
      </section>

      <section className='work-together w-full flex-centered relative'>
        <div className="flex-centered section-width-default w-screen">
          <div className="clipped-bg" />
          <div className="section-width-default flex-centered z-10">
            <div className="h-full flex-centered flex-col-reverse lg:flex-row">
              <div className="flex flex-col justify-between lg:h-[350px] lg:w-[570px]">
                <h3 className=''>{contactMe.title}</h3>
                <p className='my-10 lg:my-0'>{contactMe.text}</p>
                <div className="mb-10">
                  <button className="btn primary green"><a href="/contact">Get in touch</a></button>
                </div>
              </div>
              <div className="w-[350px] h-[480px] my-10 lg:my-20">
                <img className='object-cover max-w-[350px] h-[480px] drop-shadow-lg' src={contactMe.image} alt={contactMe.alt} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About