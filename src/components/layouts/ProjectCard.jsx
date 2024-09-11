import React, { useEffect, useState } from 'react'
import Bubbles from './Bubbles'
import LinkTo from '../elements/LinkTo'
import { useInView } from 'react-intersection-observer'

function ProjectCard(props) {
  const {ref, inView, entry} = useInView({threshold: 0.2, triggerOnce: true})

  return (
    <div ref={ref} className={`opacity-0 ${inView && 'animate-fade-in'} grid hover:shadow-project dark:hover:shadow-project-dark transition-all duration-500 gap-4 sm:grid-cols-project max-w-[800px] hover:cursor-pointer dark:hover:bg-white/[2%] hover:bg-black/[0.5%] overflow-hidden rounded-md p-4 group/card`}>
      <div className='aspect-square rounded-sm w-full overflow-hidden'>
        <div className='bg-cover bg-center w-full h-full group-hover/card:scale-105 transition-transform duration-500' style={ {backgroundImage: `url(${props.image})`} } />
      </div>
    
      <div className='flex flex-col gap-2 sm:justify-between py-2'>
        <p className='card-title'>{props.title}</p>
        <p className='card-text text-justify'>{props.description}</p>
        <div className='flex flex-wrap justify-between items-center gap-2'>
            <Bubbles elements={props.technologies} />
            <LinkTo text="View code" link={props.code} />
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
