import Link from 'next/link'
import { motion } from 'framer-motion'
import { HiOutlineMail } from 'react-icons/hi'
import { TbBrandGithub } from 'react-icons/tb'
import {
  Heading,
  Text,
  Link as RadixLink,
  Avatar as RadixAvatar
} from '@radix-ui/themes'

export interface IQuickContactItem {
  icon: any
  link: string
  label: string
}

const quickContactItems: IQuickContactItem[] = [
  {
    icon: <HiOutlineMail />,
    link: 'mailto:mrluisfeer@gmail.com',
    label: 'mrluisfeer@gmail.com'
  },
  {
    icon: <TbBrandGithub />,
    link: 'https://github.com/mrLuisFer',
    label: 'github/mrluisfer'
  }
]

export default function Avatar(): JSX.Element {
  return (
    <div className='flex flex-col gap-6 items-center lg:items-start'>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          delay: 0.1,
          duration: 0.5,
          ease: 'easeOut'
        }}
        className='relative'
      >
        <RadixAvatar
          fallback='mrLuisFer'
          src='/avatar.png'
          key='mrluisfer'
          alt='mrLuisFer GitHub Profile'
          className='rounded-full w-fit h-fit'
          size='9'
          draggable={false}
        />
      </motion.div>
      <motion.div
        initial={{ translateY: 300 }}
        animate={{ translateY: 0 }}
        transition={{
          duration: 0.5,
          ease: 'easeOut'
        }}
        className='flex flex-col justify-start gap-4'
      >
        <Heading
          as='h1'
          className='font-bold text-4xl border-b-2 border-transparent hover:border-gray-800 dark:hover:border-gray-300 transition w-fit'
        >
          mrLuisFer
        </Heading>
        <Text className='font-normal opacity-80 hover:opacity-100 transition w-[350px]'>
          {"I'm"} a <b>Frontend Developer</b> specialized in <b>JavaScript</b>{' '}
          and <b>TypeScript</b> environment using <b>React.js</b> and tools for
          Web development. I also like Backend development using <b>Node.js</b>{' '}
          to create Fullstack applications.
        </Text>
        <div className='flex flex-col gap-4'>
          {quickContactItems.map((item) => (
            <motion.span
              key={item.label}
              className='transition inline-block w-fit text-blue-500 hover:text-blue-700'
              whileTap={{
                scale: 0.95
              }}
              transition={{
                ease: 'linear'
              }}
            >
              <Link href={item.link}>
                <RadixLink
                  className='flex items-center gap-2 font-semibold select-none'
                  draggable={false}
                >
                  {item.icon}
                  {item.label}
                </RadixLink>
              </Link>
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
