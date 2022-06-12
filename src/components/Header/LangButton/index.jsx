import { IoLanguageSharp } from 'react-icons/io5'
import { hoverEffect } from "../../../styles/hoverEffect.js"
// Remove later
import { useState, useEffect } from "react"

export default function LangButton() {
	const [showMsg, setShowMsg] = useState(false)

	useEffect(() => {
		const timeout = setTimeout(() => {
			setShowMsg(false)
		}, 900)
		return () => clearTimeout(timeout)
	}, [showMsg])

	return (
		<div className="relative">
			<button type="button" title="Change language" onClick={() => setShowMsg(true)} className={`${hoverEffect} text-xl transition-colors p-2`}>
				<IoLanguageSharp />
			</button>
			{showMsg && (
				<div className="absolute right-6 px-4 py-2 bg-slate-200 dark:bg-slate-700 rounded-lg text-md ease-out">
					<p>Comming soon...</p>
				</div>
			)}
		</div>
	)
}