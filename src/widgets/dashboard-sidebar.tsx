import { useDispatch } from "react-redux"
import { openCreateM } from "../redux/slices/task-slice"
import {FaArrowsToDot} from 'react-icons/fa6'

const DashboardSidebar = () => {
  const dispatch = useDispatch()
  return (
    <aside className="">
        <div className="flex items-center gap-x-2">
         <FaArrowsToDot size={24} className="text-white"/>
        <h1 className="text-2xl font-serif text-white font-bold">Task Manager</h1>
        </div>

        <div className="mt-20">
            <div className="flex items-center gap-x-2 bg-grey-100 py-2 rounded-2xl pl-3">
              <div className="w-2 h-2 rounded-full bg-orange-500"/>
              <p>Task</p>
            </div>
            <div onClick={() => dispatch(openCreateM())} className="flex cursor-pointer mt-3 items-center gap-x-2 bg-grey-100 py-2 rounded-2xl pl-3">
              <div className="w-2 h-2 rounded-full bg-orange-500"/>
              <button>Add Task</button>
            </div>
        </div>
    </aside>
  )
}

export default DashboardSidebar