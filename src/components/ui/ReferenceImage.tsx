import Image from "next/image";
import type { SiteImage } from "@/types/site";

type ReferenceImageProps = SiteImage & {
  className?: string;
  caption?: string;
  imageClassName?: string;
  sizes: string;
  preload?: boolean;
};

export default function ReferenceImage({
  src,
  alt,
  className = "",
  caption = "Foto oficial DOMO",
  imageClassName = "object-cover",
  sizes,
  preload = false,
}: ReferenceImageProps) {
  return (
    <figure
      className={`interactive-photo relative overflow-hidden ${className}`.trim()}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        preload={preload}
        className={`interactive-photo-media ${imageClassName}`.trim()}
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent"
        aria-hidden="true"
      />
      <figcaption className="absolute bottom-4 left-4 rounded-subtle bg-ink/85 px-3 py-2 text-[0.625rem] font-medium uppercase tracking-[0.16em] text-on-dark backdrop-blur-sm">
        {caption}
      </figcaption>
    </figure>
  );
}
