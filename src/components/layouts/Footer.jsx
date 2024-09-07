import React from 'react'
import Icons from './Icons'

function Footer() {
  return (
    <div className='flex flex-col sm:flex-row sm:justify-around gap-6 items-center pb-10'>
      <Icons block={true} />
      <p className='card-small'>© 2024 · created by <strong>Amine Edarkaoui</strong></p>
    </div>
  )
}

export default Footer
