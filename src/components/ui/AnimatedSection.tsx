import React from "react";

/*
 * These wrappers used to fade content in with framer-motion, starting from
 * opacity 0. On route and service pages that hid the H1 and the quote form
 * until JavaScript loaded, which hurt LCP and showed a blank hero on slow
 * phones. They now render content immediately; the props are kept so the
 * 27 pages that use them don't need to change.
 */

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
}

export default function AnimatedSection({ children, className = "" }: AnimatedSectionProps) {
  return <div className={className}>{children}</div>;
}

export function AnimatedCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}
