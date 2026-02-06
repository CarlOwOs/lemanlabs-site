export default function Hero() {
  return (
    <section className="pt-32 pb-0 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        {/* YC Badge - Hidden for now */}
        {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-8">
          <div className="w-5 h-5 rounded bg-orange-500 flex items-center justify-center">
            <span className="text-white text-xs font-bold">Y</span>
          </div>
          <span className="text-sm text-gray-700 font-medium">Backed by Y Combinator</span>
        </div> */}

        {/* Main headline - Serif font like Karumi */}
        <h1 className="font-serif text-5xl md:text-7xl font-normal text-gray-900 mb-6 leading-[1.1] tracking-tight">
          Don't let slow inference
          <br />
          hold you back—<span className="italic">ever again</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          The fastest AI inference API where developers get lightning-fast responses at unbeatable prices, instantly.
        </p>

        {/* CTA Button */}
        <a
          href="#"
          className="btn-primary text-lg"
        >
          Start Building
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      {/* Hero Image / Product Preview */}
      <div className="mt-16 relative">
        <div className="warm-gradient-bg pt-16 pb-32 -mx-6 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Main product mockup placeholder */}
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                {/* Window chrome */}
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-200">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                
                {/* Content placeholder */}
                <div className="p-8 bg-gradient-to-br from-orange-50 to-peach-100">
                  <div className="grid grid-cols-4 gap-4">
                    {/* Sidebar placeholder */}
                    <div className="col-span-1 space-y-3">
                      <div className="h-8 bg-white/60 rounded-lg" />
                      <div className="h-6 bg-white/40 rounded-lg w-3/4" />
                      <div className="h-6 bg-white/40 rounded-lg w-1/2" />
                      <div className="h-6 bg-white/40 rounded-lg w-2/3" />
                    </div>
                    
                    {/* Main content placeholder */}
                    <div className="col-span-3 space-y-4">
                      <div className="flex gap-4">
                        <div className="flex-1 h-24 bg-white/60 rounded-xl" />
                        <div className="flex-1 h-24 bg-white/60 rounded-xl" />
                        <div className="flex-1 h-24 bg-white/60 rounded-xl" />
                      </div>
                      
                      {/* API Response indicator */}
                      <div className="bg-white rounded-xl p-4 shadow-sm">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">
                            XXms
                          </div>
                          <span className="text-sm text-gray-500">Response time</span>
                        </div>
                        <div className="h-32 bg-gray-50 rounded-lg flex items-center justify-center">
                          <span className="text-gray-400 text-sm">[API Response Visualization]</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating card - right side */}
              <div className="absolute -right-4 top-1/4 bg-white rounded-xl shadow-lg border border-gray-200 p-4 w-48 hidden lg:block">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-200 to-peach-300" />
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">LATENCY</p>
                    <p className="text-sm font-semibold text-gray-900">&lt;XX ms</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500">Avg. response time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
