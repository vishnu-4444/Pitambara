"use client";

import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const ReachUsSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    saveInfo: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message
        }),
      });
  
      const result = await response.json();
  
      if (result.success) {
        alert("Thank you! Your message has been sent.");
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          saveInfo: false
        });
      } else {
        alert("Failed to send your message. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending contact message:", error);
      alert("Something went wrong. Please try again.");
    }
  };
  

  return (
    <div className="max-w-6xl mx-auto p-0 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column - Contact Information */}
        <div className="space-y-8 pt-[5px]">
          <div>
            <h2 className="text-4xl font-bold text-tblue mb-6">How can we help you?</h2>
            <p className="text-pblue text-lg leading-relaxed">
              Our mission is to enable organizations to thrive in today's digital world by providing trusted guidance, proactive risk management, and compliance support—all under one roof.
            </p>
          </div>

          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-start space-x-4">
              <div className="bg-blue-50 p-3 rounded-full">
                <MapPin className="w-6 h-6 text-tblue" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-tblue mb-2">Address- HQ</h3>
                <p className="text-pblue">
                  365, Sector B, Vijay Nagar, Indore, Madhya Pradesh,<br />
                  452010
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4">
              <div className="bg-blue-50 p-3 rounded-full">
                <Phone className="w-6 h-6 text-tblue" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-tblue mb-2">Phone</h3>
                <p className="text-pblue">+91 99817 01277</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4">
              <div className="bg-blue-50 p-3 rounded-full">
                <Mail className="w-6 h-6 text-tblue" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-tblue mb-2">E-mail</h3>
                <p className="text-pblue">pitambaratlcinfo@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="p-6 rounded-lg pt-[5px]" style={{ backgroundColor: '#ecf6fa' }}>
          <h2 className="text-3xl font-bold text-tblue mb-3 pt-3">Give Us a Message</h2>
          <p className="text-pblue mb-6">
            Your email address will not be published. Required fields are marked <span className="text-red-500">*</span>
          </p>

          <div className="space-y-6">
            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tblue focus:border-transparent resize-none"
                placeholder="Message"
              />
            </div>

            {/* Name, Email, Phone Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tblue focus:border-transparent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tblue focus:border-transparent"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tblue focus:border-transparent"
                  placeholder="Your phone"
                />
              </div>
            </div>

            {/* Checkbox */}
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="saveInfo"
                name="saveInfo"
                checked={formData.saveInfo}
                onChange={handleInputChange}
                className="mt-1 w-4 h-4 text-tblue border-gray-300 rounded focus:ring-tblue focus:ring-2"
              />
              <label htmlFor="saveInfo" className="text-pblue text-sm">
                Save my name, email, and website in this browser for the next time I comment.
              </label>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="bg-dyellow text-white font-semibold py-3 px-8 rounded-md hover:bg-orange-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-dyellow focus:ring-offset-2"
            >
              SUBMIT POST
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReachUsSection;
