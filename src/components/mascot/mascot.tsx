"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const sparkles = [
  { top: "4%", left: "8%", size: 16, delay: 0 },
  { top: "12%", right: "2%", size: 12, delay: 0.8 },
  { bottom: "10%", left: "-2%", size: 14, delay: 1.6 },
  { bottom: "2%", right: "10%", size: 10, delay: 2.3 },
];

function Sparkle({
  style,
  size,
  delay,
}: {
  style: React.CSSProperties;
  size: number;
  delay: number;
}) {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      fill="none"
      width={size}
      height={size}
      className="absolute text-pastel-yellow-deep/70"
      style={style}
      animate={{
        opacity: [0.15, 1, 0.15],
        scale: [0.6, 1, 0.6],
        rotate: [0, 90, 0],
      }}
      transition={{
        duration: 2.6,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      aria-hidden="true"
    >
      <path
        d="M12 0 L14 10 L24 12 L14 14 L12 24 L10 14 L0 12 L10 10 Z"
        fill="currentColor"
      />
    </motion.svg>
  );
}

export function Mascot({
  className,
  size = 560,
  interactive = true,
  priority = true,
}: {
  className?: string;
  size?: number;
  interactive?: boolean;
  priority?: boolean;
}) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scrollRotate = useTransform(scrollYProgress, [0, 1], [-4, 4]);
  const scrollY = useTransform(scrollYProgress, [0, 1], [24, -24]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const tiltX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), {
    stiffness: 150,
    damping: 20,
  });
  const tiltY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), {
    stiffness: 150,
    damping: 20,
  });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    if (!interactive || prefersReducedMotion) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    mouseX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    mouseY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <div
      ref={ref}
      className={cn("relative w-full select-none", className)}
      style={{ maxWidth: size, aspectRatio: "1 / 1" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Ambient glow */}
      <div className="absolute inset-[6%] rounded-full bg-gradient-to-br from-pastel-pink via-pastel-yellow/60 to-pastel-blue/70 blur-2xl opacity-70" />

      <motion.div
        className="absolute inset-0"
        style={
          prefersReducedMotion
            ? undefined
            : { rotate: scrollRotate, y: scrollY, perspective: 800 }
        }
      >
        <motion.div
          className="relative h-full w-full"
          style={
            prefersReducedMotion
              ? undefined
              : { rotateX: tiltX, rotateY: tiltY }
          }
          animate={
            prefersReducedMotion
              ? undefined
              : { y: [0, -14, 0], rotate: [-0.6, 0.6, -0.6] }
          }
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Steam wisps rising from the bowl */}
          {!prefersReducedMotion &&
            [0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="absolute left-1/2 top-[52%] h-10 w-3 rounded-full bg-white/70 blur-md"
                style={{ marginLeft: i * 14 - 14 }}
                animate={{
                  y: [0, -46],
                  x: [0, i % 2 === 0 ? 8 : -8],
                  scaleX: [1, 1.4],
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: 4,
                  delay: i * 1.1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                aria-hidden="true"
              />
            ))}

          {/* Portrait */}
          <div className="relative h-full w-full overflow-hidden rounded-full soft-shadow-lg ring-1 ring-black/5">
            <Image
              src="/mascot/mrs-meddy.png"
              alt="Mrs Meddy, smiling warmly while stirring a bowl with her whisk"
              fill
              priority={priority}
              sizes={`${size}px`}
              className="object-cover"
            />

            {/* Shine sweep across the glasses, implying a twinkle / blink of light */}
            {!prefersReducedMotion && (
              <motion.div
                className="pointer-events-none absolute left-[30%] top-[30%] h-[14%] w-[42%] overflow-hidden rounded-full"
                aria-hidden="true"
              >
                <motion.div
                  className="h-full w-1/3 -skew-x-12 bg-white/70 blur-[2px]"
                  animate={{ x: ["-40%", "220%"] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatDelay: 5.5,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            )}
          </div>

          {/* Whisk motion lines */}
          {!prefersReducedMotion && (
            <motion.svg
              viewBox="0 0 40 40"
              className="absolute right-[6%] top-[30%] h-[14%] w-[14%] text-white/80"
              animate={{ opacity: [0, 1, 0], rotate: [0, 12, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden="true"
            >
              <path
                d="M4 20c6-6 12-6 18 0"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M10 30c6-6 12-6 18 0"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
                opacity="0.6"
              />
            </motion.svg>
          )}

          {sparkles.map((s, i) => (
            <Sparkle
              key={i}
              style={s as React.CSSProperties}
              size={s.size}
              delay={s.delay}
            />
          ))}

          {/* Waving hand greeting bubble */}
          <motion.div
            className="absolute -left-2 bottom-[8%] flex h-14 w-14 items-center justify-center rounded-full bg-white text-2xl soft-shadow sm:h-16 sm:w-16"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 260, damping: 18 }}
          >
            <motion.span
              role="img"
              aria-label="Mrs Meddy waving hello"
              animate={
                prefersReducedMotion
                  ? undefined
                  : { rotate: [0, 18, -8, 18, 0] }
              }
              transition={{
                delay: 1.1,
                duration: 1.4,
                repeat: Infinity,
                repeatDelay: 4.5,
                ease: "easeInOut",
              }}
              style={{ display: "inline-block", transformOrigin: "70% 70%" }}
            >
              👋
            </motion.span>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
