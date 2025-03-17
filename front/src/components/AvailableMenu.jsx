import React from 'react'
import homeimg from "../assets/home.png";
const AvailableMenu = () => {
  return (
    <div className='md:p-4'>
        <h1 className='text-xl md:text-2xl font-extrabold mb-6'>Available Menus</h1>
        <div className="grid md:grid-cols-3 space-y-4 md:space-y-0">
            <div className="md:max-w-xs mx-auto shadow-lg rounded-lg overflow-hidden">
                <img src={homeimg} className='w-full h-40 object-cover' alt="" />
                <div className="p-4">
                    <h1 className='text-xl font-semibold text-gray-800'>Tandoori Tadka</h1>
                    <p className='text-sm text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore!</p>
                    <h2 className='font-semibold text-lg'>Price:<span className='text-gray-400'>₹70</span></h2>
                    <button className='font-medium p-2  bg-slate-700 rounded-md flex  text-white'>Add to Cart</button>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default AvailableMenu