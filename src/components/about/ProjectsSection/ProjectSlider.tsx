"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";
import { cn } from "@/utils/cn";

interface ProjectSliderProps {
  images: string[];
}

export default function ProjectSlider({ images }: ProjectSliderProps) {
  const [index, setIndex] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const containerRef = useRef<HTMLDivElement>(null);
  const thumbRailRef = useRef<HTMLDivElement>(null);
  const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const count = images?.length ?? 0;

  const next = useCallback(() => setIndex((p) => (p + 1) % count), [count]);
  const prev = useCallback(
    () => setIndex((p) => (p - 1 + count) % count),
    [count],
  );
  const nextLightbox = useCallback(
    () => setLightboxIndex((p) => (p + 1) % count),
    [count],
  );
  const prevLightbox = useCallback(
    () => setLightboxIndex((p) => (p - 1 + count) % count),
    [count],
  );

  useEffect(() => {
    setIndex(0);
    setLightboxIndex(0);
  }, [images]);

  /**
   * Arrow keys drive the lightbox whenever it is open, and the inline carousel
   * only while it is hovered or focused — so they still scroll the page
   * normally everywhere else.
   */
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (lightbox) {
        if (e.key === "ArrowRight") nextLightbox();
        if (e.key === "ArrowLeft") prevLightbox();
        if (e.key === "Escape") setLightbox(false);
        return;
      }

      const el = containerRef.current;
      if (!el) return;
      const engaged =
        el.matches(":hover") ||
        (document.activeElement instanceof Node &&
          el.contains(document.activeElement));
      if (!engaged) return;

      if (e.key === "ArrowRight") {
        e.preventDefault();
        next();
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      }
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightbox, next, prev, nextLightbox, prevLightbox]);

  /* Lock body scroll while the lightbox is open */
  useEffect(() => {
    if (!lightbox) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [lightbox]);

  /* Keep the active thumbnail centred in its rail */
  useEffect(() => {
    const rail = thumbRailRef.current;
    const thumb = thumbRefs.current[index];
    if (!rail || !thumb) return;

    rail.scrollTo({
      left: Math.max(
        0,
        thumb.offsetLeft - rail.clientWidth / 2 + thumb.clientWidth / 2,
      ),
      behavior: "smooth",
    });
  }, [index]);

  const openLightbox = (i: number) => {
    setLightboxIndex(i);
    setLightbox(true);
  };

  /** Parallax tilt for the centre card (desktop pointers only). */
  function handleMouseMove(e: React.MouseEvent) {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMouse({
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5,
    });
  }

  function getPosition(i: number) {
    const diff = i - index;
    if (diff === 0) return "center";
    if (diff === -1 || diff === count - 1) return "left";
    if (diff === 1 || diff === -(count - 1)) return "right";
    return "hidden";
  }

  if (!images || count === 0) {
    return (
      <div className="flex h-[250px] items-center justify-center rounded-2xl border border-gray-100 bg-gray-50 text-gray-400">
        <span className="animate-pulse">Loading images…</span>
      </div>
    );
  }

  return (
    <div className="relative w-full select-none">
      {/* ---------------- STAGE ---------------- */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setMouse({ x: 0, y: 0 })}
        className="group relative flex h-[210px] items-center justify-center rounded-3xl [perspective:2000px] sm:h-[340px] md:h-[480px]"
      >
        {/* Soft pedestal shadow under the stack */}
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-4 left-1/2 h-8 w-[60%] -translate-x-1/2 rounded-[50%] bg-black/20 blur-2xl"
        />

        <button
          onClick={prev}
          aria-label="Previous image"
          className="absolute left-2 z-40 hidden rounded-full bg-white/50 p-3 text-gray-800 opacity-0 shadow-lg backdrop-blur-md transition-all duration-300 hover:bg-white hover:scale-105 active:scale-95 group-hover:opacity-100 focus-visible:opacity-100 sm:left-4 sm:block"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button
          onClick={next}
          aria-label="Next image"
          className="absolute right-2 z-40 hidden rounded-full bg-white/50 p-3 text-gray-800 opacity-0 shadow-lg backdrop-blur-md transition-all duration-300 hover:bg-white hover:scale-105 active:scale-95 group-hover:opacity-100 focus-visible:opacity-100 sm:right-4 sm:block"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Counter */}
        <div className="tnum absolute right-3 top-3 z-40 rounded-full bg-black/45 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md sm:right-5 sm:top-5">
          {index + 1} / {count}
        </div>

        {images.map((img, i) => {
          const position = getPosition(i);

          const layer: Record<string, string> = {
            center:
              "z-30 scale-100 opacity-100 cursor-zoom-in shadow-[0_30px_70px_-25px_rgba(0,0,0,0.55)]",
            left: "z-20 -translate-x-[46%] sm:-translate-x-[52%] md:-translate-x-[58%] scale-[0.78] sm:scale-[0.82] opacity-55 hover:opacity-90 cursor-pointer shadow-xl",
            right:
              "z-20 translate-x-[46%] sm:translate-x-[52%] md:translate-x-[58%] scale-[0.78] sm:scale-[0.82] opacity-55 hover:opacity-90 cursor-pointer shadow-xl",
            hidden: "opacity-0 pointer-events-none scale-[0.7]",
          };

          const rotateY =
            position === "center"
              ? mouse.x * 9
              : position === "left"
                ? -26
                : position === "right"
                  ? 26
                  : 0;
          const rotateX = position === "center" ? -mouse.y * 8 : 0;

          return (
            <motion.div
              key={`image-${i}`}
              drag={position === "center" ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.14}
              onDragEnd={(_, info) => {
                if (info.offset.x < -60) next();
                else if (info.offset.x > 60) prev();
              }}
              className={cn(
                "absolute overflow-hidden rounded-2xl ring-1 ring-black/5 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]",
                layer[position],
              )}
              style={{
                transform: `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`,
                transformStyle: "preserve-3d",
              }}
              onClick={() =>
                position === "center" ? openLightbox(i) : setIndex(i)
              }
            >
              <div className="relative h-[140px] w-[210px] sm:h-[260px] sm:w-[390px] md:h-[400px] md:w-[600px]">
                {/* Glossy pass — sells the 3D on the centre card, dims the sides */}
                <div
                  className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
                  style={{
                    background:
                      position === "center"
                        ? `linear-gradient(${118 + mouse.x * 55}deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0) 48%)`
                        : "rgba(0,0,0,0.28)",
                  }}
                />

                {position === "center" && (
                  <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/25 opacity-0 transition-opacity duration-300 hover:opacity-100">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2.5 text-xs font-semibold text-white backdrop-blur-md sm:text-sm">
                      <Maximize2 className="h-4 w-4" />
                      View full screen
                    </span>
                  </div>
                )}

                <Image
                  src={img}
                  alt={`Project image ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 80vw, 600px"
                  priority={i === 0}
                  draggable={false}
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ---------------- MOBILE CONTROLS ---------------- */}
      <div className="mt-5 flex items-center justify-center gap-4 sm:hidden">
        <button
          onClick={prev}
          aria-label="Previous image"
          className="rounded-full border border-primary/20 bg-white p-3 text-secondary shadow-sm transition-transform active:scale-90"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <span className="tnum text-xs font-semibold text-slate-500">
          Swipe or tap · {index + 1}/{count}
        </span>
        <button
          onClick={next}
          aria-label="Next image"
          className="rounded-full border border-primary/20 bg-white p-3 text-secondary shadow-sm transition-transform active:scale-90"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* ---------------- THUMBNAIL RAIL ---------------- */}
      <div className="mt-6 md:mt-8">
        <div
          ref={thumbRailRef}
          className="scroll-rail rail-mask gap-2.5 px-2 py-2 sm:gap-3"
        >
          {images.map((img, i) => (
            <button
              key={`thumb-${i}`}
              ref={(el) => {
                thumbRefs.current[i] = el;
              }}
              onClick={() => setIndex(i)}
              aria-label={`Go to image ${i + 1}`}
              aria-current={i === index}
              className={cn(
                "relative h-14 w-20 shrink-0 overflow-hidden rounded-xl transition-all duration-300 sm:h-16 sm:w-24",
                i === index
                  ? "scale-105 opacity-100 shadow-md ring-2 ring-primary ring-offset-2 ring-offset-[var(--boldtheme)]"
                  : "opacity-45 hover:opacity-90",
              )}
            >
              <Image
                src={img}
                alt=""
                fill
                className="object-cover"
                sizes="96px"
              />
            </button>
          ))}
        </div>

        <p className="mt-4 text-center text-xs font-medium text-slate-500">
          Tap the centre photo to open it full screen
        </p>
      </div>

      {/* ---------------- LIGHTBOX ---------------- */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[7000] flex items-center justify-center bg-black/95 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) setLightbox(false);
            }}
          >
            <div className="tnum absolute left-1/2 top-6 z-50 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white">
              {lightboxIndex + 1} / {count}
            </div>

            <button
              onClick={() => setLightbox(false)}
              aria-label="Close"
              className="absolute right-5 top-5 z-50 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/25 active:scale-90"
            >
              <X className="h-6 w-6" />
            </button>

            <button
              onClick={prevLightbox}
              aria-label="Previous image"
              className="absolute left-3 z-50 rounded-full bg-white/5 p-3 text-white transition-colors hover:bg-white/25 active:scale-90 sm:left-8 sm:p-4"
            >
              <ChevronLeft className="h-7 w-7 sm:h-8 sm:w-8" />
            </button>

            <button
              onClick={nextLightbox}
              aria-label="Next image"
              className="absolute right-3 z-50 rounded-full bg-white/5 p-3 text-white transition-colors hover:bg-white/25 active:scale-90 sm:right-8 sm:p-4"
            >
              <ChevronRight className="h-7 w-7 sm:h-8 sm:w-8" />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.16}
              onDragEnd={(_, info) => {
                if (info.offset.x < -70) nextLightbox();
                else if (info.offset.x > 70) prevLightbox();
              }}
              className="relative h-full max-h-[82vh] w-full max-w-6xl p-4"
            >
              <Image
                src={images[lightboxIndex]}
                alt="Fullscreen project view"
                fill
                className="object-contain"
                sizes="100vw"
                draggable={false}
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
