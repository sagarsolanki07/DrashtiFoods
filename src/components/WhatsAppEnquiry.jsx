// src/components/WhatsAppEnquiry.js
import React from 'react';
import { Phone } from 'lucide-react';

const WhatsAppEnquiry = ({ isHidden }) => {
  return (
    <div className={`fixed top-0 left-0 w-full bg-green-500 text-white py-2 px-4 md:px-6 flex justify-between items-center z-50 transition-transform duration-300 ease-in-out ${isHidden ? '-translate-y-full' : 'translate-y-0'}`}>
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
  );
};

export default WhatsAppEnquiry;
