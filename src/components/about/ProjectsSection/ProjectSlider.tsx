"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface ProjectSliderProps {
  images: string[];
}

export default function ProjectSlider({ images }: ProjectSliderProps) {
  const [index, setIndex] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const containerRef = useRef<HTMLDivElement>(null);

  if (!images || images.length === 0) {
    return (
      <div className="h-[250px] flex items-center justify-center text-gray-400">
        Loading images...
      </div>
    );
  }

  useEffect(() => {
    setIndex(0);
    setLightboxIndex(0);
  }, [images]);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (lightbox) {
        if (e.key === "ArrowRight") nextLightbox();
        if (e.key === "ArrowLeft") prevLightbox();
        if (e.key === "Escape") setLightbox(false);
      } else {
        if (e.key === "ArrowRight") next();
        if (e.key === "ArrowLeft") prev();
      }
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightbox]);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  const nextLightbox = () =>
    setLightboxIndex((prev) => (prev + 1) % images.length);

  const prevLightbox = () =>
    setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);

  const openLightbox = (i: number) => {
    setLightboxIndex(i);
    setLightbox(true);
  };

  function handleMouseMove(e: React.MouseEvent) {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    setMouse({ x, y });
  }

  function getPosition(i: number) {
    const diff = i - index;

    if (diff === 0) return "center";
    if (diff === -1 || diff === images.length - 1) return "left";
    if (diff === 1 || diff === -(images.length - 1)) return "right";

    return "hidden";
  }

  return (
    <div className="mt-10 w-full">
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="relative flex items-center justify-center h-[240px] sm:h-[300px] md:h-[420px] perspective-[1600px]"
      >
        {images.map((img, i) => {
          const position = getPosition(i);

          const styles: Record<string, string> = {
            center: "z-30 scale-100 opacity-100",
            left: "z-20 -translate-x-20 sm:-translate-x-32 md:-translate-x-60 scale-90 opacity-70",
            right:
              "z-20 translate-x-20 sm:translate-x-32 md:translate-x-60 scale-90 opacity-70",
            hidden: "opacity-0 pointer-events-none",
          };

          const rotateY =
            position === "center"
              ? mouse.x * 8
              : position === "left"
                ? -15
                : position === "right"
                  ? 15
                  : 0;

          return (
            <motion.div
              key={`image-${i}`}
              className={`absolute transition-all duration-500 cursor-pointer ${styles[position]}`}
              style={{ transform: `rotateY(${rotateY}deg)` }}
              onClick={() => openLightbox(i)}
            >
              <div className="relative w-[200px] sm:w-[260px] md:w-[420px] h-[160px] sm:h-[200px] md:h-[320px] rounded-xl overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.35)]">
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `linear-gradient(${120 + mouse.x * 100}deg,
                      rgba(255,255,255,0.25),
                      transparent 40%)`,
                  }}
                />

                <Image
                  src={img}
                  alt="project image"
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 80vw, 420px"
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="flex justify-center gap-3 mt-6">
        <button
          onClick={prev}
          className="px-4 py-2 text-sm sm:text-base bg-secondary text-white rounded-lg hover:scale-105 transition"
        >
          ←
        </button>

        <button
          onClick={next}
          className="px-4 py-2 text-sm sm:text-base bg-primary text-white rounded-lg hover:scale-105 transition"
        >
          →
        </button>
      </div>

      <div className="flex justify-center flex-wrap gap-2 sm:gap-3 mt-8">
        {images.map((img, i) => (
          <button
            key={`thumb-${i}`}
            onClick={() => setIndex(i)}
            className={`relative overflow-hidden rounded-lg transition
            ${
              i === index
                ? "ring-2 ring-primary scale-110"
                : "opacity-70 hover:opacity-100"
            }`}
          >
            <div className="relative w-16 h-12 sm:w-20 sm:h-14 md:w-24 md:h-16">
              <Image src={img} alt="thumbnail" fill className="object-cover" />
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(false)}
          >
            <button
              onClick={() => setLightbox(false)}
              className="absolute top-5 left-5 text-white text-3xl"
            >
              ✕
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prevLightbox();
              }}
              className="absolute left-3 sm:left-6 text-white text-4xl sm:text-5xl"
            >
              ‹
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextLightbox();
              }}
              className="absolute right-3 sm:right-6 text-white text-4xl sm:text-5xl"
            >
              ›
            </button>

            <motion.div
              key={images[lightboxIndex]}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              className="relative w-[95vw] max-w-6xl h-[70vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[lightboxIndex]}
                alt="fullscreen"
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
