"use client";

import { useState } from "react";
import Reveal from "./Reveal";

export default function Services({ onOpenQuote }) {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: "commercial",
      title: "Commercial & Hotel Landscaping",
      desc: "Lush gardens, resort-style pool areas, and professional grounds maintenance for hotels, resorts, and businesses across Sri Lanka.",
      details: [
        "Resort-style pool gardens and relaxation decks",
        "Large-scale turf laying (sodding) and maintenance",
        "Architectural plant selection & tropical feature gardens",
        "Landscape irrigation systems and smart water control",
        "Long-term corporate garden maintenance contracts",
      ],
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      id: "residential",
      title: "Residential Landscaping",
      desc: "Tailored residential gardens, neat borders, and outdoor seating areas that turn your backyard into a luxury private sanctuary.",
      details: [
        "Bespoke residential garden design and spatial layouts",
        "Selection of aromatic, ornamental, and tropical flora",
        "Privacy hedges, lawn edging, and shrub styling",
        "Backyard seating areas, pergolas, and deck gardens",
        "Soil enrichment, organic weeding, and health care",
      ],
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      id: "hard-landscaping",
      title: "Hard Landscaping",
      desc: "Custom water features, stone walls, garden steps, and architectural features that provide form, structure, and value.",
      details: [
        "Stunning garden ponds, waterfalls, and water walls",
        "Natural stone pathways, garden steps, and rock gardens",
        "Retaining walls, borders, and architectural stone columns",
        "Custom gazebos, pergolas, and outdoor pavilions",
        "External accent and pathway lighting integration",
      ],
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      id: "interlock-paving",
      title: "Interlock Paving",
      desc: "Heavy-duty paving for driveways, resort walkways, and pool decks using premium grade interlocking pavers.",
      details: [
        "High-density interlock paving for heavy-vehicle driveways",
        "Decorative geometric patterns and multi-color paving",
        "Resort walkway paving, pool deck surrounds, and patios",
        "Expert site preparation, compaction, and edge-restraints",
        "Paver sealing, cleaning, and joint-sand maintenance",
      ],
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      ),
    },
    {
      id: "drainage",
      title: "Drainage Solutions",
      desc: "Engineered sub-surface drains, grading, and water management that protect your landscape investment from tropical rains.",
      details: [
        "Custom garden surface grading and water slope correction",
        "Sub-surface French drains, catch basins, and dry wells",
        "Erosion control on sloped terrain and banking walls",
        "Rain garden integration for sustainable storm management",
        "Heavy-duty drain channels for resort walkways & driveways",
      ],
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="py-20 bg-primary/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-widest text-gold mb-3 block">
              Our Specialties
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-charcoal mb-4">
              Premium Landscaping Services
            </h2>
            <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed">
              We provide a complete suite of professional landscaping services designed to thrive in Sri Lanka's tropical climate, ensuring beauty and longevity.
            </p>
          </Reveal>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <Reveal
              key={service.id}
              delay={idx === 0 ? "" : idx === 1 ? "delay-100" : idx === 2 ? "delay-200" : idx === 3 ? "" : "delay-100"}
              className="h-full"
            >
              <div className="group relative bg-white rounded-2xl p-6 md:p-8 border border-primary/10 hover:border-gold/50 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                {/* Icon Container */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>

                {/* Title & Desc */}
                <h3 className="font-display text-lg sm:text-xl font-bold text-charcoal mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed mb-6 flex-grow">
                  {service.desc}
                </p>

                {/* Action Button */}
                <div className="mt-auto">
                  <button
                    onClick={() => setActiveService(service)}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary group-hover:text-gold transition-colors cursor-pointer"
                  >
                    <span>Learn More</span>
                    <svg
                      className="h-4 w-4 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Details Modal */}
      {activeService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/55 backdrop-blur-sm"
            onClick={() => setActiveService(null)}
          />

          {/* Modal Container */}
          <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white p-6 shadow-2xl border border-beige animate-scale-in">
            {/* Close Button */}
            <button
              onClick={() => setActiveService(null)}
              className="absolute right-4 top-4 rounded-full p-2 text-charcoal/60 transition-colors hover:bg-beige hover:text-primary"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Content */}
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
              {activeService.icon}
            </div>

            <h3 className="font-display text-xl font-bold text-charcoal mb-2">
              {activeService.title}
            </h3>
            <p className="text-xs sm:text-sm text-charcoal/70 mb-6">
              {activeService.desc}
            </p>

            <h4 className="text-xs font-bold uppercase tracking-widest text-gold mb-3">
              Included Specifications
            </h4>
            <ul className="space-y-2.5 mb-8">
              {activeService.details.map((detail, idx) => (
                <li key={idx} className="flex gap-2.5 items-start text-xs sm:text-sm text-charcoal/80">
                  <span className="flex-shrink-0 mt-0.5 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>

            <div className="flex gap-4">
              <button
                onClick={() => {
                  setActiveService(null);
                  onOpenQuote();
                }}
                className="flex-1 rounded-lg bg-primary py-2.5 text-center text-xs uppercase tracking-wider font-bold text-white transition-colors hover:bg-primary-dark cursor-pointer"
              >
                Request Consultation
              </button>
              <button
                onClick={() => setActiveService(null)}
                className="flex-1 rounded-lg border border-charcoal/20 py-2.5 text-center text-xs uppercase tracking-wider font-bold text-charcoal transition-colors hover:bg-beige cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
