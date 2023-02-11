import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const avatarBase =
  'https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'

interface IQuickContactItem {
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

const footerItems: IQuickContactItem[] = [
  {
    icon: '',
    label: 'GitHub',
    link: ''
  },
  {
    icon: '',
    label: 'LinkedIn',
    link: ''
  },
  {
    icon: '',
    label: 'Explore',
    link: ''
  }
]

export default function AvatarSidebar(): JSX.Element {
  return (
    <div className='bg-white min-h-screen w-1/3 text-gray-900 hover:shadow-inner hover:shadow-gray-100 pl-20 flex flex-col justify-between pt-32 pb-8 transition'>
      <div className='flex flex-col gap-6 items-start'>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.1,
            duration: 0.5,
            ease: 'easeOut'
          }}
          className='relative w-52 h-52'
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
          <h1 className='font-bold text-4xl border-b-2 border-transparent hover:border-gray-800 transition'>
            mrLuisFer
          </h1>
          <p className='font-normal opacity-80 hover:opacity-100 transition'>
            Description.
          </p>
          <div className='flex flex-col gap-4'>
            {quickContactItems.map((item) => (
              <motion.span
                key={item.label}
                className='transition'
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
      <div className='flex items-center gap-6 flex-wrap'>
        {footerItems.map((item) => (
          <motion.div
            key={item.label}
            initial={{ translateY: 100 }}
            animate={{ translateY: 0 }}
            transition={{
              delay: 0.2 + footerItems.indexOf(item) * 0.1,
              ease: 'backOut'
            }}
          >
            <Link href={item.link}>
              <a className='text-gray-700 opacity-60 hover:opacity-90'>
                {item.label}
              </a>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
