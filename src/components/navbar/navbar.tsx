"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faBars,
  faXmark,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { INavItem } from "@/types/types";

interface FloatingNavbarProps {
  navItems: INavItem[];
  className?: string;
  audioSrc?: string;
}

const FloatingNavbar = ({
  navItems,
  className,
  audioSrc,
}: FloatingNavbarProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Listen for the Support Modal opening/closing
  useEffect(() => {
    const handleSupportToggle = (e: Event) => {
      const customEvent = e as CustomEvent<boolean>;
      setIsSupportModalOpen(customEvent.detail);

      // Auto-close mobile menu if support modal opens
      if (customEvent.detail) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("supportModalToggle", handleSupportToggle);
    return () =>
      window.removeEventListener("supportModalToggle", handleSupportToggle);
  }, []);

  // Audio Setup
  useEffect(() => {
    if (!audioSrc) return;
    audioRef.current = new Audio(audioSrc);
    audioRef.current.loop = true;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [audioSrc]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.error("Audio playback failed:", error);
          setIsPlaying(false);
        });
      }
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  return (
    <>
      {/* DESKTOP NAVBAR */}
      <AnimatePresence mode="wait">
        {!isSupportModalOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className={cn(
              "floating-navbar hidden lg:block fixed top-5 left-1/2 -translate-x-1/2 z-[5000]",
              "rounded-full px-8 py-4 backdrop-blur-xl",
              "border border-[var(--color-primary)]/20",
              "bg-[var(--theme)]/60",
              "shadow-[0_8px_30px_rgba(0,0,0,0.08)]",
              className,
            )}
          >
            <div className="flex items-center gap-8">
              {navItems?.map((navItem) => (
                <Link
                  key={navItem.name}
                  href={navItem.link}
                  aria-label={navItem.name}
                  className="
                    group flex items-center justify-center h-11
                    font-heading font-extrabold tracking-tight text-[var(--foreground)]
                    transition-all duration-300 hover:text-[var(--color-primary)]
                    active:scale-95
                  "
                >
                  <span className="relative flex items-center overflow-hidden">
                    <span className="relative z-10 transition-transform duration-300 group-hover:-translate-y-full text-[0.98rem] xl:text-[1.08rem]">
                      {navItem.name}
                    </span>
                    <span className="absolute inset-0 flex items-center translate-y-full text-[var(--color-primary)] transition-transform duration-300 group-hover:translate-y-0 text-[0.98rem] xl:text-[1.08rem]">
                      {navItem.name}
                    </span>
                  </span>
                </Link>
              ))}

              {audioSrc && (
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  aria-label={isPlaying ? "Pause music" : "Play music"}
                  className="
                    flex h-11 w-11 items-center justify-center rounded-full
                    bg-[var(--color-primary)] text-white shadow-md
                    transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95
                  "
                >
                  <FontAwesomeIcon
                    icon={isPlaying ? faPause : faPlay}
                    className="text-sm"
                  />
                </button>
              )}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* MOBILE TRIGGER BUTTON */}
      <AnimatePresence mode="wait">
        {!isSupportModalOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed top-5 right-5 z-[6000] lg:hidden"
          >
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="
                h-12 w-12 rounded-full bg-[var(--color-primary)] text-white
                shadow-lg flex items-center justify-center backdrop-blur-xl
              "
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMenuOpen ? "close" : "menu"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} />
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MOBILE MENU DROPDOWN */}
      <AnimatePresence>
        {isMenuOpen && !isSupportModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[5999] lg:hidden"
            />

            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="
                fixed top-20 right-5 w-64 rounded-2xl
                bg-[var(--theme)]/95 backdrop-blur-2xl
                border border-[var(--color-primary)]/20 shadow-2xl
                p-4 space-y-2 z-[6000] lg:hidden
              "
            >
              {navItems?.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.link}
                    onClick={() => setIsMenuOpen(false)}
                    className="
                      flex items-center gap-4 px-4 py-3 rounded-xl
                      hover:bg-[var(--color-primary)]/10
                      transition-all duration-300 active:scale-95 group
                    "
                  >
                    <FontAwesomeIcon
                      icon={item.icon}
                      className="
                        text-lg text-[var(--color-primary)]
                        transition-transform duration-300 group-hover:scale-110
                      "
                    />
                    <span className="font-heading text-[1.02rem] font-extrabold tracking-tight text-[var(--foreground)]">
                      {item.name}
                    </span>
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
              >
                <button
                  onClick={() => {
                    window.dispatchEvent(new CustomEvent("supportModalToggle", { detail: true }));
                    setIsMenuOpen(false);
                  }}
                  className="
    flex items-center gap-4 px-4 py-3 rounded-xl
    bg-[var(--color-primary)]/10 text-[var(--color-primary)]
    font-heading text-[1.02rem] font-extrabold tracking-tight transition-all duration-300
    hover:bg-[var(--color-primary)] hover:text-white
    active:scale-95 group w-full text-left
  "
                >
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                  Support
                </button>
              </motion.div>

              {audioSrc && (
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="
                    w-full mt-2 flex items-center justify-center gap-2 py-3 rounded-xl
                    bg-[var(--color-primary)] text-white shadow-md
                    transition-all duration-300 hover:scale-[1.02] active:scale-95
                  "
                >
                  <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
                  {isPlaying ? "Pause Audio" : "Play Audio"}
                </button>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingNavbar;
