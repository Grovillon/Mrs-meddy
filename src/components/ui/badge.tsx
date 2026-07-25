import { cn } from "@/lib/utils";

const colorMap = {
  blue: "bg-pastel-blue text-ink",
  pink: "bg-pastel-pink text-ink",
  green: "bg-pastel-green text-ink",
  yellow: "bg-pastel-yellow text-ink",
  ink: "bg-ink text-cream",
};

export function Badge({
  children,
  color = "ink",
  className,
}: {
  children: React.ReactNode;
  color?: keyof typeof colorMap;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em]",
        colorMap[color],
        className,
      )}
    >
      {children}
    </span>
  );
}
