import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

export default function TitleCategory({
  children,
  id
}: {
  children: ReactNode
  id: string
}): JSX.Element {
  return (
    <motion.div
      className='flex justify-start mb-4 text-left flex-col items-start'
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
      <h2
        className='text-xl font-bold capitalize opacity-90 hover:opacity-100 transition select-none dark:text-gray-200 dark:hover:text-gray-100'
        id={id}
      >
        {children}
      </h2>
      <div className='w-full h-[2px] bg-slate-900 opacity-5 rounded-xl'></div>
    </motion.div>
  )
}
