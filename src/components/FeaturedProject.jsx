const FeaturedProject = ({imgSrc, imgAlt, title, description1, description2}) => {
    return (
        <article className="project-container flex flex-col-reverse lg:flex-row mb-40">
            <img className='lg:w-[400px] lg:h-[400px] object-cover' src={imgSrc} alt={imgAlt} />
            <div className="ml-10">
                <h2>{title}</h2>
                <p>{description1}</p>
                <br />
                <p>{description2}</p>
                <div className="w-full flex justify-end items-end mt-20">
                    <button className='btn-small ml-auto pink'>Visit project</button>
                </div>
            </div>
        </article>
    )
}

export default FeaturedProject