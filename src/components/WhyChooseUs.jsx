"use client";

import Reveal from "./Reveal";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Experienced Team",
      desc: "Our landscaping engineers and horticultural experts bring years of luxury hotel and commercial design knowledge to every project.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Quality Workmanship",
      desc: "We take immense pride in execution, ensuring detailed leveling, precise planting, and pristine paving borders that stand the test of time.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      title: "Tailored Solutions",
      desc: "Every site has unique architecture and local environmental challenges. We customize our soil preparation and botanical profiles to fit.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
    },
    {
      title: "Timely Project Delivery",
      desc: "Our project managers work coordinates milestones tightly, delivering completed landscaping to align with your building opening dates.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Durable Materials",
      desc: "From heavy-duty interlocking concrete tiles to high-grade geo-textiles and rich compost mixes, we never compromise on supply quality.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      title: "Island-wide Service",
      desc: "No matter where your hotel, estate, or project is located—Colombo, Galle, Kandy, Jaffna, or Hambantota—we can deploy and deliver.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-widest text-gold mb-3 block">
              Why Paramount
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-charcoal mb-4">
              Setting the Standard in Sri Lankan Landscaping
            </h2>
            <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed">
              We combine horticulture expertise with engineering precision to deliver premium outdoor environments that increase property value and charm.
            </p>
          </Reveal>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, idx) => (
            <Reveal
              key={idx}
              delay={
                idx % 3 === 0
                  ? ""
                  : idx % 3 === 1
                  ? "delay-100"
                  : "delay-200"
              }
              className="h-full"
            >
              <div className="group flex gap-4 p-6 rounded-2xl bg-beige/20 border border-beige/40 hover:border-gold/30 hover:bg-white hover:shadow-xl transition-all duration-300 h-full">
                <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {feat.icon}
                </div>
                <div>
                  <h3 className="font-display text-base sm:text-lg font-bold text-charcoal mb-2 group-hover:text-primary transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
