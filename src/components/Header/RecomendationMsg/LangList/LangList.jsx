import LangListItem from './LangListItem'
import { langs } from '../langs'

export default function LangList({ setLanguage }) {
  const langsArray = Object.keys(langs)

  return (
    <ul>
      {langsArray.map((singleLang) => (
        <LangListItem
          setLanguage={setLanguage}
          lang={singleLang}
          key={singleLang}
        />
      ))}
    </ul>
  )
}
