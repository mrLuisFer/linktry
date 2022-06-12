import { useLangContext } from "../../../hooks/useLangContext"

export default function LangsSelect() {
	const { language, setLanguage } = useLangContext()

	const handleSelectLang = (e) => {
		const value = e.target.value
		console.log(value)
		setLanguage(value)
	}

	return (
		<dialog className="block backdrop:bg-gray-50 absolute z-20 right-6 px-4 py-2 bg-slate-200 w-52 dark:bg-slate-700 rounded-lg text-md shadow-xl">
			<h1 className="mb-2 text-sm dark:text-gray-100">Change Language</h1>
			<select name="languages" value={language} onChange={(e) => handleSelectLang(e)} className="text-gray-900 font-semibold w-32 p-1 rounded-xl transition-colors bg-slate-100 dark:bg-gray-800 hover:dark:bg-slate-800 dark:text-white outline-none hover:bg-white">
				<option value="es">Spanish</option>
				<option value="en">English</option>
			</select>
		</dialog>
	)
}