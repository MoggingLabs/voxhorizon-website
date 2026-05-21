import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Image with a graceful branded placeholder when no real photo is set yet.
 * Pass `src` once a file exists in /public/images (see public/images/README.md).
 * Until then it renders an on-brand gradient panel so layouts look intentional.
 */
export function Photo({
  src,
  alt = "",
  label,
  aspect = "aspect-[4/3]",
  className,
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority,
}: {
  src?: string;
  alt?: string;
  label?: string;
  aspect?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div className={cn("relative overflow-hidden bg-surface-elevated", aspect, className)}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className="object-cover"
          priority={priority}
        />
      ) : (
        <>
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(120% 80% at 80% 0%, rgba(56,176,227,0.30), transparent 55%), radial-gradient(120% 90% at 0% 100%, rgba(46,42,140,0.45), transparent 60%), #0d1322",
            }}
          />
          <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />
          {label && (
            <span className="absolute left-4 top-4 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-content-muted">
              {label}
            </span>
          )}
        </>
      )}
    </div>
  );
}
