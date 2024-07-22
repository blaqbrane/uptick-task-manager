import { Menu, MenuButton, MenuItem } from "@headlessui/react"
import { FaSearch } from "react-icons/fa"
import { MdOutlineMail, MdOutlineNotifications } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux"
import MenuTransition from "../components/elements/menu-transition"
import { logOut } from "../redux/slices/auth"
import { signOut } from "firebase/auth";
import { auth } from "../features/auth/config"
import { useNavigate } from "react-router-dom"
import { FaArrowsToDot } from "react-icons/fa6"

const DashboardNavbar = () => {
  const dispatch = useDispatch()
  const { currentUser } = useSelector((store:any) => store.auth)
  const navigate = useNavigate()
  const logUserOut = () => {
    signOut(auth).then(() => {
      dispatch(logOut())
      navigate('/')
    }).catch((error) => {
      console.log(error)
    });
      
  }
  return (
    <header className=" bg-[#ffedc8]  pb-4  shrink">
        <nav className="flex items-center justify-between lg:justify-between shadow-md shadow-[#c55c5c8e] py-3 px-3 gap-x-5">
            <div className=" hidden lg:flex lg:w-[70%]  bg-white items-center gap-x-2 border rounded-3xl p-2">
                <FaSearch size={21} className="text-grey-100"/>
              <input type="text" placeholder="Search ..." className="bg-inherit outline-none w-full"/>
            </div>
              <div className="flex text-black lg:hidden items-center gap-x-2">
          <FaArrowsToDot size={24} className="text-black"/>
          <h1 className="text-2xl font-serif text-black font-bold">Task Manager</h1>
          </div>
            <div className=" flex items-center gap-x-3 md:gap-x-10">
              <div className="relative cursor-not-allowed">
                <div className="absolute w-2 h-2 left-3 top-1 rounded-full bg-orange-500"/>
                 <MdOutlineNotifications className="" size={24}/>
              </div>

              <div className="relative cursor-not-allowed">
                <div className="absolute w-2 h-2 left-4 rounded-full bg-orange-500"/>
              <MdOutlineMail className="" size={24}/>
              </div>

              <Menu as='div' className="flex  items-center gap-x-3 relative w-[53px]">
                <MenuButton className="flex flex-col items-center justify-center text-white font-bold bg-orange-500 w-10 h-10 rounded-full">
                  {currentUser.email.slice(0,1).toUpperCase()}
                </MenuButton>
                <MenuTransition>
                <div className="block absolute bg-white right-0 mt-8 p-2 rounded-md ">
                  <div className="flex gap-x-3">
                    <h1 className="font-bold">User: </h1>
                  <h3 className="">{currentUser.displayName ? currentUser.displayName : currentUser.email }</h3>
                  </div>
                  <MenuItem>
                  <button onClick={logUserOut} className="px-6 py-2 rounded-2xl mt-6 text-white text-sm bg-red-500">Logout</button>
                  </MenuItem>
                </div>
                </MenuTransition>
              </Menu>
              
            </div>
        </nav>
    </header>
  )
}

export default DashboardNavbar