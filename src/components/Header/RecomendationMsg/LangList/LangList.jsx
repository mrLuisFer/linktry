import LangListItem from "./LangListItem"

export default function LangList({ setLanguage }) {
  const langs = ["Spanish", "English"]

  return (
    <ul>
      {langs.map((singleLang) => (
        <LangListItem
          setLanguage={setLanguage}
          lang={singleLang}
          key={singleLang}
        />
      ))}
    </ul>
  )
}
