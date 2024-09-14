import React, { useContext, useEffect, useState } from 'react'
import { appContext } from '../../App';

function HeaderElement(props) {
  const [scrollTo, setScrollTo] = useState(null);
  const {scrollPosition} = useContext(appContext)

  const scrollToSection = () => {
    window.scrollTo({top: (scrollTo.offsetTop - 60), behavior: 'smooth'})
  }

  useEffect(() => {
    setScrollTo(document.querySelector(`#${props.scrollElement}`))
  }, [])

  useEffect(() => {
    const element = document.querySelector(`#${props.scrollElement}`)
    if (scrollPosition >= (element.offsetTop - 140))
      props.setHighlight(props.text)
  }, [scrollPosition])

  return (
    <div onClick={scrollToSection} className={`hover:cursor-pointer relative after:w-[80%] after:h-[2px] after:absolute after:bottom-[-4px] after:left-[50%] after:translate-x-[-50%] after:scale-0 after:bg-black/30 hover:after:scale-100 dark:after:bg-white/30`}>
      <p className='dark:text-white color-trans'>{props.text}</p>
      {
        props.highlight === props.text &&
        <div className={`w-[90%] h-[2px] bg-black/80 dark:bg-white/80 absolute bottom-[-4px] left-[50%] translate-x-[-50%] animate-underline color-trans`}/>
      }
      
    </div>
  )
}

export default HeaderElement
