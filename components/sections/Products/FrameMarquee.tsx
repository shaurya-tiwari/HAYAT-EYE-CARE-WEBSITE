"use client";

import { useRef, useState } from "react";

interface MarqueeImage {
  public_id: string;
  secure_url: string;
}

interface FrameMarqueeProps {
  images: MarqueeImage[];
}

/**
 * Auto-scrolling horizontal marquee of spectacle frame images.
 * Pauses on hover. Duplicates the list for seamless infinite loop.
 */
export default function FrameMarquee({ images }: FrameMarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  // Nothing to show
  if (images.length === 0) return null;

  // Duplicate for seamless loop
  const doubled = [...images, ...images];

  return (
    <div
      className="relative overflow-hidden w-full py-3"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 z-10
                      bg-gradient-to-r from-[--bg-base] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 z-10
                      bg-gradient-to-l from-[--bg-base] to-transparent" />

      <div
        ref={trackRef}
        className="flex gap-3 will-change-transform"
        style={{
          animation: `marquee 35s linear infinite`,
          animationPlayState: paused ? "paused" : "running",
          width: "max-content",
        }}
      >
        {doubled.map((img, i) => (
          <div
            key={`${img.public_id}-${i}`}
            className="relative flex-shrink-0 w-36 h-24 sm:w-40 sm:h-28 md:w-56 md:h-40 rounded-xl md:rounded-2xl overflow-hidden
                       glass p-1 hover:shadow-lg
                       hover:scale-[1.02] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] bg-white/50"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img.secure_url}
              alt="Spectacle Frame"
              className="w-full h-full object-cover rounded-[14px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
