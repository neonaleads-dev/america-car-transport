"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(ScrollTrigger, CustomEase);

interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
}

export default function ImageReveal({ src, alt, className = "", aspectRatio = "aspect-[3/4]" }: ImageRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!containerRef.current || !imageRef.current) return;

    const premiumEase = CustomEase.create("premium", "M0,0 C0.25,1 0.1,1 1,1");

    // 1. Reveal Animation (Clip Path)
    gsap.fromTo(
      containerRef.current,
      {
        clipPath: "inset(100% 0% 0% 0%)",
      },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.5,
        ease: premiumEase,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // 2. Parallax Animation inside the container
    gsap.fromTo(
      imageRef.current,
      {
        yPercent: -15,
        scale: 1.1,
      },
      {
        yPercent: 15,
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`w-full overflow-hidden bg-navy/50 ${aspectRatio} ${className}`}
    >
      <img 
        ref={imageRef}
        src={src} 
        alt={alt}
        className="w-full h-[130%] object-cover origin-top opacity-90"
      />
    </div>
  );
}
