"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Wilson",
    role: "CEO",
    text:
      "Morem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elita Florai Sum Dolor Sit Amet, Consecteture. Borem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elita Moremsit Amet.",
    image: "/static/h3_testimonial_img.png",
    stars: 4,
  },
  {
    name: "Rejo",
    role: "CEO",
    text:
      "Morem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elita Florai Sum Dolor Sit Amet, Consecteture. Borem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elita Moremsit Amet.",
    image: "/static/h3_testimonial_img.png",
    stars: 5,
  },
  {
    name: "Aron",
    role: "CEO",
    text:
      "Morem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elita Florai Sum Dolor Sit Amet, Consecteture. Borem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elita Moremsit Amet.",
    image: "/static/h3_testimonial_img.png",
    stars: 2,
  },
];

const TestimonialCarousel = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState("next");

  const nextProject = () => {
    if (isTransitioning) return;
    setDirection("next");
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentProject((prev) => (prev + 1) % testimonials.length);
      setIsTransitioning(false);
    }, 700);
  };

  const prevProject = () => {
    if (isTransitioning) return;
    setDirection("prev");
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentProject(
        (prev) => (prev - 1 + testimonials.length) % testimonials.length
      );
      setIsTransitioning(false);
    }, 700);
  };

  const renderStars = (count) =>
    Array.from({ length: count }, (_, i) => (
      <Star key={i} size={24} fill="#FFD700" stroke="#FFD700" />
    ));

  return (
    <div className="relative mb-4 overflow-hidden bg-white py-6">
      <div className="flex justify-center items-center relative">
        <button
          onClick={prevProject}
          disabled={isTransitioning}
          className="absolute left-30 z-20 p-3 rounded-full bg-white shadow-lg hover:bg-blue-900 transition-shadow duration-200 group"
        >
          <ChevronLeft
            size={28}
            className="text-blue-500 group-hover:text-white transition-colors duration-200"
          />
        </button>

        <div className="w-[900px] max-w-6xl mx-10 relative h-[500px]">
          <div
            key={`current-${currentProject}`}
            className={`absolute inset-0 p-10 flex items-center gap-10 transition-all duration-700 ease-out bg-gray-50 rounded-3xl shadow-xl ${
              isTransitioning
                ? direction === "next"
                  ? "transform translate-x-[200%] opacity-100"
                  : "transform translate-x-[-200%] opacity-100"
                : "transform translate-x-0 opacity-100"
            }`}
          >
            <img
              src={testimonials[currentProject].image}
              alt={testimonials[currentProject].name}
              className="w-52 h-52 rounded-full object-cover border-4 border-white shadow-lg"
            />
            <div>
              <div className="flex mb-3">{renderStars(testimonials[currentProject].stars)}</div>
              <p className="text-gray-700 italic mb-4 text-lg">
                “ {testimonials[currentProject].text} ”
              </p>
              <h4 className="text-xl font-bold text-blue-900">
                {testimonials[currentProject].name}
              </h4>
              <p className="text-md text-blue-500">
                {testimonials[currentProject].role}, Apexa Agency
              </p>
            </div>
          </div>

          {isTransitioning && (
  <div
    key={`next-${
      (currentProject + (direction === "next" ? 1 : -1) + testimonials.length) %
      testimonials.length
    }`}
    className="absolute inset-0 p-10 flex items-center gap-10 bg-gray-50 rounded-3xl shadow-xl"
    style={{
      transform:
        direction === "next"
          ? "translateX(200%)"
          : "translateX(-200%)",
      animation: `${direction === "next" ? "slideInLeft" : "slideInRight"} 0.7s ease-out forwards`,
    }}
  >
              <img
                src={
                  testimonials[
                    (currentProject + (direction === "next" ? 1 : -1) + testimonials.length) %
                      testimonials.length
                  ].image
                }
                alt={
                  testimonials[
                    (currentProject + (direction === "next" ? 1 : -1) + testimonials.length) %
                      testimonials.length
                  ].name
                }
                className="w-52 h-52 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <div>
                <div className="flex mb-3">
                  {
                    renderStars(
                      testimonials[
                        (currentProject + (direction === "next" ? 1 : -1) + testimonials.length) %
                          testimonials.length
                      ].stars
                    )
                  }
                </div>
                <p className="text-gray-700 italic mb-4 text-lg">
                  “ {
                    testimonials[
                      (currentProject + (direction === "next" ? 1 : -1) + testimonials.length) %
                        testimonials.length
                    ].text
                  } ”
                </p>
                <h4 className="text-xl font-bold text-blue-900">
                  {
                    testimonials[
                      (currentProject + (direction === "next" ? 1 : -1) + testimonials.length) %
                        testimonials.length
                    ].name
                  }
                </h4>
                <p className="text-md text-blue-500">CEO, Apexa Agency</p>
              </div>
            </div>
          )}
        </div>

        <button
          onClick={nextProject}
          disabled={isTransitioning}
          className="absolute right-30 z-20 p-3 rounded-full bg-white shadow-lg hover:shadow-xl hover:bg-blue-900 transition-colors transition-shadow duration-200 group"
        >
          <ChevronRight
            size={28}
            className="text-blue-500 group-hover:text-white transition-colors duration-200"
          />
        </button>
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

export default TestimonialCarousel;
