import Head from 'next/head'

export default function SEO() {
  return (
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
  )
}
