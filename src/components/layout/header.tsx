"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, ShoppingBasket, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { useCart } from "@/lib/cart-context";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { totalCount, openCart } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-cream/85 shadow-[0_1px_0_0_rgba(44,36,29,0.06)] backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link
          href="/"
          className="focus-ring flex items-center gap-3 rounded-full"
        >
          <span className="relative h-11 w-11 overflow-hidden rounded-full soft-shadow ring-1 ring-black/5">
            <Image
              src="/mascot/mrs-meddy.png"
              alt="Mrs Meddy logo"
              fill
              sizes="44px"
              className="object-cover"
              priority
            />
          </span>
          <span className="font-display text-xl leading-none text-ink">
            Mrs Meddy
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {siteConfig.nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "focus-ring relative rounded-full px-4 py-2 text-sm font-medium text-ink-soft transition-colors hover:text-ink",
                  active && "text-ink",
                )}
              >
                {item.label}
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-3 -bottom-0.5 h-[2px] rounded-full bg-pastel-yellow-deep"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href="/contact" variant="ghost" size="sm">
            Contact
          </Button>
          <CartButton count={totalCount} onClick={openCart} />
          <Button href="/pre-order" size="sm">
            Order Now
          </Button>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <CartButton count={totalCount} onClick={openCart} />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="focus-ring flex h-11 w-11 items-center justify-center rounded-full text-ink"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-cream-deep bg-cream lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {siteConfig.nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className="focus-ring block rounded-xl px-3 py-3 text-lg font-medium text-ink"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-3 flex flex-col gap-2">
                <Button href="/contact" variant="outline" className="w-full">
                  Contact
                </Button>
                <Button href="/pre-order" className="w-full">
                  Order Now
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function CartButton({ count, onClick }: { count: number; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="focus-ring relative flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-white"
      aria-label={`Open basket${count > 0 ? `, ${count} items` : ""}`}
    >
      <ShoppingBasket size={20} />
      <AnimatePresence>
        {count > 0 && (
          <motion.span
            key={count}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-pastel-pink-deep text-[10px] font-bold text-white"
          >
            {count}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
