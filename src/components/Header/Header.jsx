import React from 'react'
import HeaderToggle from './HeaderToggle/HeaderToggle'

export default function Header() {
  return (
    <div className='flex items-center justify-between pt-5 px-0 mx-auto w-60 sm:w-full'>
      <h1 className='text-base md:text-lg font-medium cursor-pointer opacity-80 hover:opacity-100 transition-opacity'>
        ⚛ Linktry
      </h1>
      <HeaderToggle />
    </div>
  )
}
