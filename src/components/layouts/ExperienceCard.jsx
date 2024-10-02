import React, { useContext } from 'react'
import Bubbles from './Bubbles';
import LinkTo from '../elements/LinkTo';
import { useInView } from 'react-intersection-observer';
import { appContext } from '../../App';

function ExperienceCard(props) {
    const {ref, inView, entry} = useInView({threshold: 0.3, triggerOnce: true})
    const {isSmall} = useContext(appContext)

  return (
    <div ref={ref} className={`opacity-0 ${inView && 'animate-fade-in'} flex gap-4 max-w-[800px]`}>
      {
        !isSmall &&
        <p className='card-small min-w-20 max-w-20'>{props.startDate} - {props.endDate} {props.year}</p>

      }
      <div className='flex flex-col items-center'>
          <div className='color-trans w-4 h-4 border-2 dark:bg-white/20 border-black dark:border-white rounded-full' />
          <div className={`h-full ${props.isLast && 'timeline-fade'}`}>
           <div className='color-trans w-[2px] dark:bg-gray-700 bg-gray-300 h-full'/>  
          </div>
          
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
