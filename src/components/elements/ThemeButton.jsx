import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'

const ThemeButton = (props) => {
  return (
    <button onClick={props.onClick} className='size-8 opacity-70 hover:opacity-100 dark:text-white color-trans flex transition-opacity'>
      <Icon className={`m-auto size-full`} icon="fluent:dark-theme-20-filled" />
    </button>
  )
}

export default ThemeButton
