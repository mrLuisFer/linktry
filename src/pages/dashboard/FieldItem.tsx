import { MdDelete } from 'react-icons/md'
import { FiEdit } from 'react-icons/fi'

export default function FieldItem({ username, url, description }) {
	return (
		<div className='my-4 hover:bg-gray-300 dark:hover:bg-gray-800 px-4 py-3 rounded-md flex items-center justify-between'>
			<div className=''>
				<p>{username}</p>
				<p>{url}</p>
				<p>{description}</p>
			</div>
			<div className='flex flex-col gap-4 text-xl'>
				<ActionBtn title="Delete">
					<MdDelete />
				</ActionBtn>
				<ActionBtn title="Edit">
					<FiEdit />
				</ActionBtn>
			</div>
		</div>
	)
}

function ActionBtn({ children, title }: {children: any, title: string}) {
	return <div className='p-2 hover:bg-gray-600 rounded-lg hover:shadow-sm hover:text-white select-none transform active:scale-95' title={title}>{children}</div>
}
