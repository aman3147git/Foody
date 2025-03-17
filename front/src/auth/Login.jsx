import React, { useState } from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { LuLoader2 } from "react-icons/lu";
import {Link} from "react-router-dom"

 const Login = () => {
  const [formdata,setFormdata]=useState({
    email:"",
    password:""
  })
  const handlechange=(e)=>{
    setFormdata({...formdata,[e.target.id]:e.target.value})
  }
  const submitHandler=(e)=>{
    e.preventDefault();
    console.log(formdata);
  }
  
  
  const loading=false;
  return (
    <div className='flex items-center justify-center min-h-screen w-full'>
      <form onSubmit={submitHandler} className='md:p-10  max-w-md rounded-lg md:border border-gray-300 mx-4 text-center'>
        <div className="mb-4 ">
          <h1 className='font-bold text-3xl'>Foody</h1>
        </div>
        <div className="mb-4">
        <div className="relative">
        <input type="email" id='email' value={formdata.email} onChange={handlechange} placeholder='Email' className='p-2  pl-10 focus-visible:ring-1 ' />
        <MdOutlineEmail className='absolute inset-y-2 left-2 text-gray-500 text-2xl'/> 
        </div>
        </div>
        <div className="mb-4">
        <div className="relative">
        <input type="password" id='password' value={formdata.password} onChange={handlechange} placeholder='Password' className='p-2  pl-10 focus-visible:ring-1' />
        <RiLockPasswordLine className='absolute inset-y-2 left-2 text-gray-500 text-2xl'/>
        </div>
        </div>
        <div className="mb-8 ">
          {
            loading?<button disabled className='p-2 bg-slate-700 text-white w-full flex items-center justify-center'><LuLoader2 className='mr-2 h-4 w-4 animate-spin'/>wait..</button>:<button type='submit' className='p-2 bg-slate-700 text-white w-full'>Login</button>
          }
          <Link to="/forgot-password" className='text-red-400'>Forgot Password?</Link>
        </div>
        <hr className='border-gray-400'/>
        <p className=''>Dont't have an account? <Link className='text-blue-600 hover:underline' to="/signup">Register</Link></p>
      </form>
    </div>
  )
}

export default Login