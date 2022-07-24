import { unstable_getServerSession } from 'next-auth/next'
import { authOptions } from '../api/auth/[...nextauth]'
import { GetServerSideProps, NextPage } from 'next'
import Header from '~/components/Header'
import prisma from '~/lib/prisma'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  )

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

  return { props: { userData: JSON.stringify(data) } }
}

const Dashboard: NextPage<{ userData: any }> = ({ userData }) => {
  const user = JSON.parse(userData)

  return (
    <section className='py-1 px-24 bg-gray-100 dark:bg-gray-800 min-h-screen'>
      <Header username={user.name} />
      <section className='dark:text-white'>
        <p>dashboard</p>
      </section>
    </section>
  )
}

export default Dashboard
