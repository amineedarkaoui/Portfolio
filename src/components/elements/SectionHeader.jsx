import React from 'react'

const SectionHeader = (props) => {
  return (
    <div className={`sticky sm:static top-0 flex justify-center mb-2 z-10 py-3 backdrop-blur-lg w-full dark:bg-bg-dark/60 bg-bg-light/60 color-trans`}>
      <p className='dark:text-white text-2xl font-bold color-trans'>{props.text}</p>
    </div>
  )
}

export default SectionHeader
