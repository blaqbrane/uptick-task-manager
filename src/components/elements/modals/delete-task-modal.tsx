import { useDispatch } from "react-redux"
import { closeDeleteM, deleteTask } from "../../../redux/slices/task-slice"


interface DeleteI {
    currentId :number
}

const DeleteTaskModal:React.FC<DeleteI> = ({currentId}) => {
    const dispatch = useDispatch()
  return (
    <section className='fixed px-4  flex flex-col justify-center top-0 left-0 w-full h-full z-50 bg-[rgba(32,32,32,0.8)]'>
        <div className='w-full md:w-[500px] mx-auto flex flex-col items-center px-10 py-4 rounded-xl bg-[white]'>
            <h1>Are you sure you want to delete task </h1>
            <div className='flex gap-x-4 mt-4'>
                <button onClick={() => dispatch(closeDeleteM())}  className='px-6 py-1 rounded-md bg-yellow-100'>
                    Cancel
                </button>
                <button onClick={() => dispatch(deleteTask(currentId))} className='px-6 py-1 rounded-md bg-red-500'>
                    Remove
                </button>
            </div>
        </div>
    </section>
  )
}

export default DeleteTaskModal