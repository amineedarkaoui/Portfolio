import React from 'react'
import Icons from './Icons'

function Footer() {
  return (
    <div className='flex flex-col sm:flex-row sm:justify-around gap-6 items-center sm:items-end pb-10'>
        <div className='flex flex-col items-center gap-2'>
            <p className='card-title'>Links</p>
            <Icons />
        </div>
      <p className='card-small'>© 2024 · created by <strong>Amine Edarkaoui</strong></p>
    </div>
  )
}

export default Footer
