import { PiLinkBold } from 'react-icons/pi'
import { FaGithub } from 'react-icons/fa'
import type { ReactNode } from 'react'

const newUrl = '' // TODO: add new url from bento.me -> https://github.com/mrLuisFer/me-bento
const repositoryUrl = 'https://github.com/mrLuisFer/me-bento'
export default function DeprecatedHeader() {
  return (
    <header className='flex flex-col items-center justify-center py-4 bg-orange-50 gap-2'>
      <h1>
        This site has been deprecated, I recommend you to visit the following
        link to have a more modern and updated version
      </h1>
      <div className='flex items-center justify-center gap-10'>
        <Link url={newUrl}>
          <PiLinkBold />
          New Site
        </Link>
        <Link url={repositoryUrl}>
          <FaGithub />
          Repository
        </Link>
      </div>
    </header>
  )
}

function Link({ url, children }: { url: string; children: ReactNode }) {
  return (
    <a
      href={url}
      className='flex items-center gap-1 font-semibold text-sm bg-neutral-100 p-2 rounded-lg hover:bg-neutral-200 transition shadow hover:shadow-md'
    >
      {children}
    </a>
  )
}
