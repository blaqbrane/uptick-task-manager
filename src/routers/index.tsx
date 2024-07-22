import { lazy, Suspense } from 'react'
const Home = lazy(() => import('../features/home-page')) 
const TaskManger = lazy(() => import ('../features/dashboard/task-manager')) 
const SignUp  = lazy(() => import ('../features/auth/sign-up')) 
import {Routes, Route } from 'react-router-dom'
import { RoutePaths } from './route-path'
import PublicRoute from './public-routes'
import ProtectedRoutes from './protected-route'
import Loader from '../components/elements/loader'
import { useSelector } from 'react-redux'

const MainRouter = () => {
    const { isLoggedIn } = useSelector((store:any) => store.auth)
    return (
        <Routes>
            <Route path={RoutePaths.HOME} element={
                <PublicRoute redirectPath='/' isAllowed={true} >
                <Suspense fallback={<Loader/>}>
                    <Home/>
                </Suspense>
             </PublicRoute>
            }/>
            <Route path={RoutePaths.SIGNIN} element={
                <PublicRoute redirectPath='/' isAllowed={true} >
                <Suspense fallback={<Loader/>}>
                    <SignUp/>
                </Suspense>
             </PublicRoute>
            }/>
             <Route path={RoutePaths.DASHBOARD} element={
                <ProtectedRoutes redirectPath='/' isAllowed={isLoggedIn} >
                <Suspense fallback = {<Loader/>}>
                   <TaskManger/>
                </Suspense>
             </ProtectedRoutes>
            }/>
        </Routes>
    )
}

export default MainRouter