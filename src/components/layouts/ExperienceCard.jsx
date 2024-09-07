import React, { useEffect, useState } from 'react'
import Bubbles from './Bubbles';
import LinkTo from '../elements/LinkTo';

function ExperienceCard(props) {
    const [isSmall, setSmall] = useState(window.innerWidth <= 640);

  const updateMedia = () => {
    setSmall(window.innerWidth <= 640);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div className='flex gap-4 max-w-[800px]'>
      {
        !isSmall &&
        <p className='card-small w-52'>{props.startDate} - {props.endDate} {props.year}</p>

      }
        <div className='flex flex-col items-center'>
            <div className='color-trans w-4 h-4 border-2 dark:bg-white/20 border-black dark:border-white rounded-full' />
            <div className='color-trans w-[2px] dark:bg-gray-700 bg-black h-full'/>
        </div>
        <div className='flex flex-col gap-2 mb-16'>
            {
                isSmall &&
                <p className='card-small mb-2'>{props.startDate} - {props.endDate} {props.year}</p>
            }
            <div className='flex flex-wrap gap-x-2 items-end'>
                <p className='card-title'>{props.title}</p>
                <p className='card-title'>·</p>
                <LinkTo text={props.company} link={props.link} noMargin={true} />
            </div>
            <p className='card-text'>{props.description}</p>
            <Bubbles elements={props.technologies} />
        </div>
    </div>
  )
}

export default ExperienceCard
