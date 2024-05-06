import { FaReact } from "react-icons/fa";
import { TbBrandThreejs } from "react-icons/tb";
import { SiNextdotjs, SiJavascript, SiAngular, SiDjango, SiJoomla, SiMongodb } from "react-icons/si";

import portfolio22 from '../assets/images/projects/portfolio23.png'
import angryFish from '../assets/images/projects/angryfish.jpg'
import thinkBig from '../assets/images/projects/thinkbig.png'
import fastRent from '../assets/images/projects/fastrent.png'
import fahrerzentrale from '../assets/images/projects/fahrezentrale.png'
import pickwings from '../assets/images/projects/pickwings.png'
import helpinghand from '../assets/images/projects/helping.png'
import hulu from '../assets/images/projects/hulu.png'
import skytours from '../assets/images/projects/skytours.png'
import monkey from '../assets/images/projects/monkey.png'
import limmastadt from '../assets/images/projects/limmatstadt.png'
import protier from '../assets/images/projects/protier.png'
import bezahlbare from '../assets/images/projects/bezahlbare-Wohnungen.png'
import feinheit from '../assets/images/projects/feinheit.png'
import fcz from '../assets/images/projects/fcz.png'


export const pageLinks = [
    {
        to: "/",
        // tabName: "common:home",
        name: "home"
    },
    {
        to: "/projects",
        // tabName: "common:projects",
        name: "projects"
    },
    {
        to: "/about",
        // tabName: "common:about",
        name: "about"
    },
    {
        to: "/contact",
        // tabName: "common:contact",
        name: "contact"
    },
    // {
    //   to: "/cv_4186",
    //   tabName: "My CV",
    // },
];


