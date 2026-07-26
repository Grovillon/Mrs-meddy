"use client";

import { useEffect } from "react";
import { useMotionValue, type MotionValue } from "framer-motion";

/**
 * Tracks how far a tall element has scrolled through the viewport, as a 0→1
 * value: 0 when its top reaches the viewport top, 1 when its bottom reaches
 * the viewport bottom. Used for scroll-pinned storytelling sections.
 *
 * Framer Motion's own useScroll(offset: ["start start", "end end"]) produces
 * a non-monotonic value in this app (rises then falls back to 0 instead of
 * clamping at 1), so progress is tracked manually here instead.
 */
export function useScrollProgress(
  ref: React.RefObject<HTMLElement | null>,
): MotionValue<number> {
  const progress = useMotionValue(0);

  useEffect(() => {
    function update() {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const travel = rect.height - window.innerHeight;
      const raw = travel <= 0 ? 0 : -rect.top / travel;
      progress.set(Math.min(1, Math.max(0, raw)));
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [ref, progress]);

  return progress;
}
