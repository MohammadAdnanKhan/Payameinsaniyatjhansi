"use client";

import { useState, useEffect, useRef } from "react";
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

  // Reset when images change
  useEffect(() => {
    setIndex(0);
    setLightboxIndex(0);
  }, [images]);

  // Keyboard navigation
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
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);
  const nextLightbox = () => setLightboxIndex((prev) => (prev + 1) % images.length);
  const prevLightbox = () => setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);

  const openLightbox = (i: number) => {
    setLightboxIndex(i);
    setLightbox(true);
  };

  // 3D Tilt effect (Desktop only)
  function handleMouseMove(e: React.MouseEvent) {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMouse({ x, y });
  }

  // Calculate carousel positioning
  function getPosition(i: number) {
    const diff = i - index;
    if (diff === 0) return "center";
    if (diff === -1 || diff === images.length - 1) return "left";
    if (diff === 1 || diff === -(images.length - 1)) return "right";
    return "hidden";
  }

  // Loading state
  if (!images || images.length === 0) {
    return (
      <div className="h-[250px] flex items-center justify-center text-gray-400 bg-gray-50 rounded-2xl border border-gray-100">
        <span className="animate-pulse">Loading images...</span>
      </div>
    );
  }

  return (
    <div className="w-full relative select-none">
      

      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setMouse({ x: 0, y: 0 })}
        className="relative flex items-center justify-center h-[200px] sm:h-[340px] md:h-[480px] perspective-[2000px] rounded-3xl group"
      >

        <button
          onClick={(e) => { e.stopPropagation(); prev(); }}
          className="absolute left-2 sm:left-4 z-40 p-3 rounded-full bg-white/30 hover:bg-white text-gray-800 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg hidden sm:block active:scale-95"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={(e) => { e.stopPropagation(); next(); }}
          className="absolute right-2 sm:right-4 z-40 p-3 rounded-full bg-white/30 hover:bg-white text-gray-800 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg hidden sm:block active:scale-95"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {images.map((img, i) => {
          const position = getPosition(i);
          
          // Enhanced Responsive Styles for 3D Math
          const styles: Record<string, string> = {
            center: "z-30 scale-100 opacity-100 cursor-zoom-in shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]",
            left: "z-20 -translate-x-12 sm:-translate-x-[35%] md:-translate-x-[55%] scale-[0.80] sm:scale-[0.85] opacity-40 hover:opacity-80 cursor-pointer shadow-xl",
            right: "z-20 translate-x-12 sm:translate-x-[35%] md:translate-x-[55%] scale-[0.80] sm:scale-[0.85] opacity-40 hover:opacity-80 cursor-pointer shadow-xl",
            hidden: "opacity-0 pointer-events-none scale-75",
          };

          const rotateY = position === "center" ? mouse.x * 10 : position === "left" ? -20 : position === "right" ? 20 : 0;
          const rotateX = position === "center" ? -mouse.y * 10 : 0;

          return (
            <motion.div
              key={`image-${i}`}
              className={cn("absolute transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] rounded-2xl overflow-hidden", styles[position])}
              style={{ transform: `rotateY(${rotateY}deg) rotateX(${rotateX}deg)` }}
              onClick={() => position === "center" ? openLightbox(i) : setIndex(i)}
            >
              <div className="relative w-[180px] sm:w-[380px] md:w-[600px] h-[130px] sm:h-[260px] md:h-[400px]">
                {/* Glossy Overlay for 3D realism */}
                <div
                  className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-300"
                  style={{
                    background: position === "center" 
                      ? `linear-gradient(${120 + mouse.x * 50}deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 50%)`
                      : 'rgba(0,0,0,0.2)', // Darken side images
                  }}
                />
                
                {/* Enlarge Icon (Only on center image hover) */}
                {position === "center" && (
                  <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/20">
                    <div className="p-3 sm:p-4 rounded-full bg-white/20 backdrop-blur-md text-white">
                      <Maximize2 className="w-6 h-6 sm:w-8 sm:h-8" />
                    </div>
                  </div>
                )}

                <Image
                  src={img}
                  alt={`Project image ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 80vw, 600px"
                  priority={i === 0}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
      
      <div className="flex justify-center mt-4 sm:mt-6">
        <p className="inline-flex items-center gap-2 text-xs sm:text-sm text-gray-500 font-medium px-4 py-1.5 rounded-full bg-gray-100/50 border border-gray-200/50">
          <Maximize2 className="w-3.5 h-3.5 opacity-70" />
          Click the center image to view full screen
        </p>
      </div>


      <div className="flex sm:hidden justify-center gap-4 mt-6">
        <button onClick={prev} className="p-3 rounded-full bg-white border border-gray-200 text-gray-800 shadow-sm active:scale-90 transition-transform">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button onClick={next} className="p-3 rounded-full bg-white border border-gray-200 text-gray-800 shadow-sm active:scale-90 transition-transform">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="mt-8 md:mt-12 max-w-4xl mx-auto px-2 sm:px-4">

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 sm:gap-3 lg:gap-4">
          {images.map((img, i) => (
            <button
              key={`thumb-${i}`}
              onClick={() => setIndex(i)}
              className={cn(
                "relative w-full aspect-video overflow-hidden rounded-xl transition-all duration-300 active:scale-95",
                i === index
                  ? "ring-2 ring-primary ring-offset-2 ring-offset-[var(--boldtheme)] opacity-100 scale-105 shadow-md z-10"
                  : "opacity-40 hover:opacity-100"
              )}
            >
              <Image 
                src={img} 
                alt={`Thumbnail ${i + 1}`} 
                fill 
                className="object-cover" 
                sizes="(max-width: 768px) 33vw, 20vw"
              />
            </button>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[7000] flex items-center justify-center bg-black/95 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) setLightbox(false);
            }}
          >
            <button
              onClick={() => setLightbox(false)}
              className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors active:scale-90"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prevLightbox(); }}
              className="absolute left-4 sm:left-8 z-50 p-4 rounded-full bg-white/5 hover:bg-white/20 text-white transition-colors active:scale-90"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); nextLightbox(); }}
              className="absolute right-4 sm:right-8 z-50 p-4 rounded-full bg-white/5 hover:bg-white/20 text-white transition-colors active:scale-90"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-full h-full max-w-6xl max-h-[85vh] p-4 pointer-events-none"
            >
              <Image
                src={images[lightboxIndex]}
                alt="Fullscreen project view"
                fill
                className="object-contain pointer-events-auto cursor-default"
                onClick={(e) => e.stopPropagation()} 
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}