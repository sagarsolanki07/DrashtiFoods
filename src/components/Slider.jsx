import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import papadBgImage1 from '../assets/images/main.png';  
import papadBgImage2 from '../assets/images/papad-bg-image-1.png';
import papadBgImage3 from '../assets/images/papad-image-5-1.png';
import papadBgImage4 from '../assets/images/papad-image-14-1.png';
import frameImage from '../assets/images/Frame1.png'; // Import the mobile image

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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Set mobile condition

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    enter: { y: 50, opacity: 0 },
    center: {
      zIndex: 1,
      y: 0,
      opacity: 1,
    },
    exit: { y: -50, opacity: 0 },
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <div className="relative w-full h-[487px] overflow-hidden rounded-lg">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 100, damping: 50 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              setCurrentSlide((prev) => (prev + 1) % slides.length);
              setDirection(1);
            } else if (swipe > swipeConfidenceThreshold) {
              setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
              setDirection(-1);
            }
          }}
          className="absolute inset-0"
        >
          <img
            src={isMobile && currentSlide === 0 ? frameImage : slides[currentSlide].image} // Use frameImage for mobile
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center rounded-lg">
            <h2 className="text-black text-center font-poppins text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-extrabold leading-normal tracking-[2px] md:tracking-[3.6px] mb-4 
              shadow-lg text-shadow-lg transition-transform duration-300 transform hover:scale-105">
              {slides[currentSlide].title}
            </h2>
            <p className="text-black text-center font-poppins text-[18px] sm:text-[24px] md:text-[30px] font-bold leading-normal tracking-[1.5px] md:tracking-[2.04px] 
              shadow-lg text-shadow-lg transition-transform duration-300 transform hover:scale-105">
              {slides[currentSlide].description}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Slider;
