import Img from 'next/image'
import {
  ClientSafeProvider,
  getProviders,
  LiteralUnion,
  signIn
} from 'next-auth/react'
import { unstable_getServerSession } from 'next-auth/next'
import { authOptions } from '../api/auth/[...nextauth]'
import { GetServerSideProps, NextPage } from 'next'
import { useEffect, useState } from 'react'
import { BuiltInProviderType } from 'next-auth/providers'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const providers = await getProviders()
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  )

  if (session) {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false
      }
    }
  }

  return {
    props: { providers }
  }
}

const generateRandomNumber = (): number => {
  const max = 6
  const min = 1
  const result = Math.random() * (max - min) + min
  const index = Math.floor(result)
  return index
}

type Providers = Record<
  LiteralUnion<BuiltInProviderType, string>,
  ClientSafeProvider
>

const Login: NextPage<{
  providers: Providers
}> = ({ providers }) => {
  const [imgIndex, setImgIndex] = useState<number>(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex(generateRandomNumber())
    }, 8500)

    return () => clearInterval(interval)
  }, [])

  console.log(providers)
  console.log(imgIndex)

  return (
    <section className='bg-gray-100 dark:bg-gray-800 flex gap-x-10 min-h-screen'>
      <Img
        src={`/assets/login-${imgIndex}.jpg`}
        width='900px'
        height='100%'
        priority
      />
      <div className='relative p-12 w-full bg-gray-100 dark:bg-gray-800 flex flex-col align-center justify-center'>
        <h2 className='text-4xl mb-12'>Log in</h2>
        <button
          className='rounded-md bg-blue-500 text-white font-medium w-80 py-3 px-8 text-lg'
          onClick={() => signIn()}
        >
          Login with a Provider
        </button>
      </div>
    </section>
  )
}

export default Login
