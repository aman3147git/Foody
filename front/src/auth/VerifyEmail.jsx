import React, { useRef, useState } from 'react'
import { LuLoader2 } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom'

const VerifyEmail = () => {
    const [otp,setOtp]=useState(["","","","","",""])
    const userRef=useRef([]);
    const navigate=useNavigate()
    const loading=false;
    const handlechange=(index,value)=>{
        if(/^[a-zA-Z0-9]$/.test(value) || value===""){
            const newotp=[...otp];
            newotp[index]=value;
            setOtp(newotp);
        }
        if(value!=="" && index<5){
            userRef.current[index+1].focus()
        }
    }
    const handlekeyback=(index,e)=>{
        if(e.key==="Backspace" && !otp[index] && index>0){
            userRef.current[index-1].focus()
        }
    }
  return (
    <div className='flex items-center justify-center min-h-screen w-full'>
        <div className="p-8 rounded-md w-full max-w-md flex flex-col gap-10 md:border border-gray-500">
            <div className="text-center">
                <h1 className='font-extrabold text-2xl'>Verify Email</h1>
                <p className='text-sm text-gray-500'>Enter 6 digit code send to your email</p>
            </div>
            <form>
                <div className="flex justify-between md:gap-2">
                    {
                        otp.map((item,index)=>(
                            <input key={index} maxLength={1} ref={(element)=>(userRef.current[index]=element)} type="text" value={item} onChange={(e)=>handlechange(index,e.target.value)} onKeyDown={(e)=>handlekeyback(index,e)} className=' md:w-12 md:h-12 w-8 h-8 text-center text-sm md:text-2xl border border-gray-400 rounded-lg focus:outline-none' />
                        ))
                    }
                </div>
                <div className="mt-4">
                {
                loading?<button disabled className='p-2 bg-slate-700 text-white w-full flex items-center justify-center'><LuLoader2 className='mr-2 h-4 w-4 animate-spin'/>wait..</button>:<button type='submit' className='p-2 bg-slate-700 text-white w-full'>Verify</button>
                }
                </div>
            </form>
        </div>
    </div>
  )
}

export default VerifyEmail