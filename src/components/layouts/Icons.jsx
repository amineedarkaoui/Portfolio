import React from 'react'
import IconButton from '../elements/IconButton'
import { icons } from '../../constants'

const Icons = (props) => {
  return (
    <div className={`flex items-center justify-center gap-6 ${!props.block && 'absolute bottom-12'}`}>
      {
        icons.map(icon => <IconButton icon={icon.icon} link={icon.link} name={icon.name} />)
      }
    </div>
  )
}

export default Icons
