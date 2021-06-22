export default function Footer() {
  return (
    <div className='mt-9 w-full'>
      <div className='h-1 w-full bg-gray-200 dark:bg-gray-700 sm:rounded' />
      <p className='py-4 text-center text-xs font-light'>
        Created with{' '}
        <span className='text-blue-600 dark:text-blue-400 font-semibold animate-pulse'>
          React
        </span>{' '}
        by{' '}
        <span className='text-green-500 dark:text-green-300 font-semibold animate-pulse'>
          mrLuisFer
        </span>
      </p>
    </div>
  )
}
