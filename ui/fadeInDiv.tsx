"use client";

import { useState, useEffect, useRef } from "react";

export function FadeInDiv({
    children,
    className
  }: Readonly<{
    children: React.ReactNode;
    className?: string
  }>) {
  const [isVisible, setIsVisible] = useState(false);
  const divRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (divRef.current) {
        const rect = divRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Check if the div is within the viewport
        if (rect.top < windowHeight - 100) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={divRef}
      className={`opacity-0 transform transition-opacity duration-1000 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "translate-y-10"
      } ${className}`}
    >
      {children}
    </div>
  );
};