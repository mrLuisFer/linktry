import Head from 'next/head'
import About from '../components/About'
import Avatar from '../components/Avatar'
import Header from '../components/Header'
import SocialLinks from '../components/SocialLinks'
import Footer from '../components/Footer'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <>
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
      <Layout>
        <Header />
        <Avatar />
        <About />
        <SocialLinks />
        <Footer />
      </Layout>
    </>
  )
}
