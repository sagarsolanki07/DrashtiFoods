import React, { useEffect, useState } from 'react';
import frameImage from '../assets/images/Frame1.png'; // Import the mobile image
import papadBgImage1 from '../assets/images/main.png'; // Import the static image

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
    <div className="relative w-full h-[487px] overflow-hidden rounded-lg flex justify-center items-center">
      <img
        src={isMobile ? frameImage : papadBgImage1} // Use Frame1.png for mobile, otherwise use papadBgImage1
        alt="Papad"
        className="object-cover rounded-lg w-[98%] h-[96%]" // Set smaller width and height
      />
    </div>
  );
};

export default ImageDisplay;
