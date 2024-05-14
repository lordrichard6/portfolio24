import portfolio22 from '../assets/images/projects/portfolio23.png'
import angryFish from '../assets/images/projects/angryfish.png'
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
    text1: "The last version of my portfolio website, built with a ton of creativity with a clean UI and fluid UX. The design was created with with Figma and the website implementation was done with NextJS.",
    text2: "",
    techs: ["React.js", "TailwindCSS"],
    link: "https://pauloreizinho.vercel.app/",
    github: "https://github.com/lordrichard6/portfolio21",
    type: 'personal',
    date: '2022/06',
    featured: false,
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
      text1: "The website has a clean and minimalist design, with a predominantly white background that helps to focus attention on the content. Vibrant, high-resolution images are used throughout the website, adding visual interest and enhancing the overall aesthetic appeal.",
      text2: "The minimalist design, clear navigation, and concise content make it easy for users to explore the website and learn about the projects featured. The website succeeds in delivering its message and engaging visitors, making it a successful example of a showcase website.",
      techs: ["React.js", "TailwindCSS"],
      link: "https://think-big.vercel.app/",
      github: "https://github.com/lordrichard6/think_big",
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
      text1: "A complex webapp rooted in Django and Angular, a Job platform for drivers of different categories, but with a more minimalist UI and entertaining UX.",
      text2: "The way it works is by bringing tinder to the job search and make it fun and easy to look for a new job or change the current one. I implemented most of the frontend and created some of the design. I work with a senior engineer and a design company to bring to life this project.",
      techs: ["Angular", "Django", "Docker"],
      link: "https://fahrerzentrale.ch/en/landing",
      github: "",
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
      text1: "By continuous tracking and electronic monitoring of the processes, this webapp shortens and optimises the connection between shipper, carrier and receiver to a minimum. With the developed technology, it automates and introduces old-fashioned and traditional transport processes into the age of digitization.",
      text2: "As this project was already done I just provided some frontend support and mobile tweaks.",
      techs: ["Angular", "Django", "Docker"],
      link: "https://pickwings.ch/de/",
      github: "",
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
      text1: "In this web development project, I collaborated with a moving company to optimize their Joomla website for improved online visibility and user experience.",
      text2: "Through targeted alterations and SEO enhancements, I ensured that their website attracts more potential customers and ranks higher in search engine results. Furthermore, I made small alterations to the Joomla website to enhance user experience and streamline navigation.",
      techs: ["Joomla"],
      link: "https://www.helpinghand.ch/",
      github: "",
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
    {
      image: fastRent,
      alt: "car rental website",
      title: "FastRent",
      creator: "Paulo Reizinho",
      myContribution: "Complete",
      text1: "A website for a car rental service using Next.js, a popular React framework for server-side rendering, and Tailwind CSS, a utility-first CSS framework. The website features a clean and modern design, optimized for fast loading times and a seamless user experience.",
      text2: "",
      techs: ["ReactJS","Redux","tailwindCSS", "styled-components", "typescript", "Jest"],
      link: "https://lordrichard-rentfast.netlify.app/",
      github: "https://github.com/lordrichard6/rent-fast",
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
      image: hulu,
      alt: "movie streaming platform hulu",
      title: "Hulu clone",
      creator: "Paulo Reizinho",
      myContribution: "Complete",
      text1: "In this exciting web development project, I created a streaming platform inspired by Hulu, powered by React and integrated with the MovieDB API. This platform offers a vast collection of movies and TV shows, providing users with a seamless and immersive streaming experience.",
      text2: "",
      techs: ["NextJS","TailwindCSS", "MovieDB APi"],
      link: "https://hulu-clone-rosy.vercel.app/",
      github: "https://github.com/lordrichard6/hulu_clone",
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
      text1: "Welcome to Monkey Market, the ultimate online destination for monkey enthusiasts looking to purchase adorable and exotic monkeys as pets. My first e-commerce project, built with a user-friendly interface and integrated with the PayPal API, offers a secure and convenient platform for buying monkeys from trusted sellers.",
      text2: "",
      techs: ["NextJS","Typescript", "SASS", "PAYPAL APi"],
      link: "https://monkeycircus-2z4e865i4.now.sh",
      github: "https://github.com/lordrichard6/monkeycircus",
      type: 'personal',
      date: '2020/03',
      featured: false,
      cardId: "card11",
      tags: ['#nextjs', '#typescript', '#e-commerce'],
      hiddenTags: ['#all','#nextjs', '#typescript', "#javascript"],
      project_type:"",
      class: "variant-01",
      btnColor: "pink"
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
      myContribution: "Small Front-end fixes and webmaster support",
      text1: "Limmatstadt AG is a regional business promotion organisation connecting the entire region along the Limmat regardless of political boundaries and structures. They network business, politics and society through commitment, services and communication platforms. They strengthen the image of the Limmatstadt in its entirety and diversity.",
      text2: "As this project was already developed I just added support as webmaster through the django cms and some front-end changes.",
      techs: ["Angular", "Django"],
      link: "https://www.limmatstadt.ch/",
      github: "",
      type: 'profissional',
      date: '2020/02',
      featured: false,
      cardId: "card12",
      tags: ['#angular', '#django'],
      hiddenTags: ['#all','#angular', '#django', "#javascript", "#python"],
      project_type:"",
      class: "variant-02",
      btnColor: "blue"
    },
    {
      image: protier,
      alt: "protier website",
      title: "Protier",
      creator: "Feinheit",
      myContribution: "Front-end implementation",
      text1: 'ProTier - Foundation for Animal Welfare and Ethics (formerly known as the "Swiss Society for Animal Welfare") has been campaigning for the fair and ethical treatment of animals with its own projects and campaigns for 75 years.',
      text2: "I implemented the design created by our team of designers, in CSS and HTML.",
      techs: ["Angular", "Django"],
      link: "https://www.protier.ch/",
      github: "",
      type: 'profissional',
      date: '2020/01',
      featured: false,
      cardId: "card13",
      tags: ['#angular', '#django'],
      hiddenTags: ['#all','#angular', '#django', "#javascript", "#python"],
      project_type:"",
      class: "variant-01",
      btnColor: "pink"
    },
    {
      image: bezahlbare,
      alt: "Bezahlbare Wohnungen project",
      title: "Bezahlbare Wohnungen",
      creator: "Feinheit",
      myContribution: "Front-end implementation",
      text1: 'On 9 February 2020, Switzerland voted on the "More affordable housing" initiative launched by the Swiss Tenants Association. The initiative was clearly accepted by all major cities, while five cantons (Geneva, Neuchâtel, Basel-Stadt, Jura, Geneva) and the whole of French-speaking Switzerland also voted in favour of accepting the initiative. Nevertheless, the proposal was rejected by 43 per cent of voters across Switzerland.',
      text2: "I provided frontend support.",
      techs: ["Angular", "Django"],
      link: "https://feinheit.ch/projekte/mehr-bezahlbare-wohnungen/",
      github: "",
      type: 'profissional',
      date: '2019/11',
      featured: false,
      cardId: "card14",
      tags: ['#angular', '#django'],
      hiddenTags: ['#all','#angular', '#django', "#javascript", "#python"],
      project_type:"",
      class: "variant-02",
      btnColor: "blue"
    },
    {
      image: feinheit,
      alt: "Feinheit website",
      title: "Feinheit",
      creator: "Feinheit",
      myContribution: "Front-end small changes",
      text1: "A reliable partner at the interface of communication and digitalisation since 2006. Feinheit supports their clients with communications consulting, campaigning, online marketing, multimedia design, websites and IT infrastructure.",
      text2: "My contribution was small styling tweaks in a couple of pages.",
      techs: ["Angular", "Django"],
      link: "https://feinheit.ch/",
      github: "COMING SOON!",
      type: 'profissional',
      date: '2019/10',
      featured: false,
      cardId: "card15",
      tags: ['#angular', '#django'],
      hiddenTags: ['#all','#angular', '#django', "#javascript", "#python"],
      project_type:"",
      class: "variant-01",
      btnColor: "pink"
    },
    {
      image: fcz,
      alt: "fcz website",
      title: "FCZ Website",
      creator: "Feinheit",
      myContribution: "Front-end small changes",
      text1: "The official website of the Zurich Football Club, as part of my first assignment as an frontend developer in Feinheit, was to modify the navigation bar of the FCZ website, using HTML, CSS and Javascript.",
      text2: "",
      techs: ["Angular", "Django"],
      link: "https://www.fcz.ch/",
      github: "",
      type: 'profissional',
      date: '2019/08',
      featured: false,
      cardId: "card16",
      tags: ['#angular', '#django'],
      hiddenTags: ['#all','#angular', '#django', "#javascript", "#python"],
      project_type:"",
      class: "variant-02",
      btnColor: "blue"
    },
  ];
  