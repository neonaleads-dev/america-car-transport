"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GSAPScrollAnimations() {
  useEffect(() => {
    // Only run in browser environment
    if (typeof window === "undefined") return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    // Register ScrollTrigger plugin safely
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Smooth Fade-Up & Stagger for Feature Cards
      const featureCards = gsap.utils.toArray<HTMLElement>(".feature-card");
      if (featureCards.length > 0) {
        gsap.from(featureCards, {
          scrollTrigger: {
            trigger: ".features-section",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          y: 40,
          opacity: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: "power2.out",
        });
      }

      // 2. Parallax Truck Scroll Effect
      const truckCutout = document.querySelector<HTMLElement>(".hero-truck-cutout");
      if (truckCutout) {
        gsap.to(truckCutout, {
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
          y: 50,
          ease: "none",
        });
      }

      // 3. Live Animated Counter (Stats & Reviews)
      const statNumbers = gsap.utils.toArray<HTMLElement>(".stat-number");
      statNumbers.forEach((counter) => {
        const targetValue = parseFloat(counter.getAttribute("data-count") || "0");
        if (!targetValue) return;

        gsap.to(counter, {
          scrollTrigger: {
            trigger: counter,
            start: "top 85%",
            once: true,
          },
          innerText: targetValue,
          duration: 1.5,
          snap: { innerText: 1 },
          ease: "power1.inOut",
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
