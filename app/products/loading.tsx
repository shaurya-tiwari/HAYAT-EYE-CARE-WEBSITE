export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col bg-[--bg-base]">
      <main className="flex-1 pt-28 pb-20">
        <div className="container-custom px-5 md:px-8">
          {/* Back link */}
          <div className="h-4 w-24 shimmer rounded mb-8" />

          {/* Header */}
          <div className="flex items-center gap-3 mb-10">
            <div className="w-12 h-12 rounded-xl shimmer flex-shrink-0" />
            <div className="space-y-2">
              <div className="h-7 w-48 shimmer rounded" />
              <div className="h-3.5 w-28 shimmer rounded" />
            </div>
          </div>

          {/* Grid skeleton */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="rounded-2xl overflow-hidden">
                <div className="h-40 shimmer" />
                <div className="p-3 space-y-2">
                  <div className="h-2.5 w-12 shimmer rounded mx-auto" />
                  <div className="h-3.5 w-20 shimmer rounded mx-auto" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
