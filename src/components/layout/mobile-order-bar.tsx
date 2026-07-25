"use client";

import { motion } from "framer-motion";
import { UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MobileOrderBar() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 bottom-0 z-40 border-t border-cream-deep bg-white/95 px-4 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] pt-3 backdrop-blur-md soft-shadow-lg lg:hidden"
    >
      <Button href="/pre-order" className="w-full" size="lg">
        <UtensilsCrossed size={18} />
        Order Now
      </Button>
    </motion.div>
  );
}
