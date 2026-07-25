"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Mascot } from "@/components/mascot/mascot";

export function Newsletter() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");
  const [email, setEmail] = useState("");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!email) return;
    setStatus("submitted");
  }

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-4xl bg-pastel-yellow px-6 py-14 sm:px-14 sm:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
            <div className="max-w-lg">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-pastel-yellow-deep">
                Never miss a Sunday
              </span>
              <h2 className="mt-3 font-display text-balance text-3xl leading-[1.1] text-ink sm:text-4xl">
                Get next week&rsquo;s menu in your inbox
              </h2>
              <p className="mt-4 text-balance leading-relaxed text-ink-soft">
                Every Friday, a short note with what&rsquo;s cooking next
                week — no spam, just the menu and the occasional story from
                the kitchen.
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-6 flex max-w-md flex-col gap-3 sm:flex-row"
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="focus-ring h-13 flex-1 rounded-full border-none bg-white px-5 py-3.5 text-ink placeholder:text-ink-faint"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="focus-ring inline-flex h-[3.25rem] items-center justify-center gap-2 rounded-full bg-ink px-6 font-semibold text-cream transition-colors hover:bg-ink/90"
                >
                  {status === "submitted" ? (
                    <>
                      <CheckCircle2 size={18} />
                      Subscribed
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Subscribe
                    </>
                  )}
                </motion.button>
              </form>
              {status === "submitted" && (
                <motion.p
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-3 text-sm text-ink-soft"
                >
                  Thank you — Mrs Meddy will see you Friday. 🍋
                </motion.p>
              )}
            </div>

            <div className="hidden justify-self-end lg:flex">
              <Mascot size={220} interactive={false} priority={false} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
