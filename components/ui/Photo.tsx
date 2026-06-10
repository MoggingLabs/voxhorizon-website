import Image from "next/image";
import { photosReady } from "@/lib/content";

type PhotoProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
};

/**
 * Image slot that honors the photosReady launch flag: renders a real
 * next/image once photos land in /public/images (and the flag flips in
 * lib/content.ts), and an on-brand framed placeholder until then — so
 * layouts can be built and shipped before the shoot happens.
 */
export function Photo({ src, alt, width, height, className, priority }: PhotoProps) {
  if (!photosReady) {
    return (
      <div
        className={className}
        role="img"
        aria-label={alt}
        style={{
          aspectRatio: `${width} / ${height}`,
          border: "1px solid var(--hr)",
          background:
            "linear-gradient(135deg, rgba(81,184,220,0.06), rgba(81,184,220,0.02) 55%, rgba(255,178,63,0.05))",
          display: "flex",
          alignItems: "flex-end",
          padding: 14,
        }}
      >
        <span
          style={{
            fontFamily: "var(--f-mono)",
            fontSize: 9,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--c-mute)",
          }}
        >
          photo · pending
        </span>
      </div>
    );
  }
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      style={{ width: "100%", height: "auto", border: "1px solid var(--hr)" }}
    />
  );
}
