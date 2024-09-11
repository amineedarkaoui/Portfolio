import React from 'react'
import IconButton from '../elements/IconButton'
import { icons } from '../../constants'

const Icons = () => {
  return (
    <div className={`flex items-center justify-center gap-6`}>
      {
        icons.map(icon => <IconButton icon={icon.icon} link={icon.link} name={icon.name} key={icon.id} />)
      }
    </div>
  )
}

export default Icons
