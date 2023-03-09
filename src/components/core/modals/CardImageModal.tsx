import { motion } from 'framer-motion'
import { useImgModalStore } from 'src/store/imgModalStore'
import Image from 'next/image'
import { IoClose } from 'react-icons/io5'
import { useEffect, useRef } from 'react'
import { Box } from '@chakra-ui/react'

export default function CardImageModal(): JSX.Element {
  const { imgSrc, setIsOpenModal } = useImgModalStore()
  const imgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event): void {
      if (imgRef.current != null && !imgRef.current.contains(event.target)) {
        setIsOpenModal(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [imgRef, setIsOpenModal])

  return (
    <motion.div className='absolute inset-0 h-screen w-screen bg-[#00000035] z-10 flex items-center justify-center cursor-pointer backdrop-blur-sm'>
      <button className='absolute text-4xl top-10 right-20 border-2 rounded-xl text-black hover:text-white hover:bg-slate-900 border-gray-900 transition hover:scale-105 active:scale-95'>
        <IoClose />
      </button>
      <Box ref={imgRef}>
        <Box className='relative w-[1200px] h-[800px] lg:w-[1440px] xl:w-[1600px] xl:h-[900px]'>
          <Image
            src={imgSrc}
            alt='Image Modal'
            className='rounded-xl hover:shadow-xl select-none z-20 cursor-default'
            draggable={false}
            loading='lazy'
            layout='fill'
          />
        </Box>
      </Box>
    </motion.div>
  )
}
