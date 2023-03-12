import { create } from 'zustand'

interface ImgModalStore {
  imgSrc: string
  setImgSrc: (newImgSrc: string) => void
  isOpenModal: boolean
  setIsOpenModal: (newIsOpenModal: boolean) => void
}

export const useImgModalStore = create<ImgModalStore>((set) => ({
  imgSrc: '',
  setImgSrc: (newImgSrc: string) => {
    set(() => ({ imgSrc: newImgSrc }))
  },
  isOpenModal: false,
  setIsOpenModal: (newIsOpenModal: boolean) => {
    set(() => ({ isOpenModal: newIsOpenModal }))
  }
}))
