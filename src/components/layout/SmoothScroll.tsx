"use client";

import { ReactLenis } from "lenis/react";
import React, { useEffect, useState } from "react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Delay check and initialization to avoid blocking initial paint and forced reflows
    const timer = setTimeout(() => {
      if (window.innerWidth >= 768) {
        setIsDesktop(true);
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  if (!isDesktop) {
    return <>{children}</>;
  }

  return (
    <ReactLenis root options={{ lerp: 0.05, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
