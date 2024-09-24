// src/Product.js
import React from 'react';

const Product = ({ product }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="w-full h-48 object-cover" src={product.image} alt={product.name} />
      <div className="p-4">
        <h2 className="text-xl font-bold">{product.name}</h2>
        <p className="text-gray-600">{product.description}</p>
        <p className="text-lg font-semibold text-green-600">${product.price}</p>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
