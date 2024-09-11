import { createContext, useEffect, useState } from 'react'
import AboutSec from './components/layouts/AboutSec'
import ExperienceSec from './components/layouts/ExperienceSec'
import Footer from './components/layouts/Footer'
import Header from './components/layouts/Header'
import ProjectSec from './components/layouts/ProjectSec'

export const appContext = createContext(null)

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isSmall, setSmall] = useState(window.innerWidth <= 640);
  // const [mousePosition, setMousePosition] = useState({x: -20, y: -20})

  const handleScroll = () => {
    const position = window.scrollY
    setScrollPosition(position)
  };

  const updateMedia = () => {
    setSmall(window.innerWidth <= 640);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  // useEffect(() => {
  //   const cursor = document.getElementById('cursor')
  //   cursor.style.top = (mousePosition.y - 10) + 'px'
  //   cursor.style.left = (mousePosition.x - 10) + 'px'
  // }, [mousePosition])

  // useEffect(() => {
  //   const handleMouseMove = (e) => {
  //     setMousePosition({x: e.clientX, y: e.clientY})
  //   }
  //   window.addEventListener('mousemove', handleMouseMove)

  //   return () => {
  //     removeEventListener('mousemove', handleMouseMove)
  //   }
  // }, [])

  return (
    <appContext.Provider value={{scrollPosition, isSmall}}>
      <div>
        <Header />
        <div className='grid gap-20'>
          <AboutSec />
          <ProjectSec />
          <ExperienceSec />
          <Footer />
        </div>
        {/* <div id='cursor' className={`h-[20px] w-[20px] rounded-full border-2 bg-white/20 fixed top-0 left-0 z-20 pointer-events-none`} /> */}
      </div>
    </appContext.Provider>
    
  )
}

export default App
