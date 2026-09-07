"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, PlusCircle, PlayCircle, Youtube } from "lucide-react";
import { ngoVideos } from "@/data/videos";

const VIDEOS_PER_PAGE = 3;

export default function VideoGallery() {
  const [visibleCount, setVisibleCount] = useState(VIDEOS_PER_PAGE);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const displayedVideos = ngoVideos.slice(0, visibleCount);
  const remaining = ngoVideos.length - visibleCount;
  const hasMore = remaining > 0;
  const progress = (visibleCount / ngoVideos.length) * 100;

  const loadMore = () =>
    setVisibleCount((prev) =>
      Math.min(prev + VIDEOS_PER_PAGE, ngoVideos.length),
    );

  return (
    <section className="w-full bg-theme">
      <div className="mx-auto max-w-[1440px] px-5 py-2 sm:px-10 lg:px-16">
        {/* ---------- HEADER (headings unchanged) ---------- */}
        <div className="mb-14 text-center md:mb-20">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-bold uppercase tracking-widest text-primary">
            <PlayCircle className="h-4 w-4" />
            Watch Our Work
          </div>

          <h2 className="text-3xl md:text-5xl text-center font-semibold mb-4 tracking-tight text-[var(--foreground)] leading-[1.15]">
            <span className="relative z-10 text-primary">Impact in </span>
            <span className="relative inline-block">
              <span className="text-secondary"> Action</span>

              <span className="absolute bottom-2 left-0 w-full h-4 bg-secondary/20 -z-10 -rotate-2"></span>
            </span>{" "}
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl">
            See the real-world difference our volunteers and donors are making on
            the ground every single day.
          </p>
        </div>

        {/* ---------- GRID ---------- */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {displayedVideos.map((video, index) => (
              <motion.div
                key={video.id}
                layout
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.45,
                  delay: (index % VIDEOS_PER_PAGE) * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative w-full transform-gpu overflow-hidden rounded-[24px] border border-primary/10 bg-slate-900 shadow-[0_1px_2px_rgba(15,23,42,0.05),0_20px_45px_-28px_rgba(15,23,42,0.6)] transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[0_28px_55px_-25px_var(--color-primary)]"
              >
                <div className="relative aspect-video w-full bg-black">
                  {playingVideo === video.id ? (
                    <iframe
                      className="absolute inset-0 z-20 h-full w-full"
                      src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
                      title="Video Player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  ) : (
                    <button
                      type="button"
                      aria-label="Play video"
                      className="absolute inset-0 z-10 w-full cursor-pointer overflow-hidden"
                      onClick={() => setPlayingVideo(video.id)}
                    >
                      <img
                        src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                        alt="Video preview"
                        loading="lazy"
                        className="h-full w-full object-cover opacity-90 transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08]"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            `https://img.youtube.com/vi/${video.id}/0.jpg`;
                        }}
                      />

                      <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent transition-opacity duration-500 group-hover:opacity-80" />

                      {/* Play control */}
                      <span className="absolute inset-0 flex items-center justify-center">
                        <span className="relative grid h-16 w-16 place-items-center rounded-full border border-white/40 bg-white/20 shadow-2xl backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:border-primary group-hover:bg-primary md:h-20 md:w-20">
                          <Play className="ml-1 h-6 w-6 fill-white text-white md:h-8 md:w-8" />
                        </span>
                      </span>

                      {/* Corner badge */}
                      <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-black/50 px-3 py-1.5 text-[11px] font-bold text-white backdrop-blur-md">
                        <Youtube className="h-3.5 w-3.5" />
                        Watch
                      </span>

                      <span className="tnum absolute bottom-4 right-4 rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur-md">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ---------- LOAD MORE ---------- */}
        {hasMore && (
          <motion.div
            layout
            className="mt-14 flex flex-col items-center gap-4 md:mt-16"
          >
            {/* How much of the library has been revealed */}
            <div className="flex w-full max-w-xs flex-col items-center gap-2">
              <div className="h-1 w-full overflow-hidden rounded-full bg-primary/15">
                <motion.div
                  className="h-full rounded-full bg-primary"
                  initial={false}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
              <p className="tnum text-xs font-semibold text-slate-500">
                Showing {visibleCount} of {ngoVideos.length} films
              </p>
            </div>

            <button
              onClick={loadMore}
              className="btn-sheen group inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 font-heading text-base font-bold tracking-wide text-white shadow-[0_18px_35px_-18px_var(--color-primary)] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--color-primary-hover)] hover:shadow-[0_26px_45px_-18px_var(--color-primary)] active:scale-95"
            >
              <PlusCircle className="h-5 w-5 transition-transform duration-500 group-hover:rotate-90" />
              Show {Math.min(VIDEOS_PER_PAGE, remaining)} more
              <span className="tnum rounded-full bg-white/20 px-2 py-0.5 text-xs font-bold">
                +{remaining}
              </span>
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
