import React, { useState } from 'react';

const CheckoutPage = ({ open, setOpen }) => {
  const [formdata, setFormdata] = useState({
    fullname: "",
    email: "",
    contact: "",
    address: "",
    city: "",
    country: ""
  });

  const handleClose = () => {
    setOpen(false);
  };

  if (!open) return null;

  const changeHandler = (e) => {
    setFormdata({ ...formdata, [e.target.id]: e.target.value });
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50 p-3 ">
      <div className="bg-white rounded-lg shadow-lg  sm:max-w-3xl sm:w-full p-6 mx-12">
        <h2 className="text-2xl font-bold mb-3 text-center">Review your order</h2>
        <p className="mb-3 text-center text-sm text-gray-500">
          Please check your delivery details and ensure everything is correct. When you are ready, hit the confirm button to place the order.
        </p>
        <form className="grid grid-cols-1 sm:grid-cols-2 sm:gap-4">
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-700">Fullname</label>
            <input
              type="text"
              id="fullname"
              onChange={changeHandler}
              className="font-semibold text-lg bg-gray-300 p-2 outline-none"
              value={formdata.fullname}
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              onChange={changeHandler}
              className="font-semibold text-lg bg-gray-300 p-2 outline-none"
              value={formdata.email}
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-700">Contact</label>
            <input
              type="number"
              id="contact"
              onChange={changeHandler}
              className="font-semibold text-lg bg-gray-300 p-2 outline-none"
              value={formdata.contact}
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-700">Address</label>
            <input
              type="text"
              id="address"
              onChange={changeHandler}
              className="font-semibold text-lg bg-gray-300 p-2 outline-none"
              value={formdata.address}
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-700">City</label>
            <input
              type="text"
              id="city"
              onChange={changeHandler}
              className="font-semibold text-lg bg-gray-300 p-2 outline-none"
              value={formdata.city}
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-700">Country</label>
            <input
              type="text"
              id="country"
              onChange={changeHandler}
              className="font-semibold text-lg bg-gray-300 p-2 outline-none"
              value={formdata.country}
            />
          </div>
        </form>
        <div className="flex justify-end space-x-4 mt-6">
          <button
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition duration-300"
            onClick={handleClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
            onClick={handleClose}
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
