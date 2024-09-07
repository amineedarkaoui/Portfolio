import { createContext, useEffect, useState } from 'react'
import AboutSec from './components/layouts/AboutSec'
import ExperienceSec from './components/layouts/ExperienceSec'
import Footer from './components/layouts/Footer'
import Header from './components/layouts/Header'
import ProjectSec from './components/layouts/ProjectSec'

export const scrollContext = createContext(null)

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Header />
      <div className='grid gap-20'>
        <AboutSec />
        <ProjectSec />
        <ExperienceSec />
        <Footer />
      </div>
    </div>
  )
}

export default App
