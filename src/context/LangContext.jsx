import { createContext, useState } from "react"

export const LangContext = createContext(null)

export default function LangContextProvider({children}) {
	const [language, setLanguage] = useState("")

	return (
		<LangContext.Provider value={{ language, setLanguage }}>
			{children}
		</LangContext.Provider>
	)
}
