import React, { useState } from 'react'
import homeimg from "../assets/home.png"
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const [search,setSearch]=useState("")
    const navigate=useNavigate()
  return (
    <div className='flex flex-col md:flex-row max-w-7xl mx-auto md:p-10 rounded-lg p-2 items-center justify-center m-4 gap-20'>
        <div className="flex flex-col gap-10 md:w-[40%]">
            <div className="flex flex-col gap-5">
                <h1 className='font-bold md:font-extrabold md:text-5xl text-4xl'>Deliciously Crafted, Made Just for You</h1>
                <p className='text-gray-500'>Savor the Flavors of Freshness, Delivered to Your Door!</p>
            </div>
            <div className="flex  w-[340px] gap-1">
                <input className=' p-3 border border-gray-700' type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='Search your food..' />
                <button onClick={()=>navigate(`/search/${search}`)} className='p-2 bg-slate-700  text-white'>Search</button>
            </div>
        </div>
        <div className="">
            <img src={homeimg} alt="" className='object-cover w-full max-h-[500px]' />
        </div>
    </div>
  )
}

export default Home