"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { ProductCard } from "@/components/ui/product-card";
import { categories } from "@/lib/data/categories";
import { meals } from "@/lib/data/meals";
import { cn } from "@/lib/utils";
import type { CategorySlug } from "@/lib/types";

export function MenuGrid() {
  const searchParams = useSearchParams();
  const initial = searchParams.get("category") as CategorySlug | null;
  const [active, setActive] = useState<CategorySlug | "all">(initial ?? "all");

  const filtered = useMemo(() => {
    if (active === "all") return meals;
    return meals.filter((meal) => meal.categories.includes(active));
  }, [active]);

  return (
    <div>
      <div
        className="flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        role="tablist"
        aria-label="Filter meals by category"
      >
        <FilterPill
          label="All"
          active={active === "all"}
          onClick={() => setActive("all")}
        />
        {categories
          .filter((c) => c.slug !== "greek-deli" && c.slug !== "family-trays")
          .map((cat) => (
            <FilterPill
              key={cat.slug}
              label={cat.name}
              active={active === cat.slug}
              onClick={() => setActive(cat.slug)}
            />
          ))}
      </div>

      <motion.div
        layout
        className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {filtered.map((meal) => (
          <motion.div
            key={meal.slug}
            layout
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <ProductCard
              product={{
                slug: meal.slug,
                name: meal.name,
                tag: meal.greekName,
                description: meal.description,
                price: meal.price,
                color: meal.color,
              }}
            />
          </motion.div>
        ))}
      </motion.div>

      {filtered.length === 0 && (
        <p className="py-16 text-center text-ink-soft">
          Nothing in this category today — check back tomorrow.
        </p>
      )}
    </div>
  );
}

function FilterPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={cn(
        "focus-ring shrink-0 rounded-full px-5 py-2.5 text-sm font-medium transition-colors",
        active
          ? "bg-ink text-cream"
          : "bg-white text-ink-soft hover:text-ink soft-shadow",
      )}
    >
      {label}
    </button>
  );
}
