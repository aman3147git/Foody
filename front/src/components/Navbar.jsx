import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaOpencart } from "react-icons/fa";
import { RiMenu2Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { CiUser } from "react-icons/ci";
import { GrRestaurant } from "react-icons/gr";
import { IoRestaurant } from "react-icons/io5";
import { LuMenuSquare } from "react-icons/lu";
import { LuPackageCheck } from "react-icons/lu";
const Navbar = () => {
  const admin = true;
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <div className="p-2 max-w-7xl mx-auto ">
      <div className="flex items-center justify-between h-14">
        <Link to="/">
          <h1 className="font-extrabold text-2xl">Foody</h1>
        </Link>
        <div className="hidden md:flex items-center gap-10">
          <div className="hidden md:flex items-center gap-6">
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/order/status">Order</Link>
          
          {admin && (
            <h1 onClick={() => setShow(!show)} className="relative">
              Dashboard
              {show && (
                <div className="flex flex-col gap-2  py-3 w-[150px] bg-white absolute top-10 right-3 shadow-xl">
                    <Link to="/admin/restaurant" className="">Restaurant</Link>
                  <Link to="/admin/menu" className="">Menu</Link>
                  <Link to="/admin/orders">Orders</Link>
                </div>
              )}
            </h1>
          )}
        </div>
        <div className="flex items-center gap-4">
            <div className="">Dark</div>
            <Link to="/cart" className="relative"><FaOpencart/>
            <button size="icon" className="absolute -inset-y-3 left-2 text-xs h-4 w-4 bg-red-500 rounded-full text-white">3</button>
            </Link>
            <div className="p-2 border bg-slate-700 text-white rounded-lg">
            <button>Logout</button>
            </div>
        </div>
        </div>
        <button onClick={()=>setOpen(!open)} className="md:hidden text-2xl">{open?<RxCross2 />:<RiMenu2Fill/>}</button>
        {open && (
        <div className="overflow-hidden md-hidden bg-gray-300 fixed top-0 left-0 h-full w-[350px] z-40">
          <div className="flex flex-col p-8 gap-6 text-black text-2xl font-bold">
            <div className="flex justify-between">
            <h1 className="">Foody</h1>
            <button>Dark</button>
            </div>
            <div className="">
            <hr className="mt-4"/>
            <Link className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-gray-200 hover:text-gray-900 font-medium" to="/profile"><CiUser/><span>Profile</span></Link>
            <Link className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-gray-200 hover:text-gray-900 font-medium" to="/order"><GrRestaurant/><span>Order</span></Link>
            <Link className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-gray-200 hover:text-gray-900 font-medium" to="/cart"><FaOpencart/><span>Cart(0)</span></Link>
            <Link className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-gray-200 hover:text-gray-900 font-medium" to="/menu"><LuMenuSquare/><span>Menu</span></Link>
            <Link className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-gray-200 hover:text-gray-900 font-medium" to="/admin/restaurant"><IoRestaurant/><span>Restaurant</span></Link>
            <Link className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-gray-200 hover:text-gray-900 font-medium" to="/profile"><LuPackageCheck/><span>Restaurant Orders</span></Link>
            </div>
            <button className="p-2 w-full bg-slate-700 text-white ">Logout</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
