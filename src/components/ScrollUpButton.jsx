import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-5 bg-yellow-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300 focus:outline-none"
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </>
  );
};

export default ScrollUpButton;