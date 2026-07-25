"use client";

import { motion } from "framer-motion";
import { ChevronDown, Flame, Leaf, Timer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Mascot } from "@/components/mascot/mascot";
import { Container } from "@/components/ui/container";

const trustPoints = [
  { icon: Flame, label: "Cooked fresh, every day" },
  { icon: Timer, label: "Slow-cooked, never rushed" },
  { icon: Leaf, label: "Real Greek ingredients" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 sm:pt-12 lg:pt-16">
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-pastel-blue/60 blur-3xl"
          animate={{ y: [0, 24, 0], x: [0, 12, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-0 top-40 h-80 w-80 rounded-full bg-pastel-pink/60 blur-3xl"
          animate={{ y: [0, -20, 0], x: [0, -16, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-1/3 bottom-0 h-72 w-72 rounded-full bg-pastel-yellow/70 blur-3xl"
          animate={{ y: [0, 18, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <Container className="grid items-center gap-16 pb-16 lg:grid-cols-2 lg:gap-8 lg:pb-24">
        <div className="flex flex-col items-start gap-7">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft soft-shadow"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-pastel-green-deep" />
            A kitchen, not a takeaway
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-balance text-4xl leading-[1.05] text-ink sm:text-5xl lg:text-6xl xl:text-[4.2rem]"
          >
            Someone cooked
            <br />
            for you today.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-md text-balance text-lg leading-relaxed text-ink-soft"
          >
            Home-style Greek meals, slow-cooked daily by Mrs Meddy — inspired
            by Sunday lunches and recipes that were never written down, only
            remembered.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center gap-3 pt-1"
          >
            <Button href="/pre-order" size="lg">
              Order Now
            </Button>
            <Button href="/menu/today" variant="secondary" size="lg">
              Today&rsquo;s Menu
            </Button>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-4 flex flex-wrap gap-x-6 gap-y-3"
          >
            {trustPoints.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2 text-sm text-ink-soft"
              >
                <Icon size={16} className="text-pastel-pink-deep" />
                {label}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto flex justify-center lg:justify-end"
        >
          <Mascot size={480} />
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="hidden justify-center pb-6 lg:flex"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="text-ink-faint"
        >
          <ChevronDown size={22} />
        </motion.div>
      </motion.div>
    </section>
  );
}
