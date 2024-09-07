import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

const IconButton = (props) => {
  return (
    <a className={`size-8 opacity-70 hover:opacity-100 dark:text-white color-trans flex transition-opacity`} href={props.link} target='_blank'>
        <Icon className={`m-auto ${props.name == 'X' ? 'size-[80%]' : 'size-full'}`} icon={props.icon} />
    </a>
  )
}

export default IconButton
