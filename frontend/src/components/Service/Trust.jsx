import React from 'react';

const Trust = () => {
  return (
    <main className='flex'>
    <div className="bg-dblue py-16 px-8 rounded-l-xl">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch gap-0">
          
          {/* Left Section - Experience Badge */}
          <div className="flex justify-center lg:justify-start col-span-12 lg:col-span-2">
            <div className="bg-dyellow px-5 py-5 rounded-lg text-center w-full max-w-[200px]">
              <div className="text-white">
                <div className="text-3xl font-bold mb-1">10+</div>
                <div className="text-xl font-semibold mb-1">Year</div>
                <div className="text-base font-medium">Consulting</div>
                <div className="text-base font-medium">Experience</div>
              </div>
            </div>
          </div>

          {/* Center Section - Main Content */}
          <div className="text-center lg:text-left col-span-12 lg:col-span-7 ml-5 mt-5">
            <h2 className="text-4xl lg:text-4xl font-bold text-white mb-3 leading-tight">
              Trusted, Happy & Satisfied
              <br />
              Businesses
            </h2>
            <p className="text-white text-lg leading-relaxed">
              We're driven by innovation, integrity, and a commitment
              <br />
              to client success.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="flex justify-center lg:justify-end col-span-12 lg:col-span-3 self-stretch">
            <div className="bg-white p-5 rounded-r-lg shadow-lg w-full max-w-[300px] flex items-center justify-center h-full">
              <img 
                src="/logo.png" 
                alt="Pitambara Techno Legal Consultancy LLP" 
                className="h-full w-auto object-contain"
              />
            </div>
          </div>
    </main>
  );
};

export default Trust;
