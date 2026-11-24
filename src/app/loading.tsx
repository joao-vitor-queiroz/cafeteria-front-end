export default function Loading() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8 h-8 w-48 animate-pulse rounded-md bg-stone-200 dark:bg-stone-800" />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="flex h-56 flex-col justify-between rounded-xl border border-stone-200 bg-white p-5 dark:border-stone-800 dark:bg-stone-900"
          >
            <div className="space-y-3">
              <div className="h-6 w-3/4 animate-pulse rounded bg-stone-200 dark:bg-stone-800" />
              <div className="h-4 w-full animate-pulse rounded bg-stone-100 dark:bg-stone-800" />
              <div className="h-4 w-2/3 animate-pulse rounded bg-stone-100 dark:bg-stone-800" />
            </div>
            <div className="flex items-center justify-between border-t border-stone-100 pt-4 dark:border-stone-800">
              <div className="h-6 w-20 animate-pulse rounded bg-stone-200 dark:bg-stone-800" />
              <div className="h-8 w-24 animate-pulse rounded bg-stone-200 dark:bg-stone-800" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
