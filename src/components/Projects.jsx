"use client";

import { useState } from "react";
import Reveal from "./Reveal";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = ["All", "Hotels & Resorts", "Commercial Spaces", "Residential Projects"];

  const projects = [
    {
      title: "Amanwella Resort Grounds",
      category: "Hotels & Resorts",
      location: "Tangalle",
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Luxury Boutique Villa Poolside",
      category: "Hotels & Resorts",
      location: "Bentota",
      image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Corporate Plaza Green Lawn",
      category: "Commercial Spaces",
      location: "Colombo 03",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Business Hub Courtyard Garden",
      category: "Commercial Spaces",
      location: "Colombo 02",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Modernist Villa Tropical Gardens",
      category: "Residential Projects",
      location: "Kandy",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "High-End Backyard Patio & Paving",
      category: "Residential Projects",
      location: "Galle",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  const handlePrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prevIndex) =>
      prevIndex === 0 ? filteredProjects.length - 1 : prevIndex - 1
    );
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prevIndex) =>
      prevIndex === filteredProjects.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="projects" className="py-20 bg-beige/35">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-widest text-gold mb-3 block">
              Our Portfolio
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-charcoal mb-4">
              Featured Landscaping Projects
            </h2>
            <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed">
              Take a look at some of our premium projects. We design spaces that elevate property aesthetics and bring natural balance.
            </p>
          </Reveal>
        </div>

        {/* Categories Tabs */}
        <Reveal delay="delay-100">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-full px-5 py-2.5 text-xs uppercase tracking-wider font-bold transition-all cursor-pointer ${
                  filter === cat
                    ? "bg-primary text-white shadow-md shadow-primary/20"
                    : "bg-white text-charcoal/80 border border-charcoal/10 hover:bg-beige"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <Reveal
              key={idx}
              delay={
                idx % 3 === 0
                  ? ""
                  : idx % 3 === 1
                  ? "delay-100"
                  : "delay-200"
              }
            >
              <div
                onClick={() => setLightboxIndex(idx)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl bg-charcoal border border-charcoal/15 shadow-md hover:shadow-2xl transition-all duration-500"
              >
                {/* Project Image */}
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-gold mb-1">
                    {project.category}
                  </span>
                  <h3 className="font-display text-lg font-bold text-white mb-1 leading-tight">
                    {project.title}
                  </h3>
                  <p className="flex items-center gap-1 text-xs text-white/75">
                    <svg className="h-3.5 w-3.5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{project.location}, Sri Lanka</span>
                  </p>

                  {/* View Icon */}
                  <div className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-all duration-300">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* View All Projects Button */}
        <Reveal delay="delay-300">
          <div className="text-center mt-12">
            <button className="rounded-full border border-primary text-primary px-8 py-3.5 text-xs uppercase tracking-widest font-extrabold transition-all hover:bg-primary hover:text-white hover:shadow-lg active:scale-95 cursor-pointer">
              View All Projects
            </button>
          </div>
        </Reveal>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex flex-col justify-center items-center p-4 select-none animate-fade-in">
          {/* Close Lightbox */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer z-20"
            aria-label="Close lightbox"
          >
            <svg className="h-6 w-6 sm:h-7 sm:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-4 md:left-8 text-white/70 hover:text-white p-2 sm:p-3 rounded-full hover:bg-white/10 transition-colors cursor-pointer z-10"
            aria-label="Previous image"
          >
            <svg className="h-6 w-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image Containment */}
          <div className="max-w-4xl max-h-[75vh] relative flex flex-col items-center px-4">
            <img
              src={filteredProjects[lightboxIndex].image}
              alt={filteredProjects[lightboxIndex].title}
              className="max-w-full max-h-[60vh] sm:max-h-[70vh] object-contain rounded-lg shadow-2xl border border-white/10 animate-scale-in"
            />
            <div className="mt-4 text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-gold">
                {filteredProjects[lightboxIndex].category}
              </span>
              <h4 className="text-white text-base sm:text-lg font-bold font-display mt-0.5">
                {filteredProjects[lightboxIndex].title}
              </h4>
              <p className="text-[10px] sm:text-xs text-white/60 mt-0.5">
                Location: {filteredProjects[lightboxIndex].location}, Sri Lanka
              </p>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-4 md:right-8 text-white/70 hover:text-white p-2 sm:p-3 rounded-full hover:bg-white/10 transition-colors cursor-pointer z-10"
            aria-label="Next image"
          >
            <svg className="h-6 w-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
