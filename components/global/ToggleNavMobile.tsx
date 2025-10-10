'use client'
import React from 'react'
import { cn } from '@/lib/utils'
import MenuIcon from '../icons/Menu'

const ToggleNavMobile = () => {
  return (
    <button
      onClick={() => {
        const nav = document.getElementById('nav-mobile')
        nav?.classList.toggle('hidden')
      }}
      className={'flex lg:hidden  w-full z-20 items-center justify-center bg-transparent '}
    >
      <MenuIcon className={cn('w-6 h-6 text-primary rotate-[-180deg]', {})} />
    </button>
  )
}

export default ToggleNavMobile
