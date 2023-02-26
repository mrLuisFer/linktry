import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import HeaderSidebar from './HeaderSidebar'
import FooterSidebar from './FooterSidebar'

const avatarBase =
  'https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'

export interface IQuickContactItem {
  icon: string
  link: string
  label: string
}

const quickContactItems: IQuickContactItem[] = [
  {
    icon: 'https://img.icons8.com/ios/50/000000/instagram-new.png',
    link: 'https://www.instagram.com/mrluisfer/',
    label: 'Instagram'
  },
  {
    icon: '',
    link: '',
    label: 'Email'
  }
]

export default function AvatarSidebar(): JSX.Element {
  return (
    <div className='bg-white dark:bg-slate-900 min-h-screen w-auto text-gray-900 dark:text-slate-100 pl-32 pb-8 transition group grid grid-rows-[100px_1fr_50px]'>
      <HeaderSidebar />
      <div className='flex flex-col gap-6 items-start'>
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
            src={avatarBase}
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
          <h1 className='font-bold text-4xl border-b-2 border-transparent hover:border-gray-800 dark:hover:border-gray-300 transition'>
            mrLuisFer
          </h1>
          <p className='font-normal opacity-80 hover:opacity-100 transition'>
            Description.
          </p>
          <div className='flex flex-col gap-4'>
            {quickContactItems.map((item) => (
              <motion.span
                key={item.label}
                className='transition inline-block w-fit hover:text-blue-500'
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
                  <a>{item.label}</a>
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
