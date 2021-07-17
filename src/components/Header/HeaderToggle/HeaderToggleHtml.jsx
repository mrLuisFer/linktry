export default function HeaderToggleHtml({
  isDarkMode,
  handleClickToggleDarkMode,
  icon
}) {
  return (
    <div className='flex flex-col userNoSelect sm:transition-transform sm:scale-110 md:scale-125'>
      <label
        htmlFor='toggleInput'
        className='inline-flex items-center cursor-pointer'
      >
        <span className='relative'>
          <span className='block w-10 h-6 bg-gray-400 rounded-full shadow-inner'></span>
          <span
            className={`absolute block w-4 h-4 mt-1 ml-1 rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-300 ease-in-out transform dark:bg-green-300  bg-white
                ${isDarkMode ? 'translate-x-4' : '-translate-x-0'}
            `}
          >
            <input
              className=' absolute opacity-0 w-0 h-0'
              id='toggleInput'
              name='toggleInput'
              type='checkbox'
              onChange={handleClickToggleDarkMode}
            />
          </span>
        </span>
        <span className='ml-3 text-xl text-blue-600 dark:text-yellow-300 transform transition-transform hover:scale-110 animate-bounce hover:bg-gray-200 dark:hover:bg-gray-700 p-1 rounded-full'>
          {icon}
        </span>
      </label>
    </div>
  )
}
