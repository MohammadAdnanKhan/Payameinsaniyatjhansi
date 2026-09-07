"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Loader2, ChevronDown, CheckCheck } from "lucide-react";
import { client } from "../../../sanity/lib/sanity.client";
import { newsQuery } from "../../../sanity/lib/queries";
import NewsCard from "@/components/news/NewsCard";
import NewsSkeleton from "@/components/news/NewsSkeleton";

const PAGE_SIZE = 3;

/**
 * Dates are pinned to a fixed locale and timezone so the server and the
 * browser always produce the same string. Left to the visitor's own locale
 * they disagree and React throws a hydration error.
 */
const dayFormatter = new Intl.DateTimeFormat("en-IN", {
  timeZone: "Asia/Kolkata",
  day: "numeric",
  month: "long",
  year: "numeric",
});

/** Stable grouping key, identical on server and client. */
function absoluteDay(iso?: string) {
  if (!iso) return "Earlier";
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "Earlier";
  return dayFormatter.format(date);
}

/**
 * "Today" / "Yesterday" — client-only. This page is prerendered at build time,
 * so anything relative to "now" computed on the server would be frozen to the
 * build date. Comparing pre-formatted strings keeps it free of timezone maths.
 */
function relativeDay(absolute: string) {
  if (absolute === "Earlier") return absolute;
  if (absolute === dayFormatter.format(new Date())) return "Today";
  if (absolute === dayFormatter.format(new Date(Date.now() - 86_400_000)))
    return "Yesterday";
  return absolute;
}

export default function NewsFeed({ initialNews }: any) {
  const [news, setNews] = useState(initialNews);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(initialNews.length === PAGE_SIZE);

  /* Relative day names only appear once we are on the client. */
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  /**
   * Flatten the feed into render instructions: a date chip whenever the day
   * changes, and an avatar only on the first bubble under each chip. Grouping
   * keys off the absolute date so the markup structure is identical on both
   * sides of hydration — only the chip's wording upgrades afterwards.
   */
  const rows = useMemo(() => {
    let lastDay: string | null = null;

    return news.map((item: any) => {
      const absolute = absoluteDay(item.publishedAt);
      const isNewDay = absolute !== lastDay;
      lastDay = absolute;
      return { item, absolute, isNewDay };
    });
  }, [news]);

  const loadMore = async () => {
    setLoading(true);
    try {
      const start = page * PAGE_SIZE;
      const data = await client.fetch(newsQuery(start, start + PAGE_SIZE));

      if (data.length < PAGE_SIZE) setHasMore(false);

      setNews((prev: any) => [...prev, ...data]);
      setPage((prev) => prev + 1);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-3">
      {rows.map(({ item, absolute, isNewDay }: any) => (
        <div key={item._id} className="space-y-3">
          {isNewDay && (
            <div className="flex justify-center py-2">
              <span className="rounded-full bg-white/80 px-3.5 py-1.5 text-[0.7rem] font-bold uppercase tracking-wider text-slate-500 shadow-sm backdrop-blur-sm">
                {mounted ? relativeDay(absolute) : absolute}
              </span>
            </div>
          )}

          <NewsCard news={item} showAvatar={isNewDay} />
        </div>
      ))}

      {loading && (
        <div className="space-y-3 pt-2">
          <NewsSkeleton />
          <NewsSkeleton />
          <NewsSkeleton />
        </div>
      )}

      {/*
        Load-more styled as an incoming chat bubble rather than a button bar:
        the avatar column continues, and the "typing" dots hint that there is
        more of the conversation waiting.
      */}
      {hasMore && !loading && (
        <div className="flex items-start gap-2.5 pt-2">
          <div className="h-10 w-10 shrink-0 sm:h-11 sm:w-11" aria-hidden />

          <motion.button
            onClick={loadMore}
            whileTap={{ scale: 0.97 }}
            className="group relative flex items-center gap-3 overflow-hidden rounded-2xl rounded-tl-md bg-white py-3 pl-4 pr-5 text-left shadow-[0_1px_2px_rgba(15,23,42,0.06),0_8px_22px_-16px_rgba(15,23,42,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_1px_2px_rgba(15,23,42,0.06),0_16px_30px_-18px_var(--color-primary)]"
          >
            {/* Typing dots */}
            <span className="flex items-end gap-1 pb-0.5">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="h-1.5 w-1.5 rounded-full bg-primary/70"
                  style={{
                    animation: "typingDot 1.15s ease-in-out infinite",
                    animationDelay: `${i * 0.16}s`,
                  }}
                />
              ))}
            </span>

            <span className="flex flex-col">
              <span className="font-heading text-sm font-extrabold leading-tight text-secondary transition-colors duration-300 group-hover:text-primary">
                Load earlier updates
              </span>
              <span className="text-[0.7rem] font-medium text-slate-400">
                Tap to continue the story
              </span>
            </span>

            <ChevronDown className="ml-1 h-4 w-4 shrink-0 text-primary transition-transform duration-300 group-hover:translate-y-0.5" />
          </motion.button>
        </div>
      )}

      {loading && (
        <p className="flex items-center justify-center gap-2 pt-2 text-xs font-medium text-slate-500">
          <Loader2 className="h-3.5 w-3.5 animate-spin" />
          Fetching updates…
        </p>
      )}

      {!hasMore && !loading && news.length > 0 && (
        <div className="flex justify-center pt-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-[0.72rem] font-semibold text-slate-500 backdrop-blur-sm">
            <CheckCheck className="h-3.5 w-3.5 text-primary" />
            You&apos;re all caught up
          </span>
        </div>
      )}
    </div>
  );
}
