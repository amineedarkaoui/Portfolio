import React from 'react'
import SectionHeader from '../elements/SectionHeader'
import { projects } from '../../constants'
import ProjectCard from './ProjectCard'

const ProjectSec = () => {
  return (
    <div id="project" className='flex flex-col items-center'>
      <SectionHeader text={projects.title} />
      <div className='grid gap-4 mx-4'>
        {
            projects.elements.map(el => <ProjectCard {...el} key={el.id} />)
        }
      </div>
    </div>
  )
}

export default ProjectSec
