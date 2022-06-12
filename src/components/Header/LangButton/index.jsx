import { IoLanguageSharp } from 'react-icons/io5'
import { hoverEffect } from "../../../styles/hoverEffect"
import LangsSelect from "./LangsSelect"
// Remove later
import { useState, useEffect } from "react"

export default function LangButton() {
	const [showMsg, setShowMsg] = useState(false)

	useEffect(() => {
		const timeout = setTimeout(() => {
			setShowMsg(false)
		}, 9000)
		return () => clearTimeout(timeout)
	}, [showMsg])

	return (
		<div className="relative">
			<button type="button" title="Change language" onClick={() => setShowMsg((prevState) => !prevState)} className={`${hoverEffect} text-xl transition-colors p-2`}>
				<IoLanguageSharp />
			</button>
			{showMsg && (
				<LangsSelect />
			)}
		</div>
	)
}