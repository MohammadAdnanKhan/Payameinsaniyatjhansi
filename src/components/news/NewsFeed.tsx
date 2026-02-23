"use client";
import { client } from "../../../sanity/lib/sanity.client";
import { newsQuery } from "../../../sanity/lib/queries";
import NewsCard from "@/components/news/NewsCard";
import { useEffect, useState } from "react";
import NewsSkeleton from "@/components/news/NewsSkeleton";

const PAGE_SIZE = 3;

export default function NewsFeed({ initialNews }: any) {
  const [news, setNews] = useState(initialNews);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(initialNews.length === PAGE_SIZE);

  const loadMore = async () => {
    setLoading(true);

    const start = page * PAGE_SIZE;
    const end = start + PAGE_SIZE;

    const data = await client.fetch(newsQuery(start, end));

    if (data.length < PAGE_SIZE) {
      setHasMore(false);
    }

    setNews((prev: any) => [...prev, ...data]);
    setPage((prev) => prev + 1);
    setLoading(false);
  };

  return (
    <>
      {news.map((item: any) => (
        <NewsCard key={item._id} news={item} />
      ))}

      {loading && (
        <>
          <NewsSkeleton />
          <NewsSkeleton />
          <NewsSkeleton />
        </>
      )}

      {hasMore && !loading && (
        <div className="flex justify-center mt-6">
          <button
            onClick={loadMore}
            className="bg-primary hover:bg-primary-hover text-white px-6 py-2 rounded-full transition duration-300 shadow-md"
          >
            Show More
          </button>
        </div>
      )}
    </>
  );
}
