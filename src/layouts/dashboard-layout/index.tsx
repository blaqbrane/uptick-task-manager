import React, { ReactNode } from 'react'
import DashboardNavbar from '../../widgets/dasboard-nav'
import DashboardSidebar from '../../widgets/dashboard-sidebar'
interface LayoutI {
    children:ReactNode
}
const DashboardLayout:React.FC<LayoutI> = ({children}) => {
  return (
    <div className='flex flex-row  '>
        <div className='hidden lg:block md:w-[300px] rounded-l-xl py-4 px-6 bg-black shadow-2xl shadow-[grey] h-screen'>
          <DashboardSidebar/>
        </div>
        <div className='w-full md:flex-1 h-screen overflow-y-scroll bg-[#ffedc8]'>
        <DashboardNavbar/>
        <div className='pb-3 md:pb-20 bg-[#ffedc8]'> 
        {/* [#faf2e2]  [#f5ddad]*/}
            {children}
        </div>
        </div>
       
    </div>
  )
}

export default DashboardLayout