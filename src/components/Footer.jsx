"use client";

export default function Footer({ onOpenQuote }) {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "#",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "#",
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/94711887703",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.718-1.458L0 24zm6.59-4.846c1.6.95 3.16 1.456 4.93 1.458 5.67 0 10.28-4.607 10.283-10.276.002-2.747-1.062-5.328-2.997-7.265A10.2 10.2 0 0012.008 1.95c-5.68 0-10.29 4.609-10.293 10.28-.001 1.87.49 3.69 1.42 5.27l-.99 3.63 3.73-.977z" />
        </svg>
      ),
    },
  ];

  return (
    <footer id="contact" className="bg-primary-dark text-white/80 border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand Col */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <a href="#home" className="flex items-center gap-2 group py-1">
              <img
                src="/logo.png"
                alt="Paramount Garden Service"
                className="h-10 sm:h-12 w-auto object-contain transition-all group-hover:scale-105"
              />
            </a>
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed max-w-sm">
              Sri Lanka's leading hotel, resort, and commercial landscaping specialists. Transforming outdoor environments with durability, craftsmanship, and aesthetic balance.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 mt-2">
              {socialLinks.map((soc) => (
                <a
                  key={soc.name}
                  href={soc.href}
                  target={soc.href.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="h-9 w-9 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:text-white hover:bg-gold hover:scale-110 transition-all"
                  aria-label={soc.name}
                >
                  {soc.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links Col */}
          <div className="md:col-span-3 flex flex-col gap-4 md:pl-8">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white border-l-2 border-gold pl-3">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2.5 text-xs sm:text-sm">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-gold transition-colors w-fit"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={onOpenQuote}
                className="text-left hover:text-gold transition-colors w-fit cursor-pointer"
              >
                Get a Free Quote
              </button>
            </nav>
          </div>

          {/* Contact Col */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white border-l-2 border-gold pl-3">
              Contact Us
            </h4>
            <ul className="flex flex-col gap-3.5 text-xs sm:text-sm">
              <li className="flex gap-3">
                <svg className="h-5 w-5 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <a
                  href="https://maps.google.com/?q=Horana+Road,+Polgasowita,+Sri+Lanka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  Horana Road, Polgasowita, Sri Lanka
                </a>
              </li>
              <li className="flex gap-3">
                <svg className="h-5 w-5 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+94711887703" className="hover:text-gold transition-colors">
                  +94 71 188 7703
                </a>
              </li>
              <li className="flex gap-3">
                <svg className="h-5 w-5 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L22 8m-2 11H4a2 2 0 01-2-2V7a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2z" />
                </svg>
                <a href="mailto:paramountgardenslk@gmail.com" className="hover:text-gold transition-colors">
                  paramountgardenslk@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/45">
          <p>© {new Date().getFullYear()} Paramount Garden Service. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold">Privacy Policy</a>
            <a href="#" className="hover:text-gold">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
