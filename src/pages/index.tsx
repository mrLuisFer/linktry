import Head from 'next/head'
import AvatarSidebar from '../components/home/AvatarSidebar/index'

export default function Home(): JSX.Element {
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
      <main>
        <AvatarSidebar />
      </main>
    </>
  )
}
