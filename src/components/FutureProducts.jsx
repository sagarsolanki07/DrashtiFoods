// src/FutureProducts.js
import React from 'react';
import Title from './Title';
import ProductList from './ProductList';

import frayms2d from "../assets/images/frayms2d.png";
import frayms3d from "../assets/images/frayms3d.png";

const futureProducts = [
  { 
    name: "2D Fryums", 
    image: frayms2d, // Replace with the actual image source
    description: "Discover the irresistible taste and texture of 2D Fryms, the ultimate snack for every occasion! Crafted from high-quality ingredients, our 2D Fryms are a delightful fusion of crunch and flavor, providing a satisfying experience with every bite. Perfect for sharing at parties, enjoying during movie nights, or snacking on-the-go, these crispy delights come in a variety of flavors to cater to every palate. Each batch of 2D Fryms is meticulously prepared to ensure a consistent, delicious crunch that will keep you coming back for more. Elevate your snacking game with 2D Fryms where taste meets fun in every bite!",
  },
  { 
    name: "3D Fryums", 
    image: frayms3d, // Replace with the actual image source
    description: "Discover the delectable world of 3D Fryms, where innovation meets irresistible taste. Our uniquely crafted snacks are designed to deliver a satisfying crunch and an explosion of flavor in every bite. Made with high-quality, all-natural ingredients, 3D Fryms are not only delicious but also a healthier snacking option. With a one-of-a-kind 3D shape that enhances the texture and experience, these snacks are perfect for any occasion—whether you're hosting a party, enjoying a movie night, or looking for a quick bite on the go. Available in a variety of flavors, including classic, spicy, and gourmet options, there's a 3D Frym for every palate.",
  },
];

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
