export default function LangListItem({ lang = '', setLanguage }) {
  return (
    <li
      onClick={() => setLanguage(`${lang.toLocaleLowerCase()}`)}
      className='capitalize text-sm transform hover:scale-110 cursor-pointer ml-2 mt-2 select-none'
    >
      {lang}
    </li>
  )
}
