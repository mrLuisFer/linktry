import Head from 'next/head'
import AvatarSidebar from '../components/home/AvatarSidebar/index'
import { Box } from '@chakra-ui/react'
import CardsLayout from '../components/home/CardsLayout/index'

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
      <Box as='main' className='flex flex-col lg:grid lg:grid-cols-[500px_1fr]'>
        <AvatarSidebar />
        <div className='lg:overflow-y-scroll lg:h-screen'>
          <CardsLayout />
        </div>
      </Box>
    </>
  )
}
