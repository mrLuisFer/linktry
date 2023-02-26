import type { IQuickContactItem } from './index'
import { motion } from 'framer-motion'
import Link from 'next/link'

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

export default function FooterSidebar(): JSX.Element {
  return (
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
            <a className='text-gray-700 dark:text-gray-500 text-sm opacity-60 hover:opacity-90 transition'>
              {item.label}
            </a>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
