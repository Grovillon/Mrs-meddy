import Image from "next/image";
import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-config";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-7.6h2.55l.38-2.96h-2.93V8.53c0-.86.24-1.44 1.47-1.44h1.57V4.46A21 21 0 0 0 14.2 4.3c-2.2 0-3.71 1.34-3.71 3.8v2.34H7.93v2.96h2.56V21h3.01Z" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.6 5.82c-.98-.86-1.6-2.08-1.66-3.44h-3.02v13.9c0 1.5-1.22 2.72-2.72 2.72a2.72 2.72 0 1 1 0-5.44c.28 0 .55.04.8.12v-3.06a5.75 5.75 0 0 0-.8-.06 5.76 5.76 0 1 0 5.76 5.76V9.4a8.7 8.7 0 0 0 4.7 1.38V7.76a5.68 5.68 0 0 1-3.06-1.94Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-cream-deep bg-white">
      <Container className="grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div className="flex flex-col gap-4">
          <Link href="/" className="focus-ring flex w-fit items-center gap-3 rounded-full">
            <span className="relative h-11 w-11 overflow-hidden rounded-full soft-shadow ring-1 ring-black/5">
              <Image
                src="/mascot/mrs-meddy.png"
                alt="Mrs Meddy logo"
                fill
                sizes="44px"
                className="object-cover"
              />
            </span>
            <span className="font-display text-xl text-ink">Mrs Meddy</span>
          </Link>
          <p className="max-w-xs text-sm leading-relaxed text-ink-soft">
            Home-cooked Greek food, made slowly, the way it was always meant
            to be. Fresh every day, never rushed.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a
              href={siteConfig.social.instagram}
              className="focus-ring flex h-10 w-10 items-center justify-center rounded-full bg-cream text-ink transition-colors hover:bg-pastel-pink"
              aria-label="Mrs Meddy on Instagram"
            >
              <InstagramIcon className="h-[18px] w-[18px]" />
            </a>
            <a
              href={siteConfig.social.facebook}
              className="focus-ring flex h-10 w-10 items-center justify-center rounded-full bg-cream text-ink transition-colors hover:bg-pastel-blue"
              aria-label="Mrs Meddy on Facebook"
            >
              <FacebookIcon className="h-[18px] w-[18px]" />
            </a>
            <a
              href={siteConfig.social.tiktok}
              className="focus-ring flex h-10 w-10 items-center justify-center rounded-full bg-cream text-ink transition-colors hover:bg-pastel-yellow"
              aria-label="Mrs Meddy on TikTok"
            >
              <TikTokIcon className="h-[18px] w-[18px]" />
            </a>
          </div>
        </div>

        {siteConfig.footerNav.map((group) => (
          <nav key={group.title} aria-label={group.title}>
            <h3 className="font-display text-base text-ink">{group.title}</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="focus-ring text-sm text-ink-soft transition-colors hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div>
          <h3 className="font-display text-base text-ink">Visit &amp; contact</h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-ink-soft">
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="mt-0.5 shrink-0 text-pastel-pink-deep" />
              <span>
                {siteConfig.address.street}, {siteConfig.address.city}{" "}
                {siteConfig.address.postcode}
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={16} className="shrink-0 text-pastel-blue-deep" />
              <a href={`tel:${siteConfig.phone}`} className="focus-ring hover:text-ink">
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={16} className="shrink-0 text-pastel-green-deep" />
              <a href={`mailto:${siteConfig.email}`} className="focus-ring hover:text-ink">
                {siteConfig.email}
              </a>
            </li>
          </ul>

          <h3 className="mt-6 font-display text-base text-ink">Opening hours</h3>
          <ul className="mt-3 flex flex-col gap-1.5 text-sm text-ink-soft">
            {siteConfig.hours.slice(0, 3).map((h) => (
              <li key={h.day} className="flex justify-between gap-6">
                <span>{h.day}</span>
                <span>{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-cream-deep">
        <Container className="flex flex-col items-center justify-center gap-4 py-8 sm:flex-row sm:justify-between">
          <p className="text-xs text-ink-faint">
            © {new Date().getFullYear()} Mrs Meddy. Made with love, not a
            factory line.
          </p>
          <div className="flex gap-6 text-xs text-ink-faint">
            <Link href="/faq" className="focus-ring hover:text-ink-soft">
              FAQ
            </Link>
            <Link href="/contact" className="focus-ring hover:text-ink-soft">
              Contact
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
