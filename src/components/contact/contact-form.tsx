"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center gap-3 rounded-3xl bg-white p-10 text-center soft-shadow"
      >
        <CheckCircle2 size={32} className="text-pastel-green-deep" />
        <h3 className="font-display text-xl text-ink">Message sent</h3>
        <p className="text-ink-soft">
          Thank you — Mrs Meddy&rsquo;s team will get back to you shortly.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-3xl bg-white p-7 soft-shadow sm:p-9"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-ink">
            Name
          </label>
          <input
            id="contact-name"
            type="text"
            required
            className="focus-ring h-12 w-full rounded-2xl border border-cream-deep bg-cream px-4 text-ink"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-ink">
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            required
            className="focus-ring h-12 w-full rounded-2xl border border-cream-deep bg-cream px-4 text-ink"
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-subject" className="mb-2 block text-sm font-medium text-ink">
          Subject
        </label>
        <input
          id="contact-subject"
          type="text"
          placeholder="Catering enquiry, feedback, a question…"
          className="focus-ring h-12 w-full rounded-2xl border border-cream-deep bg-cream px-4 text-ink placeholder:text-ink-faint"
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-ink">
          Message
        </label>
        <textarea
          id="contact-message"
          required
          rows={5}
          className="focus-ring w-full rounded-2xl border border-cream-deep bg-cream px-4 py-3 text-ink"
        />
      </div>

      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="focus-ring inline-flex h-13 items-center justify-center gap-2 rounded-full bg-ink font-semibold text-cream transition-colors hover:bg-ink/90"
      >
        <Send size={16} />
        Send message
      </motion.button>
    </form>
  );
}
