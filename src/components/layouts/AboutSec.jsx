import React from 'react'
import { aboutSection } from '../../constants'
import Icons from './Icons'

const AboutSec = () => {
  return (
    <div className='h-lvh flex flex-col justify-center items-center gap-1 relative'>
        <p className={`font-bold text-6xl dark:text-white text-black color-trans w-min sm:w-max`}>{aboutSection.name}</p>
        <p className={`text-xl dark:text-white text-black color-trans`}>{aboutSection.title}</p>
        <p className={`dark:text-[#D4D4D4] text-[#4f4f4f] color-trans mt-6 max-w-[500px] m-2 text-center`}>{aboutSection.text}</p>
        <Icons />
    </div>
  )
}

export default AboutSec
