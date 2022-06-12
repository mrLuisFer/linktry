import HeaderToggle from './HeaderToggle/HeaderToggle'
import LangButton from './LangButton'

export default function Header() {
  return (
    <section className='flex items-center justify-between pt-5 px-0 mx-auto w-60 mb:w-80 sm:w-full'>
      <h1 className='text-base md:text-lg font-medium cursor-pointer opacity-80 hover:opacity-100 transition-opacity flex items-center gap-x-2'>
        <img
          src="/assets/linktree.svg"
          alt='Linktry Logo'
          className='animate-pulse h-8 w-8'
          title='Linktry'
        />
        <span>Linktry</span>
      </h1>
      <div className="flex items-center gap-x-6">
        <LangButton />
        <HeaderToggle />
      </div>
    </section>
  )
}
