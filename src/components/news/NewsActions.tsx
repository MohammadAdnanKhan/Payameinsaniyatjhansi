"use client";

import { useState } from "react";
import { Heart, Share2, Check } from "lucide-react";
import { cn } from "@/utils/cn";

interface Props {
  title?: string;
}

export default function NewsActions({ title }: Props) {
  const [liked, setLiked] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: title || document.title,
      text: title || "Check this out!",
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        /* user dismissed the sheet — nothing to do */
      }
      return;
    }

    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <div className="flex items-center gap-1.5">
      <button
        onClick={() => setLiked((v) => !v)}
        aria-pressed={liked}
        aria-label={liked ? "Remove like" : "Like this update"}
        className={cn(
          "group/like inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-300 active:scale-90",
          liked
            ? "bg-red-50 text-red-500"
            : "text-slate-500 hover:bg-black/5 hover:text-red-500",
        )}
      >
        <Heart
          size={15}
          className={cn(
            "transition-transform duration-300 group-hover/like:scale-110",
            liked && "fill-red-500 text-red-500",
          )}
        />
        {liked ? "Liked" : "Like"}
      </button>

      <button
        onClick={handleShare}
        aria-label="Share this update"
        className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-slate-500 transition-all duration-300 hover:bg-black/5 hover:text-primary active:scale-90"
      >
        {copied ? (
          <>
            <Check size={15} className="text-primary" />
            Copied
          </>
        ) : (
          <>
            <Share2 size={15} />
            Share
          </>
        )}
      </button>
    </div>
  );
}
