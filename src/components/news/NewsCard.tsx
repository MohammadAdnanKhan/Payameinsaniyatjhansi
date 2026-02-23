import NewsAvatar from "./NewsAvatar";
import ReadReceipt from "./ReadReceipt";
import NewsActions from "./NewsActions";
import { PortableText } from "@portabletext/react";
import { urlFor } from "../../../sanity/lib/sanity.image";
import { useState } from "react";
export default function NewsCard({ news }: any) {
  const [imgLoaded, setImgLoaded] = useState(false);
  return (
    <div className="flex gap-3 opacity-0 animate-fadeIn">
      <NewsAvatar />

      <div className="bg-[var(--boldtheme)] p-4 rounded-2xl shadow-md relative w-full">
        <h2 className="font-semibold text-[var(--color-secondary)] font-heading text-lg">
          {news.title}
        </h2>

        <p className="text-xs text-gray-500">
          {new Date(news.publishedAt).toLocaleDateString()}
        </p>

        {news.mainImage && (
          <div className="relative w-48 h-48 rounded-xl overflow-hidden my-3">
            <img
              src={urlFor(news.mainImage).width(400).url()}
              alt={news.title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105 active:scale-105"
            />
          </div>
        )}
        <div className="prose prose-sm">
          <PortableText value={news.body} />
        </div>

        <div className="flex items-center justify-end mt-2 text-xs text-gray-500">
          {new Date(news.publishedAt).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
          <ReadReceipt />
        </div>

        <NewsActions />
      </div>
    </div>
  );
}
