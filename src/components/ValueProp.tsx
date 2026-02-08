export default function ValueProp() {
  return (
    <section className="py-24 px-6 warm-gradient-bg">
      <div className="max-w-5xl mx-auto text-center">
        {/* Main headline with gradient */}
        <h2 className="font-serif text-4xl md:text-6xl font-normal text-gray-900 mb-6 leading-[1.1]">
          Outperforming the competition
          <br />
          with <span className="gradient-text-warm">linear efficiency.</span>
        </h2>
        
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16">
          Leman.zero achieves state-of-the-art results among linear models while using a fraction of the memory and compute of traditional transformers.
        </p>

        {/* Stats / Value cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Accuracy */}
          <div className="relative">
            <div className="card p-8">
              <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">#1</h3>
              <p className="text-gray-600">Best accuracy among linear models</p>
            </div>
          </div>

          {/* Training Efficiency */}
          <div className="relative">
            <div className="card p-8">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">1B</h3>
              <p className="text-gray-600">Tokens to train 14B model</p>
              <p className="text-sm text-gray-400 mt-2">Only 3,000 training steps</p>
            </div>
          </div>

          {/* Memory Efficient */}
          <div className="relative">
            <div className="card p-8">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">~5%</h3>
              <p className="text-gray-600">Within Qwen-14B accuracy</p>
              <p className="text-sm text-gray-400 mt-2">With far less memory usage</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
