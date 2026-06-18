"use client";

import Reveal from "./Reveal";

export default function About() {
  const highlights = [
    { title: "Design Excellence", desc: "Crafting beautiful, custom landscape blueprints" },
    { title: "Expert Architects", desc: "Our team has years of professional resort experience" },
    { title: "Sustainable Methods", desc: "Eco-friendly materials and local tropical flora" },
    { title: "Complete Lifecycle", desc: "From design and earthworks to regular upkeep" },
  ];

  return (
    <section id="about" className="py-20 bg-beige overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <div className="lg:col-span-6 relative">
            <Reveal>
              <div className="relative z-10 overflow-hidden rounded-2xl border-4 border-white shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=800&q=80"
                  alt="Tropical landscaping at a luxury Sri Lankan resort"
                  className="w-full h-[280px] sm:h-[380px] lg:h-[450px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
              </div>
            </Reveal>

            {/* Decorative boxes */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gold/15 rounded-xl -z-10" />
            <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-primary/10 rounded-2xl -z-10" />

            {/* Experience overlay badge */}
            <Reveal delay="duration-500">
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-20 bg-white/90 backdrop-blur-md border border-gold/30 rounded-xl p-3 sm:p-4 shadow-lg flex items-center gap-2.5 sm:gap-3">
                <span className="font-display text-3xl sm:text-4xl font-extrabold text-primary">15+</span>
                <div className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-charcoal">
                  Years of
                  <br />
                  Excellence
                </div>
              </div>
            </Reveal>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-widest text-gold mb-3 block">
                About Paramount Garden Service
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-charcoal leading-tight mb-6">
                Creating Exceptional Outdoor Environments
              </h2>
            </Reveal>

            <Reveal delay="delay-100">
              <div className="space-y-4 text-charcoal/80 text-sm leading-relaxed mb-8">
                <p>
                  At Paramount Garden Service, we specialize in designing and delivering high-quality landscaping solutions for hotels, resorts, commercial properties, and luxury residences throughout Sri Lanka.
                </p>
                <p>
                  With expertise in hard landscaping, interlock paving, drainage systems, and outdoor space enhancement, we create landscapes that combine beauty, functionality, and durability.
                </p>
              </div>
            </Reveal>

            {/* highlights grid */}
            <Reveal delay="delay-200">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex gap-3">
                    <div className="flex-shrink-0 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-charcoal">{item.title}</h4>
                      <p className="text-xs text-charcoal/65 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
