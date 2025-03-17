import React, { useState } from 'react'
import homeimg from "../assets/home.png"
import CheckoutPage from './CheckoutPage';
const Cart = () => {
  const [open,setOpen]=useState(false);
  return (
    <div className='flex flex-col max-w-6xl mx-auto my-10'>
        <div className="flex justify-end">
            <button className='p-2 bg-slate-700 rounded-md text-white'>Clear Cart</button>
        </div>
        <table className="min-w-full bg-white border-collapse table-fixed"> 
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Items</th>
            <th className="py-2 px-4 border-b">Title</th>
            <th className="py-2 px-4 border-b">Price</th>
            <th className="py-2 px-4 border-b">Quantity</th>
            <th className="py-2 px-4 border-b">Total</th>
            <th className="py-2 px-4 border-b text-right">Remove</th>
          </tr>
        </thead>
        <tbody>
           <tr className=''>
           <td className="py-2 px-4 border-b">
            <div className="flex items-center space-x-2">
              <img src={homeimg} alt="Item" className="w-14 h-14 rounded-full object-cover" /> 
              
            </div>
           </td>
           <td className="py-2 px-4 border-b">Pizza</td>
           <td className="py-2 px-4 border-b">200</td>
           <td className="py-2 px-4 border-b ">
            <div className="w-fit flex items-center rounded-full border border-gray-200 shadow-md ">
                <button size="icon" className='rounded-full bg-gray-300 h-8 w-8 flex items-center justify-center text-xl'>-</button>
                <span className='p-2'>4</span> 
                <button size="icon" className='rounded-full bg-gray-700 text-white h-8 w-8 flex items-center justify-center text-xl'>+</button>
            </div>
           </td>
           <td className="py-2 px-4 border-b">200</td>
           <td className="py-2 px-4 border-b text-right">
            <button className='p-2 bg-slate-700 rounded-md text-white'>Remove</button>
           </td>
           </tr>
        </tbody>
      </table>
      <div className="flex justify-end my-5">
        <button onClick={()=>setOpen(true)} className='p-2 bg-orange-900 rounded-md text-white'>Proceed to Checkout</button>
      </div>
      <CheckoutPage open={open} setOpen={setOpen}/>
    </div>
  )
}

export default Cart
