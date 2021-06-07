import React from 'react'
import About from '../../components/About/About'
import Avatar from '../../components/Avatar/Avatar'
import Header from '../../components/Header/Header'

export default function Home() {
  return (
    <div className='container mx-auto min-h-screen'>
      <Header />
      <Avatar />
      <About />
    </div>
  )
}
