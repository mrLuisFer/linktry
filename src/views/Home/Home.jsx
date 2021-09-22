import About from '../../components/About'
import Avatar from '../../components/Avatar'
import Header from '../../components/Header'
import SocialLinks from '../../components/SocialLinks'
import Footer from '../../components/Footer'

export default function Home() {
  return (
    <div className='sm:mx-auto min-h-screen md:w-3/5'>
      <Header />
      <Avatar />
      <About />
      <SocialLinks />
      <Footer />
    </div>
  )
}
