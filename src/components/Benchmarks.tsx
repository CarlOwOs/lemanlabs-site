export default function Benchmarks() {
  const benchmarks = [
    { name: "SWDE", leman0: 70, gdn: 68, mamba2: 65 },
    { name: "FDA", leman0: 63, gdn: 57, mamba2: 58 },
    { name: "SQUAD", leman0: 46, gdn: 40, mamba2: 33 },
  ];

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-orange-500 font-medium mb-4 uppercase tracking-wider text-sm">
            Benchmarks
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-normal text-gray-900 mb-4">
            Leman.zero vs. the competition
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            1B model performance on standard benchmarks. Higher is better.
          </p>
        </div>

        {/* Benchmark comparison */}
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
          {/* Header */}
          <div className="grid grid-cols-4 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-200">
            <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">
              Benchmark
            </div>
            <div className="text-sm font-medium text-orange-500 uppercase tracking-wider text-center">
              Leman.zero
            </div>
            <div className="text-sm font-medium text-gray-400 uppercase tracking-wider text-center">
              GDN
            </div>
            <div className="text-sm font-medium text-gray-400 uppercase tracking-wider text-center">
              Mamba2
            </div>
          </div>

          {/* Rows */}
          {benchmarks.map((benchmark, i) => (
            <div
              key={benchmark.name}
              className={`grid grid-cols-4 gap-4 px-6 py-5 ${
                i !== benchmarks.length - 1 ? "border-b border-gray-100" : ""
              }`}
            >
              <div className="font-medium text-gray-900">{benchmark.name}</div>
              
              {/* Leman.zero - highlighted */}
              <div className="text-center">
                <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-orange-100 text-orange-700 font-bold">
                  {benchmark.leman0}
                </span>
              </div>
              
              {/* GDN */}
              <div className="text-center">
                <span className="text-gray-500 font-medium">{benchmark.gdn}</span>
              </div>
              
              {/* Mamba2 */}
              <div className="text-center">
                <span className="text-gray-500 font-medium">{benchmark.mamba2}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Visual bar comparison */}
        <div className="mt-12 space-y-6">
          {benchmarks.map((benchmark) => {
            const max = Math.max(benchmark.leman0, benchmark.gdn, benchmark.mamba2);
            return (
              <div key={`bar-${benchmark.name}`} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">{benchmark.name}</span>
                </div>
                <div className="space-y-2">
                  {/* Leman.zero bar */}
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-gray-500 w-16">Leman.zero</span>
                    <div className="flex-1 bg-gray-100 rounded-full h-3 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-orange-400 to-orange-500 rounded-full transition-all duration-500"
                        style={{ width: `${(benchmark.leman0 / max) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm font-bold text-orange-600 w-8">{benchmark.leman0}</span>
                  </div>
                  
                  {/* GDN bar */}
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-gray-500 w-16">GDN</span>
                    <div className="flex-1 bg-gray-100 rounded-full h-3 overflow-hidden">
                      <div
                        className="h-full bg-gray-300 rounded-full transition-all duration-500"
                        style={{ width: `${(benchmark.gdn / max) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-500 w-8">{benchmark.gdn}</span>
                  </div>
                  
                  {/* Mamba2 bar */}
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-gray-500 w-16">Mamba2</span>
                    <div className="flex-1 bg-gray-100 rounded-full h-3 overflow-hidden">
                      <div
                        className="h-full bg-gray-300 rounded-full transition-all duration-500"
                        style={{ width: `${(benchmark.mamba2 / max) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-500 w-8">{benchmark.mamba2}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note */}
        <p className="text-center text-sm text-gray-400 mt-8">
          Results from 1B parameter models. See our documentation for full benchmark details.
        </p>
      </div>
    </section>
  );
}
