import React from 'react'

function Bubble(props) {
  return (
    <div className='bg-primary/20 text-primary p-2 rounded-full text-sm text-nowrap'>
      <p>{props.text}</p>
    </div>
  )
}

export default Bubble
