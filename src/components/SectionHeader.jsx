import React from 'react';

const SectionHeader = ({ title }) => {
  return (
    <div className="relative">
      <div className="bg-yellow-400 py-4">
        <h2
          className="text-[#1E1E1E] text-center font-bold tracking-[4.8px] text-5xl md:text-[80px] leading-normal whitespace-nowrap"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          {title}
        </h2>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-b from-transparent to-black opacity-20"></div>
    </div>
  );
};

export default SectionHeader;
