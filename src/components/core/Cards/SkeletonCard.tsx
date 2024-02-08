import { Skeleton } from '@chakra-ui/react'
import CardMotion from './CardMotion'

export default function SkeletonCard(): JSX.Element {
  return (
    <CardMotion>
      <div className='mockup-window border bg-base-300'>
        <div className='flex justify-center bg-base-200'>
          <Skeleton height={[200, 200]} width={[300, 450]} />
          <span className='absolute top-1/2 font-bold opacity-75 select-none'>
            Loading....
          </span>
        </div>
      </div>
    </CardMotion>
  )
}
