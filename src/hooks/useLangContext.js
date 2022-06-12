import { useContext } from "react"
import { LangContext } from "../context/LangContext"

export const useLangContext = () => {
	const { language, setLanguage } = useContext(LangContext)
	if (language === undefined || setLanguage === undefined) {
		throw new Error("useLangContext must be used within a LangContext")
	}

	return { language, setLanguage }
}