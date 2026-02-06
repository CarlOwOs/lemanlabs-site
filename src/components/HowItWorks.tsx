export default function HowItWorks() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Code example */}
          <div className="order-2 lg:order-1">
            <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-800 border-b border-gray-700">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-4 text-sm text-gray-400">example.ts</span>
              </div>

              {/* Code */}
              <pre className="p-6 overflow-x-auto text-sm">
                <code className="text-gray-300 leading-relaxed">
                  <span className="text-purple-400">import</span>{" "}
                  <span className="text-blue-300">OpenAI</span>{" "}
                  <span className="text-purple-400">from</span>{" "}
                  <span className="text-green-400">'openai'</span>;{"\n\n"}

                  <span className="text-gray-500">// Just change the baseURL</span>{"\n"}
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-300">client</span>{" "}
                  <span className="text-white">=</span>{" "}
                  <span className="text-purple-400">new</span>{" "}
                  <span className="text-yellow-300">OpenAI</span>
                  <span className="text-white">{"({"}</span>{"\n"}
                  {"  "}<span className="text-blue-300">baseURL</span>
                  <span className="text-white">:</span>{" "}
                  <span className="text-green-400">'https://api.lemanlabs.com/v1'</span>
                  <span className="text-white">,</span>{"\n"}
                  {"  "}<span className="text-blue-300">apiKey</span>
                  <span className="text-white">:</span>{" "}
                  <span className="text-blue-300">process</span>
                  <span className="text-white">.</span>
                  <span className="text-blue-300">env</span>
                  <span className="text-white">.</span>
                  <span className="text-blue-300">LEMANLABS_API_KEY</span>
                  <span className="text-white">,</span>{"\n"}
                  <span className="text-white">{"});"}</span>{"\n\n"}

                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-300">response</span>{" "}
                  <span className="text-white">=</span>{" "}
                  <span className="text-purple-400">await</span>{" "}
                  <span className="text-blue-300">client</span>
                  <span className="text-white">.</span>
                  <span className="text-blue-300">chat</span>
                  <span className="text-white">.</span>
                  <span className="text-blue-300">completions</span>
                  <span className="text-white">.</span>
                  <span className="text-yellow-300">create</span>
                  <span className="text-white">{"({"}</span>{"\n"}
                  {"  "}<span className="text-blue-300">model</span>
                  <span className="text-white">:</span>{" "}
                  <span className="text-green-400">'leman-fast'</span>
                  <span className="text-white">,</span>{"\n"}
                  {"  "}<span className="text-blue-300">messages</span>
                  <span className="text-white">:</span>{" "}
                  <span className="text-white">[</span>{"\n"}
                  {"    "}
                  <span className="text-white">{"{ "}</span>
                  <span className="text-blue-300">role</span>
                  <span className="text-white">:</span>{" "}
                  <span className="text-green-400">'user'</span>
                  <span className="text-white">,</span>{" "}
                  <span className="text-blue-300">content</span>
                  <span className="text-white">:</span>{" "}
                  <span className="text-green-400">'Hello!'</span>
                  <span className="text-white">{" }"}</span>{"\n"}
                  {"  "}<span className="text-white">],</span>{"\n"}
                  <span className="text-white">{"});"}</span>
                </code>
              </pre>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2">
            <p className="text-orange-500 font-medium mb-4 uppercase tracking-wider text-sm">Simple Integration</p>
            <h2 className="font-serif text-4xl md:text-5xl font-normal text-gray-900 mb-6 leading-tight">
              One line of code to switch
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our API is fully compatible with OpenAI's SDK. Just change the base URL and you're ready. No rewrites, no migrations, no headaches.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "OpenAI SDK compatible",
                "Streaming support",
                "Function calling",
                "JSON mode",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <a href="#" className="btn-secondary">
              View Documentation
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
