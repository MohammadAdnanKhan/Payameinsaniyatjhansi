export default function NewsSkeleton() {
  return (
    <div className="flex items-start gap-2.5">
      <div className="shimmer h-10 w-10 shrink-0 rounded-full bg-black/5 sm:h-11 sm:w-11" />

      <div className="w-full rounded-2xl rounded-tl-md bg-white p-4 shadow-[0_1px_2px_rgba(15,23,42,0.06)]">
        <div className="shimmer h-2.5 w-32 rounded-full bg-black/5" />
        <div className="shimmer mt-3 h-4 w-3/5 rounded-full bg-black/[0.07]" />
        <div className="shimmer mt-3 h-40 w-full rounded-xl bg-black/5" />

        <div className="mt-3 space-y-2">
          <div className="shimmer h-2.5 w-full rounded-full bg-black/5" />
          <div className="shimmer h-2.5 w-11/12 rounded-full bg-black/5" />
          <div className="shimmer h-2.5 w-4/6 rounded-full bg-black/5" />
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-black/5 pt-2.5">
          <div className="shimmer h-2.5 w-20 rounded-full bg-black/5" />
          <div className="shimmer h-2.5 w-10 rounded-full bg-black/5" />
        </div>
      </div>
    </div>
  );
}
