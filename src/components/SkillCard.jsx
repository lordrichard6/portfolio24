/* eslint-disable react/prop-types */
import { useState } from 'react';

import arrowFlip_1 from '../assets/icons/turn-arrow-01.svg'
import arrowFlip_2 from '../assets/icons/turn-arrow-02.svg'
import cog from '../assets/icons/cog.svg'

const SkillCard = ({ cardClass, icon01, icon02, icon03, alt01, alt02, alt03, title, text, btnColor, tasks, techs }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleButtonClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className={`skill-card relative w-[358px] min-h-[542px] h-[580px] ${isFlipped ? 'is-flipped' : ''}`}>
            <div className={`card-face front ${cardClass} rounded-md text-center flex justify-between items-center flex-col p-7 absolute w-full h-full`}>
                <figure className="relative top-0 w-[90px] h-[90px] mb-7 dark:invert">
                    <img src={icon01} alt={alt01} />
                    <img src={icon02} alt={alt02} />
                    <img src={icon03} alt={alt03} />
                </figure>
                <h3 className='mb-7'>{title}</h3>
                <p className='mb-7 px-4'>{text}</p>
                <button onClick={handleButtonClick} className={`btn small ${btnColor}`}>Learn more</button>
            </div>
            <div className={`card-face back p-7  rounded-md ${cardClass}`}>
                <figure onClick={handleButtonClick} className="relative ml-auto w-[60px] h-[60px] dark:invert cursor-pointer">
                    <img src={arrowFlip_1} alt="Turn card arrow" />
                    <img src={arrowFlip_2} alt="Turn card arrow" />
                </figure>
                <div className="description mt-4">
                    {tasks.map((task, i) => <p key={i} className='text-lg mb-2'><img src={cog} alt="Turn card arrow" />{task}</p>)}
                </div>
                <h4 className='text-xl font-semibold mt-4'>Techs</h4>
                <div className='techs-container mt-2 text-5xl flex justify-between'>
                {techs.map((tech, i) => <span key={i}>{tech}</span>)}
                </div>
            </div>
        </div>
    )
}

export default SkillCard