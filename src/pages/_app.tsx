import type { AppProps } from 'next/app'
import '../styles/global.css'
import { ChakraProvider } from '@chakra-ui/react'
import CardImageModal from 'src/components/core/modals/CardImageModal'
import { useImgModalStore } from 'src/store/imgModalStore'

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const { isOpenModal } = useImgModalStore()
  return (
    <ChakraProvider>
      <Component {...pageProps} />
      {isOpenModal && <CardImageModal />}
    </ChakraProvider>
  )
}
