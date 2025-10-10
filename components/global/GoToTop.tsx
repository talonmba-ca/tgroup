'use client'
import React from 'react'

const GoToTop = () => {
  return (
    <button
      style={{ backgroundColor: 'rgba(0,0,0,0.2)', zIndex: 9999 }}
      type='button'
      className='w-6 h-6 rounded-full shadow !fixed bottom-6 flex items-center justify-center right-4 text-white  text-center  duration-700 transition-colors shadow-emerald-500 hover:text-white cursor-pointer hover:bg-gradient-to-r from-emerald-500 to-amber-400 hover:border-none group'
      onClick={() => window.scrollTo(0, 0)}
    >
      <div className='group-hover:-translate-y-1 duration-700 transition-transform'>&uarr;</div>
    </button>
  )
}

export default GoToTop
