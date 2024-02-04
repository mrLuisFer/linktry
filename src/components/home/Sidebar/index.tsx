import Header from './Header'
import Footer from './Footer'
import Avatar from './Avatar'

export interface IQuickContactItem {
  icon: any
  link: string
  label: string
}

export default function Sidebar(): JSX.Element {
  return (
    <div className='bg-white dark:bg-zinc-800 min-h-screen w-auto text-gray-900 dark:text-slate-100 px-6 lg:pl-32 lg:pb-8 transition group grid grid-rows-[100px_1fr_50px]'>
      <Header />
      <Avatar />
      <Footer />
    </div>
  )
}
