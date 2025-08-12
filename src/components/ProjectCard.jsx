import { SiGithub } from "react-icons/si";
import PropTypes from 'prop-types';

const ProjectCard = ({ tags, title, imgSrc, imgAlt, text1, text2, variant, github, link, btn }) => {
    return (
        <article className={`project flex-centered w-screen min-h-[578px] ${variant}`}>
            <div className="section-width-default grid grid-cols-1 lg:grid-cols-6 gap-4">

                <div className="col-span-1 lg:col-span-2 lg:my-10 relative scale-[1.8] lg:scale-100 right-32 w-full h-[480px] lg:w-[480px] lg:hover:scale-[2] lg:hover:translate-x-40 transition ease-in-out duration-500 delay-150 cursor-zoom-in">
                    <img className='absolute object-contain rounded h-full w-[680px]' src={imgSrc} alt={imgAlt} />
                </div>

                <div className="col-span-1 lg:col-span-4 h-full flex flex-col justify-between lg:my-10">
                    <div className="flex justify-between flex-col-reverse lg:flex-row">
                        <h2 className='mb-8 lg:mb-0'>{title}</h2>
                        <div className="text-lg lg:text-xl flex">
                            {tags.map((tag) => <span className="mx-2" key={tag}>{tag}</span>)}
                        </div>
                    </div>
                    <p>{text1}</p>
                    <br />
                    <p>{text2}</p>
                    <div className="w-full flex justify-center lg:justify-end lg:items-end mt-6 mb-20">
                        <button className={`btn small mr-2 lg:ml-auto ${btn}`}><a href={link} target="_blank" rel="noopener noreferrer">Visit project</a></button>
                        {github && (
                            <button className={`btn small ${btn}`}><a href={github} target="_blank" rel="noopener noreferrer"><SiGithub /></a></button>)}
                    </div>
                </div>
            </div>
        </article>
    )
}

ProjectCard.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
    text1: PropTypes.string.isRequired,
    text2: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired,
    github: PropTypes.string,
    link: PropTypes.string.isRequired,
    btn: PropTypes.string.isRequired,
};

export default ProjectCard