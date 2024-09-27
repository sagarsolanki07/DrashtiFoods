import React, { useEffect, useState } from 'react';
import frameImage from '../assets/images/Frame1.png'; // Import the mobile image
import papadBgImage1 from '../assets/images/main2.png'; // Import the static image

const ImageDisplay = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Determine if the device is mobile

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative w-full h-[200px]  md:h-[487px] overflow-x-hidden ">
      <img
        src={ papadBgImage1} // Use Frame1.png for mobile, otherwise use papadBgImage1
        alt="Papad"
        className="w-full h-full object-fill shadow-lg" // Added shadow class
      />
    </div>
    
  );
};

export default ImageDisplay;
