"use client";

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';

const Locations = () => {
  const [activeLocation, setActiveLocation] = useState(null);

  const locations = [
    {
      id: 1,
      city: "Indore",
      cityHindi: "इंदौर",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58986.787547939235!2d75.82353027910158!3d22.719676300000017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1641234567890!5m2!1sen!2sin"
    },
    {
      id: 2,
      city: "Gurugram",
      cityHindi: "गुरुग्राम",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.27456813465!2d77.01918174863281!3d28.457622999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1947a2176b07%3A0x391cce1fc7b1a4f2!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1641234567891!5m2!1sen!2sin"
    },
    {
      id: 3,
      city: "Bengaluru",
      cityHindi: "ಬೆಂಗಳೂರು",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.55813114687!2d77.49085452343753!3d12.953945616728066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1641234567892!5m2!1sen!2sin"
    }
  ];

  const handleViewLargerMap = (city) => {
    const searchQuery = encodeURIComponent(`${city} office locations`);
    window.open(`https://www.google.com/maps/search/${searchQuery}`, '_blank');
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-wide mb-2">
            LOCATIONS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-4">
            Our Footprints
          </h2>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {locations.map((location) => (
            <div
              key={location.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Map Container */}
              <div className="relative h-100 bg-gray-200">
                <iframe
                  src={location.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                  title={`${location.city} Office Location`}
                />

              </div>

              {/* No details block since data is removed */}
            </div>
          ))}
        </div>

        
      </div>
    </div>
  );
};

export default Locations;
