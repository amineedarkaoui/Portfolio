import React from 'react'
import HeaderElement from '../elements/HeaderElement'
import ThemeButton from '../elements/ThemeButton'
import { headerElements } from '../../constants'
import { useEffect, useState } from 'react'

function Header() {
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
  } ,[theme])

  return (
    <div className='flex fixed top-0 right-0 left-0 items-center justify-center h-16 gap-16 z-10'>
      {
        headerElements.map(el => <HeaderElement text={el}/>)
      }
      <div className='absolute right-8 top-[50%] translate-y-[-50%]'>
        <ThemeButton onClick={changeTheme}/>
      </div>
    </div>
  )
}

export default Header
