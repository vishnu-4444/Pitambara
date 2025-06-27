import React from "react";

const CTASection = () => {
  return (
    <section className="bg-teal-600 text-white py-12 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Secure Your Digital Future?
        </h2>
        <p className="text-lg mb-6">
          Partner with experts who understand both cybersecurity and legal landscapes.
        </p>
        <a
          href="contact"
          className="inline-block bg-white text-teal-600 font-semibold px-6 py-3 rounded-md shadow hover:bg-gray-100 transition"
        >
          Talk to Our Experts
        </a>
      </div>
    </section>
  );
};

export default CTASection;
