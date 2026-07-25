"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, ShoppingBasket, X } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { Button } from "@/components/ui/button";
import { DishPlate } from "@/components/ui/dish-plate";
import { formatPrice } from "@/lib/utils";

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } =
    useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 z-[60] bg-ink/30 backdrop-blur-sm"
            aria-hidden="true"
          />
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-label="Your basket"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 34 }}
            className="fixed right-0 top-0 z-[70] flex h-dvh w-full max-w-md flex-col bg-cream shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-cream-deep px-6 py-5">
              <h2 className="font-display text-xl text-ink">Your basket</h2>
              <button
                onClick={closeCart}
                className="focus-ring flex h-10 w-10 items-center justify-center rounded-full text-ink-soft hover:bg-white"
                aria-label="Close basket"
              >
                <X size={20} />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
                <ShoppingBasket size={36} className="text-ink-faint" />
                <p className="text-ink-soft">
                  Your basket is empty — for now. Add something warm from the
                  menu.
                </p>
                <Button href="/menu" size="sm" onClick={closeCart}>
                  Browse the menu
                </Button>
              </div>
            ) : (
              <>
                <ul className="flex-1 overflow-y-auto px-6 py-4">
                  {items.map((item) => (
                    <motion.li
                      key={item.slug}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 40 }}
                      className="flex items-center gap-4 border-b border-cream-deep py-4 last:border-none"
                    >
                      <DishPlate color={item.color} className="h-16 w-16 shrink-0 rounded-2xl" />
                      <div className="flex-1">
                        <p className="font-medium text-ink">{item.name}</p>
                        <p className="text-sm text-ink-soft">
                          {formatPrice(item.price)}
                        </p>
                        <div className="mt-2 flex items-center gap-3">
                          <button
                            onClick={() =>
                              updateQuantity(item.slug, item.quantity - 1)
                            }
                            className="focus-ring flex h-7 w-7 items-center justify-center rounded-full bg-white text-ink hover:bg-pastel-yellow/60"
                            aria-label={`Decrease quantity of ${item.name}`}
                          >
                            <Minus size={13} />
                          </button>
                          <span className="w-4 text-center text-sm font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.slug, item.quantity + 1)
                            }
                            className="focus-ring flex h-7 w-7 items-center justify-center rounded-full bg-white text-ink hover:bg-pastel-yellow/60"
                            aria-label={`Increase quantity of ${item.name}`}
                          >
                            <Plus size={13} />
                          </button>
                        </div>
                      </div>
                      <button
                        onClick={() => removeItem(item.slug)}
                        className="focus-ring self-start text-xs text-ink-faint hover:text-ink"
                      >
                        Remove
                      </button>
                    </motion.li>
                  ))}
                </ul>

                <div className="border-t border-cream-deep px-6 py-5">
                  <div className="mb-4 flex items-center justify-between text-ink">
                    <span className="font-medium">Subtotal</span>
                    <span className="font-display text-xl">
                      {formatPrice(totalPrice)}
                    </span>
                  </div>
                  <Button href="/pre-order" className="w-full" size="lg" onClick={closeCart}>
                    Continue to pre-order
                  </Button>
                  <p className="mt-3 text-center text-xs text-ink-faint">
                    Secure checkout arrives soon. For now, confirm your order
                    through pre-order and we&rsquo;ll take it from there.
                  </p>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