export const projects = [
  {
    image: portfolio22,
    alt: "Portfolio 2022",
    title: "Portfolio 2022",
    creator: "Paulo Reizinho",
    myContribution: "100%",
    text1: "",
    text2: "",
    techs: ["React.js", "TailwindCSS"],
    link: "https://pauloreizinho.vercel.app/",
    github: "https://github.com/lordrichard6/portfolio21",
    // icon: [<FaReact key={1} />],
    type: 'personal',
    date: '2022/06',
    featured: true,
    cardId: "card22",
    tags: ['#react', '#tailwind'],
    hiddenTags: ['#all','#react', '#tailwind', "#javascript"],
    project_type:"Portfolio",
    class: "variant-02",
    btnColor: "blue"
  },
    {
      image: angryFish,
      alt: "Angry Fish",
      title: "Angry Fish",
      creator: "Paulo Reizinho",
      myContribution: "100%",
      text1: "Explore social media with this user-friendly platform that has a nice look and lots of features. Easily create and explore posts, a strong authentication system and quick data fetching using React Query for a smooth user experience.",
      text2: "Implemented key functionalities such as exploring posts, liking and saving content, creating and editing posts, and browsing other users. Utilized a responsive UI with a bottom bar for seamless navigation and integrated React Query for optimized data fetching. Leveraged Appwrite as a Backend as a Service solution for streamlined backend development, offering authentication, database, file storage, and more.",
      shortText: "projects:project_featured_angryFish",
      techs: ["React.js", "TailwindCSS", "#AppWrite", "TanStack"],
      link: "https://angry-fish.vercel.app/",
      github: "https://github.com/lordrichard6/angry_fish",
      // icon: [<FaReact key={1} />],
      type: 'personal',
      date: '2024/04',
      featured: true,
      cardId: "card22",
      tags: ['#react', '#tailwind', '#AppWrite'],
      hiddenTags: ['#all','#react', '#tailwind', "#javascript"],
      project_type:"Social Media App",
      class: "variant-01",
      btnColor: "pink"
    },
    {
      image: thinkBig,
      alt: "think big homepage",
      title: "ThinkBig",
      creator: "Paulo Reizinho",
      myContribution: "100%",
      text: ["Design made with figma;","Elegant and modern UI/UX;","Developed with ReactJS;","TailwindCSS to make life easier and everything more readable;"],
      // text: [
      //   "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Sit nulla est ex deserunt exercitation anim occaecat.", 
      //   "Sit nulla est ex deserunt exercitation anim occaecat.",
      //   "Lorem ipsum dolor sit amet consectetur adip, Lorem ipsum dolor sit amet consectetur adip"
      // ],
      shortText: "projects:project_featured_thinkBig",
      techs: ["React.js", "TailwindCSS"],
      link: "https://think-big.vercel.app/",
      github: "https://github.com/lordrichard6/think_big",
    //   icon: [<FaReact key={0}/>],
      type: 'personal',
      date: '2023/04',
      featured: false,
      cardId: "card2",
      tags: ['#react', '#tailwind'],
      hiddenTags: ['#all','#react', '#tailwind', "#javascript"],
      project_type:"",
      class: "variant-02",
      btnColor: "blue"
    },
    {
      image: fahrerzentrale,
      alt: "fahrezentrale homepage",
      title: "FahrerZentrale",
      creator: "Pickwings",
      myContribution: "Front-end, Design and Back-end",
      text: ["COMING SOON!"],
      // text: [
      //   "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Sit nulla est ex deserunt exercitation anim occaecat.", 
      //   "Sit nulla est ex deserunt exercitation anim occaecat.",
      //   "Lorem ipsum dolor sit amet consectetur adip, Lorem ipsum dolor sit amet consectetur adip"
      // ],
      shortText: "projects:project_featured_fahrezentrale",
      techs: ["Angular", "Django", "Docker"],
      link: "https://fahrerzentrale.ch/en/landing",
      github: "",
    //   icon: [<SiAngular key={0} />,<SiDjango key={1} />],
      type: 'profissional',
      date: '2022/06',
      featured: true,
      cardId: "card1",
      tags: ['#angular', '#django', '#docker'],
      hiddenTags: ['#all','#angular', '#django', '#docker', "#javascript", "#python"],
      project_type:"",
      class: "variant-01",
      btnColor: "pink"
    },
    {
      image: pickwings,
      alt: "pickwings homepage",
      title: "Pickwings",
      creator: "Pickwings",
      myContribution: "Small Front-end tweaks",
      text: ["COMING SOON!"],
      // text: [
      //   "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Sit nulla est ex deserunt exercitation anim occaecat.", 
      //   "Sit nulla est ex deserunt exercitation anim occaecat.",
      //   "Lorem ipsum dolor sit amet consectetur adip, Lorem ipsum dolor sit amet consectetur adip"
      // ],
      shortText: "",
      techs: ["Angular", "Django", "Docker"],
      link: "https://pickwings.ch/de/",
      github: "",
    //   icon: [<SiAngular key={0}/>,<SiDjango key={1}/>],
      type: 'profissional',
      date: '2022/05',
      featured: false,
      cardId: "card4",
      tags: ['#angular', '#django', '#docker'],
      hiddenTags: ['#all','#angular', '#django', '#docker', "#javascript", "#python"],
      project_type:"",
      class: "variant-01",
      btnColor: "pink"
    },
    {
      image: helpinghand,
      alt: "helping hand homepage",
      title: "Helping Hand",
      creator: "WebDvision",
      myContribution: "Small Front-end tweaks",
      text: ["COMING SOON!"],
      // text: [
      //   "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Sit nulla est ex deserunt exercitation anim occaecat.", 
      //   "Sit nulla est ex deserunt exercitation anim occaecat.",
      //   "Lorem ipsum dolor sit amet consectetur adip, Lorem ipsum dolor sit amet consectetur adip"
      // ],
      shortText: "In this web development project, I collaborated with a moving company to optimize their Joomla website for improved online visibility and user experience. Through targeted alterations and SEO enhancements, I ensured that their website attracts more potential customers and ranks higher in search engine results. Furthermore, I made small alterations to the Joomla website to enhance user experience and streamline navigation.",
      techs: ["Joomla"],
      link: "https://www.helpinghand.ch/",
      github: "",
    //   icon: [<SiJoomla key={0}/>],
      backgroundColor: "",
      show: 0.1,
      type: 'profissional',
      date: '2021/06',
      featured: false,
      cardId: "card5",
      tags: ['#joomla'],
      hiddenTags: ['#joomla'],
      project_type:"",
      class: "variant-01",
      btnColor: "pink"
    },
    // {
    //   image: "/projects/altynai.png",
    //   alt: "online clothing shop",
    //   title: "Altynay Fashion",
    //   creator: "Paulo Reizinho",
    //   myContribution: "Complete",
    //   text: ["COMING SOON!"],
    //   // text: [
    //   //   "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Sit nulla est ex deserunt exercitation anim occaecat.", 
    //   //   "Sit nulla est ex deserunt exercitation anim occaecat.",
    //   //   "Lorem ipsum dolor sit amet consectetur adip, Lorem ipsum dolor sit amet consectetur adip"
    //   // ],
    //   shortText: "In this web development project, I created a modern and user-friendly e-commerce website for your business. The website features a seamless shopping experience, intuitive navigation, and a secure payment gateway. With a responsive design, it ensures a seamless browsing experience across devices. The site also includes inventory management, order tracking, and customer account functionality. By leveraging the latest web technologies, I've provided a solid foundation for your online business to thrive.",
    //   techs: ["NextJS","MongoDB", "TailwindCSS", "styled-components", "BCrypt", "Axios", "React Paypal"],
    //   link: "https://altynai-fashion.vercel.app/",
    //   github: "https://github.com/lordrichard6/altynai-ecommerce-shop",
    // //   icon: [<SiNextdotjs key={0}/>, <SiMongodb key={1}/>],
    //   type: 'personal',
    //   date: '2022/09',
    //   featured: false,
    //   cardId: "card6",
    //   tags: ['#nextjs', '#tailwind', '#mongodb'],
    //   hiddenTags: ['#all','#nextjs', '#tailwind', '#mongodb', "#javascript"],
    //   project_type:"",
    //   class: "",
    // btnColor: ""
    // },
    // {
    //   image: "/projects/bastards.png",
    //   alt: "left bastards website",
    //   title: "Left Bastards",
    //   creator: "Paulo Reizinho",
    //   myContribution: "Complete",
    //   text: ["COMING SOON!"],
    //   // text: [
    //   //   "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Sit nulla est ex deserunt exercitation anim occaecat.", 
    //   //   "Sit nulla est ex deserunt exercitation anim occaecat.",
    //   //   "Lorem ipsum dolor sit amet consectetur adip, Lorem ipsum dolor sit amet consectetur adip"
    //   // ],
    //   shortText: "In this exciting web development project, I built a dynamic and immersive website using Next.js for a passionate car group of fans. The website serves as a hub for car enthusiasts to connect, share their experiences, and stay up-to-date with the latest automotive news and events.",
    //   techs: ["NextJS","styled-components", "React Icons", "Typescript"],
    //   link: "https://left-bastards.vercel.app/",
    //   github: "https://github.com/lordrichard6/left_bastards",
    // //   icon: [<SiNextdotjs key={0}/>],
    //   type: 'personal',
    //   date: '2021/12',
    //   featured: false,
    //   cardId: "card7",
    //   tags: ['#nextjs', '#typescript'],
    //   hiddenTags: ['#all','#nextjs', '#typescript', "#javascript", "#styled-components"],
    //   project_type:"",
    //   class: "",
    // btnColor: ""
    // },
    // {
    //   image: "/projects/sardinha.png",
    //   alt: "sardinha drive",
    //   title: "Sardinha Drive",
    //   creator: "Paulo Reizinho",
    //   myContribution: "Complete",
    //   text: ["COMING SOON!"],
    //   // text: [
    //   //   "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Sit nulla est ex deserunt exercitation anim occaecat.", 
    //   //   "Sit nulla est ex deserunt exercitation anim occaecat.",
    //   //   "Lorem ipsum dolor sit amet consectetur adip, Lorem ipsum dolor sit amet consectetur adip"
    //   // ],
    //   shortText: "In this remarkable web development project, I built a professional and elegant website using Next.js for a chauffeur company. The website serves as a powerful online platform that showcases the company's premium chauffeur services, creating a seamless experience for potential clients.",
    //   techs: ["NextJS","styled-components", "typescript", "Framer-motion", "Material-ui"],
    //   link: "https://patricia-vila-nova.vercel.app/",
    //   github: "https://github.com/lordrichard6/patricia_project",
    // //   icon: [<SiNextdotjs key={0}/>],
    //   type: 'profissional',
    //   date: '2021/11',
    //   featured: false,
    //   cardId: "card8",
    //   tags: ['#nextjs', '#typescript', '#framer-motion'],
    //   hiddenTags: ['#all','#nextjs', '#typescript', '#framer-motion', "#javascript"],
    //   project_type:"",
    //   class: "",
    //   btnColor: ""
    // },
    {
      image: fastRent,
      alt: "car rental website",
      title: "FastRent",
      creator: "Paulo Reizinho",
      myContribution: "Complete",
      text: ["COMING SOON!"],
      // text: [
      //   "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Sit nulla est ex deserunt exercitation anim occaecat.", 
      //   "Sit nulla est ex deserunt exercitation anim occaecat.",
      //   "Lorem ipsum dolor sit amet consectetur adip, Lorem ipsum dolor sit amet consectetur adip"
      // ],
      shortText: "projects:project_featured_fastrent",
      techs: ["ReactJS","Redux","tailwindCSS", "styled-components", "typescript", "Jest"],
      link: "https://lordrichard-rentfast.netlify.app/",
      github: "https://github.com/lordrichard6/rent-fast",
    //   icon: [<FaReact key={0}/>],
      type: 'personal',
      date: '2021/06',
      featured: true,
      cardId: "card3",
      tags: ['#reactjs', '#typescript', '#tailwind'],
      hiddenTags: ['#all','#nextjs', '#typescript', '#tailwind', "#javascript"],
      project_type:"",
      class: "variant-02",
      btnColor: "blue"
    },
    {
      image: skytours,
      alt: "world tours website",
      title: "Skytours",
      creator: "Paulo Reizinho",
      myContribution: "Complete",
      text: ["COMING SOON!"],
      // text: [
      //   "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Sit nulla est ex deserunt exercitation anim occaecat.", 
      //   "Sit nulla est ex deserunt exercitation anim occaecat.",
      //   "Lorem ipsum dolor sit amet consectetur adip, Lorem ipsum dolor sit amet consectetur adip"
      // ],
      shortText: "In this captivating web development project, I created an immersive and visually stunning website for a tour company using React. The website serves as a captivating platform that showcases the company's extraordinary travel experiences, enticing users to embark on unforgettable journeys.",
      techs: ["ReactJS","SASS", "HTML"],
      link: "https://reizinho-skytours.netlify.com/",
      github: "https://github.com/lordrichard6/skytours",
    //   icon: [<FaReact key={0}/>],
      type: 'personal',
      date: '2021/04',
      featured: false,
      cardId: "card9",
      tags: ['#reactjs'],
      hiddenTags: ['#all','#react', "#javascript"],
      project_type:"",
      class: "variant-01",
      btnColor: "pink"
    },
    {
      image: hulu,
      alt: "movie streaming platform hulu",
      title: "Hulu clone",
      creator: "Paulo Reizinho",
      myContribution: "Complete",
      text: ["COMING SOON!"],
      // text: [
      //   "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Sit nulla est ex deserunt exercitation anim occaecat.", 
      //   "Sit nulla est ex deserunt exercitation anim occaecat.",
      //   "Lorem ipsum dolor sit amet consectetur adip, Lorem ipsum dolor sit amet consectetur adip"
      // ],
      shortText: "In this exciting web development project, I created a streaming platform inspired by Hulu, powered by React and integrated with the MovieDB API. This platform offers a vast collection of movies and TV shows, providing users with a seamless and immersive streaming experience.",
      techs: ["NextJS","TailwindCSS", "MovieDB APi"],
      link: "https://hulu-clone-rosy.vercel.app/",
      github: "https://github.com/lordrichard6/hulu_clone",
    //   icon: [<SiNextdotjs key={0}/>],
      type: 'personal',
      date: '2021/04',
      featured: false,
      cardId: "card10",
      tags: ['#nextjs', '#tailwind'],
      hiddenTags: ['#all','#nextjs', '#tailwind', "#javascript"],
      project_type:"",
      class: "variant-02",
      btnColor: "blue"
    },
    {
      image: monkey,
      alt: "eshop for trained monkeys",
      title: "Monkey Circus",
      creator: "Paulo Reizinho",
      myContribution: "Complete",
      text: ["COMING SOON!"],
      // text: [
      //   "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Sit nulla est ex deserunt exercitation anim occaecat.", 
      //   "Sit nulla est ex deserunt exercitation anim occaecat.",
      //   "Lorem ipsum dolor sit amet consectetur adip, Lorem ipsum dolor sit amet consectetur adip"
      // ],
      shortText: "Welcome to Monkey Market, the ultimate online destination for monkey enthusiasts looking to purchase adorable and exotic monkeys as pets. Our website, built with a user-friendly interface and integrated with the PayPal API, offers a secure and convenient platform for buying monkeys from trusted sellers.",
      techs: ["NextJS","Typescript", "SASS", "PAYPAL APi"],
      link: "https://monkeycircus-2z4e865i4.now.sh",
      github: "https://github.com/lordrichard6/monkeycircus",
    //   icon: [<SiNextdotjs key={0}/>],
      type: 'personal',
      date: '2020/03',
      featured: false,
      cardId: "card11",
      tags: ['#nextjs', '#typescript'],
      hiddenTags: ['#all','#nextjs', '#typescript', "#javascript"],
      project_type:"",
      class: "variant-02",
      btnColor: "blue"
    },
    // {
    //   image: "/projects/sphere.png",
    //   alt: "three.js project",
    //   title: "The Sphere",
    //   creator: "Paulo Reizinho",
    //   myContribution: "Complete",
    //   text: ["COMING SOON!"],
    //   // text: [
    //   //   "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Sit nulla est ex deserunt exercitation anim occaecat.", 
    //   //   "Sit nulla est ex deserunt exercitation anim occaecat.",
    //   //   "Lorem ipsum dolor sit amet consectetur adip, Lorem ipsum dolor sit amet consectetur adip"
    //   // ],
    //   techs: ["JavaScript","ThreeJS"],
    //   link: "https://lordrichard-threejs-sphere.netlify.app/",
    //   github: "https://github.com/lordrichard6/threejs_sphere",
    //   icon: [<SiJavascript key={0}/>, <TbBrandThreejs key={1}/>],
    //   type: 'personal',
    //   date: '2021/06',
    //   featured: false,
    // },
    // {
    //   image: "/projects/paul-engine.png",
    //   alt: "google api used",
    //   title: "Paul's Engine",
    //   creator: "Paulo Reizinho",
    //   myContribution: "Complete",
    //   text: ["COMING SOON!"],
    //   // text: [
    //   //   "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Sit nulla est ex deserunt exercitation anim occaecat.", 
    //   //   "Sit nulla est ex deserunt exercitation anim occaecat.",
    //   //   "Lorem ipsum dolor sit amet consectetur adip, Lorem ipsum dolor sit amet consectetur adip"
    //   // ],
    //   techs: ["NextJS","TailwindCSS", "Google APi"],
    //   link: "https://paul-search.vercel.app/",
    //   github: "https://github.com/lordrichard6/paul-search",
    //   icon: [<SiNextdotjs key={0}/>],
    //   type: 'personal',
    //   date: '2021/04',
    //   featured: false,
    // },
    // {
    //   image: "/projects/portfolio4.png",
    //   alt: "paulo reizinho forth portfolio first version",
    //   title: "Actual Portfolio v0.5",
    //   creator: "Paulo Reizinho",
    //   myContribution: "Complete",
    //   text: ["COMING SOON!"],
    //   // text: [
    //   //   "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Sit nulla est ex deserunt exercitation anim occaecat.", 
    //   //   "Sit nulla est ex deserunt exercitation anim occaecat.",
    //   //   "Lorem ipsum dolor sit amet consectetur adip, Lorem ipsum dolor sit amet consectetur adip"
    //   // ],
    //   techs: ["NextJS","Styled-components","TailwindCSS","Framer-motion",""],
    //   link: "https://pauloreizinho21.netlify.app/",
    //   github: "",
    //   icon: [<SiNextdotjs key={0}/>],
    //   type: 'personal',
    //   date: '2022/02',
    //   featured: false,
    // },
    // {
    //   image: "/projects/portfolio03.png",
    //   alt: "paulo reizinho third portfolio",
    //   title: "3rd Portfolio",
    //   creator: "Paulo Reizinho",
    //   myContribution: "Complete",
    //   text: ["COMING SOON!"],
    //   // text: [
    //   //   "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Sit nulla est ex deserunt exercitation anim occaecat.", 
    //   //   "Sit nulla est ex deserunt exercitation anim occaecat.",
    //   //   "Lorem ipsum dolor sit amet consectetur adip, Lorem ipsum dolor sit amet consectetur adip"
    //   // ],
    //   techs: ["ReactJS","Typescript","Styled-components"],
    //   link: "https://lordrichard-cv-blue.netlify.app/",
    //   github: "https://github.com/lordrichard6/react_cv_blue",
    //   icon: [<SiNextdotjs key={0}/>],
    //   type: 'personal',
    //   date: '2021/09',
    //   featured: false,
    // },
    // {
    //   image: "/projects/portfolio02.png",
    //   alt: "paulo reizinho portfolio design based on comics",
    //   title: "2nd Portfolio",
    //   creator: "Paulo Reizinho",
    //   myContribution: "Complete",
    //   text: ["COMING SOON!"],
    //   // text: [
    //   //   "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Sit nulla est ex deserunt exercitation anim occaecat.", 
    //   //   "Sit nulla est ex deserunt exercitation anim occaecat.",
    //   //   "Lorem ipsum dolor sit amet consectetur adip, Lorem ipsum dolor sit amet consectetur adip"
    //   // ],
    //   techs: ["ReactJS","TailwindCSS","styled-components","emailJS"],
    //   link: "https://new-cv-parallax.netlify.app/",
    //   github: "https://github.com/lordrichard6/react_cv_parallax",
    //   icon: [<FaReact key={0}/>],
    //   type: 'personal',
    //   date: '2021/07',
    //   featured: false,
    // },
    // {
    //   image: "/projects/portfolio01.png",
    //   alt: "paulo reizinho first portfolio",
    //   title: "1st Portfolio",
    //   creator: "Paulo Reizinho",
    //   myContribution: "Complete",
    //   text: ["COMING SOON!"],
    //   // text: [
    //   //   "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Sit nulla est ex deserunt exercitation anim occaecat.", 
    //   //   "Sit nulla est ex deserunt exercitation anim occaecat.",
    //   //   "Lorem ipsum dolor sit amet consectetur adip, Lorem ipsum dolor sit amet consectetur adip"
    //   // ],
    //   techs: ["ReactJS","SASS"],
    //   link: "https://reizinhocv.netlify.app/",
    //   github: "https://github.com/lordrichard6/reactCV",
    //   icon: [<FaReact key={0}/>],
    //   type: 'personal',
    //   date: '2020/04',
    //   featured: false,
    // },
    {
      image: limmastadt,
      alt: "limmastadt website",
      title: "Limmatstadt",
      creator: "Feinheit",
      myContribution: "Small Front-end and back-end changes",
      text: ["COMING SOON!"],
      // text: [
      //   "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Sit nulla est ex deserunt exercitation anim occaecat.", 
      //   "Sit nulla est ex deserunt exercitation anim occaecat.",
      //   "Lorem ipsum dolor sit amet consectetur adip, Lorem ipsum dolor sit amet consectetur adip"
      // ],
      shortText: "COMING SOON!",
      techs: ["Angular", "Django"],
      link: "https://www.limmatstadt.ch/",
      github: "",
    //   icon: [<SiAngular key={0} />,<SiDjango key={1} />],
      type: 'profissional',
      date: '2020/02',
      featured: false,
      cardId: "card12",
      tags: ['#angular', '#django'],
      hiddenTags: ['#all','#angular', '#django', "#javascript", "#python"],
      project_type:"",
      class: "variant-01",
      btnColor: "pink"
    },
    {
      image: protier,
      alt: "protier website",
      title: "Protier",
      creator: "Feinheit",
      myContribution: "Front-end implementation",
      text: ["COMING SOON!"],
      // text: [
      //   "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Sit nulla est ex deserunt exercitation anim occaecat.", 
      //   "Sit nulla est ex deserunt exercitation anim occaecat.",
      //   "Lorem ipsum dolor sit amet consectetur adip, Lorem ipsum dolor sit amet consectetur adip"
      // ],
      shortText: "COMING SOON!",
      techs: ["Angular", "Django"],
      link: "https://www.protier.ch/",
      github: "",
    //   icon: [<SiAngular key={0} />,<SiDjango key={1} />],
      type: 'profissional',
      date: '2020/01',
      featured: false,
      cardId: "card13",
      tags: ['#angular', '#django'],
      hiddenTags: ['#all','#angular', '#django', "#javascript", "#python"],
      project_type:"",
      class: "variant-02",
      btnColor: "blue"
    },
    {
      image: bezahlbare,
      alt: "Bezahlbare Wohnungen project",
      title: "Bezahlbare Wohnungen",
      creator: "Feinheit",
      myContribution: "Front-end implementation",
      text: ["COMING SOON!"],
      // text: [
      //   "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Sit nulla est ex deserunt exercitation anim occaecat.", 
      //   "Sit nulla est ex deserunt exercitation anim occaecat.",
      //   "Lorem ipsum dolor sit amet consectetur adip, Lorem ipsum dolor sit amet consectetur adip"
      // ],
      shortText: "",
      techs: ["Angular", "Django"],
      link: "https://feinheit.ch/projekte/mehr-bezahlbare-wohnungen/",
      github: "",
    //   icon: [<SiAngular key={0} />,<SiDjango key={1} />],
      type: 'profissional',
      date: '2019/11',
      featured: false,
      cardId: "card14",
      tags: ['#angular', '#django'],
      hiddenTags: ['#all','#angular', '#django', "#javascript", "#python"],
      project_type:"",
      class: "variant-01",
      btnColor: "pink"
    },
    {
      image: feinheit,
      alt: "Feinheit website",
      title: "Feinheit",
      creator: "Feinheit",
      myContribution: "Front-end small changes",
      text: ["COMING SOON!"],
      // text: [
      //   "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Sit nulla est ex deserunt exercitation anim occaecat.", 
      //   "Sit nulla est ex deserunt exercitation anim occaecat.",
      //   "Lorem ipsum dolor sit amet consectetur adip, Lorem ipsum dolor sit amet consectetur adip"
      // ],
      shortText: "",
      techs: ["Angular", "Django"],
      link: "https://feinheit.ch/",
      github: "COMING SOON!",
    //   icon: [<SiAngular key={0} />,<SiDjango key={1} />],
      type: 'profissional',
      date: '2019/10',
      featured: false,
      cardId: "card15",
      tags: ['#angular', '#django'],
      hiddenTags: ['#all','#angular', '#django', "#javascript", "#python"],
      project_type:"",
      class: "variant-02",
      btnColor: "blue"
    },
    {
      image: fcz,
      alt: "fcz website",
      title: "FCZ Website",
      creator: "Feinheit",
      myContribution: "Front-end small changes",
      text: ["COMING SOON!"],
      // text: [
      //   "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Sit nulla est ex deserunt exercitation anim occaecat.", 
      //   "Sit nulla est ex deserunt exercitation anim occaecat.",
      //   "Lorem ipsum dolor sit amet consectetur adip, Lorem ipsum dolor sit amet consectetur adip"
      // ],
      shortText: "COMING SOON!",
      techs: ["Angular", "Django"],
      link: "https://www.fcz.ch/",
      github: "",
    //   icon: [<SiAngular key={0} />,<SiDjango key={1} />],
      type: 'profissional',
      date: '2019/08',
      featured: false,
      cardId: "card16",
      tags: ['#angular', '#django'],
      hiddenTags: ['#all','#angular', '#django', "#javascript", "#python"],
      project_type:"",
      class: "variant-01",
      btnColor: "pink"
    },
  ];
  