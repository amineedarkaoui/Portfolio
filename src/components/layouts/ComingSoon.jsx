import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

function ComingSoon(props) {
  return (
    <div className='fixed top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] flex flex-col gap-6 items-center'>
      <p className='card-title'>Coming soon ...</p>
      <button onClick={props.changePage} className='card-text flex items-center gap-4 group border-black dark:border-white border-[1px] p-4 rounded-lg transition-all duration-500 hover:shadow-[10px_10px_20px_rgba(0,0,0,1)] dark:hover:shadow-[10px_10px_20px_#ffffff] active:shadow-none dark:active:shadow-none'>
        Back to home page
        <Icon className='size-4 group-hover:translate-x-[40%] transition-transform ease-out' icon="bi:arrow-right" />
      </button>
    </div>
  )
}

export default ComingSoon
