import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * VoxHorizon "Imprint" logo. Wordmark lockups use PNG (the SVG wordmark relies on
 * Instrument Serif and won't render reliably as <img>); geometric marks use SVG.
 *   primary  — Carbon "VOX · HORIZON" + cobalt pip, for light backgrounds (default)
 *   reversed — white wordmark + cobalt pip, for dark bands
 *   mark     — VH monogram (compact)
 */
export function Logo({
  variant = "primary",
  className,
  href = "/",
}: {
  variant?: "primary" | "reversed" | "mark";
  className?: string;
  href?: string | null;
}) {
  const map = {
    primary: { src: "/logo.png", w: 200, h: 46 },
    reversed: { src: "/logo-reversed.png", w: 200, h: 46 },
    mark: { src: "/mark.png", w: 44, h: 48 },
  } as const;
  const { src, w, h } = map[variant];

  const img = (
    <Image
      src={src}
      alt="VoxHorizon"
      width={w}
      height={h}
      className={cn(variant === "mark" ? "h-9 w-auto" : "h-8 w-auto", className)}
      priority
    />
  );

  if (href === null) return img;
  return (
    <Link href={href} aria-label="VoxHorizon home" className="inline-flex items-center">
      {img}
    </Link>
  );
}
