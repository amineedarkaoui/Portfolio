import React from 'react'
import { experiences } from '../../constants'
import SectionHeader from '../elements/SectionHeader'
import ExperienceCard from './ExperienceCard'

function ExperienceSec() {
  return (
    <div className='flex flex-col items-center'>
      <SectionHeader text={experiences.title} />
    <div className='mt-4'>
        {
            experiences.elements.map(el => <ExperienceCard {...el} />)
        }
    </div>
    
    </div>
  )
}

export default ExperienceSec
