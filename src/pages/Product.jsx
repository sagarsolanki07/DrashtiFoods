// src/App.js
import React from 'react'; 

import { products } from '../data/products';
import ProductList from '../components/ProductList';
import FutureProducts from '../components/FutureProducts';
import ImageDisplay from '../components/ImageDisplay';
import SectionHeader from '../components/SectionHeader';
import { Helmet } from 'react-helmet';

	


const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col pb-16 mt-14 ">
      <Helmet>
  <title>Our Products - Drashti Foods</title>
  <meta name="description" content="Explore the variety of papads we offer at Drashti Foods, made from high-quality ingredients." />
</Helmet>

            <section className="bg-gray-100  ">
            <SectionHeader title="OUR PRODUCTS" />

    <ImageDisplay/>

   </section>
   <section className="bg-gray-100 py-3 pt-16">
   <div className="max-w-6xl mx-auto mb-5">
   <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-auto max-w-6xl px-4">
          <ProductList products={products} />
        </div>
      </div>
  </div>

   </section>
   <FutureProducts/>
    </div>
    
   
  );
};

export default App;
