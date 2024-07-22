
import React, { useState } from 'react'
import { useDispatch} from 'react-redux'
import { closeCreateM, createTask } from '../../../redux/slices/task-slice'
const CreateModal = () => {
    const[title, setTitle] = useState<string>('')
    const[participant, setParticipant] = useState<string>('')
    const[desc, setDesc] = useState<string>('')
    const dispatch = useDispatch()

    const id = Math.floor(Math.random() * 1000000) + 1
  return (
    <section className='fixed px-4 flex flex-col justify-center top-0 left-0 w-full h-full z-50 bg-[rgba(32,32,32,0.8)]'>
        <div className='w-full md:w-[500px] mx-auto flex flex-col  px-10 py-4 rounded-xl bg-[white]'>
            <h1 className='font-bold text-2xl'>Create New Task</h1>
            <div>
                <div className='flex flex-col mt-2 mb-3'>
                    <label className='font-bold'>Title</label>
                    <input type='text' className='py-2 outline-none px-2 bg-grey-100 rounded-md' placeholder='Enter title' value={title} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} />
                
                </div>
                <div className='flex flex-col mt-2 mb-3'>
                    <label className='font-bold'>Description</label>
                    <textarea className='py-2 px-2 outline-none h-[200px] bg-grey-100 rounded-md' placeholder='Enter desc' value={desc} onChange={(e:React.ChangeEvent<HTMLTextAreaElement>) => setDesc(e.target.value)} />
                </div>
                <div className='flex flex-col mt-2 mb-3'>
                    <label className='font-bold'>Assign</label>
                    <input type='text' className='py-2 px-2 outline-none bg-grey-100 rounded-md' placeholder='Add assignee' value={participant} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setParticipant(e.target.value)} />
                
                </div>
            </div>
            <div className='flex gap-x-4 mt-4'>
                <button onClick={() => dispatch(closeCreateM())} className='px-6 py-1 rounded-md bg-yellow-100'>
                    Cancel
                </button>
                <button onClick={() => dispatch(createTask({title:title, desc:desc, Participant:participant, id:id}))}  className='text-white px-6 py-1 rounded-md bg-red-500'>
                    Create
                </button>
            </div>
        </div>
    </section>
  )
}

export default CreateModal