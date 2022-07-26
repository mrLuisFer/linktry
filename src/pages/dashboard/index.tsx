import { unstable_getServerSession } from 'next-auth/next'
import { useSession } from 'next-auth/react'
import { authOptions } from '../api/auth/[...nextauth]'
import { GetServerSideProps, NextPage } from 'next'
import Header from '~/components/Header'
import prisma from '~/lib/prisma'
import { HiPlus } from 'react-icons/hi'
import { useState } from 'react'
import { AiOutlineClear } from 'react-icons/ai'
import axios from 'axios'
import FieldItem from './FieldItem'

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

  const [isNameError, setIsNameError] = useState<boolean>(true)
  const [isUrlError, setIsUrlError] = useState<boolean>(true)
  const [isDescError, setIsDescError] = useState<boolean>(true)

  const { data } = useSession()

  const clearFields = () => {
    setUsername('')
    setUrl('')
    setDescription('')
  }

  const handleAddClientFields = async () => {
    if (username.length > 5 && url.length > 5 && description.length > 10) {
      setIsNameError(false)
      setIsUrlError(false)
      setIsDescError(false)
      setFields((prevFields) => [...prevFields, { username, url, description }])
    }

    setIsNameError(true)
    setIsUrlError(true)
    setIsDescError(true)
    clearFields()
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
    <section className='pt-1 pb-6 px-24 bg-gray-100 dark:bg-gray-800 min-h-screen'>
      <Header username={data!.user!.name!} />
      <section className='dark:text-white'>
        <div className='py-2 px-2 bg-slate-200 dark:bg-slate-900 rounded-xl transition-all shadow-sm hover:shadow-md mb-10'>
          {fields.map((field) => (
            <FieldItem key={field.url} username={field.username} url={field.url} description={field.description} />
          ))}
        </div>
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
            <div className='flex items-center gap-4'>
              <button
                type='submit'
                className='py-3 px-8 rounded-md bg-gradient-to-tr transition-all from-blue-700 to-blue-600 w-fit text-base font-medium transform active:scale-95 text-white select-none'
              >
                Save
              </button>
              <button
                type='button'
                className='p-4 transition-all bg-slate-900 hover:bg-gradient-to-br hover:from-slate-800 hover:to-slate-900 border-[1px] text-white border-slate-900 rounded-xl transform active:scale-95 text-base'
                title='Clear inputs'
                onClick={() => clearFields()}
              >
                <AiOutlineClear />
              </button>
            </div>
          </form>
        </div>
        <div
          className='flex justify-center items-center bg-gray-200 dark:bg-gray-900 text-lg py-4 transition-all rounded-lg shadow-sm hover:shadow-md w-9/12 mx-auto transform active:scale-95 select-none'
          onClick={handleAddClientFields}
        >
          <HiPlus />
        </div>
      </section>
    </section>
  )
}

export default Dashboard
