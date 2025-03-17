import React, { useRef, useState } from 'react'
import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineLocationSearching } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { TbWorld } from "react-icons/tb";
import { LuLoader2 } from "react-icons/lu";

const Profile = () => {
    const [formdata,setFormdata]=useState({
        fullname:"",
        email:"",
        address:"",
        city:"",
        country:"",
        profileImg:""

    })
    const loading=false;
    const userRef=useRef(null)
    const [selectedpic,setSelectedpic]=useState("");
    const fileHandler=(e)=>{
        const file=e.target.files[0];
        if(file){
            const reader=new FileReader()
            reader.onloadend=()=>{
                const result=reader.result;
                setSelectedpic(result);
                setFormdata((prevdata)=>({
                    ...prevdata,profileImg:result
                }))
            }
            reader.readAsDataURL(file)
        }
    }
    const changeHandler=(e)=>{
        setFormdata({...formdata,[e.target.id]:e.target.value})
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        console.log(formdata);
        
    }
  return (
    <form onSubmit={submitHandler} className='max-w-7xl mx-auto my-5 '>
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
                <div className="relative md:h-28 md:w-28 h-20 w-20">
                
                
                <img src={selectedpic} className='' alt="" />
                <input ref={userRef} type="file" accept='image/*' hidden onChange={fileHandler} />
                <div onClick={()=>userRef.current.click()} className=' absolute inset-0 flex items-center justify-center opacity-100 hover:opacity-20  transition-opacity duration-300 bg-black bg-opacity-50 rounded-full'>
                  <AiOutlinePlus className='textwhite h-8 w-8'/>
                  
                </div>
                </div>
                
                <input type="text" value={formdata.fullname} onChange={changeHandler} id="fullname" className='font-semibold text-2xl bg-gray-400 p-2 outline-none  focus-visible:ring-transparent' />

            </div>
        </div>
        <div className="grid md:grid-cols-4 md:gap-2 gap-3 my-10">
            <div className="flex items-center gap-4 rounded-sm p-2">
                <CiMail className='text-gray-500 text-3xl'/>
                <div className="w-full">
                    <label>Email</label>
                    <input type="email" value={formdata.email} onChange={changeHandler} id='email' className='p-3 w-full text-gray-600 bg-transparent border-none outline-none bg-gray-400'/>
                </div>
            </div>
            <div className="flex items-center gap-4 rounded-sm p-2">
                <MdOutlineLocationSearching  className='text-gray-500 text-3xl'/>
                <div className="w-full">
                    <label>Address</label>
                    <input type="text" value={formdata.address} onChange={changeHandler} id='address' className='p-3 w-full text-gray-600 bg-transparent border-none outline-none bg-gray-400'/>
                </div>
            </div>
            <div className="flex items-center gap-4 rounded-sm p-2">
                <CiLocationOn className='text-gray-500 text-3xl'/>
                <div className="w-full">
                    <label>City</label>
                    <input type="text" value={formdata.city} onChange={changeHandler} id='city' className='p-3 w-full text-gray-600 bg-transparent border-none outline-none bg-gray-400'/>
                </div>
            </div>
            <div className="flex items-center gap-4 rounded-sm p-2">
                <TbWorld className='text-gray-500 text-3xl'/>
                <div className="w-full">
                    <label>Country</label>
                    <input type="text" value={formdata.country} onChange={changeHandler} id='country' className='p-3 w-full text-gray-600 bg-transparent outline-none border-none bg-gray-400'/>
                </div>
            </div>
        </div>
        <div className="text-center">
        {
            loading?<button disabled className='p-3 bg-slate-700 text-white w-full flex items-center justify-center'><LuLoader2 className='mr-2 h-4 w-4 animate-spin'/>wait..</button>:<button type='submit' className='w-full p-3 bg-slate-700 text-white rounded-sm'>Update</button>
        }
        
        </div>
    </form>
  )
}
export default Profile