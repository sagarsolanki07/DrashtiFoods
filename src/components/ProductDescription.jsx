import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProductDescription = () => {
  return (
    <section className="pt-10 bg-gray-100">
      <div className="product-description mx-auto mb-6 max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Flex container for the heading */}
        <div className="flex justify-center text-center lg:justify-center whitespace-nowrap">
  {/* First part: "Papads: A" */}
  <motion.h1
    className="text-3xl sm:text-4xl lg:text-5xl font-bold"
    initial={{ x: -300, opacity: 0 }} 
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 1.2, ease: 'easeOut' }}  
  >
    <span style={{ 
      color: '#FFCB02', 
      fontFamily: 'Rammetto One', 
      fontSize: '40px', 
      fontStyle: 'normal', 
      fontWeight: '400', 
      lineHeight: 'normal', 
      letterSpacing: '7.2px' 
    }}>
      Papads: A
    </span>
  </motion.h1>

  {/* Second part: "Crisp Reminder of Home" */}
  <motion.h1
    className="text-3xl sm:text-4xl lg:text-5xl font-bold ml-2"
    initial={{ x: 300, opacity: 0 }} 
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 1.2, ease: 'easeOut' }} 
  >
    <span style={{ 
      color: 'black', // Making "Crisp" text black
      fontFamily: 'Rammetto One', 
      fontSize: '40px', 
      fontStyle: 'normal', 
      fontWeight: '400', 
      lineHeight: 'normal', 
      letterSpacing: '7.2px' 
    }}>
      Crisp
    </span>
    <span style={{ 
      color: '#FFCB02', 
      fontFamily: 'Rammetto One', 
      fontSize: '40px', 
      fontStyle: 'normal', 
      fontWeight: '400', 
      lineHeight: 'normal', 
      letterSpacing: '7.2px' 
    }}>
      {" Reminder of Home"}
    </span>
  </motion.h1>
</div>

        {/* Product description text */}
        <p className="product-text mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-center">
          "Experience the delightful crunch and burst of flavor with Drashti Foods! We craft our products with the finest ingredients, using traditional methods and exciting culinary discoveries. At Drashti Foods, we believe food should be both flavorful and fulfilling."
        </p>
      </div>

      {/* Button with hover animation */}
      <Link to="/about">
        <div className="flex justify-center mt-6">
          <div className="bg-[#ffcb02] rounded-lg flex items-center justify-center w-[200px] h-[43px] transition-transform duration-300 hover:bg-[#f9b300] hover:shadow-lg cursor-pointer">
            <span className="text-black text-[20px] font-semibold font-poppins text-center">
              Know More
            </span>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default ProductDescription;
