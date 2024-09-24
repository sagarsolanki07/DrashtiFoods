import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ products = [] }) => {
  return (
    <>
      {products.map((product, index) => (
        <Link
          key={index}
          to={`/product/${encodeURIComponent(product.name)}`} // Use the product name in the URL
          state={{ product }} // Pass the product data to the ProductDetails page
          className="bg-white w-[269px] rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl flex flex-col justify-between"
        >
          <div className="w-full h-[250px] flex justify-center items-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4 bg-yellow-400 text-center h-[50px] flex items-center justify-center">
            <h3 className="text-lg font-semibold truncate">{product.name}</h3>
          </div>
        </Link>
      ))}
    </>
  );
};

export default ProductList;
