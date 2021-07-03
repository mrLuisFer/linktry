import About from '../../components/About/About'
import Avatar from '../../components/Avatar/Avatar'
import Header from '../../components/Header/Header'
import SocialLinks from '../../components/SocialLinks/SocialLinks'
import Footer from '../../components/Footer/Footer'

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
