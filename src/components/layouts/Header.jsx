import React, { useContext } from 'react'
import HeaderElement from '../elements/HeaderElement'
import ThemeButton from '../elements/ThemeButton'
import { headerElements } from '../../constants'
import { useState } from 'react'
import { appContext } from '../../App'

function Header() {
  const {scrollPosition, isSmall} = useContext(appContext)
  const [highlight, setHighlight] = useState('About');

  return (
    <div className={`flex justify-center fixed top-0 right-0 left-0 h-16 z-20 transition-all duration-500 opacity-0 ${scrollPosition > 100 && 'sm:backdrop-blur-md sm:shadow-sm sm:bg-gradient-to-br from-black/0 dark:to-white/5 to-black/2'} animate-header-in`}>
      { !isSmall &&
      <div>
        <div className='flex justify-between items-center h-full w-[400px]'>
        {
          headerElements.map(el => <HeaderElement text={el.name} scrollElement={el.scrollElement} key={el.id} highlight={highlight} setHighlight={setHighlight} />)
        }
        </div>
      
      <div className='absolute right-8 top-[50%] sm:translate-y-[-50%]'>
        <ThemeButton />
      </div>
      </div>
      }
    </div>
  )
}

export default Header
