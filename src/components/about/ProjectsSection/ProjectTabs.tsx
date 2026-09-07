"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { projects } from "@/data/aboutprojects";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Images, LayoutGrid } from "lucide-react";
import ProjectSlider from "./ProjectSlider";
import { cn } from "@/utils/cn";

export default function ProjectTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = projects[activeIndex];

  const railRef = useRef<HTMLDivElement>(null);
  const pillRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [edges, setEdges] = useState({ start: false, end: true });

  /** Keeps the arrow buttons in sync with how far the rail is scrolled. */
  const syncEdges = useCallback(() => {
    const el = railRef.current;
    if (!el) return;
    setEdges({
      start: el.scrollLeft > 8,
      end: el.scrollLeft + el.clientWidth < el.scrollWidth - 8,
    });
  }, []);

  useEffect(() => {
    syncEdges();
    window.addEventListener("resize", syncEdges);
    return () => window.removeEventListener("resize", syncEdges);
  }, [syncEdges]);

  /**
   * Centre the active pill inside the rail. Done by writing scrollLeft rather
   * than scrollIntoView so selecting a project never yanks the page vertically.
   */
  useEffect(() => {
    const rail = railRef.current;
    const pill = pillRefs.current[activeIndex];
    if (!rail || !pill) return;

    const target =
      pill.offsetLeft - rail.clientWidth / 2 + pill.clientWidth / 2;
    rail.scrollTo({
      left: Math.max(0, target),
      behavior: "smooth",
    });
  }, [activeIndex]);

  const nudge = (dir: -1 | 1) => {
    railRef.current?.scrollBy({
      left: dir * Math.min(360, railRef.current.clientWidth * 0.8),
      behavior: "smooth",
    });
  };

  const step = (dir: -1 | 1) =>
    setActiveIndex((i) => (i + dir + projects.length) % projects.length);

  /*
    Note on the section below: `w-full` is load-bearing. This section is a
    child of the about page's `flex flex-col` main, and `mx-auto` gives it auto
    cross-axis margins, which disable flex stretching — so without an explicit
    width it shrink-wraps to its *intrinsic* width. The horizontally scrolling
    tab rail reports ~1920px of intrinsic content, so on phones the section laid
    out at the full max-w-6xl and the parent's overflow-hidden clipped it.
  */
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 md:py-16">
      {/* --- HEADER (unchanged markup) --- */}
      <h2 className="text-3xl md:text-5xl text-center font-semibold mb-12 tracking-tight text-[var(--foreground)] leading-[1.15]">
        <span className="relative z-10 text-primary">Our </span>
        <span className="relative inline-block">
          <span className="text-secondary"> Projects</span>
          <span className="absolute bottom-2 left-0 w-full h-4 bg-secondary/20 -z-10 -rotate-2"></span>
        </span>{" "}
      </h2>

      {/* --- PROJECT RAIL --- */}
      <div className="relative mb-10">
        {/* Left arrow */}
        <button
          type="button"
          aria-label="Scroll projects left"
          onClick={() => nudge(-1)}
          className={cn(
            "absolute left-0 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-primary/20 bg-white p-2 text-secondary shadow-md transition-all duration-300 md:grid md:place-items-center",
            "hover:border-primary hover:bg-primary hover:text-white active:scale-90",
            edges.start
              ? "opacity-100"
              : "pointer-events-none opacity-0 -translate-x-2",
          )}
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        {/* Edge fades, shown only on the side that actually has more to scroll */}
        <span
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[var(--theme)] to-transparent transition-opacity duration-300 md:w-16",
            edges.start ? "opacity-100" : "opacity-0",
          )}
        />
        <span
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[var(--theme)] to-transparent transition-opacity duration-300 md:w-16",
            edges.end ? "opacity-100" : "opacity-0",
          )}
        />

        <div
          ref={railRef}
          onScroll={syncEdges}
          role="tablist"
          aria-label="Projects"
          className="scroll-rail gap-2 px-1 py-2 md:px-10"
        >
          {projects.map((p, i) => {
            const isActive = i === activeIndex;
            return (
              <button
                key={p.id}
                ref={(el) => {
                  pillRefs.current[i] = el;
                }}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveIndex(i)}
                className={cn(
                  "relative shrink-0 whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-semibold transition-colors duration-300 outline-none",
                  isActive
                    ? "text-white"
                    : "border border-primary/15 bg-white text-slate-600 hover:border-primary/40 hover:text-primary",
                )}
              >
                {/* Shared pill that slides between tabs */}
                {isActive && (
                  <motion.span
                    layoutId="project-pill"
                    transition={{
                      type: "spring",
                      stiffness: 420,
                      damping: 34,
                    }}
                    className="absolute inset-0 -z-10 rounded-full bg-primary shadow-[0_10px_22px_-12px_var(--color-primary)]"
                  />
                )}

                <span className="relative flex items-center gap-2">
                  {p.title}
                  <span
                    className={cn(
                      "tnum rounded-full px-1.5 py-0.5 text-[10px] font-bold leading-none",
                      isActive
                        ? "bg-white/25 text-white"
                        : "bg-primary/10 text-primary",
                    )}
                  >
                    {p.images.length}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Right arrow */}
        <button
          type="button"
          aria-label="Scroll projects right"
          onClick={() => nudge(1)}
          className={cn(
            "absolute right-0 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-primary/20 bg-white p-2 text-secondary shadow-md transition-all duration-300 md:grid md:place-items-center",
            "hover:border-primary hover:bg-primary hover:text-white active:scale-90",
            edges.end
              ? "opacity-100"
              : "pointer-events-none opacity-0 translate-x-2",
          )}
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* --- CONTENT CARD --- */}
      <div className="relative overflow-hidden rounded-[28px] border border-secondary/25 bg-[var(--boldtheme)] shadow-[0_30px_70px_-50px_rgba(15,23,42,0.6)]">
        {/* Progress strip showing position in the project list */}
        <div className="h-1 w-full bg-secondary/10">
          <motion.div
            className="h-full bg-primary"
            initial={false}
            animate={{
              width: `${((activeIndex + 1) / projects.length) * 100}%`,
            }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        <div className="p-6 sm:p-8 md:p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mb-6 text-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-white/70 px-3 py-1.5">
                  <LayoutGrid className="h-3.5 w-3.5 text-primary" />
                  <span className="eyebrow tnum text-secondary">
                    {activeIndex + 1} of {projects.length}
                  </span>
                </span>

                <h3 className="mt-4 font-heading text-2xl font-bold text-secondary md:text-3xl">
                  {active.title}
                </h3>

                <p className="mx-auto mt-3 max-w-3xl text-base leading-relaxed text-slate-700 md:text-lg">
                  {active.description}
                </p>

                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                  <Images className="h-3.5 w-3.5" />
                  <span className="tnum">{active.images.length}</span> photos
                </span>
              </div>

              <ProjectSlider key={active.id} images={active.images} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* --- PREV / NEXT PROJECT --- */}
        <div className="flex items-stretch border-t border-secondary/15 bg-white/50">
          <button
            onClick={() => step(-1)}
            className="group flex flex-1 items-center gap-3 px-4 py-4 text-left transition-colors hover:bg-white sm:px-6"
          >
            <ChevronLeft className="h-5 w-5 shrink-0 text-primary transition-transform duration-300 group-hover:-translate-x-1" />
            <span className="min-w-0">
              <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400">
                Previous
              </span>
              <span className="block truncate text-sm font-semibold text-secondary">
                {
                  projects[(activeIndex - 1 + projects.length) % projects.length]
                    .title
                }
              </span>
            </span>
          </button>

          <span className="w-px bg-secondary/15" />

          <button
            onClick={() => step(1)}
            className="group flex flex-1 items-center justify-end gap-3 px-4 py-4 text-right transition-colors hover:bg-white sm:px-6"
          >
            <span className="min-w-0">
              <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400">
                Next
              </span>
              <span className="block truncate text-sm font-semibold text-secondary">
                {projects[(activeIndex + 1) % projects.length].title}
              </span>
            </span>
            <ChevronRight className="h-5 w-5 shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
