import React from 'react'
import IconButton from '../elements/IconButton'
import { icons } from '../../constants'

const Icons = (props) => {
  return (
    <div className={`flex items-center justify-center gap-6`}>
      {
        icons.map(icon => <IconButton scrollPosition={props.scrollPosition} icon={icon.icon} link={icon.link} name={icon.name} key={icon.id} />)
      }
    </div>
  )
}

export default Icons
