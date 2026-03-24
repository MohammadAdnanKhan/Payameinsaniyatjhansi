"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ChevronDown, PlayCircle } from "lucide-react";
import { ngoVideos } from "@/data/videos";

export default function VideoGallery() {
  const videosPerPage = 3;
  const [visibleCount, setVisibleCount] = useState(videosPerPage);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const displayedVideos = ngoVideos.slice(0, visibleCount);
  const hasMore = visibleCount < ngoVideos.length;

  const loadMore = () => setVisibleCount((prev) => prev + videosPerPage);

  return (
    <section className="w-full bg-theme">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16 py-2 md:py-2">
        
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6 border border-primary/20 uppercase tracking-widest">
            <PlayCircle className="w-4 h-4" />
            Watch Our Work
          </div>
      <h2 className="text-3xl md:text-5xl text-center font-semibold mb-4 tracking-tight text-[var(--foreground)] leading-[1.15]">
        <span className="relative z-10 text-primary">Impact in </span>
        <span className="relative inline-block">
          <span className="text-secondary"> Action</span>

          <span className="absolute bottom-2 left-0 w-full h-4 bg-secondary/20 -z-10 -rotate-2"></span>
        </span>{" "}
      </h2>
          <p className="text-gray-500 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            See the real-world difference our volunteers and donors are making on the ground every single day.
          </p>
        </div>

        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {displayedVideos.map((video, index) => (
              <motion.div
                key={video.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, delay: (index % videosPerPage) * 0.1 }}
                className="relative w-full rounded-[2rem] overflow-hidden shadow-2xl shadow-gray-200/50 border border-gray-100 bg-gray-900 group transform-gpu"
              >
                <div className="aspect-video w-full relative bg-black">
                  {playingVideo === video.id ? (
                    <iframe
                      className="absolute inset-0 w-full h-full z-20"
                      src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
                      title="Video Player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <div 
                      className="absolute inset-0 z-10 cursor-pointer overflow-hidden"
                      onClick={() => setPlayingVideo(video.id)}
                    >
                      <img
                        src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                        alt="Video Preview"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-85"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${video.id}/0.jpg`;
                        }}
                      />
                      
                      <div className="absolute inset-0 bg-primary/5 opacity-40 group-hover:opacity-0 transition-opacity duration-500" />

                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:border-primary shadow-2xl">
                          <Play className="w-6 h-6 md:w-8 md:h-8 text-white fill-white ml-1" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {hasMore && (
          <motion.div layout className="flex justify-center mt-16 md:mt-20">
            <button
              onClick={loadMore}
              className="group flex items-center gap-3 px-10 py-4 rounded-full bg-primary text-white font-bold text-lg tracking-wide shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1 active:scale-95 transition-all duration-300"
            >
              Load More Videos 
              <ChevronDown className="w-6 h-6 transition-transform group-hover:translate-y-1" />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}