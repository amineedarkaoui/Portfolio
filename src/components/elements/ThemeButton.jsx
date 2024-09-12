import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'

const ThemeButton = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark")

  const changeTheme = () => {
    if (theme == 'dark') {
      setTheme('light')
      localStorage.setItem('theme', 'light')
    }
    else {
      setTheme('dark')
      localStorage.setItem('theme', 'dark')
    }
  }

  useEffect(() => {
    if (theme === "dark")
        document.documentElement.classList.add('dark')
    else
      document.documentElement.classList.remove('dark')

    // setTimeout(() => {
    //   document.documentElement.classList.remove("no-transition");
    // }, 50);
  } ,[theme])

  useEffect(() => {
    document.documentElement.classList.add("no-transition");

    setTimeout(() => {
      document.documentElement.classList.remove("no-transition");
    }, 50);
  } ,[])

  return (
    <button id='theme-button' onClick={changeTheme} className='size-8 opacity-70 hover:opacity-100 dark:text-white color-trans flex transition-opacity'>
      <Icon className={`m-auto size-full`} icon="fluent:dark-theme-20-filled" />
    </button>
  )
}

export default ThemeButton
