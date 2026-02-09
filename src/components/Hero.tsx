export default function Hero() {
  return (
    <section className="pt-32 pb-24 px-6">
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
          State-of-the-art linear models
          <br />
          —<span className="italic">without the cost</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Leman.zero delivers transformer-quality results with linear complexity. Memory efficient, blazing fast, and easy to integrate.
        </p>

        {/* CTA Button */}
        <a
          href="/docs"
          className="btn-primary text-lg"
        >
          Start Building
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>

    </section>
  );
}
