import About from '~/components/About'
import Avatar from '~/components/Avatar'
import SocialLinks from '~/components/SocialLinks'
import Footer from '~/components/Footer'
import Layout from '~/components/Layout'
import Header from '~/components/Header'
import { NextPage } from 'next'
import { useSession } from 'next-auth/react'

const Preview: NextPage = () => {
  const { data: session } = useSession()

  console.log(session)
  if (session) {
    const username = session!.user!.name!
    const avatar = session!.user!.image!

    return (
      <Layout>
        <Header username={username} />
        <Avatar avatar={avatar} />
        <About />
        <SocialLinks />
        <Footer />
      </Layout>
    )
  }

  return <div>Error</div>
}

export default Preview
