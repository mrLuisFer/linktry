import Head from "next/head"
import About from '../components/About'
import Avatar from '../components/Avatar'
import Header from '../components/Header'
import SocialLinks from '../components/SocialLinks'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className='text-gray-900 bg-gray-100 dark:bg-gray-800 dark:text-gray-50'>
      <Head>
        <title>Linktry - mrLuisFer</title>
        <meta
          name='description'
          content='Linktree created using create-react-app'
        />
        <meta
          property='og:description'
          content='My own customized linktree with the links and cards a little more detailed and with more information'
        />
        <meta
          property='twitter:description'
          content='My own customized linktree with the links and cards a little more detailed and with more information'
        />
      </Head>
      <section className='sm:mx-auto min-h-screen md:w-3/5'>
        <Header />
        <Avatar />
        <About />
        <SocialLinks />
        <Footer />
      </section>
    </main>
  )
}
