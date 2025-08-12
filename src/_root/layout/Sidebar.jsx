import { useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { pageLinks } from "../../constants";

const Sidebar = ({ isOpen, toggle }) => {
    const location = useLocation();

    return (
        <nav onClick={toggle} className={`sidebar ${isOpen ? "right-[-65%] sm:right-[-80%]" : "right-[-100%]"} fixed top-0 right-0 w-full h-auto rounded-bl-xl flex flex-col z-30`}>
            <div className="lg:flex z-50 mt-[76px]">
                <ul className="navigation-items flex flex-col mb-10">
                    {pageLinks.map((item, i) => {
                        return (
                            <li key={i} className="font-extralight text-2xl lg:text-3xl tracking-wide px-4 dark:text-slate-100 my-2">
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
        </nav>
    )
}

Sidebar.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
};

export default Sidebar