import React from 'react'

function HeaderElement(props) {
  return (
    <div className='hover:cursor-pointer'>
      <p className='dark:text-white color-trans'>{props.text}</p>
    </div>
  )
}

export default HeaderElement
