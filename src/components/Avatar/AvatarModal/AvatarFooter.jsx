const AvatarFooter = ({ country, state, university }) => {
  return (
    <div className='flex items-center justify-center mx-auto my-3 text-gray-800 gap-x-1 max-w-screen-mb md:max-w-screen-sm dark:text-gray-200'>
      {country.length > 0 && (
        <span title='Country' className='text-xs capitalize'>
          {country}
        </span>
      )}
      {state.length > 0 && (
        <>
          <span>|</span>
          <span title='State' className='text-xs capitalize'>
            {state}
          </span>
        </>
      )}
      {university.length > 0 && (
        <>
          <span>|</span>
          <span title='University' className='text-xs capitalize'>
            {university}
          </span>
        </>
      )}
    </div>
  )
}

export default AvatarFooter
