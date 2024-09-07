import React from 'react'

const SectionHeader = (props) => {
  return (
    <div className='flex justify-center mb-6'>
      <p className='dark:text-white text-3xl font-bold color-trans'>{props.text}</p>
    </div>
  )
}

export default SectionHeader
