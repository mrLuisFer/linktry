import { MdDelete } from 'react-icons/md'
import { FiEdit } from 'react-icons/fi'
import { FieldItemProps } from '~/components/dashboard/dashboardTypes'

export default function FieldItem({ username, url, description, editFunc, deleteFunc, clientId, icon }: FieldItemProps) {
  return (
    <div className='my-4 hover:bg-gray-300 dark:hover:bg-gray-800 px-2 py-1 rounded-md flex items-center justify-between'>
      <div>
        {icon}
      </div>
      <div>
        <p className='text-base'>{username}</p>
        <p className='break-words text-lg'>{description}</p>
      </div>
      <div className='flex flex-col gap-2 text-xl'>
        <div onClick={() => deleteFunc(clientId)}>
          <ActionBtn title='Delete'>
            <MdDelete />
          </ActionBtn>
        </div>
        <div onClick={() => editFunc(clientId)}>
          <ActionBtn title='Edit'>
            <FiEdit />
          </ActionBtn>
        </div>
      </div>
    </div>
  )
}

function ActionBtn({ children, title }: { children: any; title: string }) {
  return (
    <div
      className='p-2 hover:bg-gray-600 rounded-lg hover:shadow-sm hover:text-white select-none transform active:scale-95'
      title={title}
    >
      {children}
    </div>
  )
}
