const SkillCard = ({ cardClass, icon01, icon02, icon03, alt01, alt02, alt03, title, text, turnCard, isFlipped }) => {
    return (
        <div className="skill-card relative w-[358px] min-h-[542px] h-[542px]">
            <div className={`card front ${cardClass} ${isFlipped ? 'flipped' : ''} text-center flex-centered flex-col px-7 py-7 absolute w-full h-full`}>
                <figure className="relative top-0 w-[90px] h-[90px] mb-7 dark:invert">
                    <img src={icon01} alt={alt01} />
                    <img src={icon02} alt={alt02} />
                    <img src={icon03} alt={alt03} />
                </figure>
                <h3 className='mb-7'>{title}</h3>
                <p className='mb-7 px-4'>{text}</p>
                <button className="btn small">Learn more</button>
            </div>
            {/* <div className="card back">
                <h1>hello</h1>
            </div> */}
        </div>
    )
}

export default SkillCard