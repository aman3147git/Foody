import React, { useEffect, useState } from 'react';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    
    const fetchOrders = async () => {
      const response = await fetch('/api/orders'); 
      const data = await response.json();
      setOrders(data);
    };

    fetchOrders();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className='text-3xl font-bold mb-4'>All Orders</h1>
      <div className="bg-white shadow-md rounded-lg p-4 overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-3 border">Order ID</th>
              <th className="p-3 border">Customer</th>
              <th className="p-3 border">Status</th>
              <th className="p-3 border">Total Amount</th>
              <th className="p-3 border">Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr key={order.id} className="border-b hover:bg-gray-100">
                  <td className="p-3 border">{order.id}</td>
                  <td className="p-3 border">{order.customer}</td>
                  <td className={`p-3 border font-semibold ${order.status === 'Pending' ? 'text-red-500' : 'text-green-500'}`}>{order.status}</td>
                  <td className="p-3 border">${order.total}</td>
                  <td className="p-3 border">{new Date(order.date).toLocaleDateString()}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center p-4">No orders found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;