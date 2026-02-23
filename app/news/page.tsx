import { client } from "../../sanity/lib/sanity.client"
import { newsQuery } from "../../sanity/lib/queries"
import NewsFeed from "@/components/news/NewsFeed"

const PAGE_SIZE = 3

async function getInitialNews() {
  return client.fetch(newsQuery(0, PAGE_SIZE))
}

export default async function NewsPage() {
  const initialNews = await getInitialNews()

  return (
    <main className="min-h-screen bg-theme py-10 px-4">
      <div className="max-w-2xl mx-auto space-y-6">
        <NewsFeed initialNews={initialNews} />
      </div>
    </main>
  )
}