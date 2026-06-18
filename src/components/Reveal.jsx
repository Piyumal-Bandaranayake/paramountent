"use client";

import { useEffect, useRef, useState } from "react";

export default function Reveal({ children, className = "", delay = "" }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stop observing once visible to retain the state
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.05, // Trigger early when 5% of the element is visible
        rootMargin: "0px 0px -50px 0px", // Trigger slightly before it enters the viewport fully
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) transform ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-8 scale-[0.98] pointer-events-none"
      } ${delay} ${className}`}
    >
      {children}
    </div>
  );
}
