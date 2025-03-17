import React, { useState } from "react";
import { LuLoader2 } from "react-icons/lu";

const Restaurant = () => {
  const [formdata,setFormdata]=useState({
    restaurant:"",
    city:"",
    country:"",
    delivery:0,
    cuisines:[],
    upload:undefined

  })
  const changeHandler=(e)=>{
    setFormdata({...formdata,[e.target.id]:e.target.value})
  }
  const loading = false;
  const update=false;
  const submitHandler=(e)=>{
    e.preventDefault();
    console.log(formdata);
    
  }
  return (
    <div className="max-w-6xl mx-auto my-10">
      <div className="">
        <div className="p-5 md:p-1">
          <h1 className="font-extrabold text-2xl mb-5">Add Restaurants</h1>
          <form onSubmit={submitHandler} className="flex flex-col gap-3">
            <div className="md:grid grid-cols-2 gap-6 space-y-2 md:space-y-0">
              <div className="flex flex-col">
                <label className="font-semibold">Restaurant Name</label>
                <input
                  type="text"
                  id="restaurant"
                  value={formdata.restaurant}
                  onChange={changeHandler}
                  className="p-3 outline-none bg-gray-300"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-semibold">City</label>
                <input
                  type="text"
                  id="city"
                  value={formdata.city}
                  onChange={changeHandler}
                  className="p-3 outline-none bg-gray-300"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-semibold">Country</label>
                <input
                  type="text"
                  id="country"
                  value={formdata.country}
                  onChange={changeHandler}
                  className="p-3 outline-none bg-gray-300"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-semibold">Estimated Delivery Time</label>
                <input
                  type="number"
                  id="delivery"
                  value={formdata.delivery}
                  onChange={changeHandler}
                  className="p-3 outline-none bg-gray-300"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-semibold">Cuisines</label>
                <input
                  type="text"
                  id="cuisines"
                  value={formdata.cuisines}
                  onChange={(e)=>setFormdata({...formdata,cuisines:e.target.value.split(",")})}
                  className="p-3 outline-none bg-gray-300"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-semibold">Upload Restaurant Image</label>
                <input
                onChange={(e)=>setFormdata({...formdata,upload:e.target.files?.[0]})}
                  type="file"
                  accept="image/*"
                  id="upload"
                  className=""
                />
              </div>
            </div>
            <div className="text-center  w-full md:w-[250px] ">
              {loading ? (
                <button
                  disabled
                  className="p-3 bg-slate-700 text-white w-full flex items-center justify-center"
                >
                  <LuLoader2 className="mr-2 h-4 w-4 animate-spin" />
                  wait..
                </button>
              ) : (
                <button
                  type="submit"
                  className="w-full p-3 bg-slate-700 text-white rounded-sm font-bold"
                >
                  {update?"Update existing":"Add New "}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
