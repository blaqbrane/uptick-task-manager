import React from 'react'
interface TaskHeaderI {
    taskLength: number;
    doneLength: number;
    frozenLength: number;
}
const TaskHeader:React.FC<TaskHeaderI> = ({taskLength,doneLength,frozenLength}) => {
  return (
    <section className='flex flex-col gap-y-5 md:flex-row justify-between gap-x-6'>
                <div className='w-full md:w-[30%] bg-grey-100 shadow-md shadow-[grey] rounded-3xl p-5 flex flex-col gap-y-4'>
                   <p  className='font-bold text-black text-sm'>Data added : <span className='text-black/50 font-normal'> 12/07/2024</span></p>
                   <p  className='font-bold text-black text-sm'>Deadline : <span className='text-black/50 font-normal'> 23/07/2024</span></p>
                   <p  className='font-bold text-black text-sm'>Participants : <span className='text-black/50 font-normal'> Josh,Setra,Mary</span></p>
            
                </div>
                <div className='w-full hidden md:flex md:w-[50%] shadow-md shadow-[grey]  bg-grey-100 rounded-3xl p-5 flex-col gap-y-4'></div>
                <div className='w-full md:w-[20%] shadow-md shadow-[grey]  bg-grey-100 rounded-3xl p-5 flex flex-col gap-y-4'>
                <p  className='font-bold text-black text-sm'>All tasks : <span className='text-black/50 font-normal'> {taskLength}</span></p>
                   <p  className='font-bold text-black text-sm'>Done : <span className='text-black/50 font-normal'> {doneLength}</span></p>
                   <p  className='font-bold text-black text-sm'>Frozen : <span className='text-black/50 font-normal'> {frozenLength}</span></p>
            
                </div>
            </section>
  )
}

export default TaskHeader