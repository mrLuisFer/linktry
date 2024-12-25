import CardsLayout from '../components/home/CardsLayout/index'
import SEO from 'src/components/SEO'
import { Box } from '@radix-ui/themes'
import Sidebar from 'src/components/home/Sidebar'
import DeprecatedHeader from 'src/components/deprecated-header'

export default function Home(): JSX.Element {
  return (
    <>
      <SEO />
      <DeprecatedHeader />
      <Box className='flex flex-col lg:grid lg:grid-cols-[500px_1fr]'>
        <Sidebar />
        <CardsLayout />
      </Box>
    </>
  )
}
