import { createContext, useEffect, useState } from 'react'
import AboutSec from './components/layouts/AboutSec'
import ExperienceSec from './components/layouts/ExperienceSec'
import Footer from './components/layouts/Footer'
import Header from './components/layouts/Header'
import ProjectSec from './components/layouts/ProjectSec'
import ComingSoon from './components/layouts/ComingSoon'

export const appContext = createContext(null)

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isSmall, setSmall] = useState(window.innerWidth <= 640);
  const [page, setPage] = useState(0)

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
      {
        page ?
          <ComingSoon changePage={() => setPage(0)} />
        :
          <div>
            <Header />
            <div className='grid gap-20'>
              <AboutSec />
              <ProjectSec changePage={() => setPage(1)} />
              <ExperienceSec />
              <Footer />
            </div>
          </div>
      }
    </appContext.Provider>
    
  )
}

export default App
