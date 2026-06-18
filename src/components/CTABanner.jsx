"use client";

import Reveal from "./Reveal";

export default function CTABanner({ onOpenQuote }) {
  return (
    <section className="relative py-20 bg-primary overflow-hidden">
      {/* Decorative leaf/forest patterns overlay in background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-light/30 via-primary-dark/40 to-primary-dark opacity-80 pointer-events-none" />

      {/* Abstract circles */}
      <div className="absolute -top-12 -left-12 w-64 h-64 rounded-full bg-white/5 border border-white/5 pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-gold/5 border border-gold/5 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <Reveal>
          <span className="text-xs font-bold uppercase tracking-widest text-gold mb-3 block">
            Get Started
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
            Ready to Transform Your Outdoor Space?
          </h2>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed mb-8">
            Contact our team today for a consultation and a free quotation. Let's design a garden that blends nature and luxury.
          </p>
        </Reveal>
        
        <Reveal delay="delay-100">
          <button
            onClick={onOpenQuote}
            className="rounded-full bg-gold px-8 py-4 text-xs sm:text-sm uppercase tracking-widest font-extrabold text-white transition-all hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20 active:scale-95 cursor-pointer"
          >
            Get a Free Quote
          </button>
        </Reveal>
      </div>
    </section>
  );
}
