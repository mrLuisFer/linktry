import type { AppProps } from 'next/app'
import '../styles/global.css'
import '@radix-ui/themes/styles.css'
import { Theme } from '@radix-ui/themes'

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Theme radius='medium'>
      <Component {...pageProps} />
    </Theme>
  )
}
