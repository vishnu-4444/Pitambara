"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    title: "Strategic marketing",
    icon: "/static/tempicons/lineboard.png",
  },
  {
    title: "Insights & analytics",
    icon: "/static/tempicons/linecoin.png",
  },
  {
    title: "Tax Audit",
    icon: "/static/tempicons/tax.png",
  },
  {
    title: "Financial Growth",
    icon: "/static/tempicons/arrow.png",
  },
  {
    title: "Business Development",
    icon: "/static/tempicons/coinpaper.png",
  },
  {
    title: "Revenue Calculate",
    icon: "/static/tempicons/paper.png",
  },
];

const SServiceSection = () => {
  return (
    <section className="bg-white text-white py-20 px-6 text-center">
      <h4 className="text-dyellow font-semibold tracking-wider uppercase mb-3">
        What We Offer
      </h4>
      <h2 className="text-3xl md:text-4xl font-bold mb-12 leading-snug whitespace-pre-line text-dblue">
        Perfect Cyber Legal & Technical <br />
        Consultancy
      </h2>
      <p className="text-center text-pblue w-[600px] mx-auto mb-12">
        Pitambara Techno Legal Consultancy LLP brings together deep technical and legal expertise to deliver integrated cybersecurity, privacy, technical security, and legal services.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white text-dblue p-6 rounded-2xl shadow-md text-left group transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-[10px] bg-[#ecf6fa] flex items-center justify-center transition-transform duration-300 group-hover:scale-x-[-1]">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <h3 className="text-lg font-bold">{service.title}</h3>
            </div>
            <p className="text-sm text-gray-500 mb-6">
              Mauris utenim sitamet lacus ornar eary ullamcperson Praesent
              plaacera treat neque eu purus rhoncu
            </p>
            <button className="bg-black text-dyellow font-semibold text-sm px-4 py-2 rounded-md hover:brightness-110 transition-all">
              READ MORE →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SServiceSection;
