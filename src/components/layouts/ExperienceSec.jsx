import React, { useRef } from 'react'
import { experiences } from '../../constants'
import SectionHeader from '../elements/SectionHeader'
import ExperienceCard from './ExperienceCard'

function ExperienceSec() {
  return (
    <div id='experience' className='flex flex-col items-center relative'>
      <SectionHeader text={experiences.title} />
      <div className='m-4'>
          {
              experiences.elements.map(el => <ExperienceCard {...el} key={el.id} />)
          }
      </div>
      {/* <div className='h-16 absolute bottom-0 right-0 left-0 bg-gradient-to-b from-bg-dark/0 dark:from-bg-dark/0 dark:via-bg-dark/80 via-30% dark:to-bg-dark color-trans delay-10000 animate-appear'></div> */}
    </div>
  )
}

export default ExperienceSec
