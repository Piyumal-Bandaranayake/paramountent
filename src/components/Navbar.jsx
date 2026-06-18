"use client";

import { useState, useEffect } from "react";

export default function Navbar({ onOpenQuote }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed z-50 transition-all duration-500 ease-in-out ${
          isScrolled
            ? "top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl rounded-full bg-primary-dark/80 backdrop-blur-md border border-white/10 shadow-xl py-3 px-4 sm:px-6 text-white"
            : "top-0 left-0 right-0 bg-gradient-to-b from-black/50 to-transparent text-white py-6 px-4 sm:px-6"
        }`}
      >
        <div className="mx-auto w-full">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2 group py-1">
              <img
                src="/logo.png"
                alt="Paramount Garden Service"
                className="h-9 sm:h-11 w-auto object-contain transition-all group-hover:scale-105"
              />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-semibold tracking-wider hover:text-gold text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <button
                onClick={onOpenQuote}
                className={`rounded-full px-6 py-2.5 text-xs uppercase tracking-widest font-semibold transition-all hover:scale-105 active:scale-95 shadow-md hover:shadow-lg cursor-pointer ${
                  isScrolled
                    ? "bg-gold text-white hover:bg-gold-dark"
                    : "bg-white text-primary hover:bg-gold hover:text-white"
                }`}
              >
                Get a Free Quote
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6 text-white transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-45 transform md:hidden transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Mobile Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Drawer Content */}
        <div className="absolute right-0 top-0 bottom-0 w-64 bg-white p-6 shadow-2xl flex flex-col border-l border-beige">
          <div className="flex justify-between items-center mb-8 border-b border-beige pb-4">
            <span className="font-display font-bold text-primary uppercase tracking-wider">
              Navigation
            </span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-1 rounded-full text-charcoal/60 hover:bg-beige hover:text-primary"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col gap-6 flex-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-semibold text-charcoal hover:text-primary transition-colors border-b border-beige pb-2"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="mt-auto">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full rounded-lg bg-primary py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-primary-dark cursor-pointer shadow-md"
            >
              Get a Free Quote
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
