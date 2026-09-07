"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Maximize2, X } from "lucide-react";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import NewsAvatar from "./NewsAvatar";
import ReadReceipt from "./ReadReceipt";
import NewsActions from "./NewsActions";
import { urlFor } from "../../../sanity/lib/sanity.image";
import { cn } from "@/utils/cn";

/** Collapsed bubble height, in px. Anything taller gets a "Read more". */
const CLAMP_HEIGHT = 240;

/**
 * Pinned locale + timezone so the server and browser render the same string.
 * The visitor's own locale differs from the build machine's and trips a
 * hydration mismatch.
 */
const timeFormatter = new Intl.DateTimeFormat("en-IN", {
  timeZone: "Asia/Kolkata",
  hour: "2-digit",
  minute: "2-digit",
  hour12: true,
});

/** Typography for Sanity rich text inside a chat bubble. */
const portableComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mb-2.5 text-[0.92rem] leading-[1.65] text-slate-700 last:mb-0">
        {children}
      </p>
    ),
    h1: ({ children }) => (
      <h3 className="mb-2 mt-3 font-heading text-lg font-bold text-secondary first:mt-0">
        {children}
      </h3>
    ),
    h2: ({ children }) => (
      <h3 className="mb-2 mt-3 font-heading text-base font-bold text-secondary first:mt-0">
        {children}
      </h3>
    ),
    h3: ({ children }) => (
      <h4 className="mb-1.5 mt-3 font-heading text-[0.95rem] font-bold text-secondary first:mt-0">
        {children}
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-3 border-l-[3px] border-primary/40 bg-black/[0.03] py-2 pl-3.5 pr-2 text-[0.92rem] italic text-slate-600">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-2.5 ml-1 space-y-1.5 last:mb-0">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="tnum mb-2.5 ml-5 list-decimal space-y-1.5 last:mb-0">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="relative pl-4 text-[0.92rem] leading-[1.6] text-slate-700 before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary/60">
        {children}
      </li>
    ),
    number: ({ children }) => (
      <li className="text-[0.92rem] leading-[1.6] text-slate-700">
        {children}
      </li>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-slate-900">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-primary underline decoration-primary/30 underline-offset-2 transition-colors hover:decoration-primary"
      >
        {children}
      </a>
    ),
  },
};

interface Props {
  news: any;
  /** First bubble of a day group shows the avatar; the rest are indented. */
  showAvatar?: boolean;
}

export default function NewsCard({ news, showAvatar = true }: Props) {
  const [expanded, setExpanded] = useState(false);
  const [needsClamp, setNeedsClamp] = useState(true);
  const [measured, setMeasured] = useState(false);
  const [fullHeight, setFullHeight] = useState(CLAMP_HEIGHT);
  const [zoomed, setZoomed] = useState(false);

  const contentRef = useRef<HTMLDivElement>(null);

  /**
   * Measure the real content height once, then decide whether this bubble is
   * long enough to be worth collapsing. Starting clamped avoids a flash of the
   * full article before the measurement lands.
   */
  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const measure = () => {
      const h = el.scrollHeight;
      setFullHeight(h);
      setNeedsClamp(h > CLAMP_HEIGHT + 48);
      setMeasured(true);
    };

    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [news?._id]);

  useEffect(() => {
    if (!zoomed) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setZoomed(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [zoomed]);

  const collapsed = needsClamp && !expanded;
  const published = news.publishedAt ? new Date(news.publishedAt) : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="flex items-start gap-2.5"
    >
      <NewsAvatar hidden={!showAvatar} />

      {/* ---- Bubble ---- */}
      <div
        className={cn(
          "relative w-full rounded-2xl bg-white p-3.5 shadow-[0_1px_2px_rgba(15,23,42,0.06),0_8px_22px_-16px_rgba(15,23,42,0.4)] sm:p-4",
          showAvatar ? "rounded-tl-md bubble-tail" : "rounded-tl-2xl",
        )}
      >
        {/* Sender line — the WhatsApp group-name row */}
        {showAvatar && (
          <p className="mb-1 text-[0.72rem] font-bold tracking-wide text-primary">
            Payam E Insaniyat Forum
          </p>
        )}

        <h2 className="font-heading text-[1.05rem] font-bold leading-snug text-secondary sm:text-lg">
          {news.title}
        </h2>

        {/*
          The photo is shown whole — `contain` inside a tinted well — so
          portrait shots from the field are never cropped through.
        */}
        {news.mainImage && (
          <button
            type="button"
            onClick={() => setZoomed(true)}
            aria-label="Open image"
            className="group relative mt-3 block w-full overflow-hidden rounded-xl bg-slate-900/[0.06]"
          >
            <img
              src={urlFor(news.mainImage).width(1000).url()}
              alt={news.title}
              loading="lazy"
              className="mx-auto block max-h-[460px] w-auto max-w-full object-contain transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02]"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="absolute bottom-2.5 right-2.5 grid h-8 w-8 place-items-center rounded-full bg-black/45 text-white opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
              <Maximize2 className="h-4 w-4" />
            </span>
          </button>
        )}

        {/* ---- Body, collapsible ---- */}
        <motion.div
          initial={false}
          animate={{
            height: collapsed ? CLAMP_HEIGHT : measured ? fullHeight : "auto",
          }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "relative mt-3 overflow-hidden",
            collapsed && "clamp-veil",
          )}
        >
          <div ref={contentRef}>
            <PortableText value={news.body} components={portableComponents} />
          </div>
        </motion.div>

        {measured && needsClamp && (
          <button
            onClick={() => setExpanded((v) => !v)}
            className="group mt-2 inline-flex items-center gap-1.5 rounded-full bg-[var(--boldtheme)] px-3.5 py-1.5 text-xs font-bold text-secondary transition-all duration-300 hover:bg-primary hover:text-white active:scale-95"
          >
            {expanded ? "Show less" : "Read more"}
            <ChevronDown
              className={cn(
                "h-3.5 w-3.5 transition-transform duration-300",
                expanded ? "rotate-180" : "group-hover:translate-y-0.5",
              )}
            />
          </button>
        )}

        {/* ---- Meta row ---- */}
        <div className="mt-3 flex items-center justify-between gap-3 border-t border-black/5 pt-2">
          <NewsActions title={news.title} />

          <span className="tnum flex shrink-0 items-center text-[0.7rem] font-medium text-slate-400">
            {published ? timeFormatter.format(published) : null}
            <ReadReceipt />
          </span>
        </div>
      </div>

      {/* ---- Image viewer ---- */}
      {zoomed && news.mainImage && (
        <div
          className="fixed inset-0 z-[7000] flex items-center justify-center bg-black/95 p-4 backdrop-blur-xl"
          onClick={() => setZoomed(false)}
        >
          <button
            onClick={() => setZoomed(false)}
            aria-label="Close image"
            className="absolute right-5 top-5 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/25 active:scale-90"
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src={urlFor(news.mainImage).width(1600).url()}
            alt={news.title}
            className="max-h-[88vh] max-w-full rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </motion.div>
  );
}
