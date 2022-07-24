import { unstable_getServerSession } from 'next-auth/next'
import { useSession } from 'next-auth/react'
import { authOptions } from '../api/auth/[...nextauth]'
import { GetServerSideProps, NextPage } from 'next'
import Header from '~/components/Header'
import prisma from '~/lib/prisma'
import { HiPlus } from 'react-icons/hi'
import { useState } from 'react'
import axios from 'axios'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await unstable_getServerSession(context.req, context.res, authOptions)
  if (!session) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false
      }
    }
  }

  const userEmail: string = session!.user!.email!
  const data = await prisma.user.findUnique({
    where: {
      email: userEmail
    }
  })

  if (!data) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false
      }
    }
  }

  return { props: {} }
}

interface Field {
  username: string
  url: string
  description: string
}

const Dashboard: NextPage = () => {
  const [fields, setFields] = useState<Field[]>([])
  const [username, setUsername] = useState<string>('')
  const [url, setUrl] = useState<string>('')
  const [description, setDescription] = useState<string>('')

  const [isNameError, setIsNameError] = useState<boolean>(false)
  const [isUrlError, setIsUrlError] = useState<boolean>(false)
  const [isDescError, setIsDescError] = useState<boolean>(false)

  const { data } = useSession()

  const handleAddClientFields = async () => {
    if (!username) {
      setIsNameError(true)
    }

    if (!url) {
      setIsUrlError(true)
    }

    if (!description) {
      setIsDescError(true)
    }

    if (!isNameError && !isUrlError && !isDescError) {
      setIsNameError(false)
      setIsUrlError(false)
      setIsDescError(false)
      setFields((prevFields) => [...prevFields, { username, url, description }])
    }
  }

  const handleSubmitFields = (e: any) => {
    e.preventDefault()

    console.log(fields)
  }

  const inputStyles: string =
    'py-2 px-4 rounded-lg bg-gray-200 dark:bg-gray-900 transition-all opacity-80 focus:opacity-100 focus:shadow-sm'
  const labelStyles: string = 'flex flex-col'

  if (!data) {
    return <div>Not session</div>
  }

  return (
    <section className='py-1 px-24 bg-gray-100 dark:bg-gray-800 min-h-screen'>
      <Header username={data!.user!.name!} />
      <section className='dark:text-white'>
        {fields.map((field) => (
          <div key={field.url}>
            <p>{field.username}</p>
            <p>{field.url}</p>
            <p>{field.description}</p>
          </div>
        ))}
        <div className='flex justify-center mb-8'>
          <form action='' className='flex flex-col gap-4' onSubmit={(e) => handleSubmitFields(e)}>
            <div className='flex items-center gap-4'>
              <label htmlFor='username' className={labelStyles}>
                Username:
                <input
                  type='text'
                  name='username'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  id='username'
                  placeholder='username'
                  className={inputStyles}
                />
              </label>
              <label htmlFor='url' className={labelStyles}>
                Url:
                <input
                  type='text'
                  name='url'
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  id='url'
                  placeholder='url'
                  className={inputStyles}
                />
              </label>
            </div>
            <label htmlFor='description' className={labelStyles}>
              Description
              <textarea
                placeholder='description'
                name='description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                id='description'
                className={`${inputStyles} h-40 resize-none`}
              />
            </label>
            <button
              type='submit'
              className='py-3 px-8 rounded-md bg-blue-600 w-fit text-base font-medium transform active:scale-95 text-white'
            >
              Save
            </button>
          </form>
        </div>
        <div
          className='flex justify-center items-center bg-gray-200 dark:bg-gray-900 text-lg py-4 transition-all rounded-lg shadow-sm hover:shadow-md w-9/12 mx-auto transform active:scale-95'
          onClick={handleAddClientFields}
        >
          <HiPlus />
        </div>
      </section>
    </section>
  )
}

export default Dashboard
