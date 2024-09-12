import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import { Tooltip } from 'react-tooltip'

const IconButton = (props) => {
  return (
    <a id={`icon-${props.name}`} className={`size-8 opacity-70 hover:opacity-100 dark:text-white color-trans flex transition-opacity`} href={props.link} target='_blank'>
        <Icon className={`m-auto ${props.name == 'X' ? 'size-[80%]' : 'size-full'}`} icon={props.icon} />
        {
          props.scrollPosition <= 10 &&
          <Tooltip anchorSelect={`#icon-${props.name}`} noArrow>
            {props.name}
          </Tooltip>
        }
        
    </a>
  )
}

export default IconButton
