import "../styles/global.css"
import ContextProviders from "../context/ContextProviders"

export default function MyApp({ Component, pageProps }) {
  return (
    <ContextProviders>
      <Component {...pageProps} />
    </ContextProviders>
  )
}
