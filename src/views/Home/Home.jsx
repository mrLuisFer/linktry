import React from 'react'
import About from '../../components/About/About'
import Avatar from '../../components/Avatar/Avatar'
import Header from '../../components/Header/Header'
import SocialLinks from '../../components/SocialLinks/SocialLinks'
import Footer from '../../components/Footer/Footer'

export default function Home() {
  return (
    <div className='container mx-auto min-h-screen'>
      <Header />
      <Avatar />
      <About />
      <SocialLinks />
      <Footer />
    </div>
  )
}
