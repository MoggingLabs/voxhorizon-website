import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Image with a graceful light "Quiet"-paper placeholder + pip motif when no real
 * photo is set yet. Pass `src` once a file exists in /public/images.
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
        <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" priority={priority} />
      ) : (
        <>
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, #FFFFFF 0%, #EFEBE2 55%, #D9D5CB 100%)",
            }}
          />
          <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 items-center justify-center gap-2">
            <span className="h-px w-12 bg-surface-border" />
            <span className="h-1.5 w-1.5 rounded-full bg-brand-cobalt" />
            <span className="h-px w-12 bg-surface-border" />
          </div>
          {label && (
            <span className="absolute left-4 top-4 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-content-muted">
              {label}
            </span>
          )}
        </>
      )}
    </div>
  );
}
