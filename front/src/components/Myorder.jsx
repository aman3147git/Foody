import React from "react";

const Myorder = () => {
  
  const orders = [
    {
      id: 1,
      status: "Confirmed",
      items: ["Burger", "Fries", "Coke"],
      price: 350,
    },
    {
      id: 2,
      status: "Confirmed",
      items: ["Pizza", "Garlic Bread"],
      price: 500,
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">My Orders</h1>
      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="border p-4 rounded-md shadow-md">
            <h2 className="text-lg font-semibold">Status:  
              <span className="text-green-600"> {order.status}</span>
            </h2>
            <p className="text-gray-700">
              <strong>Ordered Items:</strong> {order.items.join(", ")}
            </p>
            <p className="text-gray-900 font-semibold">Total Price: ₹{order.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Myorder;
