export default function NewsSkeleton() {
  return (
    <div className="flex gap-3 animate-pulse">
      <div className="w-12 h-12 rounded-full bg-gray-300" />
      <div className="bg-white p-4 rounded-2xl shadow-md w-full space-y-3">
        <div className="h-4 bg-gray-300 rounded w-1/3" />
        <div className="h-3 bg-gray-200 rounded w-1/4" />
        <div className="h-40 bg-gray-200 rounded-xl w-48" />
        <div className="h-3 bg-gray-200 rounded w-full" />
        <div className="h-3 bg-gray-200 rounded w-5/6" />
      </div>
    </div>
  )
}