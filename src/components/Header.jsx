import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Phone, ChevronDown } from 'lucide-react';
import whatsappImage from '../assets/images/whatsapp-image-2024-05-28-at-9-51-1.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showChannelPartner, setShowChannelPartner] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showWhatsApp, setShowWhatsApp] = useState(true);
  
  const dropdownRef = useRef(null); // Create a ref for the dropdown

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'PRODUCT', path: '/product' },
    { name: 'ABOUT', path: '/about' },
    { name: 'CONTACT', path: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
      setShowWhatsApp(!isScrolled);
      if (showChannelPartner) setShowChannelPartner(false); // Hide on scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showChannelPartner]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleChannelPartner = () => setShowChannelPartner(!showChannelPartner);

  // Handle clicks outside the dropdown
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowChannelPartner(false);
    }
  };

  useEffect(() => {
    window.addEventListener('mousedown', handleClickOutside);
    return () => window.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* WhatsApp Enquiry Section */}
      {showWhatsApp && (
        <div className="bg-green-500 text-white py-2 px-4 md:px-6 flex justify-between items-center">
          <span className="text-sm md:text-base font-medium">Quick Enquiry</span>
          <a 
            href="https://api.whatsapp.com/send?phone=9265962845&text=I'm%20interested%20in%20your%20products" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center text-sm md:text-base hover:text-green-100 transition-colors"
          >
            <Phone className="h-4 w-4 mr-2" />
            <span className="font-medium">WhatsApp Us</span>
          </a>
        </div>
      )}

      {/* Main Header Section */}
      <div className={`bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-[0_4px_15px_rgba(0,0,0,0.7)] transition-all duration-300`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
              src={whatsappImage} 
              alt="Divya Drashti Logo" 
              className="h-16 w-auto object-contain flex-shrink-0"
            />
          </Link>

          <button 
            className="md:hidden text-black focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>

          <nav className="hidden md:flex items-center space-x-8 md:space-x-12">
            {navItems.map((item) => (
              <Link 
                key={item.name}
                to={item.path}
                className="flex-shrink-0 inline-flex items-center justify-center gap-10 w-auto h-full text-[#1E1E1E] text-center font-arial text-[14px] font-extrabold leading-normal tracking-[0.84px] hover:text-yellow-700 transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleChannelPartner}
                className="font-arial text-[#1E1E1E] hover:text-yellow-700 transition-colors flex items-center"
              >
                CHANNEL PARTNER <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              {showChannelPartner && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-yellow-400 animate-fadeIn">
                  <Link 
                    to="/distributor-inquiry" 
                    className="block px-4 py-2 text-sm text-gray-700 font-bold hover:bg-yellow-200 hover:text-yellow-800 transition-colors rounded-md"
                  >
                    Distributor Inquiry
                  </Link>
                  <Link 
                    to="/export-inquiry" 
                    className="block px-4 py-2 text-sm text-gray-700 font-bold hover:bg-yellow-200 hover:text-yellow-800 transition-colors rounded-md"
                  >
                    Export Inquiry
                  </Link>
                  <Link 
                    to="/supplier-form" 
                    className="block px-4 py-2 text-sm text-gray-700 font-bold hover:bg-yellow-200 hover:text-yellow-800 transition-colors rounded-md"
                  >
                    Supplier Form
                  </Link>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col items-center space-y-2 py-4">
            {navItems.map((item) => (
              <Link 
                key={item.name}
                to={item.path}
                className="flex-shrink-0 inline-flex items-center justify-center gap-10 w-auto h-[57px] text-[#1E1E1E] text-center font-arial text-[14px] font-extrabold leading-normal tracking-[0.84px] hover:text-yellow-700 transition-colors"
                onClick={toggleMenu}
              >
                {item.name}
              </Link>
            ))}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleChannelPartner}
                className="font-arial text-[#1E1E1E] hover:text-yellow-700 transition-colors flex items-center"
              >
                CHANNEL PARTNER <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              {showChannelPartner && (
                <div className="mt-2 space-y-2">
                  <Link 
                    to="/distributor-inquiry" 
                    className="block text-[#1E1E1E] text-center font-arial text-[14px] font-extrabold leading-normal tracking-[0.84px] hover:text-yellow-500"
                    onClick={toggleMenu}
                  >
                    Distributor Inquiry
                  </Link>
                  <Link 
                    to="/export-inquiry" 
                    className="block text-[#1E1E1E] text-center font-arial text-[14px] font-extrabold leading-normal tracking-[0.84px] hover:text-yellow-500"
                    onClick={toggleMenu}
                  >
                    Export Inquiry
                  </Link>
                  <Link 
                    to="/supplier-form" 
                    className="block text-[#1E1E1E] text-center font-arial text-[14px] font-extrabold leading-normal tracking-[0.84px] hover:text-yellow-500"
                    onClick={toggleMenu}
                  >
                    Supplier Form
                  </Link>
                </div>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
