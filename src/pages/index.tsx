import CardsLayout from '../components/home/CardsLayout/index'
import SEO from 'src/components/SEO'
import { Box } from '@radix-ui/themes'
import Sidebar from 'src/components/home/Sidebar'

export default function Home(): JSX.Element {
  return (
    <>
      <SEO />
      <Box className='flex flex-col lg:grid lg:grid-cols-[500px_1fr]'>
        <Sidebar />
        <CardsLayout />
      </Box>
    </>
  )
}
