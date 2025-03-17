import React from "react";
import homeimg from "../assets/home.png";
import { IoIosTimer } from "react-icons/io";
import AvailableMenu from "./AvailableMenu";
const RestaurantDetail = () => {
  return (
    <div className="max-w-5xl mx-auto my-10 p-3">
      <div className="w-full">
        <div className="relative w-full h-32 md:h-64 lg:h-72">
          <img
            src={homeimg}
            className="object-cover w-full h-full rounded-lg shadow-lg"
            alt=""
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="my-5">
            <h1 className="font-medium text-lg">Chicken Korma</h1>
            <div className="flex gap-2 my-2">
              {["Rabdi", "Samosa"].map((item, idx) => (
                <span className="inline-block text-slate-700 border border-blue-500 text-xs font-bold px-2 py-1 rounded-full">
                  Featured
                </span>
              ))}
            </div>
            <div className="flex md:flex-row flex-col gap-2 my-5">
                <div className="flex items-center gap-2">
                    <IoIosTimer className="w-5 h-5"/>
                    <h1 className="flex items-center gap-2 font-medium">Delivery time:{" "}<span className="text-gray-400">40 min</span></h1>
                </div>
            </div>
          </div>
        </div>
        <AvailableMenu/>
      </div>
    </div>
  );
};

export default RestaurantDetail;
