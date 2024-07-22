import { useState } from "react"
import { taskStage } from "../../../utils/models/task"
import { useDispatch } from "react-redux"
import { closeMoveModal, updateAllTask } from "../../../redux/slices/task-slice"
interface MoveI {
    currentId: number
}
const MoveTaskModal:React.FC<MoveI> = ({ currentId}) => {
    const[stage, setStage] = useState('to-do')
    const dispatch = useDispatch()
   console.log(stage,currentId)
   const updateTask = () => {
    dispatch(updateAllTask({currentId:currentId, stage:stage}))
    // setIsMoved(false)
   }


  return (
    <section className='fixed px-4 flex flex-col justify-center top-0 left-0 w-full h-full z-50 bg-[rgba(32,32,32,0.8)]'>
    <div className='w-full md:w-[500px] mx-auto flex flex-col  px-10 py-4 rounded-xl bg-[white]'>
        <h1 className="text-2xl font-bold mb-3">Update Task Stage</h1>
        <p>Select an option to update task stage to</p>
        <div>
            {
                taskStage.map((item) => (
                    
                    <label key={item.id} htmlFor="rad" className="flex cursor-pointer items-center gap-x-3">
                    <input id="rad" type="radio" value={item.title}  onChange={(e:React.ChangeEvent<HTMLInputElement>) => setStage(e.target.value)} checked={stage === item.title} className="accent-orange-700" />
                    <p>{item.label}</p>
                    </label>
                  
                ))
            }
            
            
        </div>
        <div className='flex gap-x-4 mt-4'>
            <button onClick={() => dispatch(closeMoveModal())} className='px-6 py-1 rounded-md bg-yellow-100'>
                Cancel
            </button>
            <button onClick={updateTask} className='px-6 py-1 rounded-md bg-green-500 text-white'>
                Update
            </button>
        </div>
    </div>
</section>
  )
}

export default MoveTaskModal