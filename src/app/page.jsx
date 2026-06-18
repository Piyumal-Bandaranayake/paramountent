"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Preloader from "@/components/Preloader";

export default function Home() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const openQuote = () => setIsQuoteOpen(true);
  const closeQuote = () => setIsQuoteOpen(false);

  return (
    <>
      <Preloader onComplete={() => setIsLoading(false)} />
      {!isLoading && <Navbar onOpenQuote={openQuote} />}
      <main className="flex-1 flex flex-col">
        <Hero onOpenQuote={openQuote} />
        <About />
        <Services onOpenQuote={openQuote} />
        <Projects />
        <WhyChooseUs />
        <Testimonials />
        <CTABanner onOpenQuote={openQuote} />
      </main>
      <Footer onOpenQuote={openQuote} />
      <ContactModal isOpen={isQuoteOpen} onClose={closeQuote} />
      <FloatingWhatsApp />
    </>
  );
}
