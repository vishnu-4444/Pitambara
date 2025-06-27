import React from "react";

const ServiceSection = () => {
    return (
        <div className='py-20 bg-gray-70'>
          <div className='max-w-6xl mx-auto px-4'>
            <h2 className='text-3xl font-bold text-center text-black mb-10'>
              Our Core Services
            </h2>
            <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
              <div className='bg-white shadow-md rounded-lg p-6 text-center hover:bg-teal-50'>
                <div className='text-4xl mb-4'>🛡️</div>
                <h3 className='text-xl font-semibold mb-2'>Cybersecurity</h3>
                <p className='text-gray-600 text-sm mb-3'>
                  Penetration testing, audits, threat detection, and cloud security.
                </p>
                <a href="#" className='text-teal-600 font-medium hover:underline'>
                  Learn More →
                </a>
              </div>
              <div className='bg-white shadow-md rounded-lg p-6 text-center hover:bg-teal-50'>
                <div className='text-4xl mb-4'>⚖️</div>
                <h3 className='text-xl font-semibold mb-2'>Legal & Compliance</h3>
                <p className='text-gray-600 text-sm mb-3'>
                  DPDP, GDPR, HIPAA, blockchain law, and tech contract support.
                </p>
                <a href="#" className='text-teal-600 font-medium hover:underline'>
                  Learn More →
                </a>
              </div>
              <div className='bg-white shadow-md rounded-lg p-6 text-center hover:bg-teal-50'>
              <div className='text-4xl mb-4'>🔍</div>
              <h3 className='text-xl font-semibold mb-2'>Forensics & Response</h3>
              <p className='text-gray-600 text-sm mb-3'>
                Investigations, evidence collection, and cybercrime legal support.
              </p>
              <a href="#" className='text-teal-600 font-medium hover:underline'>
                Learn More →
              </a>
            </div>
            <div className='bg-white shadow-md rounded-lg p-6 text-center hover:bg-teal-50'>
              <div className='text-4xl mb-4'>🎓</div>
              <h3 className='text-xl font-semibold mb-2'>Training & Awareness</h3>
              <p className='text-gray-600 text-sm mb-3'>
                CISO training, cyber law awareness, and compliance workshops.
              </p>
              <a href="#" className='text-teal-600 font-medium hover:underline'>
                Learn More →
              </a>
            </div>
            <div className='bg-white shadow-md rounded-lg p-6 text-center hover:bg-teal-50'>
              <div className='text-4xl mb-4'>📜</div>
              <h3 className='text-xl font-semibold mb-2'>Policy & Documentation</h3>
              <p className='text-gray-600 text-sm mb-3'>
                Drafting of tech policies, IT governance docs, and contracts.
              </p>
              <a href="#" className='text-teal-600 font-medium hover:underline'>
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </div>
    )
}

export default ServiceSection;