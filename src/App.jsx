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
      </div>
    </appContext.Provider>
    
  )
}

export default App
