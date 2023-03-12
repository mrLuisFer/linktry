import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import HeaderSidebar from './HeaderSidebar'
import FooterSidebar from './FooterSidebar'
import { HiOutlineMail } from 'react-icons/hi'
import { TbBrandGithub } from 'react-icons/tb'

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

export default function AvatarSidebar(): JSX.Element {
  return (
    <div className='bg-white dark:bg-zinc-800 min-h-screen w-auto text-gray-900 dark:text-slate-100 px-6 lg:pl-32 lg:pb-8 transition group grid grid-rows-[100px_1fr_50px]'>
      <HeaderSidebar />
      <div className='flex flex-col gap-6 items-center lg:items-start'>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.1,
            duration: 0.5,
            ease: 'easeOut'
          }}
          className='relative w-56 h-56'
        >
          <Image
            src='/avatar.png'
            alt='Alex Suprun Avatar'
            layout='fill'
            className='rounded-full'
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
          <h1 className='font-bold text-4xl border-b-2 border-transparent hover:border-gray-800 dark:hover:border-gray-300 transition w-fit'>
            mrLuisFer
          </h1>
          <p className='font-normal opacity-80 hover:opacity-100 transition w-[350px]'>
            {"I'm"} a <b>Frontend Developer</b> specialized in <b>JavaScript</b>{' '}
            and <b>TypeScript</b> environment using <b>React.js</b> and tools
            for Web development. I also like Backend development using{' '}
            <b>Node.js</b> to create Fullstack applications.
          </p>
          <div className='flex flex-col gap-4'>
            {quickContactItems.map((item) => (
              <motion.span
                key={item.label}
                className='transition inline-block w-fit text-blue-500 hover:text-blue-700'
                whileHover={{
                  paddingLeft: 8
                }}
                whileTap={{
                  scale: 0.95
                }}
                transition={{
                  ease: 'linear'
                }}
              >
                <Link href={item.link}>
                  <a
                    className='flex items-center gap-2 font-semibold select-none'
                    draggable={false}
                  >
                    {item.icon}
                    {item.label}
                  </a>
                </Link>
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
      <FooterSidebar />
    </div>
  )
}
