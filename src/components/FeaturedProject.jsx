import { SiGithub } from "react-icons/si";

const FeaturedProject = ({ imgSrc, imgAlt, title, description1, description2, variant, link, github }) => {
    return (
        <article className={`project-container ${variant} grid grid-rows-6 lg:grid-cols-6 gap-6 mb-20 p-4 lg:min-h-[420px] lg:max-h-[420px] backdrop-blur-sm`}>
            <figure className="row-span-6 lg:col-span-2 m-[-16px]">
                <img className='object-cover object-left-top w-full h-[320px] lg:h-[420px]' src={imgSrc} alt={imgAlt} />
            </figure>
            <div className="info row-span-6 lg:col-span-4 lg:mx-6 flex flex-col justify-between h-full">
                <h2 className="mb-6">{title}</h2>
                <p>{description1}</p>
                <br />
                <p>{description2}</p>
                <div className="w-full row-span-1 flex justify-center lg:justify-end items-end">
                    <button className='btn small lg:ml-auto pink'><a href={link} target="_blank">Visit project</a></button>
                    {github && (
                        <button className='btn small pink mx-4'><a href={github} target="_blank"><SiGithub /></a></button>
                    )}
                </div>
            </div>
        </article>
    )
}

export default FeaturedProject