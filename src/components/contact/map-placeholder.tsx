import { MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function MapPlaceholder() {
  return (
    <div className="relative flex h-64 w-full items-center justify-center overflow-hidden rounded-3xl bg-pastel-blue sm:h-80">
      <svg
        className="absolute inset-0 h-full w-full opacity-40"
        aria-hidden="true"
      >
        <defs>
          <pattern id="map-grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="white" strokeWidth="1.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#map-grid)" />
      </svg>
      <div className="relative flex flex-col items-center gap-2 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-pastel-pink-deep soft-shadow-lg">
          <MapPin size={24} />
        </span>
        <p className="font-display text-lg text-ink">
          {siteConfig.address.street}
        </p>
        <p className="text-sm text-ink-soft">
          {siteConfig.address.city} {siteConfig.address.postcode}
        </p>
      </div>
    </div>
  );
}
