"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { DishPlate } from "@/components/ui/dish-plate";
import { useCart } from "@/lib/cart-context";
import { formatPrice, cn } from "@/lib/utils";

export interface ProductCardData {
  slug: string;
  name: string;
  tag?: string;
  description: string;
  price: number;
  color: "blue" | "pink" | "green" | "yellow";
}

export function ProductCard({
  product,
  className,
}: {
  product: ProductCardData;
  className?: string;
}) {
  const { addItem } = useCart();

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={cn(
        "group flex flex-col overflow-hidden rounded-3xl bg-white soft-shadow",
        className,
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <motion.div
          className="h-full w-full"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <DishPlate color={product.color} className="h-full w-full" />
        </motion.div>
        {product.tag && (
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-ink-soft backdrop-blur">
            {product.tag}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl text-ink">{product.name}</h3>
          <span className="whitespace-nowrap font-display text-lg text-ink">
            {formatPrice(product.price)}
          </span>
        </div>
        <p className="flex-1 text-sm leading-relaxed text-ink-soft">
          {product.description}
        </p>

        <motion.button
          onClick={() =>
            addItem({
              slug: product.slug,
              name: product.name,
              price: product.price,
              color: product.color,
            })
          }
          whileTap={{ scale: 0.96 }}
          className="focus-ring mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-ink py-3 text-sm font-semibold text-cream transition-colors hover:bg-ink/90"
        >
          <Plus size={16} />
          Add to basket
        </motion.button>
      </div>
    </motion.article>
  );
}
