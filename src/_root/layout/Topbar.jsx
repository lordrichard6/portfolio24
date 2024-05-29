/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import logo from '../../assets/images/logo_white.png'
import logoBlack from '../../assets/images/logo_black.png'

import { pageLinks } from "../../constants";
import { ThemeSwitch } from "./ThemeSwitch";

const Topbar = ({ toggle }) => {
    const [scrolled, setScrolled] = useState(false);
    // const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 400) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    });

    let navbarClasses = ["navbar"];
    if (scrolled) {
        navbarClasses.push("scrolled");
    }

    // const languageArrow = {
    //     transform: `rotateZ(${isOpen ? "180deg" : "0deg"})`,
    // };

    // const dropdown = {
    //     '@media (min-width: 1024px)': {
    //         opacity: isOpen ? "100" : "0",
    //         height: isOpen ? "120px" : "0px",
    //     },
    // };

    return (
        <nav className={`navbar-container ${navbarClasses.join(" ")} absolute top-0 lg:mt-8 py-2 flex justify-center w-screen z-30 transition duration-300 ease-in-out`}>
            <div className="inner-container section-width-default flex justify-between items-center relative">
                <div className="">
                    <a href="/"><img className='w-10 hidden dark:block' src={logo} alt="logo paulo reizinho" /><img className='w-10 block dark:hidden' src={logoBlack} alt="logo paulo reizinho" /></a>
                </div>
                <div className="lg:flex z-40 hidden ">
                    <ul className="navigation-items flex">
                        {pageLinks.map((item, i) => {
                            return (
                                <li key={i} className="font-extralight text-2xl lg:text-3xl tracking-wide px-4 dark:text-slate-100">
                                    <a
                                        href={item.to}
                                        className={`relative ${location.pathname === item.to ? "font-black" : ""}`}
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <ThemeSwitch />
                <div className="menu-burger relative lg:hidden" onClick={toggle}>
                    <input className="checkbox" type="checkbox" name="" id="" />
                    <div className="hamburger-lines">
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"></span>
                    </div>
                </div>
                {/* <div className="language-container hidden lg:flex">
                    <div onClick={toggle} className="flex relative">
                        <BiDownArrow style={languageArrow} className="arrow cursor-pointer" />
                    </div>
                    <ul className="lg:bg-slate-900 flex flex-col justify-center items-center list-none lg:absolute mx-auto top-10 right-0 w-[80px] overflow-hidden rounded-md">
                        <li className="text-2xl lg:text-2xl text-slate-100 font-normal uppercase m-0 hover:font-black">
                            <a href="">EN</a>
                        </li>
                        <li className="text-2xl lg:text-2xl text-slate-100 font-normal uppercase m-0 hover:font-black">
                            <a href="">DE</a>
                        </li>
                        <li className="text-2xl lg:text-2xl text-slate-100 font-normal uppercase m-0 hover:font-black">
                            <a href="">PT</a>
                        </li>
                    </ul>
                </div> */}
            </div>
        </nav>
    )
}

export default Topbar