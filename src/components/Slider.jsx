import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import papadBgImage1 from '../assets/images/main.png';  
import papadBgImage2 from '../assets/images/image1.png';
import papadBgImage3 from '../assets/images/image2.png';
import papadBgImage4 from '../assets/images/image3.png';

const slides = [
  {
    id: 1,
    image: papadBgImage1,
    title: '',
    description: '',
  },
  {
    id: 2,
    image: papadBgImage2,
    title: '"Crisp, Fresh, Delicious"',
    description: 'Focuses on the genuine taste and satisfying crunch of your high-quality papads.',
  },
  {
    id: 3,
    image: papadBgImage3,
    title: '"Bringing You the Taste of Home"',
    description: 'Promises a fresh and flavorful experience with every bite, ensuring the best taste.',
  },
  {
    id: 4,
    image: papadBgImage4,
    title: '"Bringing You the Taste of Home"',
    description: 'Promises a fresh and flavorful experience with every bite, ensuring the best taste.',
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => {
        if (prev === slides.length - 1) {
          setDirection(-1);
          return 0;
        } else {
          setDirection(1);
          return prev + 1;
        }
      });
    }, 4000); // Slide interval (4 seconds)

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: { opacity: 0 },
    center: {
      zIndex: 1,
      opacity: 1,
      transition: { duration: 0 }, // Instant transition
    },
    exit: { opacity: 0 },
  };

  return (
    <div className="relative w-full max-w-full h-[200px] md:h-[487px] overflow-hidden rounded-lg scroll-smooth bg-gray-200">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 flex items-center justify-center"
        >
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-full object-fill rounded-lg"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center rounded-lg">
            <h2 className="text-black text-center font-poppins text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-extrabold leading-normal tracking-[2px] md:tracking-[3.6px] mb-4 
               text-shadow-lg transition-transform duration-300 transform hover:scale-105">
              {slides[currentSlide].title}
            </h2>
            <p className="text-black text-center font-poppins text-[18px] sm:text-[24px] md:text-[30px] font-bold leading-normal tracking-[1.5px] md:tracking-[2.04px] 
              text-shadow-lg transition-transform duration-300 transform hover:scale-105">
              {slides[currentSlide].description}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Slider;
