export default function Layout({ children }) {
  return (
    <section className='text-gray-900 bg-gray-100 dark:bg-gray-800 dark:text-gray-50'>
      <div className='sm:mx-auto min-h-screen md:w-3/5'>{children}</div>
    </section>
  )
}
