import { Box } from '@radix-ui/themes'
import type { PropsWithChildren } from 'react'

export default function CardContainer({
  customClassName,
  children
}: PropsWithChildren<{
  customClassName?: string
}>) {
  return (
    <Box
      className={`${
        customClassName ?? ''
      } transition p-3 rounded-lg hover:rounded-xl hover:shadow-md border-2 border-gray-200 dark:border-gray-600 min-w-max h-fit`}
    >
      {children}
    </Box>
  )
}
