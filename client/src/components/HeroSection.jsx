import React from 'react';

const HeroSection = () => {
  return (
    <div className="py-20 px-4 bg-gradient-to-br from-white to-teal-50">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black">
          Securing the Digital Future with Legal Confidence
        </h1>
        <p className="mt-4 text-gray-600 text-lg">
          Trusted legal solutions tailored for the modern digital age.
        </p>
        <button className="mt-6 bg-teal-500 text-white px-6 py-3 rounded hover:bg-teal-600 transition">
          Book a Consultation
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
