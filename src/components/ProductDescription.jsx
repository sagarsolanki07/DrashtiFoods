import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProductDescription = () => {
  return (
    <section className="pt-10 bg-gray-100">
      <div className="product-description mx-auto mb-6 max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Flex container for the heading */}
        <div className="flex flex-col items-center text-center lg:flex-row lg:justify-center whitespace-normal">
          {/* First part: "Papads: A" */}
          <motion.h1
            className="text-2xl sm:text-3xl lg:text-5xl font-bold"
            initial={{ x: -300, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}  
          >
            <span style={{ 
              color: '#FFCB02', 
              fontFamily: 'Rammetto One', 
              fontSize: 'clamp(20px, 6vw, 40px)',  // Adjusted to better suit small screens
              fontStyle: 'normal', 
              fontWeight: '400', 
              lineHeight: 'normal', 
              letterSpacing: '4px' // Reduced spacing for better mobile appearance
            }}>
              Papads: A
            </span>
          </motion.h1>

          {/* Second part: "Crisp Reminder of Home" */}
          <motion.h1
            className="text-2xl sm:text-3xl lg:text-5xl font-bold mt-2 lg:mt-0 lg:ml-2"
            initial={{ x: 300, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }} 
          >
            <span style={{ 
              color: 'black', // Making "Crisp" text black
              fontFamily: 'Rammetto One', 
              fontSize: 'clamp(20px, 6vw, 40px)', // Adjusted for responsiveness
              fontStyle: 'normal', 
              fontWeight: '400', 
              lineHeight: 'normal', 
              letterSpacing: '4px' // Reduced spacing for better readability on mobile
            }}>
              Crisp
            </span>
            <span style={{ 
              color: '#FFCB02', 
              fontFamily: 'Rammetto One', 
              fontSize: 'clamp(20px, 6vw, 40px)', // Responsive font size
              fontStyle: 'normal', 
              fontWeight: '400', 
              lineHeight: 'normal', 
              letterSpacing: '4px' // Consistent spacing
            }}>
              {" Reminder of Home"}
            </span>
          </motion.h1>
        </div>

        {/* Product description text */}
        <p className="product-text mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-center max-w-lg mx-auto">
          "Experience the delightful crunch and burst of flavor with Drashti Foods! We craft our products with the finest ingredients, using traditional methods and exciting culinary discoveries. At Drashti Foods, we believe food should be both flavorful and fulfilling."
        </p>
      </div>

      {/* Button with hover animation */}
      <Link to="/about">
        <div className="flex justify-center mt-6">
          <div className="bg-[#ffcb02] rounded-lg flex items-center justify-center px-4 py-2 transition-transform duration-300 hover:bg-[#f9b300] hover:shadow-lg cursor-pointer">
            <span className="text-black text-base sm:text-lg font-semibold font-poppins text-center">
              Know More
            </span>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default ProductDescription;
