import React from 'react'
import HeaderToggle from './HeaderToggle/HeaderToggle'

export default function Header() {
  return (
    <div className='flex items-center justify-between pt-5 px-4'>
      <h1>React - Linktre</h1>
      <HeaderToggle />
    </div>
  )
}
