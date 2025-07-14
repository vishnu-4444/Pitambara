"use client";
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Trophy, Smile, Globe, Clock } from 'lucide-react';
import useTypewriterEffect from "../hooks/useTypewriterEffect.js";

// Counter component moved outside to prevent recreation
const Counter = ({ end, suffix, duration = 3000, shouldAnimate }) => {
  const [count, setCount] = useState(0);
  const [hasCounterAnimated, setHasCounterAnimated] = useState(false);

  useEffect(() => {
    // Only animate if section is visible AND this counter hasn't animated yet
    if (!shouldAnimate || hasCounterAnimated) return;

    setHasCounterAnimated(true); // Mark this counter as animated
    
    let startTime = null;
    const startCount = 0;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const currentCount = Math.floor(progress * (end - startCount) + startCount);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [shouldAnimate, hasCounterAnimated, end, duration]);

  return <span>{count}{suffix}</span>;
};

const ProjectSection = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);
  const [direction, setDirection] = useState('next');

  const projects = [
    {
      id: 1,
      name: 'Finance',
      category: 'Financial Management',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
      image: '/static/project01.jpg'
    },
    {
      id: 2,
      name: 'Portfolio Manager',
      category: 'Investment Solutions',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
      image: '/static/project04.jpg'
    },
    {
      id: 3,
      name: 'Inventory Manager',
      category: 'Supply Chain',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
      image: '/static/project01.jpg'
    },
    {
      id: 4,
      name: 'Market',
      category: 'Market Analysis',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
      image: '/static/project04.jpg'
    }
  ];

  const stats = [
    { icon: Trophy, number: 45, suffix: '+', label: 'Successfully Completed Projects' },
    { icon: Smile, number: 92, suffix: 'K', label: 'Satisfied 100% Our Clients' },
    { icon: Globe, number: 19, suffix: '+', label: 'All Over The World We Are Available' },
    { icon: Clock, number: 25, suffix: '+', label: 'Years of Experiences To Run This Company' }
  ];

  // Intersection Observer for stats animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const nextProject = () => {
    if (isTransitioning) return;
    setDirection("next");
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
      setIsTransitioning(false);
    }, 700);
  };
  
  const prevProject = () => {
    if (isTransitioning) return;
    setDirection("prev");
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
      setIsTransitioning(false);
    }, 700);
  };

  const [startTyping, setStartTyping] = useState(false);

  const fullText = "We Provide Solutions To \n Big & Small Organizations For Work";

  const typedText = useTypewriterEffect({
    text: fullText,
    speed: 40,
    start: startTyping,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartTyping(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="w-full bg-[#f5fbfb] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-orange-500 font-bold mb-2 text-lg">OUR PROJECTS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-tblue mb-4 leading-snug whitespace-pre-line">
            {typedText}
          </h2>
        </div>

        {/* Project Carousel */}
        <div className="relative mb-20 overflow-hidden">
          <div className="flex justify-center items-center">
            {/* Left Arrow */}
            <button
              onClick={prevProject}
              disabled={isTransitioning}
              className="absolute left-0 z-20 p-3 rounded-full bg-white shadow-lg hover:bg-dblue transition-shadow duration-200 group"
            >
              <ChevronLeft
                size={24}
                className="text-tblue group-hover:text-white transition-colors duration-200"
              />
            </button>

            {/* Project Card Container */}
            <div className="w-[600px] max-w-5xl mx-10 relative h-120">
              {/* Current Project */}
              <div
                key={`current-${currentProject}`}
                className={`absolute inset-0 transition-all duration-700 ease-out ${
                  isTransitioning
                    ? direction === 'next'
                      ? 'transform translate-x-[200%] opacity-100'
                      : 'transform translate-x-[-200%] opacity-100'
                    : 'transform translate-x-0 opacity-100'
                }`}
              >
                {/* Background Image */}
                <div className="absolute top-0 bottom-0 left-0 right-[-8rem] rounded-lg overflow-hidden">
                  <img
                    src={projects[currentProject].image}
                    alt={projects[currentProject].name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Project Card - Overlayed */}
                <div className="absolute -left-48 top-0 h-full flex items-center z-10">
                  <div className="bg-dblue text-white p-8 rounded-lg shadow-2xl w-96">
                    <p className="text-dyellow font-medium mb-2 text-sm">
                      {projects[currentProject].category}
                    </p>
                    <h3 className="text-3xl font-bold mb-4 hover:text-dyellow">
                      {projects[currentProject].name}
                    </h3>
                    <p className="text-gray-200 mb-6 leading-relaxed text-sm">
                      {projects[currentProject].description}
                    </p>
                    <button className="relative overflow-hidden px-6 py-3 text-tblue font-bold text-sm rounded-lg bg-white group flex items-center gap-2">
                      <span className="absolute inset-0 bg-dyellow origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-700 ease-in-out z-0" />
                      <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                        SEE DETAILS
                        <ChevronRight size={20} />
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Next Project (for smooth transition) */}
              {isTransitioning && (
                <div
                  key={`next-${(currentProject + (direction === 'next' ? 1 : -1) + projects.length) % projects.length}`}
                  className="absolute inset-0 transition-all duration-700 ease-out transform translate-x-0 opacity-100"
                  style={{
                    transform: direction === 'next' ? 'translateX(200%)' : 'translateX(-200%)',
                    animation: `slideIn${direction === 'next' ? 'Left' : 'Right'} 0.7s ease-out forwards`
                  }}
                >
                  {/* Background Image */}
                  <div className="absolute top-0 bottom-0 left-0 right-[-8rem] rounded-lg overflow-hidden">
                    <img
                      src={projects[(currentProject + (direction === 'next' ? 1 : -1) + projects.length) % projects.length].image}
                      alt={projects[(currentProject + (direction === 'next' ? 1 : -1) + projects.length) % projects.length].name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Project Card - Overlayed */}
                  <div className="absolute -left-48 top-0 h-full flex items-center z-10">
                    <div className="bg-dblue text-white p-8 rounded-lg shadow-2xl w-96">
                      <p className="text-dyellow font-medium mb-2 text-sm">
                        {projects[(currentProject + (direction === 'next' ? 1 : -1) + projects.length) % projects.length].category}
                      </p>
                      <h3 className="text-3xl font-bold mb-4 hover:text-dyellow">
                        {projects[(currentProject + (direction === 'next' ? 1 : -1) + projects.length) % projects.length].name}
                      </h3>
                      <p className="text-gray-200 mb-6 leading-relaxed text-sm">
                        {projects[(currentProject + (direction === 'next' ? 1 : -1) + projects.length) % projects.length].description}
                      </p>
                      <button className="relative overflow-hidden px-6 py-3 text-tblue font-bold text-sm rounded-lg bg-white group flex items-center gap-2">
                        <span className="absolute inset-0 bg-dyellow origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-700 ease-in-out z-0" />
                        <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                          SEE DETAILS
                          <ChevronRight size={20} />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Arrow */}
            <button
              onClick={nextProject}
              disabled={isTransitioning}
              className="absolute right-0 z-20 p-3 rounded-full bg-white shadow-lg hover:shadow-xl hover:bg-dblue transition-colors transition-shadow duration-200 group"
            >
              <ChevronRight
                size={24}
                className="text-tblue group-hover:text-white transition-colors duration-200"
              />
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                  <IconComponent size={32} className="text-orange-500" />
                </div>
                <div className="text-4xl font-bold text-blue-900 mb-2">
                  <Counter 
                    end={stat.number} 
                    suffix={stat.suffix} 
                    shouldAnimate={hasAnimated}
                  />
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            transform: translateX(-200%);
            opacity: 1;
          }
          to {
            transform: translateX(0%);
            opacity: 1;
          }
        }
        
        @keyframes slideInRight {
          from {
            transform: translateX(200%);
            opacity: 1;
          }
          to {
            transform: translateX(0%);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectSection;