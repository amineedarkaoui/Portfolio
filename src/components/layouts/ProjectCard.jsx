import React from 'react'
import Bubbles from './Bubbles'
import LinkTo from '../elements/LinkTo'

function ProjectCard(props) {
  return (
    <div className='grid hover:shadow-project dark:hover:shadow-project-dark transition-all gap-4 sm:grid-cols-project max-w-[800px] hover:cursor-pointer dark:hover:bg-white/[2%] hover:bg-black/[1%] overflow-hidden rounded-md p-4'>
      <div className='aspect-square rounded-sm bg-cover bg-center w-full' style={ {backgroundImage: `url(${props.image})`} } />
      <div className='flex flex-col gap-2 sm:justify-between py-2'>
        <p className='card-title'>{props.title}</p>
        <p className='card-text'>{props.description}</p>
        <div className='flex flex-wrap justify-between items-center gap-2'>
            <Bubbles elements={props.technologies} />
            <LinkTo text="View code" link={props.code} />
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
