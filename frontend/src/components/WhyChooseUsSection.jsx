"use client";
import { useState } from "react";
import Image from "next/image";

const WhyChooseUsSection = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="flex-1">
          <h5 className="text-dyellow font-semibold uppercase mb-3">
            Why We Are The Best
          </h5>
          <h2 className="text-4xl font-bold text-tblue mb-4 leading-snug">
            We Offer Business Insight <br /> World Class Consulting
          </h2>
          <p className="text-pblue mb-8">
            We successfully cope with tasks of varying complexity, provide area
            longevity guarantees, and regularly master new practice. Following
            gives heur portfolio includes.
          </p>

          {/* Feature Points */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-4 rounded-lg" style={{ backgroundColor: "#fef6e6" }}>
                <Image
                  src="/static/tempicons/finance.png"
                  alt="Finance Planning"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>

              <div>
                <h3 className="text-lg font-bold text-tblue">
                  Finance Planning
                </h3>
                <p className="text-pblue text-lg">
                  Agilos helps youconna doing <br />tempor incididunt.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-4 rounded-lg" style={{ backgroundColor: "#fef6e6" }}>
                <Image
                  src="/static/tempicons/market.png"
                  alt="Market Analysis"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>

              <div>
                <h3 className="text-lg font-bold text-tblue">
                  Market Analysis
                </h3>
                <p className="text-pblue text-lg">
                  Agilos helps youconna doing <br />tempor incididunt.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 relative">
        <div className="border-20 border-gray-200 rounded-full overflow-hidden w-[400px] h-[400px] mx-auto relative shadow-xl">
            <Image
              src="/static/h3_choose_img01.jpg"
              alt="Consulting Team"
              fill
              sizes="400px"
              style={{ objectFit: 'cover' }}
              className="transition-transform duration-300 hover:scale-105"
            />
            <button
              onClick={() => setShowModal(true)}
              className="absolute inset-0 flex items-center justify-center group z-10"
            >
              <div className="relative">
                {/* Pulsing ring behind the button */}
                <div className="pulse-ring"></div>

                {/* Actual play button */}
                <div className="bg-dblue w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-dyellow group-hover:scale-110 shadow-lg z-10 relative">
                    <svg
                    className="w-10 h-10 text-white ml-1 transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    >
                    <path d="M6 4l10 6-10 6V4z" />
                    </svg>
                </div>
                </div>

            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="relative bg-white rounded-xl overflow-hidden max-w-4xl w-full shadow-2xl">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 z-10 bg-white bg-opacity-80 hover:bg-opacity-100 text-dblue font-bold text-xl w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              ✕
            </button>
            <div className="w-full aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/6mkoGSqTqFI?autoplay=1"
                title="YouTube video"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default WhyChooseUsSection;