"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus, Truck, Store, CheckCircle2 } from "lucide-react";
import { meals } from "@/lib/data/meals";
import { familyTrays } from "@/lib/data/family-trays";
import { generateTimeSlots, todayISODate } from "@/lib/time-slots";
import { formatPrice, cn } from "@/lib/utils";
import { Mascot } from "@/components/mascot/mascot";

type FulfilmentType = "collection" | "delivery";

interface SelectedItem {
  name: string;
  price: number;
  quantity: number;
}

const timeSlots = generateTimeSlots();

export function PreOrderForm() {
  const [fulfilment, setFulfilment] = useState<FulfilmentType>("collection");
  const [date, setDate] = useState(todayISODate());
  const [time, setTime] = useState(timeSlots[2]);
  const [selected, setSelected] = useState<Record<string, SelectedItem>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const catalogue = useMemo(
    () => [
      ...meals.map((m) => ({ slug: m.slug, name: m.name, price: m.price, group: "Meals" })),
      ...familyTrays.map((t) => ({ slug: t.slug, name: t.name, price: t.price, group: "Family Trays" })),
    ],
    [],
  );

  const grouped = useMemo(() => {
    const groups: Record<string, typeof catalogue> = {};
    for (const item of catalogue) {
      groups[item.group] = groups[item.group] ?? [];
      groups[item.group].push(item);
    }
    return groups;
  }, [catalogue]);

  function updateQuantity(slug: string, name: string, price: number, delta: number) {
    setSelected((prev) => {
      const current = prev[slug]?.quantity ?? 0;
      const next = Math.max(0, current + delta);
      if (next === 0) {
        const rest = { ...prev };
        delete rest[slug];
        return rest;
      }
      return { ...prev, [slug]: { name, price, quantity: next } };
    });
  }

  const totalItems = Object.values(selected).reduce((s, i) => s + i.quantity, 0);
  const totalPrice = Object.values(selected).reduce((s, i) => s + i.quantity * i.price, 0);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 900);
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center gap-6 rounded-4xl bg-white p-10 text-center soft-shadow-lg sm:p-16"
      >
        <div className="flex w-full justify-center">
          <Mascot size={200} interactive={false} priority={false} />
        </div>
        <span className="flex items-center gap-2 text-pastel-green-deep">
          <CheckCircle2 size={22} />
          <span className="font-semibold">Pre-order received</span>
        </span>
        <h2 className="font-display text-balance text-3xl text-ink">
          Thank you — we&rsquo;ll start cooking
        </h2>
        <p className="max-w-md text-ink-soft">
          Your {fulfilment} is set for {date} at {time}. We&rsquo;ll confirm
          by email shortly — see you soon.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-10 lg:grid-cols-[1.3fr_1fr]">
      <div className="flex flex-col gap-10">
        {/* Fulfilment */}
        <fieldset>
          <legend className="mb-3 font-display text-lg text-ink">
            Collection or delivery?
          </legend>
          <div className="grid grid-cols-2 gap-3">
            <FulfilmentOption
              icon={Store}
              label="Collection"
              active={fulfilment === "collection"}
              onClick={() => setFulfilment("collection")}
            />
            <FulfilmentOption
              icon={Truck}
              label="Delivery"
              active={fulfilment === "delivery"}
              onClick={() => setFulfilment("delivery")}
            />
          </div>
        </fieldset>

        {/* Date & time */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="date" className="mb-2 block text-sm font-medium text-ink">
              {fulfilment === "collection" ? "Collection date" : "Delivery date"}
            </label>
            <input
              id="date"
              type="date"
              required
              min={todayISODate()}
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="focus-ring h-12 w-full rounded-2xl border border-cream-deep bg-white px-4 text-ink"
            />
          </div>
          <div>
            <label htmlFor="time" className="mb-2 block text-sm font-medium text-ink">
              Time
            </label>
            <select
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="focus-ring h-12 w-full rounded-2xl border border-cream-deep bg-white px-4 text-ink"
            >
              {timeSlots.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </div>
        </div>

        {fulfilment === "delivery" && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="grid grid-cols-1 gap-5 overflow-hidden sm:grid-cols-2"
          >
            <div className="sm:col-span-2">
              <label htmlFor="address" className="mb-2 block text-sm font-medium text-ink">
                Delivery address
              </label>
              <input
                id="address"
                type="text"
                required
                placeholder="Street, building, floor"
                className="focus-ring h-12 w-full rounded-2xl border border-cream-deep bg-white px-4 text-ink placeholder:text-ink-faint"
              />
            </div>
            <div>
              <label htmlFor="postcode" className="mb-2 block text-sm font-medium text-ink">
                Postcode
              </label>
              <input
                id="postcode"
                type="text"
                required
                className="focus-ring h-12 w-full rounded-2xl border border-cream-deep bg-white px-4 text-ink"
              />
            </div>
          </motion.div>
        )}

        {/* Meal selector */}
        <div>
          <h3 className="mb-3 font-display text-lg text-ink">Choose your meals</h3>
          <div className="flex flex-col gap-6">
            {Object.entries(grouped).map(([group, items]) => (
              <div key={group}>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink-faint">
                  {group}
                </p>
                <div className="flex flex-col divide-y divide-cream-deep rounded-2xl border border-cream-deep bg-white">
                  {items.map((item) => {
                    const qty = selected[item.slug]?.quantity ?? 0;
                    return (
                      <div
                        key={item.slug}
                        className="flex items-center justify-between gap-3 px-4 py-3"
                      >
                        <div>
                          <p className="text-sm font-medium text-ink">{item.name}</p>
                          <p className="text-xs text-ink-soft">{formatPrice(item.price)}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.slug, item.name, item.price, -1)}
                            disabled={qty === 0}
                            className="focus-ring flex h-8 w-8 items-center justify-center rounded-full bg-cream text-ink transition-colors hover:bg-pastel-yellow/60 disabled:opacity-30"
                            aria-label={`Remove one ${item.name}`}
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-4 text-center text-sm font-medium">{qty}</span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.slug, item.name, item.price, 1)}
                            className="focus-ring flex h-8 w-8 items-center justify-center rounded-full bg-cream text-ink transition-colors hover:bg-pastel-yellow/60"
                            aria-label={`Add one ${item.name}`}
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Special instructions */}
        <div>
          <label htmlFor="instructions" className="mb-2 block text-sm font-medium text-ink">
            Special instructions
          </label>
          <textarea
            id="instructions"
            rows={4}
            placeholder="Allergies, spice preference, anything we should know…"
            className="focus-ring w-full rounded-2xl border border-cream-deep bg-white px-4 py-3 text-ink placeholder:text-ink-faint"
          />
        </div>

        {/* Contact */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-ink">
              Full name
            </label>
            <input
              id="name"
              type="text"
              required
              className="focus-ring h-12 w-full rounded-2xl border border-cream-deep bg-white px-4 text-ink"
            />
          </div>
          <div>
            <label htmlFor="phone" className="mb-2 block text-sm font-medium text-ink">
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              required
              className="focus-ring h-12 w-full rounded-2xl border border-cream-deep bg-white px-4 text-ink"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-ink">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              className="focus-ring h-12 w-full rounded-2xl border border-cream-deep bg-white px-4 text-ink"
            />
          </div>
        </div>
      </div>

      {/* Summary sidebar */}
      <div className="lg:sticky lg:top-28 lg:self-start">
        <div className="rounded-3xl bg-white p-7 soft-shadow">
          <h3 className="font-display text-lg text-ink">Your pre-order</h3>
          <div className="mt-4 flex flex-col gap-2 text-sm text-ink-soft">
            <div className="flex justify-between">
              <span>Type</span>
              <span className="font-medium capitalize text-ink">{fulfilment}</span>
            </div>
            <div className="flex justify-between">
              <span>Date</span>
              <span className="font-medium text-ink">{date}</span>
            </div>
            <div className="flex justify-between">
              <span>Time</span>
              <span className="font-medium text-ink">{time}</span>
            </div>
          </div>

          <div className="my-5 h-px bg-cream-deep" />

          <AnimatePresence mode="popLayout">
            {totalItems === 0 ? (
              <motion.p
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-sm text-ink-faint"
              >
                Choose meals from the list to build your order.
              </motion.p>
            ) : (
              <motion.ul key="items" className="flex flex-col gap-2 text-sm">
                {Object.values(selected).map((item) => (
                  <li key={item.name} className="flex justify-between text-ink-soft">
                    <span>
                      {item.quantity} × {item.name}
                    </span>
                    <span>{formatPrice(item.price * item.quantity)}</span>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>

          <div className="my-5 h-px bg-cream-deep" />

          <div className="flex justify-between text-ink">
            <span className="font-medium">Total</span>
            <span className="font-display text-xl">{formatPrice(totalPrice)}</span>
          </div>

          <motion.button
            type="submit"
            disabled={totalItems === 0 || submitting}
            whileHover={{ scale: totalItems === 0 ? 1 : 1.02 }}
            whileTap={{ scale: totalItems === 0 ? 1 : 0.98 }}
            className={cn(
              "focus-ring mt-6 flex h-13 w-full items-center justify-center rounded-full py-3.5 font-semibold transition-colors",
              totalItems === 0
                ? "cursor-not-allowed bg-cream text-ink-faint"
                : "bg-ink text-cream hover:bg-ink/90",
            )}
          >
            {submitting ? "Sending to the kitchen…" : "Confirm pre-order"}
          </motion.button>
          <p className="mt-3 text-center text-xs text-ink-faint">
            Payment is collected on {fulfilment === "collection" ? "collection" : "delivery"}{" "}
            for now — online checkout is coming soon.
          </p>
        </div>
      </div>
    </form>
  );
}

function FulfilmentOption({
  icon: Icon,
  label,
  active,
  onClick,
}: {
  icon: typeof Store;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "focus-ring flex items-center justify-center gap-2 rounded-2xl border py-4 text-sm font-medium transition-colors",
        active
          ? "border-ink bg-ink text-cream"
          : "border-cream-deep bg-white text-ink-soft hover:text-ink",
      )}
    >
      <Icon size={18} />
      {label}
    </button>
  );
}
