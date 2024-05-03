import { FaReact } from "react-icons/fa";
import { TbBrandThreejs } from "react-icons/tb";
import { SiNextdotjs, SiJavascript, SiAngular, SiDjango, SiJoomla, SiMongodb } from "react-icons/si";

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
      image: "/src/assets/images/home_me_01.png",
      alt: "Angry Fish",
      title: "Angry Fish",
      creator: "Paulo Reizinho",
      myContribution: "100%",
      text1:"",
      text2:"",
      techs: ["React.js", "TailwindCSS", "AppWrite", "TanStack"],
      link: "https://angry-fish.vercel.app/",
      github: "https://github.com/lordrichard6/angry_fish",
      type: 'personal',
      date: '2024/04',
      featured: true,
      cardId: "card22",
      tags: ['#react', '#tailwind', 'AppWrite'],
      hiddenTags: ['#all','#react', '#tailwind', "#javascript"],
      project_type:"Social Media App"
    }
]