"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger, CustomEase);

// Define the premium Kononenko-style custom easing curve globally
// It starts snappy and glides into place
const premiumEase = CustomEase.create("premium", "M0,0 C0.25,1 0.1,1 1,1");

interface AnimatedTextProps {
  text: string;
  as?: React.ElementType;
  className?: string;
  delay?: number;
  mode?: "chars" | "lines";
}

export default function AnimatedText({
  text,
  as: Component = "p",
  className = "",
  delay = 0,
  mode = "chars",
}: AnimatedTextProps) {
  const textRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const split = new SplitType(textRef.current, { types: "lines,words,chars" });

    if (mode === "chars") {
      gsap.from(split.chars, {
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
        y: 80,
        opacity: 0,
        rotateX: -90,
        stagger: 0.02,
        duration: 1.5,
        ease: premiumEase,
        delay: delay,
      });
    } else if (mode === "lines") {
      // For lines, we wrap each line in a hidden overflow container
      // to create the "slide up from nowhere" mask effect
      if (split.lines) {
        split.lines.forEach((line) => {
          const wrapper = document.createElement("div");
          wrapper.style.overflow = "hidden";
          wrapper.style.display = "inline-block";
          wrapper.style.verticalAlign = "top";
          // Wrap the line node
          line.parentNode?.insertBefore(wrapper, line);
          wrapper.appendChild(line);
        });

        gsap.from(split.lines, {
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
          yPercent: 100,
          stagger: 0.05,
          duration: 1.2,
          ease: premiumEase,
          delay: delay,
        });
      }
    }

    return () => {
      split.revert();
    };
  }, [delay, mode]);

  return (
    <Component ref={textRef} className={className} style={{ perspective: "1000px" }}>
      {text}
    </Component>
  );
}
