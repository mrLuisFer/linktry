import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

export default function TitleCategory({
  children
}: {
  children: ReactNode
}): JSX.Element {
  return (
    <motion.div
      className='flex items-center justify-start mb-4 text-left'
      initial={{
        opacity: 0,
        y: -20
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      transition={{
        duration: 0.4,
        ease: 'easeInOut'
      }}
    >
      <h2 className='text-xl font-bold capitalize opacity-90 hover:opacity-100 transition active:scale-95 select-none'>
        {children}
      </h2>
    </motion.div>
  )
}
