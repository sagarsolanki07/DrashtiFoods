import React, { useEffect, useState } from 'react';

const slides = [
  'https://via.placeholder.com/800x400?text=Slide+1',
  'https://via.placeholder.com/800x400?text=Slide+2',
  'https://via.placeholder.com/800x400?text=Slide+3',
  'https://via.placeholder.com/800x400?text=Slide+4',
];

const AutoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="relative w-full overflow-hidden rounded-lg">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)`}}
      >
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Slide ${index + 1}`}
            className="w-full flex-shrink-0"
          />
        ))}
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default AutoSlider;