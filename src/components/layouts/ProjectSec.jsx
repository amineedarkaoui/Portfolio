import React, { useEffect, useState } from 'react'
import SectionHeader from '../elements/SectionHeader'
import { projects } from '../../constants'
import ProjectCard from './ProjectCard'
import { Icon } from '@iconify/react/dist/iconify.js'

const ProjectSec = (props) => {
  const [showAll, setShowAll] = useState(false)
  const [shownProjects, setShownProjects] = useState(projects.elements.slice(0, 3))

  useEffect(() => {
    if (showAll)
      setShownProjects(projects.elements)
    else
      setShownProjects(projects.elements.slice(0, 3))
  }, [showAll])

  return (
    <div id="project" className='flex flex-col items-center'>
      <SectionHeader text={projects.title} />
      <div className='grid gap-4 mx-4'>
        {
            shownProjects.map(el => <ProjectCard changePage={props.changePage} {...el} key={el.id} />)
        }
      </div>
      <button onClick={() => setShowAll(prev => !prev)} className='card-text flex items-center gap-2 mt-4 group'>
        <p>show {showAll ? 'less' : 'more'}</p>
        <Icon  className={`size-4 transition-all ${showAll ? 'rotate-180 mt-1 group-hover:translate-y-[-10%]' : 'group-hover:translate-y-[10%]'}`} icon="iconamoon:arrow-down-2" />
      </button>
    </div>
  )
}

export default ProjectSec
