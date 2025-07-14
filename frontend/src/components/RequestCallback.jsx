import React from 'react';

const RequestCallbackSection = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-dblue rounded-2xl shadow-lg px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Content */}
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-6">
              Request A Call Back
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Ever find yourself staring at your computer screen slogan to 
              come to mind? Oftentimes.
            </p>
          </div>

          {/* Right Side - Form */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name Field */}
            <div className="sm:col-span-1">
              <input
                type="text"
                placeholder="Name *"
                className="w-full px-4 py-3 rounded-lg border-0 bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-dyellow focus:outline-none"
              />
            </div>

            {/* Email Field */}
            <div className="sm:col-span-1">
              <input
                type="email"
                placeholder="E-mail *"
                className="w-full px-4 py-3 rounded-lg border-0 bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-dyellow focus:outline-none"
              />
            </div>

            {/* Phone Field */}
            <div className="sm:col-span-1">
              <input
                type="tel"
                placeholder="Phone *"
                className="w-full px-4 py-3 rounded-lg border-0 bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-dyellow focus:outline-none"
              />
            </div>

            {/* Send Button */}
            <div className="sm:col-span-1">
              <button className="w-full bg-yellow-400 text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-dblue transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400">
                SEND NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestCallbackSection;
