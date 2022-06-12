import { useLangContext } from "./useLangContext"

export const useUserDescription = (descriptionObj) => {
	const { language } = useLangContext()

	const description = descriptionObj[language]

	if(description === undefined) {
		return descriptionObj
	}

	return description
}