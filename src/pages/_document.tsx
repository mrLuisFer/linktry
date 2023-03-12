import { Html, Head, Main, NextScript } from 'next/document'

export default function Document(): JSX.Element {
  return (
    <Html lang='en'>
      <Head>
        <meta charSet='utf-8' />
        <link href='https://github.com/mrluisfer' rel='preconnect' />
        <link rel='icon' href='/favicon.svg' />
        <meta name='theme-color' content='#1F2937' />
        <link rel='apple-touch-icon' href='/favicon.svg' />
        <link
          rel='manifest'
          href='/manifest.json'
          crossOrigin='use-credentials'
        />
        <meta property='og:site_name' content='mrLuisFer - Custom Linktree' />
        <meta property='og:title' content='mrLuisFer | Linktry' />
        <meta property='og:image' itemProp='image' content='/favicon.svg' />
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content='https://mrluisfer-linktry.netlify.app/'
        />
        <link rel='image_src' href='/favicon.svg' />
        <meta property='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:url'
          content='https://mrluisfer-linktry.netlify.app/'
        />
        <meta property='twitter:title' content='mrLuisFer - Custom Linktree' />
        <meta property='twitter:image' content='/favicon.svg' />
        <meta content='@_mrluisfer' name='twitter:creator' />
        <meta content='summary_large_image' name='twitter:card' />
        <meta
          content='index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
          name='googlebot'
        />
        <meta content='index, follow' name='robots' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
