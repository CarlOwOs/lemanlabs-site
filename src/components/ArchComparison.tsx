"use client";

import { useEffect, useRef, useState } from "react";

const linearModels = [
  { name: "Mamba Codestral", score: 47, type: "competitor" as const },
  { name: "Mamba Falcon", score: 70, type: "competitor" as const },
  { name: "Leman-0", score: 77.8, type: "ours" as const },
];

const transformerBaseline = {
  name: "Qwen-3 14B",
  score: 82.0,
  type: "transformer" as const,
};

const maxScore = 100;

export default function ArchComparison() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 px-6 bg-white" ref={sectionRef}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-orange-500 font-medium mb-4 uppercase tracking-wider text-sm">
            14B Scale
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-normal text-gray-900 mb-4">
            Best among{" "}
            <span className="gradient-text-warm">linear models</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Arch C benchmark at 14B scale. Leman-0 leads all linear models and
            closes the gap with full transformers.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-10 shadow-sm">
          {/* Linear models group */}
          <div className="mb-3">
            <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
              Linear Models
            </span>
          </div>

          <div className="space-y-4">
            {linearModels.map((model, i) => (
              <div key={model.name} className="flex items-center gap-4">
                <span
                  className={`text-sm w-36 shrink-0 ${
                    model.type === "ours"
                      ? "font-bold text-gray-900"
                      : "font-medium text-gray-500"
                  }`}
                >
                  {model.name}
                  {model.type === "ours" && (
                    <span className="text-orange-500 ml-1 text-xs">(Ours)</span>
                  )}
                </span>
                <div className="flex-1 bg-gray-100 rounded-full h-5 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-1000 ease-out ${
                      model.type === "ours"
                        ? "bg-gradient-to-r from-orange-400 to-orange-500"
                        : "bg-gray-300"
                    }`}
                    style={{
                      width: isVisible
                        ? `${(model.score / maxScore) * 100}%`
                        : "0%",
                      transitionDelay: `${i * 150}ms`,
                    }}
                  />
                </div>
                <span
                  className={`text-sm w-14 text-right tabular-nums ${
                    model.type === "ours"
                      ? "font-bold text-orange-600"
                      : "font-medium text-gray-500"
                  }`}
                >
                  {model.score}
                </span>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="my-6 flex items-center gap-3">
            <div className="flex-1 border-t border-dashed border-gray-200" />
            <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
              Transformer Baseline
            </span>
            <div className="flex-1 border-t border-dashed border-gray-200" />
          </div>

          {/* Transformer baseline */}
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-500 w-36 shrink-0">
              {transformerBaseline.name}
            </span>
            <div className="flex-1 bg-gray-100 rounded-full h-5 overflow-hidden">
              <div
                className="h-full rounded-full bg-blue-200 transition-all duration-1000 ease-out"
                style={{
                  width: isVisible
                    ? `${(transformerBaseline.score / maxScore) * 100}%`
                    : "0%",
                  transitionDelay: "450ms",
                }}
              />
            </div>
            <span className="text-sm font-medium text-blue-500 w-14 text-right tabular-nums">
              {transformerBaseline.score}
            </span>
          </div>

          {/* Gap callout */}
          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100">
              <svg
                className="w-4 h-4 text-orange-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
              <span className="text-sm font-medium text-orange-700">
                Only ~5% gap to full transformer — at a fraction of the cost
              </span>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-gray-400 mt-8">
          Arch C benchmark (14B parameter scale). Score % — higher is better.
        </p>
      </div>
    </section>
  );
}
