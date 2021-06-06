import React from 'react'
import HeaderToggle from './HeaderToggle/HeaderToggle'

export default function Header() {
  return (
    <div className='flex items-center justify-between pt-5 px-4'>
      <h1 className='text-base font-medium cursor-pointer opacity-80 hover:opacity-100 transition-opacity'>
        ⚛ Linktree
      </h1>
      <HeaderToggle />
    </div>
  )
}
