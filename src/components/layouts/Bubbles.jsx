import React from 'react'
import Bubble from '../elements/Bubble'

function Bubbles(props) {
  return (
    <div className='flex gap-2 flex-wrap'>
      {
        props.elements.map(el => <Bubble text={el} />)
      }
    </div>
  )
}

export default Bubbles
