import { Menu, MenuButton, MenuItem } from '@headlessui/react'
import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { FaPencilAlt } from 'react-icons/fa'
import { MdDelete, MdOutlineRemove } from 'react-icons/md'
import MenuTransition from '../../../components/elements/menu-transition'
import { TaskI } from '../../../types/task'
import { useDispatch } from 'react-redux'
import { getActiveTaskId, openEditSingleM, viewDetail } from '../../../redux/slices/task-slice'

interface TaskCardI {
    item : TaskI
    openEditModal: (value: number) => void;
    openDeleteModal: (value: number) => void;
   openUpdateModal: (value: number) => void;
  
}
const TaskCard:React.FC<TaskCardI> = ({item, openDeleteModal,openUpdateModal}) => {
  const dispatch = useDispatch()
  return (
    <div key={item.id} className="bg-white shadow-md shadow-[grey] rounded-xl p-2 text-sm">
    <div className="flex justify-between items-center">
      <h1 className="font-bold text-sm">{item.title}</h1>
      <Menu as="div" className="relative cursor-pointer ">
        <MenuButton>
          <BsThreeDotsVertical size={14} onClick={() => dispatch(getActiveTaskId(item.id))} />
        </MenuButton>

        <MenuTransition>
          <div className="absolute flex flex-col gap-y-3 z-50 right-0 p-2 w-40 bg-white rounded-md">
           
            <MenuItem>
              <p
                onClick={() => dispatch(openEditSingleM(item))}
                className="flex items-center gap-x-2 text-orange-500"
              >
                <FaPencilAlt /> Edit{" "}
              </p>
            </MenuItem>
            <MenuItem>
              <p
                onClick={() => openDeleteModal(item.id)}
                className="flex items-center gap-x-2 text-red-500"
              >
                <MdDelete /> Delete{" "}
              </p>
            </MenuItem>
            <MenuItem>
              <p
                onClick={() =>openUpdateModal(item.id)}
                className="flex items-center gap-x-2"
              >
                <MdOutlineRemove /> Move{" "}
              </p>
            </MenuItem>
          </div>
        </MenuTransition>
      </Menu>
    </div>
    <p className="font-bold text-gray-500 text-sm mt-2">
      Assignee :{" "}
      <span className="text-black/50 font-semibold">
        {item.Participant}
      </span>
    </p>
    <p className="font-bold text-gray-500 text-sm">
      Date added :{" "}
      <span className="text-black/50 font-semibold">12th May 2024</span>
    </p>

    <button onClick={() => dispatch(viewDetail(item))} className='bg-gradient-to-r text-white from-orange-500 via-pink-500 to-red-500 shadow-md shadow-[grey] px-3 py-1 rounded-2xl mt-3 text-xs '>
      View
    </button>
  </div>
  )
}

export default TaskCard