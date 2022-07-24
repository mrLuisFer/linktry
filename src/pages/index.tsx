import Head from 'next/head'
import { GetServerSideProps, NextPage } from 'next'
import { unstable_getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  )

  if (!session) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false
      }
    }
  }

  if (session) {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}

const Home: NextPage = () => {
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
      <div>Error</div>
    </>
  )
}

export default Home
