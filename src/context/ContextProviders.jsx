import LangContext from "./LangContext"

export default function ContextProviders({ children }) {
	return (
		<LangContext>
			{children}
		</LangContext>
	)
}