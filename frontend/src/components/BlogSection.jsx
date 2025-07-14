"use client";

import React, { useState } from 'react';
import { User, Calendar } from 'lucide-react';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      image: "/static/blog_img01.jpg",
      date: "November 19, 2023",
      tag: "Legal",
      title: "Marketing Your Area Business Downturn Now",
      author: "Content Desk"
    },
    {
      id: 2,
      image: "/static/blog_img01.jpg",
      date: "November 19, 2023",
      tag: "Privacy",
      title: "Designing Web Design Often Of Documentation",
      author: "Content Desk"
    },
    {
      id: 3,
      image: "/static/blog_img01.jpg",
      date: "November 19, 2023",
      tag: "Opinion",
      title: "Revealing Images With CSS Mask Animations",
      author: "Content Desk"
    }
  ];

  const [shineMap, setShineMap] = useState({});

  const triggerShine = (id) => {
    setShineMap((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setShineMap((prev) => ({ ...prev, [id]: false }));
    }, 1200); // Match animation duration
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-yellow-200 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            KNOWLEDGE HUB
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Blogs by <span className="text-indigo-600">Discipline</span>
          </h2>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image with Shine Effect */}
              <div
                className="relative w-full h-64 overflow-hidden"
                onMouseEnter={() => triggerShine(post.id)}
              >
                <img
                  src={post.image}
                  className="w-full h-full object-cover"
                  alt={post.title}
                />
                <div className="absolute inset-0 pointer-events-none">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                      transform -skew-x-12
                      ${shineMap[post.id] ? 'translate-x-full transition-transform duration-[1200ms] ease-out' : '-translate-x-full'}
                    `}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Tag and Date */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="px-3 py-1 rounded-full text-sm font-medium bg-white text-pblue transition-all duration-300 cursor-pointer 
                               hover:bg-dyellow hover:text-white"
                  >
                    {post.tag}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.date}
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-bold text-tblue mb-4 transition-colors duration-300 hover:text-dyellow cursor-pointer line-clamp-2"
                >
                  {post.title}
                </h3>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                    <User className="w-4 h-4 text-gray-600" />
                  </div>
                  <span className="text-sm text-dblue">
                    By{' '}
                    <span className="font-medium cursor-pointer text-dyellow transition-colors duration-300 hover:text-tblue">
                      {post.author}
                    </span>
                  </span>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
