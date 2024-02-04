import type { IconType } from 'react-icons'
import type { MouseEventHandler, ReactNode } from 'react'
import { IconButton, Tooltip } from '@radix-ui/themes'

export default function HeaderBtn({
  Icon,
  title,
  onClick,
  className = ''
}: {
  Icon: IconType | JSX.Element
  title: string
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined
  className?: string
}): JSX.Element {
  if (Icon == null) return <></>
  return (
    <Tooltip content={title}>
      <IconButton
        // className={`bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 hover:dark:bg-gray-700 text-black dark:text-gray-100 w-fit h-fit rounded-lg p-2 hover:shadow-sm text-lg cursor-pointer hover:brightness-95 transition focus:outline-none text-center active:scale-95 ${className}`}
        title={title}
        onClick={onClick}
        data-tooltip-target='tooltip-default'
      >
        {Icon as unknown as ReactNode}
      </IconButton>
    </Tooltip>
  )
}
