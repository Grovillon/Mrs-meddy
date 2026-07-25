import { cn } from "@/lib/utils";

const colorMap = {
  blue: { base: "bg-pastel-blue", deep: "bg-pastel-blue-deep/40" },
  pink: { base: "bg-pastel-pink", deep: "bg-pastel-pink-deep/40" },
  green: { base: "bg-pastel-green", deep: "bg-pastel-green-deep/40" },
  yellow: { base: "bg-pastel-yellow", deep: "bg-pastel-yellow-deep/40" },
};

export function DishPlate({
  color = "yellow",
  className,
}: {
  color?: keyof typeof colorMap;
  className?: string;
}) {
  const c = colorMap[color];

  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden",
        c.base,
        className,
      )}
      aria-hidden="true"
    >
      <div className="absolute h-[130%] w-[130%] rounded-full border border-white/50" />
      <div
        className={cn(
          "flex h-[68%] w-[68%] items-center justify-center rounded-full soft-shadow",
          c.deep,
        )}
      >
        <div className="h-[70%] w-[70%] rounded-full bg-white/70 backdrop-blur-sm" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/[0.04] via-transparent to-white/30" />
    </div>
  );
}
