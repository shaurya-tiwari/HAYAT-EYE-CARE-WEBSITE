"use client";

import { useEffect, useState, useCallback } from "react";
import HeroHeading from "./HeroHeading";
import HeroSubtext from "./HeroSubtext";
import HeroCtaButtons from "./HeroCtaButtons";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface CloudinaryImage {
  public_id: string;
  secure_url: string;
}

export default function Hero({ initialImages = [] }: { initialImages?: CloudinaryImage[] }) {
  const [images, setImages] = useState<CloudinaryImage[]>(initialImages);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sync images if prop changes (mostly for dev hot-reloads)
  useEffect(() => {
    setImages(initialImages.slice(0, 6)); // Limited to 6 for performance
  }, [initialImages]);

  const nextSlide = useCallback(() => {
    if (images.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevSlide = useCallback(() => {
    if (images.length === 0) return;
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  // Autoplay
  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(nextSlide, 6000); // Slow, elegant 6s interval
    return () => clearInterval(timer);
  }, [images.length, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <section
      id="home"
      className="relative z-10 -mb-[1px] h-[50vh] min-h-[400px] md:min-h-[500px] md:h-[75vh] lg:h-[85vh] max-h-[900px] w-full flex items-center overflow-hidden bg-[--dark-section-from]"
      aria-roledescription="carousel"
      aria-label="Hero Images"
    >

      {/* Carousel Background */}
      {images.length > 0 ? (
        images.map((img, idx) => (
          <div
            key={img.public_id}
            className={cn(
              "absolute inset-0 transition-opacity duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)]",
              idx === currentIndex ? "opacity-100 z-0" : "opacity-0 -z-10"
            )}
          >
            <Image
              src={img.secure_url}
              alt={img.public_id.split("/").pop()?.replace(/[-_]/g, " ") || "Premium Optical View"}
              fill
              priority={idx === 0}
              placeholder="blur"
              blurDataURL={img.secure_url.replace("/upload/", "/upload/w_10,e_blur:1000,f_auto,q_1/")}
              className="object-cover"
              style={{ transform: idx === currentIndex ? "scale(1.03)" : "scale(1)", transition: "transform 8s ease-out" }}
              sizes="100vw"
            />
          </div>
        ))
      ) : (
        /* Fallback / Loading */
        <div className="absolute inset-0 bg-[--dark-section-from] animate-pulse" />
      )}

      {/* Screen reader announcement for slide changes */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {images.length > 0 ? `Showing slide ${currentIndex + 1} of ${images.length}` : "Loading images"}
      </div>

      {/* Dark cinematic overlay — left-heavy gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/10 z-10 pointer-events-none" />

      {/* 
        Soft bottom transition to perfectly blend into the site background
        MUST be z-20 to sit above the cinematic dark overlay so it doesn't get tinted gray!
      */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-32 md:h-56 bg-gradient-to-t from-white via-white/80 to-transparent z-20 pointer-events-none" />

      {/* Content Overlay */}
      <div className="relative z-20 w-full px-4 md:px-10 lg:px-16 h-full flex flex-col justify-center">
        <div className="max-w-2xl flex flex-col gap-6 animate-fade-in-up mt-2">
          <HeroHeading />
          <HeroSubtext />
          <HeroCtaButtons />
        </div>
      </div>

      {/* Carousel Controls */}
      {images.length > 1 && (
        <>
          {/* Previous Button (Left) */}
          <button
            onClick={prevSlide}
            className="hidden md:flex absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/15 items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Next Button (Right) */}
          <button
            onClick={nextSlide}
            className="hidden md:flex absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/15 items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
            aria-label="Next Slide"
          >
            <ChevronRight size={18} />
          </button>

          {/* Dot Indicators (Bottom Center) */}
          <div className="absolute bottom-3 md:bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1.5">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={cn(
                  "h-1 rounded-full transition-all duration-500",
                  idx === currentIndex ? "w-7 bg-white" : "w-2.5 bg-white/30 hover:bg-white/50"
                )}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
