"use client";

import { useState, useEffect } from "react";

export default function Hero({ onOpenQuote }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = ["/1.webp", "/2.jpg", "/3.jpg"];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // Swap slide every 5 seconds
    return () => clearInterval(timer);
  }, [slides.length]);

  const trustBadges = [
    {
      label: "Hotel & Resort Specialists",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      label: "Island-wide Service",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
    },
    {
      label: "Professional Team",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-charcoal"
    >
      {/* Background Slideshow with crossfade and Ken Burns scaling */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out transform ${
            index === currentSlide
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105 pointer-events-none"
          }`}
          style={{
            backgroundImage: `url('${slide}')`,
          }}
        />
      ))}
      
      {/* Dark Readability Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex flex-col items-start text-left mt-12">
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white max-w-4xl leading-tight sm:leading-none tracking-tight mb-6 animate-fade-in">
          Transforming Hotels, Resorts &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold">
            Commercial Spaces
          </span>{" "}
          Across Sri Lanka
        </h1>

        <p className="text-lg sm:text-xl text-white/85 max-w-2xl leading-relaxed mb-10 font-sans font-light animate-fade-in delay-200">
          Paramount Garden Service delivers premium landscaping solutions with quality workmanship and lasting results for hotels, commercial properties, and high-end residences.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in delay-300 w-full sm:w-auto justify-start">
          <button
            onClick={onOpenQuote}
            className="w-full sm:w-auto rounded-full bg-gold px-8 py-4 text-sm uppercase tracking-wider font-bold text-white transition-all hover:bg-gold-dark hover:shadow-lg hover:shadow-gold/20 active:scale-95 cursor-pointer"
          >
            Request a Quote
          </button>
          <a
            href="#projects"
            className="w-full sm:w-auto rounded-full border-2 border-white/80 bg-white/5 backdrop-blur-sm px-8 py-4 text-sm uppercase tracking-wider font-bold text-white text-center transition-all hover:bg-white hover:text-primary active:scale-95"
          >
            View Projects
          </a>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 w-full max-w-4xl border-t border-white/10 pt-10 animate-fade-in delay-400">
          {trustBadges.map((badge, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 sm:gap-4 px-4 py-3 sm:px-6 sm:py-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-gold/30 transition-colors group"
            >
              <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-gold/10 text-gold group-hover:scale-110 transition-transform flex-shrink-0">
                {badge.icon}
              </div>
              <div className="text-left">
                <p className="text-xs sm:text-sm font-semibold tracking-wider text-white">
                  {badge.label}
                </p>
                <p className="text-[10px] sm:text-xs text-white/60">Guaranteed quality</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Soft Wave Decor */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-beige to-transparent pointer-events-none" />
    </section>
  );
}
