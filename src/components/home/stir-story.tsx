"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { Container } from "@/components/ui/container";

const LINE_1 = "Round and round the whisk goes.";
const LINE_2 = "The same way it always has.";
const LINE_3 = "No shortcuts. No rushing. Just time.";

function StirSwirl({
  rotate,
  batterRotate,
}: {
  rotate?: MotionValue<number>;
  batterRotate?: MotionValue<number>;
}) {
  return (
    <div className="relative flex h-[22rem] w-[22rem] items-center justify-center sm:h-[26rem] sm:w-[26rem]">
      <div className="relative h-full w-full overflow-hidden rounded-full soft-shadow-lg ring-1 ring-black/5">
        <Image
          src="/mascot/mrs-meddy.png"
          alt="Mrs Meddy stirring the mixing bowl she always holds"
          fill
          sizes="(max-width: 640px) 22rem, 26rem"
          className="object-cover"
        />
      </div>

      <motion.svg
        viewBox="0 0 200 200"
        className="pointer-events-none absolute left-1/2 top-[58%] h-[46%] w-[46%] -translate-x-1/2 -translate-y-1/2 text-white/85"
        style={rotate ? { rotate } : undefined}
        aria-hidden="true"
      >
        <circle
          cx="100"
          cy="100"
          r="72"
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray="8 22"
          opacity="0.8"
        />
      </motion.svg>

      <motion.svg
        viewBox="0 0 200 200"
        className="pointer-events-none absolute left-1/2 top-[58%] h-[30%] w-[30%] -translate-x-1/2 -translate-y-1/2"
        style={batterRotate ? { rotate: batterRotate } : undefined}
        aria-hidden="true"
      >
        <circle cx="100" cy="20" r="9" fill="#f6e4b8" opacity="0.9" />
      </motion.svg>
    </div>
  );
}

export function StirStory() {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const whiskRotate = useTransform(scrollYProgress, [0, 1], [0, 900]);
  const batterRotate = useTransform(scrollYProgress, [0, 1], [0, -720]);

  const line1Opacity = useTransform(scrollYProgress, [0, 0.06, 0.24, 0.3], [0, 1, 1, 0]);
  const line2Opacity = useTransform(scrollYProgress, [0.32, 0.38, 0.56, 0.62], [0, 1, 1, 0]);
  const line3Opacity = useTransform(scrollYProgress, [0.64, 0.7, 0.94, 1], [0, 1, 1, 0]);

  if (prefersReducedMotion) {
    return (
      <section className="bg-pastel-blue/30 py-24">
        <Container className="flex flex-col items-center gap-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-pastel-blue-deep">
            Same recipe, every time
          </span>
          <StirSwirl />
          <div className="flex max-w-lg flex-col gap-2">
            <p className="font-display text-2xl text-ink sm:text-3xl">{LINE_1}</p>
            <p className="font-display text-2xl text-ink sm:text-3xl">{LINE_2}</p>
            <p className="font-display text-2xl text-ink sm:text-3xl">{LINE_3}</p>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section
      ref={ref}
      className="relative h-[260vh] bg-pastel-blue/30"
      aria-label="Mrs Meddy stirring the same way, every day"
    >
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-pastel-pink/50 blur-3xl" />
          <div className="absolute right-1/4 bottom-1/4 h-72 w-72 rounded-full bg-pastel-yellow/30 blur-3xl" />
        </div>

        <Container className="flex flex-col items-center gap-10 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-pastel-blue-deep">
            Same recipe, every time
          </span>

          <StirSwirl rotate={whiskRotate} batterRotate={batterRotate} />

          <div className="relative h-16 w-full max-w-lg">
            <motion.p
              style={{ opacity: line1Opacity }}
              className="absolute inset-x-0 font-display text-2xl text-ink sm:text-3xl"
            >
              {LINE_1}
            </motion.p>
            <motion.p
              style={{ opacity: line2Opacity }}
              className="absolute inset-x-0 font-display text-2xl text-ink sm:text-3xl"
            >
              {LINE_2}
            </motion.p>
            <motion.p
              style={{ opacity: line3Opacity }}
              className="absolute inset-x-0 font-display text-2xl text-ink sm:text-3xl"
            >
              {LINE_3}
            </motion.p>
          </div>
        </Container>
      </div>
    </section>
  );
}
