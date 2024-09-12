import React, { useContext, useEffect } from 'react'
import { aboutSection } from '../../constants'
import Icons from './Icons'
import { appContext } from '../../App'
import ThemeButton from '../elements/ThemeButton'

const AboutSec = () => {
  const {scrollPosition, isSmall} = useContext(appContext)

  useEffect(() => {
    const about = document.getElementById('about')
    about.style.height = window.innerHeight + 'px'
  }, [])

  return (
    <div id="about" className={`max-w-full flex flex-col justify-center items-center gap-1 relative`}>
      {
        isSmall &&
        <div className='absolute right-4 top-4 sm:translate-y-[-50%] z-20'>
          <ThemeButton />
        </div>
      }
      
      <div className='absolute top-0 left-0 bottom-0 right-0 z-[-1] gradient-mask opacity-0 animate-gradient-in'>
        <div className='fixed w-[60vw] h-[70vh] bg-[#FFF7F7] opacity-50 rounded-full blur-3xl animate-color1' />
        <div className='animate-color2 fixed top-[10px] left-[500px] w-[60vw] h-[70vh] bg-[#d08cf8] opacity-50 rounded-full blur-3xl' />
        <div className='animate-color3 fixed top-[5px] left-[200px] w-[60vw] h-[70vh] bg-[#8358ef] opacity-50 rounded-full blur-3xl' />
        <div className='animate-color4 fixed top-[5px] left-[800px] w-[60vw] h-[70vh] bg-[#1230AE] opacity-50 rounded-full blur-3xl' />
      </div>

      <p className={`font-bold text-6xl dark:text-white text-black color-trans w-min sm:w-max opacity-0 animate-name-in`}>{aboutSection.name}</p>
      <p className={`text-xl dark:text-white text-black color-trans opacity-0 animate-title-in`}>{aboutSection.title}</p>
      <p className={`dark:text-[#D4D4D4] text-[#4f4f4f] color-trans mt-6 sm:max-w-[400px] max-w-[280px] m-2 text-center opacity-0 animate-text-in`}>{aboutSection.text}</p>
      <div className={`absolute bottom-10 opacity-0 ${scrollPosition > 10 ? 'animate-fade-out': 'animate-icons-in'} z-10`}>
          <Icons scrollPosition={scrollPosition} />
      </div>
    </div>
  )
}

export default AboutSec
