"use client";

import { useState, useEffect } from "react";
import Reveal from "./Reveal";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews = [
    {
      quote: "Paramount Garden Service completely transformed our boutique resort's pool lawn and pathways. Their team understood our luxury tropical aesthetic and completed the interlock paving and planting on a tight schedule. Highly recommended for commercial projects!",
      author: "Nalin De Silva",
      role: "General Manager, Palm Garden Resort",
      location: "Bentota",
      stars: 5,
    },
    {
      quote: "We hired Paramount for our residential villa in Kandy. The sloped garden and drainage were a major issue during monsoon season. They engineered a beautiful dry-creek drainage system integrated with stone retaining walls and palm borders. Professional work throughout.",
      author: "Dr. Priyantha Senanayake",
      role: "Luxury Estate Owner",
      location: "Kandy",
      stars: 5,
    },
    {
      quote: "Excellent communication, timely execution, and top-tier materials. The commercial plaza landscape they designed for our corporate headquarters in Colombo has drawn compliments from all our clients. They are definitely the best landscaping team in Sri Lanka.",
      author: "Dilani Wickremasinghe",
      role: "Director of Facilities, Apex Holdings",
      location: "Colombo 03",
      stars: 5,
    },
  ];

  // Auto transition every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 bg-beige/35 relative overflow-hidden">
      {/* Decorative quotes background */}
      <div className="absolute top-10 left-10 text-gold/5 font-serif text-[180px] pointer-events-none select-none leading-none">
        “
      </div>
      <div className="absolute bottom-10 right-10 text-gold/5 font-serif text-[180px] pointer-events-none select-none leading-none">
        ”
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-widest text-gold mb-3 block">
              Testimonials
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-charcoal">
              What Our Clients Say
            </h2>
          </Reveal>
        </div>

        {/* Carousel Slider */}
        <Reveal delay="delay-100">
          <div className="relative min-h-[360px] sm:min-h-[300px] flex items-center justify-center">
            {reviews.map((review, idx) => (
              <div
                key={idx}
                className={`w-full text-center transition-all duration-700 ease-in-out absolute ${
                  idx === activeIndex
                    ? "opacity-100 translate-x-0 scale-100 z-10"
                    : "opacity-0 translate-x-8 scale-95 pointer-events-none z-0"
                }`}
              >
                {/* Star Rating */}
                <div className="flex justify-center gap-1 mb-6 text-gold">
                  {[...Array(review.stars)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote text */}
                <blockquote className="font-sans text-sm sm:text-base md:text-xl font-light text-charcoal/90 leading-relaxed italic mb-8 max-w-2xl mx-auto px-4">
                  "{review.quote}"
                </blockquote>

                {/* Author metadata */}
                <div>
                  <p className="font-display font-bold text-charcoal text-base">
                    {review.author}
                  </p>
                  <p className="text-xs text-gold font-semibold uppercase tracking-wider mt-1">
                    {review.role} — {review.location}, Sri Lanka
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Controls and Pagination */}
        <div className="flex items-center justify-center gap-6 mt-10">
          {/* Prev Arrow */}
          <button
            onClick={handlePrev}
            className="p-2 rounded-full border border-charcoal/10 bg-white text-charcoal/65 hover:text-primary hover:border-primary transition-colors cursor-pointer"
            aria-label="Previous testimonial"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Pagination Indicators */}
          <div className="flex gap-2.5">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === activeIndex ? "w-6 bg-primary" : "w-2.5 bg-charcoal/20"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Next Arrow */}
          <button
            onClick={handleNext}
            className="p-2 rounded-full border border-charcoal/10 bg-white text-charcoal/65 hover:text-primary hover:border-primary transition-colors cursor-pointer"
            aria-label="Next testimonial"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
