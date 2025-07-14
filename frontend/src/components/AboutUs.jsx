"use client";
import { useEffect, useRef, useState } from "react";
import useTypewriterEffect from "../hooks/useTypewriterEffect.js";

const AboutUs = () => {
    const sectionRef = useRef(null);
    const [startTyping, setStartTyping] = useState(false);

    const fullText = "Providing Expert Advice On\nBusiness Consulting, Planning\n& Success";

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
        <section className="bg-white" ref={sectionRef}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-16 py-16">
                <div className="relative w-full md:w-1/2">
                    <img
                        src="/static/about_img.jpg"
                        alt="people"
                        className="rounded-xl object-cover w-full h-auto rounded-tr-4xl"
                    />

                    <div className="absolute bottom-40 left-[-50px] bg-white shadow-lg px-6 py-3 rounded-lg flex items-center gap-2 animate-wiggle-x">
                    <div className="p-3 bg-dyellow rounded-lg">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            className="w-8 h-8 fill-white"
                        >
                            <polygon points="0.64 11.85 -0.02 11.1 2.55 8.85 4.57 10.4 9.25 5.25 12.97 8.84 15.37 6.79 16.02 7.54 12.94 10.2 9.29 6.68 4.69 11.76 2.59 10.14 0.64 11.85" />
                        </svg>
                        </div>

                        <div>
                            <p className="text-medium font-bold text-dblue">98%</p>
                            <p className="text-sm text-dblue">Business Goal</p>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-1/2 space-y-6">
                    <p className="text-xl font-bold uppercase text-dyellow tracking-widest">
                        About Our Company
                    </p>

                    <h2 className="text-xl md:text-4xl font-bold leading-tight text-dblue whitespace-pre-line">
                        {typedText}
                    </h2>

                    <p className="text-base text-dblue leading-relaxed">
                        We help you unlock your full business potential with tailored stratergies,
                        expert analysis, and sustainable growth tools to give your company a
                        competitive edge in today's fast-moving market.
                    </p>

                    <div className="flex flex-col lg:flex-row items-start justify-between mt-8 gap-12 w-full">
                        {/* Left block - 25 Years */}
                        <div className="bg-[#fdf0db] p-6 rounded-2xl text-center w-full max-w-[200px] flex-shrink-0">
                            <p className="text-6xl font-extrabold text-dyellow">25</p>
                            <p className="text-sm font-bold text-dblue leading-snug mt-2">
                            YEARS <br /> EXPERIENCE <br /> IN CONSULTING
                            </p>
                        </div>

                        {/* Vertical line */}
                        <div className="w-px bg-gray-400 h-44 hidden lg:block"></div>

                        {/* Right block - Features list */}
                        <div className="space-y-6 text-dblue text-base font-semibold w-full lg:max-w-md">
                            <div className="flex items-center gap-2 pt-5">
                            <span className="text-dyellow text-xl">➜</span> Business Growth
                            </div>
                            <div className="flex items-center gap-2">
                            <span className="text-dyellow text-xl">➜</span> Analysis & Research
                            </div>
                            <div className="flex items-center gap-2">
                            <span className="text-dyellow text-xl">➜</span> 100% Secure
                            </div>
                        </div>
                        </div>

                        {/* CEO Info */}
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-10 pt-6 border-t border-gray-400">
                        <div className="flex items-center gap-4">
                            <img src="/static/author_img.png" alt="CEO" className="w-14 h-14 rounded-full object-cover border" />
                            <div>
                            <p className="font-signature text-lg text-dblue">Martinaze.</p>
                            <p className="font-bold text-dblue">Martinaze, CEO</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 text-dblue">
                            <div className="bg-[#e6f0fc] p-3 rounded-full">
                            📞
                            </div>
                            <div>
                            <p className="text-sm text-gray-600">Hot Line Number</p>
                            <p className="text-lg font-bold text-dblue">+123 8989 444</p>
                            </div>
                        </div>
                        </div>

                </div>
            </div>
        </section>
    )
}

export default AboutUs;