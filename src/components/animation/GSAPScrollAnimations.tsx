"use client";

/*
 * Site-wide GSAP motion, loaded after the page is interactive (idle time),
 * so it never delays the hero, the quote form or LCP.
 *
 *  1. Section headings (.act-eyebrow / .act-h2 / .act-lead) rise in on scroll.
 *  2. Groups marked [data-gsap-stagger] reveal their children one by one
 *     (service cards, steps, route rows, feature boxes, B2B items...).
 *  3. Buttons ([data-magnetic], .btn-*) follow the cursor slightly (mouse only).
 *
 * Rules: only elements that start BELOW the first screen are animated, so
 * nothing visible on load ever blinks; prefers-reduced-motion turns it all off;
 * content is fully visible in the server HTML (GSAP only hides it at runtime).
 */

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function GSAPScrollAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cancelled = false;
    let revert: (() => void) | undefined;
    const cleanups: Array<() => void> = [];

    const start = async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);

      const belowFold = (el: Element) => el.getBoundingClientRect().top > window.innerHeight * 0.9;

      const ctx = gsap.context(() => {
        // 1. Headings
        gsap.utils
          .toArray<HTMLElement>("main .act-eyebrow, main .act-h2, main .act-lead")
          .filter(belowFold)
          .forEach((el) => {
            gsap.from(el, {
              y: 22,
              autoAlpha: 0,
              duration: 0.7,
              ease: "power3.out",
              scrollTrigger: { trigger: el, start: "top 90%", once: true },
            });
          });

        // 2. Staggered groups (cards, rows, boxes)
        gsap.utils
          .toArray<HTMLElement>("[data-gsap-stagger]")
          .filter(belowFold)
          .forEach((group) => {
            gsap.from(group.children, {
              y: 26,
              autoAlpha: 0,
              duration: 0.6,
              ease: "power3.out",
              stagger: 0.08,
              clearProps: "transform",
              scrollTrigger: { trigger: group, start: "top 86%", once: true },
            });
          });
      });
      revert = () => ctx.revert();

      // 3. Magnetic buttons, mouse/trackpad only
      if (window.matchMedia("(pointer: fine)").matches) {
        document
          .querySelectorAll<HTMLElement>("[data-magnetic], .btn-primary, .btn-secondary, .btn-dark")
          .forEach((btn) => {
            const xTo = gsap.quickTo(btn, "x", { duration: 0.45, ease: "power3.out" });
            const yTo = gsap.quickTo(btn, "y", { duration: 0.45, ease: "power3.out" });
            const move = (e: PointerEvent) => {
              const r = btn.getBoundingClientRect();
              xTo((e.clientX - (r.left + r.width / 2)) * 0.15);
              yTo((e.clientY - (r.top + r.height / 2)) * 0.25);
            };
            const leave = () => {
              xTo(0);
              yTo(0);
            };
            btn.addEventListener("pointermove", move);
            btn.addEventListener("pointerleave", leave);
            cleanups.push(() => {
              btn.removeEventListener("pointermove", move);
              btn.removeEventListener("pointerleave", leave);
              gsap.set(btn, { clearProps: "transform" });
            });
          });
      }

      ScrollTrigger.refresh();
    };

    const w = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    const idleId = w.requestIdleCallback
      ? w.requestIdleCallback(() => void start(), { timeout: 2500 })
      : window.setTimeout(() => void start(), 800);

    return () => {
      cancelled = true;
      if (w.cancelIdleCallback) w.cancelIdleCallback(idleId);
      else window.clearTimeout(idleId);
      revert?.();
      cleanups.forEach((fn) => fn());
    };
  }, [pathname]);

  return null;
}
