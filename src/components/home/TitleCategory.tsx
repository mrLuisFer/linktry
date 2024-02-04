import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Heading } from '@radix-ui/themes'

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
      <Heading as='h2' id={id} color='blue'>
        {children}
      </Heading>
      <div className='w-full h-[2px] bg-slate-900 opacity-5 rounded-xl'></div>
    </motion.div>
  )
}
