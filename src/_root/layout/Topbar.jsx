import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


import { CgMenuBoxed } from "react-icons/cg";
import { pageLinks } from "../../constants";
import { BiDownArrow } from "react-icons/bi";
import {ThemeSwitch} from "./ThemeSwitch";

const Topbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggle = () => {
        setIsOpen(!isOpen);
    };

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

    const languageArrow = {
        transform: `rotateZ(${isOpen ? "180deg" : "0deg"})`,
    };

    const dropdown = {
        '@media (min-width: 1024px)': {
            opacity: isOpen ? "100" : "0",
            height: isOpen ? "120px" : "0px",
        },
    };

    return (
        <nav className={`navbar-container ${navbarClasses.join(" ")} absolute top-0 lg:mt-8 py-2 flex justify-center w-screen z-30`}>
            <div className="inner-container section-width-default flex justify-between items-center relative">
                <div className="">
                <img className='w-20 invert dark:invert-0' src="/src/assets/images/logo_white.png" alt="" />
                </div>
                <div className="menu-burger flex-centered">
                    <CgMenuBoxed className="lg:hidden text-5xl" />
                </div>
                <div className="hidden lg:flex z-50">
                    <ul className="navigation-items flex">
                        {pageLinks.map((item, i) => {
                            return (
                                <li key={i} className="font-extralight text-5xl tracking-wide px-4 dark:text-slate-100">
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