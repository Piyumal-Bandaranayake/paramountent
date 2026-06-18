"use client";

import { useEffect, useState } from "react";

export default function Preloader({ onComplete }) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // Disable scroll on the main page while preloader is active
    document.body.style.overflow = "hidden";

    // Animate progress bar simulation
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        const step = Math.random() * 20;
        return Math.min(oldProgress + step, 100);
      });
    }, 120);

    // Fade out preloader wrapper
    const fadeTimeout = setTimeout(() => {
      setFade(true);
    }, 1500);

    // Fully unmount preloader component
    const unmountTimeout = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "unset";
      if (onComplete) onComplete();
    }, 2100);

    return () => {
      clearInterval(interval);
      clearTimeout(fadeTimeout);
      clearTimeout(unmountTimeout);
      document.body.style.overflow = "unset";
    };
  }, [onComplete]);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black transition-all duration-600 ease-in-out ${
        fade ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      {/* Outer Glow Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gold/5 blur-3xl pointer-events-none" />

      {/* Preloader Container */}
      <div className="relative z-10 flex flex-col items-center max-w-xs px-4">
        {/* Animated Brand Logo */}
        <div className="mb-6 animate-pulse select-none">
          <img
            src="/llg.png"
            alt="Paramount Garden Service"
            className="h-20 w-auto object-contain"
            onError={(e) => {
              // Safe fallback text if logo is not found
              e.target.style.display = "none";
            }}
          />
        </div>

        {/* Subtitle brand name */}
        <span className="text-white/70 text-[10px] font-bold uppercase tracking-[0.3em] mb-6 text-center">
          Paramount Garden Service
        </span>

        {/* Progress Bar Container */}
        <div className="w-40 h-[2px] bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gold transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress counter */}
        <span className="text-[9px] text-gold font-mono tracking-widest mt-2">
          {Math.round(progress)}%
        </span>
      </div>
    </div>
  );
}
