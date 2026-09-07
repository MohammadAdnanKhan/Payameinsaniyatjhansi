"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";
import { cn } from "@/utils/cn";

interface ProjectSliderProps {
  images: string[];
}

/** How many neighbours either side get a real <Image> mounted. */
const PRELOAD_RADIUS = 2;

/** Horizontal travel (px) that counts as a swipe rather than a tap. */
const SWIPE_THRESHOLD = 45;

export default function ProjectSlider({ images }: ProjectSliderProps) {
  const [index, setIndex] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const stageRef = useRef<HTMLDivElement>(null);
  const thumbRailRef = useRef<HTMLDivElement>(null);
  const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const tiltFrame = useRef(0);
  const pointerStart = useRef<{ x: number; y: number } | null>(null);
  const didSwipe = useRef(false);

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

      const el = stageRef.current;
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

  useEffect(() => () => cancelAnimationFrame(tiltFrame.current), []);

  const openLightbox = (i: number) => {
    setLightboxIndex(i);
    setLightbox(true);
  };

  /**
   * Pointer tilt. Written straight to CSS custom properties inside one
   * rAF per frame — deliberately not React state, which would re-render
   * every card in the stack on every mouse move.
   */
  function handlePointerMove(e: React.PointerEvent) {
    if (e.pointerType !== "mouse") return;

    const { clientX, clientY } = e;
    if (tiltFrame.current) return;

    tiltFrame.current = requestAnimationFrame(() => {
      tiltFrame.current = 0;
      const el = stageRef.current;
      if (!el) return;

      const r = el.getBoundingClientRect();
      const x = (clientX - r.left) / r.width - 0.5;
      const y = (clientY - r.top) / r.height - 0.5;

      el.style.setProperty("--tilt-y", `${(x * 9).toFixed(2)}deg`);
      el.style.setProperty("--tilt-x", `${(-y * 8).toFixed(2)}deg`);
    });
  }

  function resetTilt() {
    const el = stageRef.current;
    if (!el) return;
    el.style.setProperty("--tilt-y", "0deg");
    el.style.setProperty("--tilt-x", "0deg");
  }

  /* ---- Swipe / tap discrimination ---- */
  function handlePointerDown(e: React.PointerEvent) {
    pointerStart.current = { x: e.clientX, y: e.clientY };
    didSwipe.current = false;
  }

  function handlePointerUp(e: React.PointerEvent) {
    const start = pointerStart.current;
    pointerStart.current = null;
    if (!start) return;

    const dx = e.clientX - start.x;
    const dy = e.clientY - start.y;

    if (Math.abs(dx) > SWIPE_THRESHOLD && Math.abs(dx) > Math.abs(dy)) {
      didSwipe.current = true;
      if (dx < 0) next();
      else prev();
    }
  }

  function positionOf(i: number) {
    const diff = i - index;
    if (diff === 0) return "center";
    if (diff === -1 || diff === count - 1) return "left";
    if (diff === 1 || diff === -(count - 1)) return "right";
    return "far";
  }

  /** Circular distance from the active slide. */
  function distanceFrom(i: number) {
    const d = Math.abs(i - index);
    return Math.min(d, count - d);
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
      <div className="group relative">
        <div
          ref={stageRef}
          onPointerMove={handlePointerMove}
          onPointerLeave={resetTilt}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerCancel={() => (pointerStart.current = null)}
          className="cf-stage"
        >
          {/* Sets the stage height from the card's own fluid size */}
          <div aria-hidden className="cf-sizer" />

          {images.map((img, i) => {
            const pos = positionOf(i);
            const near = distanceFrom(i) <= PRELOAD_RADIUS;

            return (
              <div
                key={`slide-${i}`}
                data-pos={pos}
                /* Tinted well shows behind the letterboxed photo in simple
                   mode; from md up the image covers the card edge to edge. */
                className="cf-card bg-slate-900/[0.06] ring-1 ring-black/5 md:bg-transparent"
                onClick={() => {
                  // A swipe that ends on the card must not also open it.
                  if (didSwipe.current) {
                    didSwipe.current = false;
                    return;
                  }
                  if (pos === "center") openLightbox(i);
                  else if (pos === "left" || pos === "right") setIndex(i);
                }}
              >
                {near && (
                  <>
                    <span aria-hidden className="cf-shade" />

                    {pos === "center" && (
                      <div className="absolute inset-0 z-20 hidden items-center justify-center bg-black/25 opacity-0 transition-opacity duration-300 hover:opacity-100 md:flex">
                        <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2.5 text-sm font-semibold text-white">
                          <Maximize2 className="h-4 w-4" />
                          View full screen
                        </span>
                      </div>
                    )}

                    {/* `contain` on phones so no part of the photo is cut
                        off; `cover` once the card is big enough to fill. */}
                    <Image
                      src={img}
                      alt={`Project image ${i + 1}`}
                      fill
                      className="object-contain md:object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 62vw, 620px"
                      priority={i === 0}
                      draggable={false}
                    />
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Arrows sit outside the stage so they never eat pointer events
            meant for the swipe surface. Always visible from `sm` up —
            hover-gating them hid them entirely on touch tablets. */}
        <button
          onClick={prev}
          aria-label="Previous image"
          className="absolute left-1 top-1/2 z-40 hidden -translate-y-1/2 rounded-full bg-white/85 p-3 text-gray-800 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-white active:scale-95 md:left-2 md:block lg:left-4"
        >
          <ChevronLeft className="h-5 w-5 lg:h-6 lg:w-6" />
        </button>

        <button
          onClick={next}
          aria-label="Next image"
          className="absolute right-1 top-1/2 z-40 hidden -translate-y-1/2 rounded-full bg-white/85 p-3 text-gray-800 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-white active:scale-95 md:right-2 md:block lg:right-4"
        >
          <ChevronRight className="h-5 w-5 lg:h-6 lg:w-6" />
        </button>

        {/* Counter */}
        <div className="tnum absolute right-3 top-3 z-40 rounded-full bg-black/55 px-3 py-1 text-xs font-semibold text-white sm:right-5 sm:top-5">
          {index + 1} / {count}
        </div>
      </div>

      {/* ---------------- MOBILE CONTROLS ---------------- */}
      <div className="mt-5 flex items-center justify-center gap-4 md:hidden">
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
                loading="lazy"
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
            className="fixed inset-0 z-[7000] flex items-center justify-center bg-black/95"
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
              className="absolute left-3 z-50 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/25 active:scale-90 sm:left-8 sm:p-4"
            >
              <ChevronLeft className="h-7 w-7 sm:h-8 sm:w-8" />
            </button>

            <button
              onClick={nextLightbox}
              aria-label="Next image"
              className="absolute right-3 z-50 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/25 active:scale-90 sm:right-8 sm:p-4"
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
