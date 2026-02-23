"use client";
import { useState } from "react";
import { Heart, Share2 } from "lucide-react";

export default function NewsActions() {
  const [liked, setLiked] = useState(false);
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          text: "Check this out!",
          url: window.location.href,
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      await navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };
  return (
    <div className="flex items-center gap-4 mt-3 text-gray-600">
      <button
        onClick={() => setLiked(!liked)}
        className="flex items-center gap-1 hover:text-red-500 transition"
      >
        <Heart size={18} className={liked ? "fill-red-500 text-red-500" : ""} />
      </button>

      <button
        onClick={handleShare}
        className="flex items-center gap-1 hover:text-primary transition"
      >
        <Share2 size={18} />
      </button>
    </div>
  );
}
