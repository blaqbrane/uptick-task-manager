import { createSlice } from "@reduxjs/toolkit";
import { single } from "../../utils/models/task";
import { TaskI } from "../../types/task";


export interface InitialStateI {
    allTaskList : TaskI[]
    singleTask : TaskI
    isMove : boolean
    isDelete : boolean
    isEdit : boolean
    isDetail : boolean
    isCreate : boolean
    isEditSingle :boolean
    activeId : number

}
const initialState:InitialStateI  = {
    allTaskList : [], 
    singleTask : single,
    isMove: false,
    isDelete : false,
    isEdit : false,
    isDetail : false,
    isEditSingle :false,
    isCreate: false,
    activeId : 0
}

const TaskSlice = createSlice({
    name:'task',
    initialState,
    reducers:{
        updateAllTask: ((state, {payload}) => {
            const newTaskList = state.allTaskList.map((item) => (
                item.id === payload.currentId ? {...item, category:payload.stage} : item
            ))
            state.allTaskList = newTaskList
            state.isMove = false
        }),

        deleteTask : ((state, {payload}) => {
           const filtered = state.allTaskList.filter((item) => item.id !== payload)
           state.allTaskList = filtered
           state.isDelete = false
        }),
        viewDetail : ((state,{payload}) => {
           state.isDetail = true
           state.singleTask = payload
        }),
        editTask : ((state, {payload}) => {
            const newTaskList = state.allTaskList.map((item) => (
                item.id === state?.activeId ? {...item, title:payload.title, desc:payload.desc} : item
            ))
            state.allTaskList = newTaskList
            state.isEditSingle = false
        }),
        createTask : ((state, {payload}) => {
               state.allTaskList = [...state.allTaskList, {...payload,dateCreated : '7/10/2024',category: 'to-do' }]
               state.isCreate = false
            }),

        getActiveTaskId : ((state, {payload}) => {
              state.activeId = payload
        }),
        openMoveModal: ((state) => {
            state.isMove = true
        }),
        closeMoveModal: ((state) => {
            state.isMove = false
        }),
        openDeleteM: ((state) => {
            state.isDelete = true
        }),
        closeDeleteM: ((state) => {
            state.isDelete = false
        }),
        openEditM: ((state) => {
            state.isEdit = true
        }),
        closeEditM: ((state) => {
            state.isEdit = false
        }),
        openDetailM: ((state) => {
            state.isDetail = true
        }),
        closeDetailM: ((state) => {
            state.isDetail = false
        }),
        openEditSingleM: ((state,{payload}) => {
            state.isEditSingle = true
            state.singleTask = payload
        }),
        closeEditSingleM: ((state) => {
            state.isEditSingle = false 
        }),
         openCreateM: ((state) => {
            state.isCreate = true
        }),
        closeCreateM: ((state) => {
            state.isCreate = false
        }),

    }
})
export default TaskSlice.reducer
export const Tasks = (state: InitialStateI) => state.allTaskList;
export const { updateAllTask,createTask,openEditSingleM, closeEditSingleM,openCreateM,closeCreateM, getActiveTaskId,editTask, openMoveModal, viewDetail, openDetailM,closeDetailM,closeMoveModal, closeDeleteM,closeEditM,openDeleteM,openEditM, deleteTask } = TaskSlice.actions
