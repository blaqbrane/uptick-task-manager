import { combineReducers, configureStore } from "@reduxjs/toolkit";
import TaskSlice from '../slices/task-slice'
import AuthSlice from '../slices/auth'
import { WebStorage, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

interface PersitConfig {
    key: string
    storage: WebStorage
  }
  
  export const persistConfig: PersitConfig = {
    key: 'root',
    storage: storage,
  }

  const rootReducer = combineReducers({
    tasks: TaskSlice,
    auth : AuthSlice
  })

  const persistedReducer = persistReducer(persistConfig, rootReducer)

// const getMiddlewares = (getDefaultMiddlewares: any) => {
 
//   return getDefaultMiddlewares()
// }

export const store = configureStore({
    reducer: persistedReducer, 
    // middleware: getMiddlewares,
})



