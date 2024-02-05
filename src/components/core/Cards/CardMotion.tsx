import { Flex } from '@radix-ui/themes'
import { motion } from 'framer-motion'

export default function CardMotion({
  children
}: {
  children: any
}): JSX.Element {
  return (
    <motion.div
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
      <Flex align='start' justify='between' gap='3' wrap='wrap'>
        {children}
      </Flex>
    </motion.div>
  )
}
