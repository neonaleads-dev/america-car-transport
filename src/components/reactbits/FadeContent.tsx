"use client";

/*
 * Fade-in on scroll, based on React Bits "FadeContent" (https://reactbits.dev, MIT).
 *
 * The React Bits original drives the effect with GSAP + ScrollTrigger and
 * hides content with an "invisible" class until JavaScript runs. On the ACT
 * homepage that added ~200 ms of Total Blocking Time on mobile, so this port
 * keeps the same look (opacity + blur, eased in) with an IntersectionObserver
 * and a CSS transition instead:
 *  - server HTML is fully visible (no hidden content without JS),
 *  - anything already on screen at load is left alone (protects LCP),
 *  - prefers-reduced-motion users get no animation.
 */

import { useEffect, useRef, type ReactNode } from "react";

interface FadeContentProps {
  children?: ReactNode;
  blur?: number;
  duration?: number; // seconds
  threshold?: number;
  className?: string;
}

export default function FadeContent({
  children,
  blur = 4,
  duration = 0.7,
  threshold = 0.15,
  className,
}: FadeContentProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    el.style.opacity = "0";
    el.style.filter = blur > 0 ? `blur(${blur}px)` : "";
    el.style.transition = `opacity ${duration}s cubic-bezier(0.22, 1, 0.36, 1), filter ${duration}s cubic-bezier(0.22, 1, 0.36, 1)`;

    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        el.style.opacity = "1";
        el.style.filter = "";
        io.disconnect();
        // drop the inline styles once done so nothing lingers on the section
        window.setTimeout(() => {
          el.style.transition = "";
          el.style.opacity = "";
        }, duration * 1000 + 50);
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [blur, duration, threshold]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
