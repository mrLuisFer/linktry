import Layout from '../../components/Layout'
import Img from 'next/image'

export default function Auth() {
	return (
		<section className='bg-gray-100 dark:bg-gray-800 flex gap-x-10 min-h-[100vh]'>
			<Img src='/assets/login-1.jpg' width="620px" height="100%" />
			<div className="relative py-4 px-12 w-full">
				<h2 className="text-4xl">Log in</h2>
			</div>
		</section>
	)
}
