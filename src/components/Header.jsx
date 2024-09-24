import { useState } from 'react';
import whatsappImage from '../assets/images/whatsapp-image-2024-05-28-at-9-51-1.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  const toggleMenu = () => {
    setIsOpen(prev => !prev); // Toggle the mobile menu
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-yellow-400 to-yellow-500 py-2 shadow-[0_4px_15px_rgba(0,0,0,0.7)] z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="flex items-center">
          <img 
            src={whatsappImage} 
            alt="Divya Drashti Logo" 
            className="h-12 w-auto object-contain" 
          />
        </Link>

        {/* Hamburger Icon for Mobile */}
        <button 
          className="md:hidden text-black focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* Navigation Links */}
        <nav className={`hidden md:flex items-center space-x-8 md:space-x-12`}>
          <Link to="/" className="font-semibold hover:text-yellow-700 transition-colors">HOME</Link>
          <Link to="/product" className="font-semibold hover:text-yellow-700 transition-colors">PRODUCT</Link>
          <Link to="/about" className="font-semibold hover:text-yellow-700 transition-colors">ABOUT</Link>
          <Link to="/contact" className="font-semibold hover:text-yellow-700 transition-colors">CONTACT</Link>
        </nav>
      </div>

      {/* Mobile Menu (if open) */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col items-center space-y-2 py-4">
            <Link to="/" className="font-semibold hover:text-yellow-700 transition-colors" onClick={toggleMenu}>HOME</Link>
            <Link to="/product" className="font-semibold hover:text-yellow-700 transition-colors" onClick={toggleMenu}>PRODUCT</Link>
            <Link to="/about" className="font-semibold hover:text-yellow-700 transition-colors" onClick={toggleMenu}>ABOUT</Link>
            <Link to="/contact" className="font-semibold hover:text-yellow-700 transition-colors" onClick={toggleMenu}>CONTACT</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
