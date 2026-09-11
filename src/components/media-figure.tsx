import Image from "next/image";

import { cn } from "@/lib/utils";

type MediaFigureProps = {
  src: string;
  alt: string;
  aspect?: string;
  className?: string;
  caption?: string;
  priority?: boolean;
};

/**
 * Photo placed inside the editorial system: 24px radius (matching the card
 * radius), hairline ring, quiet caption below. Photography is used sparingly —
 * as a single refined figure per section, never as a scattered thumbnail.
 */
export function MediaFigure({
  src,
  alt,
  aspect = "16 / 9",
  className,
  caption,
  priority = false,
}: MediaFigureProps) {
  return (
    <figure className={cn("w-full", className)}>
      <div
        className="relative overflow-hidden rounded-[24px] ring-1 ring-ink-black/[0.06]"
        style={{ aspectRatio: aspect }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 46vw, 92vw"
          className="object-cover"
        />
      </div>
      {caption ? (
        <figcaption className="mt-3 text-[13px] font-[430] tracking-[0.01em] text-ash-gray">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
