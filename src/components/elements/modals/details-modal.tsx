
import { closeDetailM } from '../../../redux/slices/task-slice'
import { useDispatch, useSelector } from 'react-redux'
import { FaTimesCircle } from 'react-icons/fa'

const DetailsModal = () => {
    const { singleTask } = useSelector((store:any) => store.tasks)
    const dispatch = useDispatch()
  return (
    <section className='fixed px-4  flex flex-col justify-center top-0 left-0 w-full h-full z-50 bg-[rgba(32,32,32,0.8)]'>
    <div className='w-full md:w-[500px] mx-auto flex flex-col px-10 py-4 rounded-xl bg-[white]'>
        <button className='flex flex-col justify-end ml-auto' onClick={() => dispatch(closeDetailM())} ><FaTimesCircle className='text-red-500'/></button>
        <h1><span className='font-bold text-black'>Title : </span> {singleTask?.title} </h1>
        <p className='mt-3'>
        <span className='font-bold text-black'>Description : </span> {singleTask?.desc} 
        </p>
     
    </div>
</section>
  )
}

export default DetailsModal