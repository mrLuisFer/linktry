import HeaderToggle from './HeaderToggle'
import LangButton from './LangButton'
import { userConfig } from '../../apiData/userConfig'
import Img from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <nav className='flex items-center bg-gray-100 dark:bg-gray-800 text-black dark:text-white justify-between py-5 mx-auto w-60 mb:w-80 sm:w-full'>
      <Link href='/'>
        <a className='text-base md:text-lg font-medium cursor-pointer transition-opacity flex items-center gap-x-2'>
          <Img
            src='/assets/linktree.svg'
            alt='Linktry Logo'
            className='animate-pulse h-8 w-8'
            title='Linktry'
            width='30px'
            height='30px'
          />
          <p>
            Linktry |{' '}
            <span className='text-green-700 hover:text-green-600 dark:text-green-400 dark:hover:text-green-300 transition-colors'>
              {userConfig.username}
            </span>
          </p>
        </a>
      </Link>
      <div className='flex items-center gap-x-6'>
        <LangButton />
        <HeaderToggle />
      </div>
    </nav>
  )
}
