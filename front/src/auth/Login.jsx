import React, { useState } from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { LuLoader2 } from "react-icons/lu";
import {Link, useNavigate} from "react-router-dom"
import axiosInstance from '../axios';

 const Login = () => {
  const [formdata,setFormdata]=useState({
    email:"",
    password:""
  })
  const [loader,setLoader]=useState(false)
  const [error, setError] = useState(null);
  const navigate=useNavigate()

  const handlechange=(e)=>{
    setFormdata({...formdata,[e.target.id]:e.target.value})
  }
  const submitHandler=async(e)=>{
    e.preventDefault();
    setError(null)
    try {
      setLoader(true);
      const res=await axiosInstance.post(`/api/user/login`,formdata,{
        
        headers:{"Content-Type":"application/json"},
        withCredentials:true
        
      });
      
      
      navigate('/');
    } catch (error) {
      setError(error.response?.data?.message || 'Signin failed. Try again.');
      console.log(error);
    }finally{
      setLoader(false);
    }
    
  }
  
  
  
  return (
    <div className='flex items-center justify-center min-h-screen w-full'>
      <form onSubmit={submitHandler} className='md:p-10  max-w-md rounded-lg md:border border-gray-300 mx-4 text-center'>
        <div className="mb-4 flex flex-col">
          <h1 className='font-bold text-3xl underline'>Foody</h1>
          {error && <p className='text-red-600 mb-4'>{error}</p>}
        </div>
        <div className="mb-4">
        <div className="relative">
        <input type="email" id='email' value={formdata.email} onChange={handlechange} placeholder='Email' className='p-2  pl-10 border border-gray-200' />
        <MdOutlineEmail className='absolute inset-y-2 left-2 text-gray-500 text-2xl'/> 
        </div>
        </div>
        <div className="mb-4">
        <div className="relative">
        <input type="password" id='password' value={formdata.password} onChange={handlechange} placeholder='Password' className='p-2  pl-10 border border-gray-200' />
        <RiLockPasswordLine className='absolute inset-y-2 left-2 text-gray-500 text-2xl'/>
        </div>
        </div>
        <div className="mb-8 ">
          {
            loader?<button disabled={loader} className='p-2 bg-slate-700 text-white w-full flex items-center justify-center'><LuLoader2 className='mr-2 h-4 w-4 animate-spin'/>wait..</button>:<button type='submit' className='p-2 bg-slate-700 text-white w-full'>Login</button>
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