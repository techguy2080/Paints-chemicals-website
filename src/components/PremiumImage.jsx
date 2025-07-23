// PremiumImage.jsx
import Image from "next/image";

export default function PremiumImage({ src, alt, children, height = 320 }) {
  return (
    <div className="relative w-full overflow-hidden rounded-xl" style={{ height }}>
      {/* Blurred image */}
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover w-full h-full scale-105" // removed blur-sm
        quality={70} // increase quality for main images
        sizes="100vw"
        priority
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-[#ff1744]/30 to-[#2979ff]/30 mix-blend-multiply pointer-events-none" />
      {/* Noise overlay (SVG) */}
      <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/>
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
      {/* Optional content (text/logo) */}
      {children && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          {children}
        </div>
      )}
    </div>
  );
}