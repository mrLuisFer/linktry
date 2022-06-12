import { useLangContext } from "../../../hooks/useLangContext"

export default function LangsSelect() {
	const { language, setLanguage } = useLangContext()

	const handleSelectLang = (e) => {
		const value = e.target.value
		console.log(value)
		setLanguage(value)
	}

	return (
		<div className="block absolute z-20 right-6 px-4 py-2 bg-slate-200 w-52 dark:bg-slate-700 rounded-lg text-md">
			<h1>Change Language</h1>
			<select name="languages" value={language} onChange={(e) => handleSelectLang(e)}>
				<option value="es">Spanish</option>
				<option value="en">English</option>
			</select>
		</div>
	)
}