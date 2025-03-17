import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import homeimg from "../assets/home.png";
import { TbWorld } from "react-icons/tb";
import { CiLocationOn } from "react-icons/ci";
const SearchPage = () => {
  const params = useParams();
  const [query, setQuery] = useState("");
  const filters = [
    { id: "burger", label: "Burger" },
    { id: "pizza", label: "Pizza" },
    { id: "thali", label: "Thali" },
    { id: "biryani", label: "Biryani" },
  ];
  const appliedfilter = (value) => {
    alert(value);
  };
  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="flex flex-col md:flex-row justify-between gap-10 p-3">
        <div className="md:w-72">
          <div className="flex items-center justify-between">
            <h1 className="font-extrabold text-2xl">Use Filter</h1>
            <button className="hover:underline font-bold">Reset</button>
          </div>
          {filters.map((item) => (
            <div key={item.id} className="flex items-center space-x-2 my-5">
              <input
                id={item.id}
                type="checkbox"
                className="h-10 w-10"
                onClick={() => appliedfilter(item.label)}
              />
              <label className="font-semibold">{item.label}</label>
            </div>
          ))}
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-1">
            <input
              type="text"
              className="p-3 outline-none border border-gray-700"
              placeholder="search food.."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="bg-slate-700 p-3 text-white">Search</button>
          </div>
          <div className="">
            <div className="flex flex-col gap-3 md:flex-row md:items-center  md:gap-2 my-3">
              <h1 className="font-medium text-lg">(3) results found</h1>
              <div className="flex flex-wrap gap-2 mb-4 md:mb-8">
                {[1, 2, 3].map((item, index) => (
                  <div
                    key={index}
                    className="relative inline-flex items-center max-w-full"
                  >
                    <span className="inline-block text-slate-700 border border-yellow-500 text-xs font-bold px-2 py-1 rounded-full">
                      Featured
                    </span>
                    <RxCross2 className="absolute right-1 hover:cursor-pointer inset-y-0" />
                  </div>
                ))}
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[1, 2, 3].map((item, idx) => (
                <div key={idx} className="bg-white  shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 border min-h-56 p-3">
                  <div className="relative">
                    <img
                      src={homeimg}
                      alt=""
                      className="object-cover h-44 w-44"
                    />
                    <div className="absolute top-2 left-2 bg-white bg-opacity-75 py-1 px-3 rounded-md">
                      <span className="bg-gray-300">Featured</span>
                    </div>
                  </div>
                  <span className="text-2xl font-bold bg-gray-300 p-2 ">
                    Pizza Hunt
                  </span>
                  <div className="mt-2 gap-1  flex items-center text-gray-600 ">
                    <CiLocationOn className="text-3xl" />
                    <p>
                      City: <span className="font-semibold">Delhi</span>
                    </p>
                  </div>
                  <div className="mt-2 gap-1  flex items-center text-gray-600 ">
                    <TbWorld className="text-3xl" />
                    <p>
                      Country: <span className="font-semibold">India</span>
                    </p>
                  </div>
                  <div className="p-3 flex justify-end">
                    <Link to={`/restaurant/${123}`}>
                      <button className="bg-slate-700 p-2 text-white rounded-lg">
                        More
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
