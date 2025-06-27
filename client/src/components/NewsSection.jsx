import React from "react";

const NewsSection = () => {
    return (
        <div className='py-16 bg-gray-50 '>
        <div className='max-w-6xl mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center mb-10 text-black'>
            Latest News & Updates
          </h2>
          <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            <div className='bg-white p-6 rounded-lg shadow hover:shadow-md transition'>
              <span className="text-sm text-teal-600 font-medium">DPDP Update</span>
              <h3 className='text-lg font-semibold text-black mt-2'>India Finalizes DPDP Bill 2025</h3>
              <p className='text-sm text-gray-600 mt-2'>
              The new digital data law brings stricter compliance rules for organizations handling personal data.
              </p>
              <p className='text-xs text-gray-400 mt-3'>June 27, 2025</p>
              <a href="#" className='inline-block mt-3 text-teal-600 hover:underline text-sm'>Read More →</a>
            </div>
            <div className='bg-white p-6 rounded-lg shadow hover:shadow-md transition'>
              <span className="text-sm text-teal-600 font-medium">Awards</span>
              <h3 className='text-lg font-semibold text-black mt-2'>Pitanbara Wins 2025 Cyber Legal Excellence Award</h3>
              <p className='text-sm text-gray-600 mt-2'>
              Recognized for outstanding contributions to data privacy compliance and cybersecurity legal advisory.
              </p>
              <p className='text-xs text-gray-400 mt-3'>May 15, 2025</p>
              <a href="#" className='inline-block mt-3 text-teal-600 hover:underline text-sm'>Read More →</a>
            </div>
            <div className='bg-white p-6 rounded-lg shadow hover:shadow-md transition'>
              <span className="text-sm text-teal-600 font-medium">Security Alert</span>
              <h3 className='text-lg font-semibold text-black mt-2'>New Ransomware Variant Targets Indian Law Firms</h3>
              <p className='text-sm text-gray-600 mt-2'>
              A new malware strain is exploiting outdated server setups. Immediate patching and audit recommended.
              </p>
              <p className='text-xs text-gray-400 mt-3'>June 10, 2025</p>
              <a href="#" className='inline-block mt-3 text-teal-600 hover:underline text-sm'>Read More →</a>
            </div>
          </div>
        </div>
      </div>
    )
}

export default NewsSection;