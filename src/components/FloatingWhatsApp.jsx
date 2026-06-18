"use client";

import { useState } from "react";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);
  const phoneNumber = "94711887703";
  const message = encodeURIComponent(
    "Hi! I am interested in a landscaping consultation and quotation from Paramount Garden Service."
  );

  return (
    <div className="fixed bottom-6 right-6 z-45 flex items-center gap-2">
      {/* Tooltip */}
      <div
        className={`bg-charcoal text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg border border-white/10 transition-all duration-300 transform origin-right whitespace-nowrap pointer-events-none ${
          showTooltip
            ? "opacity-100 translate-x-0 scale-100"
            : "opacity-0 translate-x-2 scale-90"
        }`}
      >
        Chat on WhatsApp
      </div>

      {/* Button */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:bg-[#20ba5a] hover:scale-110 active:scale-95 group"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulse rings */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping opacity-75 pointer-events-none group-hover:hidden" />
        <span className="absolute -inset-2 rounded-full bg-[#25D366]/15 animate-ping opacity-50 pointer-events-none delay-300 group-hover:hidden" />

        {/* WhatsApp Icon */}
        <svg className="h-7 w-7 fill-current" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.438 2.5 1.177 3.464l-.77 2.817 2.884-.756a5.727 5.727 0 0 0 2.477.565h.002c3.182 0 5.767-2.587 5.768-5.766 0-3.18-2.585-5.766-5.766-5.766zm3.4 8.21c-.147.414-.725.758-1.006.808-.278.05-.623.09-1.85-.42a7.172 7.172 0 0 1-3.094-2.722c-.347-.464-.556-.995-.556-1.547 0-.585.3-.873.407-.988.106-.115.235-.15.353-.15.118 0 .235.004.336.01.106.006.248-.042.39.299.147.352.502 1.224.545 1.312.044.088.073.19.015.308-.059.118-.088.19-.176.293l-.264.308c-.088.094-.182.197-.077.378.106.18.47 1.05.992 1.512.673.597 1.24.782 1.417.87.176.088.278.073.38-.044.103-.117.44-.513.558-.688.118-.176.235-.147.397-.088.161.059 1.028.484 1.204.572.176.088.293.132.337.206.044.073.044.425-.103.839zM12 .003C5.384.003.01 5.378.01 12c0 2.112.55 4.17 1.594 5.978L0 24l6.19-1.624c1.722.94 3.666 1.436 5.804 1.436h.007c6.615 0 11.989-5.375 11.989-11.997 0-3.204-1.246-6.216-3.51-8.48A11.902 11.902 0 0 0 12 .003z" />
        </svg>
      </a>
    </div>
  );
}
