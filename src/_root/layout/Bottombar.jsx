import { useLocation } from "react-router-dom";

import signature from '/src/assets/images/signature.svg'
import signatureDark from '/src/assets/images/signature-dark.svg'

const general = [
    {
        name: "Home",
        link: "/"
    },
    {
        name: "Projects",
        link: "/projects"
    },
    {
        name: "About",
        link: "/about"
    },
    {
        name: "Contact",
        link: "/contact"
    },
]

const resources = [
    {
        name: "Coursera",
        link: "https://www.coursera.org/"
    },
    {
        name: "Udemy",
        link: "https://www.udemy.com/"
    },
    {
        name: "youtube",
        link: "https://www.youtube.com/"
    },
]

const Bottombar = () => {
    const location = useLocation();


    return (
        <footer className='w-full bg-[#FEF3DF] dark:bg-[#451d76] relative flex-centered pt-10 lg:pt-20'>
            <div className="section-width-default">
                <div className="flex flex-col-reverse lg:grid lg:grid-cols-6 gap-6 lg:justify-items-center mb-4 lg:mb-10">
                    <div className="col-span-2">
                        <img className='signature dark:hidden object-cover w-[300px] h-auto' src={signatureDark} alt="paulo reizinho signature dark" />
                        <img className='signature hidden dark:block object-cover w-[100px] lg:w-[300px] h-auto' src={signature} alt="paulo reizinho signature" />
                        <p>Zurich</p>
                        <p>Switzerland</p>
                    </div>
                    <div className="col-span-2">
                        <h3>Resources</h3>
                        <ul>
                            {resources.map((item) => {
                                return (
                                    <li key={item.name}><a className="text-lg dark:text-slate-50 hover:font-extrabold" target="_blank" href={item.link}>{item.name}</a></li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="col-span-2">
                        <h3>General</h3>
                        <ul>
                            {general.map((item) => {
                                return (
                                    <li key={item.name}><a className={`text-lg dark:text-slate-50 hover:font-extrabold ${location.pathname === item.to ? "extrabold" : ""}`} href={item.link}>{item.name}</a></li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <hr className='w-full h-2 text-dark-1' />
                <div className="flex justify-between text-sm">
                    <span>Copyright &copy; {new Date().getFullYear()} Paulo Lopes Reizinho.</span>
                    <span>All rights reserved</span>
                </div>
            </div>
        </footer>
    )
}

export default Bottombar