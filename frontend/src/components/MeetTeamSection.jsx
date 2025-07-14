"use client";

import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Share2, X } from 'lucide-react';

const MeetTeamSection = () => {
  const [activeSocial, setActiveSocial] = useState(null);

  // Define custom colors
  const colors = {
    dyellow: '#FFD700',
    dblue: '#1E3A8A',
    tblue: '#3B82F6'
  };

  const teamMembers = [
    {
      id: 1,
      name: 'Swati Mishra',
      credentials: 'ISO 27001 LA & LI | MBA, BBA',
      image: '/static/h3_team_img02.jpg',
      social: [
        { icon: Facebook, url: '#', color: '#1877F2' },
        { icon: Twitter, url: '#', color: '#1DA1F2' },
        { icon: Instagram, url: '#', color: '#E4405F' },
        { icon: Linkedin, url: '#', color: '#0077B5' }
      ]
    },
    {
      id: 2,
      name: 'Abhinandan Mishra',
      credentials: 'ISO 27001 LA & LI | MBA, BBA',
      image: '/static/h3_team_img02.jpg',
      social: [
        { icon: Facebook, url: '#', color: '#1877F2' },
        { icon: Twitter, url: '#', color: '#1DA1F2' },
        { icon: Instagram, url: '#', color: '#E4405F' },
        { icon: Linkedin, url: '#', color: '#0077B5' }
      ]
    },
    {
      id: 3,
      name: 'Rajesh Kumar',
      credentials: 'ISO 27001 LA & LI | MBA, BBA',
      image: '/static/h3_team_img02.jpg',
      social: [
        { icon: Facebook, url: '#', color: '#1877F2' },
        { icon: Twitter, url: '#', color: '#1DA1F2' },
        { icon: Instagram, url: '#', color: '#E4405F' },
        { icon: Linkedin, url: '#', color: '#0077B5' }
      ]
    },
    {
      id: 4,
      name: 'Priya Sharma',
      credentials: 'ISO 27001 LA & LI | MBA, BBA',
      image: '/static/h3_team_img02.jpg',
      social: [
        { icon: Facebook, url: '#', color: '#1877F2' },
        { icon: Twitter, url: '#', color: '#1DA1F2' },
        { icon: Instagram, url: '#', color: '#E4405F' },
        { icon: Linkedin, url: '#', color: '#0077B5' }
      ]
    }
  ];

  const toggleSocial = (memberId) => {
    setActiveSocial(activeSocial === memberId ? null : memberId);
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: colors.dyellow }}
          >
            Meet Our Team
          </h2>
          <p 
            className="text-xl md:text-2xl font-semibold mb-4"
            style={{ color: colors.dblue }}
          >
            Cyber & Information Security Experts
          </p>
          <p 
            className="text-lg max-w-3xl mx-auto"
            style={{ color: colors.tblue }}
          >
            Trusted advisors helping organizations navigate the complex landscape of cybersecurity
            and compliance with expertise, dedication, and proven results.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="relative group">
              {/* Main Card */}
              <div className="relative overflow-hidden rounded-2xl shadow-xl bg-gradient-to-br from-blue-600 to-purple-700 h-96">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Diagonal Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-400 ease-out"></div>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="text-sm opacity-90">{member.credentials}</p>
                </div>

                {/* Social Button */}
                <button
                  onClick={() => toggleSocial(member.id)}
                  className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
                  style={{ backgroundColor: colors.dyellow }}
                >
                  {activeSocial === member.id ? (
                    <X className="w-6 h-6 text-black" />
                  ) : (
                    <Share2 className="w-6 h-6 text-black" />
                  )}
                </button>

                {/* Social Links */}
                {activeSocial === member.id && (
                  <div className="absolute top-20 right-4 flex flex-col gap-2 z-10">
                    {member.social.map((social, index) => {
                      const IconComponent = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.url}
                          className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                          style={{ backgroundColor: social.color }}
                        >
                          <IconComponent className="w-6 h-6 text-white" />
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .group:hover .shine-effect {
          transform: translateX(100%);
        }
        
        .shine-effect {
          transform: translateX(-100%);
          transition: transform 0.4s ease-out;
        }
      `}</style>
    </div>
  );
};

export default MeetTeamSection;