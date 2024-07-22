 import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./config";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUser } from "../../redux/slices/auth";
import { FaArrowsToDot } from "react-icons/fa6";
import { FiLoader } from "react-icons/fi";

// const auth = getAuth();

  const SignIn = () => {
    const dispatch = useDispatch()
    const[email, setEmail]  = useState('')
    const[password, setPassword]  = useState('')
    const[isLoading, setIsLoading]  = useState(false)
    const navigate = useNavigate()
     const handleSubmit = (e:any) => {
        setIsLoading(true)
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          setIsLoading(false)
          const user = userCredential.user;
          dispatch(getUser(user))
          navigate('/dashboard')
          console.log('logged',user)
          // ...
        })
        .catch((error) => {
           console.log(error)

        });
     }
    return (
        <section
         className="px-6 py-4">
             <div className="flex text-black items-center gap-x-2">
          <FaArrowsToDot size={24} className="text-orange-500"/>
          <h1 className="text-2xl font-serif text-black font-bold">Task <span className="text-orange-500">Manager</span></h1>
          </div>
      <div className=" max-w-[600px] px-4 mx-auto flex flex-col justify-center min-h-screen">
      

        <form onSubmit={ handleSubmit} className="md:w-[500px] shadow-md rounded-lg shadow-[grey] p-4">
              <h2 className="font-bold text-2xl text-center">SIGN IN</h2>
              <div className='flex flex-col mt-2 mb-3'>
                    <label className='font-bold'>Email</label>
                    <input type='email' className='py-2 outline-none px-2 bg-grey-100 rounded-md' placeholder='Enter email ...' value={email} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
                
                </div>
                <div className='flex flex-col mt-2 mb-3'>
                    <label className='font-bold'>Password</label>
                    <input type='password' className='py-2 outline-none px-2 bg-grey-100 rounded-md' placeholder='Enter password ...' value={password} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
                
                </div>

               <button disabled={email.length < 5 || password.length < 4} className={`${email.length < 5 || password.length < 4 ? 'opacity-50 cursor-not-allowed' :'opacity-100'} bg-orange-500 text-white px-4 py-2 rounded-md `}>{isLoading ? <FiLoader className="animate-spin text-white"/> : 'Sign In'}</button>
        </form>
        <p className="mt-3">Don't have an account <span className="text-orange-500"><Link to='/signup'>Sign Up</Link></span></p>
      </div> 
      </section>
    )
  }
  
  export default SignIn