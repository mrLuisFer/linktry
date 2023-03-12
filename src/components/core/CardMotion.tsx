import { motion } from 'framer-motion'

export default function CardMotion({
  children
}: {
  children: any
}): JSX.Element {
  return (
    <motion.div
      className='relative h-fit w-fit basis-auto'
      initial={{
        opacity: 0,
        scale: 0,
        translateX: 300,
        translateY: -100,
        width: 'fit-content'
      }}
      animate={{ opacity: 1, scale: 1, translateX: 0, translateY: 0 }}
      transition={{ duration: 0.5 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.div>
  )
}
