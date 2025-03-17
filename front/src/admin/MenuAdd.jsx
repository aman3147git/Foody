import React, { useState } from 'react'
import { LuLoader2 } from 'react-icons/lu';
import { RxCross2 } from "react-icons/rx";

const MenuAdd = () => {
    const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const loading=false;
  return (
    <div className='mx-auto max-w-6xl my-10 p-4 md:p-1'>
        <div className="flex justify-between">
            <h1 className='font-bold md:font-extrabold text-lg md:text-3xl'>Menu's Available</h1>
        
        <button
        className="bg-slate-700 text-white px-4 py-2 rounded-md hover:bg-slate-400"
        onClick={handleOpen}
      >
        Add Menus
      </button>

      {open && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <div className="flex justify-between">
            <h2 className="text-xl font-bold mb-4">
              Add new item to restaurant
            </h2>
            <button
                className='text-2xl'
                onClick={handleClose}
              >
               <RxCross2/> 
            </button>
            </div>
            <p className="mb-6 text-gray-500">
            Fill in the details below to add a new item to the menu.
            </p>
            <form action="">
                <div className="flex flex-col">
                    <label className='font-semibold'>Name</label>
                    <input type="text" id='menu' className="p-3 outline-none bg-gray-300" />
                </div>
                <div className="flex flex-col">
                    <label className='font-semibold'>Description</label>
                    <input type="text" id='description' className="p-3 outline-none bg-gray-300" />
                </div>
                <div className="flex flex-col">
                    <label className='font-semibold'>Price</label>
                    <input type="text" id='price' className="p-3 outline-none bg-gray-300" />
                </div>
                <div className="flex flex-col">
                    <label className='font-semibold'>Menu Image</label>
                    <input type="file" id='imagefile' accept='image/*'/>
                </div>
                <div className="text-center  w-full mt-10">
              {loading ? (
                <button
                  disabled
                  className="p-3 bg-slate-700 hover:bg-slate-400 text-white w-full flex items-center justify-center"
                >
                  <LuLoader2 className="mr-2 h-4 w-4 animate-spin" />
                  wait..
                </button>
              ) : (
                <button
                  type="submit"
                  className="w-full p-3 bg-slate-700 hover:bg-slate-400 text-white rounded-sm font-bold"
                >
                  Add
                </button>
              )}
            </div>
            </form>
            
          </div>
        </div>
      )}
        </div>
        <div className="mt-6 space-y-4">
            <div className="flex flex-col md:flex-row md:items-center md:space-x-4 md:p-4 p-2 shadow-md rounded-lg border">
                <img className='md:h-24 md:w-24 h-16 w-full object-cover ' src="https://media.gettyimages.com/id/1457889029/photo/group-of-food-with-high-content-of-dietary-fiber-arranged-side-by-side.jpg?s=612x612&w=gi&k=20&c=YiNatAP0CzFSalhnkzSUFyy6XpVhBe3WSnRpu1W3pV4=" alt="" />
                <div className="flex-1">
                    <h1 className='font-semibold text-gray-500 text-lg'>Biryani</h1>
                    <p className='text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, cupiditate.</p>
                    <h2 className='text-md font-semibold mt-2'>Price: 90</h2>
                </div>
                <button className='w-full md:w-[80px] bg-slate-700 p-3 md:p-2 text-white'>Edit</button>
            </div>
        </div>
    </div>
  )
}

export default MenuAdd