import React from 'react'
import Bubble from '../elements/Bubble'

function Bubbles(props) {
  return (
    <div className='flex gap-2 flex-wrap'>
      {
        props.elements.map((el, index) => <Bubble text={el} key={index} />)
      }
    </div>
  )
}

export default Bubbles
