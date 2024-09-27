// src/FutureProducts.js
import React from 'react';
import Title from './Title';
import ProductList from './ProductList';


import { futureProducts } from '../data/futureProducts';

const FutureProducts = () => {
  return (
    <section className="bg-gray-100">
      <Title title="Future Products" />
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 mx-auto max-w-6xl px-4">
          <ProductList products={futureProducts} />
        </div>
      </div>
    </section>
  );
};

export default FutureProducts;
