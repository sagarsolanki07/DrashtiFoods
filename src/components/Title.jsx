import React from 'react';

const Title = ({ title }) => {
  return (
    <div className="text-center mb-10 mt-5 px-5 ">
      {/* Title with lines on both sides */}
      <div className="flex items-center justify-center">
        <div className="flex-grow h-px bg-gray-300"></div>
        <h2 className="text-black text-[32px] md:text-4xl lg:text-5xl font-extrabold tracking-wider px-4 font-poppins">
          {title}
        </h2>
        <div className="flex-grow h-px bg-gray-300"></div>
      </div>
    </div>
  );
};

export default Title;
