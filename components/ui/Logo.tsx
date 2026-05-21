import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Brand logo. Expects /logo.png (full lockup for dark bg) and /mark.png (disc)
 * in /public. Replace PNGs with traced SVGs when available for crisper scaling.
 */
export function Logo({
  variant = "full",
  className,
  href = "/",
}: {
  variant?: "full" | "mark";
  className?: string;
  href?: string | null;
}) {
  const img =
    variant === "mark" ? (
      <Image
        src="/mark.png"
        alt="VoxHorizon"
        width={44}
        height={44}
        className={cn("h-9 w-auto", className)}
        priority
      />
    ) : (
      <Image
        src="/logo.png"
        alt="VoxHorizon"
        width={180}
        height={96}
        className={cn("h-9 w-auto", className)}
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
