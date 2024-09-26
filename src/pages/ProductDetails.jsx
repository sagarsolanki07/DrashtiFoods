import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const product = location.state.product; // Get product data from location state
  const [quantities, setQuantities] = useState({ '500gm': 1, '1kg': 1 });

  const packages = [
    { weight: "500gm", price: 110 },
    { weight: "1kg", price: 220 },
  ];

  const handleQuantityChange = (weight, change) => {
    setQuantities(prev => ({
      ...prev,
      [weight]: Math.max(0, prev[weight] + change)
    }));
  };

  const calculateSubtotal = () => {
    return packages.reduce((total, pkg) => total + pkg.price * quantities[pkg.weight], 0);
  };

  return (
    <div className="px-4 py-4 container bg-yellow-100 min-h-auto max-w-5xl mx-auto mb-10 mt-14 shadow-lg rounded-lg overflow-hidden">
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <img src={product.image} alt={product.name} className="md:w-1/2 h-[400px] object-cover rounded-lg shadow-lg" />
        <div className="flex-grow md:w-[60%] p-4 bg-white rounded-lg shadow-md">
          <h1 className="text-3xl font-extrabold text-black">{product.name}</h1>
          <p className="text-base font-bold text-gray-700 leading-relaxed">{product.description}</p>
        </div>
      </div>
      <table className="w-full shadow-lg">
        <thead className="bg-yellow-400 text-black">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Package</th>
            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Quantity</th>
            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Price</th>
            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Total</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {packages.map(({ weight, price }, index) => (
            <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-black">{product.name}</div>
                <div className="text-sm text-black">{weight}</div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <button className="h-8 w-8 rounded-full text-indigo-600 border border-indigo-600 hover:bg-indigo-50" onClick={() => handleQuantityChange(weight, -1)}>-</button>
                  <span className="mx-2 text-sm font-medium text-black">{quantities[weight]}</span>
                  <button className="h-8 w-8 rounded-full text-indigo-600 border border-indigo-600 hover:bg-indigo-50" onClick={() => handleQuantityChange(weight, 1)}>+</button>
                </div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-black">₹ {price.toFixed(2)}</div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-black">₹ {(price * quantities[weight]).toFixed(2)}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="bg-gray-50 px-6 py-2">
        <div className="flex justify-end items-center">
          <span className="text-lg font-semibold text-gray-900 mr-4">Subtotal:</span>
          <span className="text-xl font-bold text-indigo-600">₹ {calculateSubtotal().toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
