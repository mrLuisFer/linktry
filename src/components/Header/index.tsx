import HeaderToggle from './HeaderToggle'
import Img from 'next/image'
import Link from 'next/link'
import { NextRouter, useRouter } from 'next/router'
import { FaSignOutAlt } from 'react-icons/fa'
import { hoverEffect } from '~/styles/hoverEffect'
import { signOut, SignOutResponse } from 'next-auth/react'

export default function Header({ username }: { username?: string }) {
  const { pathname }: NextRouter = useRouter()

  return (
    <nav className='flex items-center bg-gray-100 dark:bg-gray-800 text-black dark:text-white justify-between py-5 px-0 mx-auto w-60 mb:w-80 sm:w-full'>
      <Link href='/dashboard'>
        <a className='text-base md:text-lg font-medium cursor-pointer transition-opacity flex items-center gap-x-2 select-none'>
          <Img
            src='/assets/linktree.svg'
            alt='Linktry Logo'
            className='animate-pulse h-8 w-8'
            title='Linktry'
            width='30px'
            height='30px'
          />
          <p>
            Linktry
            {username && (
              <>
                {' '}
                |{' '}
                <span className='text-green-700 hover:text-green-600 dark:text-green-400 dark:hover:text-green-300 transition-colors'>
                  {username}
                </span>
              </>
            )}
          </p>
        </a>
      </Link>
      <div className='flex items-center gap-x-10'>
        {pathname === '/dashboard' && <SignOutBtn />}
        <HeaderToggle />
      </div>
    </nav>
  )
}

function SignOutBtn() {
  const router = useRouter()

  const handleSignOut = async () => {
    const data: SignOutResponse | any = await signOut({
      redirect: true,
      callbackUrl: '/auth/login'
    })

    if (data) {
      router.push(data.url)
    }
  }

  return (
    <button
      className={`group transition-all opacity-80 hover:opacity-100 flex items-center gap-x-2 py-2 px-4 cursor-pointer select-none ${hoverEffect}`}
      onClick={handleSignOut}
    >
      <p className='transition-colors group-hover:text-green-600 dark:group-hover:text-green-400'>
        <FaSignOutAlt />
      </p>
      <p>Sign out</p>
    </button>
  )
}
