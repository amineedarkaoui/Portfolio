import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

function LinkTo(props) {
  return (
    <div onClick={(e) => {e.stopPropagation()}} className={`flex gap-2 dark:text-white group/link ${props.noMargin ? 'px-0' : 'px-2'} hover:underline text-nowrap color-trans`}>
      <a href={props.link} target='_blank'>{props.text}</a>
      <Icon className='size-3 mt-2 group-hover/link:mt-1 transition-all duration-300 ease-out' icon="fluent-mdl2:go" />
    </div>
  )
}

export default LinkTo
