import React from 'react';

const SectionHeader = ({ title }) => {
  return (
    <div className="bg-yellow-400 py-4 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.7)]">
      <h2
        className="text-[#1E1E1E] text-center font-bold tracking-[4.8px] text-5xl md:text-[80px] leading-normal"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        {title}
      </h2>
    </div>
  );
};

export default SectionHeader;
