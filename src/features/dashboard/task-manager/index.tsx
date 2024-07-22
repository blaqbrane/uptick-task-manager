import { MdOutlineArrowForwardIos } from 'react-icons/md'
import { useState } from 'react'
import { TaskI } from '../../../types/task'
import EditTask from '../../../components/elements/modals/edit-task-modal'
import MoveTaskModal from '../../../components/elements/modals/move-task-modal'
import Todo from './todo'
import InProgress from './in-progress'
import Done from './done'
import Frozen from './frozen'
import TaskHeader from './header'
import { useDispatch, useSelector } from 'react-redux'
import { openCreateM, openDeleteM, openMoveModal } from '../../../redux/slices/task-slice'
import DeleteTaskModal from '../../../components/elements/modals/delete-task-modal'
import DetailsModal from '../../../components/elements/modals/details-modal'
import CreateModal from '../../../components/elements/modals/create-task-modal'


const TaskManger = () => {
    const { allTaskList, isMove, isDelete, isCreate, isDetail, isEditSingle} = useSelector((store:any) => store.tasks)

    const[currentTaskId, setCurrentTaskId] = useState<number>(0)

    const todoTask = allTaskList.filter((item: TaskI) => item.category === 'to-do')
    const inProgress = allTaskList.filter((item: TaskI) => item.category === 'in-progress')
    const done = allTaskList.filter((item: TaskI) => item.category === 'done')
    const frozen = allTaskList.filter((item: TaskI) => item.category === 'frozen')
    
    const dispatch = useDispatch()
    const openDeleteModal = (id:number) => {
          setCurrentTaskId(id)
          dispatch(openDeleteM())
        
    }
    const openEditModal = (id:number) => {
        setCurrentTaskId(id)  
    }
    const openUpdateModal = (id:number) => {
        setCurrentTaskId(id)
        dispatch(openMoveModal())
    }

    
  return (
    <section className='p-6 font-serif'>
        <p className='flex items-center gap-x-2 text-gray-400'>Todo <MdOutlineArrowForwardIos /></p>
        <h1 className='font-bold mt-8 text-2xl md:text-4xl text-black'>Project Name</h1>
        <div className='mt-10'>
            <TaskHeader taskLength={allTaskList.length} doneLength={done.length} frozenLength={frozen.length}/>
            {/* down */}
            
              
              <button onClick={() => dispatch(openCreateM())} className='block  lg:hidden bg-gradient-to-r text-white from-orange-500 via-pink-500 to-red-500 shadow-md shadow-[grey] px-5 py-2 rounded-2xl mt-5 text-xs '>Add New Task</button>
            
            <section className='grid md:grid-cols-3 lg:grid-cols-4 gap-y-5 gap-x-2 mt-8 mb-5 md:mb-2 '>
                <div className=' bg-grey-100 shadow-md shadow-[grey]  rounded-xl p-3 flex flex-col gap-y-4'>
                 <Todo todoTask={todoTask} openUpdateModal={openUpdateModal} openDeleteModal={openDeleteModal} openEditModal={openEditModal}/>
                </div>
                {/* 2nd */}
                <div className=' bg-grey-100 shadow-md shadow-[grey]  rounded-xl p-3 flex flex-col gap-y-4'>
                  <InProgress inProgress ={inProgress} openUpdateModal={openUpdateModal} openDeleteModal={openDeleteModal} openEditModal={openEditModal}/>
                </div>
                {/* 3rd */}
                <div className=' bg-grey-100 shadow-md shadow-[grey]  rounded-xl p-3 flex flex-col gap-y-4'>
                    <Done done={done} openUpdateModal={openUpdateModal} openDeleteModal={openDeleteModal} openEditModal={openEditModal}/>
                </div>
                {/* 4th */}
                <div className=' bg-grey-100 shadow-md shadow-[grey]  rounded-xl p-3 flex flex-col gap-y-4'>
                    <Frozen frozen = {frozen} openUpdateModal={openUpdateModal} openDeleteModal={openDeleteModal} openEditModal={openEditModal}/>
                </div>
            </section>
        </div>
        {isEditSingle && <EditTask/>}
        {isMove && <MoveTaskModal currentId={currentTaskId} />}
        {isDelete && <DeleteTaskModal currentId={currentTaskId}/>}
        {isDetail && <DetailsModal/>}
        {isCreate && <CreateModal/>}
    </section>
  )
}

export default TaskManger